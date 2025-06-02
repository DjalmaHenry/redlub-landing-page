import React from 'react';
import { motion } from 'framer-motion';
import { Youtube } from 'lucide-react';

const VideoSection = () => {
  const videoId = 'V0oI9gAC0SE'; 

  return (
    <section className="section-padding bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block p-3 bg-red-100 rounded-full mb-4">
            <Youtube className="w-10 h-10 text-red-500" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 gradient-text">
            🎥 Como é feita a coleta?
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Assista ao vídeo e entenda o processo de coleta, o impacto no meio ambiente e como sua contribuição faz a diferença.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl hover-lift">
            <iframe
              src={`https://www.youtube.com/embed/${videoId}`}
              title="Vídeo Educativo sobre Coleta de Óleo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
        </motion.div>
        
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-8 text-gray-600"
        >
          Informação é o primeiro passo para a mudança. Compartilhe!
        </motion.p>
      </div>
    </section>
  );
};

export default VideoSection;