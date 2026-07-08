import React, { useState } from 'react';

const INIT = { name: '', email: '', message: '' };

const CHANNELS = [
  {
    label: 'Email',
    value: 'waqasahmad535632@gmail.com',
    href: 'mailto:waqasahmad535632@gmail.com',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    label: 'Phone',
    value: '+92 318 4281671',
    href: 'tel:+923184281671',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/waqas-ahmed',
    href: 'https://linkedin.com/in/waqas-ahmed',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
];

export default function Contact() {
  const [form,   setForm]   = useState(INIT);
  const [status, setStatus] = useState(null);
  const [err,    setErr]    = useState('');

  const onChange = (e) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setErr('');
    try {
      const res  = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || 'Request failed');
      setStatus('success');
      setForm(INIT);
    } catch (e) {
      setStatus('error');
      setErr(e.message);
    }
  };

  return (
    <section id="contact" className="relative bg-zinc-950 py-16 md:py-24 lg:py-28 text-white overflow-hidden line-grid">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-zinc-900/50 via-transparent to-transparent" />
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[300px] sm:w-[800px] h-[200px] sm:h-[300px] bg-emerald-950/15 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="mb-10 md:mb-16">
          <span className="chip mb-3 md:mb-4">Contact</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mt-3">
            Let's build
            <span className="text-gradient-emerald"> something together</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-8 md:gap-12 items-start">

          {/* ── Left: info ── */}
          <div>
            <p className="text-zinc-400 text-sm md:text-[15px] leading-relaxed mb-8 max-w-md">
              Whether it's a project collab, an internship opportunity, or just a chat about tech —
              I read every message and respond within 24 hours.
            </p>

            <div className="space-y-2 sm:space-y-3">
              {CHANNELS.map(({ label, value, href, icon }) => (
                <a
                  key={href}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                  className="group flex items-center gap-3 sm:gap-4 glass rounded-xl px-4 sm:px-5 py-3 sm:py-4 border border-zinc-800 hover:border-emerald-500/30 transition-all duration-300 hover:-translate-y-0.5"
                >
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-zinc-800 border border-zinc-700 group-hover:bg-emerald-950/40 group-hover:border-emerald-500/30 flex items-center justify-center text-zinc-400 group-hover:text-emerald-400 shrink-0 transition-all duration-300">
                    {icon}
                  </div>
                  <div className="min-w-0">
                    <p className="text-[10px] font-bold text-zinc-600 uppercase tracking-widest">{label}</p>
                    <p className="text-xs sm:text-sm text-zinc-300 group-hover:text-white transition-colors mt-0.5 truncate">{value}</p>
                  </div>
                  <svg className="w-3.5 h-3.5 text-zinc-700 group-hover:text-emerald-500 ml-auto shrink-0 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              ))}
            </div>

            {/* Availability pill */}
            <div className="mt-6 sm:mt-8 glass-emerald rounded-xl px-4 sm:px-5 py-3 sm:py-4 flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-emerald-400 status-pulse shrink-0" />
              <p className="text-xs sm:text-sm text-zinc-400">
                Currently <span className="text-emerald-400 font-semibold">available</span> for internships & freelance projects.
              </p>
            </div>
          </div>

          {/* ── Right: Form ── */}
          <form
            onSubmit={onSubmit}
            className="glass rounded-2xl p-5 sm:p-8 border border-zinc-800 space-y-4 sm:space-y-5"
          >
            <p className="text-sm sm:text-base font-bold text-white mb-1">Send a message</p>

            <div>
              <label htmlFor="cf-name" className="block text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-1.5 sm:mb-2">Full Name</label>
              <input
                id="cf-name" name="name" type="text" required
                value={form.name} onChange={onChange}
                placeholder="John Doe"
                className="input-glow w-full bg-zinc-900 border border-zinc-800 text-white rounded-xl px-4 py-2.5 sm:py-3 text-sm placeholder-zinc-700 transition-all duration-200"
              />
            </div>

            <div>
              <label htmlFor="cf-email" className="block text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-1.5 sm:mb-2">Email Address</label>
              <input
                id="cf-email" name="email" type="email" required
                value={form.email} onChange={onChange}
                placeholder="john@example.com"
                className="input-glow w-full bg-zinc-900 border border-zinc-800 text-white rounded-xl px-4 py-2.5 sm:py-3 text-sm placeholder-zinc-700 transition-all duration-200"
              />
            </div>

            <div>
              <label htmlFor="cf-msg" className="block text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-1.5 sm:mb-2">Message</label>
              <textarea
                id="cf-msg" name="message" rows={4} required
                value={form.message} onChange={onChange}
                placeholder="Hi Waqas, I'd like to discuss..."
                className="input-glow w-full bg-zinc-900 border border-zinc-800 text-white rounded-xl px-4 py-2.5 sm:py-3 text-sm placeholder-zinc-700 transition-all duration-200 resize-none"
              />
            </div>

            {status === 'success' && (
              <div className="flex items-center gap-2.5 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium rounded-xl px-4 py-3">
                <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Sent! I'll get back to you within 24 hours.
              </div>
            )}
            {status === 'error' && (
              <div className="flex items-center gap-2.5 bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-medium rounded-xl px-4 py-3">
                <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {err}
              </div>
            )}

            <button
              type="submit"
              disabled={status === 'loading'}
              className="btn-shine w-full flex items-center justify-center gap-2.5 bg-emerald-500 hover:bg-emerald-400 disabled:opacity-50 disabled:cursor-not-allowed text-zinc-950 font-bold py-3 sm:py-3.5 rounded-xl transition-all duration-200 shadow-lg shadow-emerald-500/20 hover:-translate-y-0.5 text-sm"
            >
              {status === 'loading' ? (
                <>
                  <span className="w-4 h-4 border-2 border-zinc-950/30 border-t-zinc-950 rounded-full animate-spin" />
                  Sending…
                </>
              ) : (
                <>
                  Send Message
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
