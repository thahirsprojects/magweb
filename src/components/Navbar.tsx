import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import magrrLogo from "../assets/magrrLogo.png";

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function Navbar({ currentPage, onNavigate }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = ["Home", "About", "Services", "Contact"];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-md shadow-lg"
          : "bg-white/60 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <div
            className="cursor-pointer group"
            onClick={() => onNavigate("Home")}
          >
            <img
              src={magrrLogo}
              alt="Magrr Logo"
              className="
                h-12 sm:h-14 md:h-16 lg:h-24
                w-auto
                object-contain
                mb-1 md:mb-2
                transition-transform duration-300
                hover:scale-105
              "
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-1 lg:space-x-2">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => onNavigate(item)}
                className={`relative px-3 lg:px-4 py-2 transition-all duration-300 ${
                  currentPage === item
                    ? "text-[#2D5BFF]"
                    : "text-gray-700 hover:text-[#2D5BFF]"
                }`}
              >
                {item}
                <span
                  className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#2D5BFF] transition-all duration-300 ${
                    currentPage === item
                      ? "opacity-100"
                      : "opacity-0 group-hover:opacity-100"
                  }`}
                  style={{
                    transform: currentPage === item ? "scaleX(1)" : "scaleX(0)",
                  }}
                />
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-700 hover:text-[#2D5BFF] transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-4 space-y-2">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => {
                  onNavigate(item);
                  setIsMobileMenuOpen(false);
                }}
                className={`block w-full text-left px-4 py-2 rounded-lg transition-all duration-300 ${
                  currentPage === item
                    ? "bg-[#2D5BFF] text-white"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
