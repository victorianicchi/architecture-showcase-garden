
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
              <path d="M10.396 11.519h-2.108v1.923h2.134c0.56 0 1.014-0.45 1.014-0.962s-0.454-0.961-1.014-0.961h-0.026zM16.177 11.519h-2.428v1.923h2.428c0.56 0 1.014-0.45 1.014-0.962s-0.454-0.961-1.014-0.961z" />
              <path d="M19.931 2h-15.862c-1.123 0-2.069 0.946-2.069 2.069v15.862c0 1.123 0.946 2.069 2.069 2.069h15.862c1.123 0 2.069-0.946 2.069-2.069v-15.862c0-1.123-0.946-2.069-2.069-2.069zM13.419 8.092h4.534v1.331h-4.534v-1.331zM12.313 14.365h-4.025v-6.731h3.612c2.388 0 2.794 2.331 1.279 3.2 1.742 0.773 1.892 3.531-0.866 3.531zM18.069 14.365h-4.32v-6.731h4.32c3.438 0 3.438 6.731 0 6.731z" />
            </svg>
          </Button>
        </a>
      </div>
    </div>
  );
};
