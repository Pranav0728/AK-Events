import AboutImage from "../../public/General/aboutus2.png";

const About = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Section */}
          <div className="relative animate-fade-in">
            <div className="relative overflow-hidden rounded-lg shadow-2xl">
              <img
                src={AboutImage}
                alt="Creating Magic in Every Detail | Eventory"
                className="w-full object-cover"
                loading="lazy" // Optimize image loading
              />
              {/* Gradient overlay on the image */}
              <div className="absolute inset-0 bg-gradient-to-t from-violet-900/20 to-transparent" />
            </div>

            {/* Decorative Circles behind the image */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-violet-100 rounded-full opacity-60 -z-10" />
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-violet-100 rounded-full opacity-60 -z-10" />
          </div>

          {/* Content Section */}
          <div className="animate-fade-in-up">
           <header className="mb-6">
                <span className="text-sm font-medium text-violet-500 tracking-wide uppercase">
                  About AK Events
                </span>
                <h2 className="text-4xl md:text-5xl font-serif text-gray-800 mt-2 mb-6">
                  Turning Your Special Moments
                  <span className="text-violet-600 italic block">
                    Into Beautiful Memories
                  </span>
                </h2>
              </header>
            {/* Description paragraphs */}
            <div className="animate-fade-in-up">
              {/* Description */}
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                <p>
                  At AK Events, we believe every celebration deserves to be
                  special. From birthdays and baby showers to engagements,
                  housewarming events, and private parties, we create beautiful
                  decorations that bring joy to every occasion.
                </p>

                <p>
                  Founded by Akshay, AK Events was started with one simple goal
                  - to make people smile through creative and memorable event
                  decorations. Every balloon, flower, and detail is carefully
                  arranged with passion and care.
                </p>

                <p>
                  Whether you're celebrating a milestone or creating memories
                  with loved ones, we work closely with you to transform your
                  ideas into a stunning setup that everyone will remember.
                </p>
              </div>

              {/* Statistics */}
              <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-gray-200">
                <div className="text-center">
                  <div className="text-3xl font-serif text-violet-500 mb-2">
                    200+
                  </div>
                  <div className="text-sm text-gray-500 uppercase tracking-wide">
                    Events Decorated
                  </div>
                </div>

                <div className="text-center">
                  <div className="text-3xl font-serif text-violet-500 mb-2">
                    7+
                  </div>
                  <div className="text-sm text-gray-500 uppercase tracking-wide">
                    Years Experience
                  </div>
                </div>

                <div className="text-center">
                  <div className="text-3xl font-serif text-violet-600 mb-2">
                    100%
                  </div>
                  <div className="text-sm text-gray-500 uppercase tracking-wide">
                    Happy Clients
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
