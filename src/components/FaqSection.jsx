import React from 'react';
import { SectionTitle } from '../ui/SectionTitle.jsx';
import { Card } from '../ui/Card.jsx';
import { CtaButton } from '../ui/CtaButton.jsx';
import { FaqItem } from '../ui/FaqItem.jsx';

const FaqSection = () => {
  const faqs = [
    {
      q: 'Isso é social media?',
      a: 'Não. Postar por postar não constrói autoridade. O SPT organiza percepção, narrativa e presença. Conteúdo e anúncios são meios, não o fim.',
    },
    {
      q: 'Em quanto tempo dá pra sentir efeito?',
      a: 'Em percepção e organização, o efeito é imediato (primeiros 15-20 dias). Em leads e receita, os primeiros resultados sólidos aparecem entre 60 e 90 dias, com a maturação do Funil 3A3R.',
    },
    {
      q: 'Vocês travam contrato longo?',
      a: 'Não. Como dito na Garantia, não temos contrato de fidelidade. Acreditamos que o resultado é o que mantém o cliente, não uma cláusula.',
    },
    {
      q: 'Minha equipe toca parte da execução?',
      a: 'Sim. Nosso modelo é flexível. Podemos operar como "All-In" (fazemos tudo) ou como "Consultoria + Guia", onde treinamos e direcionamos sua equipe interna para executar o Guia Estratégico e o Funil.',
    },
  ];

  return (
    <section id="faq" className="bg-gray-950 py-24 md:py-32">
      <div className="container mx-auto grid max-w-6xl grid-cols-1 gap-16 px-4 lg:grid-cols-2 lg:items-center">
        <div className="flex flex-col justify-center">
          <SectionTitle
            title="Garantia e FAQ"
            subtitle="Sem mistério, sem contrato amarrado. Respostas diretas para cortar o caminho."
          />
          <Card className="mt-12">
            <h3 className="text-2xl font-semibold text-white">
              Sem Amarras. Cancele Quando Quiser.
            </h3>
            <p className="mt-4 text-lg text-gray-400">
              Você não fica preso por contrato. Se não fizer sentido, cancela —
              simples assim. Nosso foco é em resultado rápido e parceria de
              longo prazo baseada em confiança, não em multas.
            </p>
            <CtaButton href="#contato" variant="primary" className="mt-8 w-full sm:w-auto">
              Reservar Minha Vaga
            </CtaButton>
          </Card>
        </div>

        <div className="flex flex-col gap-4">
          {faqs.map((faq) => (
            <FaqItem key={faq.q} question={faq.q} answer={faq.a} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;