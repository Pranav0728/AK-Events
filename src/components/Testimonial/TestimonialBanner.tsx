import { Sparkles } from "lucide-react";
import React from "react";
import Testimonialbr from "../../assets/General/slide4.jpg";

function TestimonialBanner() {
  return (
    <section className="relative h-[88vh] min-h-[600px] w-full overflow-hidden mt-[82px]">
      <img
        src={Testimonialbr}
        alt="Luxury event setting"
        className="absolute inset-0 h-full w-full object-cover scale-105 animate-[fade-in_1.2s_ease-out]"
      />
      {/* Cinematic Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-white" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(46,16,101,0.5)_100%)]" />

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 backdrop-blur-sm animate-fade-in">
          <Sparkles className="h-3.5 w-3.5 text-violet-300" />
          <span className="text-xs font-medium uppercase tracking-[0.25em] text-violet-100">
            Client Reviews
          </span>
        </div>

        <h1 className="mt-8 max-w-4xl font-serif text-6xl font-light leading-[1.05] text-white md:text-7xl lg:text-8xl animate-fade-in-up">
          Words From Our
          <em className="italic text-violet-400"> Happy Clients</em>
        </h1>

        <div className="mt-6 h-px w-24 bg-gradient-to-r from-transparent via-violet-400 to-transparent" />

        <p
          className="mt-8 max-w-2xl text-lg font-light leading-relaxed text-violet-50 md:text-xl animate-fade-in-up"
          style={{ animationDelay: "0.3s" }}
        >
          Nothing makes us happier than seeing our clients smile. Read what
          families and event hosts have to say about their experience with AK
          Events and the memories we helped create.
        </p>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}

export default TestimonialBanner;
