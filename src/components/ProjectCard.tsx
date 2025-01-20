import { cn } from "@/lib/utils";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  className?: string;
}

export const ProjectCard = ({ title, description, image, className }: ProjectCardProps) => {
  return (
    <div className={cn("group relative overflow-hidden", className)}>
      <img
        src={image}
        alt={title}
        className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
        <h3 className="text-white font-playfair text-2xl mb-2">{title}</h3>
        <p className="text-white/80 font-inter">{description}</p>
      </div>
    </div>
  );
};