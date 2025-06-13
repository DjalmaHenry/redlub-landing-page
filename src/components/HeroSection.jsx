import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Droplets, Recycle } from 'lucide-react';

const HeroSection = ({ onCtaClick }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 gradient-bg">
        <div className="absolute inset-0 bg-black/20"></div>
      </div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 floating-animation">
        <Droplets className="w-8 h-8 text-white/30" />
      </div>
      <div className="absolute top-40 right-20 floating-animation" style={{ animationDelay: '2s' }}>
        <Recycle className="w-12 h-12 text-white/20" />
      </div>
      <div className="absolute bottom-40 left-20 floating-animation" style={{ animationDelay: '4s' }}>
        <Droplets className="w-6 h-6 text-white/25" />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left lg:text-left"
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            >
              Campanha de recilagem de{' '}
              <span className="text-yellow-300">Óleo usado</span>
              {' '}em frituras.
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl lg:text-2xl mb-8 text-green-100 leading-relaxed"
            >
              Cada litro de óleo reciclado evita a contaminação de até{' '}
              <span className="font-bold text-yellow-300">25 mil litros</span> de água.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Button
                onClick={onCtaClick}
                size="lg"
                className="bg-yellow-400 hover:bg-yellow-500 text-green-900 font-bold text-lg px-8 py-4 rounded-full pulse-green group transition-all duration-300"
              >
                Agende sua coleta gratuita agora
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl hover-lift">
              <img  
                className="w-full h-96 object-cover"
                alt="Recipiente de coleta de óleo de cozinha usado"
               src="https://images.unsplash.com/photo-1646152586935-1343e96bec7b" />
              <div className="absolute inset-0 bg-gradient-to-t from-green-900/50 to-transparent"></div>
            </div>
            
            {/* Floating stats */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="absolute -top-4 -right-4 glass-effect rounded-xl p-4 text-center"
            >
              <div className="text-2xl font-bold text-yellow-300">25.000L</div>
              <div className="text-sm text-white">água preservada</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;