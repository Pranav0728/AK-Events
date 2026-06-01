import { Sparkles, Heart, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { Phone } from "lucide-react";

const GalleryPics = () => {
  // Define gallery images for AK Events with updated content
  const images = [
    {
      url: "/Gallery/img1.jpg",
      alt: "Luxury Floral Wedding Arch",
      category: "Birthday",
    },
    {
      url: "/Gallery/img2.jpg",
      alt: "Grand Entrance Lighting",
      category: "Birthday",
    },
    {
      url: "/Gallery/img3.jpg",
      alt: "Theme Based Birthday Setup",
      category: "Birthday",
    },
    {
      url: "/Gallery/img4.jpg",
      alt: "Traditional Haldi Ceremony",
      category: "Birthday",
    },
    {
      url: "/Gallery/img5.jpg",
      alt: "Elegant Table Setting",
      category: "Birthday",
    },
    {
      url: "/Gallery/img6.jpg",
      alt: "Custom Stage Backdrop",
      category: "Birthday",
    },
    {
      url: "/Gallery/img7.jpg",
      alt: "Wedding Decor",
      category: "Birthday",
    },
    {
      url: "/Gallery/img8.jpg",
      alt: "Wedding Decor",
      category: "Birthday",
    },
    {
      url: "/Gallery/img9.jpg",
      alt: "Wedding Decor",
      category: "Birthday",
    },
    {
      url: "/Gallery/img10.jpg",
      alt: "Wedding Decor",
      category: "Birthday",
    },
    {
      url: "/Gallery/img11.jpg",
      alt: "Wedding Decor",
      category: "Birthday",
    },
    {
      url: "/Gallery/img12.jpg",
      alt: "Wedding Decor",
      category: "Birthday",
    },
    {
      url: "/Gallery/img13.jpg",
      alt: "Wedding Decor",
      category: "Birthday",
    },
    {
      url: "/Gallery/img14.jpg",
      alt: "Wedding Decor",
      category: "Birthday",
    },
    {
      url: "/Gallery/img15.jpg",
      alt: "Wedding Decor",
      category: "Birthday",
    },
    {
      url: "/Gallery/img16.jpg",
      alt: "Wedding Decor",
      category: "Birthday",
    },
    {
      url: "/Gallery/img17.jpg",
      alt: "Wedding Decor",
      category: "Birthday",
    },
    {
      url: "/Gallery/img18.jpg",
      alt: "Wedding Decor",
      category: "Birthday",
    },
    
    {
      url: "/Gallery/img20.jpg",
      alt: "Wedding Decor",
      category: "Birthday",
    },
    {
      url: "/Gallery/img21.jpg",
      alt: "Wedding Decor",
      category: "Birthday",
    },
    {
      url: "/Gallery/img22.jpg",
      alt: "Wedding Decor",
      category: "Birthday",
    },
    {
      url: "/Gallery/img23.jpg",
      alt: "Wedding Decor",
      category: "Birthday",
    },
    {
      url: "/Gallery/img24.jpg",
      alt: "Wedding Decor",
      category: "Birthday",
    },
    {
      url: "/Gallery/img25.jpg",
      alt: "Wedding Decor",
      category: "Birthday",
    },

  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-violet-50 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-violet-50 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-50 border border-violet-100 mb-6">
            <Sparkles className="w-4 h-4 text-violet-500" />
            <span className="text-xs font-bold text-violet-600 uppercase tracking-widest">
              Portfolio
            </span>
          </div>

          <h2 className="text-4xl md:text-6xl font-serif text-gray-900 leading-tight">
            Magical <em className="italic text-violet-600">Celebrations</em>
          </h2>
          <div className="w-24 h-1 bg-violet-600/20 mx-auto mt-8 rounded-full" />

          <p className="mt-8 text-xl text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
            Every picture tells a story of passion, creativity, and
            unforgettable moments we've crafted for our clients.
          </p>
        </div>

        {/* Gallery Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative rounded-[2.5rem] overflow-hidden shadow-2xl shadow-violet-100 transition-all duration-700 hover:-translate-y-2 animate-fade-in-up border-8 border-white ring-1 ring-violet-50"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out"
                />
              </div>

              {/* Premium Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-violet-950/90 via-violet-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                {/* <div className="absolute inset-x-0 bottom-0 p-10 transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-8 h-px bg-violet-400" />
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-violet-300">
                      {image.category}
                    </span>
                  </div>
                  <h3 className="text-2xl font-serif text-white mb-2">
                    {image.alt}
                  </h3>
                  <div className="flex gap-1 text-violet-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-current" />
                    ))}
                  </div>
                </div> */}
              </div>

              {/* Corner Accent */}
              <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30">
                  <Heart className="w-4 h-4 text-white" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center animate-fade-in">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href="tel:+919594315750"
              className="inline-flex items-center gap-3 px-10 py-4 rounded-full border-2 border-violet-600 text-violet-600 font-bold hover:bg-violet-50 transition-all hover:scale-105"
            >
              <Phone className="w-5 h-5" />
              Call Now - 9594315750
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GalleryPics;
