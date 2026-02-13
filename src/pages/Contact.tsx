import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Send, MessageSquare, Linkedin, Github } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { api } from "@/lib/api";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await api.post("/contact", {
        name: formData.name.trim(),
        email: formData.email.trim() || null,
        phone: formData.phone.trim(),
        subject: formData.subject.trim() || null,
        message: formData.message.trim(),
      });
      toast({
        title: "Message Sent",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    } catch (error) {
      toast({
        title: "Failed to send",
        description: "Please try again in a moment.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "asib.uucse@gmail.com",
      description: "Feel free to reach out for any inquiries",
      link: "mailto:asib.uucse@gmail.com"
    },
    {
      icon: Phone,
      title: "WhatsApp",
      value: "01628044781",
      description: "Reach me on WhatsApp anytime",
      link: "https://wa.me/8801628044781"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Mirpur, Dhaka, Bangladesh",
      link: "#"
    },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/asib-hasan/",
      color: "text-blue-600"
    },
    {
      icon: Github,
      name: "GitHub",
      url: "https://github.com/asib-hasan",
      color: "text-gray-700"
    },
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-hero-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Get In Touch</h1>
            <p className="text-xl md:text-2xl text-80">
              Let's discuss your project,or explore
              new opportunities together. I'm always excited to connect with fellow innovators.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">

            {/* Contact Form */}
            <div className="animate-fade-in">
              <Card className="border-0 shadow-strong bg-card-gradient">
                <CardHeader>
                  <CardTitle className="text-3xl flex items-center">
                    <MessageSquare className="mr-3 h-8 w-8 text-primary" />
                    Send a Message
                  </CardTitle>
                  <CardDescription className="text-base">
                    I'd love to hear about your project or answer any questions you might have.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Full Name</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Your name"
                          required
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email Address</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="your.email@example.com"
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="Your phone number"
                          required
                          className="mt-1"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="What's this about?"
                        required
                        className="mt-1"
                      />
                    </div>

                    <div>
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell me more about your project or inquiry..."
                        rows={6}
                        required
                        className="mt-1"
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full group" disabled={isSubmitting}>
                      <Send className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="animate-slide-in">
                <h2 className="text-3xl font-bold mb-6 bg-text-gradient bg-clip-text">
                  Let's Connect
                </h2>
              </div>

              {/* Contact Cards */}
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <Card key={info.title} className="group hover:shadow-medium transition-all duration-300 animate-slide-in" style={{ animationDelay: `${index * 0.1}s` }}>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                          <info.icon className="h-6 w-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-lg mb-1">{info.title}</h3>
                          <p className="text-primary font-medium mb-1">{info.value}</p>
                          <p className="text-sm text-muted-foreground">{info.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Social Links */}
              <div className="animate-slide-in" style={{ animationDelay: '0.4s' }}>
                <h3 className="text-xl font-semibold mb-4">Connect on Social Media</h3>
                <div className="flex gap-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full bg-secondary hover:bg-secondary/80 flex items-center justify-center transition-all duration-300 hover:scale-110"
                    >
                      <social.icon className={`h-6 w-6 ${social.color}`} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4 bg-text-gradient bg-clip-text text-transparent">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground text-center mb-12">
              Quick answers to common inquiries about collaboration and services.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="animate-fade-in">
                <CardHeader>
                  <CardTitle className="text-xl">What types of projects do you work on?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    I focus on AI/ML research, data science consulting, technology strategy, 
                    and interdisciplinary projects that combine technical innovation with real-world impact.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
                <CardHeader>
                  <CardTitle className="text-xl">Do you offer consulting services?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Yes, I provide strategic consulting for organizations looking to implement 
                    AI/ML solutions, optimize data workflows, or develop research strategies.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <CardHeader>
                  <CardTitle className="text-xl">What's your typical project timeline?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Project timelines vary based on scope and complexity. Consulting projects 
                    typically range from 2-12 weeks, while research collaborations can span several months.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
                <CardHeader>
                  <CardTitle className="text-xl">Do you collaborate with students?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Absolutely! I'm passionate about mentoring and often collaborate with graduate 
                    students and early-career researchers on meaningful projects.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default Contact;
