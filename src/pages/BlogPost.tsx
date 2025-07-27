import { useParams, Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Calendar, Clock, User, Share2, BookOpen } from "lucide-react";

const BlogPost = () => {
  const { id } = useParams();

  // This would typically come from an API or data store
  const blogPostData = {
    "future-of-ai-ethics": {
      title: "The Future of AI Ethics: Navigating Responsibility in Innovation",
      subtitle: "Exploring the critical balance between technological advancement and ethical responsibility",
      author: "Alex Johnson",
      date: "2024-01-15",
      readTime: "8 min read",
      category: "AI Ethics",
      tags: ["AI", "Ethics", "Technology", "Future"],
      heroImage: "/api/placeholder/1200/600",
      content: `
        <p class="text-lg text-muted-foreground leading-relaxed mb-8">As artificial intelligence becomes more prevalent in our daily lives, the importance of ethical considerations in AI development has never been more critical. The decisions we make today about AI ethics will shape the technological landscape for generations to come.</p>

        <h2 class="text-3xl font-bold mb-6 mt-12">The Current Landscape</h2>
        <p class="text-muted-foreground leading-relaxed mb-6">The rapid advancement of AI technology has outpaced our ethical frameworks. From facial recognition systems to autonomous vehicles, AI is making decisions that directly impact human lives. Yet, many of these systems operate in ethical gray areas, highlighting the urgent need for comprehensive ethical guidelines.</p>

        <blockquote class="border-l-4 border-primary pl-6 italic text-xl text-muted-foreground my-8">
          "The question is not whether AI will change the world, but whether we will guide that change responsibly."
        </blockquote>

        <h2 class="text-3xl font-bold mb-6 mt-12">Key Ethical Challenges</h2>
        <h3 class="text-2xl font-semibold mb-4 mt-8">1. Bias and Fairness</h3>
        <p class="text-muted-foreground leading-relaxed mb-6">AI systems can perpetuate and amplify existing biases present in training data. This can lead to discriminatory outcomes in hiring, lending, and law enforcement applications. Addressing bias requires diverse teams, careful data curation, and ongoing monitoring of AI system outputs.</p>

        <h3 class="text-2xl font-semibold mb-4 mt-8">2. Transparency and Explainability</h3>
        <p class="text-muted-foreground leading-relaxed mb-6">Many AI systems, particularly deep learning models, operate as "black boxes" where the decision-making process is opaque. This lack of transparency makes it difficult to understand why certain decisions are made, which is problematic in high-stakes applications like healthcare and criminal justice.</p>

        <h3 class="text-2xl font-semibold mb-4 mt-8">3. Privacy and Data Protection</h3>
        <p class="text-muted-foreground leading-relaxed mb-6">AI systems often require vast amounts of personal data to function effectively. Balancing the benefits of AI with individual privacy rights presents ongoing challenges, particularly as data collection becomes more sophisticated and pervasive.</p>

        <h2 class="text-3xl font-bold mb-6 mt-12">Building Ethical AI Systems</h2>
        <p class="text-muted-foreground leading-relaxed mb-6">Creating ethical AI requires a multi-faceted approach that involves technical, legal, and social considerations. Organizations must embed ethical thinking into every stage of the AI development lifecycle, from data collection to deployment and monitoring.</p>

        <p class="text-muted-foreground leading-relaxed mb-6">Key principles include:</p>
        <ul class="list-disc pl-8 text-muted-foreground leading-relaxed mb-6">
          <li class="mb-2">Fairness and non-discrimination in AI decision-making</li>
          <li class="mb-2">Transparency in AI system operations and limitations</li>
          <li class="mb-2">Accountability for AI system outcomes</li>
          <li class="mb-2">Privacy protection and data minimization</li>
          <li class="mb-2">Human oversight and control mechanisms</li>
        </ul>

        <h2 class="text-3xl font-bold mb-6 mt-12">The Path Forward</h2>
        <p class="text-muted-foreground leading-relaxed mb-6">The future of AI ethics will require collaboration between technologists, ethicists, policymakers, and the public. We need frameworks that are both principled and practical, enabling innovation while protecting fundamental human values.</p>

        <p class="text-muted-foreground leading-relaxed mb-6">This includes developing new tools for AI auditing, creating industry standards for ethical AI development, and fostering a culture of responsibility within the tech community. The goal is not to slow down AI innovation, but to ensure it develops in a direction that benefits all of humanity.</p>

        <p class="text-muted-foreground leading-relaxed mb-6">As we stand at this critical juncture, the choices we make about AI ethics today will determine whether artificial intelligence becomes a force for human flourishing or a source of new inequalities and harms. The responsibility lies with all of us to ensure we choose wisely.</p>
      `,
      relatedPosts: [
        { id: "machine-learning-healthcare", title: "Machine Learning in Healthcare: Transforming Patient Care" },
        { id: "data-privacy-digital-age", title: "Data Privacy in the Digital Age: Best Practices and Challenges" }
      ]
    }
  };

  const post = blogPostData[id as keyof typeof blogPostData];

  if (!post) {
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
              <Badge className="mb-4">{post.category}</Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">{post.title}</h1>
              <p className="text-xl text-muted-foreground mb-8">{post.subtitle}</p>
              
              <div className="flex flex-wrap gap-6 text-sm text-muted-foreground mb-8">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  {post.author}
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  {new Date(post.date).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  {post.readTime}
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-8">
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="outline">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
            
            <img 
              src={post.heroImage} 
              alt={post.title}
              className="w-full h-96 object-cover rounded-lg shadow-strong mb-8"
            />

            {/* Share Button */}
            <div className="flex justify-center mb-12">
              <Button variant="outline" className="group">
                <Share2 className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                Share Article
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <article 
              className="prose prose-lg max-w-none animate-fade-in"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-20 bg-secondary/30">
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
      </section>
    </div>
  );
};

export default BlogPost;