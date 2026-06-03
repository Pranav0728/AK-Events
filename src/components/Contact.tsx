import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Phone, MapPin, Mail, Sparkles, MessageCircle, Clock, Star } from "lucide-react";


function ContactPage() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-violet-100 selection:text-violet-900">
      {/* Site Header */}
      <Header />

     <section className="relative h-[88vh] min-h-[600px] w-full overflow-hidden mt-[82px]">
        <img
          src="/General/slide1.jpg"
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
              Let's Connect
            </span>
          </div>

          <h1 className="mt-8 max-w-4xl font-serif text-6xl font-light leading-[1.05] text-white md:text-7xl lg:text-8xl animate-fade-in-up">
            Contact <em className="italic text-violet-400">Us</em>
          </h1>

          <div className="mt-6 h-px w-24 bg-gradient-to-r from-transparent via-violet-400 to-transparent" />

          <p
            className="mt-8 max-w-2xl text-lg font-light leading-relaxed text-violet-50 md:text-xl animate-fade-in-up"
            style={{ animationDelay: "0.3s" }}
          >
            Our team is here to help you plan your next magical event. Reach out to us for a personalized consultation.
            
          </p>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
      </section>


      {/* Contact Content Section */}
      <section className="py-24 relative z-10 -mt-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            
            {/* Left Side: Contact Info */}
            <div className="space-y-12 animate-fade-in-up">
              <div className="relative">
                <span className="text-xs font-bold uppercase tracking-[0.3em] text-violet-600 mb-4 block">
                  Connect With Us
                </span>
                <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-6 leading-tight">
                  We'd Love to <em className="italic text-violet-600">Celebrate</em> With You
                </h2>
                <div className="h-1 w-20 bg-violet-600 rounded-full mb-8" />
              </div>

              <div className="grid gap-10">
                {/* Phone Card */}
                <div className="flex items-start gap-8 group">
                  <div className="w-16 h-16 rounded-3xl bg-violet-50 text-violet-600 flex items-center justify-center flex-shrink-0 transition-all duration-500 group-hover:scale-110 group-hover:bg-violet-600 group-hover:text-white shadow-[0_10px_30px_-10px_rgba(124,58,237,0.3)]">
                    <Phone className="w-7 h-7" />
                  </div>
                  <div className="pt-2">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                      Call Us <Star className="w-4 h-4 text-violet-400 fill-violet-400" />
                    </h3>
                    <p className="text-gray-500 mb-3 text-sm flex items-center gap-2">
                      <Clock className="w-4 h-4" /> Available Mon-Sun, 9am-10pm
                    </p>
                    <a href="tel:+919594315750" className="text-2xl font-serif text-violet-600 hover:text-violet-800 transition-colors">
                      +91 95943 15750
                    </a>
                  </div>
                </div>

                {/* Address Card */}
                <div className="flex items-start gap-8 group">
                  <div className="w-16 h-16 rounded-3xl bg-violet-50 text-violet-600 flex items-center justify-center flex-shrink-0 transition-all duration-500 group-hover:scale-110 group-hover:bg-violet-600 group-hover:text-white shadow-[0_10px_30px_-10px_rgba(124,58,237,0.3)]">
                    <MapPin className="w-7 h-7" />
                  </div>
                  <div className="pt-2">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Our Location</h3>
                    <address className="not-italic text-gray-600 text-lg leading-relaxed max-w-sm">
                      AK Events, C-107, Mathadi Tower,<br />
                      Sector no 09, Ghansoli West,<br />
                      Navi Mumbai, Maharashtra 400701
                    </address>
                  </div>
                </div>

                {/* Email Card */}
                {/* <div className="flex items-start gap-8 group">
                  <div className="w-16 h-16 rounded-3xl bg-violet-50 text-violet-600 flex items-center justify-center flex-shrink-0 transition-all duration-500 group-hover:scale-110 group-hover:bg-violet-600 group-hover:text-white shadow-[0_10px_30px_-10px_rgba(124,58,237,0.3)]">
                    <Mail className="w-7 h-7" />
                  </div>
                  <div className="pt-2">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Email Us</h3>
                    <a href="mailto:hello@akevents.com" className="text-lg text-gray-600 hover:text-violet-600 transition-colors">
                      hello@akevents.com
                    </a>
                  </div>
                </div> */}
              </div>

              {/* WhatsApp Premium CTA */}
              <div className="p-10 rounded-[2.5rem] bg-gradient-to-br from-violet-900 to-violet-950 text-white relative overflow-hidden shadow-[0_20px_50px_-15px_rgba(46,16,101,0.5)] group">
                <div className="absolute -top-10 -right-10 p-4 opacity-5 transition-transform duration-700 group-hover:scale-110 group-hover:rotate-12">
                  <MessageCircle className="w-48 h-48" />
                </div>
                <div className="relative z-10 flex flex-col items-start">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/20 border border-violet-500/30 text-xs font-bold uppercase tracking-widest text-violet-200 mb-6">
                    <Sparkles className="w-3 h-3" /> Fastest Response
                  </div>
                  {/* <h4 className="text-3xl font-serif mb-4">
                    Ready to Start <br />
                    <em className="italic text-violet-300">Planning?</em>
                  </h4>
                  <p className="text-violet-200/80 mb-8 font-light text-lg max-w-md">
                    Skip the wait and chat with our event specialists directly on WhatsApp for instant quotes.
                  </p> */}
                  <a 
                    href="https://wa.me/919594315750" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block bg-white text-violet-900 hover:bg-violet-100 font-bold px-10 py-4 rounded-2xl w-full sm:w-auto text-center transition-all hover:scale-105 hover:shadow-xl active:scale-95"
                  >
                    Chat on WhatsApp
                  </a>
                </div>
              </div>
            </div>

            {/* Right Side: Interactive Map */}
            <div className="lg:sticky lg:top-32 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <div className="relative group">
                {/* Decorative Elements */}
                <div className="absolute -inset-4 bg-violet-100/50 rounded-[3rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                <div className="relative rounded-[2.5rem] overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.2)] border-[12px] border-white ring-1 ring-violet-50">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.246642468759!2d72.9965192!3d19.1159486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c1aef0ae5323%3A0x3fc9f647f0eefbda!2sAK%20Events%20%40%20decoration!5e1!3m2!1sen!2sin!4v1780321053445!5m2!1sen!2sin"
                    width="100%" 
                    height="650" 
                    style={{ border: 0 }} 
                    allowFullScreen={true} 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    className="grayscale contrast-[1.1] brightness-[0.95] hover:grayscale-0 hover:contrast-100 hover:brightness-100 transition-all duration-1000 ease-in-out"
                  />
                  
                  {/* Floating Location Badge */}
                  <div className="absolute bottom-10 left-8 px-6 py-3 bg-white/90 backdrop-blur-xl rounded-2xl shadow-2xl border border-violet-100 flex items-center gap-3 transform transition-transform group-hover:scale-105 duration-500">
                    <div className="relative">
                      <div className="w-3 h-3 bg-violet-600 rounded-full animate-ping absolute inset-0" />
                      <div className="w-3 h-3 bg-violet-600 rounded-full relative" />
                    </div>
                    <span className="text-sm font-bold text-violet-950 uppercase tracking-widest">Our Location</span>
                  </div>

                  {/* Glassmorphism Map Overlay (Bottom) */}
                  <div className="absolute bottom-0 inset-x-0 p-8 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                    <p className="text-white text-sm font-medium">Click the map to explore our neighborhood</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Site Footer */}
      <Footer />
    </div>
  );
}

export default ContactPage;