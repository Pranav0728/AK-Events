import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Logo from "../../assets/logos/logoHeader.png";

const Header = () => {
  // State to track if the page is scrolled past threshold (50px)
  const [isScrolled, setIsScrolled] = useState(false);
  // State to toggle mobile menu visibility
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Scroll event handler to update isScrolled state
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /**
   * Handles navigation clicks:
   * Navigates to the corresponding page route
   */
  const handleNavClick = (path: string) => {
    navigate(path);
    setIsMobileMenuOpen(false);
  };

  // Navigation items for header menu with updated routes
  const navItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about-us" },
    { label: "Services", path: "/services" },
    { label: "Gallery", path: "/gallery" },
    { label: "Testimonials", path: "/testimonials" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <header
      className="fixed top-0 w-full z-50 bg-violet-100 backdrop-blur-md shadow-sm border-b border-gray-100 transition-all duration-300"
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <nav
          className="flex items-center justify-between"
          role="navigation"
          aria-label="Main Navigation"
        >
          {/* Logo */}
          <div className="flex-shrink-0">
            <img
              src={Logo}
              alt="Eventory Logo"
              className="h-[50px] w-auto object-contain hover:cursor-pointer transition-transform duration-300 hover:scale-105"
              onClick={() => handleNavClick("/")}
            />
          </div>

          {/* Desktop Navigation - visible from md screens upwards */}
          <div className="hidden md:flex items-center space-x-10">
            {navItems.map(({ label, path }) => {
              const isActive = location.pathname === path;
              return (
                <button
                  key={path}
                  onClick={() => handleNavClick(path)}
                  className={`relative text-sm font-semibold tracking-wide transition-all duration-300 group py-2
                    ${isActive ? "text-violet-600" : "text-gray-700 hover:text-violet-600"}`}
                  aria-label={`Navigate to ${label}`}
                >
                  {label}
                  {/* Animated Underline Effect */}
                  <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-violet-600 transform transition-transform duration-300 origin-left 
                    ${isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`} 
                  />
                </button>
              );
            })}
          </div>

          {/* Mobile Menu Toggle Button - visible below md screens */}
          <button
            className="md:hidden p-2 focus:outline-none group"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {/* Modern Hamburger icon */}
            <div className="space-y-1.5">
              <div className={`w-6 h-0.5 bg-gray-700 transition-all duration-300 ${isMobileMenuOpen ? "rotate-45 translate-y-2" : ""}`} />
              <div className={`w-6 h-0.5 bg-gray-700 transition-all duration-300 ${isMobileMenuOpen ? "opacity-0" : ""}`} />
              <div className={`w-6 h-0.5 bg-gray-700 transition-all duration-300 ${isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </div>
          </button>
        </nav>

        {/* Mobile Navigation Menu */}
        <div
          id="mobile-menu"
          className={`md:hidden absolute left-0 w-full bg-white shadow-xl transition-all duration-300 ease-in-out border-t border-gray-100 overflow-hidden ${
            isMobileMenuOpen ? "max-h-[400px] opacity-100 py-6" : "max-h-0 opacity-0 py-0"
          }`}
        >
          <div className="flex flex-col space-y-2 px-6">
            {navItems.map(({ label, path }) => {
              const isActive = location.pathname === path;
              return (
                <button
                  key={path}
                  onClick={() => handleNavClick(path)}
                  className={`text-left text-lg font-medium py-3 px-4 rounded-lg transition-all duration-200 
                    ${isActive ? "bg-violet-50 text-violet-600" : "text-gray-700 hover:bg-gray-50 hover:text-violet-600"}`}
                  aria-label={`Navigate to ${label}`}
                >
                  {label}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
