import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { motion } from "framer-motion";

interface ProjectModalProps {
  isOpen?: boolean;
  onClose?: () => void;
  project?: {
    id: string;
    title: string;
    category: string;
    description: string;
    images: string[];
  };
  projects?: Array<{
    id: string;
    title: string;
    category: string;
    description: string;
    images: string[];
  }>;
}

const ProjectModal = ({
  isOpen = true,
  onClose = () => {},
  project = {
    id: "1",
    title: "Sample Project",
    category: "Poster Design",
    description:
      "This is a sample project description. The project showcases modern design principles with a focus on typography and composition.",
    images: [
      "https://images.unsplash.com/photo-1563089145-599997674d42?w=800&q=80",
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
    ],
  },
  projects = [
    {
      id: "1",
      title: "Sample Project",
      category: "Poster Design",
      description:
        "This is a sample project description. The project showcases modern design principles with a focus on typography and composition.",
      images: [
        "https://images.unsplash.com/photo-1563089145-599997674d42?w=800&q=80",
        "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
      ],
    },
    {
      id: "2",
      title: "Creative Concept",
      category: "Album Cover",
      description:
        "An experimental album cover design using abstract shapes and vibrant colors to convey the energy of the music.",
      images: [
        "https://images.unsplash.com/photo-1619983081563-430f63602796?w=800&q=80",
        "https://images.unsplash.com/photo-1618172193622-ae2d025f4032?w=800&q=80",
      ],
    },
    {
      id: "3",
      title: "Editorial Layout",
      category: "Editorial",
      description:
        "A clean and modern editorial spread designed for a fashion magazine featuring minimalist typography and ample white space.",
      images: [
        "https://images.unsplash.com/photo-1594032198102-9b8f8a3df220?w=800&q=80",
        "https://images.unsplash.com/photo-1616628188859-7a11abb6fcc9?w=800&q=80",
      ],
    },
  ],
}: ProjectModalProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentProjectIndex, setCurrentProjectIndex] = useState(
    projects.findIndex((p) => p.id === project.id) || 0,
  );
  const currentProject = projects[currentProjectIndex];

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? currentProject.images.length - 1 : prev - 1,
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === currentProject.images.length - 1 ? 0 : prev + 1,
    );
  };

  const handlePrevProject = () => {
    setCurrentProjectIndex((prev) =>
      prev === 0 ? projects.length - 1 : prev - 1,
    );
    setCurrentImageIndex(0);
  };

  const handleNextProject = () => {
    setCurrentProjectIndex((prev) =>
      prev === projects.length - 1 ? 0 : prev + 1,
    );
    setCurrentImageIndex(0);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-black text-white max-w-5xl w-full p-0 overflow-hidden rounded-xl border border-zinc-800">
        <div className="relative">
          <div className="absolute top-4 right-4 z-10">
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="rounded-full bg-black/50 hover:bg-black/70 text-white"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>

          <div className="relative h-[500px] w-full bg-zinc-900">
            {currentProject.images.length > 0 && (
              <motion.img
                key={currentProject.images[currentImageIndex]}
                src={currentProject.images[currentImageIndex]}
                alt={`${currentProject.title} - Image ${currentImageIndex + 1}`}
                className="w-full h-full object-contain"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            )}

            {currentProject.images.length > 1 && (
              <>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={handlePrevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-black/50 hover:bg-black/70 text-white"
                >
                  <ChevronLeft className="h-5 w-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={handleNextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-black/50 hover:bg-black/70 text-white"
                >
                  <ChevronRight className="h-5 w-5" />
                </Button>
              </>
            )}

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {currentProject.images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-2 h-2 rounded-full ${index === currentImageIndex ? "bg-white" : "bg-white/30"}`}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          </div>

          <div className="p-6 bg-black">
            <DialogHeader>
              <div className="flex items-center justify-between">
                <div>
                  <DialogTitle className="text-2xl font-serif">
                    {currentProject.title}
                  </DialogTitle>
                  <DialogDescription className="text-zinc-400 mt-1">
                    {currentProject.category}
                  </DialogDescription>
                </div>

                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handlePrevProject}
                    className="border-zinc-700 hover:bg-zinc-800 text-white"
                  >
                    <ChevronLeft className="h-4 w-4 mr-1" />
                    Previous
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleNextProject}
                    className="border-zinc-700 hover:bg-zinc-800 text-white"
                  >
                    Next
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </Button>
                </div>
              </div>
            </DialogHeader>

            <div className="mt-4">
              <p className="text-zinc-300 leading-relaxed">
                {currentProject.description}
              </p>
            </div>

            <div className="mt-6 flex justify-between items-center">
              <div className="text-sm text-zinc-400">
                Project {currentProjectIndex + 1} of {projects.length}
              </div>

              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-zinc-700 hover:bg-zinc-800 text-white"
                >
                  Share
                </Button>
                <Button
                  size="sm"
                  className="bg-white text-black hover:bg-zinc-200"
                >
                  View Full Project
                </Button>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectModal;
