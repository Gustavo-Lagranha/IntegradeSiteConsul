import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const links = [
  { to: '/', label: 'Início' },
  { to: '/solucoes', label: 'Soluções' },
  { to: '/tecnologias', label: 'Tecnologias' },
  { to: '/clientes', label: 'Clientes' },
  { to: '/sobre', label: 'Sobre' },
  { to: '/contato', label: 'Contato' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `text-sm font-medium transition-colors ${
      isActive
        ? 'text-white underline decoration-2 underline-offset-8'
        : 'text-white/80 hover:text-white'
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-brand-dark bg-brand">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-white font-bold text-brand">
            IC
          </span>
          <span className="flex flex-col leading-tight">
            <span className="text-lg font-bold text-white">Integrade</span>
            <span className="text-xs tracking-widest text-white/80">
              CONSULTING
            </span>
          </span>
        </Link>

        <div className="hidden items-center gap-6 lg:flex">
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} className={linkClass} end={link.to === '/'}>
              {link.label}
            </NavLink>
          ))}
          <Link
            to="/contato"
            className="rounded-lg bg-white px-5 py-2 text-sm font-semibold text-brand transition hover:bg-brand-dark hover:text-white"
          >
            Solicitar Orçamento
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/40 text-white lg:hidden"
          aria-label="Abrir menu"
        >
          <span className="text-xl">{open ? '✕' : '☰'}</span>
        </button>
      </nav>

      {open && (
        <div className="border-t border-brand-dark bg-brand px-6 py-4 lg:hidden">
          <div className="flex flex-col gap-4">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={linkClass}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </NavLink>
            ))}
            <Link
              to="/contato"
              onClick={() => setOpen(false)}
              className="rounded-lg bg-white px-5 py-2 text-center text-sm font-semibold text-brand"
            >
              Solicitar Orçamento
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
