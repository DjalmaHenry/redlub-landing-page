import React from 'react';
import { motion } from 'framer-motion';

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
      <motion.div 
        className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-xl flex items-center justify-center"
        whileHover={{ rotate: 5 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <img 
          src="/whatsapp_icon.png" 
          alt="WhatsApp" 
          className="w-8 h-8"
        />
      </motion.div>
    </motion.a>
  );
};

export default FloatingWhatsappButton;