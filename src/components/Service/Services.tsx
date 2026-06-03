import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Sparkles, Music, Star, Camera, PartyPopper, Wand2, Palette, Mic2 } from "lucide-react";

const servicesList = [
  {
    title: "Ring Decoration",
    desc: "Elegant and modern ring setups perfect for engagements and photo opportunities.",
    image: "../../assets/Services/ring.jpg",
    category: "Decoration"
  },
  {
    title: "DJ Sound & Artist",
    desc: "Professional sound systems and talented artists to keep your party alive all night.",
    image: "../../assets/Services/dj.jpeg",
    category: "Entertainment"
  },
  {
    title: "Cinematic Lighting",
    desc: "Custom LED and ambient lighting to set the perfect mood for your celebration.",
    image: "../../assets/Services/lighting.jpeg",
    category: "Atmosphere"
  },
  {
    title: "Grand Entry Gate",
    desc: "Beautifully designed welcome boards and entry gates that make a lasting first impression.",
    image: "../../assets/Services/entry3.jpg",
    category: "Decoration"
  },
  {
    title: "Special Entries",
    desc: "Make a statement with Smoke, Pyro, or Car entries for that magical touch.",
    image: "../../assets/Services/smoke.png",
    category: "Experience"
  },
  {
    title: "Selfie Booth",
    desc: "Creative and fun backdrops for your guests to capture their favorite moments.",
    image: "../../assets/Services/selfie.jpeg",
    category: "Interactive"
  },
  {
    title:"Flowers Rangoli",
    desc:"Special decorations and activities for your flowers rangoli to make it a unique and memorable event.",
    image: "../../assets/Services/flowers_rangoli.jpeg",
    category: "Decoration"
  },
  {
    title: "Baby Shower cradle",
    desc: "Special decorations and activities for your baby shower to make it a unique and memorable event.",
    image: "../../assets/Services/cradle2.jpeg",
    category: "Decoration"
  },
  {
    title:"Name Ceremony cradle",
    desc:"Special decorations and activities for your name ceremony to make it a unique and memorable event.",
    image: "../../assets/Services/cradle1.jpeg",
    category: "Decoration"
  },
  {
    title:"Carpet Layout",
    desc:"Special decorations and activities for your karpet layout to make it a unique and memorable event.",
    image: "../../assets/Services/carpet.jpeg", 
    category: "Decoration"
  },
  {
    title:"Haldi Decoration",
    desc:"Special decorations and activities for your haldi to make it a unique and memorable event.",
    image: "../../assets/Services/haldi.jpeg",
    category: "Decoration"
  },
  {
    title:"Caricature",
    desc:"Special decorations and activities for your caricature to make it a unique and memorable event.",
    image: "../../assets/Services/caricature1.jpeg",
    category: "Decoration"
  }
];

function Services() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-violet-100 selection:text-violet-900">

      
      {/* Services Grid */}
      <section className="py-24 relative z-10 -mt-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {servicesList.map((service, index) => (
              <div 
                key={index}
                className="group relative bg-white rounded-[2.5rem] overflow-hidden shadow-2xl shadow-violet-100 border border-violet-50 transition-all duration-700 hover:-translate-y-3 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Image Section */}
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-violet-950/60 to-transparent opacity-60" />
                  <div className="absolute top-6 left-6 px-4 py-1.5 bg-white/90 backdrop-blur-md rounded-full text-[10px] font-bold uppercase tracking-widest text-violet-900 shadow-lg">
                    {service.category}
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-8">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-2 h-2 rounded-full bg-violet-500 animate-pulse" />
                    <h3 className="text-2xl font-serif text-gray-900">{service.title}</h3>
                  </div>
                  <p className="text-gray-500 leading-relaxed font-light mb-6">
                    {service.desc}
                  </p>
                  <div className="flex items-center justify-between pt-6 border-t border-violet-50">
                    <span className="text-xs font-bold text-violet-600 uppercase tracking-widest">Premium Service</span>
                    <div className="flex gap-1">
                      <Star className="w-3 h-3 text-violet-400 fill-violet-400" />
                      <Star className="w-3 h-3 text-violet-400 fill-violet-400" />
                      <Star className="w-3 h-3 text-violet-400 fill-violet-400" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional List for Quick Reference */}
          <div className="mt-32 p-12 rounded-[3rem] bg-violet-50 border border-violet-100 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-5">
              <PartyPopper className="w-64 h-64 rotate-12" />
            </div>
            <div className="relative z-10">
              <h2 className="text-3xl font-serif text-gray-900 mb-12 text-center">More <em className="italic text-violet-600">Exclusive</em> Services</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-12">
                {[
                  "Banner Design", "Welcome Board", "Performance", "Bubble Show",
                  "Juggler Show", "Jumping Castle", "Game Host", "Tattoo Artist"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 group/item">
                    <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-violet-600 shadow-sm group-hover/item:bg-violet-600 group-hover/item:text-white transition-all duration-300">
                      <Sparkles className="w-4 h-4" />
                    </div>
                    <span className="text-gray-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;