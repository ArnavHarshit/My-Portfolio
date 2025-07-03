import React from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface SkillRating {
  name: string;
  level: number; // 1-5
}

interface PersonalSkill {
  name: string;
}

interface Education {
  year: string;
  institution: string;
  degree: string;
}

interface Experience {
  year: string;
  company: string;
  role: string;
  description?: string;
}

interface BioSectionProps {
  name?: string;
  title?: string;
  about?: string;
  profileImage?: string;
  skills?: SkillRating[];
  personalSkills?: PersonalSkill[];
  education?: Education[];
  experience?: Experience[];
}

const BioSection: React.FC<BioSectionProps> = ({
  name = "Arnav Harshit",
  title = "Full Stack Developer & ML Engineer",
  about = "I'm Arnav Harshit, a Junior Undergraduate in Chemical Engineering at IIT Kanpur with a passion for backend development and machine learning. I specialize in building scalable systems, data pipelines, and AI-driven solutions. My experience spans from developing modular backend services for security tools to creating decentralized communication apps and implementing advanced graph neural networks for enhanced performance.",
  profileImage = "/profile-photo.jpg",
  skills = [
    { name: "PYTHON", level: 5 },
    { name: "C/C++", level: 5 },
    { name: "JAVASCRIPT", level: 4 },
    { name: "SQL", level: 5 },
    { name: "PYTORCH", level: 5 },
    { name: "TENSORFLOW", level: 4 },
  ],
  personalSkills = [
    { name: "Machine Learning" },
    { name: "Backend Development" },
    { name: "Data Analysis" },
    { name: "Problem Solving" },
    { name: "Research" },
    { name: "Team Leadership" },
    { name: "Project Management" },
  ],
  education = [
    {
      year: "2023 - Present",
      institution: "Indian Institute of Technology Kanpur",
      degree: "B.Tech Chemical Engineering (CPI: 7.1/10.0)",
    },
    {
      year: "2023",
      institution: "BSN Academy, Sr. Sec School, Kota",
      degree: "Class XII (CBSE) - 90.6%",
    },
    {
      year: "2021",
      institution: "BSN Academy, Sr. Sec School, Kota",
      degree: "Class X (CBSE) - 94.8%",
    },
  ],
  experience = [
    {
      year: "Jun'25 – Present",
      company: "OpusLeaf Technologies",
      role: "Backend Intern – Research & Product Development",
      description:
        "Designed and implemented modular backend service to aggregate vulnerability data from security tools. Built production-ready data pipeline with API integration.",
    },
    {
      year: "Jun'25 – Present",
      company: "Invictron Systems",
      role: "R&D Intern – Decentralized Communication App",
      description:
        "Built WhatsApp-style Android app with Bluetooth/Wi-Fi chat, device discovery, and offline maps. Achieved stable messaging across 10+ devices.",
    },
  ],
}) => {
  // Function to render skill dots
  const renderSkillDots = (level: number) => {
    return (
      <div className="flex">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className={`w-2 h-2 rounded-full mx-0.5 ${i < level ? "bg-yellow-400" : "bg-gray-600"}`}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="bg-black text-white p-6 md:p-10 w-full">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Column - Profile and About */}
          <div className="md:col-span-1">
            <Card className="bg-zinc-900 border-zinc-800 overflow-hidden rounded-xl">
              <div className="relative aspect-square overflow-hidden rounded-t-xl">
                <img
                  src={
                    profileImage ||
                    "https://images.unsplash.com/photo-1531891570158-e71b35a485bc?w=800&q=80"
                  }
                  alt={name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-6">
                    <h2 className="text-2xl font-serif uppercase tracking-wider text-white">
                      {name}
                    </h2>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <Badge
                        variant="outline"
                        className="bg-black/50 text-white border-zinc-700"
                      >
                        Full Stack Developer
                      </Badge>
                      <Badge
                        variant="outline"
                        className="bg-black/50 text-white border-zinc-700"
                      >
                        ML Engineer
                      </Badge>
                      <Badge
                        variant="outline"
                        className="bg-black/50 text-white border-zinc-700"
                      >
                        Research
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-serif mb-4 uppercase tracking-wide text-white">
                  ABOUT ME
                </h3>
                <p className="text-white text-sm leading-relaxed">{about}</p>
                <p className="text-white text-sm mt-4">
                  Let's collaborate to foster our development together.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Education, Experience, Skills */}
          <div className="md:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Education & Experience */}
              <div>
                <Card className="bg-zinc-900 border-zinc-800 rounded-xl h-full">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-serif mb-6 uppercase tracking-wide text-white">
                      EDUCATION
                    </h3>
                    <div className="space-y-6">
                      {education.map((edu, index) => (
                        <div
                          key={index}
                          className="relative pl-8 border-l border-zinc-800"
                        >
                          <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-zinc-800 -translate-x-2 flex items-center justify-center">
                            <div className="w-2 h-2 rounded-full bg-white"></div>
                          </div>
                          <div className="inline-block px-3 py-1 rounded-full bg-zinc-800 text-xs mb-2 text-gray-300">
                            {edu.year}
                          </div>
                          <h4 className="font-medium text-white">
                            {edu.institution}
                          </h4>
                          <p className="text-sm text-gray-300">{edu.degree}</p>
                        </div>
                      ))}
                    </div>

                    <h3 className="text-xl font-serif mt-10 mb-6 uppercase tracking-wide text-white">
                      EXPERIENCE
                    </h3>
                    <div className="space-y-6">
                      {experience.map((exp, index) => (
                        <div
                          key={index}
                          className="relative pl-8 border-l border-zinc-800"
                        >
                          <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-zinc-800 -translate-x-2 flex items-center justify-center">
                            <div className="w-2 h-2 rounded-full bg-white"></div>
                          </div>
                          <div className="inline-block px-3 py-1 rounded-full bg-zinc-800 text-xs mb-2 text-gray-300">
                            {exp.year}
                          </div>
                          <h4 className="font-medium text-white">
                            {exp.company}
                          </h4>
                          <p className="text-sm text-gray-300">{exp.role}</p>
                          {exp.description && (
                            <p className="text-xs text-gray-300 mt-1">
                              {exp.description}
                            </p>
                          )}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Skills */}
              <div>
                <Card className="bg-zinc-900 border-zinc-800 rounded-xl h-full">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-serif mb-6 uppercase tracking-wide text-white">
                      DESIGN SOFTWARE
                    </h3>
                    <div className="space-y-4">
                      {skills.map((skill, index) => (
                        <div
                          key={index}
                          className="flex justify-between items-center"
                        >
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-md bg-zinc-800 flex items-center justify-center">
                              {/* Software icon placeholder */}
                              <span className="text-xs">
                                {skill.name.substring(0, 2)}
                              </span>
                            </div>
                            <span className="text-sm text-gray-300">
                              {skill.name}
                            </span>
                          </div>
                          <div className="flex">
                            {renderSkillDots(skill.level)}
                          </div>
                        </div>
                      ))}
                    </div>

                    <h3 className="text-xl font-serif mt-10 mb-6 uppercase tracking-wide text-white">
                      PERSONAL SKILLS
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {personalSkills.map((skill, index) => (
                        <Badge
                          key={index}
                          className="bg-zinc-800 hover:bg-zinc-700 text-white border-none px-4 py-1.5 rounded-full"
                        >
                          {skill.name}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BioSection;
