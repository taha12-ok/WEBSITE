import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Code, 
  Smartphone, 
  Share2, 
  Search, 
  ShoppingCart, 
  Palette,
  BarChart,
  Shield,
  ArrowRight 
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Web Development",
      description: "Custom websites and web applications built with modern technologies like React, Next.js, and Node.js",
      features: ["Responsive Design", "SEO Optimized", "Fast Loading", "Mobile-First"],
      href: "/services/web-development"
    },
    {
      icon: Smartphone,
      title: "App Development", 
      description: "Native and cross-platform mobile applications for iOS and Android using React Native and Flutter",
      features: ["Cross-Platform", "Native Performance", "App Store Ready", "Push Notifications"],
      href: "/services/app-development"
    },
    {
      icon: Share2,
      title: "Social Media Management",
      description: "Comprehensive social media strategies to build your brand and engage your audience",
      features: ["Content Creation", "Community Management", "Analytics", "Paid Advertising"],
      href: "/services/social-media"
    },
    {
      icon: Search,
      title: "SEO Optimization",
      description: "Improve your search engine rankings and drive organic traffic to your website",
      features: ["Keyword Research", "On-Page SEO", "Technical SEO", "Link Building"],
      href: "/services/seo"
    },
    {
      icon: ShoppingCart,
      title: "E-commerce Solutions",
      description: "Complete online stores with payment processing, inventory management, and analytics",
      features: ["Payment Integration", "Inventory Management", "Order Tracking", "Mobile Commerce"],
      href: "/services/ecommerce"
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Beautiful and intuitive user interfaces that enhance user experience and drive conversions",
      features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
      href: "/services/design"
    },
    {
      icon: BarChart,
      title: "Digital Marketing",
      description: "Data-driven marketing campaigns that increase brand awareness and generate leads",
      features: ["PPC Advertising", "Email Marketing", "Content Marketing", "Analytics"],
      href: "/services/marketing"
    },
    {
      icon: Shield,
      title: "Brand Identity",
      description: "Complete brand identity packages including logo design, brand guidelines, and marketing materials",
      features: ["Logo Design", "Brand Guidelines", "Marketing Materials", "Brand Strategy"],
      href: "/services/branding"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-secondary relative overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-8">
              <span className="text-foreground">Our </span>
              <span className="bg-gradient-primary bg-clip-text text-transparent">Services</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Comprehensive digital solutions to transform your business and drive growth. 
              From web development to digital marketing, we've got you covered.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className="bg-glass rounded-xl p-8 border border-glass hover:shadow-card transition-smooth group">
                  <div className="w-16 h-16 bg-gradient-primary rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <IconComponent className="h-8 w-8 text-primary-foreground" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-foreground mb-4">{service.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
                  
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm">
                        <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Link to={service.href}>
                    <Button variant="outline" className="w-full border-card-border bg-glass hover:bg-secondary transition-smooth group">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-background-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Our Process
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A proven methodology that ensures successful project delivery
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", description: "Understanding your goals and requirements" },
              { step: "02", title: "Strategy", description: "Developing the perfect solution approach" },
              { step: "03", title: "Execution", description: "Building with precision and attention to detail" },
              { step: "04", title: "Launch", description: "Deploying and optimizing for success" }
            ].map((phase, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-primary-foreground">{phase.step}</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{phase.title}</h3>
                <p className="text-muted-foreground">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Let's discuss your project and create a solution that drives results
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/book-service">
              <Button size="lg" className="bg-gradient-primary text-primary-foreground border-0 hover:shadow-glow transition-smooth px-8 py-4">
                Book a Consultation
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" size="lg" className="border-card-border bg-glass hover:bg-secondary transition-smooth px-8 py-4">
                Get a Quote
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;