import { Navigation } from "@/components/Navigation";
import { ProjectCard } from "@/components/ProjectCard";
import { useState } from "react";
import { translations } from "@/utils/translations";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { ContactForm } from "@/components/ContactForm";
import { Link } from "react-router-dom";

const Index = () => {
  const [language, setLanguage] = useState<"en" | "es">("en");
  const t = translations[language];

  const inspirations = [
    {
      title: {
        en: "Travel Photography",
        es: "Fotografía de Viajes"
      },
      description: {
        en: "Capturing architectural wonders around the world",
        es: "Capturando maravillas arquitectónicas alrededor del mundo"
      },
      image: "/lovable-uploads/b454fc4e-8b74-4799-a636-2d1e832b729b.png",
      link: "/travel-photography"
    },
    {
      title: {
        en: "Collections",
        es: "Colecciones"
      },
      description: {
        en: "Curated boards of innovative designs",
        es: "Tableros curados de diseños innovadores"
      },
      image: "/lovable-uploads/bc5c32e2-679b-412b-8088-cdb0b257da98.png"
    },
    {
      title: {
        en: "Creative Sketches",
        es: "Bocetos Creativos"
      },
      description: {
        en: "Hand-drawn architectural concepts",
        es: "Conceptos arquitectónicos dibujados a mano"
      },
      image: "/lovable-uploads/66490511-dcf1-4708-9105-3387f3e3bf27.png"
    }
  ];

  const projects = [
    {
      title: {
        en: "Cultural Center",
        es: "Centro Cultural"
      },
      description: {
        en: "A modern cultural space integrating library, exhibition areas, and multipurpose rooms with natural light and vegetation",
        es: "Un espacio cultural moderno que integra biblioteca, áreas de exposición y salas multiusos con luz natural y vegetación"
      },
      image: "/lovable-uploads/0b08387d-0053-4fb3-95ee-3ac278a64dfe.png",
      additionalImages: [
        "/lovable-uploads/b65d3e67-5f8f-4a23-9c99-49855f610530.png",
        "/lovable-uploads/af72bd70-5c71-4950-9269-3c0db1ccb657.png",
        "/lovable-uploads/a48a4c49-7835-4e46-80a7-19177a4a18c8.png",
        "/lovable-uploads/82c530e3-7517-4fa7-802f-1bc1d5a0280c.png",
        "/lovable-uploads/86195f59-bf43-43d5-ae80-bd5b88a6ae00.png",
        "/lovable-uploads/d8134135-5345-4dc6-9ff9-1a005fe07f93.png",
        "/lovable-uploads/1a1b77cc-e05e-4a66-81d7-d2c07629863e.png",
        "/lovable-uploads/af175f4d-58e6-4f2c-a8e8-05b5764b8bbc.png",
        "/lovable-uploads/93820bdc-10b9-4308-b259-5bb5ed18c8d8.png",
        "/lovable-uploads/29a7eb48-f514-4872-a587-2e1bfa207c02.png",
        "/lovable-uploads/1a1b32ed-0b08-449d-8479-174dd833cf66.png",
        "/lovable-uploads/50be0e76-43b8-4dd4-b3f0-589253430d24.png",
        "/lovable-uploads/d5616865-1031-4fc0-8eae-f1a27ea6799d.png",
        "/lovable-uploads/ecfa2e72-4b9d-4d5a-959f-d316150f004f.png"
      ]
    },
    {
      title: {
        en: "Cell Mitosis",
        es: "Mitosis Celular"
      },
      description: {
        en: "A residential complex of 10 units along the Río Luján in Tigre, featuring symmetrical encounters and shared spaces that promote community interaction while preserving privacy",
        es: "Un complejo residencial de 10 unidades en el Río Luján en Tigre, con encuentros simétricos y espacios compartidos que promueven la interacción comunitaria mientras preservan la privacidad"
      },
      image: "/lovable-uploads/f06608db-7dd9-490f-8999-f0009bd1fc15.png",
      additionalImages: [
        "/lovable-uploads/686580b6-9c26-4688-9e7e-447118bfca59.png",
        "/lovable-uploads/53012cae-45bb-445d-8cdc-b595e04ac38b.png"
      ]
    },
    {
      title: {
        en: "Building in Buenos Aires City",
        es: "Construcción en la Ciudad de Buenos Aires"
      },
      description: {
        en: "An acoustic eco-oasis located in Buenos Aires' Microcenter, featuring a layered architectural approach with a protective glass shield, native vegetation, and a cultural center that revitalizes the urban space",
        es: "Un oasis acústico ubicado en el Microcenter de Buenos Aires, con un enfoque arquitectónico en capas que incluye una protección de vidrio, vegetación nativa y un centro cultural que revitaliza el espacio urbano"
      },
      image: "/lovable-uploads/b484ef0e-25c2-4af9-bff8-89e8b35a4c3a.png",
      additionalImages: [
        "/lovable-uploads/7465b23e-10ad-4ec5-bc8e-f19443549ca9.png",
        "/lovable-uploads/620b9a4e-d4cc-4ef7-8403-223fccf8b854.png",
        "/lovable-uploads/96654a96-2dab-4d9a-bffd-646388832798.png",
        "/lovable-uploads/dee431ca-b886-4aac-9ff9-fe92aee6a8f1.png",
        "/lovable-uploads/4fa364cc-05c2-4d1a-b41a-22e2e989aa9d.png",
        "/lovable-uploads/52a297a7-96da-4966-8681-5d81f129e4e2.png",
        "/lovable-uploads/c475cc0b-600c-432c-8ef1-19ad998d0c2f.png",
        "/lovable-uploads/14014bfc-d549-494e-b0f6-d774eaaf26e8.png",
        "/lovable-uploads/17ccd473-5d5c-4f54-81ed-b12ee556c334.png",
        "/lovable-uploads/ef3e21f5-571c-4fd7-80b9-b6333abbb389.png",
        "/lovable-uploads/2a400815-819f-4d0e-a43d-6a594e7b8357.png",
        "/lovable-uploads/22310c88-5678-4b00-88cf-6eb9c65d68be.png"
      ]
    },
    {
      title: {
        en: "Apartment Remodeling",
        es: "Reconstrucción de Apartamentos"
      },
      description: {
        en: "A minimalist apartment renovation featuring open spaces, natural light, and custom wooden furniture. The design incorporates a seamless blend of living, working, and relaxation areas with panoramic city views",
        es: "Una reconstrucción de apartamentos minimalista con espacios abiertos, luz natural y muebles de madera personalizados. El diseño combina una mezcla fluida de áreas de vivienda, trabajo y relajación con vistas panorámicas de la ciudad"
      },
      image: "/lovable-uploads/146f99da-70a0-4074-be9a-8001489f756b.png",
      additionalImages: [
        "/lovable-uploads/ff5b9f7b-5649-463f-91bc-e76f536ffebf.png",
        "/lovable-uploads/ea8a0489-fb30-44a6-8337-52d89378b807.png",
        "/lovable-uploads/e630c78c-92f2-47d4-afdf-8393b9df0076.png",
        "/lovable-uploads/72c22810-6549-425f-9a1d-36add7c0a562.png",
        "/lovable-uploads/e363cdf1-9f38-4050-8f16-6c35492389d5.png"
      ]
    },
    {
      title: {
        en: "Primary School",
        es: "Escuela Primaria"
      },
      description: {
        en: "Living school integrated with nature",
        es: "Escuela de vida integrada con la naturaleza"
      },
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
    }
  ];

  const borderColorClass = language === 'es' ? 'border-[#D8E8CC]' : 'border-[#E6C5C9]';

  return (
    <div className={`min-h-screen ${language === 'es' ? 'bg-[#F2FCE2]' : 'bg-[#FFDEE2]'} font-inter`}>
      <Navigation language={language} onLanguageChange={setLanguage} />
      
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="min-h-screen flex items-center justify-center px-8"
      >
        <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-12">
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
              src={language === 'es' ? "/lovable-uploads/af75e989-9f66-4cf0-b51b-3ff107f40e12.png" : "/lovable-uploads/211ae5f0-34e9-4dc9-89fc-10eb5b6d841c.png"}
              alt="Victoria Nicchi"
              className="w-[650px] h-[650px] object-cover rounded-lg shadow-xl"
            />
          </motion.div>
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title[language]}
              description={project.description[language]}
              image={project.image}
              additionalImages={project.additionalImages}
              className="w-full aspect-[4/3] mx-auto"
            />
          ))}
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
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 max-w-6xl mx-auto">
          <div className="flex-1 flex justify-center">
            <img
              src="/lovable-uploads/0e5673d4-1315-40e7-860e-fc1b89b0e6ab.png"
              alt="Victoria Nicchi"
              className="w-full max-w-md rounded-lg shadow-xl"
            />
          </div>
          <div className="flex-1 space-y-8">
            {t.aboutSections.map((section, index) => (
              <div key={index} className="space-y-3">
                <h3 className="font-playfair text-2xl text-gray-800">{section.title}</h3>
                <p className="text-gray-700">{section.content}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Creative Inspiration Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        id="inspiration" 
        className="py-20"
      >
        <div className="container mx-auto px-4">
          <h2 className="font-playfair text-4xl mb-12 text-center text-gray-800">{t.creative}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {inspirations.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
                className="flex"
              >
                {item.link ? (
                  <Link to={item.link} className="w-full">
                    <ProjectCard
                      title={item.title[language]}
                      description={item.description[language]}
                      image={item.image}
                      className="w-full aspect-square"
                    />
                  </Link>
                ) : (
                  <ProjectCard
                    title={item.title[language]}
                    description={item.description[language]}
                    image={item.image}
                    className="w-full aspect-square"
                  />
                )}
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
