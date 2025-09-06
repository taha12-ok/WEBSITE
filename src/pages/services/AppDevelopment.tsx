import Navigation from "@/components/Navigation";
import ContactForm from "@/components/ContactForm";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Smartphone, Apple, Bot, Zap, Users, Star, CheckCircle } from "lucide-react";

const AppDevelopment = () => {
  const features = [
    {
      icon: Apple,
      title: "iOS Development",
      description: "Native iOS apps with Swift and Objective-C"
    },
    {
      icon: Bot,
      title: "Android Development", 
      description: "Native Android apps with Kotlin and Java"
    },
    {
      icon: Zap,
      title: "Cross-Platform",
      description: "React Native and Flutter for faster development"
    },
    {
      icon: Users,
      title: "User Experience",
      description: "Intuitive interfaces that users love"
    }
  ];

  const appTypes = [
    "Business Apps", "E-commerce Apps", "Social Media Apps", "Healthcare Apps",
    "Education Apps", "Fitness Apps", "Travel Apps", "Food Delivery Apps",
    "Finance Apps", "Entertainment Apps", "Productivity Apps", "Gaming Apps"
  ];

  const packages = [
    {
      name: "Simple App",
      price: "$5,000 - $10,000", 
      timeline: "2-3 months",
      features: [
        "Single platform (iOS or Android)",
        "Basic functionality",
        "User authentication",
        "Push notifications",
        "App store submission",
        "3 months support"
      ]
    },
    {
      name: "Advanced App",
      price: "$10,000 - $20,000",
      timeline: "3-5 months", 
      features: [
        "Cross-platform development",
        "Advanced features",
        "API integrations",
        "Real-time functionality",
        "Analytics integration",
        "6 months support"
      ]
    },
    {
      name: "Enterprise App", 
      price: "$30,000+",
      timeline: "5-8 months",
      features: [
        "Complex functionality",
        "Custom backend",
        "Advanced security",
        "Scalable architecture",
        "Admin dashboard",
        "12 months support"
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
                <span className="bg-gradient-primary bg-clip-text text-transparent">Mobile App</span>
                <br />
                <span className="text-foreground">Development</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Native and cross-platform mobile applications that engage users and drive business growth. 
                From concept to app store, we create apps that users love and businesses rely on.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/book-service">
                  <Button size="lg" className="bg-gradient-primary text-primary-foreground border-0 hover:shadow-glow transition-smooth px-8 py-4">
                    Start Your App
                  </Button>
                </Link>
                <Link to="/portfolio">
                  <Button variant="outline" size="lg" className="border-card-border bg-glass hover:bg-secondary transition-smooth px-8 py-4">
                    View App Portfolio
                  </Button>
                </Link>
              </div>
            </div>
            <div className="bg-glass rounded-2xl p-8 border border-glass">
              <div className="w-16 h-16 bg-gradient-primary rounded-lg flex items-center justify-center mb-6">
                <Smartphone className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Why Choose Our App Development?</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-accent mr-3 fill-current" />
                  <span className="text-muted-foreground">4.9/5 average app store rating</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-accent mr-3" />
                  <span className="text-muted-foreground">50+ apps published successfully</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-accent mr-3" />
                  <span className="text-muted-foreground">Expert in both native and cross-platform</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-accent mr-3" />
                  <span className="text-muted-foreground">App store optimization included</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Development Approaches */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Development Approaches
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose the best approach for your app based on requirements and budget
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* App Types */}
      <section className="py-20 bg-background-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              App Types We Develop
            </h2>
            <p className="text-xl text-muted-foreground">
              From startups to enterprises, we build apps for every industry
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {appTypes.map((type, index) => (
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
              Our Development Process
            </h2>
            <p className="text-xl text-muted-foreground">
              From idea to app store, we guide you through every step
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {[
              { step: "01", title: "Discovery", description: "Understanding your app idea and requirements" },
              { step: "02", title: "Design", description: "Creating intuitive UI/UX designs" },
              { step: "03", title: "Development", description: "Building your app with quality code" },
              { step: "04", title: "Testing", description: "Thorough testing on multiple devices" },
              { step: "05", title: "Launch", description: "App store submission and marketing" }
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

      {/* Pricing Packages */}
      <section className="py-20 bg-background-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              App Development Packages
            </h2>
            <p className="text-xl text-muted-foreground">
              Transparent pricing for apps of all complexities
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
                <div className="text-3xl font-bold text-accent mb-2">{pkg.price}</div>
                <div className="text-muted-foreground mb-6">{pkg.timeline}</div>
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
            title="Ready to Build Your App?"
            subtitle="Let's discuss your app idea and create a development plan that brings it to life."
            isBookingForm={true}
          />
        </div>
      </section>
    </div>
  );
};

export default AppDevelopment;