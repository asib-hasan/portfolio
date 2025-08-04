import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Clock, Target } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Footer from "@/components/Footer";

type CaseStudy = {
  id: number;
  title: string;
  duration: string;
  category: string;
  date: string;
  image: string;
  description: string;
};

const CaseStudyDetail = () => {
  const { id } = useParams();
  const [data, setData] = useState<CaseStudy | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCaseStudy = async () => {
      try {
        const res = await fetch(`https://resume.asib-hasan.com/api/single-case-study/${id}`);
        const json = await res.json();
        if (json.code === 200) {
          setData(json.data);
        } else {
          throw new Error("Failed to load case study.");
        }
      } catch (err: any) {
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchCaseStudy();
  }, [id]);

    if (loading) {
    return (
     <div className="min-h-screen flex justify-center items-center">
      <div className="h-8 w-8 animate-spin rounded-full border-4 border-t-transparent border-primary" />
    </div>
    );
  }
  
  if (!data || error) {
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
              <Badge className="mb-4">{data.category}</Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{data.title}</h1>

              <div className="flex flex-wrap gap-6 text-sm text-muted-foreground mb-8">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  Duration: {data.duration}
                </div>
              </div>
            </div>

            <img
              src={`https://resume.asib-hasan.com/${data.image}`}
              alt={data.title}
              className="w-full h-96 object-cover rounded-lg shadow-md"
            />
          </div>
        </div>
      </section>

      {/* Content Section */}
      <div className="container mx-auto px-4 pb-20">
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Overview */}
          <section>
            <h2 className="text-3xl font-bold mb-6 flex items-center">
              <Target className="mr-3 h-8 w-8 text-primary" />
              Case Study Overview
            </h2>
            <Card>
              <CardContent className="pt-6">
                <div
                  className="text-muted-foreground prose max-w-none"
                  dangerouslySetInnerHTML={{ __html: data.description }}
                />
              </CardContent>
            </Card>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CaseStudyDetail;
