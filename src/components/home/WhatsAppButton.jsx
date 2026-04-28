import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  const phoneNumber = "919891902115";
  const message = "Hello! I'm interested in your properties.";
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappURL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-[#25D366] text-white w-10 h-10 md:w-14 md:h-14 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 z-50 animate-bounce hover:animate-none group"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp size={38} className="md:w-10 md:h-10 text-white" />
      
      {/* Tooltip */}
      <span className="absolute right-20 bg-gray-800 text-white px-4 py-2 rounded-full text-sm font-medium opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:right-24 transition-all duration-300 whitespace-nowrap shadow-lg">
        Chat with us
        <span className="absolute right-[-6px] top-1/2 transform -translate-y-1/2 border-8 border-transparent border-l-gray-800"></span>
      </span>

      {/* Optional: Notification badge for unread messages */}
      <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center animate-bounce">
        1
      </span>
    </a>
  );
};

export default WhatsAppButton;