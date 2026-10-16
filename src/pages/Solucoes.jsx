import React from 'react';
import { Link } from 'react-router-dom';

const solutions = [
  {
    id: 'plaquetas',
    icon: '🏷️',
    title: 'Plaquetas de Patrimônio',
    description:
      'Elaboração, personalização e fornecimento de plaquetas patrimoniais e etiquetas de identificação para todo tipo de bem.',
    items: [
      'Plaquetas em aço inox, alumínio e policarbonato',
      'Etiquetas adesivas de alta durabilidade',
      'Gravação a laser, QR-Code, código de barras e RFID',
      'Personalização com logo, número de patrimônio e dados da empresa',
    ],
  },
  {
    id: 'equipamentos',
    icon: '🖨️',
    title: 'Equipamentos, Dispositivos e Impressoras',
    description:
      'Fornecimento de hardware e insumos para operações de identificação, coleta e inventário de ativos.',
    items: [
      'Impressoras térmicas de etiquetas e plaquetas',
      'Coletores de dados e dispositivos móveis',
      'Leitores RFID, QR-Code e código de barras',
      'Ribbons, etiquetas e insumos de reposição',
    ],
  },
  {
    id: 'inventario',
    icon: '📋',
    title: 'Serviços de Inventário',
    description:
      'Execução de inventário físico e patrimonial com metodologia própria, precisão e relatórios completos.',
    items: [
      'Inventário físico e patrimonial completo',
      'Conferência e conciliação contábil',
      'Relatórios de divergências e localização de bens',
      'Equipes próprias e mobilização ágil por todo o Brasil',
    ],
  },
  {
    id: 'avaliacao',
    icon: '📊',
    title: 'Avaliação de Ativos',
    description:
      'Elaboração de laudos técnicos de avaliação patrimonial para as mais diversas finalidades.',
    items: [
      'Avaliação para fins contábeis e fiscais',
      'Laudos para fins judiciais e extrajudiciais',
      'Reavaliação e depreciação de bens',
      'Laudos técnicos assinados por profissionais habilitados',
    ],
  },
  {
    id: 'contabil',
    icon: '🧮',
    title: 'Serviços Contábeis',
    description:
      'Apoio contábil especializado na gestão e no controle do patrimônio das empresas.',
    items: [
      'Gestão patrimonial e controle de bens',
      'Cálculo de depreciação e reavaliação',
      'Conformidade com normas contábeis vigentes',
      'Relatórios gerenciais e escrituração patrimonial',
    ],
  },
  {
    id: 'sistemas',
    icon: '💻',
    title: 'Sistemas, Softwares e Aplicativos',
    description:
      'Desenvolvimento e implantação de plataformas para gestão patrimonial e identificação de ativos.',
    items: [
      'Sistema de gestão patrimonial web e mobile',
      'Aplicativos para coleta e inventário em campo',
      'Integrações com ERP e sistemas contábeis',
      'Dashboards, relatórios e multiempresa',
    ],
  },
  {
    id: 'rfid',
    icon: '📡',
    title: 'Suporte a Tecnologias RFID',
    description:
      'Implementação de soluções RFID para rastreabilidade e leitura automatizada de ativos em larga escala.',
    items: [
      'Tags e etiquetas RFID',
      'Antenas, leitores fixos e portais de leitura',
      'Coleta automatizada e rastreabilidade em tempo real',
      'Projetos de identificação em volume',
    ],
  },
  {
    id: 'qr',
    icon: '🔲',
    title: 'Suporte a QR-Code e Código de Barras',
    description:
      'Identificação dinâmica e soluções consolidadas de código de barras para controle patrimonial.',
    items: [
      'Geração e leitura de QR-Code',
      'Etiquetas e plaquetas com código de barras',
      'Aplicativos móveis para leitura e conferência',
      'Integração com sistemas de gestão',
    ],
  },
];

export default function Solucoes() {
  return (
    <div>
      <section className="border-b border-slate-800 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
            Soluções
          </span>
          <h1 className="mt-4 max-w-3xl text-4xl font-bold text-white md:text-5xl">
            Tudo o que sua empresa precisa para controlar o patrimônio
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-300">
            Da elaboração das plaquetas ao software de gestão, passando por
            inventário, avaliações e suporte contábil. Uma solução completa,
            integrada e sob medida para o seu negócio.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-6 lg:grid-cols-2">
          {solutions.map((solution) => (
            <div
              key={solution.id}
              id={solution.id}
              className="rounded-2xl border border-slate-800 bg-slate-900/60 p-8"
            >
              <div className="flex items-center gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10 text-2xl">
                  {solution.icon}
                </span>
                <h2 className="text-xl font-semibold text-white">
                  {solution.title}
                </h2>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-slate-400">
                {solution.description}
              </p>
              <ul className="mt-6 space-y-3">
                {solution.items.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-slate-300">
                    <span className="mt-0.5 text-emerald-400">✔</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-slate-800 bg-slate-900/40">
        <div className="mx-auto max-w-7xl px-6 py-16 text-center">
          <h2 className="text-2xl font-bold text-white md:text-3xl">
            Precisa de uma solução personalizada?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-400">
            Nossa equipe monta o escopo ideal para o seu segmento e o seu parque
            de ativos.
          </p>
          <Link
            to="/contato"
            className="mt-8 inline-flex rounded-lg bg-emerald-500 px-8 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-400"
          >
            Solicitar Proposta
          </Link>
        </div>
      </section>
    </div>
  );
}