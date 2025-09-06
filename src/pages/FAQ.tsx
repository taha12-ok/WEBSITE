import Navigation from "@/components/Navigation";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const FAQ = () => {
  const faqs = [
    {
      question: "How long does a typical project take?",
      answer: "Project timelines depend on complexity and scope. Simple websites typically take 2-4 weeks, while complex web applications or mobile apps can take 2-6 months. We provide detailed project timelines during our initial consultation, including milestones and delivery dates."
    },
    {
      question: "What is your development process?",
      answer: "Our process includes 4 key phases: 1) Discovery & Strategy - understanding your goals and requirements, 2) Design & Planning - creating wireframes and technical architecture, 3) Development & Testing - building and quality assurance, 4) Launch & Support - deployment and ongoing maintenance."
    },
    {
      question: "Do you provide ongoing support and maintenance?",
      answer: "Yes! We offer comprehensive support packages including regular updates, security patches, performance monitoring, backup services, and technical support. We have monthly and annual maintenance plans to fit different needs and budgets."
    },
    {
      question: "How much do your services cost?",
      answer: "Pricing varies based on project scope, complexity, and timeline. Simple websites start from $5,000, while complex applications range from $25,000-$100,000+. We provide transparent, detailed quotes with no hidden fees after our initial consultation."
    },
    {
      question: "Can you work with our existing systems and databases?",
      answer: "Absolutely! We specialize in system integration and can work with most existing platforms, databases, and third-party services. We'll assess your current infrastructure during consultation and provide migration or integration solutions."
    },
    {
      question: "What technologies do you use?",
      answer: "We use modern, proven technologies including React, Next.js, Node.js, Python, React Native, Flutter, and cloud platforms like AWS and Google Cloud. We choose the best technology stack based on your specific requirements and long-term goals."
    },
    {
      question: "Do you offer SEO and digital marketing services?",
      answer: "Yes, we provide comprehensive SEO optimization, content marketing, social media management, PPC advertising, and analytics. Our marketing team works closely with our developers to ensure your digital presence drives real business results."
    },
    {
      question: "How do you ensure project quality?",
      answer: "We follow industry best practices including code reviews, automated testing, quality assurance protocols, and user acceptance testing. Every project goes through multiple stages of testing before launch to ensure reliability and performance."
    },
    {
      question: "Can you help with mobile app development?",
      answer: "Yes! We develop both native (iOS/Android) and cross-platform mobile applications using React Native and Flutter. Our apps are optimized for performance, user experience, and app store guidelines."
    },
    {
      question: "What about hosting and domain management?",
      answer: "We can handle all aspects of hosting, domain registration, SSL certificates, and server management. We offer managed hosting solutions or can work with your preferred hosting provider. All our hosting includes regular backups and security monitoring."
    },
    {
      question: "How do you handle project communication?",
      answer: "We use project management tools like Slack, Trello, or Asana for regular updates. You'll have direct access to your project manager and receive weekly progress reports. We schedule regular check-ins and are always available for questions."
    },
    {
      question: "What if I need changes after the project is completed?",
      answer: "We offer post-launch support for modifications and enhancements. Minor changes are often included in our maintenance packages, while larger updates are quoted separately. We're committed to long-term partnerships with our clients."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-secondary relative overflow-hidden">
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-8">
              <span className="text-foreground">Frequently Asked </span>
              <span className="bg-gradient-primary bg-clip-text text-transparent">Questions</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Find answers to common questions about our services, process, and pricing. 
              Can't find what you're looking for? Contact us for personalized answers.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-glass rounded-xl border border-glass overflow-hidden"
              >
                <AccordionTrigger className="px-6 py-4 text-left hover:no-underline hover:bg-background-secondary transition-smooth">
                  <span className="text-lg font-semibold text-foreground pr-4">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Still have questions section */}
      <section className="py-20 bg-background-secondary">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Still Have Questions?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Our team is here to help. Get in touch for personalized answers and free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-gradient-primary text-primary-foreground border-0 hover:shadow-glow transition-smooth px-8 py-4">
                Contact Us
              </Button>
            </Link>
            <Link to="/book-service">
              <Button variant="outline" size="lg" className="border-card-border bg-glass hover:bg-secondary transition-smooth px-8 py-4">
                Book Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;