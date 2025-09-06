import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Users, Target, Award, Rocket } from "lucide-react";

const About = () => {
  

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-secondary relative overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-8">
              <span className="bg-gradient-primary bg-clip-text text-transparent">About</span>
              <span className="text-foreground"> DigitalCraft</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We are a passionate team of digital innovators dedicated to transforming businesses 
              through cutting-edge technology and creative excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
                Our Mission
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                At DigitalCraft, we believe every business deserves a digital presence that not only 
                looks stunning but drives real results. We combine technical expertise with creative 
                vision to deliver solutions that exceed expectations and fuel growth.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2">150+</div>
                  <div className="text-muted-foreground">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2">98%</div>
                  <div className="text-muted-foreground">Client Satisfaction</div>
                </div>
              </div>
            </div>
            <div className="bg-glass rounded-2xl p-8 border border-glass">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4">
                  <Users className="h-12 w-12 text-accent mx-auto mb-4" />
                  <h3 className="font-semibold text-foreground mb-2">Client-Focused</h3>
                  <p className="text-sm text-muted-foreground">Your success is our priority</p>
                </div>
                <div className="text-center p-4">
                  <Target className="h-12 w-12 text-accent mx-auto mb-4" />
                  <h3 className="font-semibold text-foreground mb-2">Results-Driven</h3>
                  <p className="text-sm text-muted-foreground">Data-backed strategies</p>
                </div>
                <div className="text-center p-4">
                  <Award className="h-12 w-12 text-accent mx-auto mb-4" />
                  <h3 className="font-semibold text-foreground mb-2">Award-Winning</h3>
                  <p className="text-sm text-muted-foreground">Industry recognition</p>
                </div>
                <div className="text-center p-4">
                  <Rocket className="h-12 w-12 text-accent mx-auto mb-4" />
                  <h3 className="font-semibold text-foreground mb-2">Innovation</h3>
                  <p className="text-sm text-muted-foreground">Cutting-edge solutions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Ready to Work Together?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Let's create something amazing that drives your business forward
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/book-service">
              <Button size="lg" className="bg-gradient-primary text-primary-foreground border-0 hover:shadow-glow transition-smooth px-8 py-4">
                Start Your Project
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" size="lg" className="border-card-border bg-glass hover:bg-secondary transition-smooth px-8 py-4">
                Get In Touch
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;