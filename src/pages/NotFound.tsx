import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="min-h-screen flex items-center justify-center bg-gradient-secondary relative overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
        
        <div className="text-center relative z-10 px-4">
          <h1 className="text-8xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">404</h1>
          <h2 className="text-4xl font-bold mb-6 text-foreground">Page Not Found</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-md mx-auto">
            Oops! The page you're looking for seems to have wandered off into the digital void.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/">
              <Button size="lg" className="bg-gradient-primary text-primary-foreground border-0 hover:shadow-glow transition-smooth px-8 py-4">
                Return Home
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" size="lg" className="border-card-border bg-glass hover:bg-secondary transition-smooth px-8 py-4">
                Contact Support
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
