import { Globe } from "lucide-react";
import { translations } from "@/utils/translations";

interface NavigationProps {
  language: "en" | "es";
  onLanguageChange: (language: "en" | "es") => void;
}

export const Navigation = ({ language, onLanguageChange }: NavigationProps) => {
  const t = translations[language];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-8 font-inter">
          <a href="#portfolio" className="hover:text-pink-600 transition-colors">{t.portfolio}</a>
          <a href="#about" className="hover:text-pink-600 transition-colors">{t.about}</a>
          <a href="#contact" className="hover:text-pink-600 transition-colors">{t.contact}</a>
        </div>
        <button
          onClick={() => onLanguageChange(language === "en" ? "es" : "en")}
          className="flex items-center gap-2 hover:text-pink-600 transition-colors"
        >
          <Globe size={20} />
          {language.toUpperCase()}
        </button>
      </div>
    </div>
  );
};