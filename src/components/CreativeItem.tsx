
import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { motion } from "framer-motion";
import { Link, ExternalLink, Youtube, Image } from "lucide-react";

interface CreativeItemProps {
  title: string;
  description: string;
  image: string;
  className?: string;
  links?: Array<{
    type: "youtube" | "website" | "pinterest" | "archdaily";
    url: string;
    title: string;
  }>;
}

export const CreativeItem = ({
  title,
  description,
  image,
  className,
  links,
}: CreativeItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const getLinkIcon = (type: string) => {
    switch (type) {
      case "youtube":
        return <Youtube size={18} className="mr-2" />;
      case "pinterest":
        return <Image size={18} className="mr-2" />;
      case "archdaily":
        return <Link size={18} className="mr-2" />;
      default:
        return <ExternalLink size={18} className="mr-2" />;
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <motion.div
          whileHover={{ y: -5, scale: 1.02 }}
          className={`rounded-lg overflow-hidden shadow-lg cursor-pointer group ${className}`}
        >
          <div className="relative overflow-hidden">
            <img
              src={image}
              alt={title}
              className="w-full h-[300px] object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
              <h3 className="text-white font-playfair text-xl mb-1">{title}</h3>
            </div>
          </div>
        </motion.div>
      </DialogTrigger>

      <DialogContent className="sm:max-w-3xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <img
              src={image}
              alt={title}
              className="w-full h-auto object-cover rounded-md"
            />
          </div>
          <div>
            <h3 className="font-playfair text-2xl mb-4">{title}</h3>
            <p className="text-gray-700 mb-6">{description}</p>
            
            {links && links.length > 0 && (
              <div className="space-y-3">
                <h4 className="font-medium text-lg mb-2">Explore More:</h4>
                <div className="flex flex-col gap-3">
                  {links.map((link, index) => (
                    <a 
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-sm text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      {getLinkIcon(link.type)}
                      {link.title}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
