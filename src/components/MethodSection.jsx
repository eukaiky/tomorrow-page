import React from 'react';
import { SectionTitle } from '../ui/SectionTitle';
import { Card } from '../ui/Card';

const MethodSection = () => {
  const methods = [
    {
      number: '1',
      title: 'Raio-X de Percepção',
      description:
        'Cirurgia em como você executa hoje. Diagnóstico direto, sem ego ferido, com plano prático de correção (vídeo de 30–40min).',
    },
    {
      number: '2',
      title: 'Guia Estratégico',
      description:
        'Mensagem central, narrativa, tom de voz, visual e diretrizes. Tudo documentado e pronto para execução (manual vivo).',
    },
    {
      number: '3',
      title: 'Funil 3A3R (6 meses)',
      description:
        'Agenda, Autoridade, Alcance → Reforço, Ritmo, Receita. Cadência semanal que dá previsibilidade.',
    },
    {
      number: '4',
      title: 'Execução Total (All-In)',
      description:
        'Branding, conteúdo, mídia, páginas, criativos e acompanhamento. Sem novela. Entregamos o projeto completo fim a fim.',
    },
  ];

  return (
    <section id="metodo" className="bg-gray-900 py-24 md:py-32">
      <div className="container mx-auto max-w-6xl px-4">
        <SectionTitle
          title="Método — Sistema de Performance Tomorrow"
          subtitle="O caminho direto: clareza → percepção → autoridade → receita. Sem jargão. É “vamos fazer isso, isso e aquilo”. Ponto."
        />
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2">
          {methods.map((method) => (
            <Card key={method.number}>
              <span className="block text-3xl font-bold text-orange-600">
                {method.number}
              </span>
              <h3 className="mt-4 text-2xl font-semibold text-white">
                {method.title}
              </h3>
              <p className="mt-4 text-base text-gray-400">
                {method.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MethodSection;
