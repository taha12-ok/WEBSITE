import Navigation from "@/components/Navigation";
import ContactForm from "@/components/ContactForm";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      content: "info@aurabexsolution.com",
      description: "Send us an email anytime"
    },
    {
      icon: Phone,
      title: "Call Us",
      content: "+1 (555) 123-4567",
      description: "Mon-Fri from 9am to 6pm"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      content: "11446 Cherry Hill Road Beltsville md 20705",
      description: "Our office location"
    },
    {
      icon: Clock,
      title: "Business Hours",
      content: "Monday - Friday: 9:00 AM - 6:00 PM",
      description: "Weekend consultations available"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-secondary relative overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-8">
              <span className="text-foreground">Contact </span>
              <span className="bg-gradient-primary bg-clip-text text-transparent">Us</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Ready to transform your digital presence? Let's discuss your project and 
              create something amazing together. We're here to help bring your vision to life.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <h2 className="text-3xl font-bold mb-8 bg-gradient-primary bg-clip-text text-transparent">
                Get in Touch
              </h2>
              <div className="space-y-8">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                        <IconComponent className="h-6 w-6 text-primary-foreground" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-foreground mb-1">{info.title}</h3>
                        <p className="text-accent font-medium mb-1">{info.content}</p>
                        <p className="text-muted-foreground text-sm">{info.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Office Hours */}
              <div className="mt-12 bg-glass rounded-xl p-6 border border-glass">
                <h3 className="text-xl font-semibold text-foreground mb-4">Why Choose Us?</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                    <span className="text-muted-foreground">24/7 Project Support</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                    <span className="text-muted-foreground">Free Consultation</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                    <span className="text-muted-foreground">Transparent Pricing</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                    <span className="text-muted-foreground">Expert Team</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-20 bg-background-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Quick answers to common questions about our services and process
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-glass rounded-xl p-6 border border-glass">
              <h3 className="text-lg font-semibold text-foreground mb-3">How long does a typical project take?</h3>
              <p className="text-muted-foreground">Project timelines vary based on complexity. Simple websites take 2-4 weeks, while complex applications can take 2-6 months. We provide detailed timelines during consultation.</p>
            </div>
            
            <div className="bg-glass rounded-xl p-6 border border-glass">
              <h3 className="text-lg font-semibold text-foreground mb-3">Do you provide ongoing support?</h3>
              <p className="text-muted-foreground">Yes! We offer various support packages including maintenance, updates, hosting, and technical support to keep your project running smoothly.</p>
            </div>
            
            <div className="bg-glass rounded-xl p-6 border border-glass">
              <h3 className="text-lg font-semibold text-foreground mb-3">What's included in your pricing?</h3>
              <p className="text-muted-foreground">Our pricing includes design, development, testing, deployment, and initial training. We provide transparent quotes with no hidden fees.</p>
            </div>
            
            <div className="bg-glass rounded-xl p-6 border border-glass">
              <h3 className="text-lg font-semibold text-foreground mb-3">Can you work with existing systems?</h3>
              <p className="text-muted-foreground">Absolutely! We specialize in integrating with existing systems, migrating data, and enhancing current digital infrastructure.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;