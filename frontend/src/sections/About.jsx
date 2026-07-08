import React from 'react';
import waqasPhoto from '../assets/waqas.jpeg';

const TRAITS = [
  { icon: '⚡', label: 'Fast Learner',   sub: 'Picks up new tech quickly' },
  { icon: '🔧', label: 'Clean Coder',    sub: 'Readable & maintainable' },
  { icon: '🎯', label: 'Problem Solver', sub: 'Analytical mindset' },
  { icon: '🚀', label: 'Ambitious',      sub: 'Always shipping' },
];

const DETAILS = [
  {
    label: 'University',
    value: 'COMSATS University Islamabad — Sahiwal Campus',
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0v6" />
      </svg>
    ),
  },
  {
    label: 'Degree',
    value: 'BS Computer Science (Sep 2023 – Sep 2027)',
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    label: 'Email',
    value: 'waqasahmad535632@gmail.com',
    href: 'mailto:waqasahmad535632@gmail.com',
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    label: 'Phone',
    value: '+92 318 4281671',
    href: 'tel:+923184281671',
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/waqas-ahmed',
    href: 'https://linkedin.com/in/waqas-ahmed',
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
];

export default function About() {
  return (
    <section id="about" className="relative bg-zinc-900 py-16 md:py-24 lg:py-28 text-white overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-zinc-800" />
      <div className="pointer-events-none absolute top-0 right-0 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-emerald-950/30 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="mb-10 md:mb-16">
          <span className="chip mb-3 md:mb-4">About Me</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mt-3">
            The person behind
            <span className="text-gradient-emerald"> the code</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-14 items-start">

          {/* ── Left: Bio ── */}
          <div>
            {/* Identity card */}
            <div className="flex items-center gap-3 sm:gap-4 mb-6 md:mb-8 glass-emerald rounded-2xl p-4 sm:p-5">
              <div className="relative shrink-0">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl overflow-hidden border border-emerald-500/30 shadow-lg shadow-emerald-900/40">
                  <img src={waqasPhoto} alt="Waqas Ahmad" className="w-full h-full object-cover object-top" />
                </div>
                <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 sm:w-4 sm:h-4 bg-emerald-400 rounded-full border-2 border-zinc-900 status-pulse" />
              </div>
              <div>
                <p className="font-bold text-white text-sm sm:text-base">Waqas Ahmad</p>
                <p className="text-xs sm:text-sm text-emerald-400">CS Student · Available for work</p>
              </div>
            </div>

            <div className="space-y-3 md:space-y-4 text-zinc-400 leading-relaxed text-sm md:text-[15px] mb-6 md:mb-8">
              <p>
                I'm a <span className="text-zinc-100 font-semibold">Computer Science student</span> who
                genuinely loves engineering software that solves real-world problems. Clean architecture
                and readable code matter as much to me as shipping features.
              </p>
              <p>
                My primary stack is the <span className="text-emerald-400 font-semibold">MERN ecosystem</span> —
                MongoDB, Express.js, React.js, and Node.js. I also build with PHP/Laravel for
                server-rendered projects and Java for OOP and data-structure-heavy apps.
              </p>
              <p>
                I'm invested in <span className="text-zinc-100 font-semibold">DevOps practices</span> —
                containerising with Docker, enforcing quality gates with SonarCloud, and managing all
                workflows through Git & GitHub Actions.
              </p>
            </div>

            {/* Trait grid */}
            <div className="grid grid-cols-2 gap-2 sm:gap-3">
              {TRAITS.map(({ icon, label, sub }) => (
                <div key={label} className="skill-card glass rounded-xl p-3 sm:p-4 border border-zinc-800 flex items-start gap-2 sm:gap-3">
                  <span className="text-lg sm:text-xl mt-0.5">{icon}</span>
                  <div>
                    <p className="text-xs sm:text-sm font-semibold text-zinc-200">{label}</p>
                    <p className="text-[10px] sm:text-xs text-zinc-500 mt-0.5">{sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: Details ── */}
          <div className="space-y-2 mt-2 lg:mt-0">
            {DETAILS.map(({ label, value, href, icon }) => (
              <div
                key={label}
                className="group glass rounded-xl px-4 sm:px-5 py-3 sm:py-4 border border-zinc-800 flex items-center gap-3 sm:gap-4 hover:border-emerald-500/30 transition-all duration-300"
              >
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-zinc-800 border border-zinc-700 group-hover:border-emerald-500/30 group-hover:bg-emerald-950/40 flex items-center justify-center text-zinc-400 group-hover:text-emerald-400 shrink-0 transition-all duration-300">
                  {icon}
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-[10px] font-bold text-zinc-600 uppercase tracking-widest mb-0.5">{label}</p>
                  {href ? (
                    <a
                      href={href}
                      target={href.startsWith('http') ? '_blank' : undefined}
                      rel="noreferrer"
                      className="text-xs sm:text-sm text-zinc-300 hover:text-emerald-400 transition-colors truncate block"
                    >
                      {value}
                    </a>
                  ) : (
                    <p className="text-xs sm:text-sm text-zinc-300 truncate">{value}</p>
                  )}
                </div>
                {href && (
                  <svg className="w-3.5 h-3.5 text-zinc-700 group-hover:text-emerald-500 shrink-0 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
