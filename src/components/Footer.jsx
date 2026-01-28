import React from "react";
import logo from "../assets/logo.png";
import google from "../assets/google.png";
import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
  Send,
  Mail,
  Phone,
  MapPin
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0B1C2D] text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

        {/* Brand */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <a href="#herosection" className="flex items-center h-full">
              <img
                src={logo}
                alt="LearnBee Logo"
                className="h-14 object-contain ml-4 rounded-full"
              />
            </a>
          </div>
          <p className="text-sm text-white/80 leading-relaxed max-w-sm">
            The founders and founding team of Wavemindedu are Senior IIT and IIM alumni passionate about effective education in India and ensuring high performance and result for each student.
          </p>

          <div className="flex gap-4 mt-6 text-white/80">
            <Facebook size={18} />
            <Instagram size={18} />


            <Youtube size={20} />

          </div>
        </div>

        {/* Important Links */}
        <div>
          <h4 className="font-semibold text-white mb-4">Important Links</h4>
          <ul className="space-y-2 text-sm text-white/80">
            <li>
              <a href="#herosection" className="cursor-pointer hover:text-white">
                Home
              </a>
            </li>

            <li>
              <a href="#processsteps" className="cursor-pointer hover:text-white">
                Courses
              </a>
            </li>
            <li>
              <a href="#contact" className="cursor-pointer hover:text-white">
                Contact Us
              </a>
            </li>

          </ul>
        </div>

        {/* Policies */}
        <div className="pt-8 lg:pt-0 flex flex-col items-start">
          <ul className="space-y-2 text-sm text-white/80">
            <li>Terms and Conditions</li>
            <li>Privacy Policy</li>

            <li>Excellence</li>
            <li>Mentorship </li>
            <li className="mt-2">
              <a
                href="https://play.google.com/store/apps/details?id=com.wavemind.edu.com&pcampaignid=web_share"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={google}
                  alt="Download from Google Play"
                  className="h-14 sm:h-16 md:h-20 object-contain"
                />
              </a>
            </li>

          </ul>


        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold mb-4">Contact Us</h4>
          <ul className="space-y-3 text-sm text-white/80">
            <li className="flex items-center gap-2">
              <Mail size={16} />  wavemindedu@gmail.com
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} /> +91-7355461435
            </li>

            <li className="flex items-start gap-2">
              <MapPin size={16} className="mt-1" />

              Sarojini Apartment, Sarojini Naidu Marg, Prayagraj
            </li>
          </ul>
        </div>

      </div>

      <div className="border-t border-white/10 py-6 text-center text-xs text-white/60">
        © {new Date().getFullYear()} Wavemindedu. All rights reserved.
      </div>
    </footer>
  );
}
