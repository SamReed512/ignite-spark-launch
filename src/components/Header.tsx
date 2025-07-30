import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const Header = () => {
  return (
    <header className="w-full bg-background border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <h1 className="text-xl font-bold text-foreground">Neuron Garage</h1>
        </div>
        
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#about" className="text-foreground hover:text-primary transition-colors">
            About
          </a>
          <a href="#program" className="text-foreground hover:text-primary transition-colors">
            Program
          </a>
          <a href="#investment" className="text-foreground hover:text-primary transition-colors">
            Investment
          </a>
          <a href="#territories" className="text-foreground hover:text-primary transition-colors">
            Territories
          </a>
          <a href="#support" className="text-foreground hover:text-primary transition-colors">
            Support
          </a>
        </nav>

        <div className="flex items-center space-x-4">
          <a 
            href="tel:+1234567890" 
            className="hidden sm:flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors"
          >
            <Phone className="h-4 w-4" />
            <span className="font-semibold">(123) 456-7890</span>
          </a>
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;