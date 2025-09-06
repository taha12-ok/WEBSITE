import Navigation from "@/components/Navigation";
import ContactForm from "@/components/ContactForm";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Search, TrendingUp, Target, BarChart, FileText, Link as LinkIcon, CheckCircle } from "lucide-react";

const SEO = () => {
  const services = [
    {
      icon: Search,
      title: "Keyword Research",
      description: "Find the right keywords your customers are searching for"
    },
    {
      icon: FileText,
      title: "On-Page SEO",
      description: "Optimize your website content and structure for search engines"
    },
    {
      icon: LinkIcon,
      title: "Link Building",
      description: "Build authoritative backlinks to boost your domain authority"
    },
    {
      icon: BarChart,
      title: "Technical SEO",
      description: "Fix technical issues that prevent search engines from crawling your site"
    }
  ];

  const results = [
    { metric: "300%", description: "Average traffic increase" },
    { metric: "150%", description: "Boost in keyword rankings" },
    { metric: "250%", description: "Increase in organic leads" },
    { metric: "90%", description: "Client retention rate" }
  ];

  const packages = [
    {
      name: "Local SEO",
      price: "$200/month",
      features: [
        "Local keyword research",
        "Google My Business optimization",
        "Local citation building",
        "Monthly progress reports",
        "On-page optimization",
        "Review management"
      ]
    },
    {
      name: "National SEO",
      price: "$300/month",
      features: [
        "Comprehensive keyword research",
        "Technical SEO audit & fixes",
        "Content optimization",
        "Link building campaign", 
        "Competitor analysis",
        "Weekly progress reports"
      ]
    },
    {
      name: "Enterprise SEO",
      price: "$500+/month",
      features: [
        "Large-scale SEO strategy",
        "Advanced technical optimization",
        "Content marketing integration",
        "International SEO",
        "Dedicated SEO manager",
        "Real-time reporting dashboard"
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
                <span className="bg-gradient-primary bg-clip-text text-transparent">SEO</span>
                <br />
                <span className="text-foreground">Optimization</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Dominate search results and drive organic traffic that converts. Our proven SEO strategies 
                help businesses rank higher, attract more customers, and grow sustainably online.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/book-service">
                  <Button size="lg" className="bg-gradient-primary text-primary-foreground border-0 hover:shadow-glow transition-smooth px-8 py-4">
                    Boost My Rankings
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline" size="lg" className="border-card-border bg-glass hover:bg-secondary transition-smooth px-8 py-4">
                    Free SEO Audit
                  </Button>
                </Link>
              </div>
            </div>
            <div className="bg-glass rounded-2xl p-8 border border-glass">
              <div className="w-16 h-16 bg-gradient-primary rounded-lg flex items-center justify-center mb-6">
                <Search className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Why Choose Our SEO?</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <TrendingUp className="h-5 w-5 text-accent mr-3" />
                  <span className="text-muted-foreground">White-hat strategies only</span>
                </div>
                <div className="flex items-center">
                  <Target className="h-5 w-5 text-accent mr-3" />
                  <span className="text-muted-foreground">Proven track record</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-accent mr-3" />
                  <span className="text-muted-foreground">Transparent reporting</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-accent mr-3" />
                  <span className="text-muted-foreground">No long-term contracts</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Proven Results
            </h2>
            <p className="text-xl text-muted-foreground">
              Our SEO strategies deliver measurable growth for businesses
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {results.map((result, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-accent mb-2">{result.metric}</div>
                <div className="text-muted-foreground">{result.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-background-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Our SEO Services
            </h2>
            <p className="text-xl text-muted-foreground">
              Comprehensive SEO solutions to improve your search visibility
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

      {/* Process */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Our SEO Process
            </h2>
            <p className="text-xl text-muted-foreground">
              A systematic approach to improve your search rankings
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Audit", description: "Comprehensive SEO audit of your current website" },
              { step: "02", title: "Strategy", description: "Custom SEO strategy based on your goals" },
              { step: "03", title: "Optimize", description: "Implement on-page and technical optimizations" },
              { step: "04", title: "Monitor", description: "Track rankings and adjust strategy as needed" }
            ].map((phase, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-lg font-bold text-primary-foreground">{phase.step}</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{phase.title}</h3>
                <p className="text-muted-foreground">{phase.description}</p>
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
              SEO Packages
            </h2>
            <p className="text-xl text-muted-foreground">
              Scalable SEO solutions for businesses of all sizes
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
            title="Ready to Dominate Search Results?"
            subtitle="Get a free SEO audit and custom strategy to boost your rankings and drive organic traffic."
            isBookingForm={true}
          />
        </div>
      </section>
    </div>
  );
};

export default SEO;