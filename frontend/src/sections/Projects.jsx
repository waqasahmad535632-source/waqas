import React, { useState, useEffect } from 'react';

/* ─── Bento layout config ─────────────────────────────────────────────
   index 0 → spans 2 cols (featured card)
   index 1 → 1 col (square)
   index 2 → 1 col (square)
   index 3 → spans 2 cols on large screens (wide card)
────────────────────────────────────────────────────────────────────── */
const BENTO_CONFIG = [
  {
    colSpan: 'lg:col-span-2',
    minH: 'min-h-[280px]',
    accent: { from: '#10b981', to: '#059669', text: 'text-emerald-400', bar: 'from-emerald-500 to-emerald-400', ring: 'ring-emerald-500/20', badge: 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400' },
    featured: true,
  },
  {
    colSpan: 'lg:col-span-1',
    minH: 'min-h-[260px]',
    accent: { from: '#8b5cf6', to: '#7c3aed', text: 'text-violet-400', bar: 'from-violet-500 to-violet-400', ring: 'ring-violet-500/20', badge: 'bg-violet-500/10 border-violet-500/20 text-violet-400' },
    featured: false,
  },
  {
    colSpan: 'lg:col-span-1',
    minH: 'min-h-[260px]',
    accent: { from: '#f59e0b', to: '#d97706', text: 'text-amber-400', bar: 'from-amber-500 to-amber-400', ring: 'ring-amber-500/20', badge: 'bg-amber-500/10 border-amber-500/20 text-amber-400' },
    featured: false,
  },
  {
    colSpan: 'lg:col-span-2',
    minH: 'min-h-[260px]',
    accent: { from: '#3b82f6', to: '#2563eb', text: 'text-blue-400', bar: 'from-blue-500 to-blue-400', ring: 'ring-blue-500/20', badge: 'bg-blue-500/10 border-blue-500/20 text-blue-400' },
    featured: false,
  },
];

function StatusBadge({ status }) {
  const inProgress = status === 'In Progress';
  return (
    <span className={`inline-flex items-center gap-1.5 text-[11px] font-bold px-2.5 py-1 rounded-full border ${
      inProgress
        ? 'bg-amber-500/10 border-amber-500/20 text-amber-400'
        : 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400'
    }`}>
      {inProgress
        ? <span className="w-1.5 h-1.5 rounded-full bg-amber-400 status-pulse" />
        : <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
      }
      {status}
    </span>
  );
}

function BentoCard({ project, config, index }) {
  const { colSpan, minH, accent, featured } = config;

  return (
    <div
      className={`bento-card group relative ${colSpan} ${minH} glass rounded-2xl border border-zinc-800 overflow-hidden flex flex-col`}
      style={{ '--accent-from': accent.from, '--accent-to': accent.to }}
    >
      {/* Gradient top line */}
      <div
        className="absolute inset-x-0 top-0 h-[2px]"
        style={{ background: `linear-gradient(90deg, ${accent.from}, ${accent.to})` }}
      />

      {/* Subtle background glow on hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: `radial-gradient(ellipse 60% 40% at 50% 0%, ${accent.from}10, transparent)` }}
      />

      <div className="relative z-10 p-6 flex flex-col flex-1">

        {/* Top row: index + status */}
        <div className="flex items-center justify-between mb-4">
          <span className={`text-[11px] font-black tracking-widest ${accent.text} opacity-50 select-none`}>
            {String(index + 1).padStart(2, '0')}
          </span>
          <StatusBadge status={project.status} />
        </div>

        {/* Title */}
        <h3 className={`font-black leading-snug mb-3 transition-colors duration-300 group-hover:${accent.text} ${
          featured ? 'text-2xl text-white' : 'text-xl text-zinc-100'
        }`}>
          {project.title}
        </h3>

        {/* Description */}
        <p className={`text-zinc-500 leading-relaxed flex-1 mb-5 ${featured ? 'text-[15px]' : 'text-[13px]'}`}>
          {project.description}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.technologies.map((tech, i) => (
            <span
              key={i}
              className="text-[11px] font-medium px-2.5 py-1 rounded-md bg-zinc-900 border border-zinc-800 text-zinc-500 hover:text-zinc-200 hover:border-zinc-600 transition-colors cursor-default"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Footer row */}
        <div className="flex items-center justify-between mt-auto">
          {project.githubLink ? (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noreferrer"
              className={`group/link inline-flex items-center gap-2 text-xs font-semibold ${accent.text} opacity-70 hover:opacity-100 transition-opacity`}
            >
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 .5C5.65.5.5 5.65.5 12a11.5 11.5 0 007.86 10.93c.57.1.78-.25.78-.55v-2c-3.2.7-3.87-1.54-3.87-1.54-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.24 3.33.95.1-.74.4-1.24.72-1.53-2.55-.29-5.23-1.28-5.23-5.68 0-1.25.45-2.28 1.18-3.08-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.15 1.18a10.93 10.93 0 015.72 0c2.19-1.49 3.15-1.18 3.15-1.18.63 1.58.23 2.75.12 3.04.74.8 1.18 1.83 1.18 3.08 0 4.41-2.69 5.38-5.25 5.66.41.36.78 1.07.78 2.15v3.19c0 .3.2.66.79.55A11.5 11.5 0 0023.5 12C23.5 5.65 18.35.5 12 .5z" />
              </svg>
              View on GitHub
              <svg className="w-3 h-3 group-hover/link:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          ) : (
            <span />
          )}

          {/* Accent corner mark */}
          <div
            className="w-6 h-6 rounded-md opacity-20 group-hover:opacity-40 transition-opacity"
            style={{ background: `linear-gradient(135deg, ${accent.from}, ${accent.to})` }}
          />
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading,  setLoading]  = useState(true);
  const [error,    setError]    = useState(null);

  useEffect(() => {
    fetch('/api/projects')
      .then((r) => { if (!r.ok) throw new Error('Failed to fetch'); return r.json(); })
      .then((d) => { setProjects(d); setLoading(false); })
      .catch((e) => { setError(e.message); setLoading(false); });
  }, []);

  return (
    <section id="projects" className="relative bg-zinc-900 py-28 text-white overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-zinc-800" />
      <div className="pointer-events-none absolute bottom-0 left-0 w-[600px] h-[400px] bg-emerald-950/20 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="mb-16">
          <span className="chip mb-4">Work</span>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mt-3">
            <h2 className="text-4xl md:text-5xl font-black text-white">
              Featured<span className="text-gradient-emerald"> Projects</span>
            </h2>
            <p className="text-zinc-500 text-sm max-w-xs">
              Built with modern stacks. Data pulled live from MongoDB.
            </p>
          </div>
        </div>

        {/* Loading */}
        {loading && (
          <div className="flex flex-col items-center justify-center py-24 gap-4">
            <div className="relative w-12 h-12">
              <div className="absolute inset-0 rounded-full border-2 border-zinc-800" />
              <div className="absolute inset-0 rounded-full border-2 border-t-emerald-500 animate-spin" />
            </div>
            <p className="text-zinc-600 text-sm">Loading from database…</p>
          </div>
        )}

        {/* Error */}
        {error && (
          <div className="max-w-sm mx-auto glass rounded-2xl p-8 text-center border border-red-500/20">
            <p className="text-3xl mb-3">⚠️</p>
            <p className="text-red-400 font-semibold text-sm mb-1">Failed to load</p>
            <p className="text-zinc-600 text-xs">{error}</p>
          </div>
        )}

        {/* Bento grid */}
        {!loading && !error && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-auto">
            {projects.map((project, i) => (
              <BentoCard
                key={project._id}
                project={project}
                config={BENTO_CONFIG[i % BENTO_CONFIG.length]}
                index={i}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
