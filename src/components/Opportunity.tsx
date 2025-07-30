import { DollarSign, BookOpen, Heart, TrendingUp, Users } from "lucide-react";

const Opportunity = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-8">
            What If Summer Break Didn't Mean Income Break?
          </h2>
          <p className="text-lg md:text-xl text-foreground/80 leading-relaxed mb-12">
            You're the teacher parents request by name. The one who stays late, spends your own money on supplies, 
            and creates magic in your classroom despite endless meetings and testing requirements. But every June, 
            your income stops while your impact does too. <span className="font-semibold text-primary">What if we told you there's a better way?</span>
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-card border border-border rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <DollarSign className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-lg font-bold text-foreground mb-3">Summer Income Gap</h3>
            <p className="text-foreground/70">Most teachers earn 75% less during summer months</p>
          </div>

          <div className="bg-card border border-border rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8 text-accent" />
            </div>
            <h3 className="text-lg font-bold text-foreground mb-3">Your Skills Work</h3>
            <p className="text-foreground/70">You already manage 20-30 children and demanding parents daily</p>
          </div>

          <div className="bg-card border border-border rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-warning/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <BookOpen className="h-8 w-8 text-warning" />
            </div>
            <h3 className="text-lg font-bold text-foreground mb-3">Creative Freedom</h3>
            <p className="text-foreground/70">Finally implement the hands-on, project-based learning you've envisioned</p>
          </div>

          <div className="bg-card border border-border rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="h-8 w-8 text-secondary" />
            </div>
            <h3 className="text-lg font-bold text-foreground mb-3">Growing Demand</h3>
            <p className="text-foreground/70">Parents desperately seek quality summer programs that actually educate</p>
          </div>

          <div className="bg-card border border-border rounded-lg p-6 text-center hover:shadow-lg transition-shadow md:col-span-2 lg:col-span-2">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-lg font-bold text-foreground mb-3">Proven Success Model</h3>
            <p className="text-foreground/70">$4.7B summer camp industry with teacher-led programs showing highest satisfaction</p>
          </div>
        </div>

        <div className="bg-muted/30 rounded-lg p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
            Are You Ready to Transform Your Summer?
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-foreground/80">"Tired of spending summers working retail or waiting tables?"</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-foreground/80">"Frustrated by bureaucracy limiting your teaching creativity?"</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-foreground/80">"Want to make real money while making real impact?"</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-foreground/80">"Ready to be appreciated for your expertise instead of constrained by testing schedules?"</p>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <button className="bg-primary text-primary-foreground hover:bg-primary/90 transition-colors px-8 py-3 rounded-lg font-semibold">
              See What Teachers Are Earning
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Opportunity;