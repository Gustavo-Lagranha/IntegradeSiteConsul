import React from 'react';
import { Link } from 'react-router-dom';

const values = [
  {
    title: 'Especialização',
    description:
      'Foco total em controle patrimonial, inventário e avaliações — domínio técnico profundo do segmento.',
  },
  {
    title: 'Confiabilidade',
    description:
      'Processos auditáveis, laudos técnicos e dados confiáveis para a tomada de decisão.',
  },
  {
    title: 'Inovação',
    description:
      'Uso de RFID, QR-Code e código de barras integrados a plataformas digitais modernas.',
  },
  {
    title: 'Compromisso',
    description:
      'Atendimento próximo, prazos cumpridos e soluções desenhadas para gerar resultado real.',
  },
];

const clientSegments = [
  'Indústrias e multinacionais',
  'Redes de varejo e franquias',
  'Instituições de ensino',
  'Órgãos públicos e prefeituras',
  'Hospitais e clínicas',
  'Empresas de serviços e TI',
];

export default function Sobre() {
  return (
    <div>
      <section className="border-b border-slate-800 bg-gradient-to-br from-slate-950 via-slate-900 to-brand-deep">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <span className="text-xs font-semibold uppercase tracking-wider text-brand-light">
            Sobre nós
          </span>
          <h1 className="mt-4 max-w-3xl text-4xl font-bold text-white md:text-5xl">
            Especialistas em controle patrimonial e avaliações
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-slate-300">
            A Integrade Consulting é uma empresa especializada em controle
            patrimonial e avaliações, com uma solução completa para todo o
            segmento. Atuamos desde a elaboração de plaquetas de patrimônio e
            fornecimento de equipamentos até inventários, avaliações, serviços
            contábeis e o desenvolvimento de sistemas, softwares e aplicativos.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-start">
          <div>
            <h2 className="text-3xl font-bold text-white">Nossa história</h2>
            <div className="mt-6 space-y-5 text-slate-400">
              <p>
                Nascemos com o propósito de simplificar e profissionalizar a
                gestão patrimonial das organizações brasileiras. Reunimos em um
                único parceiro todas as competências necessárias: identificação,
                tecnologia, contabilidade e avaliação de ativos.
              </p>
              <p>
                Ao longo do tempo, consolidamos uma metodologia própria que une
                hardware, software e serviços especializados, permitindo atender
                desde pequenas operações até grandes parques de ativos
                distribuídos por todo o país.
              </p>
              <p>
                Nossa atuação é orientada por tecnologia de ponta — com destaque
                para RFID, QR-Code e Código de Barras — e por um rigoroso padrão
                de qualidade técnica e contábil.
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-8">
            <h3 className="text-lg font-semibold text-white">
              Nossa solução completa inclui
            </h3>
            <ul className="mt-6 space-y-3">
              {[
                'Plaquetas de patrimônio e identificação',
                'Equipamentos, dispositivos e impressoras',
                'Serviços de inventário físico e patrimonial',
                'Avaliação de ativos e laudos técnicos',
                'Serviços contábeis especializados',
                'Sistemas, softwares e aplicativos',
                'Suporte a RFID, QR-Code e Código de Barras',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-slate-300">
                  <span className="mt-0.5 text-brand-light">✔</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Link
              to="/solucoes"
              className="mt-8 inline-flex rounded-lg bg-brand px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-dark"
            >
              Ver todas as soluções
            </Link>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-800 bg-slate-900/40">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <h2 className="text-3xl font-bold text-white">Nossos valores</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-xl border border-slate-800 bg-slate-950 p-6"
              >
                <h3 className="text-base font-semibold text-brand-light">
                  {value.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-400">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="text-3xl font-bold text-white">
          Segmentos que atendemos
        </h2>
        <p className="mt-4 max-w-2xl text-slate-400">
          Empresas de diversos setores confiam na Integrade Consulting para
          controlar, avaliar e proteger seus ativos.
        </p>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {clientSegments.map((segment) => (
            <div
              key={segment}
              className="flex items-center gap-3 rounded-xl border border-slate-800 bg-slate-900/60 px-6 py-5 text-sm text-slate-300"
            >
              <span className="h-2 w-2 rounded-full bg-brand-light" />
              {segment}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
