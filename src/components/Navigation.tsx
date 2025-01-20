import { useState } from "react";
import { Menu, X } from "lucide-react";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#" className="text-xl font-playfair">
          John Architect
        </a>
        
        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop menu */}
        <div className="hidden md:flex space-x-8 font-inter">
          <a href="#portfolio" className="hover:text-gray-600 transition-colors">Portfolio</a>
          <a href="#about" className="hover:text-gray-600 transition-colors">About</a>
          <a href="#contact" className="hover:text-gray-600 transition-colors">Contact</a>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-white/90 backdrop-blur-sm md:hidden">
            <div className="flex flex-col items-center space-y-4 py-4">
              <a href="#portfolio" className="hover:text-gray-600 transition-colors" onClick={() => setIsOpen(false)}>Portfolio</a>
              <a href="#about" className="hover:text-gray-600 transition-colors" onClick={() => setIsOpen(false)}>About</a>
              <a href="#contact" className="hover:text-gray-600 transition-colors" onClick={() => setIsOpen(false)}>Contact</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};