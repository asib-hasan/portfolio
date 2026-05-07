import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Send, MessageSquare, Linkedin, Github, ArrowUpRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { api } from "@/lib/api";
import Footer from "@/components/Footer";

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
      link: "mailto:asib.uucse@gmail.com",
      gradient: "from-red-500/10 to-orange-500/10",
      iconColor: "text-red-500",
      borderColor: "border-red-500/10",
    },
    {
      icon: Phone,
      title: "WhatsApp",
      value: "01628044781",
      description: "Reach me on WhatsApp anytime",
      link: "https://wa.me/8801628044781",
      gradient: "from-green-500/10 to-emerald-500/10",
      iconColor: "text-green-500",
      borderColor: "border-green-500/10",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Mirpur, Dhaka, Bangladesh",
      description: "Based in Dhaka, open to remote work",
      link: "#",
      gradient: "from-blue-500/10 to-cyan-500/10",
      iconColor: "text-blue-500",
      borderColor: "border-blue-500/10",
    },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/asib-hasan/",
      color: "hover:text-blue-600 hover:border-blue-500/30 hover:bg-blue-500/5"
    },
    {
      icon: Github,
      name: "GitHub",
      url: "https://github.com/asib-hasan",
      color: "hover:text-foreground hover:border-foreground/20 hover:bg-foreground/5"
    },
  ];

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      {/* Page Header */}
      <section className="pt-8 pb-16 relative">
        <div className="absolute top-20 -right-40 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 -left-40 w-96 h-96 bg-violet-500/5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="mb-12 border-b border-border/50 pb-8">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-xs font-bold mb-5 uppercase tracking-wider border border-primary/20 animate-fade-in">
              <MessageSquare className="w-3.5 h-3.5" />
              Contact
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-foreground animate-slide-up stagger-1">
              Get In Touch
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl animate-slide-up stagger-2">
              Let's discuss your project, or explore new opportunities together. Always excited to connect.
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-12">

            {/* Contact Form */}
            <div className="lg:col-span-3 animate-fade-in stagger-2">
              <Card className="card-premium border border-border/60 shadow-sm bg-card rounded-xl overflow-hidden relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.02] to-violet-500/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardHeader className="pb-4 pt-6 px-6 relative z-10">
                  <CardTitle className="text-xl flex items-center gap-3 font-bold tracking-tight">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500/10 to-violet-500/10 text-primary flex items-center justify-center border border-primary/10">
                      <MessageSquare className="h-5 w-5" />
                    </div>
                    Send a Message
                  </CardTitle>
                  <CardDescription className="text-sm mt-2">
                    I'd love to hear about your project or answer any questions you might have.
                  </CardDescription>
                </CardHeader>
                <CardContent className="px-6 pb-6 relative z-10">
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <Label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Full Name</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Your name"
                          required
                          className="bg-muted/30 border-border/60 focus-visible:ring-primary/20 rounded-xl"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <Label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Email Address</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="your.email@example.com"
                          className="bg-muted/30 border-border/60 focus-visible:ring-primary/20 rounded-xl"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <Label htmlFor="phone" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Phone</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="Your phone number"
                          required
                          className="bg-muted/30 border-border/60 focus-visible:ring-primary/20 rounded-xl"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <Label htmlFor="subject" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Subject</Label>
                        <Input
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          placeholder="What's this about?"
                          required
                          className="bg-muted/30 border-border/60 focus-visible:ring-primary/20 rounded-xl"
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <Label htmlFor="message" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell me more about your project or inquiry..."
                        rows={5}
                        required
                        className="bg-muted/30 border-border/60 focus-visible:ring-primary/20 resize-none rounded-xl"
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full mt-2 font-bold rounded-xl shadow-md hover:shadow-lg transition-shadow" disabled={isSubmitting}>
                      <Send className="mr-2 h-4 w-4" />
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Info Sidebar */}
            <div className="lg:col-span-2 space-y-6 lg:mt-0 mt-8">
              
              {/* Contact Cards */}
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <Card key={info.title} className="card-premium border border-border/60 bg-card shadow-sm rounded-xl animate-fade-in group relative overflow-hidden" style={{ animationDelay: `${0.3 + index * 0.1}s` }}>
                    <div className={`absolute inset-0 bg-gradient-to-br ${info.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                    <CardContent className="p-5 relative z-10">
                      <div className="flex items-start gap-4">
                        <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${info.gradient} flex items-center justify-center shrink-0 ${info.borderColor} border group-hover:scale-110 transition-transform duration-300`}>
                          <info.icon className={`h-5 w-5 ${info.iconColor}`} />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold text-sm tracking-tight text-foreground">{info.title}</h3>
                          <a href={info.link} target={info.link !== "#" ? "_blank" : undefined} rel="noopener noreferrer" className="text-primary font-medium text-sm hover:underline mt-0.5 block decoration-primary/30 underline-offset-2">
                            {info.value}
                          </a>
                          <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{info.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Social Links */}
              <Card className="card-premium border border-border/60 bg-card shadow-sm rounded-xl animate-fade-in stagger-5 relative group overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-violet-500/[0.02] to-blue-500/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardContent className="p-5 relative z-10">
                  <h3 className="font-bold text-sm tracking-tight mb-4">Connect on Social Media</h3>
                  <div className="flex gap-3">
                    {socialLinks.map((social) => (
                      <a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-10 h-10 rounded-xl border border-border/60 flex items-center justify-center transition-all duration-300 text-muted-foreground hover:-translate-y-0.5 ${social.color}`}
                        title={social.name}
                      >
                        <social.icon className="h-5 w-5" />
                      </a>
                    ))}
                  </div>
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

export default Contact;
