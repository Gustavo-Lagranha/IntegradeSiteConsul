import React, { useState } from 'react';

export default function Contato() {
  const [form, setForm] = useState({
    nome: '',
    email: '',
    telefone: '',
    empresa: '',
    mensagem: '',
  });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  const inputClass =
    'w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition focus:border-emerald-500';

  return (
    <div>
      <section className="border-b border-slate-800 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
            Contato
          </span>
          <h1 className="mt-4 max-w-3xl text-4xl font-bold text-white md:text-5xl">
            Vamos falar sobre o seu projeto
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-300">
            Solicite uma proposta personalizada para controle patrimonial,
            inventário, avaliações, sistemas ou identificação com RFID, QR-Code e
            Código de Barras.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-white">
              Informações de contato
            </h2>
            <div className="mt-8 space-y-6">
              <div className="flex items-start gap-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-emerald-500/10 text-lg">
                  ✉️
                </span>
                <div>
                  <p className="text-sm font-semibold text-white">E-mail</p>
                  <p className="text-sm text-slate-400">
                    contato@integradeconsulting.com.br
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-emerald-500/10 text-lg">
                  🌐
                </span>
                <div>
                  <p className="text-sm font-semibold text-white">Site</p>
                  <p className="text-sm text-slate-400">
                    integradeconsulting.com.br
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-emerald-500/10 text-lg">
                  📍
                </span>
                <div>
                  <p className="text-sm font-semibold text-white">Atendimento</p>
                  <p className="text-sm text-slate-400">
                    Em todo o território nacional
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-emerald-500/10 text-lg">
                  ⏱️
                </span>
                <div>
                  <p className="text-sm font-semibold text-white">Horário</p>
                  <p className="text-sm text-slate-400">
                    Segunda a sexta, das 8h às 18h
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-8">
              {sent ? (
                <div className="py-12 text-center">
                  <span className="text-4xl">✅</span>
                  <h3 className="mt-4 text-xl font-semibold text-white">
                    Mensagem enviada!
                  </h3>
                  <p className="mt-2 text-sm text-slate-400">
                    Obrigado, {form.nome || 'cliente'}. Nossa equipe entrará em
                    contato em breve.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid gap-5 md:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-sm text-slate-300">
                        Nome*
                      </label>
                      <input
                        type="text"
                        name="nome"
                        required
                        value={form.nome}
                        onChange={handleChange}
                        placeholder="Seu nome"
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className="mb-2 block text-sm text-slate-300">
                        Empresa
                      </label>
                      <input
                        type="text"
                        name="empresa"
                        value={form.empresa}
                        onChange={handleChange}
                        placeholder="Nome da empresa"
                        className={inputClass}
                      />
                    </div>
                  </div>
                  <div className="grid gap-5 md:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-sm text-slate-300">
                        E-mail*
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="seu@email.com"
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className="mb-2 block text-sm text-slate-300">
                        Telefone
                      </label>
                      <input
                        type="tel"
                        name="telefone"
                        value={form.telefone}
                        onChange={handleChange}
                        placeholder="(00) 00000-0000"
                        className={inputClass}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="mb-2 block text-sm text-slate-300">
                      Mensagem*
                    </label>
                    <textarea
                      name="mensagem"
                      required
                      rows="5"
                      value={form.mensagem}
                      onChange={handleChange}
                      placeholder="Descreva sua necessidade (inventário, avaliação, plaquetas, sistemas, etc.)"
                      className={inputClass}
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full rounded-lg bg-emerald-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-400"
                  >
                    Enviar Mensagem
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}