import React from 'react';
import { CtaButton } from '../ui/CtaButton';
import { Card } from '../ui/Card';

const Hero = () => (
  <section className="bg-gray-950 pt-16 pb-24 md:pt-24 md:pb-32" id="inicio">
    <div className="container mx-auto grid max-w-6xl grid-cols-1 gap-12 px-4 lg:grid-cols-2 lg:gap-16">
      <div className="flex flex-col justify-center gap-6">
        <span className="self-start rounded bg-orange-600 px-3 py-1 text-sm font-bold text-gray-900">
          Seja Nome, Não Número
        </span>
        <h1 className="text-4xl font-bold leading-tight tracking-tighter text-white md:text-6xl">
          Venda mais com um método simples e automático que gera resultado.
        </h1>
        <p className="text-lg text-gray-400 md:text-xl">
          Chega de virar massa no feed. O Sistema de Performance Tomorrow muda a
          percepção do seu mercado: imagem profissional, narrativa clara e
          presença que gera respeito e venda recorrente.
        </p>
        <div className="flex flex-col gap-4 sm:flex-row">
          <CtaButton href="#etapas" variant="primary" className="w-full sm:w-auto">
            Ver Etapas
          </CtaButton>
          <CtaButton href="#metodo" variant="secondary" className="w-full sm:w-auto">
            Entender o Método
          </CtaButton>
        </div>
        <span className="text-sm text-gray-500">
          Sem contrato amarrado. Começo simples, impacto rápido.
        </span>
      </div>

      <Card className="flex flex-col justify-center divide-y divide-gray-800 bg-gray-900 p-8 md:p-12">
        <div className="py-6 text-center">
          <span className="block text-5xl font-bold text-orange-600 md:text-6xl">+46%</span>
          <span className="mt-2 block text-lg text-gray-400">Taxa de Resposta</span>
        </div>
        <div className="py-6 text-center">
          <span className="block text-5xl font-bold text-orange-600 md:text-6xl">2,3x</span>
          <span className="mt-2 block text-lg text-gray-400">Leads Qualificados</span>
        </div>
        <div className="py-6 text-center">
          <span className="block text-5xl font-bold text-orange-600 md:text-6xl">-31%</span>
          <span className="mt-2 block text-lg text-gray-400">CAC (Custo de Aquisição)</span>
        </div>
      </Card>
    </div>
  </section>
);

export default Hero;
