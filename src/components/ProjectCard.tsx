import { cn } from "@/lib/utils";
import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  additionalImages?: string[];
  className?: string;
}

export const ProjectCard = ({ title, description, image, additionalImages, className }: ProjectCardProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleClick = () => {
    if (additionalImages?.length) {
      setIsOpen(true);
    }
  };

  const nextImage = () => {
    if (additionalImages) {
      setCurrentImageIndex((prev) => (prev + 1) % (additionalImages.length + 1));
    }
  };

  const prevImage = () => {
    if (additionalImages) {
      setCurrentImageIndex((prev) => (prev - 1 + (additionalImages.length + 1)) % (additionalImages.length + 1));
    }
  };

  const allImages = additionalImages ? [image, ...additionalImages] : [image];

  return (
    <>
      <div 
        className={cn("group relative overflow-hidden cursor-pointer", className)}
        onClick={handleClick}
      >
        <img
          src={image}
          alt={title}
          className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
          <h3 className="text-white font-playfair text-2xl mb-2">{title}</h3>
          <p className="text-white/80 font-inter">{description}</p>
          {additionalImages && (
            <p className="text-white/60 mt-2 text-sm">Click to view more images</p>
          )}
        </div>
      </div>

      {additionalImages && (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogContent className="max-w-4xl">
            <div className="relative">
              <img
                src={allImages[currentImageIndex]}
                alt={`${title} - Image ${currentImageIndex + 1}`}
                className="w-full h-auto"
              />
              <button
                onClick={(e) => { e.stopPropagation(); prevImage(); }}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70"
              >
                ←
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); nextImage(); }}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70"
              >
                →
              </button>
              <p className="text-center mt-2 text-sm text-gray-500">
                Image {currentImageIndex + 1} of {allImages.length}
              </p>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
};