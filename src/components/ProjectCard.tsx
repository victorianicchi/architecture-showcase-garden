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
            <div className="flex flex-col space-y-4">
              {allImages.map((img, index) => (
                <div key={index} className="relative">
                  <img
                    src={img}
                    alt={`${title} - Image ${index + 1}`}
                    className="w-full h-auto"
                  />
                </div>
              ))}
            </div>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
};