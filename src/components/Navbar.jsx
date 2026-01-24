import { useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "../assets/logo.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#herosection" },
    { name: "Courses", href: "#processsteps" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center h-16 md:h-20 px-4 sm:px-6 md:px-16">

        {/* Logo */}
        <a href="#herosection" className="flex items-center h-full">
          <img
            src={Logo}
            alt="LearnBee Logo"
            className="h-12 md:h-14 object-contain"
          />
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-10">
          {navLinks.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-dark hover:text-primary font-medium"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <a
            href="#processsteps"
            className="px-4 py-2 text-primary font-medium hover:text-primaryDark"
          ></a>

          <a
            href="#contact"
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
            <a
              key={item.name}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="block py-3 px-6 text-dark hover:text-primary font-medium "
            >
              {item.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
