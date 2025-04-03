import React from "react";
import { motion } from "framer-motion";

export default function App() {
  return (
    <div className="font-sans bg-white text-gray-800">
      {/* Header */}
      <header className="bg-green-600 py-6">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold text-white">🌿 Recicle seu óleo de cozinha e ajude o planeta!</h1>
        </div>
      </header>

      {/* Banner principal */}
      <section className="bg-[url('/recycle-oil-bg.jpg')] bg-cover bg-center py-20">
        <div className="bg-black/50 backdrop-blur-sm py-12">
          <div className="max-w-6xl mx-auto px-6 text-center text-white">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              Transforme óleo usado em uma ação sustentável
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-lg md:text-xl"
            >
              Sua atitude ajuda a preservar o meio ambiente, evitando a contaminação de rios e mares.
            </motion.p>
            <motion.a
              href="https://wa.me/5581988779497"
              target="_blank"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="inline-block bg-red-500 hover:bg-red-600 mt-6 px-8 py-3 rounded-full font-semibold text-white shadow-lg transition"
            >
              Agendar coleta via WhatsApp
            </motion.a>
          </div>
        </div>
      </section>

      {/* Como funciona */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-8">Como funciona?</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <img src="/icon-bottle.svg" className="mx-auto h-16 mb-4" />
              <h4 className="text-xl font-semibold">1. Armazene</h4>
              <p className="text-gray-600">Guarde o óleo usado em garrafas PET fechadas.</p>
            </div>
            <div>
              <img src="/icon-whatsapp.svg" className="mx-auto h-16 mb-4" />
              <h4 className="text-xl font-semibold">2. Agende</h4>
              <p className="text-gray-600">Clique no botão acima e agende sua coleta pelo WhatsApp.</p>
            </div>
            <div>
              <img src="/icon-truck.svg" className="mx-auto h-16 mb-4" />
              <h4 className="text-xl font-semibold">3. Coleta</h4>
              <p className="text-gray-600">Nossa equipe coleta o óleo em sua residência gratuitamente.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Impacto ambiental */}
      <section className="bg-green-50 py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-4">Por que reciclar óleo?</h3>
          <p className="text-gray-700 mb-8">
            Cada litro de óleo descartado inadequadamente pode contaminar até 25 mil litros de água.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <img src="/contaminacao-rio.jpg" alt="Contaminação de água" className="rounded-lg shadow-md" />
            <img src="/reciclagem-oleo.jpg" alt="Reciclagem de óleo" className="rounded-lg shadow-md" />
          </div>
          <div className="flex justify-center gap-4 mt-8">
            <img src="/icon-water.svg" alt="Água" className="h-12 w-12" />
            <img src="/icon-plant.svg" alt="Planta" className="h-12 w-12" />
            <img src="/icon-fish.svg" alt="Peixe" className="h-12 w-12" />
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-8">Veja o que dizem nossos parceiros!</h3>
          <div className="overflow-x-auto pb-4">
            <div className="inline-flex gap-4">
              {[
                {
                  texto: "Achei fácil a coleta, vieram rápido e o pessoal foi educado.",
                  nome: "André Lima",
                  local: "Recife",
                },
                {
                  texto: "Bom serviço, antes jogava fora no ralo, agora sei o mal que fazia.",
                  nome: "Larissa Santos",
                  local: "Jaboatão dos Guararapes",
                },
                {
                  texto: "Serviço prático, muito importante ajudar o meio ambiente assim.",
                  nome: "Roberto Silva",
                  local: "Olinda",
                },
                {
                  texto: "Nunca tinha reciclado antes, agora já virei parceiro fixo.",
                  nome: "Renata Costa",
                  local: "Paulista",
                },
                {
                  texto: "Vi no Instagram e resolvi testar. Deu certo, gostei da iniciativa.",
                  nome: "Lucas Fernandes",
                  local: "Camaragibe",
                },
                {
                  texto: "Ótima ideia, reciclar óleo é simples e ajuda muito. Recomendo.",
                  nome: "Marina Almeida",
                  local: "São Lourenço da Mata",
                },
              ].map((dep, i) => (
                <div key={i} className="min-w-[300px] bg-white rounded-lg shadow-lg p-6">
                  <p className="italic text-gray-700 mb-4">"{dep.texto}"</p>
                  <h5 className="font-bold text-gray-900">{dep.nome}</h5>
                  <p className="text-sm text-gray-500">{dep.local}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="bg-green-600 py-16 px-6">
        <div className="max-w-5xl mx-auto text-center text-white">
          <h3 className="text-4xl font-bold mb-4">Pronto para fazer sua parte?</h3>
          <p className="text-lg">Entre em contato agora e agende sua coleta gratuita.</p>
          <a
            href="https://wa.me/5581988779497"
            target="_blank"
            className="inline-block bg-red-500 hover:bg-red-600 mt-6 px-8 py-3 rounded-full font-semibold text-white shadow-lg transition"
          >
            Chamar no WhatsApp
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-center text-white py-6">
        <p>© 2025 RedLub Recioleo. Todos os direitos reservados.</p>
        <p className="text-sm">Contato: (81) 98877-9497 | contato@redlub.com.br</p>
      </footer>
    </div>
  );
}