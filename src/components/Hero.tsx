import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Code, Cpu, GitBranch } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/software-engineer-hero.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden">
      {/* Clean geometric pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M20 20.5V18H0v-2h20v-2H0v-2h20v-2H0V8h20V6H0V4h20V2H0V0h22v20h-2zM0 20h2v20H0V20zm4 0h2v20H4V20zm4 0h2v20H8V20zm4 0h2v20h-2V20zm4 0h2v20h-2V20zm4 4h20v2H20v-2zm0 4h20v2H20v-2zm0 4h20v2H20v-2zm0 4h20v2H20v-2z'/%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>
      
      {/* Modern accent elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-2 h-32 bg-accent rounded-full animate-float" style={{ animationDelay: '0s' }}></div>
        <div className="absolute bottom-20 left-20 w-32 h-2 bg-accent rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 right-32 w-1 h-24 bg-primary/20 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="container mx-auto container-padding relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Content Column */}
            <div className="text-center lg:text-left animate-fade-in">
              {/* Professional Badge */}
              <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Code className="w-4 h-4" />
                Software Engineer
              </div>
              
              {/* Main Heading */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-playfair font-bold text-foreground mb-6 leading-none tracking-tight">
                Building
                <span className="block text-accent relative">
                  Digital Solutions
                  <div className="absolute -bottom-2 left-0 lg:left-0 w-24 h-1 bg-accent rounded-full"></div>
                </span>
              </h1>
              
              {/* Description */}
              <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed text-balance">
                Full-stack developer passionate about creating scalable applications, 
                clean code architecture, and solving complex technical challenges with modern technologies.
              </p>
              
              {/* Tech Stack Preview */}
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start mb-8">
                {['React', 'TypeScript', 'Node.js', 'Python', 'AWS'].map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-medium">
                    {tech}
                  </span>
                ))}
              </div>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button asChild size="xl" variant="premium" className="group">
                  <Link to="/about">
                    View My Projects
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                
                <Button 
                  variant="outline" 
                  size="xl"
                  className="group"
                >
                  <Download className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                  Download Resume
                </Button>
              </div>
            </div>
            
            {/* Image Column */}
            <div className="relative animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="relative">
                {/* Background accent circle */}
                <div className="absolute -inset-4 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full blur-2xl"></div>
                
                {/* Main image container */}
                <div className="relative rounded-2xl overflow-hidden shadow-strong bg-gradient-to-br from-card to-card/50 p-1">
                  {/* <img 
                    src={heroImage} 
                    alt="Software Engineer at work"
                    className="w-full h-[500px] lg:h-[600px] object-cover rounded-xl"
                  /> */}

                  <img 
                    src="https://source.unsplash.com/800x600/?person,portrait" 
                    alt="Random Person"
                    className="w-full h-[500px] lg:h-[600px] object-cover rounded-xl"
                  />

                  
                  {/* Floating code elements */}
                  <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm rounded-lg p-3 shadow-medium animate-float">
                    <div className="flex items-center gap-2 text-sm">
                      <GitBranch className="w-4 h-4 text-accent" />
                      <span className="text-foreground font-medium">main</span>
                    </div>
                  </div>
                  
                  <div className="absolute bottom-4 left-4 bg-background/90 backdrop-blur-sm rounded-lg p-3 shadow-medium animate-float" style={{ animationDelay: '1s' }}>
                    <div className="flex items-center gap-2 text-sm">
                      <Cpu className="w-4 h-4 text-primary" />
                      <span className="text-foreground font-medium">95% uptime</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Modern scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary/20 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-accent rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;