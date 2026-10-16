import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-white font-bold text-brand">
              IC
            </span>
            <span className="flex flex-col leading-tight">
              <span className="text-lg font-bold text-white">Integrade</span>
              <span className="text-xs tracking-widest text-white/80">
                CONSULTING
              </span>
            </span>
          </div>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-white/80">
            Soluções completas em controle patrimonial, inventário, avaliações e
            identificação de ativos com tecnologia RFID, QR-Code e Código de
            Barras.
          </p>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wide text-white">
            Navegação
          </h4>
          <ul className="space-y-2 text-sm text-white/80">
            <li><Link to="/" className="hover:text-white">Início</Link></li>
            <li><Link to="/solucoes" className="hover:text-white">Soluções</Link></li>
            <li><Link to="/tecnologias" className="hover:text-white">Tecnologias</Link></li>
            <li><Link to="/clientes" className="hover:text-white">Clientes</Link></li>
            <li><Link to="/sobre" className="hover:text-white">Sobre</Link></li>
            <li><Link to="/contato" className="hover:text-white">Contato</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wide text-white">
            Contato
          </h4>
          <ul className="space-y-2 text-sm text-white/80">
            <li>contato@integradeconsulting.com.br</li>
            <li>integradeconsulting.com.br</li>
            <li>Atendimento em todo o Brasil</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/20">
        <p className="mx-auto max-w-7xl px-6 py-6 text-center text-xs text-white/70">
          © {year} Integrade Consulting. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
