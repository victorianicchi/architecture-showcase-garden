import { Navigation } from "@/components/Navigation";
import { ProjectCard } from "@/components/ProjectCard";
import { useState } from "react";
import { translations } from "@/utils/translations";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Index = () => {
  const [language, setLanguage] = useState<"en" | "es">("en");
  const t = translations[language];

  const projects = [
    {
      title: "Primary School",
      description: "Living school integrated with nature",
      image: "/lovable-uploads/9608e8cf-9a8f-496a-81d8-03a35f15dfd2.png",
      additionalImages: [
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

  const inspirations: { title: string; description: string; image: string }[] = [
    {
      title: "Travel Photography",
      description: "Upload and showcase photos from your architectural travels",
      image: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2",
    },
    {
      title: "Pinterest Collections",
      description: "Share your curated Pinterest boards and design inspirations",
      image: "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d",
    },
    {
      title: "Creative Explorations",
      description: "A space for sketches, models, and experimental work",
      image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-200 via-white to-green-200 font-inter">
      <Navigation language={language} onLanguageChange={setLanguage} />
      
      {/* Hero Section */}
      <section className="h-screen relative flex items-center justify-center">
        <img
          src="https://images.unsplash.com/photo-1487958449943-2429e8be8625"
          alt="Hero"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
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

      {/* Inspiration Section */}
      <section id="inspiration" className="py-20 bg-gradient-to-br from-green-100 to-pink-100">
        <div className="container mx-auto px-4">
          <h2 className="font-playfair text-4xl mb-12 text-center text-gray-800">Creative Inspiration</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {inspirations.map((item, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
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
            ))}
          </div>
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