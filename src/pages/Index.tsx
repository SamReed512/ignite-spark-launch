import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Users, TrendingUp, Award, MapPin, Phone, Mail } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center bg-gradient-to-br from-primary/5 to-primary/10">
        <div className="container mx-auto max-w-6xl">
          <Badge className="mb-6" variant="secondary">Proven Business Model • Track Record of Success</Badge>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
            Break Free from Bureaucracy.
            <br />
            Own Your Educational Impact.
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Escape the frustrations of traditional education. Join our proven Growth Mindset Camp franchise and make real decisions while building meaningful summer income.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="text-lg px-8 py-4">
              Join Our Franchise Family
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-4">
              Download Info Kit
            </Button>
          </div>
          
          <div className="text-sm text-muted-foreground">
            <span className="font-semibold">Ground-Floor Opportunity</span> • Prime Territories Available • World-Class Support
          </div>
        </div>
      </section>

      {/* Educator Pain Points & Solution */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Finally, An Education Business YOU Control
            </h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Join Our Proven Franchise Family - Where Frustrated Educators Become Empowered Entrepreneurs
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-destructive">Are You Frustrated With...</h3>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <span className="text-destructive text-xl">✗</span>
                  <span>Endless bureaucracy limiting your classroom decisions</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-destructive text-xl">✗</span>
                  <span>Summer income gaps affecting your financial security</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-destructive text-xl">✗</span>
                  <span>Administrators who've never taught making education policy</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-destructive text-xl">✗</span>
                  <span>Limited ability to truly impact students the way you know works</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-6 text-primary">Your Solution is Here:</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-primary mt-1 flex-shrink-0" size={20} />
                  <span><strong>Complete Autonomy:</strong> Make all camp decisions yourself</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-primary mt-1 flex-shrink-0" size={20} />
                  <span><strong>Proven Income Model:</strong> $30K+ potential in 8 weeks</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-primary mt-1 flex-shrink-0" size={20} />
                  <span><strong>Award-Winning Program:</strong> Recognized best camp system</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-primary mt-1 flex-shrink-0" size={20} />
                  <span><strong>Real Impact:</strong> Transform lives with growth mindset education</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="bg-primary/10 p-6 rounded-lg text-center">
              <h3 className="font-semibold text-lg mb-2">ESCAPE</h3>
              <p className="text-muted-foreground">the bureaucracy and join a proven franchise system with track record of success</p>
            </div>
            
            <div className="bg-primary/10 p-6 rounded-lg text-center">
              <h3 className="font-semibold text-lg mb-2">CONTROL</h3>
              <p className="text-muted-foreground">your destiny with comprehensive training and world-class ongoing support</p>
            </div>
            
            <div className="bg-primary/10 p-6 rounded-lg text-center">
              <h3 className="font-semibold text-lg mb-2">THRIVE</h3>
              <p className="text-muted-foreground">as an entrepreneur while making the educational impact you've always wanted</p>
            </div>
          </div>
        </div>
      </section>

      {/* Growth Mindset Program Overview */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              The Growth Mindset Camp Program
            </h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              A proven curriculum that transforms young minds through hands-on building challenges using recycled materials
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold mb-6">Think {`>`} Build {`>`} Learn™ Framework</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Our award-winning approach helps campers develop resilience, creativity, and problem-solving skills through weekly engineering challenges. Each week presents a new theme - from Medieval Castles to Dream Homes - keeping engagement high and learning meaningful.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-primary mt-1 flex-shrink-0" size={16} />
                  <span>Weekly building challenges using recycled materials</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-primary mt-1 flex-shrink-0" size={16} />
                  <span>Challenge Donut™ framework for managing comfort zones</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-primary mt-1 flex-shrink-0" size={16} />
                  <span>Peer Council for collaborative learning</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-primary mt-1 flex-shrink-0" size={16} />
                  <span>Individual progress tracking and reflection</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-card p-6 rounded-lg border">
              <h4 className="font-bold mb-4">Sample Weekly Themes:</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                  <span>Medieval Times: Castles and Catapults</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                  <span>Cardboard Arcade Games</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                  <span>Dream Homes Architecture</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                  <span>Locomotion: Planes, Trains & Automobiles</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                  <span>Freedom Build (Camper Choice)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Neuron Garage Wins */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              5 Ways Neuron Garage is in a Camp of Its Own
            </h2>
            <p className="text-lg text-muted-foreground">
              Join a booming brand with substantial support for franchise owners
            </p>
          </div>

          <div className="grid gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <TrendingUp className="text-primary" />
                  1. Top-Grade Business Model
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  No other summer camp franchise brings alternative education into a summer enrichment program like ours - all while leveraging existing school facilities (no real estate investments required!).
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Award className="text-primary" />
                  2. Growth Mindset Method
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Our Think {`>`} Build {`>`} Learn™ approach guides campers as they test ideas, learn from outcomes, and unlock their true potential - providing valuable, sought-after learning experiences for local families.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Users className="text-primary" />
                  3. Sustainable & Scalable
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Theme-based, eco-focused curriculum using recycled materials means minimum environmental impact, maximum learning impact, and potential for multi-unit expansion.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Investment Overview */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Invest In Your Future
            </h2>
            <p className="text-lg text-muted-foreground">
              Lower Risk Entrepreneurship with Comprehensive Training & Support
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardHeader>
                <CardTitle>Initial Investment Range</CardTitle>
                <CardDescription>Everything you need to get started</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span>Initial Franchise Fee</span>
                  <span className="font-semibold">$14,760 - $19,400</span>
                </div>
                <div className="flex justify-between">
                  <span>Marketing Materials Credit</span>
                  <span className="font-semibold">$1,000</span>
                </div>
                <div className="flex justify-between">
                  <span>Launch Advertising Recommendation</span>
                  <span className="font-semibold">$2,500</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Ongoing Fees</CardTitle>
                <CardDescription>Transparent fee structure</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span>Royalty Fee</span>
                  <span className="font-semibold">20% of net revenues</span>
                </div>
                <div className="flex justify-between">
                  <span>Local Marketing Requirement</span>
                  <span className="font-semibold">$2,500/year</span>
                </div>
                <div className="flex justify-between">
                  <span>Brand Development Fund</span>
                  <span className="font-semibold">3% of net revenues</span>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="bg-primary/10 p-8 rounded-lg text-center">
            <h3 className="text-xl font-bold mb-4">Why This Investment Makes Sense for Educators</h3>
            <div className="grid md:grid-cols-3 gap-6 text-sm">
              <div>
                <strong>Minimize Risk:</strong> Reasonable startup costs with no brick-and-mortar investment
              </div>
              <div>
                <strong>Launch Quickly:</strong> Well-established business model designed for early registration
              </div>
              <div>
                <strong>Protected Territory:</strong> Exclusive rights in your area with detailed operating specs
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Territories Available */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Prime Territories Available
            </h2>
            <p className="text-lg text-muted-foreground">
              Ground-floor opportunity in key metropolitan areas
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-xl font-bold mb-6">Expanding Throughout the Southwest</h3>
              <p className="text-muted-foreground mb-6">
                We're bringing growth mindset education to communities across Texas, Arizona, New Mexico, Oklahoma, and Kansas. Join us as we expand nationwide.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <MapPin className="text-primary" size={20} />
                  <span><strong>Texas:</strong> Austin, Dallas, Houston, San Antonio metro areas</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="text-primary" size={20} />
                  <span><strong>Arizona:</strong> Phoenix, Tucson expanding markets</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="text-primary" size={20} />
                  <span><strong>Regional:</strong> New Mexico, Oklahoma, Kansas opportunities</span>
                </div>
              </div>
            </div>
            
            <div className="bg-card p-6 rounded-lg border">
              <h4 className="font-bold mb-4 text-center">Ideal Franchise Owner Profile</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-primary mt-0.5 flex-shrink-0" size={16} />
                  <span>3+ years experience working with groups of children</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-primary mt-0.5 flex-shrink-0" size={16} />
                  <span>Elementary teaching or camp experience</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-primary mt-0.5 flex-shrink-0" size={16} />
                  <span>Belief in growth mindset education</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-primary mt-0.5 flex-shrink-0" size={16} />
                  <span>Willingness to serve as owner-operator</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-primary mt-0.5 flex-shrink-0" size={16} />
                  <span>Mentor mindset and problem-solving skills</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Training & Support */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              World-Class Training & Ongoing Support
            </h2>
            <p className="text-lg text-muted-foreground">
              You're in business for yourself, but not by yourself
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Comprehensive Training</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• 16.5 hours online programming</li>
                  <li>• 10 required training modules</li>
                  <li>• Live virtual sessions</li>
                  <li>• Guide certification program</li>
                  <li>• On-the-job coaching support</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Operations Support</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Confidential operations manual</li>
                  <li>• Facility negotiation guidance</li>
                  <li>• Online registration software</li>
                  <li>• Marketing materials & strategies</li>
                  <li>• Remote coaching available</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Franchise Family</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Connect with educator-entrepreneurs</li>
                  <li>• Share business-building strategies</li>
                  <li>• Growth mindset community</li>
                  <li>• Ongoing professional development</li>
                  <li>• Peer mentorship network</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Control Your Educational Future?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join our growing franchise family where educators become empowered entrepreneurs. Your ground-floor opportunity awaits.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-4">
              Start Your Application
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-4 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              Schedule Discovery Call
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-6 text-sm opacity-90">
            <div className="flex items-center justify-center gap-2">
              <Phone size={16} />
              <span>(512) 593-5393</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Mail size={16} />
              <span>franchise@neurongarage.com</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <MapPin size={16} />
              <span>Telluride, CO</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Disclaimer */}
      <footer className="py-8 px-4 text-center text-sm text-muted-foreground border-t">
        <div className="container mx-auto max-w-4xl">
          <p className="mb-2">
            This advertisement is not an offer to sell a franchise. An offer can only be made by a disclosure document filed first with the appropriate agencies.
          </p>
          <p>
            Neuron Garage Franchise, LLC • 150 S. Willow Street #2125, Telluride, CO 81435
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;