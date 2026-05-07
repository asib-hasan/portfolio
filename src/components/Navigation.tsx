import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home, User, FolderGit2, BookOpen, Image, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/", icon: Home },
    { name: "About", path: "/about", icon: User },
    { name: "Projects", path: "/projects", icon: FolderGit2 },
    { name: "Blog", path: "/blog", icon: BookOpen },
    { name: "Gallery", path: "/gallery", icon: Image },
    { name: "Contact", path: "/contact", icon: Mail },
  ];

  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  return (
    <>
      {/* Top Header - scrolls with page */}
      <div className="w-full pt-4 md:pt-5 lg:pt-6 px-4 lg:px-6">
        <header className="mx-auto max-w-7xl rounded-2xl border border-border/50 backdrop-blur-xl py-3 lg:py-4 bg-card/80 shadow-sm flex items-center justify-between px-5 lg:px-6">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group shrink-0 transition-all duration-300">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-blue-400 flex items-center justify-center text-white font-bold text-sm shadow-sm group-hover:shadow-md group-hover:scale-105 transition-all duration-300">
              A
            </div>
            <div className="flex flex-col -space-y-0.5">
              <span className="text-sm font-bold tracking-tight text-foreground leading-tight">
                Asib Hasan
              </span>
              <span className="text-[9px] font-semibold text-muted-foreground/70 uppercase tracking-widest">
                Software Engineer
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 bg-muted/50 px-2 py-1.5 rounded-2xl border border-border/50">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={cn(
                  "relative px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300 group/nav whitespace-nowrap",
                  isActive(item.path)
                    ? "text-primary bg-background shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {item.name}
                {!isActive(item.path) && (
                  <span className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary rounded-full transition-all duration-300 group-hover/nav:w-2"></span>
                )}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button asChild size="sm" className="rounded-xl font-semibold">
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </div>
        </header>
      </div>

      {/* Mobile Bottom App Navigation */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-xl border-t border-border/60 pb-safe shadow-[0_-10px_40px_-10px_rgba(0,0,0,0.08)]">
        <div className="flex items-center justify-between px-1 sm:px-2 py-2">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={cn(
                "flex flex-col items-center justify-center px-1 sm:px-2 py-1 flex-1 min-w-[3.5rem] rounded-xl transition-all duration-300",
                isActive(item.path)
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              <div className={cn(
                "p-1.5 rounded-lg mb-1 transition-colors",
                isActive(item.path) ? "bg-primary/10" : "bg-transparent"
              )}>
                <item.icon className={cn(
                  "h-[18px] w-[18px]",
                  isActive(item.path) ? "fill-primary/10" : ""
                )} />
              </div>
              <span className="text-[9px] font-bold tracking-tight">
                {item.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navigation;