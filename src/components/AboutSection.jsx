import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { AlertTriangle, Droplets, Fish, TreePine } from 'lucide-react';

const AboutSection = () => {
  const impacts = [
    {
      icon: Droplets,
      title: 'Poluição da Água',
      description: 'Contamina rios e oceanos'
    },
    {
      icon: Fish,
      title: 'Vida Aquática',
      description: 'Prejudica peixes e ecossistemas'
    },
    {
      icon: TreePine,
      title: 'Solo Contaminado',
      description: 'Degrada a qualidade do solo'
    },
    {
      icon: AlertTriangle,
      title: 'Tubulações',
      description: 'Causa entupimentos graves'
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-slate-50 to-green-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 gradient-text">
              Por que reciclar o óleo de cozinha?
            </h2>
            
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              O descarte inadequado de óleo pode causar sérios danos ambientais, como entupimento de tubulações e poluição de corpos d'água. Reciclar é simples e faz toda a diferença para o nosso planeta.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {impacts.map((impact, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="p-4 border-red-200 bg-red-50/50 hover:bg-red-100/50 transition-colors">
                    <CardContent className="p-0">
                      <impact.icon className="w-8 h-8 text-red-500 mb-2" />
                      <h4 className="font-semibold text-red-800 mb-1">{impact.title}</h4>
                      <p className="text-sm text-red-600">{impact.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl hover-lift">
              <img  
                className="w-full h-96 object-cover"
                alt="Impacto ambiental do óleo descartado incorretamente"
               src="https://images.unsplash.com/photo-1676661589086-bcf052b8b766" />
              <div className="absolute inset-0 bg-gradient-to-t from-red-900/30 to-transparent"></div>
            </div>
            
            {/* Warning badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="absolute -bottom-4 -left-4 bg-red-500 text-white rounded-xl p-4 shadow-lg"
            >
              <AlertTriangle className="w-6 h-6 mb-1" />
              <div className="text-sm font-bold">PERIGO</div>
              <div className="text-xs">Descarte incorreto</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;