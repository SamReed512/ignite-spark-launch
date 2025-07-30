import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary/50 border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Contact Information</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">(123) 456-7890</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">franchise@neurongarage.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">Franchise Headquarters<br />Your City, State</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Quick Links</h3>
            <div className="space-y-2">
              <a href="#about" className="block text-muted-foreground hover:text-primary transition-colors">
                About the Program
              </a>
              <a href="#investment" className="block text-muted-foreground hover:text-primary transition-colors">
                Investment Details
              </a>
              <a href="#territories" className="block text-muted-foreground hover:text-primary transition-colors">
                Available Territories
              </a>
              <a href="#support" className="block text-muted-foreground hover:text-primary transition-colors">
                Training & Support
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Neuron Garage Franchise</h3>
            <p className="text-muted-foreground mb-4">
              Empowering educators to build profitable summer businesses while inspiring young entrepreneurs.
            </p>
            <p className="text-sm text-muted-foreground">
              © 2024 Neuron Garage. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;