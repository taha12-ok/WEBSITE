import Navigation from "@/components/Navigation";
import ContactForm from "@/components/ContactForm";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Share2, Users, BarChart, Camera, MessageSquare, TrendingUp, CheckCircle } from "lucide-react";

const SocialMedia = () => {
  const platforms = [
    { name: "Facebook", color: "bg-blue-600" },
    { name: "Instagram", color: "bg-pink-600" },
    { name: "Twitter", color: "bg-sky-500" },
    { name: "LinkedIn", color: "bg-blue-700" },
    { name: "TikTok", color: "bg-black" },
    { name: "YouTube", color: "bg-red-600" }
  ];

  const services = [
    {
      icon: Camera,
      title: "Content Creation",
      description: "Professional photos, videos, and graphics that capture attention"
    },
    {
      icon: MessageSquare,
      title: "Community Management",
      description: "Engaging with your audience and building relationships"
    },
    {
      icon: BarChart,
      title: "Analytics & Reporting",
      description: "Data-driven insights to optimize your social strategy"
    },
    {
      icon: TrendingUp,
      title: "Paid Advertising",
      description: "Targeted campaigns that drive conversions and growth"
    }
  ];

  const packages = [
    {
      name: "Starter Package",
      price: "$200/month",
      platforms: "2 platforms",
      features: [
        "12 posts per month",
        "Basic content creation",
        "Community management",
        "Monthly analytics report",
        "Social media strategy",
        "Response within 24hrs"
      ]
    },
    {
      name: "Growth Package",
      price: "$300/month", 
      platforms: "4 platforms",
      features: [
        "20 posts per month",
        "Premium content creation",
        "Active community management",
        "Weekly analytics reports",
        "Paid advertising ($500 budget)",
        "Response within 4hrs"
      ]
    },
    {
      name: "Enterprise Package",
      price: "$500+/month",
      platforms: "All platforms",
      features: [
        "30+ posts per month",
        "Custom content & campaigns",
        "Dedicated account manager",
        "Real-time analytics dashboard",
        "Advanced paid campaigns",
        "24/7 monitoring & support"
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
                <span className="bg-gradient-primary bg-clip-text text-transparent">Social Media</span>
                <br />
                <span className="text-foreground">Management</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Build your brand, engage your audience, and drive real business results through strategic 
                social media management. We handle everything so you can focus on running your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/book-service">
                  <Button size="lg" className="bg-gradient-primary text-primary-foreground border-0 hover:shadow-glow transition-smooth px-8 py-4">
                    Grow Your Following
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline" size="lg" className="border-card-border bg-glass hover:bg-secondary transition-smooth px-8 py-4">
                    Free Strategy Call
                  </Button>
                </Link>
              </div>
            </div>
            <div className="bg-glass rounded-2xl p-8 border border-glass">
              <div className="w-16 h-16 bg-gradient-primary rounded-lg flex items-center justify-center mb-6">
                <Share2 className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Why Choose Our SMM?</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Users className="h-5 w-5 text-accent mr-3" />
                  <span className="text-muted-foreground">Average 150% follower growth</span>
                </div>
                <div className="flex items-center">
                  <TrendingUp className="h-5 w-5 text-accent mr-3" />
                  <span className="text-muted-foreground">300% increase in engagement</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-accent mr-3" />
                  <span className="text-muted-foreground">Proven ROI for paid campaigns</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-accent mr-3" />
                  <span className="text-muted-foreground">Dedicated account manager</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platforms */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Platforms We Master
            </h2>
            <p className="text-xl text-muted-foreground">
              Expert management across all major social media platforms
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {platforms.map((platform, index) => (
              <div key={index} className="bg-glass rounded-xl p-6 text-center border border-glass hover:shadow-card transition-smooth group">
                <div className={`w-12 h-12 ${platform.color} rounded-lg mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <Share2 className="h-6 w-6 text-white" />
                </div>
                <span className="text-foreground font-medium">{platform.name}</span>
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
              What We Do
            </h2>
            <p className="text-xl text-muted-foreground">
              Comprehensive social media services to grow your brand
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

      {/* Pricing */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Social Media Packages
            </h2>
            <p className="text-xl text-muted-foreground">
              Flexible plans to match your business goals and budget
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
                <div className="text-muted-foreground mb-6">{pkg.platforms}</div>
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
      <section className="py-20 bg-background-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ContactForm 
            title="Ready to Grow Your Social Presence?"
            subtitle="Let's create a social media strategy that builds your brand and drives business results."
            isBookingForm={true}
          />
        </div>
      </section>
    </div>
  );
};

export default SocialMedia;