import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Database, Cpu, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
 const highlights = [
  {
    icon: Code,
    title: "Full-Stack Engineering",
    description: "Crafting robust Laravel & React.js applications with clean architecture and reusable components.",
    color: "text-primary"
  },
  {
    icon: Database,
    title: "Scalable Backend Systems",
    description: "Designing efficient APIs and database schemas.",
    color: "text-accent"
  },
  {
    icon: Cpu,
    title: "Performance-Driven Solutions",
    description: "Optimizing complex systems for high performance using caching, indexing, and smart queries.",
    color: "text-primary-muted"
  },
  {
    icon: Zap,
    title: "Tech Leadership & Insights",
    description: "Sharing insights on software development, data structures, and algorithms",
    color: "text-accent"
  }
];


  return (
    <div className="min-h-screen">
      <Hero />
      
      {/* Highlights Section */}
      <section className="section-padding bg-background relative">
        <div className="container mx-auto container-padding">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-accent rounded-full"></span>
              Featured Work
            </div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-playfair font-bold mb-6 bg-text-gradient bg-clip-text text-balance">
              Technical Expertise
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed text-balance">
              Combining cutting-edge technology with clean code principles to deliver 
              exceptional software solutions.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {highlights.map((item, index) => (
              <Card 
                key={item.title} 
                className="group hover:shadow-strong hover:-translate-y-2 transition-all duration-500 animate-fade-in border-0 bg-card-gradient overflow-hidden relative"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardHeader className="text-center relative z-10 pb-4">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-accent-light to-primary-light flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-soft">
                    <item.icon className={`h-10 w-10 ${item.color}`} />
                  </div>
                  <CardTitle className="text-xl font-playfair font-semibold group-hover:text-accent transition-colors">
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center relative z-10 pt-0">
                  <CardDescription className="mb-6 leading-relaxed text-balance">
                    {item.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>


      {/* Call to Action */}
      <section className="section-padding bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.03%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
        <div className="container mx-auto container-padding text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold mb-6 text-balance">
              Ready to Build Something Great?
            </h2>
            <p className="text-xl md:text-2xl mb-12 text-primary-foreground/85 max-w-3xl mx-auto leading-relaxed text-balance">
              Let's discuss your next software project. I'm here to turn your ideas into powerful, scalable solutions.
            </p>
            <Button asChild size="xl" variant="premium">
              <Link to="/contact">
                Get In Touch
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Home;