
import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { motion } from "framer-motion";

interface CreativeItemProps {
  title: string;
  description: string;
  image: string;
  className?: string;
}

export const CreativeItem = ({
  title,
  description,
  image,
  className,
}: CreativeItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

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
            <p className="text-gray-700">{description}</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
