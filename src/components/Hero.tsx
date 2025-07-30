import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { GraduationCap, TrendingUp, Users } from "lucide-react";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-background to-secondary/20 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            Finally, Summer Freedom That Pays
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
            Turn Your Teaching Passion Into Your Own Profitable Summer Business - Without the Red Tape
          </p>
          <Button 
            size="lg" 
            className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6"
          >
            Show Me How
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Card className="p-6 text-center border border-border bg-card">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <GraduationCap className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-card-foreground mb-2">
              Use Your Teaching Skills
            </h3>
            <p className="text-muted-foreground">
              Apply your classroom expertise to inspire young minds in an entrepreneurial setting
            </p>
          </Card>

          <Card className="p-6 text-center border border-border bg-card">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-card-foreground mb-2">
              Proven Profit Model
            </h3>
            <p className="text-muted-foreground">
              Join a tested franchise system with established revenue streams and growth potential
            </p>
          </Card>

          <Card className="p-6 text-center border border-border bg-card">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-card-foreground mb-2">
              Complete Support System
            </h3>
            <p className="text-muted-foreground">
              Get comprehensive training, marketing support, and ongoing guidance every step of the way
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Hero;