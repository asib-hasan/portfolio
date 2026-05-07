import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Database, Cpu, Zap, Sparkles, Shield, Workflow, CheckCircle2, Github, Linkedin, Twitter, Mail, ArrowUpRight, Trophy } from "lucide-react";
import { Link } from "react-router-dom";
import AlgoVisualizer from "@/components/AlgoVisualizer";

const Home = () => {
  const skills = [
    "Competitive Programming", "Laravel", "Vue.js", "Nuxt", "TypeScript",
    "MySQL", "MongoDB", "Redis", "Docker", "AWS"
  ];

  const highlights = [
    {
      icon: Code,
      title: "Full-Stack Engineering",
      description: "Laravel + Vue + Nuxt builds with clean architecture, reusable UI, and predictable release cycles.",
      gradient: "from-blue-500/10 to-cyan-500/10",
      iconColor: "text-blue-600",
      iconBg: "bg-blue-500/10",
    },
    {
      icon: Database,
      title: "Backend Systems",
      description: "API design, relational modeling, and caching strategies for stable, scalable backends.",
      gradient: "from-violet-500/10 to-purple-500/10",
      iconColor: "text-violet-600",
      iconBg: "bg-violet-500/10",
    },
    {
      icon: Cpu,
      title: "Performance Optimization",
      description: "Profiling, indexing, Redis caching, and query tuning to reduce latency.",
      gradient: "from-emerald-500/10 to-teal-500/10",
      iconColor: "text-emerald-600",
      iconBg: "bg-emerald-500/10",
    },
    {
      icon: Zap,
      title: "Algorithms & DSA",
      description: "1200+ problems and ICPC regional experience applied to real product constraints.",
      gradient: "from-amber-500/10 to-orange-500/10",
      iconColor: "text-amber-600",
      iconBg: "bg-amber-500/10",
    },
  ];

  const stats = [
    { value: "1200+", label: "Problems Solved", icon: Trophy },
    { value: "2+", label: "Years Experience", icon: Sparkles },
    { value: "10+", label: "Technologies", icon: Code },
  ];

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      {/* Hero */}
      <section className="relative w-full pt-16 pb-20 bg-background flex flex-col items-center text-center overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 -left-32 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-float"></div>
          <div className="absolute top-40 -right-32 w-80 h-80 bg-violet-500/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-t from-primary/[0.03] to-transparent rounded-full blur-3xl"></div>
        </div>

        <div className="container relative z-10 max-w-4xl px-4">
          <div className="flex flex-col items-center text-center space-y-6">

            {/* Avatar - sharp & compact */}
            <div className="relative animate-slide-up">
              <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-full p-[2px] bg-gradient-to-tr from-blue-500 via-violet-500 to-blue-500 shadow-lg shadow-blue-500/20">
                <div className="w-full h-full rounded-full overflow-hidden border-[3px] border-card">
                  <img src="/myphoto.jpg" alt="Asib Hasan" className="object-cover w-full h-full" />
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-center gap-2 animate-slide-up stagger-1">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground font-sans">
                  Asib Hasan
                </h1>
                <CheckCircle2 className="w-6 h-6 md:w-8 md:h-8 text-blue-500 fill-blue-500/20" />
              </div>
              <p className="text-muted-foreground text-base sm:text-lg font-medium animate-slide-up stagger-2">
                Software Engineer | Competitive Programmer
              </p>

              {/* Social Links with hover effects */}
              <div className="flex items-center justify-center gap-3 pt-2 pb-4 animate-slide-up stagger-3">
                <a href="https://www.linkedin.com/in/asib-hasan/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl border border-border/60 flex items-center justify-center text-muted-foreground hover:text-blue-600 hover:border-blue-500/30 hover:bg-blue-500/5 transition-all duration-300 hover:-translate-y-0.5">
                  <Linkedin className="w-4 h-4" />
                </a>
                <a href="https://www.github.com/asib-hasan/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl border border-border/60 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground/20 hover:bg-foreground/5 transition-all duration-300 hover:-translate-y-0.5">
                  <Github className="w-4 h-4" />
                </a>
                <a href="mailto:asib.uucse@gmail.com" className="w-10 h-10 rounded-xl border border-border/60 flex items-center justify-center text-muted-foreground hover:text-red-500 hover:border-red-500/30 hover:bg-red-500/5 transition-all duration-300 hover:-translate-y-0.5">
                  <Mail className="w-4 h-4" />
                </a>
              </div>

              {/* Skills Pills */}
              <div className="flex flex-wrap justify-center gap-2.5 pt-4 max-w-3xl mx-auto animate-slide-up stagger-4">
                {skills.map((skill, i) => (
                  <div key={skill} className="group px-3.5 py-1.5 rounded-full border border-border/60 bg-background text-sm font-medium text-foreground hover:border-primary/40 hover:bg-primary/5 transition-all duration-300 flex items-center gap-2 cursor-default" style={{ animationDelay: `${0.4 + i * 0.05}s` }}>
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/50 group-hover:bg-primary transition-colors"></span>
                    {skill}
                  </div>
                ))}
              </div>
            </div>

            {/* Stats Row */}
            <div className="flex items-center justify-center gap-8 md:gap-12 pt-8 animate-slide-up stagger-5">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center group">
                  <div className="text-2xl md:text-3xl font-bold text-foreground group-hover:text-primary transition-colors">{stat.value}</div>
                  <div className="text-xs text-muted-foreground font-medium mt-1 uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Code Window Banner */}
            <div className="w-full mt-12 text-left animate-slide-up stagger-6">
              <div className="rounded-2xl overflow-hidden border border-border/60 bg-background shadow-xl hover:shadow-2xl transition-shadow duration-500">
                {/* Mac OS Header */}
                <div className="flex items-center px-4 py-3 border-b border-border/50 bg-muted/30">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400/80 hover:bg-red-400 transition-colors"></div>
                    <div className="w-3 h-3 rounded-full bg-amber-400/80 hover:bg-amber-400 transition-colors"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400/80 hover:bg-green-400 transition-colors"></div>
                  </div>
                  <div className="flex-1 text-center">
                    <span className="text-xs font-mono font-medium text-muted-foreground bg-muted/50 px-3 py-0.5 rounded-md">main.ts</span>
                  </div>
                </div>

                {/* Code Content */}
                <div className="p-6 md:p-8 text-sm md:text-base font-mono leading-loose overflow-x-auto bg-[#fafafa] dark:bg-[#0d1117]">
                  <div className="flex">
                    <div className="pr-4 text-muted-foreground/30 text-right select-none border-r border-border/30 mr-4">
                      {Array.from({ length: 22 }).map((_, i) => (
                        <div key={i}>{i + 1}</div>
                      ))}
                    </div>
                    <div>
                      <div><span className="text-blue-600 dark:text-blue-400">interface</span> <span className="text-teal-600 dark:text-teal-400">Developer</span> {'{'}</div>
                      <div className="pl-4">Name: <span className="text-blue-600 dark:text-blue-400">string</span>;</div>
                      <div className="pl-4">Role: <span className="text-blue-600 dark:text-blue-400">string</span>;</div>
                      <div className="pl-4">Skills: <span className="text-blue-600 dark:text-blue-400">string</span>[];</div>
                      <div className="pl-4">Location: <span className="text-blue-600 dark:text-blue-400">string</span>;</div>
                      <div>{'}'}</div>
                      <br />
                      <div><span className="text-blue-600 dark:text-blue-400">const</span> coder: <span className="text-teal-600 dark:text-teal-400">Developer</span> = {'{'}</div>
                      <div className="pl-4">Name: <span className="text-green-600 dark:text-green-400">"Asib Hasan"</span>,</div>
                      <div className="pl-4">Role: <span className="text-green-600 dark:text-green-400">"Software Engineer"</span>,</div>
                      <div className="pl-4">Location: <span className="text-green-600 dark:text-green-400">"Dhaka, Bangladesh"</span>,</div>
                      <div className="pl-4">Skills: [</div>
                      <div className="pl-8 text-green-600 dark:text-green-400">"Competitive Programming",</div>
                      <div className="pl-8 text-green-600 dark:text-green-400">"Laravel", "Vue.js", "Nuxt", "TypeScript",</div>
                      <div className="pl-8 text-green-600 dark:text-green-400">"MySQL", "MongoDB",</div>
                      <div className="pl-8 text-green-600 dark:text-green-400">"Redis", "Docker", "AWS"</div>
                      <div className="pl-4">]</div>
                      <div>{'};'}</div>
                      <br />
                      <div className="text-muted-foreground/60 italic">// Build amazing things 🚀</div>
                      <div>coder.<span className="text-purple-600 dark:text-purple-400">deploy</span>();</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Algo Visualizer Section */}
      <section className="py-12 bg-background relative z-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <AlgoVisualizer />
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-24 bg-background relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 dot-grid opacity-40 pointer-events-none"></div>
        <div className="absolute top-0 left-0 right-0 section-divider"></div>

        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-xs font-bold mb-5 uppercase tracking-wider border border-primary/20 animate-fade-in">
              <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse"></span>
              Core Impact
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-foreground animate-fade-in stagger-1">
              Technical Expertise
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-fade-in stagger-2">
              Developing scalable platforms, optimizing backend systems, and crafting responsive frontends.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, index) => (
              <Card
                key={item.title}
                className="group card-premium border border-border/60 bg-card shadow-sm rounded-xl overflow-hidden animate-fade-in relative"
                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              >
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

                <CardHeader className="text-left pb-2 pt-6 px-6 relative z-10">
                  <div className={`w-12 h-12 mb-4 rounded-xl ${item.iconBg} ${item.iconColor} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <item.icon className="h-5 w-5" />
                  </div>
                  <CardTitle className="text-base font-bold tracking-tight text-foreground">
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="px-6 pb-6 relative z-10">
                  <CardDescription className="text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
