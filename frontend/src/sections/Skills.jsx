import React, { useEffect, useRef, useState } from 'react';

/* ── Data ─────────────────────────────────────────────────────────── */
const GROUPS = [
  {
    category: 'Frontend',
    icon: '🎨',
    accent: 'emerald',
    skills: [
      { name: 'React.js',            pct: 82 },
      { name: 'JavaScript (ES6+)',   pct: 86 },
      { name: 'Tailwind CSS',        pct: 92 },
      { name: 'HTML5 / CSS3',        pct: 95 },
      { name: 'Bootstrap',           pct: 75 },
    ],
  },
  {
    category: 'Backend',
    icon: '⚙️',
    accent: 'teal',
    skills: [
      { name: 'Node.js',             pct: 76 },
      { name: 'Express.js',          pct: 78 },
      { name: 'PHP / Laravel',       pct: 70 },
      { name: 'Java',                pct: 73 },
    ],
  },
  {
    category: 'Databases',
    icon: '🗄️',
    accent: 'cyan',
    skills: [
      { name: 'MongoDB',             pct: 81 },
      { name: 'MySQL',               pct: 76 },
    ],
  },
  {
    category: 'DevOps & Tools',
    icon: '🚀',
    accent: 'green',
    skills: [
      { name: 'Git & GitHub',        pct: 86 },
      { name: 'Docker',              pct: 66 },
      { name: 'SonarCloud',          pct: 60 },
    ],
  },
];

const ACCENT = {
  emerald: 'from-emerald-500 to-emerald-400',
  teal:    'from-teal-500 to-teal-400',
  cyan:    'from-cyan-500 to-cyan-400',
  green:   'from-green-500 to-green-400',
};

const BORDER_HOVER = {
  emerald: 'hover:border-emerald-500/30',
  teal:    'hover:border-teal-500/30',
  cyan:    'hover:border-cyan-500/30',
  green:   'hover:border-green-500/30',
};

const ICON_BG = {
  emerald: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
  teal:    'bg-teal-500/10 text-teal-400 border-teal-500/20',
  cyan:    'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
  green:   'bg-green-500/10 text-green-400 border-green-500/20',
};

/* ── Single skill bar ──────────────────────────────────────────────── */
function SkillBar({ name, pct, accent }) {
  const [width, setWidth] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setWidth(pct); },
      { threshold: 0.4 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [pct]);

  return (
    <div ref={ref} className="group/bar">
      <div className="flex justify-between mb-1.5">
        <span className="text-[13px] text-zinc-300 font-medium">{name}</span>
        <span className="text-[11px] font-bold text-zinc-600 group-hover/bar:text-emerald-400 transition-colors tabular-nums">
          {pct}%
        </span>
      </div>
      <div className="h-1.5 rounded-full bg-zinc-800 overflow-hidden">
        <div
          className={`h-full rounded-full bg-gradient-to-r ${ACCENT[accent]} transition-all duration-[1100ms] ease-out`}
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  );
}

/* ── Section ───────────────────────────────────────────────────────── */
export default function Skills() {
  return (
    <section id="skills" className="relative bg-zinc-950 py-28 text-white overflow-hidden line-grid">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-zinc-900/40 via-transparent to-zinc-900/40" />
      <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-emerald-950/20 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="mb-16">
          <span className="chip mb-4">Tech Stack</span>
          <h2 className="text-4xl md:text-5xl font-black text-white mt-3">
            Skills &<span className="text-gradient-emerald"> Expertise</span>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
          {GROUPS.map((g) => (
            <div
              key={g.category}
              className={`skill-card glass rounded-2xl p-6 border border-zinc-800 ${BORDER_HOVER[g.accent]}`}
            >
              {/* Card header */}
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-base border ${ICON_BG[g.accent]}`}>
                  {g.icon}
                </div>
                <h3 className="font-bold text-zinc-100 text-sm">{g.category}</h3>
              </div>

              {/* Bars */}
              <div className="space-y-3.5">
                {g.skills.map((s) => (
                  <SkillBar key={s.name} name={s.name} pct={s.pct} accent={g.accent} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom pill row */}
        <div className="mt-14 pt-10 border-t border-zinc-800/60">
          <p className="text-xs text-zinc-600 uppercase tracking-widest font-bold text-center mb-5">
            Also comfortable with
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {[
              'REST APIs', 'JWT Auth', 'MVC Pattern', 'OOP', 'Data Structures',
              'Responsive Design', 'Git Flow', 'Agile / Scrum',
            ].map((tag) => (
              <span
                key={tag}
                className="text-xs font-medium text-zinc-500 bg-zinc-900 border border-zinc-800 hover:border-emerald-500/30 hover:text-emerald-400 px-3 py-1.5 rounded-full transition-all duration-200 cursor-default"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
