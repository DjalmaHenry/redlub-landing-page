import React from 'react';
import { motion } from 'framer-motion';
import { Award, CheckCircle } from 'lucide-react';

const CertificateSection = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block p-3 bg-yellow-100 rounded-full mb-4">
            <Award className="w-10 h-10 text-yellow-500" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 gradient-text">
            Certificado de Coleta
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Reconheça o compromisso da sua empresa com o meio ambiente e a conformidade legal.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-green-500 to-emerald-600 p-8 md:p-12 rounded-2xl shadow-2xl text-white relative overflow-hidden hover-lift"
          >
            <div className="absolute -top-8 -left-8 w-32 h-32 bg-white/10 rounded-full opacity-50"></div>
            <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-white/10 rounded-full opacity-50"></div>
            
            <div className="relative z-10 text-center">
              <div className="mb-8">
                <Award className="w-20 h-20 mx-auto text-yellow-300" />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                CERTIFICADO DE DESTINAÇÃO CORRETA
              </h3>
              <p className="text-lg md:text-xl mb-6 text-green-100">
                A empresa <span className="font-bold text-yellow-300">Sua Empresa</span>
              </p>
              <p className="text-md md:text-lg mb-8 text-green-100 leading-relaxed">
                colaborou com a destinação responsável de óleo de cozinha usado, em conformidade com as normas da Vigilância Sanitária.
              </p>
              <div className="border-t border-green-400 pt-6">
                <p className="text-xl font-semibold text-yellow-300">RedLub Reciclagem</p>
                <p className="text-sm text-green-200">Pernambuco, 2025</p>
              </div>
            </div>
            <div className="absolute top-4 right-4 p-2 bg-white/20 rounded-full">
              <CheckCircle className="w-6 h-6 text-yellow-300" />
            </div>
          </motion.div>
        </div>
        
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-8 text-gray-600"
        >
          Este certificado é um comprovante valioso para sua empresa.
        </motion.p>
      </div>
    </section>
  );
};

export default CertificateSection;