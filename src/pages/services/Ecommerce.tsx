import Navigation from "@/components/Navigation";
import ContactForm from "@/components/ContactForm";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ShoppingCart, CreditCard, Package, BarChart, Shield, Smartphone, CheckCircle } from "lucide-react";

const Ecommerce = () => {
  const features = [
    {
      icon: CreditCard,
      title: "Payment Processing",
      description: "Secure payment gateways with multiple payment options"
    },
    {
      icon: Package,
      title: "Inventory Management", 
      description: "Real-time inventory tracking and automated alerts"
    },
    {
      icon: BarChart,
      title: "Analytics & Reports",
      description: "Comprehensive sales analytics and business insights"
    },
    {
      icon: Smartphone,
      title: "Mobile Commerce",
      description: "Optimized mobile shopping experience"
    }
  ];

  const platforms = [
    "Shopify", "WooCommerce", "Magento", "BigCommerce", 
    "Custom Solutions", "Squarespace", "Wix Commerce", "PrestaShop"
  ];

  const packages = [
    {
      name: "Starter Store",
      price: "$400 - $600",
      features: [
        "Up to 100 products",
        "Payment gateway integration",
        "Basic inventory management",
        "Mobile responsive design",
        "SSL certificate included",
        "3 months support"
      ]
    },
    {
      name: "Business Store",
      price: "$600 - $800", 
      features: [
        "Up to 1,000 products",
        "Advanced payment options",
        "Inventory & order management",
        "Customer accounts & reviews",
        "Email marketing integration",
        "6 months support"
      ]
    },
    {
      name: "Enterprise Store",
      price: "$800 - $1000",
      features: [
        "Unlimited products",
        "Multi-vendor marketplace",
        "Advanced analytics",
        "Custom integrations",
        "Multi-language support",
        "12 months support"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-secondary relative overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-8">
                <span className="bg-gradient-primary bg-clip-text text-transparent">E-commerce</span>
                <br />
                <span className="text-foreground">Solutions</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Launch your online store and start selling today. Our e-commerce solutions include everything 
                you need to succeed online - from secure payment processing to inventory management.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/book-service">
                  <Button size="lg" className="bg-gradient-primary text-primary-foreground border-0 hover:shadow-glow transition-smooth px-8 py-4">
                    Launch My Store
                  </Button>
                </Link>
                <Link to="/portfolio">
                  <Button variant="outline" size="lg" className="border-card-border bg-glass hover:bg-secondary transition-smooth px-8 py-4">
                    View Store Examples
                  </Button>
                </Link>
              </div>
            </div>
            <div className="bg-glass rounded-2xl p-8 border border-glass">
              <div className="w-16 h-16 bg-gradient-primary rounded-lg flex items-center justify-center mb-6">
                <ShoppingCart className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Why Choose Our E-commerce?</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Shield className="h-5 w-5 text-accent mr-3" />
                  <span className="text-muted-foreground">PCI DSS compliant security</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-accent mr-3" />
                  <span className="text-muted-foreground">Average 25% conversion increase</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-accent mr-3" />
                  <span className="text-muted-foreground">SEO optimized for sales</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-accent mr-3" />
                  <span className="text-muted-foreground">Complete training included</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              E-commerce Features
            </h2>
            <p className="text-xl text-muted-foreground">
              Everything you need to run a successful online store
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

      {/* Platforms */}
      <section className="py-20 bg-background-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Platforms We Work With
            </h2>
            <p className="text-xl text-muted-foreground">
              Expert development on all major e-commerce platforms
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {platforms.map((platform, index) => (
              <div key={index} className="bg-glass rounded-lg p-6 text-center border border-glass hover:shadow-card transition-smooth">
                <span className="text-muted-foreground font-medium">{platform}</span>
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
              Store Launch Process
            </h2>
            <p className="text-xl text-muted-foreground">
              From concept to launch, we handle everything
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {[
              { step: "01", title: "Planning", description: "Define requirements and choose platform" },
              { step: "02", title: "Design", description: "Create stunning store design & user experience" },
              { step: "03", title: "Development", description: "Build store with all features & integrations" },
              { step: "04", title: "Testing", description: "Thorough testing of all store functions" },
              { step: "05", title: "Launch", description: "Go live with training & ongoing support" }
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
              E-commerce Packages
            </h2>
            <p className="text-xl text-muted-foreground">
              Complete solutions for online stores of any size
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
            title="Ready to Launch Your Store?"
            subtitle="Let's build an e-commerce solution that drives sales and grows your business online."
            isBookingForm={true}
          />
        </div>
      </section>
    </div>
  );
};

export default Ecommerce;