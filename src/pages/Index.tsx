<lov-code>
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
        "/lovable-uploads/2081f99a-3bd3-4d17-