import { useParams, Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Calendar, Clock, User, Share2, BookOpen } from "lucide-react";
import { useEffect, useState } from "react";
import axios from "axios";
import Footer from "@/components/Footer";
const BlogPost = () => {
  const { id } = useParams();
  const [blogPostData, setBlogPostData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`https://resume.asib-hasan.com/api/single-blog/${id}`)
      .then((res) => {
        setBlogPostData(res.data.data);
      })
      .catch((err) => {
        console.error("Error fetching blog post:", err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
     <div className="min-h-screen flex justify-center items-center">
      <div className="h-8 w-8 animate-spin rounded-full border-4 border-t-transparent border-primary" />
    </div>
    );
  }




  if (!blogPostData) {
    return (
      <div className="min-h-screen pt-16 flex items-center justify-center">
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
    <div className="min-h-screen pt-16">
      {/* Back Button */}
      <div className="container mx-auto px-4 py-8">
        <Button asChild variant="ghost">
          <Link to="/blog">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Link>
        </Button>
      </div>

      {/* Hero Section */}
      <section className="pb-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <Badge className="mb-4">{blogPostData.category}</Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">{blogPostData.title}</h1>
              
              <div className="flex flex-wrap gap-6 text-sm text-muted-foreground mb-8">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  Asib Hasan
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
                  {/* {blogPostData.readTime} */}
                  5 Minutes Read
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-8">
                  <Badge variant="outline">
                    {blogPostData.category}
                  </Badge>
              </div>
            </div>
            
            <img 
              src={`https://resume.asib-hasan.com/${blogPostData.image}`}
              alt={blogPostData.title}
              className="w-full h-96 object-cover rounded-lg shadow-strong mb-8"
            />
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <article 
              className="prose prose-lg max-w-none animate-fade-in"
              dangerouslySetInnerHTML={{ __html: blogPostData.description }}
            />
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {/* <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 flex items-center">
              <BookOpen className="mr-3 h-8 w-8 text-primary" />
              Related Articles
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {post.relatedPosts.map((relatedPost) => (
                <Card key={relatedPost.id} className="group hover:shadow-medium transition-all duration-300">
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-semibold mb-4 group-hover:text-primary transition-colors">
                      {relatedPost.title}
                    </h3>
                    <Button asChild variant="outline" className="group/btn">
                      <Link to={`/blog/${relatedPost.id}`}>
                        Read Article
                        <ArrowLeft className="ml-2 h-4 w-4 rotate-180 group-hover/btn:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section> */}
      <Footer />
    </div>
  );
};

export default BlogPost;