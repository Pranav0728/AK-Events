import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Star, Quote, Sparkles, Heart } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Bride",
    content: "AK Events turned my wedding into a literal fairytale. The ring decoration was breathtaking and every guest was talking about the pyro entry! Truly magical experience.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    event: "Wedding Celebration"
  },
  {
    name: "Rahul Verma",
    role: "Parent",
    content: "The birthday party for my son was incredible. The bubble show and magic show kept the kids engaged for hours. The unique backdrop was the highlight of our photos!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    event: "1st Birthday Party"
  },
  {
    name: "Sneha Patil",
    role: "Corporate Lead",
    content: "Professional, creative, and extremely organized. They handled our corporate gala with such elegance. The lighting and sound quality were top-notch.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
    event: "Annual Corporate Gala"
  },
  {
    name: "Aniket Deshmukh",
    role: "Groom",
    content: "From the car entry to the final reception, AK Events executed everything perfectly. Their attention to detail in the flower arrangements was remarkable.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
    event: "Grand Wedding"
  },
  {
    name: "Meera Joshi",
    role: "Host",
    content: "I've worked with many decorators, but AK Events is on another level. Their jumping castle and tattoo artists were a hit at our community event!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop",
    event: "Community Celebration"
  },
  {
    name: "Vikram Singh",
    role: "Client",
    content: "The best event management in Navi Mumbai. They handled my sister's engagement with so much love and care. The ring decor was just wow!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
    event: "Engagement Ceremony"
  }
];

function Testimonials() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-violet-100 selection:text-violet-900">
     

      {/* Testimonials Grid */}
      <section className="py-24 relative z-10 -mt-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((item, index) => (
              <div 
                key={index}
                className="group relative bg-white p-10 rounded-[2.5rem] shadow-2xl shadow-violet-100 border border-violet-50 transition-all duration-700 hover:-translate-y-3 animate-fade-in-up flex flex-col"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Decorative Quote Icon */}
                <div className="absolute top-8 right-10 text-violet-100 group-hover:text-violet-200 transition-colors duration-500">
                  <Quote className="w-16 h-16 fill-current" />
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-8 relative z-10">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-violet-500 fill-violet-500" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-gray-600 text-lg leading-relaxed font-light mb-10 italic relative z-10">
                  "{item.content}"
                </p>

                {/* Author Info */}
                <div className="mt-auto flex items-center gap-4 pt-8 border-t border-violet-50 relative z-10">
                  <div className="relative">
                    <div className="absolute -inset-1 bg-gradient-to-tr from-violet-600 to-violet-400 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-14 h-14 rounded-full object-cover relative z-10 border-2 border-white"
                    />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 group-hover:text-violet-600 transition-colors">{item.name}</h4>
                    <p className="text-xs font-bold uppercase tracking-widest text-violet-400">
                      {item.role} • {item.event}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Stats Bar */}
          <div className="mt-32 grid grid-cols-2 md:grid-cols-4 gap-8 py-16 border-y border-violet-100 animate-fade-in">
            {[
              { label: "Happy Clients", value: "500+" },
              { label: "Events Done", value: "1200+" },
              { label: "Average Rating", value: "4.9/5" },
              { label: "Returning Clients", value: "98%" }
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl font-serif text-violet-600 mb-2">{stat.value}</div>
                <div className="text-xs font-bold uppercase tracking-widest text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          {/* <div className="mt-32 text-center animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-50 border border-violet-100 mb-8">
              <Sparkles className="w-4 h-4 text-violet-500" />
              <span className="text-xs font-bold text-violet-600 uppercase tracking-widest">Your Turn Next</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-10">
              Ready to create your <em className="italic text-violet-600">own</em> story?
            </h2>
            <button className="px-12 py-5 bg-violet-600 text-white rounded-full font-bold text-lg shadow-xl shadow-violet-200 hover:bg-violet-700 transition-all hover:scale-105 active:scale-95">
              Book Your Consultation
            </button>
          </div> */}
        </div>
      </section>
    </div>
  );
}

export default Testimonials;