import React, { useState, useEffect } from 'react';
import waqasPhoto from '../assets/waqas.jpeg';

const ROLES = ['Full-Stack Developer', 'MERN Stack Engineer', 'React.js Builder', 'Problem Solver'];

export default function Hero() {
  const [idx,       setIdx]       = useState(0);
  const [shown,     setShown]     = useState('');
  const [deleting,  setDeleting]  = useState(false);

  useEffect(() => {
    const word = ROLES[idx];
    let t;
    if (!deleting && shown.length < word.length)
      t = setTimeout(() => setShown(word.slice(0, shown.length + 1)), 75);
    else if (!deleting && shown.length === word.length)
      t = setTimeout(() => setDeleting(true), 2400);
    else if (deleting && shown.length > 0)
      t = setTimeout(() => setShown(shown.slice(0, -1)), 38);
    else { setDeleting(false); setIdx((i) => (i + 1) % ROLES.length); }
    return () => clearTimeout(t);
  }, [shown, deleting, idx]);

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden bg-zinc-950 dot-grid">

      {/* Ambient orbs */}
      <div className="orb-1 pointer-events-none absolute -top-40 -left-40 w-[700px] h-[700px] rounded-full bg-emerald-500/6 blur-3xl" />
      <div className="orb-2 pointer-events-none absolute -bottom-40 -right-40 w-[600px] h-[600px] rounded-full bg-emerald-700/5 blur-3xl" />
      {/* Radial vignette */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(16,185,129,0.07),transparent)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-20 w-full">
        <div className="max-w-3xl lg:max-w-[52%] xl:max-w-[50%]">

          {/* Status badge */}
          <div className="fade-up inline-flex items-center gap-2 mb-8">
            <span className="chip">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 status-pulse" />
              Open to work
            </span>
          </div>

          {/* Headline */}
          <h1 className="fade-up delay-100 text-[clamp(2.8rem,8vw,5.5rem)] font-black leading-[1.02] tracking-tight mb-6">
            <span className="text-white">Hi, I'm </span>
            <span className="text-gradient-hero">Waqas Ahmad</span>
            <span className="block text-zinc-400 text-[clamp(1.4rem,4vw,2.5rem)] font-semibold mt-3 leading-snug">
              Aspiring{' '}
              <span className="text-emerald-400 cursor-blink">{shown}</span>
            </span>
          </h1>

          {/* Sub-text */}
          <p className="fade-up delay-200 text-zinc-400 text-lg leading-relaxed max-w-xl mb-10">
            CS Student at{' '}
            <span className="text-zinc-200 font-medium">COMSATS University Islamabad</span>,
            Sahiwal Campus (2023–2027). Building production-grade apps with the MERN stack,
            PHP/Laravel, Java, and DevOps tooling.
          </p>

          {/* CTAs */}
          <div className="fade-up delay-300 flex flex-wrap gap-3 mb-20">
            <a
              href="#projects"
              className="btn-shine group inline-flex items-center gap-2.5 bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold px-7 py-3 rounded-xl transition-all duration-200 shadow-lg shadow-emerald-500/25 hover:shadow-emerald-400/45 hover:-translate-y-0.5 text-sm"
            >
              View Projects
              <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="https://linkedin.com/in/waqas-ahmed"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2.5 bg-transparent hover:bg-zinc-800/70 border border-zinc-700 hover:border-emerald-500/50 text-zinc-300 hover:text-white font-semibold px-7 py-3 rounded-xl transition-all duration-200 hover:-translate-y-0.5 text-sm"
            >
              <svg className="w-4 h-4 text-zinc-400 group-hover:text-emerald-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              LinkedIn
            </a>
          </div>

          {/* Stats row */}
          <div className="fade-up delay-400 flex flex-wrap gap-8">
            {[
              { n: '4+',   label: 'Projects' },
              { n: '10+',  label: 'Technologies' },
              { n: '2023', label: 'Since' },
            ].map(({ n, label }) => (
              <div key={label} className="flex flex-col">
                <span className="text-3xl font-black text-gradient-emerald leading-none">{n}</span>
                <span className="text-xs text-zinc-500 font-medium mt-1 uppercase tracking-widest">{label}</span>
              </div>
            ))}

            {/* Divider */}
            <div className="hidden sm:block w-px bg-zinc-800 self-stretch mx-2" />

            {/* Tech pills */}
            <div className="flex flex-wrap gap-2 items-center">
              {['React', 'Node.js', 'MongoDB', 'Docker'].map((t) => (
                <span key={t} className="text-xs px-2.5 py-1 rounded-md bg-zinc-900 border border-zinc-800 text-zinc-400 font-medium">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Profile photo — desktop right side */}
      <div className="hidden lg:flex absolute right-10 xl:right-24 top-1/2 -translate-y-1/2 flex-col items-center gap-4 select-none">
        {/* Photo card */}
        <div className="relative group">
          {/* Outer glow ring */}
          <div className="absolute -inset-0.5 rounded-3xl bg-gradient-to-br from-emerald-400 to-emerald-700 opacity-60 group-hover:opacity-90 blur-sm transition-opacity duration-500" />
          {/* Photo */}
          <div className="relative w-56 xl:w-64 aspect-[3/4] rounded-3xl overflow-hidden border border-emerald-500/30">
            <img
              src={waqasPhoto}
              alt="Waqas Ahmad"
              className="w-full h-full object-cover object-top"
            />
            {/* Subtle overlay gradient at bottom */}
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-zinc-950/80 to-transparent" />
          </div>
          {/* Online badge */}
          <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 bg-zinc-900 border border-zinc-700 px-3 py-1.5 rounded-full shadow-xl">
            <span className="w-2 h-2 rounded-full bg-emerald-400 status-pulse" />
            <span className="text-[11px] font-semibold text-zinc-300 whitespace-nowrap">Open to work</span>
          </div>
        </div>

        {/* Mini stat cards below photo */}
        <div className="flex gap-3 mt-4">
          {[{ n: '4+', l: 'Projects' }, { n: '10+', l: 'Tech' }].map(({ n, l }) => (
            <div key={l} className="glass rounded-xl px-4 py-2.5 text-center border border-zinc-800">
              <p className="text-lg font-black text-gradient-emerald leading-none">{n}</p>
              <p className="text-[10px] text-zinc-500 mt-0.5 uppercase tracking-widest">{l}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll cue */}
      <div className="scroll-bounce absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5">
        <span className="text-[10px] text-zinc-600 tracking-widest uppercase font-medium">Scroll</span>
        <svg className="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
