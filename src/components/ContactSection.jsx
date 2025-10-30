import React, { useState } from 'react';
import { SectionTitle } from '../ui/SectionTitle.jsx';
import { Card } from '../ui/Card.jsx';
import { FormInput } from '../ui/FormInput.jsx';

const ContactSection = () => {
  const [nome, setNome] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [email, setEmail] = useState('');
  const [resumo, setResumo] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isMaintenance, setIsMaintenance] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsSubmitting(true);
    setIsMaintenance(false);

    setTimeout(() => {
      setIsMaintenance(true);
      
      setTimeout(() => {
        setIsMaintenance(false);
        setIsSubmitting(false);
      }, 5000); 

    }, 500);
  };

  return (
    <section id="contato" className="bg-gray-900 py-24 md:py-32">
      <div className="container mx-auto grid max-w-6xl grid-cols-1 gap-16 px-4 lg:grid-cols-2">
        
        <div>
          <SectionTitle title="Vamos conversar" />
          <p className="mt-6 text-lg text-gray-400">
            Consulta gratuita de 15 minutos. Sem promessa milagrosa. Se fizer
            sentido, seguimos. Se não, você sai com clareza e 3 ações práticas.
          </p>
          <ul className="mt-8 space-y-4 text-gray-400">
            <li className="flex items-center">
              <strong className="mr-2 text-white">E-mail:</strong>
              felipe@agenciatomorrow.com
            </li>
            <li className="flex items-center">
              <strong className="mr-2 text-white">WhatsApp:</strong>
              (35) 98446-8504
            </li>
            <li className="flex items-center">
              <strong className="mr-2 text-white">Horário:</strong>
              Seg. a Sex. • 08h às 18h
            </li>
          </ul>
        </div>

        <form onSubmit={handleSubmit} className="w-full">
          <Card className="p-8">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="sm:col-span-1">
                <FormInput
                  id="nome"
                  label="Nome"
                  required
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                />
              </div>
              <div className="sm:col-span-1">
                <FormInput
                  id="whatsapp"
                  label="WhatsApp"
                  type="tel"
                  required
                  value={whatsapp}
                  onChange={(e) => setWhatsapp(e.target.value)}
                />
              </div>
              <div className="sm:col-span-2">
                <FormInput
                  id="email"
                  label="E-mail"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="resumo"
                  className="mb-2 block text-sm font-semibold text-white"
                >
                  Resumo do momento (Opcional)
                </label>
                <textarea
                  id="resumo"
                  name="resumo"
                  rows="4"
                  className="w-full rounded-md border border-gray-700 bg-gray-800 px-4 py-3 text-white placeholder-gray-500 focus:border-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-600"
                  value={resumo}
                  onChange={(e) => setResumo(e.target.value)}
                ></textarea>
              </div>
            </div>

            {isMaintenance && (
              <div className="mt-6 rounded-md bg-yellow-600 p-3 text-center text-white font-bold">
                ⚠️ Serviço em Manutenção. Por favor, entre em contato direto pelo WhatsApp!
              </div>
            )}
            
            <button
              type="submit"
              className="mt-8 w-full rounded-md bg-orange-600 px-6 py-3 text-base font-bold text-gray-900 transition-all duration-300 hover:bg-orange-500 transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Verificando...' : 'Quero a Consulta Gratuita'}
            </button>
          </Card>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;