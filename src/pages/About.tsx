import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Award, Briefcase, GraduationCap, MapPin } from "lucide-react";
import { useEffect, useState } from "react";
import { api } from "@/lib/api";
import { CheckCircle, Sparkles } from "lucide-react";
import Footer from "@/components/Footer";

const About = () => {
  const [skills, setSkills] = useState([]);
  const [educations, setEducations] = useState([]);
  const [experience, setExperience] = useState([]);
  const [summary, setSummary] = useState("");
  const [interests, setInterests] = useState([]);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [skillsRes, eduRes, expRes, summaryRes, interestsRes] = await Promise.all([
          api.get("/skills"),
          api.get("/educations"),
          api.get("/experiences"),
          api.get("/personal"),
          api.get("/interests"),
        ]);
        if (skillsRes.data.status === "success") {
          const skillData = skillsRes.data.data.map(skill => ({
            name: skill.title,
            level: skill.level * 10,
          }));
          setSkills(skillData);
        }
        if (eduRes.data.status === "success") {
          setEducations(eduRes.data.data);
        }
        if (expRes.data.status === "success") {
          setExperience(expRes.data.data);
        }
        if (summaryRes.data.status === "success") {
          setSummary(summaryRes.data.data.summary);
        }
        if (interestsRes.data.status === "success") {
          const interestData = interestsRes.data.data.map(data => ({
            name: data.area,
          }));
          setInterests(interestData);
        }
      } catch (error) {
        console.error("Failed to fetch data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const formatPeriod = (start, end) => {
    if (!start) return "";
    const format = (dateStr) =>
      new Date(dateStr).toLocaleString("default", { month: "short", year: "numeric" });
    return `${format(start)} - ${end ? format(end) : "Present"}`;
  };

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-background">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-t-transparent border-primary" />
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-background overflow-hidden">
      {/* Page Header with decorative elements */}
      <section className="pt-8 pb-16 relative">
        <div className="absolute top-20 -right-40 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 -left-40 w-96 h-96 bg-violet-500/5 rounded-full blur-3xl pointer-events-none"></div>
        
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="mb-12 border-b border-border/50 pb-8">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-xs font-bold mb-5 uppercase tracking-wider border border-primary/20 animate-fade-in">
              <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse"></span>
              About
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-foreground animate-slide-up stagger-1">
              About Me
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl animate-slide-up stagger-2">
              Passionate problem solver and software engineer turning complex challenges into elegant solutions.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-10">
            
            {/* Main Column */}
            <div className="lg:col-span-2 space-y-12">
              
              {/* Summary */}
              <div className="animate-fade-in stagger-2">
                <h2 className="text-2xl font-bold mb-4 tracking-tight flex items-center gap-3">
                  <div className="h-8 w-1 rounded-full bg-gradient-to-b from-primary to-violet-500"></div>
                  Summary
                </h2>
                <div className="text-base leading-relaxed text-muted-foreground space-y-4 pl-4 border-l border-border/30">
                  <p>{summary}</p>
                </div>
              </div>

              {/* Experience */}
              <div className="animate-fade-in stagger-3">
                <h2 className="text-2xl font-bold mb-6 tracking-tight flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500/10 to-violet-500/10 text-primary flex items-center justify-center border border-primary/10">
                    <Briefcase className="h-5 w-5" />
                  </div>
                  Professional Experience
                </h2>
                
                <div className="space-y-6">
                  {experience.map((job, index) => (
                    <Card key={job.id} className="card-premium border border-border/60 bg-card shadow-sm rounded-xl overflow-hidden group relative" style={{ animationDelay: `${index * 0.1}s` }}>
                      <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary/60 to-violet-500/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <CardHeader className="pb-2 pt-6 px-6">
                        <CardTitle className="text-lg font-bold tracking-tight">{job.job_title}</CardTitle>
                        <CardDescription className="flex flex-wrap items-center gap-2 mt-2">
                          <span className="font-semibold text-primary">{job.company_name}</span>
                          <span className="text-muted-foreground/40">•</span>
                          <span className="text-sm font-medium">
                            {formatPeriod(job.start_date, job.end_date)}
                          </span>
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="px-6 pb-6">
                        <p className="text-sm text-muted-foreground leading-relaxed">{job.responsibilities}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8 lg:mt-0 mt-8">
              
              {/* Skills Card */}
              <Card className="animate-fade-in card-premium border border-border/60 bg-card shadow-sm rounded-xl overflow-hidden stagger-3 relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.02] to-violet-500/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardHeader className="pb-4 pt-6 px-6 relative z-10">
                  <CardTitle className="flex items-center gap-3 text-lg font-bold tracking-tight">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500/10 to-cyan-500/10 text-blue-600 flex items-center justify-center border border-blue-500/10">
                      <Award className="h-4 w-4" />
                    </div>
                    Core Skills
                  </CardTitle>
                </CardHeader>
                <CardContent className="px-6 pb-6 space-y-5 relative z-10">
                  {skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-semibold text-foreground">{skill.name}</span>
                        <span className="text-xs font-bold text-primary/70">{skill.level}%</span>
                      </div>
                      <div className="h-1.5 w-full bg-muted/50 rounded-full overflow-hidden">
                        <div 
                          className="h-full rounded-full bg-gradient-to-r from-blue-500 to-violet-500 transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Education Card */}
              <Card className="animate-fade-in card-premium border border-border/60 bg-card shadow-sm rounded-xl overflow-hidden stagger-4 relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/[0.02] to-teal-500/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardHeader className="pb-4 pt-6 px-6 relative z-10">
                  <CardTitle className="flex items-center gap-3 text-lg font-bold tracking-tight">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500/10 to-teal-500/10 text-emerald-600 flex items-center justify-center border border-emerald-500/10">
                      <GraduationCap className="h-4 w-4" />
                    </div>
                    Education
                  </CardTitle>
                </CardHeader>
                <CardContent className="px-6 pb-6 space-y-6 relative z-10">
                  {educations.map((edu) => (
                    <div key={edu.id} className="border-l-2 border-emerald-500/20 pl-4 py-1 hover:border-emerald-500/50 transition-colors duration-300">
                      <h4 className="font-semibold text-sm mb-1">{edu.degree}</h4>
                      <p className="text-xs text-muted-foreground mb-1">
                        {edu.institute}, {edu.city}
                      </p>
                      <div className="flex items-center justify-between mt-2">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-600/70">
                          {edu.start_date?.slice(0, 4)} - {edu.end_date?.slice(0, 4) || 'Present'}
                        </span>
                        <span className="text-xs font-medium text-muted-foreground">GPA: {edu.result}</span>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Interests Card */}
              <Card className="animate-fade-in card-premium border border-border/60 bg-card shadow-sm rounded-xl overflow-hidden stagger-5 relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/[0.02] to-orange-500/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardHeader className="pb-4 pt-6 px-6 relative z-10">
                  <CardTitle className="flex items-center gap-3 text-lg font-bold tracking-tight">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500/10 to-orange-500/10 text-amber-600 flex items-center justify-center border border-amber-500/10">
                      <Sparkles className="h-4 w-4" />
                    </div>
                    Interests
                  </CardTitle>
                </CardHeader>
                <CardContent className="px-6 pb-6 relative z-10">
                  <ul className="flex flex-wrap gap-2">
                    {interests.map((interest, index) => (
                      <li key={index} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r from-amber-500/5 to-orange-500/5 border border-amber-500/10 text-xs font-medium text-foreground hover:border-amber-500/30 transition-colors duration-300">
                        <CheckCircle className="h-3 w-3 text-amber-500" />
                        {interest.name}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default About;
