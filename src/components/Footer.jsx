import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Linkedin, Mail, Phone, Recycle } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Instagram, href: 'https://www.instagram.com/redlub.recioleo/', label: 'Instagram' },
    { icon: Linkedin, href: 'https://www.linkedin.com/company/redlub-recioleo/', label: 'LinkedIn' }
  ];

  // const footerLinks = [
  //   { text: 'Política de Privacidade', href: '#' },
  //   { text: 'Termos de Uso', href: '#' },
  //   { text: 'Contato', href: '#contact-form' }
  // ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col justify-between items-center gap-8 sm:flex-row">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center">
                <Recycle className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold">RedLub Recioleo</span>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              Cada gota de óleo reciclado é um passo em direção a um futuro mais sustentável para todos.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone className="w-5 h-5 text-green-400" />
                <span>(81) 98877-9497</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="w-5 h-5 text-green-400" />
                <span>contato@redlub.com.br</span>
              </div>
            </div>
          </motion.div>

          {/* Links */}
          {/* <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <span className="text-lg font-semibold mb-6 block">Links Úteis</span>
            <ul className="space-y-3">
              {footerLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-green-400 transition-colors duration-200"
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div> */}

          {/* Social Media */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <span className="text-lg font-semibold mb-6 block">Redes Sociais</span>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors duration-200"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
            
            {/* Environmental impact */}
            <div className="mt-8 w-80 bg-green-900/30 rounded-lg p-4">
              <span className="text-sm font-semibold text-green-400 block mb-2">
                Impacto Ambiental
              </span>
              <p className="text-xs text-gray-300">
                Juntos já preservamos mais de 250.000 litros de água através da reciclagem responsável.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 mt-12 pt-8 text-center"
        >
          <p className="text-gray-400 text-sm">
            © 2025 RedLub Recioleo. Todos os direitos reservados. Desenvolvido por Difinity Labs.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;