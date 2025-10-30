import React, { useState } from 'react';
import CtaButton from '../ui/CtaButton';
import { MenuIcon, XIcon } from '../ui/Icons';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'O Método', href: '#metodo' },
    { name: 'Funil 3A3R', href: '#funil' },
    { name: 'Etapas', href: '#etapas' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contato', href: '#contato' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-800 bg-gray-950/70 backdrop-blur-md">
      <nav className="container mx-auto flex max-w-6xl items-center justify-between px-4 py-5">
        {/* MUDANÇA BEM AQUI: href="#" foi trocado por href="#inicio" */}
        <a href="#inicio">
          <img src="/tmw-logo.png" alt="Tomorrow Logo" className="h-8 w-auto" />
        </a>

        <ul className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="text-sm font-semibold text-gray-400 transition-colors hover:text-white"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <CtaButton href="#contato">Falar Com a Tomorrow</CtaButton>
        </div>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="z-50 text-white md:hidden"
          aria-label="Abrir menu"
        >
          {isMenuOpen ? <XIcon /> : <MenuIcon />}
        </button>
      </nav>

      <div
        className={`absolute top-0 left-0 z-40 w-full transform bg-gray-900 transition-transform duration-300 ease-in-out md:hidden ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <nav className="flex h-screen flex-col items-center justify-center gap-8 pt-20">
          {navLinks.map((link) => (
            <li key={link.name} className="list-none">
              <a
                href={link.href}
                className="text-2xl font-semibold text-gray-300 transition-colors hover:text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            </li>
          ))}
          <CtaButton href="#contato" className="mt-8 text-lg" onClick={() => setIsMenuOpen(false)}>
            Falar Com a Tomorrow
          </CtaButton>
        </nav>
      </div>
    </header>
  );
};

export default Header;