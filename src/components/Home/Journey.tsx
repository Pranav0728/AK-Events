import { Sparkles, Calendar, Palette, GlassWater } from "lucide-react";
import React from 'react'

function Journey() {
  return (
    <section className="py-32 bg-white overflow-hidden relative">
        {/* Background Accents */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-violet-50/50 rounded-full blur-[100px] -z-10" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-violet-50/50 rounded-full blur-[100px] -z-10" />

        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24 animate-fade-in">
            <span className="text-xs font-bold uppercase tracking-[0.4em] text-violet-600 mb-4 block">
              Our Process
            </span>
            <h2 className="text-4xl md:text-6xl font-serif text-gray-900 leading-tight">
              The <em className="italic text-violet-600">Decoration</em> Journey
            </h2>
            <div className="w-24 h-1 bg-violet-500/20 mx-auto mt-8 rounded-full" />
          </div>

          <div className="relative">
            {/* The Roadmap Path (Desktop) */}
            <svg className="hidden lg:block absolute top-1/2 left-0 w-full -translate-y-1/2 -z-10" height="200" viewBox="0 0 1200 200" fill="none">
              <path 
                d="M0 100 C 300 100, 300 20, 600 20 C 900 20, 900 180, 1200 180" 
                stroke="url(#roadmap-gradient)" 
                strokeWidth="4" 
                strokeDasharray="12 12"
                className="animate-[shimmer_10s_infinite_linear]"
              />
              <defs>
                <linearGradient id="roadmap-gradient" x1="0" y1="0" x2="1200" y2="0" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#DDD6FE" />
                  <stop offset="0.5" stopColor="#8B5CF6" />
                  <stop offset="1" stopColor="#DDD6FE" />
                </linearGradient>
              </defs>
            </svg>

            <div className="grid lg:grid-cols-3 gap-20 relative">
              {[
                {
                  step: "01",
                  title: "Vision & Concept",
                  desc: "We start by understanding your dreams and sketching out a magical theme.",
                  image: "../../assets/General/slide1.jpg"
                },
                {
                  step: "02",
                  title: "Artistic Creation",
                  desc: "Our team handcrafts every detail, from floral arrangements to custom lighting.",
                  image: "../../assets/General/slide2.jpg"
                },
                {
                  step: "03",
                  title: "The Grand Reveal",
                  desc: "We bring it all together to create a breathtaking experience for your guests.",
                  image: "../../assets/General/slide3.jpg"
                }
              ].map((item, index) => (
                <div 
                  key={index} 
                  className={`relative group animate-fade-in-up flex flex-col items-center
                    ${index === 1 ? "lg:mt-24" : index === 2 ? "lg:-mt-12" : ""}`}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  {/* Step Indicator */}
                  <div className="absolute -top-6 -left-4 z-20 w-12 h-12 bg-violet-600 text-white rounded-2xl flex items-center justify-center font-bold text-xl shadow-xl shadow-violet-200 transform -rotate-12 group-hover:rotate-0 transition-transform duration-500">
                    {item.step}
                  </div>

                  {/* Image Container */}
                  <div className="relative w-full aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl shadow-violet-100 border-8 border-white transform transition-all duration-700 group-hover:scale-[1.02] group-hover:-translate-y-2">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-violet-950/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                    
                    {/* Floating Info Overlay */}
                    <div className="absolute bottom-8 left-8 right-8 text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <h3 className="text-2xl font-serif mb-2">{item.title}</h3>
                      <p className="text-violet-100/80 text-sm font-light leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>

                  {/* Decorative Sparkle */}
                  <div className="absolute -bottom-4 -right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    <Sparkles className="w-8 h-8 text-violet-400 animate-pulse" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
  )
}

export default Journey