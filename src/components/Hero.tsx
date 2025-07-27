import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";
import { Link } from "react-router-dom";

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
      
      <div className="container mx-auto container-padding text-center relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="animate-fade-in">
            {/* Enhanced typography hierarchy */}
            <div className="mb-8">
              <div className="text-accent text-sm md:text-base font-medium tracking-wider uppercase mb-4 animate-slide-in">
                Professional Portfolio
              </div>
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-playfair font-bold text-foreground mb-6 leading-none tracking-tight">
                Creative
                <span className="block text-accent relative">
                  Excellence
                  <div className="absolute -bottom-2 left-0 w-24 h-1 bg-accent rounded-full"></div>
                </span>
              </h1>
            </div>
            
            <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed text-balance">
              Showcasing innovative research, compelling case studies, and creative solutions 
              that drive meaningful impact in technology and beyond.
            </p>
            
            {/* Enhanced CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button asChild size="xl" variant="premium" className="group">
                <Link to="/about">
                  Explore My Work
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              
              <Button 
                variant="outline" 
                size="xl"
                className="group"
              >
                <Download className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Download CV
              </Button>
            </div>
            
            {/* Modern scroll indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
              <div className="w-6 h-10 border-2 border-primary/20 rounded-full flex justify-center">
                <div className="w-1 h-3 bg-accent rounded-full mt-2 animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;