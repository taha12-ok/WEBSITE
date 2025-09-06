import Navigation from "@/components/Navigation";
import ContactForm from "@/components/ContactForm";
import { CheckCircle, Clock, Users, Award } from "lucide-react";

const BookService = () => {
  const benefits = [
    {
      icon: CheckCircle,
      title: "Free Consultation",
      description: "30-minute discovery call to understand your goals"
    },
    {
      icon: Clock,
      title: "Quick Response",
      description: "We respond to all inquiries within 24 hours"
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Work directly with senior developers and designers"
    },
    {
      icon: Award,
      title: "Proven Results",
      description: "150+ successful projects and 98% client satisfaction"
    }
  ];

  const process = [
    {
      step: "01",
      title: "Discovery Call",
      description: "We'll discuss your project goals, requirements, and timeline in detail"
    },
    {
      step: "02", 
      title: "Proposal & Quote",
      description: "Receive a detailed proposal with timeline, deliverables, and transparent pricing"
    },
    {
      step: "03",
      title: "Project Kickoff",
      description: "Once approved, we begin with strategy and planning phase"
    },
    {
      step: "04",
      title: "Development & Launch",
      description: "Regular updates throughout development until successful launch"
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
              <span className="text-foreground">Book Your </span>
              <span className="bg-gradient-primary bg-clip-text text-transparent">Service</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Ready to transform your digital presence? Schedule a free consultation 
              and let's discuss how we can bring your vision to life with cutting-edge solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Why Work With Us?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience the difference of working with a dedicated team of experts
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              );
            })}
          </div>

          {/* Form Section */}
          <div className="max-w-4xl mx-auto">
            <ContactForm 
              title="Start Your Project Today"
              subtitle="Tell us about your project and we'll get back to you within 24 hours with a detailed proposal."
              isBookingForm={true}
            />
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
              A streamlined approach that ensures successful project delivery
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((phase, index) => (
              <div key={index} className="bg-glass rounded-xl p-6 border border-glass text-center hover:shadow-card transition-smooth">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-lg font-bold text-primary-foreground">{phase.step}</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{phase.title}</h3>
                <p className="text-muted-foreground">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-glass rounded-2xl p-8 border border-glass text-center">
            <div className="text-4xl text-accent mb-6">"</div>
            <blockquote className="text-xl text-foreground leading-relaxed mb-6">
              Aurabex Solution exceeded our expectations. They delivered a stunning website that 
              increased our online conversions by 250%. Their team was professional, 
              responsive, and truly understood our business needs.
            </blockquote>
            <div className="text-accent font-semibold">Amin Ali</div>
            <div className="text-muted-foreground">Flexe Market, CEO</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BookService;