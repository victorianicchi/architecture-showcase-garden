import { Navigation } from "@/components/Navigation";
import { ProjectCard } from "@/components/ProjectCard";
import { useState } from "react";
import { translations } from "@/utils/translations";

const Index = () => {
  const [language, setLanguage] = useState<"en" | "es">("en");
  const t = translations[language];

  const projects = [
    {
      title: "Urban Harmony Center",
      description: "A modern cultural center that blends with its surroundings",
      image: "https://images.unsplash.com/photo-1433832597046-4f10e10ac764",
    },
    {
      title: "Floating Pavilion",
      description: "An innovative waterfront structure with sustainable features",
      image: "https://images.unsplash.com/photo-1493397212122-2b85dda8106b",
    },
    {
      title: "Desert Oasis Museum",
      description: "A contemporary museum inspired by traditional architecture",
      image: "https://images.unsplash.com/photo-1466442929976-97f336a657be",
    },
    {
      title: "Sky Gardens",
      description: "Vertical gardens integrated into residential towers",
      image: "https://images.unsplash.com/photo-1492321936769-b49830bc1d1e",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-white to-green-100 font-inter">
      <Navigation language={language} onLanguageChange={setLanguage} />
      
      {/* Hero Section */}
      <section className="h-screen relative flex items-center justify-center">
        <img
          src="https://images.unsplash.com/photo-1487958449943-2429e8be8625"
          alt="Hero"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-pink-500/60 to-green-500/60" />
        <div className="relative text-center text-white animate-fadeIn">
          <h1 className="font-playfair text-5xl md:text-7xl mb-4">{t.name}</h1>
          <p className="text-xl md:text-2xl">{t.tagline}</p>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 container mx-auto px-4">
        <h2 className="font-playfair text-4xl mb-12 text-center text-gray-800">{t.portfolio}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-br from-green-100 to-pink-100">
        <div className="container mx-auto px-4">
          <h2 className="font-playfair text-4xl mb-12 text-center text-gray-800">{t.about}</h2>
          <div className="max-w-4xl mx-auto space-y-6">
            {t.aboutSections.map((section, index) => (
              <div key={index} className="text-gray-600 leading-relaxed">
                <h3 className="font-playfair text-2xl mb-4 text-gray-800">{section.title}</h3>
                <p className="mb-6">{section.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 container mx-auto px-4">
        <h2 className="font-playfair text-4xl mb-12 text-center text-gray-800">{t.contact}</h2>
        <div className="max-w-md mx-auto text-center">
          <p className="text-gray-600 mb-8">
            {t.contactText}
          </p>
          <a
            href="mailto:contact@victorianicchi.com"
            className="inline-block bg-gradient-to-r from-pink-500 to-green-500 text-white px-8 py-3 rounded hover:from-pink-600 hover:to-green-600 transition-all duration-300"
          >
            {t.contactButton}
          </a>
        </div>
      </section>
    </div>
  );
};

export default Index;