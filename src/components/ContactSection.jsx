import React from 'react';
import { SectionTitle } from '../ui/SectionTitle';
import { Card } from '../ui/Card';
import { FormInput } from '../ui/FormInput';

const ContactSection = () => (
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

      <form action="#" method="POST" className="w-full">
        <Card className="p-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="sm:col-span-1">
              <FormInput id="nome" label="Nome" required />
            </div>
            <div className="sm:col-span-1">
              <FormInput id="whatsapp" label="WhatsApp" type="tel" required />
            </div>
            <div className="sm:col-span-2">
              <FormInput id="email" label="E-mail" type="email" required />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="resumo" className="mb-2 block text-sm font-semibold text-white">
                Resumo do momento (Opcional)
              </label>
              <textarea
                id="resumo"
                name="resumo"
                rows="4"
                className="w-full rounded-md border border-gray-700 bg-gray-800 px-4 py-3 text-white placeholder-gray-500 focus:border-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-600"
              ></textarea>
            </div>
          </div>
          <button
            type="submit"
            className="mt-8 w-full rounded-md bg-orange-600 px-6 py-3 text-base font-bold text-gray-900 transition-all duration-300 hover:bg-orange-500 transform hover:-translate-y-0.5"
          >
            Quero a Consulta Gratuita
          </button>
        </Card>
      </form>
    </div>
  </section>
);

export default ContactSection;
