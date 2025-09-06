import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ExternalLink, Code, Smartphone, Search, ShoppingCart } from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      category: "Web Development",
      description: "Modern online store with advanced filtering, payment integration, and admin dashboard",
      image: "/pic1.png",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      icon: ShoppingCart,
      color: "from-purple-500 to-pink-500",
      link: "https://hackathon-03-the-comforty-taha-shabbir.vercel.app/"
    },
    {
      id: 2,
      title: "Flexe Market Mobile App",
      category: "App Development", 
      description: "Cross-platform fitness tracking app with workout plans and progress analytics",
      image: "/pic2.png",
      tech: ["React Native", "Firebase", "Redux", "Expo"],
      icon: Smartphone,
      color: "from-blue-500 to-cyan-500",
      link: "https://www.flexemarket.com/"
    },
    {
      id: 3,
      title: "Corporate Website",
      category: "Web Development",
      description: "Professional corporate website with CMS, blog, and contact management",
      image: "/pic3.png",
      tech: ["Next.js", "TypeScript", "Tailwind", "Sanity"],
      icon: Code,
      color: "from-green-500 to-teal-500",
      link: "https://consultwithgordon.com/"
    },
    {
      id: 4,
      title: "Restaurant Chain SEO",
      category: "SEO & Marketing",
      description: "Complete SEO overhaul resulting in 300% increase in organic traffic",
      image: "/pic4.png",
      tech: ["SEO", "Analytics", "Local SEO", "Content"],
      icon: Search,
      color: "from-orange-500 to-red-500",
      link: "https://khaascart.com/"
    },
    {
      id: 5,
      title: "Point Of Sale SaaS",
      category: "Web Development",
      description: "Complex analytics dashboard with real-time data visualization",
      image: "/pic5.png",
      tech: [".netcorembc", "mysql", "dev extreme", "PostgreSQL"],
      icon: Code,
      color: "from-indigo-500 to-purple-500",
      link: "https://example-saas.com"
    },
    {
      id: 6,
      title: "Product Store",
      category: "Web Development",
      description: "Full-featured product listing platform with fully functoined and responsive processing",
      image: "/pic6.png",
      tech: ["NextJs", "Mongodb", "node", "react"],
      icon: Smartphone,
      color: "from-cyan-500 to-blue-500",
      link: "https://pk-aurabay.vercel.app/"
    }
  ];

  const categories = ["All", "Web Development", "App Development", "SEO & Marketing"];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-secondary relative overflow-hidden">
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-8">
              <span className="text-foreground">Our </span>
              <span className="bg-gradient-primary bg-clip-text text-transparent">Portfolio</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Explore our recent work and see how we've helped businesses achieve their digital goals 
              through innovative solutions and creative excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Categories */}
      <section className="py-12 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant="outline"
                className="border-card-border bg-glass hover:bg-secondary transition-smooth"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="pb-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => {
              const IconComponent = project.icon;
              return (
                <div key={project.id} className="bg-glass rounded-xl overflow-hidden border border-glass hover:shadow-card transition-smooth group">
                  <div className="relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      onError={(e) => {
                        // Fallback to gradient background if image fails to load
                        const img = e.target as HTMLImageElement;
                        img.style.display = 'none';
                        const sibling = img.nextElementSibling as HTMLElement | null;
                        if (sibling) sibling.style.display = 'flex';
                      }}
                    />
                    <div className={`h-48 bg-gradient-to-br ${project.color} items-center justify-center hidden`}>
                      <IconComponent className="h-16 w-16 text-white/80" />
                    </div>
                    <div className="absolute top-4 right-4">
                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-glass backdrop-blur-sm rounded-full flex items-center justify-center border border-glass hover:bg-white/20 transition-colors"
                      >
                        <ExternalLink className="h-5 w-5 text-white" />
                      </a>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="text-sm text-accent font-medium mb-2">{project.category}</div>
                    <h3 className="text-xl font-bold text-foreground mb-3">{project.title}</h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech, index) => (
                        <span key={index} className="px-3 py-1 bg-background-secondary text-xs font-medium text-muted-foreground rounded-full border border-card-border">
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="block">
                      <Button variant="outline" className="w-full border-card-border bg-glass hover:bg-secondary transition-smooth group">
                        View Project
                        <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-background-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Project Results
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Numbers that speak for themselves
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">150+</div>
              <div className="text-muted-foreground">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">98%</div>
              <div className="text-muted-foreground">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">2.5M+</div>
              <div className="text-muted-foreground">Users Reached</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">300%</div>
              <div className="text-muted-foreground">Avg. Traffic Increase</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Ready for Your Success Story?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Let's create something amazing that showcases your brand and drives results
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/book-service">
              <Button size="lg" className="bg-gradient-primary text-primary-foreground border-0 hover:shadow-glow transition-smooth px-8 py-4">
                Start Your Project
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" size="lg" className="border-card-border bg-glass hover:bg-secondary transition-smooth px-8 py-4">
                Discuss Your Ideas
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;