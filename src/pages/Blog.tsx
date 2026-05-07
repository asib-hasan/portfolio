import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Clock, User, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { api, assetUrl } from "@/lib/api";
import { createSlug } from "@/lib/utils";
import Footer from "@/components/Footer";

const Blog = () => {
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    api.get("/blog")
      .then((res) => {
        if (Array.isArray(res.data.data)) {
          setBlogPosts(res.data.data);
        }
      })
      .catch((error) => {
        console.error("Failed to fetch blog posts:", error);
      });
  }, []);

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      {/* Page Header */}
      <section className="pt-8 pb-12 relative">
        <div className="absolute top-20 -right-40 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 -left-32 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="border-b border-border/50 pb-8">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-xs font-bold mb-5 uppercase tracking-wider border border-primary/20 animate-fade-in">
              <BookOpen className="w-3.5 h-3.5" />
              Blog
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-foreground animate-slide-up stagger-1">
              Blog
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl animate-slide-up stagger-2">
              Thoughts, insights, and engineering stories.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="space-y-0 flex flex-col">
            {blogPosts.map((post, index) => (
              <div 
                key={post.id} 
                className="group flex flex-col items-start animate-fade-in max-w-3xl py-8 border-b border-border/30 last:border-b-0" 
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-[10px] font-bold text-primary uppercase tracking-wider bg-primary/10 px-2.5 py-1 rounded-full border border-primary/20">
                    {post.category}
                  </span>
                  <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5" />
                    {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                  </span>
                </div>
                
                <h2 className="text-2xl md:text-3xl font-bold mb-3 group-hover:text-primary transition-colors duration-300 leading-snug">
                  <Link to={`/blog/${createSlug(post.title)}`} state={{ id: post.id }} className="hover:underline decoration-primary/30 underline-offset-4">
                    {post.title}
                  </Link>
                </h2>
                
                <div 
                  className="text-base text-muted-foreground line-clamp-3 leading-relaxed" 
                  dangerouslySetInnerHTML={{ __html: post.description }} 
                />

                <Link 
                  to={`/blog/${createSlug(post.title)}`} 
                  state={{ id: post.id }} 
                  className="inline-flex items-center gap-1.5 mt-4 text-sm font-semibold text-primary hover:text-primary/80 transition-colors group/link"
                >
                  Read article 
                  <ArrowRight className="h-3.5 w-3.5 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}

            {blogPosts.length === 0 && (
              <p className="text-muted-foreground py-12">No posts found.</p>
            )}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Blog;
