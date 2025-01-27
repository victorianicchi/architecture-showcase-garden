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
        "/lovable-uploads/2081f99a-3bd3-4d17-9f97-447046c3bc4c.png",
        "/lovable-uploads/85abcf94-7028-43c5-811b-358506a71cfc.png",
        "/lovable-uploads/94cfb1e7-a716-4b37-920c-b073551447d6.png",
        "/lovable-uploads/637c9b15-5a50-4c53-855e-550440187b21.png",
        "/lovable-uploads/a2e33b0c-ab02-4ca0-a29d-361d7b3b57a0.png",
        "/lovable-uploads/40d2025a-f143-410b-b8cc-5e182aa6bd6b.png",
        "/lovable-uploads/0c0b16c8-1e27-46d3-a58a-14085e583114.png",
        "/lovable-uploads/e083b154-ee8e-4aca-9079-e877ea4cd873.png",
        "/lovable-uploads/7b3c6746-9722-437e-ab21-e0c7b2d0b224.png",
        "/lovable-uploads/a732d442-8d20-472d-8a60-45903c5f35b4.png"
      ]
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
    <div className="min-h-screen bg-gradient-to-br from-pink-200 via-white to-green-200 font-inter">
      <Navigation language={language} onLanguageChange={setLanguage} />
      
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="h-screen flex items-center justify-center px-8"
      >
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-gray-800 flex-1 text-center md:text-left"
          >
            <h1 className="font-playfair text-5xl md:text-7xl mb-4">{t.name}</h1>
            <p className="text-xl md:text-2xl">{t.tagline}</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex-1 flex justify-center md:justify-end"
          >
            <img
              src="/lovable-uploads/211ae5f0-34e9-4dc9-89fc-10eb5b6d841c.png"
              alt="Victoria Nicchi"
              className="w-96 h-96 object-cover rounded-lg shadow-xl"
            />
          </motion.div>
        </div>
      </motion.section>

      {/* About Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-20 container mx-auto px-4"
      >
        <h2 className="font-playfair text-4xl mb-12 text-center text-gray-800">{t.about}</h2>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <img
              src="/lovable-uploads/211ae5f0-34e9-4dc9-89fc-10eb5b6d841c.png"
              alt="Victoria Nicchi"
              className="w-full max-w-md mx-auto rounded-lg shadow-xl"
            />
          </div>
          <div className="flex-1 space-y-6">
            <p className="text-lg text-gray-700">
              {t.aboutText}
            </p>
          </div>
        </div>
      </motion.section>

      {/* Portfolio Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        id="portfolio" 
        className="py-20 container mx-auto px-4"
      >
        <h2 className="font-playfair text-4xl mb-12 text-center text-gray-800">{t.portfolio}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </motion.section>

      {/* Inspiration Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        id="inspiration" 
        className="py-20 bg-gradient-to-br from-green-100 to-pink-100"
      >
        <div className="container mx-auto px-4">
          <h2 className="font-playfair text-4xl mb-12 text-center text-gray-800">Creative Inspiration</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {inspirations.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                  <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
                  <CardHeader>
                    <CardTitle>{item.title}</CardTitle>
                    <CardDescription>{item.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <button className="w-full bg-gradient-to-r from-pink-500 to-green-500 text-white px-4 py-2 rounded hover:opacity-90 transition-opacity">
                      Upload Content
                    </button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        id="contact" 
        className="py-20 container mx-auto px-4"
      >
        <h2 className="font-playfair text-4xl mb-12 text-center text-gray-800">{t.contact}</h2>
        <div className="max-w-md mx-auto text-center">
          <p className="text-gray-600 mb-8">
            {t.contactText}
          </p>
          <ContactForm language={language} />
        </div>
      </motion.section>
    </div>
  );
};

export default Index;