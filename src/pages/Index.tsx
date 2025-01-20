import { Navigation } from "@/components/Navigation";
import { ProjectCard } from "@/components/ProjectCard";

const Index = () => {
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
    <div className="min-h-screen bg-white font-inter">
      <Navigation />
      
      {/* Hero Section */}
      <section className="h-screen relative flex items-center justify-center">
        <img
          src="https://images.unsplash.com/photo-1487958449943-2429e8be8625"
          alt="Hero"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative text-center text-white animate-fadeIn">
          <h1 className="font-playfair text-5xl md:text-7xl mb-4">John Architect</h1>
          <p className="text-xl md:text-2xl">Creating spaces that inspire</p>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 container mx-auto px-4">
        <h2 className="font-playfair text-4xl mb-12 text-center">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="font-playfair text-4xl mb-12 text-center">About Me</h2>
          <div className="max-w-2xl mx-auto">
            <p className="text-gray-600 leading-relaxed mb-6">
              With over 15 years of experience in architectural design, I specialize in creating sustainable and innovative spaces that harmoniously blend with their environment. My approach combines modern technological solutions with timeless design principles.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Each project is an opportunity to push boundaries and create something truly unique. I believe in the power of architecture to transform communities and enhance people's lives through thoughtful, sustainable design.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 container mx-auto px-4">
        <h2 className="font-playfair text-4xl mb-12 text-center">Get in Touch</h2>
        <div className="max-w-md mx-auto text-center">
          <p className="text-gray-600 mb-8">
            Interested in working together? Let's discuss your project.
          </p>
          <a
            href="mailto:contact@johnarchitect.com"
            className="inline-block bg-black text-white px-8 py-3 rounded hover:bg-gray-800 transition-colors"
          >
            Contact Me
          </a>
        </div>
      </section>
    </div>
  );
};

export default Index;