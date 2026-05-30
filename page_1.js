import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Mail, Linkedin, Twitter, Cpu, Lightbulb, Users } from 'lucide-react';

const royalBlue = {
  50:  '#eef2ff',
  100: '#dbeafe',
  200: '#bfdbfe',
  400: '#60a5fa',
  500: '#3b6fd4',
  600: '#1a3fc4',
  700: '#1a34a8',
  800: '#1a2d8a',
  900: '#0f1e5c',
  950: '#080f30',
};

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800;900&family=DM+Sans:wght@300;400;500;600&display=swap');

  :root {
    --rb-50:  #eef2ff;
    --rb-100: #dbeafe;
    --rb-200: #bfdbfe;
    --rb-400: #60a5fa;
    --rb-500: #3b6fd4;
    --rb-600: #1a3fc4;
    --rb-700: #1a34a8;
    --rb-800: #1a2d8a;
    --rb-900: #0f1e5c;
    --rb-950: #080f30;
  }

  * { box-sizing: border-box; margin: 0; padding: 0; }

  body {
    font-family: 'DM Sans', sans-serif;
    background: #f6f8fe;
    color: #0f1e5c;
  }

  ::selection { background: var(--rb-600); color: #fff; }

  /* ---------- HEADER ---------- */
  .header {
    position: sticky; top: 0; z-index: 50;
    backdrop-filter: blur(14px);
    background: rgba(255,255,255,0.82);
    border-bottom: 1px solid var(--rb-100);
  }
  .header-inner {
    max-width: 960px; margin: 0 auto;
    padding: 18px 32px;
    display: flex; justify-content: space-between; align-items: center;
  }
  .logo {
    font-family: 'Playfair Display', serif;
    font-weight: 900; font-size: 1.25rem;
    background: linear-gradient(135deg, var(--rb-600), var(--rb-400));
    -webkit-background-clip: text; -webkit-text-fill-color: transparent;
    letter-spacing: -0.5px;
  }
  .nav-cta {
    background: var(--rb-700);
    color: #fff;
    padding: 9px 22px;
    border-radius: 999px;
    font-size: 0.85rem; font-weight: 600;
    text-decoration: none;
    transition: background 0.2s, transform 0.15s;
    border: none; cursor: pointer;
  }
  .nav-cta:hover { background: var(--rb-600); transform: translateY(-1px); }

  /* ---------- MAIN ---------- */
  .main {
    max-width: 960px; margin: 0 auto;
    padding: 72px 32px;
    display: flex; flex-direction: column; gap: 96px;
  }

  /* ---------- HERO ---------- */
  .hero { display: flex; flex-direction: column; gap: 24px; }

  .hero-eyebrow {
    display: inline-flex; align-items: center; gap: 8px;
    background: var(--rb-50); border: 1px solid var(--rb-200);
    border-radius: 999px; padding: 6px 16px;
    font-size: 0.78rem; font-weight: 600;
    color: var(--rb-700); letter-spacing: 0.04em; text-transform: uppercase;
    width: fit-content;
  }
  .hero-eyebrow span { width: 7px; height: 7px; border-radius: 50%; background: var(--rb-500); display: inline-block; animation: pulse 2s infinite; }
  @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.3} }

  .hero h1 {
    font-family: 'Playfair Display', serif;
    font-size: clamp(2.4rem, 6vw, 4rem);
    font-weight: 900; line-height: 1.1;
    letter-spacing: -1px;
    color: var(--rb-950);
  }
  .hero h1 em {
    font-style: normal;
    color: var(--rb-600);
    border-bottom: 3px solid var(--rb-300);
    padding-bottom: 2px;
  }
  .hero p {
    font-size: 1.1rem; line-height: 1.75;
    color: #3a4a7a; max-width: 640px;
  }
  .hero-btns { display: flex; gap: 14px; flex-wrap: wrap; padding-top: 8px; }

  .btn-primary {
    display: inline-flex; align-items: center; gap: 8px;
    background: var(--rb-700); color: #fff;
    padding: 13px 26px; border-radius: 14px;
    font-size: 0.92rem; font-weight: 600;
    text-decoration: none;
    transition: background 0.2s, box-shadow 0.2s, transform 0.15s;
    box-shadow: 0 4px 18px rgba(26,52,168,0.28);
  }
  .btn-primary:hover { background: var(--rb-600); transform: translateY(-2px); box-shadow: 0 8px 28px rgba(26,52,168,0.35); }

  .btn-secondary {
    display: inline-flex; align-items: center; gap: 8px;
    border: 1.5px solid var(--rb-200); color: var(--rb-800);
    padding: 13px 26px; border-radius: 14px;
    font-size: 0.92rem; font-weight: 600;
    text-decoration: none; background: #fff;
    transition: border-color 0.2s, background 0.2s, transform 0.15s;
  }
  .btn-secondary:hover { border-color: var(--rb-500); background: var(--rb-50); transform: translateY(-2px); }

  /* ---------- PILLARS ---------- */
  .pillars h2 {
    font-family: 'Playfair Display', serif;
    font-size: 1.75rem; font-weight: 800;
    color: var(--rb-950); margin-bottom: 32px;
  }
  .pillars-grid {
    display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 24px;
  }
  .pillar-card {
    background: #fff;
    border: 1px solid var(--rb-100);
    border-radius: 20px;
    padding: 28px;
    display: flex; flex-direction: column; gap: 16px;
    box-shadow: 0 2px 12px rgba(26,52,168,0.06);
    transition: transform 0.2s, box-shadow 0.2s;
  }
  .pillar-card:hover { transform: translateY(-4px); box-shadow: 0 12px 36px rgba(26,52,168,0.13); }
  .pillar-icon {
    width: 48px; height: 48px; border-radius: 14px;
    display: flex; align-items: center; justify-content: center;
  }
  .icon-blue  { background: var(--rb-50);  color: var(--rb-700); }
  .icon-navy  { background: #e8ecff;       color: var(--rb-900); }
  .icon-steel { background: #dde9ff;       color: var(--rb-600); }
  .pillar-card h3 {
    font-family: 'Playfair Display', serif;
    font-size: 1.1rem; font-weight: 700; color: var(--rb-950);
  }
  .pillar-card p { font-size: 0.88rem; line-height: 1.7; color: #4a5a88; }

  /* ---------- FOCUS BAND ---------- */
  .focus-band {
    background: linear-gradient(135deg, var(--rb-950) 0%, var(--rb-800) 100%);
    border-radius: 28px; padding: 52px;
    box-shadow: 0 24px 64px rgba(8,15,48,0.35);
    position: relative; overflow: hidden;
  }
  .focus-band::before {
    content: '';
    position: absolute; inset: 0;
    background: radial-gradient(ellipse at 80% 20%, rgba(96,165,250,0.12) 0%, transparent 60%);
    pointer-events: none;
  }
  .focus-label {
    font-size: 0.72rem; letter-spacing: 0.1em; text-transform: uppercase;
    font-weight: 700; color: var(--rb-400); margin-bottom: 28px;
  }
  .focus-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 32px; }
  .focus-item h4 {
    font-size: 0.72rem; letter-spacing: 0.08em; text-transform: uppercase;
    font-weight: 700; color: var(--rb-400); margin-bottom: 6px;
  }
  .focus-item p { color: #c7d3f5; font-size: 0.9rem; line-height: 1.6; }

  /* ---------- CONTACT ---------- */
  .contact-section {
    background: #fff; border: 1px solid var(--rb-100);
    border-radius: 28px; padding: 48px;
    box-shadow: 0 2px 16px rgba(26,52,168,0.07);
  }
  .contact-section h2 {
    font-family: 'Playfair Display', serif;
    font-size: 2rem; font-weight: 800; color: var(--rb-950); margin-bottom: 8px;
  }
  .contact-section > p { color: #4a5a88; font-size: 0.95rem; margin-bottom: 32px; }

  .form { display: flex; flex-direction: column; gap: 16px; }
  .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
  .form input, .form textarea {
    width: 100%; padding: 13px 16px;
    border: 1.5px solid var(--rb-100);
    border-radius: 12px; font-family: 'DM Sans', sans-serif;
    font-size: 0.9rem; background: #f6f8fe; color: var(--rb-950);
    transition: border-color 0.2s, box-shadow 0.2s;
    outline: none;
  }
  .form input:focus, .form textarea:focus {
    border-color: var(--rb-500);
    box-shadow: 0 0 0 3px rgba(59,111,212,0.15);
  }
  .form textarea { resize: vertical; min-height: 120px; }
  .submit-btn {
    width: 100%; background: var(--rb-700); color: #fff;
    padding: 14px; border-radius: 12px;
    font-size: 0.92rem; font-weight: 600; font-family: 'DM Sans', sans-serif;
    border: none; cursor: pointer;
    transition: background 0.2s, transform 0.15s, box-shadow 0.2s;
    box-shadow: 0 4px 18px rgba(26,52,168,0.25);
  }
  .submit-btn:hover { background: var(--rb-600); transform: translateY(-1px); box-shadow: 0 8px 24px rgba(26,52,168,0.32); }
  .submit-btn:disabled { opacity: 0.6; cursor: not-allowed; transform: none; }
  .form-status { font-size: 0.88rem; text-align: center; padding: 8px; border-radius: 8px; }
  .form-status.success { background: #e6f4ea; color: #1a7a3c; }
  .form-status.error   { background: #fee; color: #a00; }

  /* ---------- FOOTER ---------- */
  .footer {
    border-top: 1px solid var(--rb-100);
    background: #fff;
    padding: 28px 0;
  }
  .footer-inner {
    max-width: 960px; margin: 0 auto;
    padding: 0 32px;
    display: flex; justify-content: space-between; align-items: center;
    gap: 16px; flex-wrap: wrap;
    font-size: 0.84rem; color: #7a8aaa;
  }
  .footer-links { display: flex; gap: 20px; }
  .footer-links a { color: #7a8aaa; transition: color 0.2s; }
  .footer-links a:hover { color: var(--rb-600); }

  /* ---------- RESPONSIVE ---------- */
  @media (max-width: 640px) {
    .focus-grid  { grid-template-columns: 1fr; }
    .form-row    { grid-template-columns: 1fr; }
    .focus-band  { padding: 32px 24px; }
    .contact-section { padding: 32px 24px; }
    .main { padding: 48px 20px; gap: 64px; }
    .header-inner { padding: 16px 20px; }
  }
`;

export default function Home() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(null); // null | 'sending' | 'success' | 'error'

  const handleChange = (e) => {
    setFormState(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: 'YOUR_ACCESS_KEY_HERE',
          ...formState,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus('success');
        setFormState({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <>
      <style>{styles}</style>

      <div>
        {/* ── HEADER ── */}
        <header className="header">
          <div className="header-inner">
            <span className="logo">Boluwatife O. Adedunmoye.</span>
            <a href="#contact" className="nav-cta">Let's Chat</a>
          </div>
        </header>

        {/* ── MAIN ── */}
        <main className="main">

          {/* Hero */}
          <section className="hero">
            <div className="hero-eyebrow">
              <span /> Available for collaborations
            </div>
            <h1>
              Building frameworks for <em>growth</em>,<br />
              education, and social impact.
            </h1>
            <p>
              Hi, I'm Boluwatife O. Adedunmoye. I operate at the intersection of technology,
              entrepreneurship, and people development — turning bold ideas into systems that
              create lasting change.
            </p>
            <div className="hero-btns">
              <a href="#contact" className="btn-primary">
                Get in touch <Mail size={16} />
              </a>
              <a href="/resume.pdf" target="_blank" rel="noreferrer" className="btn-secondary">
                View Resume <ArrowUpRight size={16} />
              </a>
            </div>
          </section>

          {/* What I Do */}
          <section className="pillars">
            <h2>What I Do</h2>
            <div className="pillars-grid">

              <div className="pillar-card">
                <div className="pillar-icon icon-blue"><Cpu size={22} /></div>
                <h3>Technology</h3>
                <p>
                  Leveraging technology as a tool for transformation — from building data-driven
                  systems and digital products to exploring how emerging tech can solve real-world
                  problems at scale. I believe the right technology, thoughtfully applied, is one
                  of the most powerful levers for change.
                </p>
              </div>

              <div className="pillar-card">
                <div className="pillar-icon icon-navy"><Lightbulb size={22} /></div>
                <h3>Entrepreneurship</h3>
                <p>
                  From founding initiatives to advising early-stage ventures, I understand what it
                  takes to build something from zero. I work with entrepreneurs to craft strategic
                  frameworks, develop compelling narratives, and build business models that are
                  both resilient and scalable.
                </p>
              </div>

              <div className="pillar-card">
                <div className="pillar-icon icon-steel"><Users size={22} /></div>
                <h3>People Development</h3>
                <p>
                  Talent is everywhere; opportunity is not. Through mentorship, leadership programmes,
                  and community building, I invest in people — helping individuals discover their
                  potential, build capacity, and step confidently into purposeful careers and lives.
                </p>
              </div>

            </div>
          </section>

          {/* Current Focus */}
          <section className="focus-band">
            <p className="focus-label">Current Focus</p>
            <div className="focus-grid">
              <div className="focus-item">
                <h4>Background</h4>
                <p>B.Tech in Anatomy (LAUTECH) · Global Leadership Fellow</p>
              </div>
              <div className="focus-item">
                <h4>Initiatives</h4>
                <p>Host of the Regal Expressions conversation series · Founder, The 'A' Project</p>
              </div>
              <div className="focus-item">
                <h4>Previous Roles</h4>
                <p>Hult Prize Campus Director · Social Innovation Advocate</p>
              </div>
              <div className="focus-item">
                <h4>Currently Exploring</h4>
                <p>The intersection of AI, education, and access in emerging markets</p>
              </div>
            </div>
          </section>

          {/* Contact */}
          <section id="contact" className="contact-section">
            <h2>Let's Connect</h2>
            <p>
              Have a startup to build, a leadership challenge to solve, or a community project
              to collaborate on? Send a message — I'd love to hear from you.
            </p>

            <form className="form" onSubmit={handleSubmit}>
              <div className="form-row">
                <input
                  type="text" name="name" placeholder="Your Name"
                  required value={formState.name} onChange={handleChange}
                />
                <input
                  type="email" name="email" placeholder="Your Email"
                  required value={formState.email} onChange={handleChange}
                />
              </div>
              <textarea
                name="message" rows="4" placeholder="Your Message"
                required value={formState.message} onChange={handleChange}
              />

              {status === 'success' && (
                <p className="form-status success">✓ Message sent! I'll be in touch soon.</p>
              )}
              {status === 'error' && (
                <p className="form-status error">Something went wrong. Please try again.</p>
              )}

              <button type="submit" className="submit-btn" disabled={status === 'sending'}>
                {status === 'sending' ? 'Sending…' : 'Send Message'}
              </button>
            </form>
          </section>

        </main>

        {/* ── FOOTER ── */}
        <footer className="footer">
          <div className="footer-inner">
            <p>© {new Date().getFullYear()} Boluwatife O. Adedunmoye. All rights reserved.</p>
            <div className="footer-links">
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <Linkedin size={17} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter/X">
                <Twitter size={17} />
              </a>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
