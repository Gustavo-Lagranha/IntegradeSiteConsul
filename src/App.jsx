import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';
import Home from './pages/Home.jsx';
import Solucoes from './pages/Solucoes.jsx';
import Tecnologias from './pages/Tecnologias.jsx';
import Clientes from './pages/Clientes.jsx';
import Sobre from './pages/Sobre.jsx';
import Contato from './pages/Contato.jsx';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/solucoes" element={<Solucoes />} />
            <Route path="/tecnologias" element={<Tecnologias />} />
            <Route path="/clientes" element={<Clientes />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
