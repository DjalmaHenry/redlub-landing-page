import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Grape as Bottle, FileText, Phone } from 'lucide-react';

const HowItWorksSection = () => {
  const steps = [
    {
      icon: Bottle,
      number: '01',
      title: 'Armazene o óleo usado em uma garrafa PET',
      description: 'Deixe o óleo esfriar e despeje em uma garrafa PET limpa. Feche bem para evitar vazamentos.'
    },
    {
      icon: FileText,
      number: '02',
      title: 'Preencha o formulário abaixo',
      description: 'Informe seus dados e a quantidade estimada de óleo para que possamos organizar a coleta.'
    },
    {
      icon: Phone,
      number: '03',
      title: 'Nossa equipe entrará em contato para agendar a coleta',
      description: 'Entraremos em contato em até 24h para agendar o melhor horário para a coleta gratuita.'
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-green-50 to-blue-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 gradient-text">
            Como agendar sua coleta
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Um processo simples e rápido que faz toda a diferença para o meio ambiente
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="border-0 shadow-lg hover-lift bg-white/80 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="relative">
                          <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center shadow-lg">
                            <step.icon className="w-8 h-8 text-white" />
                          </div>
                          <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-sm font-bold text-green-900">
                            {step.number}
                          </div>
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-800 mb-2">
                          {step.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

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
                alt="Infográfico ilustrando os passos para reciclagem de óleo"
               src="https://images.unsplash.com/photo-1579034014340-f8731da64674" />
              <div className="absolute inset-0 bg-gradient-to-t from-green-900/30 to-transparent"></div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-white rounded-xl p-4 shadow-lg border-2 border-green-200"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">3</div>
                <div className="text-sm text-gray-600">passos simples</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;