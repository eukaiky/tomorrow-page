import React from 'react';

const Footer = () => (
  <footer className="border-t border-gray-800 bg-gray-950">
    <div className="container mx-auto max-w-6xl px-4 py-16">
      <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
        <div>
        <a href="#inicio">
          <img src="/tmw-logo.png" alt="Tomorrow Logo" className="h-8 w-auto" />
        </a>
          <p className="mt-4 text-sm text-gray-400">
            Tomorrow Marketing. Branding, Vendas e Funil 3A3R para quem quer
            ser nome, não número.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
            Navegação
          </h4>
          <ul className="mt-4 space-y-2">
            <li><a href="#metodo" className="text-sm text-gray-400 hover:text-white">O Método</a></li>
            <li><a href="#funil" className="text-sm text-gray-400 hover:text-white">Funil 3A3R</a></li>
            <li><a href="#etapas" className="text-sm text-gray-400 hover:text-white">Etapas</a></li>
            <li><a href="#faq" className="text-sm text-gray-400 hover:text-white">FAQ</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
            Contato
          </h4>
          <ul className="mt-4 space-y-2 text-sm text-gray-400">
            <li>felipe@agenciatomorrow.com</li>
            <li>(35) 98446-8504</li>
            <li>Sul de Minas & Ribeirão Preto</li>
          </ul>
        </div>
      </div>

      <div className="mt-12 border-t border-gray-800 pt-8 text-center">
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Tomorrow Marketing — Todos os direitos reservados.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
