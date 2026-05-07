import { useEffect, useState } from "react";
import { api, assetUrl } from "@/lib/api";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Eye, ArrowLeft, Image, X } from "lucide-react";
import Footer from "@/components/Footer";

const Gallery = () => {
  const [folders, setFolders] = useState<any[]>([]);
  const [activeFolder, setActiveFolder] = useState<any | null>(null);
  const [selectedPhoto, setSelectedPhoto] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);

  // Fetch data from API
  useEffect(() => {
    api
      .get("/photo-with-folder") 
      .then((res) => {
        if (res.data?.status === "success") {
          setFolders(res.data.data);
        }
      })
      .catch((err) => {
        console.error("API Error:", err);
      })
      .finally(() => setLoading(false));
  }, []);

  // Render folders (each with one preview image)
  const renderFolderView = () => (
    <div className="container mx-auto px-4 max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {folders.map((folder, index) => {
        const previewPhoto = folder.photos?.[0];
        const previewUrl = previewPhoto
          ? assetUrl(previewPhoto.photo)
          : "https://via.placeholder.com/400x300";

        return (
          <Card
            key={folder.id}
            className="cursor-pointer card-premium border border-border/60 bg-card shadow-sm rounded-xl overflow-hidden group animate-fade-in relative"
            onClick={() => setActiveFolder(folder)}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.02] to-violet-500/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>
            <div className="relative h-56 overflow-hidden">
              <img
                src={previewUrl}
                alt={folder.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent group-hover:from-black/60 transition-all duration-300 flex flex-col justify-end p-5">
                <div className="transform group-hover:-translate-y-1 transition-transform duration-300">
                  <h3 className="text-white text-base font-bold tracking-tight drop-shadow-md">
                    {folder.name}
                  </h3>
                  <p className="text-white/70 text-xs font-medium mt-1">
                    {folder.photos?.length || 0} {folder.photos?.length === 1 ? 'item' : 'items'}
                  </p>
                </div>
              </div>
            </div>
          </Card>
        );
      })}
    </div>
  );

  const renderPhotoView = () => (
    <div className="container mx-auto px-4 max-w-6xl animate-fade-in">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-foreground">{activeFolder.name}</h2>
          <p className="text-sm text-muted-foreground mt-1">Viewing all photos in this collection.</p>
        </div>
        <Button
          onClick={() => setActiveFolder(null)}
          variant="outline"
          size="sm"
          className="self-start md:self-auto bg-background rounded-xl"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Folders
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {activeFolder.photos.map((photo: any, index: number) => (
          <Card
            key={photo.id}
            className="group card-premium border border-border/60 bg-card shadow-sm rounded-xl overflow-hidden animate-fade-in"
            style={{ animationDelay: `${index * 0.08}s` }}
          >
            <div className="relative h-64 overflow-hidden">
              <img
                src={assetUrl(photo.photo)}
                alt={photo.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-5">
                <Button
                  variant="secondary"
                  size="sm"
                  className="font-semibold bg-white/90 hover:bg-white text-foreground rounded-xl shadow-lg"
                  onClick={() => setSelectedPhoto(photo)}
                >
                  <Eye className="mr-2 h-4 w-4" />
                  View Full
                </Button>
              </div>
            </div>
            <CardContent className="p-4 border-t border-border/50">
              <h3 className="text-sm font-semibold tracking-tight text-foreground truncate">{photo.title}</h3>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      {/* Page Header */}
      <section className="pt-8 pb-12 relative">
        <div className="absolute top-10 -right-40 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 -left-32 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="border-b border-border/50 pb-8">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-xs font-bold mb-5 uppercase tracking-wider border border-primary/20 animate-fade-in">
              <Image className="w-3.5 h-3.5" />
              Gallery
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-foreground animate-slide-up stagger-1">
              Gallery
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl animate-slide-up stagger-2">
              Explore a visual journey through my work, moments, and creative highlights.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-24">
        {loading ? (
          <div className="flex justify-center items-center py-12">
            <div className="h-8 w-8 animate-spin rounded-full border-4 border-t-transparent border-primary" />
          </div>
        ) : activeFolder ? (
          renderPhotoView()
        ) : (
          renderFolderView()
        )}
      </section>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50 p-4 animate-scale-in" onClick={() => setSelectedPhoto(null)}>
          <div className="bg-card border border-border/60 rounded-2xl shadow-2xl max-w-4xl w-full overflow-hidden flex flex-col max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between p-4 border-b border-border/50 bg-muted/30">
              <h2 className="text-base font-semibold tracking-tight truncate pr-4 text-foreground">
                {selectedPhoto.title}
              </h2>
              <Button variant="ghost" size="icon" className="h-8 w-8 shrink-0 rounded-full hover:bg-destructive/10 hover:text-destructive" onClick={() => setSelectedPhoto(null)}>
                <X className="h-4 w-4" />
              </Button>
            </div>
            <div className="relative flex-1 overflow-auto bg-muted/10 p-4 flex items-center justify-center min-h-[300px]">
              <img
                src={assetUrl(selectedPhoto.photo)}
                alt={selectedPhoto.title}
                className="max-w-full max-h-full object-contain rounded-lg shadow-sm"
              />
            </div>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Gallery;
