import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/components/ui/use-toast';
import { Send, MapPin, Phone, Mail } from 'lucide-react';

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    quantity: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      const submissions = JSON.parse(localStorage.getItem('oilCollectionSubmissions') || '[]');
      const newSubmission = {
        ...formData,
        id: Date.now(),
        submittedAt: new Date().toISOString()
      };
      submissions.push(newSubmission);
      localStorage.setItem('oilCollectionSubmissions', JSON.stringify(submissions));

      toast({
        title: "Agendamento enviado com sucesso!",
        description: "Nossa equipe entrará em contato em até 24 horas para confirmar a coleta.",
      });

      setFormData({
        name: '',
        email: '',
        phone: '',
        address: '',
        quantity: ''
      });
    } catch (error) {
      toast({
        title: "Erro ao enviar agendamento",
        description: "Tente novamente em alguns minutos.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Telefone',
      content: '(11) 9999-9999',
      color: 'blue'
    },
    {
      icon: Mail,
      title: 'E-mail',
      content: 'contato@reciclaoleo.com.br',
      color: 'green'
    },
    {
      icon: MapPin,
      title: 'Atendimento',
      content: 'Grande São Paulo',
      color: 'purple'
    }
  ];

  return (
    <section id="contact-form" className="section-padding bg-gradient-to-br from-green-500 to-green-600">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
            Agende sua coleta gratuita
          </h2>
          <p className="text-xl text-green-100 max-w-3xl mx-auto">
            Preencha o formulário e nossa equipe entrará em contato para agendar a coleta
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="text-white">
              <h3 className="text-2xl font-bold mb-6">Entre em contato</h3>
              <p className="text-green-100 mb-8 leading-relaxed">
                Estamos aqui para ajudar você a fazer a diferença. Nossa equipe está pronta para 
                agendar sua coleta gratuita de óleo de cozinha usado.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-4 text-white"
                >
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <info.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-semibold">{info.title}</div>
                    <div className="text-green-100">{info.content}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white"
            >
              <h4 className="font-bold mb-3">Por que escolher nosso serviço?</h4>
              <ul className="space-y-2 text-green-100">
                <li>✓ Coleta 100% gratuita</li>
                <li>✓ Agendamento flexível</li>
                <li>✓ Equipe especializada</li>
                <li>✓ Certificado de destinação</li>
              </ul>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="border-0 shadow-2xl bg-white">
              <CardHeader>
                <CardTitle className="text-2xl text-center gradient-text">
                  Formulário de Agendamento
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="text-gray-700 font-medium">
                      Nome completo *
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="mt-2"
                      placeholder="Seu nome completo"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-gray-700 font-medium">
                      E-mail *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="mt-2"
                      placeholder="seu@email.com"
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone" className="text-gray-700 font-medium">
                      Telefone *
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="mt-2"
                      placeholder="(11) 99999-9999"
                    />
                  </div>

                  <div>
                    <Label htmlFor="address" className="text-gray-700 font-medium">
                      Endereço completo *
                    </Label>
                    <Textarea
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      required
                      className="mt-2"
                      placeholder="Rua, número, bairro, cidade, CEP"
                      rows={3}
                    />
                  </div>

                  <div>
                    <Label htmlFor="quantity" className="text-gray-700 font-medium">
                      Quantidade estimada de óleo *
                    </Label>
                    <Input
                      id="quantity"
                      name="quantity"
                      type="text"
                      value={formData.quantity}
                      onChange={handleInputChange}
                      required
                      className="mt-2"
                      placeholder="Ex: 2 litros, 5 garrafas PET"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-3 text-lg rounded-lg transition-all duration-300"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center">
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Enviando...
                      </div>
                    ) : (
                      <div className="flex items-center justify-center">
                        <Send className="w-5 h-5 mr-2" />
                        Enviar Agendamento
                      </div>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;