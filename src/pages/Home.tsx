import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Database, Cpu, Zap, Sparkles, Shield, Workflow } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  const highlights = [
    {
      icon: Code,
      title: "Full-Stack Engineering",
      description: "Laravel + Vue + Nuxt builds with clean architecture, reusable UI, and predictable release cycles.",
      color: "text-primary",
    },
    {
      icon: Database,
      title: "Backend Systems",
      description: "API design, relational modeling, and caching strategies for stable, scalable backends.",
      color: "text-accent",
    },
    {
      icon: Cpu,
      title: "Performance Optimization",
      description: "Profiling, indexing, Redis caching, and query tuning to reduce latency.",
      color: "text-primary-muted",
    },
    {
      icon: Zap,
      title: "Algorithms & DSA",
      description: "1200+ problems and ICPC regional experience applied to real product constraints.",
      color: "text-accent",
    },
  ];

  const process = [
    {
      title: "Discovery",
      description: "Clarify goals, users, and constraints. Align on scope, risks, and measurable outcomes.",
      icon: Sparkles,
    },
    {
      title: "Build",
      description: "Ship in focused iterations with clean APIs, tests, and observable progress.",
      icon: Workflow,
    },
    {
      title: "Launch",
      description: "Production hardening, performance baselines, and a path for sustainable growth.",
      icon: Shield,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden bg-background">
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-accent/10 blur-3xl"></div>
        <div className="absolute -bottom-32 -left-20 h-96 w-96 rounded-full bg-primary/10 blur-3xl"></div>
        <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_10%_10%,rgba(255,255,255,0.35),transparent_55%)]"></div>
        <div className="container mx-auto container-padding py-20 md:py-28 relative">
          <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-10 lg:gap-16 items-start">
            <div>
              <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-8">
                <span className="w-2 h-2 bg-accent rounded-full"></span>
                Full-Stack Engineer • Laravel • Vue • Nuxt
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-playfair font-bold leading-tight text-balance">
                Full-stack engineering for clarity and performance.
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mt-6 max-w-3xl leading-relaxed text-balance">
                I build Laravel, Vue, and Nuxt applications with strong architecture, clean APIs,
                and efficient data access patterns. My competitive programming background sharpens
                problem solving, correctness, and algorithmic thinking.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Button asChild size="xl" variant="outline">
                  <Link to="/about">About</Link>
                </Button>
                <Button asChild size="xl" variant="outline">
                  <Link to="/contact">
                    Contact
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "2+", label: "Years Experience" },
                { value: "1200+", label: "DSA Problems" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl bg-card-gradient px-5 py-6 shadow-soft border border-border/40"
                >
                  <div className="text-3xl md:text-4xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
                </div>
              ))}
              <div className="col-span-2 rounded-2xl border border-border/40 bg-background/60 backdrop-blur px-5 py-5">
                <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Focus</div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {[
                    "API Design",
                    "Database Modeling",
                    "SSR/SSG",
                    "Caching",
                    "Competitive Programming",
                  ].map((item) => (
                    <span key={item} className="rounded-full border border-border px-3 py-1 text-xs">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="section-padding bg-background relative">
        <div className="container mx-auto container-padding">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-accent rounded-full"></span>
              Core Skills
            </div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-playfair font-bold mb-6 bg-text-gradient bg-clip-text text-balance">
              Technical Expertise
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed text-balance">
              Practical skills built from real products, system constraints, and performance goals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {highlights.map((item, index) => (
              <Card
                key={item.title}
                className="group border border-border/40 bg-background/70 backdrop-blur hover:shadow-strong hover:-translate-y-2 transition-all duration-500 animate-fade-in overflow-hidden relative"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent/6 to-primary/6 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardHeader className="text-left relative z-10 pb-3">
                  <div className="w-12 h-12 mb-4 rounded-xl bg-gradient-to-br from-accent-light to-primary-light flex items-center justify-center shadow-soft">
                    <item.icon className={`h-6 w-6 ${item.color}`} />
                  </div>
                  <CardTitle className="text-lg font-playfair font-semibold">
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="relative z-10">
                  <CardDescription className="leading-relaxed text-balance">
                    {item.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-muted/30">
        <div className="container mx-auto container-padding">
          <div className="grid lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-20 items-start">
            <div>
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                Working Style
              </div>
              <h3 className="text-4xl md:text-5xl font-playfair font-bold mb-6 text-balance">
                A simple, disciplined delivery process.
              </h3>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
                Clear phases that make engineering work transparent and measurable.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                {["Laravel", "Vue.js", "Nuxt", "TypeScript", "Redis", "MySQL"].map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-border px-4 py-2 text-sm bg-background"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="space-y-6">
              {process.map((step, index) => (
                <Card key={step.title} className="border border-border/40 shadow-soft bg-card-gradient">
                  <CardHeader className="flex flex-row items-center gap-4 pb-2">
                    <div className="h-12 w-12 rounded-xl bg-accent/10 text-accent flex items-center justify-center">
                      <step.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <CardTitle className="text-lg font-playfair">{step.title}</CardTitle>
                      <div className="text-xs text-muted-foreground">Step {index + 1}</div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed">
                      {step.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
