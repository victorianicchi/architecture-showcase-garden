
import { ProjectCard } from "@/components/ProjectCard";
import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { useState } from "react";

const TravelPhotography = () => {
  const [language, setLanguage] = useState<"en" | "es">("en");
  const navigate = useNavigate();

  const albums = [
    {
      title: "London",
      description: "Architectural highlights from London",
      coverImage: "/lovable-uploads/67da4438-958e-4ec4-8913-5d29d5dd4203.png",
      images: [
        "/lovable-uploads/67da4438-958e-4ec4-8913-5d29d5dd4203.png",
        "/lovable-uploads/ad3a7f28-485c-4d60-bfba-4c4f95bb9f8b.png",
        "/lovable-uploads/d8ab12ec-f12a-4b4e-a290-bd28a5506f53.png",
        "/lovable-uploads/e767e657-9573-48a3-8f6f-4e1ca09dbf26.png",
        "/lovable-uploads/bd7bcecd-a300-4671-a10b-c90ca25a75e9.png",
        "/lovable-uploads/6e59abf6-ced5-4b8d-a5cb-04b9329d5467.png",
        "/lovable-uploads/3453e1a4-0e5a-4f94-a5f8-b2c37b5465d5.png",
        "/lovable-uploads/0bb0aa57-f0e7-49f9-bb83-14d676279cb1.png",
        "/lovable-uploads/a05eaa1e-3889-4edc-bd0c-51c811837bf8.png",
        "/lovable-uploads/a0b8dbb5-7d72-44f9-bfd0-6aa53af621a0.png",
        "/lovable-uploads/e9e2d828-9091-4d71-aa7d-aa50e597c6e5.png",
        "/lovable-uploads/8132390f-73e7-4739-881a-5d7506494c63.png"
      ]
    },
    {
      title: "Paris",
      description: "Coming soon",
      coverImage: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a",
      images: []
    },
    {
      title: "Barcelona",
      description: "Coming soon",
      coverImage: "https://images.unsplash.com/photo-1583422409516-2895a77efded",
      images: []
    }
  ];

  return (
    <div className="min-h-screen bg-[#FFDEE2]">
      <Navigation language={language} onLanguageChange={setLanguage} />
      <div className="p-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto"
        >
          <div className="flex items-center justify-between mb-8">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link to="/">Home</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Travel Photography</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate(-1)}
              className="flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Back
            </Button>
          </div>

          <h1 className="font-playfair text-4xl mb-12 text-center">Travel Photography</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {albums.map((album, index) => (
              <ProjectCard
                key={index}
                title={album.title}
                description={album.description}
                image={album.coverImage}
                additionalImages={album.images}
                className="aspect-square"
              />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TravelPhotography;
