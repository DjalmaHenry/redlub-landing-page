import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Award, DollarSign, Heart, Leaf } from 'lucide-react';

const BusinessBenefitsSection = () => {
  const benefits = [
    {
      icon: DollarSign,
      title: 'Remuneração',
      description: 'A partir de 50 litros, receba um valor proporcional ao volume de óleo destinado corretamente.',
      color: 'green'
    },
    {
      icon: Heart,
      title: 'Doação',
      description: 'Opção de doar o valor para o Hospital de Câncer de Pernambuco como ação social.',
      color: 'pink'
    },
    {
      icon: Award,
      title: 'Certificado',
      description: 'Receba um certificado oficial para apresentar à Vigilância Sanitária e aos seus clientes.',
      color: 'blue'
    },
    {
      icon: Leaf,
      title: 'Reconhecimento',
      description: 'Destaque-se como uma empresa comprometida com práticas sustentáveis.',
      color: 'teal'
    }
  ];

  const colorClasses = {
    green: { bg: 'bg-green-100', text: 'text-green-600', iconBg: 'bg-green-500' },
    pink: { bg: 'bg-pink-100', text: 'text-pink-600', iconBg: 'bg-pink-500' },
    blue: { bg: 'bg-blue-100', text: 'text-blue-600', iconBg: 'bg-blue-500' },
    teal: { bg: 'bg-teal-100', text: 'text-teal-600', iconBg: 'bg-teal-500' },
  };

  return (
    <section className="section-padding bg-gradient-to-br from-slate-50 to-gray-100">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 gradient-text">
            📋 Destaques da Coleta Empresarial
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Vantagens exclusivas para empresas que se preocupam com o futuro do planeta e da comunidade.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              <Card className={`h-full text-center border-0 shadow-xl ${colorClasses[benefit.color].bg} hover:shadow-2xl transition-all duration-300 overflow-hidden`}>
                <div className={`h-2 ${colorClasses[benefit.color].iconBg}`}></div>
                <CardHeader className="pb-4 pt-8">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                    className={`w-16 h-16 mx-auto rounded-full ${colorClasses[benefit.color].iconBg} flex items-center justify-center mb-4 shadow-lg`}
                  >
                    <benefit.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <CardTitle className={`text-xl font-bold ${colorClasses[benefit.color].text}`}>
                    {benefit.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className={`${colorClasses[benefit.color].text} opacity-90 leading-relaxed`}>
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessBenefitsSection;