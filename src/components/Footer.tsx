
import { ChevronUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="bg-fifa-dark py-10 text-white relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <button
            onClick={scrollToTop}
            className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-fifa-teal text-fifa-dark p-2 rounded-full hover:bg-fifa-teal/90 transition-colors"
          >
            <ChevronUp className="h-5 w-5" />
          </button>
          
          <div className="text-center">
            <h2 className="font-bold text-xl mb-1">DEV<span className="text-fifa-teal">FIFA</span></h2>
            <p className="text-white/60 text-sm max-w-md mx-auto">
              Software developer portfolio with a passion for clean code and creative solutions
            </p>
          </div>
          
          <div className="my-6 w-full max-w-xs h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
          
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-6">
            {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className="text-white/70 hover:text-fifa-teal text-sm transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>
          
          <p className="text-white/50 text-sm">
            &copy; {new Date().getFullYear()} Your Name. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
