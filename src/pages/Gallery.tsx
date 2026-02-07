import { useEffect, useState } from "react";
import { api, assetUrl } from "@/lib/api";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Eye, ArrowLeft } from "lucide-react";
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
    <div className="mx-auto px-4 py-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {folders.map((folder) => {
        const previewPhoto = folder.photos?.[0];
        const previewUrl = previewPhoto
          ? assetUrl(previewPhoto.photo)
          : "https://via.placeholder.com/400x300";

        return (
          <Card
            key={folder.id}
            className="cursor-pointer hover:shadow-lg transition"
            onClick={() => setActiveFolder(folder)}
          >
            <div className="relative h-48 overflow-hidden">
              <img
                src={previewUrl}
                alt={folder.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <h3 className="text-white text-xl font-semibold">
                  {folder.name}
                </h3>
              </div>
            </div>
          </Card>
        );
      })}
    </div>
  );

  const renderPhotoView = () => (
    <>
      <div className="text-center mb-6 mx-auto">
        <Button
          onClick={() => setActiveFolder(null)}
          className="mb-4"
          variant="outline"
          size="sm"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Folders
        </Button>
        <h2 className="text-3xl font-bold">{activeFolder.name}</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto px-4 py-4">
        {activeFolder.photos.map((photo: any) => (
          <Card
            key={photo.id}
            className="group overflow-hidden hover:shadow-lg transition border-0"
          >
            <div className="relative">
              <img
                src={assetUrl(photo.photo)}
                alt={photo.title}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Button
                  variant="secondary"
                  size="sm"
                  className="backdrop-blur-sm"
                  onClick={() => setSelectedPhoto(photo)}
                >
                  <Eye className="mr-2 h-4 w-4" />
                  View
                </Button>
              </div>
              <div className="absolute top-4 left-4">
                <Badge variant="secondary" className="backdrop-blur-sm">
                  {activeFolder.name}
                </Badge>
              </div>
            </div>
            <CardContent className="p-4">
              <h3 className="text-lg font-semibold">{photo.title}</h3>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );

  return (
    <div className="min-h-screen pt-16">
    <section className="py-20 bg-hero-gradient">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">Photo Gallery</h1>
              <p className="text-xl md:text-2xl text-80">
                Explore a visual journey through my work, moments, and creative highlights.
              </p>
            </div>
          </div>
        </section>

      {loading ? (
          <div className="flex justify-center items-center py-8">
            <div className="h-8 w-8 animate-spin rounded-full border-4 border-t-transparent border-primary" />
          </div>
      ) : activeFolder ? (
        renderPhotoView()
      ) : (
        renderFolderView()
      )}

      {selectedPhoto && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-lg max-w-2xl w-full overflow-hidden relative">
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-3 right-3 text-gray-600 hover:text-black text-xl"
            >
              x
            </button>

            <img
              src={assetUrl(selectedPhoto.photo)}
              alt={selectedPhoto.title}
              className="w-full max-h-[500px] object-contain"
            />

            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">
                {selectedPhoto.title}
              </h2>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Gallery;
