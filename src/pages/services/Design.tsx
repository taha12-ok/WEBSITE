import Navigation from "@/components/Navigation";
import ContactForm from "@/components/ContactForm";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Palette, Figma, Eye, Layers, Users, Zap, CheckCircle } from "lucide-react";

const Design = () => {
  const services = [
    {
      icon: Figma,
      title: "UI Design",
      description: "Beautiful, intuitive interfaces that users love to interact with"
    },
    {
      icon: Eye,
      title: "UX Research",
      description: "User-centered research to create optimal user experiences"
    },
    {
      icon: Layers,
      title: "Design Systems",
      description: "Scalable design systems for consistent brand experiences"
    },
    {
      icon: Zap,
      title: "Prototyping",
      description: "Interactive prototypes to test and validate designs"
    }
  ];

  const designTypes = [
    "Website Design", "Mobile App Design", "Dashboard Design", "E-commerce Design",
    "Landing Pages", "Brand Identity", "Logo Design", "Marketing Materials"
  ];

  const packages = [
    {
      name: "Design Audit",
      price: "$300",
      features: [
        "UX/UI analysis",
        "Usability assessment", 
        "Design recommendations",
        "Improvement roadmap",
        "Presentation & handoff",
        "30-day support"
      ]
    },
    {
      name: "Complete Redesign",
      price: "$500 - $700",
      features: [
        "User research & personas",
        "Information architecture",
        "Wireframes & mockups",
        "Interactive prototypes",
        "Design system creation",
        "Developer handoff"
      ]
    },
    {
      name: "Design Partnership",
      price: "$700+/month",
      features: [
        "Dedicated design team",
        "Ongoing design support",
        "A/B testing designs",
        "Performance optimization",
        "Continuous improvements",
        "Priority support"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-secondary relative overflow-hidden">
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-8">
                <span className="bg-gradient-primary bg-clip-text text-transparent">UI/UX</span>
                <br />
                <span className="text-foreground">Design</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Create exceptional user experiences that convert visitors into customers. 
                Our design team crafts beautiful, functional interfaces that drive engagement and business results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/book-service">
                  <Button size="lg" className="bg-gradient-primary text-primary-foreground border-0 hover:shadow-glow transition-smooth px-8 py-4">
                    Start Design Project
                  </Button>
                </Link>
                <Link to="/portfolio">
                  <Button variant="outline" size="lg" className="border-card-border bg-glass hover:bg-secondary transition-smooth px-8 py-4">
                    View Design Work
                  </Button>
                </Link>
              </div>
            </div>
            <div className="bg-glass rounded-2xl p-8 border border-glass">
              <div className="w-16 h-16 bg-gradient-primary rounded-lg flex items-center justify-center mb-6">
                <Palette className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Why Choose Our Design?</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Users className="h-5 w-5 text-accent mr-3" />
                  <span className="text-muted-foreground">User-centered design approach</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-accent mr-3" />
                  <span className="text-muted-foreground">Data-driven design decisions</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-accent mr-3" />
                  <span className="text-muted-foreground">Proven conversion optimization</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-accent mr-3" />
                  <span className="text-muted-foreground">Fast turnaround times</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Design Services
            </h2>
            <p className="text-xl text-muted-foreground">
              Comprehensive design solutions for digital products
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Design Types */}
      <section className="py-20 bg-background-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              What We Design
            </h2>
            <p className="text-xl text-muted-foreground">
              From websites to mobile apps, we design it all
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {designTypes.map((type, index) => (
              <div key={index} className="bg-glass rounded-lg p-4 text-center border border-glass hover:shadow-card transition-smooth">
                <span className="text-muted-foreground font-medium">{type}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Our Design Process
            </h2>
            <p className="text-xl text-muted-foreground">
              User-centered design methodology for optimal results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {[
              { step: "01", title: "Research", description: "Understanding users, goals, and constraints" },
              { step: "02", title: "Ideate", description: "Brainstorming solutions and concepts" },
              { step: "03", title: "Design", description: "Creating wireframes and visual designs" },
              { step: "04", title: "Prototype", description: "Building interactive prototypes" },
              { step: "05", title: "Test", description: "User testing and design refinement" }
            ].map((phase, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-lg font-bold text-primary-foreground">{phase.step}</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{phase.title}</h3>
                <p className="text-muted-foreground text-sm">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-background-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Design Packages
            </h2>
            <p className="text-xl text-muted-foreground">
              Flexible design solutions for every project and budget
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div key={index} className={`bg-glass rounded-xl p-8 border border-glass hover:shadow-card transition-smooth ${index === 1 ? 'ring-2 ring-accent' : ''}`}>
                {index === 1 && (
                  <div className="text-center mb-4">
                    <span className="bg-gradient-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <h3 className="text-2xl font-bold text-foreground mb-4">{pkg.name}</h3>
                <div className="text-3xl font-bold text-accent mb-6">{pkg.price}</div>
                <div className="space-y-3 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-accent mr-3" />
                      <span className="text-muted-foreground text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                <Link to="/book-service">
                  <Button className={`w-full transition-smooth ${index === 1 ? 'bg-gradient-primary text-primary-foreground border-0 hover:shadow-glow' : 'variant-outline border-card-border bg-glass hover:bg-secondary'}`}>
                    Choose Package
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ContactForm 
            title="Ready to Transform Your Design?"
            subtitle="Let's create user experiences that not only look amazing but drive real business results."
            isBookingForm={true}
          />
        </div>
      </section>
    </div>
  );
};

export default Design;