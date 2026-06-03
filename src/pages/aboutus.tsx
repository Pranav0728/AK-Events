import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  Sparkles,
  Heart,
  Star,
  ShieldCheck,
  ArrowRight,
  PartyPopper,
} from "lucide-react";
import abouts from "../assets/General/slide2.jpg";

const values = [
  {
    icon: Sparkles,
    title: "Creative Decorations",
    desc: "Every celebration is unique. We create beautiful and customized decorations that match your theme, style, and special moments.",
  },
  {
    icon: Heart,
    title: "Made With Passion",
    desc: "We treat every event like our own. From the smallest detail to the final setup, everything is done with care and dedication.",
  },
  {
    icon: PartyPopper,
    title: "Memorable Celebrations",
    desc: "Whether it's a birthday, baby shower, engagement, or housewarming, we create moments that you and your loved ones will cherish forever.",
  },
];

const stats = [
  { value: "10+", label: "Years of craft" },
  { value: "500+", label: "Events designed" },
  { value: "25+", label: "Cities covered" },
  { value: "98%", label: "Returning clients" },
];

import About from "@/components/About";

function AboutUs() {
  return (
    <main className="min-h-screen bg-white text-gray-900 font-sans">
      {/* Site Header */}
      <Header />

      {/* Hero Section */}
      <section className="relative h-[88vh] min-h-[600px] w-full overflow-hidden mt-[82px]">
        <img
          src={abouts}
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
              Established 2014
            </span>
          </div>

          <h1 className="mt-8 max-w-4xl font-serif text-6xl font-light leading-[1.05] text-white md:text-7xl lg:text-8xl animate-fade-in-up">
            Our <em className="italic text-violet-400">Story</em>
          </h1>

          <div className="mt-6 h-px w-24 bg-gradient-to-r from-transparent via-violet-400 to-transparent" />

          <p
            className="mt-8 max-w-2xl text-lg font-light leading-relaxed text-violet-50 md:text-xl animate-fade-in-up"
            style={{ animationDelay: "0.3s" }}
          >
            Transforming ordinary moments into extraordinary memories through
            visionary design and meticulous planning.
          </p>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Story Section */}
      <About />

      {/* Values Section */}
      <section className="bg-violet-50/50 py-12 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-2xl text-center mb-20">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-violet-600">
              Why AK Events
            </span>

            <h2 className="mt-4 font-serif text-4xl font-light leading-tight md:text-5xl">
              Creating moments that
              <em className="italic text-violet-600"> stay forever</em>
            </h2>
            <div className="mx-auto mt-6 h-px w-16 bg-violet-600/40" />
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {values.map(({ icon: Icon, title, desc }, i) => (
              <div
                key={title}
                className="group relative overflow-hidden rounded-3xl border border-white bg-white p-12 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-violet-200/50"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-violet-400 to-violet-600 transform scale-x-0 transition-transform duration-500 group-hover:scale-x-100" />

                <div className="mb-8 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-violet-600 text-white transition-transform duration-500 group-hover:scale-110">
                  <Icon className="h-8 w-8" strokeWidth={1.5} />
                </div>

                <h3 className="font-serif text-2xl font-semibold text-gray-900 mb-4">
                  {title}
                </h3>
                <p className="text-[16px] leading-relaxed text-gray-600">
                  {desc}
                </p>
                <span className="absolute right-8 bottom-8 font-serif text-7xl font-light text-violet-100/60 group-hover:text-violet-100 transition-colors duration-500">
                  0{i + 1}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Site Footer */}
      <Footer />
    </main>
  );
}

export default AboutUs;
