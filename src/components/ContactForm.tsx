
import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { 
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Instagram, Linkedin } from "lucide-react";

interface ContactFormProps {
  language: "en" | "es";
}

export const ContactForm = ({ language }: ContactFormProps) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const mailtoLink = `mailto:vickynicchi@gmail.com?subject=Portfolio Contact from ${name}&body=${message}%0D%0A%0D%0AFrom: ${email}`;
    window.location.href = mailtoLink;
    
    toast({
      title: language === "en" ? "Message Sent" : "Mensaje Enviado",
      description: language === "en" 
        ? "Thank you for your message. I'll get back to you soon!"
        : "Gracias por tu mensaje. ¡Me pondré en contacto pronto!",
    });
  };

  return (
    <div className="space-y-6">
      <Dialog>
        <DialogTrigger asChild>
          <Button className="w-full md:w-auto">
            {language === "en" ? "Send Message" : "Enviar Mensaje"}
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>
              {language === "en" ? "Send me a message" : "Envíame un mensaje"}
            </DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              placeholder={language === "en" ? "Your Name" : "Tu Nombre"}
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <Input
              type="email"
              placeholder={language === "en" ? "Your Email" : "Tu Email"}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Textarea
              placeholder={language === "en" ? "Your Message" : "Tu Mensaje"}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              className="min-h-[100px]"
            />
            <Button type="submit" className="w-full">
              {language === "en" ? "Send" : "Enviar"}
            </Button>
          </form>
        </DialogContent>
      </Dialog>

      <div className="flex gap-4 justify-center mt-6">
        <a
          href="https://instagram.com/__vickynicchi"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110 transition-transform"
        >
          <Button variant="outline" size="icon" className="h-12 w-12">
            <Instagram className="h-6 w-6" />
          </Button>
        </a>
        <a
          href="https://www.linkedin.com/in/victoria-nicchi-a32b91209/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110 transition-transform"
        >
          <Button variant="outline" size="icon" className="h-12 w-12">
            <Linkedin className="h-6 w-6" />
          </Button>
        </a>
        <a
          href="https://www.behance.net/vickynicchi"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110 transition-transform"
        >
          <Button variant="outline" size="icon" className="h-12 w-12">
            <svg 
              viewBox="0 0 24 24" 
              className="h-6 w-6"
              fill="currentColor"
            >
              <path d="M22 7h-7V2H9v5H2v15h20V7zM9.3 15.4H6v-4.7h3.3c1.3 0 2.3.8 2.3 2.3s-1 2.4-2.3 2.4zm8.6-4.5h-4v1.5h3.8v1.8h-3.8v1.5h4v1.8h-6V9h6v1.9zM9.3 12.4H7.8v1.5h1.5c.4 0 .8-.3.8-.7 0-.5-.4-.8-.8-.8z"/>
            </svg>
          </Button>
        </a>
      </div>
    </div>
  );
};
