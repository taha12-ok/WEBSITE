import Navigation from "@/components/Navigation";
import ContactForm from "@/components/ContactForm";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { BarChart, Target, Mail, Search, TrendingUp, Users, CheckCircle } from "lucide-react";

const Marketing = () => {
  const services = [
    {
      icon: Target,
      title: "PPC Advertising",
      description: "Google Ads and social media advertising that drives qualified traffic"
    },
    {
      icon: Mail,
      title: "Email Marketing",
      description: "Automated email campaigns that nurture leads and drive sales"
    },
    {
      icon: BarChart,
      title: "Content Marketing", 
      description: "Strategic content that attracts, engages, and converts your audience"
    },
    {
      icon: TrendingUp,
      title: "Conversion Optimization",
      description: "A/B testing and optimization to maximize your marketing ROI"
    }
  ];

  const channels = [
    "Google Ads", "Facebook Ads", "Instagram Ads", "LinkedIn Ads",
    "Email Marketing", "Content Marketing", "Influencer Marketing", "Affiliate Marketing"
  ];

  const packages = [
    {
      name: "Startup Marketing",
      price: "$500/month",
      adSpend: "$1,000 ad spend",
      features: [
        "Google Ads management",
        "Facebook & Instagram ads",
        "Landing page optimization",
        "Monthly performance reports",
        "Email marketing setup",
        "Basic analytics tracking"
      ]
    },
    {
      name: "Growth Marketing",
      price: "$1,000/month",
      adSpend: "$3,000 ad spend",
      features: [
        "Multi-channel advertising",
        "Advanced audience targeting",
        "Conversion optimization",
        "Email automation sequences",
        "Content marketing strategy",
        "Weekly performance reviews"
      ]
    },
    {
      name: "Enterprise Marketing",
      price: "$1,500+/month",
      adSpend: "$10,000+ ad spend",
      features: [
        "Full-service marketing team",
        "Custom attribution modeling",
        "Advanced funnel optimization",
        "Marketing automation platform",
        "Dedicated account manager",
        "Real-time performance dashboard"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-secondary relative overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-8">
                <span className="bg-gradient-primary bg-clip-text text-transparent">Digital</span>
                <br />
                <span className="text-foreground">Marketing</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Drive growth with data-driven marketing campaigns that generate leads, increase sales, 
                and maximize ROI. From PPC to email marketing, we handle it all.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/book-service">
                  <Button size="lg" className="bg-gradient-primary text-primary-foreground border-0 hover:shadow-glow transition-smooth px-8 py-4">
                    Grow My Business
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline" size="lg" className="border-card-border bg-glass hover:bg-secondary transition-smooth px-8 py-4">
                    Free Marketing Audit
                  </Button>
                </Link>
              </div>
            </div>
            <div className="bg-glass rounded-2xl p-8 border border-glass">
              <div className="w-16 h-16 bg-gradient-primary rounded-lg flex items-center justify-center mb-6">
                <BarChart className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Why Choose Our Marketing?</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Target className="h-5 w-5 text-accent mr-3" />
                  <span className="text-muted-foreground">Average 300% ROAS improvement</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-5 w-5 text-accent mr-3" />
                  <span className="text-muted-foreground">Certified marketing experts</span>
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

      {/* Services */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Marketing Services
            </h2>
            <p className="text-xl text-muted-foreground">
              Comprehensive digital marketing solutions that drive results
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

      {/* Channels */}
      <section className="py-20 bg-background-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Marketing Channels
            </h2>
            <p className="text-xl text-muted-foreground">
              Multi-channel approach for maximum reach and impact
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {channels.map((channel, index) => (
              <div key={index} className="bg-glass rounded-lg p-4 text-center border border-glass hover:shadow-card transition-smooth">
                <span className="text-muted-foreground font-medium">{channel}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Marketing Results
            </h2>
            <p className="text-xl text-muted-foreground">
              Proven results across industries and campaign types
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">400%</div>
              <div className="text-muted-foreground">Average ROAS</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">250%</div>
              <div className="text-muted-foreground">Lead Generation Increase</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">60%</div>
              <div className="text-muted-foreground">Cost Per Acquisition Reduction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">95%</div>
              <div className="text-muted-foreground">Client Retention Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-background-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Marketing Packages
            </h2>
            <p className="text-xl text-muted-foreground">
              Scalable marketing solutions for growing businesses
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
                <div className="text-muted-foreground mb-6">+ {pkg.adSpend}</div>
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
            title="Ready to Scale Your Marketing?"
            subtitle="Let's create marketing campaigns that generate qualified leads and drive sustainable business growth."
            isBookingForm={true}
          />
        </div>
      </section>
    </div>
  );
};

export default Marketing;