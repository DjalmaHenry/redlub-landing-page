import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Droplets, Fuel, Shield, Users } from 'lucide-react';

const BenefitsSection = () => {
  const benefits = [
    {
      icon: Shield,
      title: 'Evita entupimentos na rede de esgoto',
      description: 'Protege o sistema de saneamento da sua cidade',
      color: 'blue'
    },
    {
      icon: Fuel,
      title: 'Contribui para a produção de biodiesel',
      description: 'Transforma resíduo em combustível renovável',
      color: 'green'
    },
    {
      icon: Droplets,
      title: 'Ajuda a preservar recursos hídricos',
      description: 'Mantém rios e oceanos livres de poluição',
      color: 'cyan'
    },
    {
      icon: Users,
      title: 'Promove a economia circular e gera empregos verdes',
      description: 'Cria oportunidades sustentáveis na comunidade',
      color: 'purple'
    }
  ];

  const colorClasses = {
    blue: 'from-blue-500 to-blue-600',
    green: 'from-green-500 to-green-600',
    cyan: 'from-cyan-500 to-cyan-600',
    purple: 'from-purple-500 to-purple-600'
  };

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
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 gradient-text">
            Benefícios para você e para o planeta
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Cada gota de óleo reciclado gera impactos positivos que se multiplicam por toda a sociedade
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full text-center border-0 shadow-xl bg-gradient-to-br from-white to-gray-50 hover:shadow-2xl transition-all duration-300">
                <CardHeader className="pb-4">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                    className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-r ${colorClasses[benefit.color]} flex items-center justify-center mb-4 shadow-lg`}
                  >
                    <benefit.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <CardTitle className="text-lg font-bold text-gray-800">
                    {benefit.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl p-8 text-white text-center"
        >
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-4xl font-bold mb-2">25.000L</div>
              <div className="text-green-100">água preservada por litro</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">100%</div>
              <div className="text-green-100">reciclável</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">0</div>
              <div className="text-green-100">custo para você</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BenefitsSection;