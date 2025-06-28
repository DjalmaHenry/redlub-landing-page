import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Home, Package, Send } from 'lucide-react';

const ResidentialCampaignSection = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-green-50 to-emerald-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block p-3 bg-green-100 rounded-full mb-4">
            <Home className="w-10 h-10 text-green-600" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 gradient-text">
            Campanha de Coleta Residencial
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Sua contribuição em casa faz uma grande diferença para o meio ambiente. É simples, rápido e gratuito!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl hover-lift">
              <img 
                className="w-full h-96 object-cover"
                alt="Mãos segurando uma garrafa PET com óleo de cozinha usado, com fundo de cozinha limpa e organizada"
               src="https://images.unsplash.com/photo-1559813617-143436a1f5af" />
              <div className="absolute inset-0 bg-gradient-to-t from-green-800/40 to-transparent"></div>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="absolute -bottom-6 -right-6 bg-yellow-400 text-green-900 p-4 rounded-xl shadow-lg text-center"
            >
              <Package className="w-8 h-8 mx-auto mb-1" />
              <span className="font-bold">4L+</span>
              <p className="text-xs">Pronto para Coleta!</p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-gray-700"
          >
            <p className="text-2xl font-semibold mb-4">
              Separe seu óleo usado em garrafas PET.
            </p>
            <p className="text-lg mb-8 leading-relaxed">
              Quando tiver <span className="font-bold text-green-600">4 litros ou mais</span>, você já pode solicitar a coleta diretamente no seu endereço! É fácil, prático e você ajuda o planeta.
            </p>
            <motion.a
              href="https://wa.me/5581988779497"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                className="bg-green-500 hover:bg-green-600 text-white font-bold text-lg px-10 py-6 rounded-full pulse-green group transition-all duration-300 w-full sm:w-auto"
              >
                <Send className="mr-2 w-5 h-5" />
                Agendar coleta residencial
              </Button>
            </motion.a>
            <p className="mt-4 text-sm text-gray-500">
              Ao clicar, você será redirecionado para o WhatsApp.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ResidentialCampaignSection;