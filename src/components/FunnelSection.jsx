import React from 'react';
import { SectionTitle } from '../ui/SectionTitle';
import { Card } from '../ui/Card';

const FunnelSection = () => {
  const funnelSteps = [
    { tag: 'Etapa 1', title: 'Assimilação', description: 'O público finalmente entende quem você é e por que existe (Anúncios, copy clara, testes).' },
    { tag: 'Etapa 2', title: 'Aquisição', description: 'Interesse real. A pessoa entra no seu ecossistema (Páginas de captura, prova social, CTAs).' },
    { tag: 'Etapa 3', title: 'Ativação', description: 'O cliente compra, pois foi preparado para confiar (Copy de decisão, UX sem atrito, CRM).' },
    { tag: 'Etapa 4', title: 'Retenção', description: 'O cliente volta e continua no plano (Pós-venda ativo, calendário de valor, remarketing).' },
    { tag: 'Etapa 5', title: 'Receita', description: 'Previsibilidade e lucro constantes (LTV, CAC e payback claros; escala do que funciona).' },
    { tag: 'Etapa 6', title: 'Recomendação', description: 'Seus clientes viram embaixadores (Programa de indicação baseado em experiência).' },
  ];

  return (
    <section id="funil" className="bg-gray-950 py-24 md:py-32">
      <div className="container mx-auto max-w-6xl px-4">
        <SectionTitle
          title="Nosso Funil Proprietário: O 3A3R"
          subtitle="Seis etapas que transformam atenção em lucro previsível. Quando você organiza a percepção, o lucro vira rotina."
        />
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {funnelSteps.map((step) => (
            <Card key={step.title}>
              <span className="block text-sm font-semibold uppercase tracking-wider text-gray-500">
                {step.tag}
              </span>
              <h3 className="mt-4 text-2xl font-semibold text-white">
                {step.title}
              </h3>
              <p className="mt-4 text-base text-gray-400">
                {step.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FunnelSection;
