import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ChevronUp,
  Phone,
  Mail,
  Instagram,
  Linkedin,
  Github,
} from "lucide-react";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import ProjectGallery from "./ProjectGallery";
import BioSection from "./BioSection";

interface PortfolioLayoutProps {
  children?: React.ReactNode;
}

const PortfolioLayout: React.FC<PortfolioLayoutProps> = ({ children }) => {
  const [activeSection, setActiveSection] = useState("hero");
  const sectionRefs = {
    hero: useRef<HTMLDivElement>(null),
    bio: useRef<HTMLDivElement>(null),
    machineLearning: useRef<HTMLDivElement>(null),
    fullStack: useRef<HTMLDivElement>(null),
    finance: useRef<HTMLDivElement>(null),
    workExperience: useRef<HTMLDivElement>(null),
    contact: useRef<HTMLDivElement>(null),
  };

  const scrollToSection = (section: string) => {
    const ref = sectionRefs[section as keyof typeof sectionRefs];
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
      setActiveSection(section);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;

      Object.entries(sectionRefs).forEach(([section, ref]) => {
        if (ref.current) {
          const offsetTop = ref.current.offsetTop;
          const offsetHeight = ref.current.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "hero", label: "Home" },
    { id: "bio", label: "About Me" },
    { id: "workExperience", label: "Work Experience" },
    { id: "machineLearning", label: "Machine Learning" },
    { id: "fullStack", label: "Full Stack" },
    { id: "finance", label: "Finance" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Fixed Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm py-4 px-6">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-2">
          {navItems.map((item) => (
            <Button
              key={item.id}
              variant={activeSection === item.id ? "secondary" : "outline"}
              className="rounded-full text-sm"
              onClick={() => scrollToSection(item.id)}
            >
              {item.label}
            </Button>
          ))}
        </div>
      </nav>

      {/* Hero Section */}
      <section
        ref={sectionRefs.hero}
        className="min-h-screen pt-24 pb-16 px-6 flex flex-col justify-center items-center bg-black"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <div className="inline-block rounded-full bg-white/10 px-4 py-1 mb-4">
            <span className="text-white/80">2025</span>
          </div>

          <h2 className="text-7xl md:text-9xl font-serif font-bold tracking-tighter mb-6 text-white/90">
            PORTFOLIO
          </h2>

          <h1 className="text-xl md:text-2xl font-light italic mb-2 text-white/70">
            Arnav Harshit
          </h1>

          <h3 className="text-xl md:text-2xl font-light italic mb-8 text-white/70">
            Full Stack Developer & ML Engineer
          </h3>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <Button
              variant="outline"
              className="rounded-full border-white/20 hover:bg-white/10 text-black bg-white hover:text-white"
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/arnav-harshit-681bb4289",
                  "_blank",
                )
              }
            >
              Follow
            </Button>
            <Button
              variant="outline"
              className="rounded-full border-white/20 hover:bg-white/10 text-black bg-white hover:text-white"
              onClick={() =>
                window.open("mailto:arnavh23@iitk.ac.in", "_blank")
              }
            >
              Message
            </Button>
            <Button
              variant="outline"
              className="rounded-full border-white/20 hover:bg-white/10 text-black bg-white hover:text-white"
              onClick={() => {
                if (navigator.share) {
                  navigator.share({
                    title: "Arnav Harshit Portfolio",
                    text: "Check out Arnav Harshit's portfolio - Full Stack Developer & ML Engineer",
                    url: window.location.href,
                  });
                } else {
                  navigator.clipboard.writeText(window.location.href);
                  alert("Portfolio link copied to clipboard!");
                }
              }}
            >
              Share
            </Button>
            <Button
              variant="outline"
              className="rounded-full border-white/20 hover:bg-white/10 text-black bg-white hover:text-white"
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/arnav-harshit-681bb4289",
                  "_blank",
                )
              }
            >
              Appreciate
            </Button>
          </div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="mt-16 cursor-pointer"
            onClick={() => scrollToSection("bio")}
          >
            <ChevronUp className="rotate-180 w-8 h-8 mx-auto text-white/50" />
          </motion.div>
        </motion.div>
      </section>

      {/* Bio Section */}
      <section ref={sectionRefs.bio} className="py-16 px-6 bg-black">
        <BioSection />
      </section>

      {/* Work Experience Section */}
      <section ref={sectionRefs.workExperience} className="py-16 px-6 bg-black">
        <ProjectGallery
          title="WORK EXPERIENCE"
          subtitle="Professional Journey"
          projects={[
            {
              id: 1,
              image:
                "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&q=80",
              title: "Backend Intern – Research & Product Development",
              description:
                "OpusLeaf Technologies (Jun'25 – Present) - Designed and implemented modular backend service to aggregate vulnerability data.",
              category: "Work Experience",
            },
            {
              id: 2,
              image:
                "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80",
              title: "R&D Intern – Decentralized Communication App",
              description:
                "Invictron Systems (Jun'25 – Present) - Built WhatsApp-style Android app with Bluetooth/Wi-Fi chat capabilities.",
              category: "Work Experience",
            },
          ]}
        />
      </section>

      {/* Machine Learning Section */}
      <section
        ref={sectionRefs.machineLearning}
        className="py-16 px-6 bg-black"
      >
        <ProjectGallery
          title="MACHINE LEARNING"
          subtitle="Projects"
          projects={[
            {
              id: 1,
              image:
                "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
              title:
                "Small-World Properties in Graphs for Enhanced GCN Performance",
              description:
                "Research project exploring small-world graph properties to enhance Graph Convolutional Network performance.",
              category: "Machine Learning",
            },
            {
              id: 2,
              image:
                "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&q=80",
              title: "Graph Neural Networks Research",
              description:
                "Advanced research in Graph Neural Networks focusing on improving model efficiency and accuracy.",
              category: "Machine Learning",
            },
            {
              id: 3,
              image:
                "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&q=80",
              title: "Deep Learning with PyTorch",
              description:
                "Implementation of various deep learning models using PyTorch for computer vision and NLP tasks.",
              category: "Machine Learning",
            },
          ]}
        />
      </section>

      {/* Full Stack Section */}
      <section ref={sectionRefs.fullStack} className="py-16 px-6 bg-black">
        <ProjectGallery
          title="FULL STACK DEVELOPMENT"
          subtitle="Projects"
          projects={[
            {
              id: 1,
              image:
                "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
              title: "Backend Service for Vulnerability Data Aggregation",
              description:
                "Modular backend service built with Python to aggregate vulnerability data from multiple security tools.",
              category: "Full Stack Development",
            },
            {
              id: 2,
              image:
                "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80",
              title: "Decentralized Communication App",
              description:
                "WhatsApp-style Android app with Bluetooth/Wi-Fi chat, device discovery, and offline maps.",
              category: "Full Stack Development",
            },
            {
              id: 3,
              image:
                "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=800&q=80",
              title: "Data Pipeline Architecture",
              description:
                "Scalable data pipeline built with Python and SQL for processing and analyzing large datasets.",
              category: "Full Stack Development",
            },
            {
              id: 4,
              image:
                "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
              title: "API Integration & Development",
              description:
                "RESTful API development and third-party API integrations using Python Flask/FastAPI.",
              category: "Full Stack Development",
            },
          ]}
        />
      </section>

      {/* Finance Section */}
      <section ref={sectionRefs.finance} className="py-16 px-6 bg-black">
        <ProjectGallery
          title="FINANCE & FINTECH"
          subtitle="Projects"
          projects={[
            {
              id: 1,
              image:
                "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
              title: "Rebalance AI - RL-based Portfolio Management",
              description:
                "Reinforcement Learning-based portfolio management system for automated investment rebalancing.",
              category: "Finance",
            },
            {
              id: 2,
              image:
                "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=800&q=80",
              title: "Financial Data Analysis",
              description:
                "Comprehensive financial data analysis using Python and machine learning for market prediction.",
              category: "Finance",
            },
            {
              id: 3,
              image:
                "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
              title: "Algorithmic Trading System",
              description:
                "Automated trading system with backtesting capabilities and real-time market data integration.",
              category: "Finance",
            },
          ]}
        />
      </section>

      {/* Contact Section */}
      <section ref={sectionRefs.contact} className="py-16 px-6 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-6xl md:text-8xl font-serif font-bold tracking-tighter mb-8 text-white/90">
              THANKS FOR
              <br />
              VISITING !!
            </h2>

            <div className="inline-block rounded-full bg-white/10 px-6 py-2 mb-12">
              <span className="text-white/80 italic">
                Don't forget to contact me, Hope to see you later !
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto mb-12">
              <a
                href="tel:+918955269289"
                className="flex items-center justify-center gap-3 bg-white/5 rounded-full py-3 px-6 hover:bg-white/10 transition-colors"
              >
                <Phone className="w-5 h-5 text-white/70" />
                <span>Phone</span>
              </a>

              <a
                href="mailto:arnavh23@iitk.ac.in"
                className="flex items-center justify-center gap-3 bg-white/5 rounded-full py-3 px-6 hover:bg-white/10 transition-colors"
              >
                <Mail className="w-5 h-5 text-white/70" />
                <span>Email</span>
              </a>

              <a
                href="https://github.com/ArnavHarshit"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-white/5 rounded-full py-3 px-6 hover:bg-white/10 transition-colors"
              >
                <Github className="w-5 h-5 text-white/70" />
                <span>GitHub</span>
              </a>

              <a
                href="https://linkedin.com/in/arnav-harshit"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-white/5 rounded-full py-3 px-6 hover:bg-white/10 transition-colors"
              >
                <Linkedin className="w-5 h-5 text-white/70" />
                <span>LinkedIn</span>
              </a>
            </div>

            <div className="flex justify-center mb-8">
              <div className="bg-white/5 p-6 rounded-xl">
                <img
                  src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://drive.google.com/file/d/10Ay9bRBk6D7s1zzXvK9gnsLESx7ZCbyc/view?usp=sharing"
                  alt="QR Code"
                  className="w-32 h-32"
                />
                <p className="mt-2 text-sm text-white/60">Scan to view CV</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-black/90 border-t border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="text-white/50 text-sm mb-4 md:mb-0">
            © 2025 Arnav Harshit. All rights reserved.
          </div>

          <div className="flex gap-4">
            <a
              href="https://www.instagram.com/i_m_arnavharshit?igsh=MTcydmlrcDRzYXBucw=="
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/50 hover:text-white transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/arnav-harshit-681bb4289"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/50 hover:text-white transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/ArnavHarshit"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/50 hover:text-white transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>
      </footer>

      {/* Scroll to top button */}
      <motion.button
        className="fixed bottom-6 right-6 bg-white/10 hover:bg-white/20 rounded-full p-3 z-50"
        onClick={() => scrollToSection("hero")}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        whileHover={{ scale: 1.1 }}
      >
        <ChevronUp className="w-6 h-6" />
      </motion.button>
    </div>
  );
};

export default PortfolioLayout;
