import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Building, Send, ShieldCheck, DollarSign, Heart, Award, Leaf, Truck, PhoneCall, FileText as FileIcon } from 'lucide-react';

const BusinessCampaignSection = () => {
  const benefits = [
    {
      icon: DollarSign,
      title: 'Remuneração Atrativa',
      description: 'Receba um valor justo pelo seu óleo usado.',
      color: 'green'
    },
    {
      icon: Heart,
      title: 'Apoio Social',
      description: 'Doe o valor ao Hospital de Câncer (HCP).',
      color: 'pink'
    },
    {
      icon: Award,
      title: 'Certificação Oficial',
      description: 'Comprove sua responsabilidade ambiental.',
      color: 'blue'
    },
    {
      icon: Leaf,
      title: 'Imagem Sustentável',
      description: 'Destaque-se no mercado como empresa verde.',
      color: 'teal'
    }
  ];

  const colorClasses = {
    green: { bg: 'bg-green-100', text: 'text-green-700', iconBg: 'bg-green-500' },
    pink: { bg: 'bg-pink-100', text: 'text-pink-700', iconBg: 'bg-pink-500' },
    blue: { bg: 'bg-blue-100', text: 'text-blue-700', iconBg: 'bg-blue-500' },
    teal: { bg: 'bg-teal-100', text: 'text-teal-700', iconBg: 'bg-teal-500' },
  };

  const flowchartSteps = [
    { icon: PhoneCall, label: 'Contato Inicial', description: 'Sua empresa entra em contato conosco.' },
    { icon: FileIcon, label: 'Agendamento', description: 'Definimos a melhor data e horário para coleta.' },
    { icon: Truck, label: 'Coleta Profissional', description: 'Nossa equipe retira o óleo com segurança.' },
    { icon: Award, label: 'Certificação', description: 'Emitimos o certificado de destinação correta.' },
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-gray-50 to-slate-100">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block p-3 bg-emerald-100 rounded-full mb-4">
            <Building className="w-10 h-10 text-emerald-600" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 gradient-text">
            Parceria Empresarial Sustentável
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Transforme o resíduo da sua empresa em impacto positivo. Oferecemos coleta especializada e benefícios exclusivos.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Main Content & Benefits */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-3 text-gray-700"
          >
            <h3 className="text-3xl font-semibold mb-6 text-emerald-700">
              Sua empresa pode liderar a mudança!
            </h3>
            <p className="text-lg mb-6 leading-relaxed">
              Fornecemos <span className="font-bold text-emerald-600">reservatórios adequados</span> para o armazenamento seguro do óleo de cozinha usado em seu estabelecimento.
            </p>
            <p className="text-lg font-semibold mb-2">A partir de <span className="text-emerald-600">50 litros</span>, sua empresa ganha:</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className={`h-full text-left border-0 shadow-lg ${colorClasses[benefit.color].bg} hover:shadow-xl transition-all duration-300 overflow-hidden`}>
                    <div className={`h-1.5 ${colorClasses[benefit.color].iconBg}`}></div>
                    <CardHeader className="flex flex-row items-center space-x-3 pb-3 pt-5 px-5">
                      <div className={`p-2 rounded-full ${colorClasses[benefit.color].iconBg}`}>
                        <benefit.icon className="w-5 h-5 text-white" />
                      </div>
                      <CardTitle className={`text-lg font-semibold ${colorClasses[benefit.color].text}`}>
                        {benefit.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="px-5 pb-5">
                      <p className={`text-sm ${colorClasses[benefit.color].text} opacity-90`}>
                        {benefit.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <motion.a
              href="https://api.whatsapp.com/message/GBICHKHVYM4KK1"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-lg px-10 py-6 rounded-full pulse-green group transition-all duration-300 w-full sm:w-auto"
              >
                <Send className="mr-2 w-5 h-5" />
                Solicitar Coleta Empresarial
              </Button>
            </motion.a>
          </motion.div>

          {/* Vigilance Card & Flowchart */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-8"
          >
            <Card className="bg-gradient-to-br from-slate-100 to-slate-200 border-slate-300 shadow-xl hover-lift">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-2">
                  <ShieldCheck className="w-8 h-8 text-emerald-600" />
                  <CardTitle className="text-xl font-bold text-emerald-700">Conformidade Garantida</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="text-slate-700 space-y-3">
                <p className="leading-relaxed">
                  A Vigilância Sanitária exige o descarte adequado do óleo. Com a RedLub, sua empresa:
                </p>
                <ul className="list-disc list-inside space-y-2 pl-2 text-sm">
                  <li>Atende todas as normas ambientais.</li>
                  <li>Evita multas e passivos ambientais.</li>
                  <li>Fortalece sua imagem com responsabilidade socioambiental.</li>
                </ul>
              </CardContent>
            </Card>

            {/* Flowchart */}
            <div>
              <h4 className="text-xl font-semibold text-emerald-700 mb-4 text-center lg:text-left">Nosso Processo de Coleta:</h4>
              <div className="space-y-4 relative pl-6">
                {/* Vertical line */}
                <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-emerald-300 ml-[7px]"></div>
                
                {flowchartSteps.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-3 relative"
                  >
                    <div className="flex-shrink-0 z-10">
                      <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center shadow-md -ml-[13px] mt-1 border-2 border-white">
                        <step.icon className="w-4 h-4 text-white" />
                      </div>
                    </div>
                    <div className="bg-white p-3 rounded-lg shadow-md flex-1 border border-emerald-100">
                      <p className="font-semibold text-emerald-600 text-sm">{step.label}</p>
                      <p className="text-xs text-gray-600">{step.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BusinessCampaignSection;