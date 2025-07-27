import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Briefcase, Camera, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  const highlights = [
    {
      icon: BookOpen,
      title: "Research & Publications",
      description: "Cutting-edge research with peer-reviewed publications in top-tier journals.",
      link: "/research",
      color: "text-primary"
    },
    {
      icon: Briefcase,
      title: "Case Studies",
      description: "Real-world solutions and strategic implementations across various industries.",
      link: "/case-studies",
      color: "text-accent"
    },
    {
      icon: Camera,
      title: "Creative Gallery",
      description: "Visual storytelling through photography and creative visual projects.",
      link: "/gallery",
      color: "text-primary-muted"
    },
    {
      icon: MessageCircle,
      title: "Insights & Blog",
      description: "Thought leadership articles and industry insights from my experience.",
      link: "/blog",
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
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-playfair font-bold mb-6 bg-text-gradient bg-clip-text text-transparent text-balance">
              What I Do
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed text-balance">
              Exploring the intersection of research, technology, and creative problem-solving 
              to create meaningful impact.
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
                  <Button asChild variant="ghost" className="group/btn text-accent hover:text-accent-foreground hover:bg-accent">
                    <Link to={item.link}>
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
<section className="bg-muted/10">
  <div className="container mx-auto container-padding text-center">
    <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6 text-balance">
      Technologies I Work With
    </h2>
    <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed text-balance">
      Proficient in a wide range of modern tools, frameworks, and programming languages.
    </p>
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
  {[
    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" },
    { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "Laravel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg" },
    { name: "Vue.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" },
    { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
    { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
    { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
    { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
    { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" }
  ].map((tech) => (
    <div key={tech.name} className="flex flex-col items-center bg-white rounded-xl p-4 shadow-soft hover:shadow-strong transition">
      <img src={tech.icon} alt={tech.name} className="w-10 h-10 mb-3" />
      <p className="font-semibold text-lg text-center">{tech.name}</p>
    </div>
  ))}
</div>

  </div>
</section>

{/* Projects Section */}
<section className="section-padding bg-background">
  <div className="container mx-auto container-padding">
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-4">Recent Projects</h2>
      <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
        A selection of my most impactful and creative work across diverse fields.
      </p>
    </div>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[
        {
          title: "AI Resume Builder",
          description: "An AI-powered resume platform built with Vue and Laravel to help professionals craft standout CVs.",
          link: "/projects/resume-builder"
        },
        {
          title: "E-commerce Dashboard",
          description: "A full-stack microservice-based admin dashboard for managing orders, inventory, and analytics.",
          link: "/projects/ecommerce-dashboard"
        },
        {
          title: "Online Judge System",
          description: "Built a Codeforces-like platform using Laravel & Vue with real-time code execution and contest mode.",
          link: "/projects/oj"
        }
      ].map((project) => (
        <Card key={project.title} className="hover:shadow-strong transition-all duration-500">
          <CardHeader>
            <CardTitle className="text-xl font-semibold">{project.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="mb-4">{project.description}</CardDescription>
            <Button asChild variant="link" className="text-accent">
              <Link to={project.link}>
                View Project <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
</section>

{/* Testimonials Section */}
<section className="section-padding bg-muted/10">
  <div className="container mx-auto container-padding">
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-4">What Clients Say</h2>
      <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
        Feedback and experiences from people I’ve worked with.
      </p>
    </div>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[
        {
          name: "Sarah Ahmed",
          feedback:
            "Working with him was fantastic. He delivered our project ahead of time with incredible attention to detail.",
          role: "Product Manager, TechSphere"
        },
        {
          name: "James Lee",
          feedback:
            "A rare combination of creativity and technical expertise. The online judge platform exceeded our expectations.",
          role: "CTO, CodeBridge"
        },
        {
          name: "Tania Rahman",
          feedback:
            "His resume builder helped me land my dream job! Super intuitive and powerful tool.",
          role: "Marketing Manager"
        }
      ].map((testimonial) => (
        <Card key={testimonial.name} className="p-6 shadow-soft bg-white">
          <CardContent>
            <p className="text-muted-foreground mb-4 italic">“{testimonial.feedback}”</p>
            <p className="font-bold">{testimonial.name}</p>
            <p className="text-sm text-muted-foreground">{testimonial.role}</p>
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
              Let's Create Something Amazing Together
            </h2>
            <p className="text-xl md:text-2xl mb-12 text-primary-foreground/85 max-w-3xl mx-auto leading-relaxed text-balance">
              Ready to collaborate on your next project? I'd love to hear about your ideas and challenges.
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