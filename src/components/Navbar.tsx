
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

interface NavbarProps {
  useDarkLogo?: boolean;
}

const Navbar = ({ useDarkLogo = false }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Determine which logo to use based on scroll state and useDarkLogo prop
  const logoSrc = scrolled
    ? "/lovable-uploads/53f9bd91-958d-4154-90a7-382533fa92e6.png" 
    : useDarkLogo
      ? "/lovable-uploads/53f9bd91-958d-4154-90a7-382533fa92e6.png"
      : "/lovable-uploads/4e6fda5e-aa21-4876-a3a7-9dfac7188b5d.png";

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-md py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <NavLink to="/" className="flex items-center">
          <img 
            src={logoSrc}
            alt="Nexacore Marketing" 
            className="h-12 w-auto"
          />
        </NavLink>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-8">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-lg font-medium hover:text-orange-500 transition duration-300 ${
                isActive ? "text-orange-500" : scrolled || useDarkLogo ? "text-black" : "text-white"
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `text-lg font-medium hover:text-orange-500 transition duration-300 ${
                isActive ? "text-orange-500" : scrolled || useDarkLogo ? "text-black" : "text-white"
              }`
            }
          >
            About Us
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `text-lg font-medium hover:text-orange-500 transition duration-300 ${
                isActive ? "text-orange-500" : scrolled || useDarkLogo ? "text-black" : "text-white"
              }`
            }
          >
            Contact
          </NavLink>
          <NavLink
            to="/contact"
            className="btn-primary"
          >
            Get Started
          </NavLink>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden ${scrolled || useDarkLogo ? "text-black" : "text-white"} p-2`}
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white w-full py-4 px-4 shadow-lg">
          <nav className="flex flex-col space-y-4">
            <NavLink
              to="/"
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) =>
                `text-lg font-medium p-2 hover:bg-gray-100 rounded ${
                  isActive ? "text-orange-500" : "text-black"
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) =>
                `text-lg font-medium p-2 hover:bg-gray-100 rounded ${
                  isActive ? "text-orange-500" : "text-black"
                }`
              }
            >
              About Us
            </NavLink>
            <NavLink
              to="/contact"
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) =>
                `text-lg font-medium p-2 hover:bg-gray-100 rounded ${
                  isActive ? "text-orange-500" : "text-black"
                }`
              }
            >
              Contact
            </NavLink>
            <NavLink
              to="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="btn-primary text-center"
            >
              Get Started
            </NavLink>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
