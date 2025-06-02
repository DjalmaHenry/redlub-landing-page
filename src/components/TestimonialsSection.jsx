import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Quote, Star } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'João Silva',
      role: 'Síndico de condomínio',
      content: 'Desde que começamos a reciclar com vocês, nossa comunidade está mais consciente e engajada. O processo é muito simples e eficiente.',
      rating: 5,
      avatar: 'Homem de meia idade sorrindo, síndico de condomínio'
    },
    {
      name: 'Maria Santos',
      role: 'Dona de casa',
      content: 'A coleta foi rápida e eficiente. Recomendo a todos! É muito gratificante saber que estou contribuindo para um planeta melhor.',
      rating: 5,
      avatar: 'Mulher sorridente em casa, dona de casa feliz'
    },
    {
      name: 'Carlos Oliveira',
      role: 'Proprietário de restaurante',
      content: 'Excelente serviço! Agora todo o óleo do nosso restaurante tem um destino sustentável. A equipe é muito profissional.',
      rating: 5,
      avatar: 'Chef de cozinha profissional sorrindo'
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-blue-50 to-green-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 gradient-text">
            O que dizem nossos parceiros
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Histórias reais de pessoas que fazem a diferença todos os dias
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-0 shadow-xl bg-white hover-lift relative overflow-hidden">
                <div className="absolute top-4 right-4 text-green-200">
                  <Quote className="w-8 h-8" />
                </div>
                
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <p className="text-gray-700 mb-6 leading-relaxed italic">
                    "{testimonial.content}"
                  </p>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden shadow-md">
                      <img  
                        className="w-full h-full object-cover"
                        alt={`Foto de ${testimonial.name}`}
                       src="https://images.unsplash.com/photo-1649399045831-40bfde3ef21d" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-800">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">{testimonial.role}</div>
                    </div>
                  </div>
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
          className="mt-16 text-center"
        >
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="text-3xl font-bold text-green-600 mb-2">500+</div>
              <div className="text-gray-600">Famílias atendidas</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="text-3xl font-bold text-green-600 mb-2">10.000L</div>
              <div className="text-gray-600">Óleo coletado</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="text-3xl font-bold text-green-600 mb-2">4.9★</div>
              <div className="text-gray-600">Avaliação média</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;