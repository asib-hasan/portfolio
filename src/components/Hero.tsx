import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
   <section className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden px-4">
  {/* Geometric Pattern Background */}
  <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
    <div
      className="absolute inset-0"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M20 20.5V18H0v-2h20v-2H0v-2h20v-2H0V8h20V6H0V4h20V2H0V0h22v20h-2zM0 20h2v20H0V20zm4 0h2v20H4V20zm4 0h2v20H8V20zm4 0h2v20h-2V20zm4 0h2v20h-2V20zm4 4h20v2H20v-2zm0 4h20v2H20v-2zm0 4h20v2H20v-2zm0 4h20v2H20v-2z'/%3E%3C/g%3E%3C/svg%3E")`,
      }}
    ></div>
  </div>

  {/* Animated Accent Elements */}
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute top-10 right-10 w-2 h-32 bg-accent rounded-full animate-float"></div>
    <div className="absolute bottom-10 left-10 w-32 h-2 bg-accent rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
    <div className="absolute top-1/2 right-20 w-1 h-24 bg-primary/20 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
  </div>

  {/* Content */}
  <div className="container mx-auto text-center relative z-10">
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="animate-fade-in space-y-8">
        {/* Section Label */}
        <div className="text-accent text-sm md:text-base font-medium tracking-wider uppercase animate-slide-in">
          Full Stack Developer
        </div>

        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-playfair font-bold text-foreground leading-tight tracking-tight">
          Engineer.
          <br className="hidden sm:block" />
          <span className="text-accent relative inline-block">
            Build.
            <div className="absolute -bottom-1 left-0 w-16 h-1 bg-accent rounded-full"></div>
          </span>
          <br className="hidden sm:block" />
          Solve.
        </h1>

        {/* Description */}
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
          I craft real-world solutions using Laravel, React.js and OpenAI — building scalable systems and tools that make an impact.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button asChild size="lg" variant="premium" className="group w-full sm:w-auto">
            <Link to="/about">
              Explore My Work
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
          <Button variant="outline" size="lg" className="group w-full sm:w-auto">
            <Download className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
            Download CV
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary/20 rounded-full flex justify-center items-start">
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