import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Camera, Eye, Download } from "lucide-react";

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Landscapes", "Technology", "Architecture", "Street", "Abstract"];

  const photos = [
    {
      id: 1,
      title: "Mountain Sunrise",
      category: "Landscapes",
      image: "/api/placeholder/600/400",
      description: "Captured during a research expedition in the Swiss Alps",
      date: "2023-08-15",
      camera: "Canon EOS R5",
      settings: "f/8, 1/125s, ISO 100"
    },
    {
      id: 2,
      title: "Neural Network Visualization",
      category: "Technology",
      image: "/api/placeholder/600/400",
      description: "3D visualization of deep learning model architecture",
      date: "2023-09-20",
      camera: "Digital Art",
      settings: "Blender 3D Rendering"
    },
    {
      id: 3,
      title: "Modern Architecture",
      category: "Architecture",
      image: "/api/placeholder/600/400",
      description: "Geometric patterns in contemporary building design",
      date: "2023-10-05",
      camera: "Sony A7R IV",
      settings: "f/11, 1/60s, ISO 200"
    },
    {
      id: 4,
      title: "Urban Flow",
      category: "Street",
      image: "/api/placeholder/600/400",
      description: "Long exposure of city traffic patterns",
      date: "2023-07-12",
      camera: "Nikon D850",
      settings: "f/16, 30s, ISO 64"
    },
    {
      id: 5,
      title: "Data Streams",
      category: "Abstract",
      image: "/api/placeholder/600/400",
      description: "Abstract representation of information flow",
      date: "2023-11-08",
      camera: "Digital Art",
      settings: "Procedural Generation"
    },
    {
      id: 6,
      title: "Research Lab",
      category: "Technology",
      image: "/api/placeholder/600/400",
      description: "Behind the scenes at the quantum computing lab",
      date: "2023-06-22",
      camera: "Fujifilm X-T4",
      settings: "f/4, 1/30s, ISO 800"
    },
    {
      id: 7,
      title: "Ocean Waves",
      category: "Landscapes",
      image: "/api/placeholder/600/400",
      description: "Coastal photography during storm season",
      date: "2023-12-03",
      camera: "Canon EOS R6",
      settings: "f/5.6, 1/250s, ISO 400"
    },
    {
      id: 8,
      title: "Glass Reflection",
      category: "Architecture",
      image: "/api/placeholder/600/400",
      description: "Reflections in modern office building facade",
      date: "2023-09-14",
      camera: "Leica Q2",
      settings: "f/8, 1/125s, ISO 100"
    },
    {
      id: 9,
      title: "Color Theory",
      category: "Abstract",
      image: "/api/placeholder/600/400",
      description: "Exploration of color relationships and harmony",
      date: "2023-10-28",
      camera: "Digital Art",
      settings: "Adobe Creative Suite"
    }
  ];

  const filteredPhotos = selectedCategory === "All" 
    ? photos 
    : photos.filter(photo => photo.category === selectedCategory);

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-hero-gradient text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Photo Gallery</h1>
            <p className="text-xl md:text-2xl text-white/80">
              Capturing the beauty of technology, nature, and human innovation 
              through the lens of creativity and scientific curiosity.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-background border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="animate-fade-in">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <Camera className="h-8 w-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground">Photos Captured</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <Eye className="h-8 w-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-primary mb-2">50K+</div>
              <div className="text-muted-foreground">Views</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <Download className="h-8 w-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-primary mb-2">12</div>
              <div className="text-muted-foreground">Exhibitions</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <Camera className="h-8 w-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-primary mb-2">8</div>
              <div className="text-muted-foreground">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 bg-text-gradient bg-clip-text text-transparent">
              Photography Portfolio
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              A curated collection showcasing the intersection of art, science, and technology.
            </p>
            
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className="text-sm"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {/* Photo Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPhotos.map((photo, index) => (
              <Card 
                key={photo.id} 
                className="group overflow-hidden hover:shadow-strong transition-all duration-500 animate-fade-in border-0 bg-card-gradient" 
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={photo.image} 
                    alt={photo.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button variant="secondary" size="sm" className="backdrop-blur-sm">
                      <Eye className="mr-2 h-4 w-4" />
                      View Details
                    </Button>
                  </div>
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="backdrop-blur-sm">
                      {photo.category}
                    </Badge>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {photo.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {photo.description}
                  </p>
                  
                  <div className="space-y-2 text-xs text-muted-foreground">
                    <div className="flex justify-between">
                      <span>Camera:</span>
                      <span className="font-medium">{photo.camera}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Settings:</span>
                      <span className="font-medium">{photo.settings}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Date:</span>
                      <span className="font-medium">{new Date(photo.date).toLocaleDateString()}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Interested in Photography Collaboration?
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/80 max-w-2xl mx-auto">
            Whether it's documenting research projects, creating visual content, or artistic collaboration, 
            I'd love to explore creative possibilities together.
          </p>
          <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
            <a href="mailto:contact@example.com">
              <Camera className="mr-2 h-5 w-5" />
              Let's Collaborate
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Gallery;