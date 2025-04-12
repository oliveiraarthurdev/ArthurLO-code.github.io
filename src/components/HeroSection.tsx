import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-gradient-to-b from-fifa-blue to-fifa-dark py-20">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMxNDQ2NzUiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRjMC0yLjIgMS44LTQgNC00czQgMS44IDQgNC0xLjggNC00IDQtNC0xLjgtNC00eiIvPjwvZz48L2c+PC9zdmc+')] opacity-10"></div>

      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between relative z-10">
        <div className="text-center md:text-left md:w-1/2 mb-10 md:mb-0">
          <div className="inline-block px-6 py-3 mb-6 border border-fifa-teal/30 bg-fifa-blue/50 backdrop-blur-sm rounded-lg">
            <h2 className="text-fifa-teal font-medium">Software Developer</h2>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Arthur's <br />
            <span className="text-fifa-gold">Developer Career</span>
          </h1>
          <p className="text-white/80 text-lg md:text-xl max-w-lg mb-8">
            Building powerful applications with clean code and creative solutions. Turning coffee into code since 20XX.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button className="bg-fifa-teal text-fifa-dark hover:bg-fifa-teal/90">
              See My Work
            </Button>
            <Button variant="outline" className="text-white border-white hover:bg-white/10">
              Get In Touch
            </Button>
          </div>
        </div>

        <div className="w-full md:w-1/2 max-w-md">
          <div className="fifa-card relative p-1">
            <div className="fifa-card-shine"></div>
            <div className="relative">
              <div className="absolute top-0 left-0 bg-fifa-gold text-fifa-dark font-bold py-1 px-3 rounded-br-lg z-10">
                99
              </div>
              <div className="bg-gradient-to-b from-transparent to-fifa-dark/80 absolute inset-0 z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1544502062-f82887f03d1c?w=600&auto=format&fit=crop&q=80" 
                alt="Developer Profile" 
                className="w-full aspect-[3/4] object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
                <h3 className="text-2xl font-bold">ARTHUR</h3>
                <p className="text-fifa-teal">Full Stack Developer</p>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-1 bg-fifa-dark p-2 text-center">
              <div>
                <p className="text-3xl font-bold text-fifa-gold">99</p>
                <p className="text-xs uppercase opacity-80">Code</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-fifa-gold">95</p>
                <p className="text-xs uppercase opacity-80">Design</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-fifa-gold">97</p>
                <p className="text-xs uppercase opacity-80">Problem</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <a 
        href="#about" 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/80 hover:text-white animate-bounce"
      >
        <ChevronDown className="h-8 w-8" />
      </a>
    </section>
  );
};

export default HeroSection;
