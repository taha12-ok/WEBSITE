import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Code, Smartphone, Share2 } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-secondary">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 relative z-10">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Digital Excellence
            </span>
            <br />
            <span className="text-foreground">Crafted for You</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            We transform your digital vision into stunning reality. From web development to social media management, 
            we deliver premium digital solutions that drive results and elevate your brand.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Link to="/book-service">
              <Button size="lg" className="bg-gradient-primary text-primary-foreground border-0 hover:shadow-glow transition-smooth px-8 py-4 text-lg font-medium group">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/portfolio">
              <Button variant="outline" size="lg" className="border-card-border bg-glass hover:bg-secondary transition-smooth px-8 py-4 text-lg font-medium">
                View Our Work
              </Button>
            </Link>
          </div>

          {/* Service Icons */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex flex-col items-center p-6 bg-glass rounded-xl border border-glass hover:shadow-card transition-smooth">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mb-4">
                <Code className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Web Development</h3>
              <p className="text-muted-foreground text-center">Custom websites and web applications built with cutting-edge technology</p>
            </div>

            <div className="flex flex-col items-center p-6 bg-glass rounded-xl border border-glass hover:shadow-card transition-smooth">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mb-4">
                <Smartphone className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">App Development</h3>
              <p className="text-muted-foreground text-center">Native and cross-platform mobile applications for iOS and Android</p>
            </div>

            <div className="flex flex-col items-center p-6 bg-glass rounded-xl border border-glass hover:shadow-card transition-smooth">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mb-4">
                <Share2 className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Digital Marketing</h3>
              <p className="text-muted-foreground text-center">Social media management and comprehensive digital marketing strategies</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;