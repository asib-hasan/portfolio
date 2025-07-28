import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Calendar, Users, Award } from "lucide-react";

const Research = () => {
  const publications = [
    {
      title: "Machine Learning Approaches to Climate Change Prediction",
      journal: "Nature Climate Change",
      year: "2023",
      authors: "Smith, J., Doe, A., Johnson, M.",
      category: "AI/ML",
      citations: 157,
      abstract: "This paper presents novel machine learning techniques for improving long-term climate change predictions, achieving 23% better accuracy than traditional models.",
      url: "#"
    },
    {
      title: "Ethical Implications of AI in Healthcare Decision Making",
      journal: "Journal of Medical Ethics",
      year: "2023",
      authors: "Doe, A., Brown, K., Wilson, L.",
      category: "AI Ethics",
      citations: 89,
      abstract: "An comprehensive analysis of ethical considerations when implementing AI systems in critical healthcare decision-making processes.",
      url: "#"
    },
    {
      title: "Quantum Computing Applications in Cryptography",
      journal: "IEEE Transactions on Quantum Engineering",
      year: "2022",
      authors: "Johnson, M., Doe, A., Zhang, C.",
      category: "Quantum Computing",
      citations: 234,
      abstract: "Exploring the potential and limitations of quantum computing technologies in modern cryptographic systems.",
      url: "#"
    },
    {
      title: "Sustainable Technology Solutions for Smart Cities",
      journal: "Urban Studies",
      year: "2022",
      authors: "Doe, A., Garcia, R., Thompson, S.",
      category: "Sustainability",
      citations: 112,
      abstract: "Investigating how emerging technologies can be leveraged to create more sustainable and efficient urban environments.",
      url: "#"
    }
  ];

  const stats = [
    { label: "Publications", value: "25+", icon: Award },
    { label: "Citations", value: "892", icon: ExternalLink },
    { label: "Collaborators", value: "40+", icon: Users },
    { label: "Years Active", value: "8", icon: Calendar }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-hero-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Research & Publications</h1>
            <p className="text-xl md:text-2xl text-80">
              Advancing the frontiers of knowledge through rigorous research and 
              collaborative scientific inquiry.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-background border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={stat.label} className="text-center animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <stat.icon className="h-8 w-8 text-primary" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Publications */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 bg-text-gradient bg-clip-text text-transparent">
            Recent Publications
          </h2>
          <p className="text-xl text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
            A selection of my recent peer-reviewed publications and research contributions.
          </p>
          
          <div className="max-w-6xl mx-auto space-y-8">
            {publications.map((pub, index) => (
              <Card key={pub.title} className="animate-fade-in hover:shadow-medium transition-all duration-300" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2">{pub.title}</CardTitle>
                      <CardDescription className="text-base">
                        <span className="font-medium text-primary">{pub.journal}</span> • {pub.year}
                      </CardDescription>
                      <p className="text-sm text-muted-foreground mt-1">
                        Authors: {pub.authors}
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Badge variant="secondary">{pub.category}</Badge>
                      <div className="text-sm text-muted-foreground">
                        {pub.citations} citations
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{pub.abstract}</p>
                  <Button variant="outline" className="group">
                    <ExternalLink className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                    View Publication
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

export default Research;