import React from 'react';
import { Phone, MessageCircle, Calendar } from 'lucide-react';

const FloatingButtons = () => {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-40">
      {/* Book Session Button */}
     

      {/* Call Button */}
      <a
        href="tel:+917355461435
"
        className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-2xl transition-all hover:scale-110 group"
      >
        <Phone size={24} />
        <span className="absolute right-16 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-4 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
          Call Us
        </span>
      </a>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/917355461435
"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-all hover:scale-110 group"
      >
        <MessageCircle size={24} />
        <span className="absolute right-16 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-4 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
          Chat With Us
        </span>
      </a>
    </div>
  );
};

export default FloatingButtons;