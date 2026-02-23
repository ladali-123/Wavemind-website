import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Logo from "../assets/logo.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Courses", href: "/courses" },
    { name: "Contact", href: "/contact" },
    { name: "Blog", href: "/blog" },
  ];

  const handleNavClick = (href) => {
    navigate(href);
  };

  return (
    <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center h-16 md:h-20 px-4 sm:px-6 md:px-16">

        {/* Logo */}
        <button onClick={() => handleNavClick("/")} className="flex items-center h-full">
          <img
            src={Logo}
            alt="LearnBee Logo"
            className="h-12 md:h-14 object-contain"
          />
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-10">
          {navLinks.map((item) => (
            <button
              key={item.name}
              onClick={() => handleNavClick(item.href)}
              className={`text-lg font-medium ${
                location.pathname === item.href 
                  ? 'text-blue-800' 
                  : 'text-dark hover:text-blue-800'
              }`}
            >
              {item.name}
            </button>
          ))}
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <a
            href="/courses"
            className="px-4 py-2 text-primary font-medium hover:text-primaryDark"
          ></a>

          <a
            href="/contact"
            className="px-6 py-2 bg-primary text-white font-medium rounded-lg hover:bg-primaryDark transition"
          ></a>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-dark focus:outline-none"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          {navLinks.map((item) => (
            <button
              key={item.name}
              onClick={() => {
                handleNavClick(item.href);
                setMenuOpen(false);
              }}
              className={`block py-3 px-6 text-lg font-medium ${
                location.pathname === item.href 
                  ? 'text-blue-800' 
                  : 'text-dark hover:text-blue-800'
              }`}
            >
              {item.name}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
