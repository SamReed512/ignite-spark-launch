import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { GraduationCap, TrendingUp, Users } from "lucide-react";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-background via-muted/30 to-muted/50 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            Finally, Summer Freedom That Pays
          </h1>
          <p className="text-xl md:text-2xl text-foreground/80 mb-8 leading-relaxed max-w-3xl mx-auto">
            Turn Your Teaching Passion Into Your Own Profitable Summer Business - Without the Red Tape
          </p>
          <button className="bg-success text-success-foreground hover:bg-success/90 transition-colors text-2xl px-12 py-6 rounded-lg font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all">
            Show Me How
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="p-8 text-center border border-border bg-card rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="w-20 h-20 bg-warning/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <GraduationCap className="h-10 w-10 text-warning" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">
              Your Classroom, Your Rules
            </h3>
            <p className="text-foreground/70 leading-relaxed">
              Design learning experiences without bureaucratic constraints
            </p>
          </div>

          <div className="p-8 text-center border border-border bg-card rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <TrendingUp className="h-10 w-10 text-accent" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">
              Summer Income Revolution
            </h3>
            <p className="text-foreground/70 leading-relaxed">
              Earn more in 8 weeks than traditional summer jobs pay all season
            </p>
          </div>

          <div className="p-8 text-center border border-border bg-card rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="w-20 h-20 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="h-10 w-10 text-secondary" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">
              Impact Without Limits
            </h3>
            <p className="text-foreground/70 leading-relaxed">
              Watch children thrive using methods you've always wanted to try
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;