
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 bg-fifa-blue bg-opacity-95 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <span className="font-bold text-xl text-white">DEV<span className="text-fifa-teal">FIFA</span></span>
        </div>
        <nav className="hidden md:flex items-center space-x-8">
          {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="text-white hover:text-fifa-teal font-medium transition-colors"
            >
              {item}
            </a>
          ))}
        </nav>
        <Button variant="ghost" size="icon" className="md:hidden text-white hover:bg-fifa-blue/80">
          <Menu className="h-6 w-6" />
        </Button>
      </div>
    </header>
  );
};

export default Navbar;
