import { Navigation } from "@/components/Navigation";
import { ProjectCard } from "@/components/ProjectCard";
import { useState } from "react";
import { translations } from "@/utils/translations";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { ContactForm } from "@/components/ContactForm";

const Index = () => {
  const [language, setLanguage] = useState<"en" | "es">("en");
  const t = translations[language];

  const inspirations = [
    {
      title: "Travel Photography",
      description: "Capturing architectural wonders around the world",
      image: "https://images.unsplash.com/photo-1493397212122-2b85dda8106b"
    },
    {
      title: "Pinterest Collections",
      description: "Curated boards of innovative designs",
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625"
    },
    {
      title: "Creative Sketches",
      description: "Hand-drawn architectural concepts",
      image: "https://images.unsplash.com/photo-1466442929976-97f336a657be"
    }
  ];

  const projects = [
    {
      title: "Primary School",
      description: "Living school integrated with nature",
      image: "/lovable-uploads/9608e8cf-9a8f-496a-81d8-03a35f15dfd2.png",
      additionalImages: [
        "/lovable-uploads/185bb680-1024-4ff7-ab48-52faea4a9dcf.png",
        "/lovable-uploads/167c5651-dc25-4a19-a97c-9644c8652be2.png",
        "/lovable-uploads/2081f99a-3bd3-4d17-9f97-447046c3bc4c.png"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-pink-50">
      <Navigation language={language} onLanguageChange={setLanguage} />
      
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16 flex items-center justify-between">
        <div className="w-1/2">
          <h1 className="text-6xl font-playfair mb-4">{t.name}</h1>
          <p className="text-2xl text-gray-600">{t.tagline}</p>
        </div>
        <div className="w-1/2">
          <img 
            src="/lovable-uploads/94cfb1e7-a716-4b37-920c-b073551447d6.png" 
            alt="Victoria Nicchi"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Portfolio Section */}
      <section id="portfolio" className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-playfair mb-8">{t.portfolio}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="container mx-auto px-4 py-16">
        <div className="flex gap-8">
          <div className="w-1/3">
            <img 
              src="/lovable-uploads/e1a4f9f6-44bc-4e98-9fdd-864713db82af.png" 
              alt="Victoria Nicchi"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          <div className="w-2/3">
            <h2 className="text-4xl font-playfair mb-8">{t.about}</h2>
            {t.aboutSections.map((section, index) => (
              <div key={index} className="mb-8">
                <h3 className="text-2xl font-playfair mb-4">{section.title}</h3>
                <p className="text-gray-600 leading-relaxed">{section.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inspiration Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-playfair mb-8">Creative Inspiration</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {inspirations.map((inspiration, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{inspiration.title}</CardTitle>
                <CardDescription>{inspiration.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <img 
                  src={inspiration.image} 
                  alt={inspiration.title}
                  className="w-full h-48 object-cover rounded-lg"
                />
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-playfair mb-8">{t.contact}</h2>
        <div className="flex gap-8">
          <div className="w-1/2">
            <ContactForm language={language} />
          </div>
          <div className="w-1/2">
            <img 
              src="/lovable-uploads/e083b154-ee8e-4aca-9079-e877ea4cd873.png" 
              alt="Contact"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;