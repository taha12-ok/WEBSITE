import Navigation from "@/components/Navigation";
import ContactForm from "@/components/ContactForm";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Palette, FileText, Image, Target, Star, Users, CheckCircle } from "lucide-react";

const Branding = () => {
  const services = [
    {
      icon: Palette,
      title: "Logo Design",
      description: "Memorable logos that capture your brand essence and stand out"
    },
    {
      icon: FileText,
      title: "Brand Guidelines",
      description: "Comprehensive brand standards for consistent identity across all touchpoints"
    },
    {
      icon: Image,
      title: "Marketing Materials",
      description: "Business cards, brochures, and digital assets that reinforce your brand"
    },
    {
      icon: Target,
      title: "Brand Strategy",
      description: "Strategic positioning that differentiates you in the marketplace"
    }
  ];

  const deliverables = [
    "Logo Design & Variations", "Brand Guidelines Document", "Color Palette & Typography",
    "Business Card Design", "Letterhead & Stationary", "Social Media Templates",
    "Website Mockups", "Brand Photography Direction"
  ];

  const packages = [
    {
      name: "Brand Refresh",
      price: "$300",
      features: [
        "Logo redesign",
        "Color palette update",
        "Typography selection",
        "Basic brand guidelines",
        "Business card design",
        "2 revision rounds"
      ]
    },
    {
      name: "Complete Rebrand",
      price: "$500",
      features: [
        "Full brand strategy",
        "Logo design & variations",
        "Comprehensive guidelines",
        "Marketing collateral suite",
        "Social media templates",
        "3 revision rounds"
      ]
    },
    {
      name: "Brand + Website",
      price: "$700",
      features: [
        "Everything in Complete Rebrand",
        "Custom website design",
        "Brand implementation",
        "SEO-optimized content",
        "Social media launch kit",
        "Unlimited revisions"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-secondary relative overflow-hidden">
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-8">
                <span className="bg-gradient-primary bg-clip-text text-transparent">Brand</span>
                <br />
                <span className="text-foreground">Identity</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Build a memorable brand that resonates with your audience and drives business success. 
                From logo design to comprehensive brand guidelines, we create identities that last.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/book-service">
                  <Button size="lg" className="bg-gradient-primary text-primary-foreground border-0 hover:shadow-glow transition-smooth px-8 py-4">
                    Build My Brand
                  </Button>
                </Link>
                <Link to="/portfolio">
                  <Button variant="outline" size="lg" className="border-card-border bg-glass hover:bg-secondary transition-smooth px-8 py-4">
                    View Brand Work
                  </Button>
                </Link>
              </div>
            </div>
            <div className="bg-glass rounded-2xl p-8 border border-glass">
              <div className="w-16 h-16 bg-gradient-primary rounded-lg flex items-center justify-center mb-6">
                <Star className="h-8 w-8 text-primary-foreground fill-current" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Why Choose Our Branding?</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Users className="h-5 w-5 text-accent mr-3" />
                  <span className="text-muted-foreground">Award-winning creative team</span>
                </div>
                <div className="flex items-center">
                  <Target className="h-5 w-5 text-accent mr-3" />
                  <span className="text-muted-foreground">Strategic brand positioning</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-accent mr-3" />
                  <span className="text-muted-foreground">Trademark research included</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-accent mr-3" />
                  <span className="text-muted-foreground">Lifetime brand support</span>
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
              Branding Services
            </h2>
            <p className="text-xl text-muted-foreground">
              Complete brand identity solutions that make lasting impressions
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

      {/* Deliverables */}
      <section className="py-20 bg-background-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              What You'll Receive
            </h2>
            <p className="text-xl text-muted-foreground">
              Complete brand assets ready for immediate use
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {deliverables.map((deliverable, index) => (
              <div key={index} className="bg-glass rounded-lg p-4 text-center border border-glass hover:shadow-card transition-smooth">
                <span className="text-muted-foreground font-medium">{deliverable}</span>
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
              Branding Process
            </h2>
            <p className="text-xl text-muted-foreground">
              Collaborative approach to create your perfect brand identity
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {[
              { step: "01", title: "Discovery", description: "Understanding your vision, values, and target audience" },
              { step: "02", title: "Strategy", description: "Defining brand positioning and messaging framework" },
              { step: "03", title: "Design", description: "Creating logos, colors, and visual identity elements" },
              { step: "04", title: "Refine", description: "Collaborative refinement based on your feedback" },
              { step: "05", title: "Launch", description: "Final delivery with brand guidelines and assets" }
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
              Branding Packages
            </h2>
            <p className="text-xl text-muted-foreground">
              Professional brand identity solutions for every business stage
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
            title="Ready to Build Your Brand?"
            subtitle="Let's create a brand identity that tells your story and connects with your audience."
            isBookingForm={true}
          />
        </div>
      </section>
    </div>
  );
};

export default Branding;