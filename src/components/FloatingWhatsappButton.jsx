import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare } from 'lucide-react';

const FloatingWhatsappButton = () => {
  return (
    <motion.a
      href="https://api.whatsapp.com/message/GBICHKHVYM4KK1"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, delay: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="relative group">
        <div className="absolute top-1/2 -translate-y-1/2 right-full mr-3 w-max bg-green-600 text-white text-sm px-3 py-2 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          <img 
            src="https://images.unsplash.com/photo-1579034014340-f8731da64674" 
            alt="Mascote Reciclagem Sorrindo" 
            className="w-8 h-8 rounded-full inline mr-2 border-2 border-white"
           src="https://images.unsplash.com/photo-1690643129309-a118852ee59d" />
          Fale conosco no WhatsApp!
          <div className="absolute top-1/2 transform -translate-y-1/2 left-full w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-l-8 border-l-green-600"></div>
        </div>
        <motion.div 
          className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-xl flex items-center justify-center"
          whileHover={{ rotate: 5 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <MessageSquare className="w-8 h-8" />
        </motion.div>
      </div>
    </motion.a>
  );
};

export default FloatingWhatsappButton;