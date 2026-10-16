import React from 'react';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: '🏷️',
    title: 'Plaquetas de Patrimônio',
    description:
      'Elaboração e fornecimento de plaquetas de identificação patrimonial em aço inox, alumínio, policarbonato e etiquetas de alta durabilidade.',
  },
  {
    icon: '🖨️',
    title: 'Equipamentos e Impressoras',
    description:
      'Comercialização de impressoras térmicas, coletores de dados, dispositivos e insumos para identificação e inventário de ativos.',
  },
  {
    icon: '📋',
    title: 'Serviços de Inventário',
    description:
      'Inventário físico e patrimonial completo, com conferência, conciliação contábil e relatórios técnicos de divergências.',
  },
  {
    icon: '📊',
    title: 'Avaliação de Ativos',
    description:
      'Avaliações patrimoniais e laudos técnicos para fins contábeis, fiscais, judiciais e de reavaliação de bens.',
  },
  {
    icon: '🧮',
    title: 'Serviços Contábeis',
    description:
      'Suporte contábil especializado em gestão patrimonial, depreciação, controle de bens e conformidade com as normas vigentes.',
  },
  {
    icon: '💻',
    title: 'Sistemas, Softwares e Apps',
    description:
      'Desenvolvimento e implantação de sistemas de gestão patrimonial, aplicativos móveis e integrações personalizadas.',
  },
];

const technologies = [
  {
    tag: 'RFID',
    title: 'Tecnologia RFID',
    description: 'Leitura em massa e rastreabilidade automática de ativos em tempo real.',
  },
  {
    tag: 'QR-Code',
    title: 'QR-Code',
    description: 'Identificação dinâmica com acesso rápido às informações do bem.',
  },
  {
    tag: 'Código de Barras',
    title: 'Código de Barras',
    description: 'Solução consolidada, econômica e precisa para controle patrimonial.',
  },
];

const differentials = [
  {
    title: 'Solução Completa',
    description:
      'Do fornecimento de plaquetas e equipamentos ao software, inventário e suporte contábil — tudo com um único parceiro.',
  },
  {
    title: 'Equipe Especializada',
    description:
      'Profissionais experientes em gestão patrimonial, contabilidade e tecnologia da informação aplicada a ativos.',
  },
  {
    title: 'Tecnologia de Ponta',
    description:
      'RFID, QR-Code e Código de Barras integrados em plataformas modernas e personalizáveis para sua operação.',
  },
  {
    title: 'Atendimento Nacional',
    description:
      'Capacidade de execução em todo o território brasileiro, com padronização e qualidade garantidas.',
  },
];

export default function Home() {
  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-slate-800 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
        <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-emerald-500/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-emerald-500/10 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-32">
          <div className="max-w-3xl">
            <span className="inline-flex items-center rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-emerald-400">
              Controle Patrimonial · Inventário · Avaliações
            </span>
            <h1 className="mt-6 text-4xl font-bold leading-tight text-white md:text-6xl">
              Gestão patrimonial{' '}
              <span className="text-emerald-400">completa</span> para sua empresa
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-slate-300">
              A Integrade Consulting oferece uma solução completa em controle
              patrimonial e avaliações: plaquetas, equipamentos, inventário,
              laudos, serviços contábeis e sistemas com suporte a RFID, QR-Code e
              Código de Barras.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/contato"
                className="rounded-lg bg-emerald-500 px-7 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-400"
              >
                Solicitar Orçamento
              </Link>
              <Link
                to="/solucoes"
                className="rounded-lg border border-slate-700 px-7 py-3 text-sm font-semibold text-slate-200 transition hover:border-emerald-500 hover:text-white"
              >
                Conhecer Soluções
              </Link>
            </div>

            <div className="mt-14 grid grid-cols-2 gap-6 border-t border-slate-800 pt-8 md:grid-cols-4">
              {[
                { value: '10+', label: 'Anos de experiência' },
                { value: '100%', label: 'Solução integrada' },
                { value: '3', label: 'Tecnologias de identificação' },
                { value: 'BR', label: 'Atendimento nacional' },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-3xl font-bold text-emerald-400">{stat.value}</p>
                  <p className="mt-1 text-xs text-slate-400">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVIÇOS */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Nossas Soluções
          </h2>
          <p className="mt-4 text-slate-400">
            Uma linha completa de produtos e serviços para identificar, controlar
            e valorizar o patrimônio da sua organização.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group rounded-2xl border border-slate-800 bg-slate-900/60 p-8 transition hover:border-emerald-500/50 hover:bg-slate-900"
            >
              <span className="text-3xl">{service.icon}</span>
              <h3 className="mt-5 text-lg font-semibold text-white">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* TECNOLOGIAS */}
      <section className="border-y border-slate-800 bg-slate-900/40">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-white md:text-4xl">
              Tecnologias de Identificação
            </h2>
            <p className="mt-4 text-slate-400">
              Escolha a tecnologia ideal para o seu parque de ativos, ou combine
              todas em uma única operação.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {technologies.map((tech) => (
              <div
                key={tech.title}
                className="rounded-2xl border border-slate-800 bg-slate-950 p-8 text-center"
              >
                <span className="inline-flex items-center rounded-full bg-emerald-500/10 px-4 py-1.5 text-sm font-semibold text-emerald-400">
                  {tech.tag}
                </span>
                <h3 className="mt-5 text-lg font-semibold text-white">
                  {tech.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-400">
                  {tech.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DIFERENCIAIS */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-3xl font-bold text-white md:text-4xl">
              Por que escolher a Integrade Consulting?
            </h2>
            <p className="mt-4 text-slate-400">
              Somos especialistas em controle patrimonial e avaliações,
              entregando soluções de ponta a ponta que geram economia, precisão e
              conformidade para o seu negócio.
            </p>
            <Link
              to="/sobre"
              className="mt-8 inline-flex rounded-lg bg-emerald-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-400"
            >
              Sobre a Integrade
            </Link>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {differentials.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-slate-800 bg-slate-900/60 p-6"
              >
                <h3 className="text-base font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-slate-800 bg-gradient-to-r from-emerald-600 to-emerald-500">
        <div className="mx-auto max-w-7xl px-6 py-16 text-center">
          <h2 className="text-2xl font-bold text-slate-950 md:text-3xl">
            Pronto para transformar a gestão patrimonial da sua empresa?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-900">
            Fale com nossos especialistas e receba uma proposta personalizada para
            o seu parque de ativos.
          </p>
          <Link
            to="/contato"
            className="mt-8 inline-flex rounded-lg bg-slate-950 px-8 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            Entrar em Contato
          </Link>
        </div>
      </section>
    </div>
  );
}