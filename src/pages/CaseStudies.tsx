import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Eye } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";


const CaseStudies = () => {
  const [caseStudies, setCaseStudies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  axios.get("https://resume.asib-hasan.com/api/case-study")
    .then((res) => {
      if (res.data?.status === "success") {
        const transformed = res.data.data.map((item) => ({
          id: item.id,
          title: item.title,
          description: item.description.replace(/<[^>]*>?/gm, ""), // remove HTML tags
          category: item.category,
          duration: item.duration,
          client: "Private", // or item.client if you have it
          image: item.image || "/api/placeholder/600/400", // fallback
          tags: item.keywords ? item.keywords.split(",") : [],
          featured: true // or logic to detect featured
        }));
        setCaseStudies(transformed);
      }
    })
    .catch((error) => {
      console.error("Failed to load case studies:", error);
    })
    .finally(() => setLoading(false));
}, []);


  const featuredStudies = caseStudies.filter(study => study.featured);
  const allStudies = caseStudies;

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-hero-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Case Studies</h1>
            <p className="text-xl md:text-2xl text-80">
              Real-world solutions that drive measurable impact across industries, 
              showcasing innovative approaches to complex challenges.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Case Studies */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {featuredStudies.map((study, index) => (
              <Card key={study.id} className="group overflow-hidden hover:shadow-strong transition-all duration-500 animate-fade-in border-0 bg-card-gradient" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="relative overflow-hidden">
                  <img 
                    src={study.image} 
                    alt={study.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-primary text-primary-foreground">Featured</Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary">{study.category}</Badge>
                  </div>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                    {study.title}
                  </CardTitle>
                  <CardDescription className="text-base">
                    {study.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {study.duration}
                    </div>
                    <div className="flex items-center gap-1">
                      <Eye className="h-4 w-4" />
                      {study.client}
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {study.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <Button asChild className="w-full group/btn">
                    <Link to={`/case-studies/${study.id}`}>
                      View Case Study
                      <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* All Case Studies */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 bg-text-gradient bg-clip-text text-transparent">
            All Projects
          </h2>
          <p className="text-xl text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
            Comprehensive portfolio of strategic implementations and innovative solutions.
          </p>
          
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {allStudies.map((study, index) => (
              <Card key={study.id} className="group hover:shadow-medium transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="relative overflow-hidden">
                  <img 
                    src={study.image} 
                    alt={study.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 right-3">
                    <Badge variant="secondary" className="text-xs">
                      {study.category}
                    </Badge>
                  </div>
                </div>
                
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg group-hover:text-primary transition-colors line-clamp-2">
                    {study.title}
                  </CardTitle>
                  <CardDescription className="text-sm line-clamp-3">
                    {study.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                    <span>{study.duration}</span>
                    <span>{study.client}</span>
                  </div>
                  
                  <Button asChild variant="outline" size="sm" className="w-full group/btn">
                    <Link to={`/case-studies/${study.id}`}>
                      Read More
                      <ArrowRight className="ml-2 h-3 w-3 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;