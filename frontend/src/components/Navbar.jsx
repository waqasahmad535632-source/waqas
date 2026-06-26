import React, { useState, useEffect } from 'react';

const NAV_LINKS = [
  { label: 'Home',     href: '#hero' },
  { label: 'About',    href: '#about' },
  { label: 'Skills',   href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact',  href: '#contact' },
];

export default function Navbar() {
  const [scrolled,  setScrolled]  = useState(false);
  const [active,    setActive]    = useState('#hero');
  const [menuOpen,  setMenuOpen]  = useState(false);

  useEffect(() => {
    const handler = () => {
      setScrolled(window.scrollY > 24);
      const ids = NAV_LINKS.map((l) => l.href.slice(1));
      for (let i = ids.length - 1; i >= 0; i--) {
        const el = document.getElementById(ids[i]);
        if (el && window.scrollY >= el.offsetTop - 140) {
          setActive(`#${ids[i]}`);
          break;
        }
      }
    };
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-zinc-950/85 backdrop-blur-2xl border-b border-zinc-800/60 shadow-xl shadow-black/40'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* ── Logo ── */}
        <a href="#hero" className="group flex items-center gap-2.5">
          <div className="relative w-8 h-8 rounded-lg overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-emerald-700 opacity-90 group-hover:opacity-100 transition-opacity" />
            <span className="absolute inset-0 flex items-center justify-center text-xs font-black text-white tracking-tight">
              WA
            </span>
            <div className="absolute inset-0 rounded-lg ring-1 ring-emerald-500/40 group-hover:ring-emerald-400/70 transition-all" />
          </div>
          <span className="font-bold text-white text-sm tracking-wide hidden sm:block">
            Waqas Ahmad
            <span className="text-emerald-400 ml-0.5">.</span>
          </span>
        </a>

        {/* ── Desktop nav ── */}
        <nav className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className={`nav-link px-4 py-1.5 rounded-md text-sm font-medium transition-colors duration-200 ${
                active === href
                  ? 'active text-emerald-400'
                  : 'text-zinc-400 hover:text-zinc-100'
              }`}
            >
              {label}
            </a>
          ))}
        </nav>

        {/* ── CTA + hamburger ── */}
        <div className="flex items-center gap-3">
          <a
            href="https://linkedin.com/in/waqas-ahmed"
            target="_blank"
            rel="noreferrer"
            className="hidden md:inline-flex btn-shine items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-zinc-950 text-sm font-bold px-5 py-2 rounded-lg transition-all duration-200 shadow-lg shadow-emerald-500/20 hover:shadow-emerald-400/40 hover:-translate-y-px"
          >
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            LinkedIn
          </a>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            className="md:hidden w-9 h-9 flex items-center justify-center rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              }
            </svg>
          </button>
        </div>
      </div>

      {/* ── Mobile menu ── */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${menuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="bg-zinc-950/98 backdrop-blur-xl border-t border-zinc-800/50 px-6 py-4 space-y-1">
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className={`block px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${
                active === href
                  ? 'text-emerald-400 bg-emerald-500/10 border border-emerald-500/20'
                  : 'text-zinc-400 hover:text-white hover:bg-zinc-800/60'
              }`}
            >
              {label}
            </a>
          ))}
          <div className="pt-2">
            <a
              href="https://linkedin.com/in/waqas-ahmed"
              target="_blank"
              rel="noreferrer"
              className="block text-center bg-emerald-500 text-zinc-950 font-bold py-2.5 rounded-lg text-sm"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
