import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Clock, User } from "lucide-react";
import { Link } from "react-router-dom";

const Blog = () => {
  const blogPosts = [
    {
      id: "future-of-ai-ethics",
      title: "The Future of AI Ethics: Navigating Responsibility in Innovation",
      excerpt: "As artificial intelligence becomes more prevalent in our daily lives, the importance of ethical considerations in AI development has never been more critical. This post explores...",
      content: "Full article content here...",
      author: "Alex Johnson",
      date: "2024-01-15",
      readTime: "8 min read",
      category: "AI Ethics",
      tags: ["AI", "Ethics", "Technology", "Future"],
      featured: true,
      image: "/api/placeholder/800/400"
    },
    {
      id: "machine-learning-healthcare",
      title: "Machine Learning in Healthcare: Transforming Patient Care",
      excerpt: "Healthcare is undergoing a revolutionary transformation powered by machine learning technologies. From diagnostic imaging to personalized treatment plans...",
      content: "Full article content here...",
      author: "Alex Johnson",
      date: "2024-01-10",
      readTime: "12 min read",
      category: "Healthcare",
      tags: ["Machine Learning", "Healthcare", "Innovation"],
      featured: true,
      image: "/api/placeholder/800/400"
    },
    {
      id: "quantum-computing-breakthrough",
      title: "Quantum Computing: The Next Frontier in Computational Power",
      excerpt: "Recent breakthroughs in quantum computing are bringing us closer to solving problems that were previously thought impossible...",
      content: "Full article content here...",
      author: "Alex Johnson",
      date: "2024-01-05",
      readTime: "10 min read",
      category: "Quantum Computing",
      tags: ["Quantum", "Computing", "Research"],
      featured: false,
      image: "/api/placeholder/800/400"
    },
    {
      id: "sustainable-tech-solutions",
      title: "Sustainable Technology Solutions for Climate Change",
      excerpt: "Technology has a crucial role to play in addressing climate change. This article examines innovative solutions that are making a real difference...",
      content: "Full article content here...",
      author: "Alex Johnson",
      date: "2023-12-28",
      readTime: "15 min read",
      category: "Sustainability",
      tags: ["Sustainability", "Climate", "Green Tech"],
      featured: false,
      image: "/api/placeholder/800/400"
    },
    {
      id: "data-privacy-digital-age",
      title: "Data Privacy in the Digital Age: Best Practices and Challenges",
      excerpt: "With increasing digitization comes the growing importance of data privacy. Learn about the latest trends and best practices...",
      content: "Full article content here...",
      author: "Alex Johnson",
      date: "2023-12-20",
      readTime: "7 min read",
      category: "Privacy",
      tags: ["Privacy", "Data Security", "Digital Rights"],
      featured: false,
      image: "/api/placeholder/800/400"
    },
    {
      id: "remote-work-productivity",
      title: "Maximizing Productivity in Remote Work Environments",
      excerpt: "The shift to remote work has created new challenges and opportunities. Here are strategies for maintaining high productivity...",
      content: "Full article content here...",
      author: "Alex Johnson",
      date: "2023-12-15",
      readTime: "6 min read",
      category: "Productivity",
      tags: ["Remote Work", "Productivity", "Work-Life Balance"],
      featured: false,
      image: "/api/placeholder/800/400"
    }
  ];

  const categories = ["All", "AI Ethics", "Healthcare", "Quantum Computing", "Sustainability", "Privacy", "Productivity"];
  const featuredPosts = blogPosts.filter(post => post.featured);

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-hero-gradient text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Blog & Insights</h1>
            <p className="text-xl md:text-2xl text-white/80">
              Exploring the intersection of technology, innovation, and human impact 
              through thoughtful analysis and industry insights.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 bg-text-gradient bg-clip-text text-transparent">
            Featured Articles
          </h2>
          <p className="text-xl text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
            In-depth articles on the latest trends and insights in technology and innovation.
          </p>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {featuredPosts.map((post, index) => (
              <Card key={post.id} className="group overflow-hidden hover:shadow-strong transition-all duration-500 animate-fade-in border-0 bg-card-gradient" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="relative overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-primary text-primary-foreground">Featured</Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary">{post.category}</Badge>
                  </div>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-2xl group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="text-base line-clamp-3">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      {post.author}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {post.readTime}
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {post.tags.slice(0, 3).map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <Button asChild className="w-full group/btn">
                    <Link to={`/blog/${post.id}`}>
                      Read Full Article
                      <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* All Posts */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 bg-text-gradient bg-clip-text text-transparent">
            Recent Articles
          </h2>
          <p className="text-xl text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
            Stay updated with the latest thoughts on technology, research, and innovation.
          </p>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "All" ? "default" : "outline"}
                size="sm"
                className="text-sm"
              >
                {category}
              </Button>
            ))}
          </div>
          
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card key={post.id} className="group hover:shadow-medium transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="relative overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 right-3">
                    <Badge variant="secondary" className="text-xs">
                      {post.category}
                    </Badge>
                  </div>
                </div>
                
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="text-sm line-clamp-3">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                    <span>{post.readTime}</span>
                  </div>
                  
                  <Button asChild variant="outline" size="sm" className="w-full group/btn">
                    <Link to={`/blog/${post.id}`}>
                      Read Article
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

export default Blog;