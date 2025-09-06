import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Send } from "lucide-react";

interface ContactFormProps {
  title?: string;
  subtitle?: string;
  isBookingForm?: boolean;
}

const ContactForm = ({ 
  title = "Get In Touch", 
  subtitle = "Ready to start your project? Let's discuss your vision.",
  isBookingForm = false 
}: ContactFormProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    budget: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const services = [
    "Web Development",
    "App Development", 
    "Social Media Management",
    "Digital Marketing",
    "E-commerce Solutions",
    "UI/UX Design",
    "SEO Optimization",
    "Brand Identity",
    "Other"
  ];

  const budgetRanges = [
    "$5,000 - $10,000",
    "$10,000 - $25,000", 
    "$25,000 - $50,000",
    "$50,000 - $100,000",
    "$100,000+"
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast({
      title: "Message Sent!",
      description: "Thank you for your inquiry. We'll get back to you within 24 hours.",
    });

    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      service: "",
      budget: "",
      message: ""
    });

    setIsSubmitting(false);
  };

  const handleChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="bg-glass rounded-2xl p-8 border border-glass shadow-card">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
          {title}
        </h2>
        <p className="text-muted-foreground text-lg">
          {subtitle}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-foreground">Name *</Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => handleChange("name", e.target.value)}
              required
              className="bg-background-secondary border-card-border focus:border-accent transition-smooth"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-foreground">Email *</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => handleChange("email", e.target.value)}
              required
              className="bg-background-secondary border-card-border focus:border-accent transition-smooth"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone" className="text-foreground">Phone</Label>
            <Input
              id="phone"
              value={formData.phone}
              onChange={(e) => handleChange("phone", e.target.value)}
              className="bg-background-secondary border-card-border focus:border-accent transition-smooth"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="company" className="text-foreground">Company</Label>
            <Input
              id="company"
              value={formData.company}
              onChange={(e) => handleChange("company", e.target.value)}
              className="bg-background-secondary border-card-border focus:border-accent transition-smooth"
            />
          </div>
        </div>

        {isBookingForm && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="service" className="text-foreground">Service Needed *</Label>
              <Select value={formData.service} onValueChange={(value) => handleChange("service", value)} required>
                <SelectTrigger className="bg-background-secondary border-card-border focus:border-accent">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent className="bg-card border-card-border">
                  {services.map((service) => (
                    <SelectItem key={service} value={service} className="hover:bg-background-secondary">
                      {service}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="budget" className="text-foreground">Budget Range</Label>
              <Select value={formData.budget} onValueChange={(value) => handleChange("budget", value)}>
                <SelectTrigger className="bg-background-secondary border-card-border focus:border-accent">
                  <SelectValue placeholder="Select budget range" />
                </SelectTrigger>
                <SelectContent className="bg-card border-card-border">
                  {budgetRanges.map((range) => (
                    <SelectItem key={range} value={range} className="hover:bg-background-secondary">
                      {range}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        )}

        <div className="space-y-2">
          <Label htmlFor="message" className="text-foreground">Message *</Label>
          <Textarea
            id="message"
            value={formData.message}
            onChange={(e) => handleChange("message", e.target.value)}
            required
            rows={6}
            placeholder="Tell us about your project, goals, and timeline..."
            className="bg-background-secondary border-card-border focus:border-accent transition-smooth resize-none"
          />
        </div>

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-gradient-primary text-primary-foreground border-0 hover:shadow-glow transition-smooth py-3 text-lg font-medium group"
        >
          {isSubmitting ? (
            "Sending..."
          ) : (
            <>
              Send Message
              <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </>
          )}
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;