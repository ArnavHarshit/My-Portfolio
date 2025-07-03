import React, { useState } from "react";
import { motion } from "framer-motion";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface Project {
  id: string;
  title: string;
  image: string;
  description?: string;
  category?: string;
}

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
  onNext: () => void;
  onPrevious: () => void;
}

// Inline ProjectModal component since it's not available for import
const ProjectModal = ({
  project,
  onClose,
  onNext,
  onPrevious,
}: ProjectModalProps) => {
  return (
    <div className="bg-black text-white p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">{project.title}</h2>
        <button
          onClick={onClose}
          className="p-2 rounded-full hover:bg-white/10"
        >
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
            className="lucide lucide-x"
          >
            <path d="M18 6 6 18"></path>
            <path d="m6 6 12 12"></path>
          </svg>
        </button>
      </div>

      <div className="mb-6">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-auto rounded-md"
        />
      </div>

      <div className="mb-6">
        <p className="text-gray-300">
          {project.description || "No description available."}
        </p>
        <div className="mt-4 inline-block px-4 py-1 rounded-full border border-white/50 text-xs">
          {project.category || "Project"}
        </div>
      </div>

      <div className="flex justify-between">
        <button
          onClick={onPrevious}
          className="px-4 py-2 border border-white/30 rounded-md hover:bg-white/10"
        >
          Previous
        </button>
        <button
          onClick={onNext}
          className="px-4 py-2 border border-white/30 rounded-md hover:bg-white/10"
        >
          Next
        </button>
      </div>
    </div>
  );
};

interface ProjectGalleryProps {
  title?: string;
  subtitle?: string;
  projects?: Project[];
  columns?: number;
}

const ProjectGallery = ({
  title = "POSTERS",
  subtitle = "Personal Projects",
  projects = [
    {
      id: "1",
      title: "Project 1",
      image:
        "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?w=800&q=80",
      description: "Description for Project 1",
      category: "poster",
    },
    {
      id: "2",
      title: "Project 2",
      image:
        "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=800&q=80",
      description: "Description for Project 2",
      category: "poster",
    },
    {
      id: "3",
      title: "Project 3",
      image:
        "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
      description: "Description for Project 3",
      category: "poster",
    },
    {
      id: "4",
      title: "Project 4",
      image:
        "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80",
      description: "Description for Project 4",
      category: "poster",
    },
    {
      id: "5",
      title: "Project 5",
      image:
        "https://images.unsplash.com/photo-1622737133809-d95047b9e673?w=800&q=80",
      description: "Description for Project 5",
      category: "poster",
    },
    {
      id: "6",
      title: "Project 6",
      image:
        "https://images.unsplash.com/photo-1608501078713-8e445a709b39?w=800&q=80",
      description: "Description for Project 6",
      category: "poster",
    },
  ],
  columns = 3,
}: ProjectGalleryProps) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleNextProject = () => {
    if (!selectedProject) return;

    const currentIndex = projects.findIndex((p) => p.id === selectedProject.id);
    const nextIndex = (currentIndex + 1) % projects.length;
    setSelectedProject(projects[nextIndex]);
  };

  const handlePrevProject = () => {
    if (!selectedProject) return;

    const currentIndex = projects.findIndex((p) => p.id === selectedProject.id);
    const prevIndex = (currentIndex - 1 + projects.length) % projects.length;
    setSelectedProject(projects[prevIndex]);
  };

  return (
    <div className="w-full bg-black text-white py-12 px-4 md:px-8">
      {/* Section Header */}
      <div className="relative mb-12 flex flex-col items-center">
        <div className="flex items-center space-x-2 mb-2">
          <div className="w-1 h-1 rounded-full bg-white opacity-70"></div>
          <div className="h-px w-12 bg-white opacity-30"></div>
          <div className="w-1 h-1 rounded-full bg-white opacity-70"></div>
        </div>

        <h2 className="text-5xl md:text-7xl font-serif tracking-wider mb-2">
          {title}
        </h2>

        <div className="inline-block px-6 py-1 rounded-full border border-white/30 text-sm">
          {subtitle}
        </div>

        <div className="flex items-center space-x-2 mt-4">
          <div className="w-1 h-1 rounded-full bg-white opacity-70"></div>
          <div className="h-px w-12 bg-white opacity-30"></div>
          <div className="w-1 h-1 rounded-full bg-white opacity-70"></div>
        </div>
      </div>

      {/* Project Grid */}
      <div
        className={`grid gap-6 md:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-${columns}`}
        style={{
          gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
        }}
      >
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className="relative overflow-hidden rounded-lg cursor-pointer group"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            onClick={() => handleProjectClick(project)}
          >
            <AspectRatio ratio={16 / 9}>
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </AspectRatio>
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center px-4">
                <h3 className="text-xl font-medium">{project.title}</h3>
                <div className="mt-2 inline-block px-4 py-1 rounded-full border border-white/50 text-xs">
                  {project.category || "Project"}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Project Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-4xl p-0 bg-black border border-white/20">
          {selectedProject && (
            <ProjectModal
              project={selectedProject}
              onClose={handleCloseModal}
              onNext={handleNextProject}
              onPrevious={handlePrevProject}
            />
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ProjectGallery;
