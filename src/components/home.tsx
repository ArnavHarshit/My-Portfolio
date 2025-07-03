import React, { useState } from "react";
import { motion } from "framer-motion";
import PortfolioLayout from "./PortfolioLayout";
import ProjectGallery from "./ProjectGallery";
import BioSection from "./BioSection";
import ProjectModal from "./ProjectModal";

const Home = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const machineLearningProjects = [
    {
      id: 1,
      title: "Small-World Properties in Graphs for Enhanced GCN Performance",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
      description:
        "Research project exploring small-world graph properties to enhance Graph Convolutional Network performance using PyTorch and NetworkX.",
      category: "Machine Learning",
    },
    {
      id: 2,
      title: "Graph Neural Networks Research",
      image:
        "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&q=80",
      description:
        "Advanced research in Graph Neural Networks focusing on improving model efficiency and accuracy.",
      category: "Machine Learning",
    },
    {
      id: 3,
      title: "Deep Learning with PyTorch",
      image:
        "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&q=80",
      description:
        "Implementation of various deep learning models using PyTorch for computer vision and NLP tasks.",
      category: "Machine Learning",
    },
  ];

  const fullStackProjects = [
    {
      id: 1,
      title: "Backend Service for Vulnerability Data Aggregation",
      image:
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80",
      description:
        "Modular backend service built with Python to aggregate vulnerability data from multiple security tools with production-ready API integration.",
      category: "Full Stack Development",
    },
    {
      id: 2,
      title: "Decentralized Communication App",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&q=80",
      description:
        "WhatsApp-style Android app with Bluetooth/Wi-Fi chat, device discovery, and offline maps. Supports stable messaging across 10+ devices.",
      category: "Full Stack Development",
    },
    {
      id: 3,
      title: "Data Pipeline Architecture",
      image:
        "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=600&q=80",
      description:
        "Scalable data pipeline built with Python and SQL for processing and analyzing large datasets.",
      category: "Full Stack Development",
    },
    {
      id: 4,
      title: "API Integration & Development",
      image:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&q=80",
      description:
        "RESTful API development and third-party API integrations using Python Flask/FastAPI.",
      category: "Full Stack Development",
    },
  ];

  const financeProjects = [
    {
      id: 1,
      title: "Rebalance AI - RL-based Portfolio Management",
      image:
        "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&q=80",
      description:
        "Reinforcement Learning-based portfolio management system for automated investment rebalancing and optimization.",
      category: "Finance",
    },
    {
      id: 2,
      title: "Financial Data Analysis",
      image:
        "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=600&q=80",
      description:
        "Comprehensive financial data analysis using Python and machine learning for market prediction and risk assessment.",
      category: "Finance",
    },
    {
      id: 3,
      title: "Algorithmic Trading System",
      image:
        "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&q=80",
      description:
        "Automated trading system with backtesting capabilities and real-time market data integration.",
      category: "Finance",
    },
  ];

  const workExperience = [
    {
      id: 1,
      title: "Backend Intern – Research & Product Development",
      company: "OpusLeaf Technologies",
      period: "Jun'25 – Present",
      image:
        "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&q=80",
      description:
        "Designed and implemented modular backend service to aggregate vulnerability data from security tools. Built production-ready data pipeline with API integration.",
      category: "Work Experience",
    },
    {
      id: 2,
      title: "R&D Intern – Decentralized Communication App",
      company: "Invictron Systems",
      period: "Jun'25 – Present",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&q=80",
      description:
        "Built WhatsApp-style Android app with Bluetooth/Wi-Fi chat, device discovery, and offline maps. Achieved stable messaging across 10+ devices.",
      category: "Work Experience",
    },
  ];

  const handleProjectClick = (project, category) => {
    setSelectedProject({ ...project, category });
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  return (
    <div className="bg-black text-white min-h-screen">
      <PortfolioLayout
        activeSection={activeSection}
        onSectionChange={handleSectionChange}
      >
        <section id="bio" className="min-h-screen py-20">
          <BioSection />
        </section>

        <section id="machine-learning" className="min-h-screen py-20">
          <ProjectGallery
            title="MACHINE LEARNING"
            subtitle="Projects"
            projects={machineLearningProjects}
            onProjectClick={(project) =>
              handleProjectClick(project, "machine-learning")
            }
          />
        </section>

        <section id="full-stack" className="min-h-screen py-20">
          <ProjectGallery
            title="FULL STACK DEVELOPMENT"
            subtitle="Projects"
            projects={fullStackProjects}
            onProjectClick={(project) =>
              handleProjectClick(project, "full-stack")
            }
          />
        </section>

        <section id="finance" className="min-h-screen py-20">
          <ProjectGallery
            title="FINANCE & FINTECH"
            subtitle="Projects"
            projects={financeProjects}
            onProjectClick={(project) => handleProjectClick(project, "finance")}
          />
        </section>

        <section id="work-experience" className="min-h-screen py-20">
          <ProjectGallery
            title="WORK EXPERIENCE"
            subtitle="Professional Journey"
            projects={workExperience}
            onProjectClick={(project) =>
              handleProjectClick(project, "work-experience")
            }
          />
        </section>

        <section
          id="contact"
          className="min-h-screen py-20 flex flex-col items-center justify-center bg-black"
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto px-4"
          >
            <h2 className="text-7xl md:text-9xl font-serif text-cream-100 mb-6">
              THANKS FOR VISITING !!
            </h2>
            <p className="text-xl italic mb-12">
              Don't forget to contact me, Hope to see you later !
            </p>

            <div className="flex flex-col md:flex-row justify-center items-center gap-8 mt-12">
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-cream-100/20 p-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-cream-100"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <span className="text-cream-100 bg-cream-100/10 px-4 py-2 rounded-full">
                  +91 8955269289
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="rounded-full bg-cream-100/20 p-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-cream-100"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                  </svg>
                </div>
                <span className="text-cream-100 bg-cream-100/10 px-4 py-2 rounded-full">
                  arnavh23@iitk.ac.in
                </span>
              </div>
            </div>
          </motion.div>
        </section>
      </PortfolioLayout>

      {isModalOpen && selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={handleCloseModal}
          isOpen={isModalOpen}
        />
      )}
    </div>
  );
};

export default Home;
