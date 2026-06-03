import { Sparkles, Heart, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { Phone } from "lucide-react";

import img1 from "../../assets/Gallery/img1.jpg";
import img2 from "../../assets/Gallery/img2.jpg";
import img3 from "../../assets/Gallery/img3.jpg";
import img4 from "../../assets/Gallery/img4.jpg";
import img5 from "../../assets/Gallery/img5.jpg";
import img6 from "../../assets/Gallery/img6.jpg";
import img7 from "../../assets/Gallery/img7.jpg";
import img8 from "../../assets/Gallery/img8.jpg";
import img9 from "../../assets/Gallery/img9.jpg";
import img10 from "../../assets/Gallery/img10.jpg";
import img11 from "../../assets/Gallery/img11.jpg";
import img12 from "../../assets/Gallery/img12.jpg";
import img13 from "../../assets/Gallery/img13.jpg";
import img14 from "../../assets/Gallery/img14.jpg";
import img15 from "../../assets/Gallery/img15.jpg";
import img16 from "../../assets/Gallery/img16.jpg";
import img17 from "../../assets/Gallery/img17.jpg"; 
import img18 from "../../assets/Gallery/img18.jpg";
import img19 from "../../assets/Gallery/img19.jpg";
import img20 from "../../assets/Gallery/img20.jpg";
import img21 from "../../assets/Gallery/img21.jpg";
import img22 from "../../assets/Gallery/img22.jpg";
import img23 from "../../assets/Gallery/img23.jpg";
import img24 from "../../assets/Gallery/img24.jpg";
import img25 from "../../assets/Gallery/img25.jpg";



const GalleryPics = () => {
  // Define gallery images for AK Events with updated content
  const images = [
    {
      url: img1,
      alt: "Luxury Floral Wedding Arch",
      category: "Birthday",
    },
    {
      url: img2,
      alt: "Grand Entrance Lighting",
      category: "Birthday",
    },
    {
      url: img3,
      alt: "Theme Based Birthday Setup",
      category: "Birthday",
    },
    {
      url: img4,
      alt: "Traditional Haldi Ceremony",
      category: "Birthday",
    },
    {
      url: img5,
      alt: "Elegant Table Setting",
      category: "Birthday",
    },
    {
      url: img6,
      alt: "Custom Stage Backdrop",
      category: "Birthday",
    },
    {
      url: img7,
      alt: "Wedding Decor",
      category: "Birthday",
    },
    {
      url: img8,
      alt: "Wedding Decor",
      category: "Birthday",
    },
    {
      url: img9,
      alt: "Wedding Decor",
      category: "Birthday",
    },
    {
      url: img10,
      alt: "Wedding Decor",
      category: "Birthday",
    },
    {
      url: img11,
      alt: "Wedding Decor",
      category: "Birthday",
    },
    {
      url: img12,
      alt: "Wedding Decor",
      category: "Birthday",
    },
    {
      url: img13,
      alt: "Wedding Decor",
      category: "Birthday",
    },
    {
      url: img14,
      alt: "Wedding Decor",
      category: "Birthday",
    },
    {
      url: img15,
      alt: "Wedding Decor",
      category: "Birthday",
    },
    {
      url: img16,
      alt: "Wedding Decor",
      category: "Birthday",
    },
    {
      url: img17,
      alt: "Wedding Decor", 
      category: "Birthday",
    },
    {
      url: img18,
      alt: "Wedding Decor",
      category: "Birthday",
    },
    
    {
      url: img20,
      alt: "Wedding Decor",
      category: "Birthday",
    },
    {
      url: img21,
      alt: "Wedding Decor",
      category: "Birthday",
    },
    {
      url: img22,
      alt: "Wedding Decor", 
      category: "Birthday",
    },
    {
      url: img23,
      alt: "Wedding Decor",
      category: "Birthday",
    },
    {
      url: img24,   
      alt: "Wedding Decor",
      category: "Birthday",
    },
    {
      url: img25,
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
