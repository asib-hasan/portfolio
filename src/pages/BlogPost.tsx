import { useParams, Link, useLocation } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Calendar, Clock, User, Share2, BookOpen } from "lucide-react";
import { useEffect, useState } from "react";
import { api, assetUrl } from "@/lib/api";
import { createSlug } from "@/lib/utils";
import Footer from "@/components/Footer";

const BlogPost = () => {
  const { id: slug } = useParams();
  const location = useLocation();
  const [blogPostData, setBlogPostData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogPost = async () => {
      try {
        let postId = location.state?.id;

        if (!postId && slug) {
          const listRes = await api.get("/blog");
          if (listRes.data?.data) {
            const found = listRes.data.data.find((item: any) => createSlug(item.title) === slug);
            if (found) {
              postId = found.id;
            }
          }
        }

        if (postId) {
          const res = await api.get(`/single-blog/${postId}`);
          setBlogPostData(res.data.data);
        }
      } catch (err) {
        console.error("Error fetching blog post:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogPost();
  }, [slug, location.state]);

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-t-transparent border-primary" />
      </div>
    );
  }

  if (!blogPostData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Blog Post Not Found</h1>
          <p className="text-muted-foreground mb-8">The requested blog post could not be found.</p>
          <Button asChild>
            <Link to="/blog">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <section className="pt-12 pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Back Button */}
          <div className="mb-8 border-b border-border/50 pb-6 flex items-center justify-between">
            <Button asChild variant="ghost" className="hover:bg-muted/50 -ml-3 text-muted-foreground hover:text-foreground transition-colors">
              <Link to="/blog">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Link>
            </Button>
            
            <div className="flex gap-2">
               <Badge variant="outline" className="text-xs uppercase tracking-wider bg-muted/30 border-border/60 text-muted-foreground">
                  {blogPostData.category}
               </Badge>
            </div>
          </div>

          {/* Hero Section */}
          <div className="mb-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight tracking-tight text-foreground">
              {blogPostData.title}
            </h1>

            <div className="flex flex-wrap gap-6 text-sm font-medium text-muted-foreground mb-8">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <User className="h-4 w-4" />
                </div>
                <span className="text-foreground">Asib Hasan</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                {new Date(blogPostData.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                5 Minutes Read
              </div>
            </div>

            {blogPostData.image && (
              <img
                src={assetUrl(blogPostData.image)}
                alt={blogPostData.title}
                className="w-full h-auto max-h-[500px] object-cover rounded-xl border border-border/60 shadow-sm mb-12"
              />
            )}
          </div>

          {/* Article Content */}
          <article
            className="prose prose-lg max-w-none text-muted-foreground prose-headings:text-foreground prose-a:text-primary hover:prose-a:text-primary/80 prose-strong:text-foreground prose-img:rounded-xl prose-img:border prose-img:border-border/60 prose-img:shadow-sm"
            dangerouslySetInnerHTML={{ __html: blogPostData.description }}
          />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogPost;
