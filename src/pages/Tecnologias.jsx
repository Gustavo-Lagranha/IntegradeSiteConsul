import React from 'react';
import { Link } from 'react-router-dom';

const tecnologias = [
  {
    tag: 'RFID',
    title: 'Identificação por Radiofrequência (RFID)',
    desc: 'A tecnologia RFID permite a leitura automática de etiquetas sem contato visual, com capacidade de ler centenas de itens simultaneamente. É ideal para inventários rápidos, rastreamento em tempo real e controle de grandes volumes de ativos.',
    vantagens: ['Leitura em massa e sem contato', 'Rastreamento em tempo real', 'Alta velocidade de inventário', 'Ideal para grandes volumes'],
  },
  {
    tag: 'QR-CODE',
    title: 'QR-Code',
    desc: 'O QR-Code oferece identificação rápida e econômica por meio de qualquer smartphone. Ao escanear, o usuário acessa instantaneamente a ficha completa do bem, histórico de movimentações e informações de manutenção.',
    vantagens: ['Leitura por smartphone comum', 'Baixo custo de implantação', 'Armazena grande volume de dados', 'Acesso rápido à ficha do bem'],
  },
  {
    tag: 'CÓDIGO DE BARRAS',
    title: 'Código de Barras',
    desc: 'O código de barras é o padrão consolidado de identificação, reconhecido por sua confiabilidade e custo acessível. É amplamente utilizado em inventários patrimoniais e integração com sistemas de gestão.',
    vantagens: ['Padrão consolidado no mercado', 'Custo acessível', 'Compatível com coletores', 'Alta confiabilidade'],
  },
];

const aplicacoes = [
  { icon: '🏢', title: 'Identificação de bens', desc: 'Etiquetas e plaquetas com a tecnologia mais adequada ao seu ativo.' },
  { icon: '🔎', title: 'Inventário ágil', desc: 'Coleta em campo com coletores e aplicativos móveis.' },
  { icon: '📈', title: 'Gestão integrada', desc: 'Dados consolidados em sistemas de gestão patrimonial.' },
  { icon: '🔔', title: 'Rastreamento e rastreabilidade', desc: 'Histórico de movimentações e localização dos ativos.' },
];

export default function Tecnologias() {
  return (
    <div>
      <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-cyan-400 text-sm font-semibold tracking-wider uppercase">Tecnologias</span>
          <h1 className="mt-3 text-4xl sm:text-5xl font-bold text-white">RFID, QR-Code e Código de Barras</h1>
          <p className="mt-6 text-lg text-slate-300 max-w-3xl leading-relaxed">
            Definimos a tecnologia ideal para cada operação, garantindo precisão, agilidade e
            escalabilidade no controle do seu patrimônio.
          </p>
        </div>
      </section>

      <section className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {tecnologias.map((t) => (
            <div key={t.tag} className="p-8 rounded-xl bg-slate-900 border border-slate-800 grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div>
                <span className="inline-block px-3 py-1 rounded-md bg-cyan-500/10 text-cyan-400 text-sm font-bold mb-3">{t.tag}</span>
                <h2 className="text-2xl font-bold text-white leading-snug">{t.title}</h2>
              </div>
              <div className="lg:col-span-2">
                <p className="text-slate-400 leading-relaxed">{t.desc}</p>
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {t.vantagens.map((v) => (
                    <div key={v} className="flex items-center gap-2 text-sm text-slate-300">
                      <span className="text-cyan-400">✓</span> {v}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Aplicações na gestão patrimonial</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {aplicacoes.map((a) => (
              <div key={a.title} className="p-6 rounded-xl bg-slate-950 border border-slate-800 text-center">
                <div className="text-3xl mb-3">{a.icon}</div>
                <h3 className="font-semibold text-white">{a.title}</h3>
                <p className="mt-2 text-sm text-slate-400">{a.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/contato" className="px-6 py-3 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold inline-block transition-colors">
              Quero implementar na minha empresa
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
