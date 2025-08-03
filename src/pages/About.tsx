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


  useEffect(() => {
    axios.get("http://resume.asib-hasan.com/api/skills")
      .then(response => {
        if (response.data.status === "success") {
          const skillData = response.data.data.map(skill => ({
            name: skill.title,
            level: skill.level * 10,
          }));
          setSkills(skillData);
        }
      })
      .catch(error => {
        console.error("Failed to fetch skills:", error);
      });
  }, []);


  useEffect(() => {
    axios.get("http://resume.asib-hasan.com/api/educations")
      .then(response => {
        if (response.data.status === "success") {
          setEducations(response.data.data); // no sorting
        }
      })
      .catch(error => {
        console.error("Failed to fetch education data:", error);
      });
  }, []);

  const [experience, setExperience] = useState([]);

  useEffect(() => {
    axios.get("http://resume.asib-hasan.com/api/experiences")
      .then(response => {
        if (response.data.status === "success") {
          setExperience(response.data.data);
        }
      })
      .catch(error => {
        console.error("Error fetching experience data:", error);
      });
  }, []);

  const formatPeriod = (start, end) => {
    const format = (dateStr) =>
      new Date(dateStr).toLocaleString("default", { month: "short", year: "numeric" });
    return `${format(start)} - ${end ? format(end) : "Present"}`;
  };

  const [summary, setSummary] = useState("");

  useEffect(() => {
    axios.get("https://resume.asib-hasan.com/api/personal")
      .then(response => {
        if (response.data.status === "success") {
          setSummary(response.data.data.summary);
        }
      })
      .catch(error => {
        console.error("Error fetching personal summary:", error);
      });
  }, []);

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-hero-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">About Me</h1>
            <p className="text-xl md:text-2xl text-80">
              Passionate researcher and innovator dedicated to solving complex challenges 
              through data-driven insights and creative problem-solving.
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
                <h2 className="text-3xl font-bold mb-6 bg-text-gradient bg-clip-text">About Me</h2>
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
                {["Problem Solving", "Software Engineering", "Artificial Intelligence"].map((interest, index) => (
                  <li key={index} className="flex items-center text-muted-foreground">
                    <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                    {interest}
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