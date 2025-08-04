import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Award, Briefcase, GraduationCap, MapPin } from "lucide-react";
import { useEffect, useState } from "react";
import axios from "axios";
import { CheckCircle,Sparkles  } from "lucide-react";
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
          axios.get("https://resume.asib-hasan.com/api/skills"),
          axios.get("https://resume.asib-hasan.com/api/educations"),
          axios.get("https://resume.asib-hasan.com/api/experiences"),
          axios.get("https://resume.asib-hasan.com/api/personal"),
          axios.get("https://resume.asib-hasan.com/api/interests"),
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
        setLoading(false);
        console.error("Failed to fetch data:", error);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  const formatPeriod = (start, end) => {
    const format = (dateStr) =>
      new Date(dateStr).toLocaleString("default", { month: "short", year: "numeric" });
    return `${format(start)} - ${end ? format(end) : "Present"}`;
  };

  // 👇 Render loading indicator
  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
      <div className="h-8 w-8 animate-spin rounded-full border-4 border-t-transparent border-primary" />
    </div>
    );
  }
  
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-hero-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">About Me</h1>
            <p className="text-xl md:text-2xl text-80">
              Passioniate problem solver and software engineer with a knack for turning complex challenges into elegant solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            
            {/* Bio Column */}
            <div className="lg:col-span-2 space-y-8">
              <div className="animate-fade-in">
                <h2 className="text-3xl font-bold mb-6 bg-text-gradient bg-clip-text">Summary</h2>
                <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                  <p>{summary}</p>
                </div>
              </div>

              {/* Experience */}
              <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <h3 className="text-2xl font-bold mb-6 flex items-center">
                  <Briefcase className="mr-3 h-6 w-6 text-primary" />
                  Professional Experience
                </h3>
                <div className="space-y-6">
                    {experience.map((job) => (
                      <Card key={job.id} className="border-l-4 border-l-primary">
                        <CardHeader>
                          <CardTitle className="text-xl">{job.job_title}</CardTitle>
                          <CardDescription className="flex items-center gap-2">
                            <span className="font-medium text-primary">{job.company_name}</span>
                            <Badge variant="secondary">
                              {formatPeriod(job.start_date, job.end_date)}
                            </Badge>
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <p className="text-muted-foreground">{job.responsibilities}</p>
                        </CardContent>
                      </Card>
                    ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              
              {/* Quick Facts */}
          <Card className="animate-slide-in">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Sparkles className="mr-2 h-5 w-5 text-primary" />
                Interests
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {interests.map((interest, index) => (
                  <li key={index} className="flex items-center text-muted-foreground">
                    <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                    {interest.name}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

              {/* Skills */}
              <Card className="animate-slide-in" style={{ animationDelay: '0.2s' }}>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Award className="mr-2 h-5 w-5 text-primary" />
                    Core Skills
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {skills.map((skill, index) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Education */}
              <Card className="animate-slide-in" style={{ animationDelay: '0.4s' }}>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <GraduationCap className="mr-2 h-5 w-5 text-primary" />
                    Education
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {educations.map((edu) => (
                    <div key={edu.id}>
                      <p className="font-medium">{edu.degree}</p>
                      <p className="text-sm text-muted-foreground">
                        {edu.institute}, {edu.city} ({edu.start_date.slice(0, 4)} - {edu.end_date.slice(0, 4)})
                      </p>
                      <p className="text-sm text-muted-foreground">Result: {edu.result}</p>
                    </div>
                  ))}
                </CardContent>

              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;