
import { useState, useEffect } from "react";
import { Menu, X, Globe } from "lucide-react";
import { translations } from "@/utils/translations";

interface NavigationProps {
  language: "en" | "es";
  onLanguageChange: (language: "en" | "es") => void;
}

export const Navigation = ({ language, onLanguageChange }: NavigationProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const t = translations[language];

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const bgColor = language === 'es' ? 'bg-[#F2FCE2]' : 'bg-[#FFDEE2]';
  const borderColor = language === 'es' ? 'border-[#F2FCE2]' : 'border-[#FFDEE2]';

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 border-t-4 ${borderColor} ${
      scrolled ? `py-2 ${bgColor}/95 backdrop-blur-sm shadow-sm` : `py-4 ${bgColor}`
    }`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#" className="text-xl font-playfair text-gray-800 transition-all">
          {t.name}
        </a>
        
        {/* Mobile menu button */}
        <div className="flex items-center gap-4 md:hidden">
          <button
            onClick={() => onLanguageChange(language === "en" ? "es" : "en")}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <Globe size={20} />
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Desktop menu */}
        <div className={`hidden md:flex items-center space-x-8 font-inter transition-opacity duration-300 ${
          scrolled ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}>
          <a href="#portfolio" className="hover:text-pink-600 transition-colors">{t.portfolio}</a>
          <a href="#creative" className="hover:text-pink-600 transition-colors">{t.creative}</a>
          <a href="#about" className="hover:text-pink-600 transition-colors">{t.about}</a>
          <a href="#contact" className="hover:text-pink-600 transition-colors">{t.contact}</a>
          <button
            onClick={() => onLanguageChange(language === "en" ? "es" : "en")}
            className="flex items-center gap-2 hover:text-pink-600 transition-colors"
          >
            <Globe size={20} />
            {language.toUpperCase()}
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className={`absolute top-full left-0 right-0 ${bgColor}/95 backdrop-blur-sm md:hidden`}>
            <div className="flex flex-col items-center space-y-4 py-4">
              <a href="#portfolio" className="hover:text-pink-600 transition-colors" onClick={() => setIsOpen(false)}>{t.portfolio}</a>
              <a href="#creative" className="hover:text-pink-600 transition-colors" onClick={() => setIsOpen(false)}>{t.creative}</a>
              <a href="#about" className="hover:text-pink-600 transition-colors" onClick={() => setIsOpen(false)}>{t.about}</a>
              <a href="#contact" className="hover:text-pink-600 transition-colors" onClick={() => setIsOpen(false)}>{t.contact}</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
