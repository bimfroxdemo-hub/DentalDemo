// src/components/Navbar.jsx
import { useState, useEffect } from "react";
import { Menu, X, Phone, MessageCircle } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleWhatsAppClick = () => {
    const message = "Hi! I'd like to book an appointment at BrightSmile Dental Care.";
    const phoneNumber = "+919537766568";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  const handleCallClick = () => {
    window.location.href = "tel:+1234567890";
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  const navItems = [
    { label: "Home", id: "hero" },
    { label: "About", id: "about" },
    { label: "Services", id: "services" },
    { label: "Gallery", id: "gallery" },
    { label: "Testimonials", id: "testimonials" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-lg shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-700 rounded-xl flex items-center justify-center shadow-md">
              <span className="text-white font-bold text-xl">B</span>
            </div>
            <div>
              <h1 className="font-serif text-2xl font-bold text-gray-900 tracking-tight">
                BrightSmile
              </h1>
              <p className="text-xs text-gray-500 -mt-1">Dental Care</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="relative text-gray-700 font-medium transition-colors duration-300 hover:text-blue-600 group"
              >
                {item.label}
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            <button
              onClick={handleCallClick}
              className="flex items-center px-5 py-2 rounded-full border bg-white border-blue-600 text-blue-600 font-medium shadow-sm hover:bg-blue-600 hover:text-white transition-all"
            >
              <Phone size={16} className="mr-2" />
              Call Now
            </button>
            <button
              onClick={handleWhatsAppClick}
              className="flex items-center px-5 py-2 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 text-white font-medium shadow-md hover:scale-105 transition-transform"
            >
              <MessageCircle size={16} className="mr-2" />
              WhatsApp
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X size={26} className="transition-transform rotate-180" />
            ) : (
              <Menu size={26} className="transition-transform rotate-0" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md border-t border-gray-200 shadow-lg animate-slideDown">
            <nav className="py-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-6 py-3 text-gray-700 font-medium hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                >
                  {item.label}
                </button>
              ))}
              <div className="px-6 py-4 space-y-3">
                <button
                  onClick={handleCallClick}
                  className="w-full flex items-center justify-center px-5 py-2 rounded-full border bg-white border-blue-600 text-blue-600 font-medium hover:bg-blue-600 hover:text-white transition-all"
                >
                  <Phone size={16} className="mr-2" />
                  Call Now
                </button>
                <button
                  onClick={handleWhatsAppClick}
                  className="w-full flex items-center justify-center px-5 py-2 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 text-white font-medium shadow-md hover:scale-105 transition-transform"
                >
                  <MessageCircle size={16} className="mr-2" />
                  Book on WhatsApp
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
