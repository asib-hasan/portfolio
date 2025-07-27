import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Award, Briefcase, GraduationCap, MapPin } from "lucide-react";

const About = () => {
  const skills = [
    { name: "Research & Analysis", level: 95 },
    { name: "Data Science", level: 90 },
    { name: "Strategic Planning", level: 88 },
    { name: "Project Management", level: 92 },
    { name: "Technical Writing", level: 89 },
    { name: "Public Speaking", level: 85 }
  ];

  const experience = [
    {
      title: "Senior Research Scientist",
      company: "TechCorp Research Labs",
      period: "2020 - Present",
      description: "Leading cutting-edge research in AI and machine learning applications."
    },
    {
      title: "Research Fellow",
      company: "University Innovation Center",
      period: "2018 - 2020",
      description: "Conducted interdisciplinary research and published 15+ peer-reviewed papers."
    },
    {
      title: "Data Analyst",
      company: "Analytics Solutions Inc.",
      period: "2016 - 2018",
      description: "Developed predictive models and business intelligence solutions."
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-hero-gradient text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">About Me</h1>
            <p className="text-xl md:text-2xl text-white/80">
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
                <h2 className="text-3xl font-bold mb-6 bg-text-gradient bg-clip-text text-transparent">My Story</h2>
                <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                  <p>
                    With over 8 years of experience in research and innovation, I've dedicated my career 
                    to pushing the boundaries of what's possible in technology and science. My journey 
                    began with a fascination for data patterns and has evolved into a comprehensive 
                    approach to solving complex, real-world problems.
                  </p>
                  <p>
                    I specialize in bridging the gap between theoretical research and practical 
                    applications, ensuring that innovative ideas translate into meaningful impact. 
                    My work spans multiple disciplines, from artificial intelligence and machine 
                    learning to strategic business consulting and creative problem-solving.
                  </p>
                  <p>
                    When I'm not immersed in research, you'll find me exploring new technologies, 
                    mentoring young researchers, or capturing the world through my camera lens. 
                    I believe in the power of interdisciplinary collaboration and continuous learning.
                  </p>
                </div>
              </div>

              {/* Experience */}
              <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <h3 className="text-2xl font-bold mb-6 flex items-center">
                  <Briefcase className="mr-3 h-6 w-6 text-primary" />
                  Professional Experience
                </h3>
                <div className="space-y-6">
                  {experience.map((job, index) => (
                    <Card key={index} className="border-l-4 border-l-primary">
                      <CardHeader>
                        <CardTitle className="text-xl">{job.title}</CardTitle>
                        <CardDescription className="flex items-center gap-2">
                          <span className="font-medium text-primary">{job.company}</span>
                          <Badge variant="secondary">{job.period}</Badge>
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">{job.description}</p>
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
                    <MapPin className="mr-2 h-5 w-5 text-primary" />
                    Quick Facts
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-muted-foreground">San Francisco, CA</p>
                  </div>
                  <div>
                    <p className="font-medium">Education</p>
                    <p className="text-muted-foreground">PhD in Computer Science</p>
                  </div>
                  <div>
                    <p className="font-medium">Languages</p>
                    <p className="text-muted-foreground">English, Spanish, French</p>
                  </div>
                  <div>
                    <p className="font-medium">Interests</p>
                    <p className="text-muted-foreground">AI Ethics, Photography, Hiking</p>
                  </div>
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
                  <div>
                    <p className="font-medium">PhD Computer Science</p>
                    <p className="text-sm text-muted-foreground">Stanford University, 2016</p>
                  </div>
                  <div>
                    <p className="font-medium">MS Data Science</p>
                    <p className="text-sm text-muted-foreground">MIT, 2014</p>
                  </div>
                  <div>
                    <p className="font-medium">BS Computer Engineering</p>
                    <p className="text-sm text-muted-foreground">UC Berkeley, 2012</p>
                  </div>
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