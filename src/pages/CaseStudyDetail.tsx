import { useParams, Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Clock, Users, Target, TrendingUp, CheckCircle } from "lucide-react";

const CaseStudyDetail = () => {
  const { id } = useParams();

  // This would typically come from an API or data store
  const caseStudyData = {
    "ai-healthcare-platform": {
      title: "AI-Powered Healthcare Platform",
      subtitle: "Revolutionizing Diagnostic Accuracy Through Machine Learning",
      client: "HealthTech Solutions",
      duration: "8 months",
      team: "6 specialists",
      category: "Healthcare AI",
      heroImage: "/api/placeholder/1200/600",
      overview: "HealthTech Solutions approached us to develop an AI-powered diagnostic platform that could assist medical professionals in making more accurate diagnoses while reducing the time required for analysis. The challenge was to create a system that could process complex medical data while maintaining the highest standards of accuracy and reliability.",
      challenge: "The healthcare industry faces significant challenges with diagnostic accuracy, with studies showing that misdiagnosis affects 10-15% of all cases. Traditional diagnostic methods are time-consuming and prone to human error, especially in complex cases involving multiple symptoms or rare conditions.",
      solution: "We developed a comprehensive AI platform that combines machine learning algorithms with natural language processing to analyze patient data, medical imaging, and clinical notes. The system provides real-time diagnostic suggestions with confidence scores and detailed explanations.",
      results: [
        { metric: "Diagnostic Accuracy", improvement: "+35%", description: "Significant reduction in misdiagnosis rates" },
        { metric: "Analysis Time", improvement: "-60%", description: "Faster diagnostic processing" },
        { metric: "Patient Satisfaction", improvement: "+42%", description: "Improved patient outcomes and experience" },
        { metric: "Cost Savings", improvement: "$2.3M", description: "Annual savings from reduced errors" }
      ],
      technologies: ["TensorFlow", "Python", "React", "AWS", "Docker", "PostgreSQL"],
      phases: [
        {
          title: "Research & Discovery",
          duration: "6 weeks",
          description: "Conducted extensive research on existing diagnostic processes and identified key pain points.",
          deliverables: ["Market Analysis", "User Research", "Technical Requirements"]
        },
        {
          title: "AI Model Development",
          duration: "12 weeks",
          description: "Developed and trained machine learning models using historical medical data.",
          deliverables: ["ML Models", "Training Data Sets", "Validation Results"]
        },
        {
          title: "Platform Development",
          duration: "16 weeks",
          description: "Built the web platform with intuitive interface for medical professionals.",
          deliverables: ["Web Application", "API Documentation", "User Interface"]
        },
        {
          title: "Testing & Deployment",
          duration: "8 weeks",
          description: "Comprehensive testing with medical professionals and gradual rollout.",
          deliverables: ["Test Results", "Deployment Guide", "Training Materials"]
        }
      ],
      testimonial: {
        quote: "This platform has transformed how we approach complex diagnoses. The AI suggestions are incredibly accurate and have helped us catch several cases we might have missed.",
        author: "Dr. Sarah Chen",
        position: "Chief Medical Officer, HealthTech Solutions"
      },
      keyFeatures: [
        "Real-time diagnostic analysis",
        "Medical imaging processing",
        "Natural language processing for clinical notes",
        "Integration with existing EMR systems",
        "Explainable AI recommendations",
        "Continuous learning capabilities"
      ]
    }
  };

  const study = caseStudyData[id as keyof typeof caseStudyData];

  if (!study) {
    return (
      <div className="min-h-screen pt-16 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Case Study Not Found</h1>
          <p className="text-muted-foreground mb-8">The requested case study could not be found.</p>
          <Button asChild>
            <Link to="/case-studies">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Case Studies
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
          <Link to="/case-studies">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Case Studies
          </Link>
        </Button>
      </div>

      {/* Hero Section */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <Badge className="mb-4">{study.category}</Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{study.title}</h1>
              
              <div className="flex flex-wrap gap-6 text-sm text-muted-foreground mb-8">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  Duration: {study.duration}
                </div>
              </div>
            </div>
            
            <img 
              src={study.heroImage} 
              alt={study.title}
              className="w-full h-96 object-cover rounded-lg shadow-strong"
            />
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <div className="container mx-auto px-4 pb-20">
        <div className="max-w-4xl mx-auto space-y-16">
          
          {/* Overview */}
          <section className="animate-fade-in">
            <h2 className="text-3xl font-bold mb-6 flex items-center">
              <Target className="mr-3 h-8 w-8 text-primary" />
              Project Overview
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">{study.overview}</p>
          </section>

          {/* Challenge */}
          <section className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <h2 className="text-3xl font-bold mb-6">The Challenge</h2>
            <Card className="border-l-4 border-l-destructive">
              <CardContent className="pt-6">
                <p className="text-lg text-muted-foreground leading-relaxed">{study.challenge}</p>
              </CardContent>
            </Card>
          </section>

          {/* Results */}
          <section className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <h2 className="text-3xl font-bold mb-6 flex items-center">
              <TrendingUp className="mr-3 h-8 w-8 text-primary" />
              Results & Impact
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {study.results.map((result, index) => (
                <Card key={index} className="text-center hover:shadow-medium transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-3xl font-bold text-primary">{result.improvement}</CardTitle>
                    <CardDescription className="text-lg font-medium">{result.metric}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{result.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Project Phases */}
          <section className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <h2 className="text-3xl font-bold mb-6">Project Timeline</h2>
            <div className="space-y-6">
              {study.phases.map((phase, index) => (
                <Card key={index} className="overflow-hidden">
                  <CardHeader>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <CardTitle className="text-xl">{phase.title}</CardTitle>
                      <Badge variant="outline">{phase.duration}</Badge>
                    </div>
                    <CardDescription>{phase.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {phase.deliverables.map((deliverable) => (
                        <Badge key={deliverable} variant="secondary" className="text-xs">
                          {deliverable}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyDetail;