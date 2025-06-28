import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Send, Zap } from 'lucide-react';

const FinalCallToActionSection = () => {
  return (
    <section className="section-padding bg-gradient-to-r from-green-500 to-emerald-600 text-white">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="inline-block p-3 bg-white/20 rounded-full mb-6">
            <Zap className="w-10 h-10 text-yellow-300" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Pronto para fazer parte da mudança?
          </h2>
          <p className="text-xl lg:text-2xl mb-10 max-w-3xl mx-auto text-green-100 leading-relaxed">
            Sua atitude hoje garante um amanhã mais limpo e sustentável. Junte-se a nós nessa missão!
          </p>
          <motion.a
            href="https://api.whatsapp.com/message/GBICHKHVYM4KK1"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              size="lg"
              className="bg-yellow-400 hover:bg-yellow-500 text-green-900 font-bold text-lg px-10 py-5 rounded-full pulse-green group transition-all duration-300 shadow-xl"
            >
              <Send className="mr-3 w-6 h-6" />
              Falar com a RedLub
            </Button>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCallToActionSection;