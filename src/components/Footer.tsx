import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ArrowUpRight, Github, Linkedin, Mail, Twitter } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "About", path: "/about" },
    { name: "Research", path: "/research" },
    { name: "Case Studies", path: "/case-studies" },
    { name: "Blog", path: "/blog" },
  ];

  const resources = [
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
    { name: "CV Download", path: "#" },
    { name: "Newsletter", path: "#" },
  ];

  const socialLinks = [
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Mail, href: "#", label: "Email" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto container-padding">
        <div className="section-padding">
          {/* Main Footer Content */}
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12 lg:gap-16">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <Link to="/" className="inline-block mb-6">
                <h3 className="text-2xl font-playfair font-bold bg-gradient-to-r from-accent-light to-white bg-clip-text text-transparent">
                  Alex Johnson
                </h3>
              </Link>
              <p className="text-primary-foreground/80 prose-lg mb-8 max-w-md text-balance">
                Passionate researcher and innovator creating meaningful impact through 
                cutting-edge technology and strategic thinking.
              </p>
              
              {/* Social Links */}
              <div className="flex items-center gap-4">
                {socialLinks.map((social) => (
                  <Button
                    key={social.label}
                    variant="ghost"
                    size="icon"
                    className="text-primary-foreground/70 hover:text-accent-light hover:bg-white/10"
                    asChild
                  >
                    <a href={social.href} aria-label={social.label}>
                      <social.icon className="h-5 w-5" />
                    </a>
                  </Button>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-playfair font-semibold text-lg mb-6 text-accent-light">
                Quick Links
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Button
                      variant="ghost"
                      className="p-0 h-auto text-primary-foreground/70 hover:text-accent-light hover:bg-transparent group"
                      asChild
                    >
                      <Link to={link.path} className="flex items-center gap-2">
                        {link.name}
                        <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </Link>
                    </Button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="font-playfair font-semibold text-lg mb-6 text-accent-light">
                Resources
              </h4>
              <ul className="space-y-3">
                {resources.map((link) => (
                  <li key={link.name}>
                    <Button
                      variant="ghost"
                      className="p-0 h-auto text-primary-foreground/70 hover:text-accent-light hover:bg-transparent group"
                      asChild
                    >
                      <Link to={link.path} className="flex items-center gap-2">
                        {link.name}
                        <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </Link>
                    </Button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <Separator className="my-12 bg-white/20" />

          {/* Bottom Footer */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-sm text-primary-foreground/60">
              © {new Date().getFullYear()} Alex Johnson. All rights reserved.
            </div>
            
            <div className="flex items-center gap-6 text-sm">
              <Button
                variant="ghost"
                className="p-0 h-auto text-primary-foreground/60 hover:text-accent-light hover:bg-transparent"
                asChild
              >
                <Link to="#">Privacy Policy</Link>
              </Button>
              <Button
                variant="ghost"
                className="p-0 h-auto text-primary-foreground/60 hover:text-accent-light hover:bg-transparent"
                asChild
              >
                <Link to="#">Terms of Service</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;