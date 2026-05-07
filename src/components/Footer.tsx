import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ArrowUpRight, Github, Linkedin, Mail, Twitter } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { icon: Github, href: "https://www.github.com/asib-hasan/", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/asib-hasan/", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Mail, href: "mailto:asib.uucse@gmail.com", label: "Email" },
  ];

  return (
    <footer className="bg-background py-16 relative overflow-hidden">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 section-divider"></div>
      
      <div className="container mx-auto px-4 flex flex-col items-center text-center relative z-10">
        
        {/* Minimal Logo with glow */}
        <div className="relative mb-6">
          <div className="absolute inset-0 rounded-xl bg-blue-500 blur-xl opacity-10 scale-125"></div>
          <div className="relative w-10 h-10 bg-gradient-to-br from-blue-500 to-violet-500 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg">
            A
          </div>
        </div>

        {/* Name & Title */}
        <h3 className="text-xl font-bold text-foreground mb-3 font-sans">
          Asib Hasan
        </h3>
        <p className="text-muted-foreground text-sm max-w-md mx-auto mb-8 leading-relaxed">
          Software Engineer specializing in scalable web applications and modern user experiences.
        </p>

        {/* Social Links */}
        <div className="flex items-center gap-4 mb-12">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              aria-label={social.label}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl border border-border/60 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground/20 hover:-translate-y-1 transition-all duration-300"
            >
              <social.icon className="h-4 w-4" strokeWidth={1.5} />
            </a>
          ))}
        </div>

        {/* Separator */}
        <div className="w-full max-w-3xl section-divider mb-8"></div>

        {/* Copyright */}
        <div className="text-xs font-medium text-muted-foreground/60 uppercase tracking-widest">
          © {new Date().getFullYear()} Asib Hasan. All rights reserved.
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;