import {
  Mail,
  Phone,
  MapPin,
  Instagram,
  Sparkles,
  MessageCircle,
  Heart,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/logos/logo2tp.png";

const Footer = () => {
  // Get current year dynamically for copyright
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();

  // Navigation items
  const quickLinks = [
    { label: "Home", path: "/" },
    { label: "About Us", path: "/about-us" },
    { label: "Services", path: "/services" },
    { label: "Gallery", path: "/gallery" },
    { label: "Contact", path: "/contact" },
  ];

  const services = [
    "Wedding Decoration",
    "Birthday Parties",
    "Baby Showers",
    "Corporate Events",
    "House Warming",
  ];

  return (
    <footer className="bg-violet-950 text-white pt-24 pb-12 relative overflow-hidden">
      {/* Cinematic Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-violet-600/10 rounded-full blur-[120px]" />
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-violet-900/20 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-8">
          {/* Brand & Description */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-8 group">
              <img
                src={Logo}
                alt="AK Events Logo"
                className="h-[70px] w-auto object-contain brightness-125 transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <p className="text-violet-200/60 leading-relaxed mb-8 text-lg font-light">
              Crafting magical celebrations and unforgettable memories with our
              signature premium decorations and event planning.
            </p>

            {/* Social Media Links */}
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/ak.event.47"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-2xl bg-violet-900/50 border border-violet-800/50 flex items-center justify-center text-violet-200 hover:bg-violet-600 hover:text-white hover:scale-110 transition-all duration-300 shadow-lg shadow-violet-950/50"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://wa.me/919594315750"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-2xl bg-violet-900/50 border border-violet-800/50 flex items-center justify-center text-violet-200 hover:bg-violet-600 hover:text-white hover:scale-110 transition-all duration-300 shadow-lg shadow-violet-950/50"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-serif font-medium mb-8 text-white flex items-center gap-2">
              Explore <Sparkles className="w-4 h-4 text-violet-400" />
            </h4>
            <ul className="space-y-4">
              {quickLinks.map(({ label, path }) => (
                <li key={label}>
                  <button
                    onClick={() => navigate(path)}
                    className="text-violet-200/60 hover:text-violet-300 transition-colors flex items-center group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-violet-600 mr-3 scale-0 group-hover:scale-100 transition-transform duration-300" />
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-serif font-medium mb-8 text-white">
              Services
            </h4>
            <ul className="space-y-4">
              {services.map((service) => (
                <li
                  key={service}
                  className="text-violet-200/60 hover:text-violet-300 transition-colors flex items-center group cursor-default"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-violet-600 mr-3 scale-0 group-hover:scale-100 transition-transform duration-300" />
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-serif font-medium mb-8 text-white">
              Get in Touch
            </h4>
            <div className="space-y-6">
              {/* Phone */}
              <div className="flex items-start group">
                <div className="w-10 h-10 rounded-xl bg-violet-900/50 border border-violet-800/50 flex items-center justify-center text-violet-400 mr-4 group-hover:bg-violet-600 group-hover:text-white transition-colors duration-300">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-violet-400 mb-1">
                    Call Us
                  </p>
                  <a
                    href="tel:+919594315750"
                    className="text-violet-100 hover:text-violet-300 transition-colors font-medium"
                  >
                    +91 95943 15750
                  </a>
                </div>
              </div>

              {/* Email */}
              {/* <div className="flex items-start group">
                <div className="w-10 h-10 rounded-xl bg-violet-900/50 border border-violet-800/50 flex items-center justify-center text-violet-400 mr-4 group-hover:bg-violet-600 group-hover:text-white transition-colors duration-300">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-violet-400 mb-1">Email Us</p>
                  <a href="mailto:info@akevents.com" className="text-violet-100 hover:text-violet-300 transition-colors font-medium">
                    info@akevents.com
                  </a>
                </div>
              </div> */}

              {/* Address */}
              <div className="flex items-start group">
                <div className="w-10 h-10 rounded-xl bg-violet-900/50 border border-violet-800/50 flex items-center justify-center text-violet-400 mr-4 group-hover:bg-violet-600 group-hover:text-white transition-colors duration-300">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-violet-400 mb-1">
                    Visit Us
                  </p>
                  <address className="not-italic text-violet-100 leading-relaxed font-medium">
                    C-107, Mathadi Tower,
                    <br />
                    Sector 09, Ghansoli West,
                    <br />
                    Navi Mumbai 400701
                  </address>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-violet-800/30 mt-20 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start gap-2">
            <p className="text-violet-400/50 text-sm tracking-wide">
              © {currentYear}{" "}
              <span className="text-violet-300 font-medium">AK Events</span>.
              All rights reserved.
            </p>
            <p className="text-violet-400/60 text-xs tracking-[0.15em] uppercase flex items-center gap-1.5 mt-2">
              Designed with
              <Heart className="w-3.5 h-3.5 fill-violet-500 text-violet-500" />
              by
              <a
                href="tel:8591964968" 
                rel="noopener noreferrer"
                className="text-violet-300 hover:text-white transition-colors font-medium"
              >
                Pranav Molawade • 8591964968</a>
            </p>
          </div>
          {/* <div className="flex space-x-8">
            <a href="#" className="text-violet-400/50 hover:text-violet-300 text-sm transition-colors tracking-widest uppercase">
              Privacy Policy
            </a>
            <a href="#" className="text-violet-400/50 hover:text-violet-300 text-sm transition-colors tracking-widest uppercase">
              Terms of Service
            </a>
          </div>  */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
