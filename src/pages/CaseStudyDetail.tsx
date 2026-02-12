import { useEffect, useState } from "react";
import { useParams, Link, useLocation } from "react-router-dom";
import { ArrowLeft, Clock, Target } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Footer from "@/components/Footer";
import { api, assetUrl } from "@/lib/api";
import { createSlug } from "@/lib/utils";

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
  const { id: slug } = useParams(); // "id" param in route is now receiving the slug
  const location = useLocation();
  const [data, setData] = useState<CaseStudy | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCaseStudy = async () => {
      try {
        let studyId = location.state?.id;

        if (!studyId && slug) {
          // If accessing directly via slug, we need to find the ID
          const listRes = await api.get("/case-study");
          if (listRes.data?.status === "success") {
            const found = listRes.data.data.find((item: any) => createSlug(item.title) === slug);
            if (found) {
              studyId = found.id;
            } else {
              throw new Error("Case study not found");
            }
          }
        }

        if (studyId) {
          const res = await api.get(`/ single -case -study / ${studyId} `);
          if (res.data?.code === 200) {
            setData(res.data.data);
          } else {
            throw new Error("Failed to load case study.");
          }
        } else {
          throw new Error("Case study not found");
        }

      } catch (err: any) {
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchCaseStudy();
  }, [slug, location.state]);

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
              src={assetUrl(data.image)}
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
