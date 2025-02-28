
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
              <path d="M7.803 5.731c.589 0 1.119.051 1.605.155.483.103.895.273 1.243.508.343.235.611.547.804.939.187.391.28.863.28 1.417 0 .609-.139 1.119-.427 1.529-.284.406-.7.741-1.243 1.003.75.217 1.297.611 1.652 1.171.355.561.532 1.231.532 2.012 0 .637-.12 1.177-.364 1.627-.242.45-.569.819-.972 1.105-.403.287-.861.493-1.364.623-.51.131-1.047.195-1.621.195H2V5.731h5.803zm-.312 4.919c.487 0 .886-.099 1.203-.3.313-.199.464-.536.464-1.009 0-.259-.065-.479-.196-.659-.131-.18-.3-.317-.513-.411-.207-.096-.431-.157-.675-.185-.248-.027-.485-.041-.721-.041H4.71v2.607h2.781v-.002zm.15 5.398c.285 0 .548-.025.789-.079.241-.052.446-.142.619-.269s.309-.297.406-.518c.096-.221.145-.497.145-.833 0-.666-.207-1.133-.625-1.401-.417-.271-.967-.401-1.649-.401H4.71v3.503h2.931v-.002zM16.14 17.131c.438.238.957.355 1.554.355.483 0 .905-.109 1.261-.332.356-.219.575-.45.656-.693h2.168c-.348 1.072-.87 1.838-1.571 2.299-.699.463-1.545.693-2.538.693-.689 0-1.311-.109-1.863-.328-.555-.221-1.028-.527-1.419-.924-.391-.396-.692-.871-.899-1.419-.211-.55-.316-1.151-.316-1.807 0-.635.103-1.225.306-1.771.205-.545.5-1.018.881-1.417.382-.399.841-.71 1.377-.937.536-.228 1.136-.341 1.793-.341.731 0 1.369.137 1.918.401.549.268 1.003.622 1.356 1.068.354.448.604.959.753 1.535.146.58.18 1.18.104 1.795h-6.458c0 .634.21 1.236.624 1.724zm2.728-4.842c-.349-.222-.783-.333-1.311-.333-.331 0-.619.051-.865.158-.246.105-.447.243-.607.414-.17.176-.3.323-.396.584-.1.236-.155.462-.17.683h4.064c-.63-.595-.272-1.05-.715-1.389zM16.229 5.5h5.64v1.297h-5.64z"></path>
            </svg>
          </Button>
        </a>
      </div>
    </div>
  );
};
