import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Code, 
  Smartphone, 
  Share2, 
  Search, 
  ShoppingCart, 
  Palette, 
  ArrowRight,
  Star,
  CheckCircle
} from "lucide-react";

const Index = () => {
  const services = [
    {
      icon: Code,
      title: "Web Development", 
      description: "Custom websites and web applications built with modern technologies",
      features: ["Responsive Design", "SEO Optimized", "Fast Loading"]
    },
    {
      icon: Smartphone,
      title: "App Development",
      description: "Native and cross-platform mobile applications for iOS and Android", 
      features: ["Cross-Platform", "Native Performance", "App Store Ready"]
    },
    {
      icon: Share2,
      title: "Social Media Management",
      description: "Comprehensive social media strategies to build your brand",
      features: ["Content Creation", "Community Management", "Analytics"]
    },
    {
      icon: Search,
      title: "SEO Optimization", 
      description: "Improve search rankings and drive organic traffic",
      features: ["Keyword Research", "On-Page SEO", "Link Building"]
    },
    {
      icon: ShoppingCart,
      title: "E-commerce Solutions",
      description: "Complete online stores with payment processing and analytics",
      features: ["Payment Integration", "Inventory Management", "Mobile Commerce"]
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Beautiful interfaces that enhance user experience", 
      features: ["User Research", "Wireframing", "Design Systems"]
    }
  ];

  const testimonials = [
    {
      name: "Bikram Singh",
      company: "Appliance Repair Pro, CEO",
      content: "Aurabex Solution transformed our online presence completely. Our website traffic increased by 300% and conversions are through the roof.",
      rating: 5
    },
    {
      name: "Briggs Johnson", 
      company: "Khaas Cart, Founder",
      content: "Professional, responsive, and delivered exactly what we needed. The mobile app they built has over 50K downloads already.",
      rating: 5
    },
    {
      name: "Amin Ali",
      company: "Flexe Market, CEO",
      content: "Best investment we made this year. The SEO work they did brought us to page 1 for all our target keywords.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />

      {/* Services Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Our Digital Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive digital solutions to transform your business and drive growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className="bg-glass rounded-xl p-8 border border-glass hover:shadow-card transition-smooth group">
                  <div className="w-16 h-16 bg-gradient-primary rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <IconComponent className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">{service.title}</h3>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-accent mr-3" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Link to="/services">
              <Button variant="outline" size="lg" className="border-card-border bg-glass hover:bg-secondary transition-smooth px-8 py-4 group">
                View All Services
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-background-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Client Success Stories
            </h2>
            <p className="text-xl text-muted-foreground">
              Hear from businesses we've helped transform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-glass rounded-xl p-6 border border-glass">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-accent fill-current" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-accent text-sm">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Featured Work
            </h2>
            <p className="text-xl text-muted-foreground">
              Recent projects that showcase our expertise
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "E-Commerce Platform", type: "Web Development", color: "from-purple-500 to-pink-500" },
              { title: "Fitness Mobile App", type: "App Development", color: "from-blue-500 to-cyan-500" },
              { title: "Corporate Website", type: "Web Development", color: "from-green-500 to-teal-500" }
            ].map((project, index) => (
              <div key={index} className="bg-glass rounded-xl overflow-hidden border border-glass hover:shadow-card transition-smooth group">
                <div className={`h-48 bg-gradient-to-br ${project.color}`}></div>
                <div className="p-6">
                  <div className="text-sm text-accent font-medium mb-2">{project.type}</div>
                  <h3 className="text-xl font-bold text-foreground">{project.title}</h3>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/portfolio">
              <Button variant="outline" size="lg" className="border-card-border bg-glass hover:bg-secondary transition-smooth px-8 py-4 group">
                View Full Portfolio
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-secondary relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Transform your digital presence with solutions that drive real results
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/book-service">
              <Button size="lg" className="bg-gradient-primary text-primary-foreground border-0 hover:shadow-glow transition-smooth px-8 py-4 text-lg font-medium">
                Start Your Project
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" size="lg" className="border-card-border bg-glass hover:bg-secondary transition-smooth px-8 py-4 text-lg font-medium">
                Get Free Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
