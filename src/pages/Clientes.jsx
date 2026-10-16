import React from 'react';
import { Link } from 'react-router-dom';

const clientes = [
  { name: 'Afix Code', tag: 'Tecnologia' },
  { name: 'Sispro', tag: 'Software' },
  { name: 'Indústria Alpha', tag: 'Indústria' },
  { name: 'Grupo Metro', tag: 'Varejo' },
  { name: 'Hospital Vitalis', tag: 'Saúde' },
  { name: 'Educar Instituto', tag: 'Educação' },
  { name: 'Prefeitura Municipal', tag: 'Setor Público' },
  { name: 'TransLog Cargas', tag: 'Logística' },
];

const depoimentos = [
  {
    text: 'A Integrade Consulting entregou nosso inventário patrimonial completo dentro do prazo, com um nível de detalhe que nunca tínhamos alcançado.',
    author: 'Gestor de Patrimônio',
    company: 'Indústria de Médio Porte',
  },
  {
    text: 'A implantação do sistema de gestão com QR-Code reduziu drasticamente o tempo de conferência dos nossos ativos.',
    author: 'Diretor de Operações',
    company: 'Rede de Varejo',
  },
];

export default function Clientes() {
  return (
    <div>
      <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-cyan-400 text-sm font-semibold tracking-wider uppercase">Clientes</span>
          <h1 className="mt-3 text-4xl sm:text-5xl font-bold text-white">Empresas que confiam no nosso trabalho</h1>
          <p className="mt-6 text-lg text-slate-300 max-w-3xl leading-relaxed">
            Atendemos organizações de diferentes segmentos, sempre com o compromisso de entregar
            precisão, conformidade e resultados.
          </p>
        </div>
      </section>

      <section className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {clientes.map((c) => (
              <div key={c.name} className="p-6 rounded-xl bg-slate-900 border border-slate-800 flex flex-col items-center justify-center text-center h-32 hover:border-cyan-500/50 transition-colors">
                <div className="text-lg font-bold text-slate-200">{c.name}</div>
                <div className="mt-2 text-xs text-cyan-400">{c.tag}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-12">O que nossos clientes dizem</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {depoimentos.map((d) => (
              <div key={d.company} className="p-8 rounded-xl bg-slate-950 border border-slate-800">
                <div className="text-cyan-400 text-3xl leading-none mb-4">&ldquo;</div>
                <p className="text-slate-300 leading-relaxed">{d.text}</p>
                <div className="mt-6">
                  <div className="font-semibold text-white">{d.author}</div>
                  <div className="text-sm text-slate-400">{d.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-blue-700 to-cyan-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-white text-center md:text-left">
            Faça parte da nossa lista de clientes
          </h2>
          <Link to="/contato" className="flex-shrink-0 px-6 py-3 rounded-lg bg-slate-950 hover:bg-slate-800 text-white font-semibold transition-colors">
            Falar com um especialista
          </Link>
        </div>
      </section>
    </div>
  );
}
