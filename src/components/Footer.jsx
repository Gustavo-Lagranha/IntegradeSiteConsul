import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800 bg-slate-950">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500 font-bold text-slate-950">
              IC
            </span>
            <span className="flex flex-col leading-tight">
              <span className="text-lg font-bold text-white">Integrade</span>
              <span className="text-xs tracking-widest text-emerald-400">
                CONSULTING
              </span>
            </span>
          </div>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-slate-400">
            Soluções completas em controle patrimonial, inventário, avaliações e
            identificação de ativos com tecnologia RFID, QR-Code e Código de
            Barras.
          </p>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wide text-white">
            Navegação
          </h4>
          <ul className="space-y-2 text-sm text-slate-400">
            <li><Link to="/" className="hover:text-emerald-400">Início</Link></li>
            <li><Link to="/solucoes" className="hover:text-emerald-400">Soluções</Link></li>
            <li><Link to="/tecnologias" className="hover:text-emerald-400">Tecnologias</Link></li>
            <li><Link to="/clientes" className="hover:text-emerald-400">Clientes</Link></li>
            <li><Link to="/sobre" className="hover:text-emerald-400">Sobre</Link></li>
            <li><Link to="/contato" className="hover:text-emerald-400">Contato</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wide text-white">
            Contato
          </h4>
          <ul className="space-y-2 text-sm text-slate-400">
            <li>contato@integradeconsulting.com.br</li>
            <li>integradeconsulting.com.br</li>
            <li>Atendimento em todo o Brasil</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-800">
        <p className="mx-auto max-w-7xl px-6 py-6 text-center text-xs text-slate-500">
          © {year} Integrade Consulting. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
