import React from 'react';
import { SectionTitle } from '../ui/SectionTitle';
import { Card } from '../ui/Card';
import { CtaButton } from '../ui/CtaButton';

const StepsSection = () => (
  <section id="etapas" className="bg-gray-900 py-24 md:py-32">
    <div className="container mx-auto max-w-6xl px-4">
      <SectionTitle
        title="Começo simples, impacto rápido"
        subtitle="As etapas do nosso trabalho (All-In). Sem vender “pacotinhos”, são fases do mesmo projeto."
      />
      <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
        <Card className="h-full">
          <div className="flex h-full flex-col">
            <div>
              <h3 className="text-2xl font-semibold text-white">Etapa 1: Setup Rápido</h3>
              <p className="mt-4 text-base text-gray-400">
                Início em até 5 dias. Em 20 dias já temos resultados valiosos. Seu
                investimento é otimizado desde o D1.
              </p>
            </div>
            <div className="mt-auto pt-6">
              <CtaButton href="#contato" variant="secondary" className="w-full">
                Começar Aqui
              </CtaButton>
            </div>
          </div>
        </Card>
        <Card className="h-full">
          <div className="flex h-full flex-col">
            <div>
              <h3 className="text-2xl font-semibold text-white">Etapa 2: Guia Estratégico</h3>
              <p className="mt-4 text-base text-gray-400">
                Mensagem central e narrativa, diretrizes visuais e de conteúdo, e um
                plano de 90 dias claro.
              </p>
            </div>
            <div className="mt-auto pt-6">
              <CtaButton href="#metodo" variant="secondary" className="w-full">
                Entender o Guia
              </CtaButton>
            </div>
          </div>
        </Card>
        <Card className="h-full">
          <div className="flex h-full flex-col">
            <div>
              <h3 className="text-2xl font-semibold text-white">Etapa 3: Funil 3A3R</h3>
              <p className="mt-4 text-base text-gray-400">
                Cadência semanal de autoridade, monitoramento de mídia e criação de
                anúncios e páginas cirúrgicas.
              </p>
            </div>
            <div className="mt-auto pt-6">
              <CtaButton href="#funil" variant="secondary" className="w-full">
                Ver o Funil
              </CtaButton>
            </div>
          </div>
        </Card>
      </div>
    </div>
  </section>
);

export default StepsSection;

