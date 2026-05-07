import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Github, ExternalLink, FolderGit2 } from "lucide-react";
import { useEffect, useState } from "react";
import { api, assetUrl } from "@/lib/api";
import Footer from "@/components/Footer";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get("/case-study")
      .then((res) => {
        if (res.data?.status === "success") {
          const transformed = res.data.data.map((item) => ({
            id: item.id,
            title: item.title,
            description: item.description.replace(/<[^>]*>?/gm, ""), 
            category: item.category,
            image: item.image || "/api/placeholder/600/400",
            tags: item.keywords ? item.keywords.split(",") : [],
            link: item.link || "#",
            github: item.github || "#"
          }));
          setProjects(transformed);
        }
      })
      .catch((error) => {
        console.error("Failed to load projects:", error);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      {/* Page Header */}
      <section className="pt-8 pb-12 relative">
        <div className="absolute top-10 -right-40 w-96 h-96 bg-violet-500/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 -left-32 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="border-b border-border/50 pb-8">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-xs font-bold mb-5 uppercase tracking-wider border border-primary/20 animate-fade-in">
              <FolderGit2 className="w-3.5 h-3.5" />
              Portfolio
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-foreground animate-slide-up stagger-1">
              Top Projects
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl animate-slide-up stagger-2">
              Curated selection of my best work, ranked by impact.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="container mx-auto px-4 max-w-6xl">
          {loading ? (
            <div className="flex justify-center items-center py-12">
              <div className="h-8 w-8 animate-spin rounded-full border-4 border-t-transparent border-primary" />
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <Card key={project.id} className="group card-premium border border-border/60 bg-card shadow-sm rounded-xl overflow-hidden animate-fade-in flex flex-col relative" style={{ animationDelay: `${index * 0.1}s` }}>
                  {/* Hover gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.02] to-violet-500/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>
                  
                  <div className="relative overflow-hidden h-52 shrink-0">
                    <img
                      src={assetUrl(project.image)}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute top-4 right-4">
                      <Badge variant="secondary" className="bg-background/90 backdrop-blur-md shadow-sm border border-border/50 text-xs font-bold">
                        {project.category}
                      </Badge>
                    </div>
                  </div>

                  <CardHeader className="pb-2 pt-5 px-5 relative z-10">
                    <CardTitle className="text-lg font-bold tracking-tight text-foreground group-hover:text-primary transition-colors duration-300 line-clamp-2">
                      {project.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="px-5 pb-5 flex-1 flex flex-col relative z-10">
                    <CardDescription className="text-sm text-muted-foreground leading-relaxed line-clamp-3 mb-4 flex-1">
                      {project.description}
                    </CardDescription>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.slice(0, 4).map((tag) => (
                        <Badge key={tag} variant="outline" className="text-[10px] uppercase font-bold tracking-wider bg-muted/30 border-border/60 text-muted-foreground hover:border-primary/30 hover:text-primary transition-colors">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex gap-3">
                      <Button asChild className="flex-1 font-semibold shadow-sm rounded-xl" variant="default" size="sm">
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                        </a>
                      </Button>
                      <Button asChild className="flex-1 font-semibold rounded-xl" variant="outline" size="sm">
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2 h-4 w-4" /> Code
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Projects;
