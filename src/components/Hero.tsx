import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sparkles, Phone } from "lucide-react";

// Import images for the dynamic slideshow
import HeroBG1 from "../assets/General/slide1.jpg";
import HeroBG2 from "../assets/General/slide2.jpg";
import HeroBG3 from "../assets/General/slide3.jpg";
import HeroBG4 from "../assets/General/slide4.jpg";
import HeroBG5 from "../assets/General/slide5.jpg";
import { Link } from "react-router-dom";

const slides = [
  {
    image: HeroBG1,
    title: "Making",
    subtitle: "Birthdays Special",
    description: "Creative birthday decorations and memorable celebrations designed just for you."
  },
  {
    image: HeroBG2,
    title: "Beautiful",
    subtitle: "Baby Showers",
    description: "Welcoming new beginnings with elegant and joyful baby shower decorations."
  },
  {
    image: HeroBG3,
    title: "Dream",
    subtitle: "Engagements",
    description: "Creating romantic engagement setups that make your special moment unforgettable."
  },
  {
    image: HeroBG4,
    title: "Stylish",
    subtitle: "Home Decor",
    description: "Transforming your new home celebrations with stunning decoration themes."
  },
  {
    image: HeroBG5,
    title: "Fun",
    subtitle: "Party Events",
    description: "From intimate gatherings to grand celebrations, we make every party extraordinary."
  }
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000); 

    return () => clearInterval(timer);
  }, []);

  /**
   * Smoothly scrolls to a section by its ID
   * @param sectionId - id of the target element
   */
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-start overflow-hidden bg-black"
    >
      {/* Dynamic Background Slideshow */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105 transition-transform duration-[5000ms] ease-linear"
            style={{ 
              backgroundImage: `url(${slide.image})`,
              transform: index === currentSlide ? 'scale(1)' : 'scale(1.1)'
            }}
            aria-hidden="true"
          />
          {/* Overlay with gradient for better text legibility */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" aria-hidden="true" />
        </div>
      ))}

      {/* Decorative animated elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-violet-600/20 rounded-full blur-3xl animate-pulse" aria-hidden="true" />
      <div className="absolute bottom-20 right-10 w-24 h-24 bg-violet-600/20 rounded-full blur-2xl animate-pulse" aria-hidden="true" />

      {/* Animated Sparks */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-sparkle"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${1.5 + Math.random() * 2}s`
            }}
          >
            <div className={`rounded-full blur-[1px] opacity-60 ${i % 2 === 0 ? 'w-1 h-1 bg-violet-300' : 'w-1.5 h-1.5 bg-white'}`} />
          </div>
        ))}
      </div>


      {/* Main Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto lg:mx-20 px-6 text-left">
        {/* Dynamic Headline */}
        <div className="mb-8 relative">
          <h1 className="text-7xl md:text-9xl font-serif text-white mb-6 leading-[1.1] tracking-tight drop-shadow-2xl">
            <span className="block animate-fade-in-up mix-blend-lighten opacity-95" style={{ animationDelay: '200ms' }}>
              {slides[currentSlide].title}
            </span>
            <span className="relative inline-block animate-fade-in-up" style={{ animationDelay: '400ms' }}>
              <span className="bg-gradient-to-r from-violet-400 via-white to-violet-400 bg-[length:200%_auto] bg-clip-text text-transparent italic animate-glow drop-shadow-[0_0_20px_rgba(167,139,250,0.5)]">
                {slides[currentSlide].subtitle}
              </span>
              <Sparkles className="absolute -top-8 -right-12 h-10 w-10 text-violet-300 animate-pulse hidden md:block" />
            </span>
          </h1>
        </div>

        {/* Dynamic Subheadline */}
        <p className="text-xl md:text-2xl text-violet-100/80 mb-12 max-w-2xl mx-0 leading-relaxed font-light animate-fade-in-up backdrop-blur-[2px] py-1 border-l-2 border-violet-500/30 pl-6" style={{ animationDelay: '600ms' }}>
          {slides[currentSlide].description}
        </p>

        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-8 justify-start items-center animate-fade-in-up" style={{ animationDelay: '800ms' }}>
          <Link
            to="/services"
            className="relative group overflow-hidden bg-violet-600 hover:bg-violet-700 text-white px-12 py-4 text-xl font-semibold rounded-full shadow-[0_0_30px_rgba(124,58,237,0.4)] transition-all duration-500 transform hover:-translate-y-2"
            aria-label="Book Here"
          >
            <span className="relative z-10 flex items-center gap-2">
              View Services
              <Sparkles className="h-5 w-5" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer" />
          </Link>
          <a  className="relative group overflow-hidden bg-violet-600 hover:bg-violet-700 text-white px-12 py-4 text-xl font-semibold rounded-full shadow-[0_0_30px_rgba(124,58,237,0.4)] transition-all duration-500 transform hover:-translate-y-2"
          href="tel:9594315750" target="_blank" rel="noopener noreferrer">
            <span className="relative z-10 flex items-center gap-2">
                <Phone className="h-5 w-5" />
              Call - 9594315750
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer" />
          </a>
        </div>
        </div>

      {/* Slide Indicators - Moved outside text container to stay centered on screen */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-1.5 transition-all duration-500 rounded-full ${
              index === currentSlide ? "bg-violet-400 w-10" : "bg-white/30 hover:bg-white/50 w-4"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll Indicator - Moved outside text container to stay centered on screen */}
      <div
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer z-20"
        onClick={() => scrollToSection("about")}
        aria-hidden="true"
      >
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-violet-400 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
