import React from 'react';
import { ArrowUpRight, Mail, Linkedin, Twitter, BookOpen, BarChart3, GraduationCap } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-indigo-500 selection:text-white">
      
      {/* Header / Nav */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-white/70 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="font-bold tracking-tight text-xl bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
            Boluwatife.
          </span>
          <a 
            href="#contact" 
            className="bg-slate-900 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-indigo-600 transition-colors duration-200"
          >
            Let's Chat
          </a>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-16 space-y-24">
        
        {/* Hero Section */}
        <section className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight">
            Building frameworks for <span className="text-indigo-600">growth</span>, education, and social impact.
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl leading-relaxed">
            Hi, I’m Boluwatife Adedunmoye. I operate at the intersection of financial strategy, creative education, and systemic impact. From trading markets to designing presentation decks and leading non-profit initiatives, I scale ideas into reality.
          </p>
          <div className="flex gap-4 pt-2">
            <a href="#contact" className="inline-flex items-center gap-2 bg-indigo-600 text-white px-5 py-3 rounded-xl font-medium hover:bg-indigo-700 transition">
              Get in touch <Mail size={18} />
            </a>
            <a href="/resume.pdf" target="_blank" className="inline-flex items-center gap-2 border border-slate-300 text-slate-700 px-5 py-3 rounded-xl font-medium hover:bg-slate-100 transition">
              View Resume <ArrowUpRight size={18} />
            </a>
          </div>
        </section>

        {/* Core Pillars */}
        <section className="space-y-8">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">What I Do</h2>
          <div className="grid md:grid-cols-3 gap-6">
            
            <div className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm space-y-4">
              <div className="p-3 bg-indigo-50 text-indigo-600 rounded-xl w-fit"><BarChart3 size={24} /></div>
              <h3 className="font-bold text-lg">Finance & Strategy</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Active financial market trader specializing in risk-reward systems, data analysis, and private equity frameworks to scale small businesses.
              </p>
            </div>

            <div className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm space-y-4">
              <div className="p-3 bg-violet-50 text-violet-600 rounded-xl w-fit"><GraduationCap size={24} /></div>
              <h3 className="font-bold text-lg">Social Impact</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Founder of The 'A' Project and former Hult Prize Campus Director. Passionate about creative education for underserved youth.
              </p>
            </div>

            <div className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm space-y-4">
              <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl w-fit"><BookOpen size={24} /></div>
              <h3 className="font-bold text-lg">Design & Rhetoric</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Crafting visual narratives through pitch deck design and exploring the art of persuasion to build impactful personal brands.
              </p>
            </div>

          </div>
        </section>

        {/* Quick Insights / Highlights */}
        <section className="bg-slate-950 text-white rounded-3xl p-8 md:p-12 shadow-xl space-y-6">
          <h2 className="text-xl font-semibold text-indigo-400">Current Focus</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <h4 className="text-xs uppercase tracking-wider text-slate-400 font-bold mb-1">Background</h4>
              <p className="text-slate-200 text-sm">B.Tech in Anatomy (LAUTECH) | Global Leadership Fellow</p>
            </div>
            <div>
              <h4 className="text-xs uppercase tracking-wider text-slate-400 font-bold mb-1">Initiatives</h4>
              <p className="text-slate-200 text-sm">Host of the Regal Expressions conversation series.</p>
            </div>
          </div>
        </section>

        {/* Contact / Connect Form */}
        <section id="contact" className="space-y-8 bg-white border border-slate-200 p-8 rounded-3xl shadow-sm">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">Let's Connect</h2>
            <p className="text-slate-600">Have a startup pitch deck to build, a market strategy to discuss, or a social project to collaborate on? Drop a message.</p>
          </div>
          
          {/* Using Web3Forms or Formspree for zero-backend Vercel hosting */}
          <form action="https://api.web3forms.com/submit" method="POST" className="space-y-4">
            {/* Replace YOUR_ACCESS_KEY_HERE with a key from web3forms.com */}
            <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" />
            
            <div className="grid sm:grid-cols-2 gap-4">
              <input type="text" name="name" placeholder="Your Name" required className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-slate-50 text-sm" />
              <input type="email" name="email" placeholder="Your Email" required className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-slate-50 text-sm" />
            </div>
            <textarea name="message" rows="4" placeholder="Your Message" required className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-slate-50 text-sm"></textarea>
            
            <button type="submit" className="w-full bg-slate-900 text-white font-medium py-3 rounded-xl hover:bg-indigo-600 transition duration-200 text-sm">
              Send Email
            </button>
          </form>
        </section>

      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white py-8 mt-12">
        <div className="max-w-4xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>© {new Date().getFullYear()} Boluwatife Adedunmoye. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="https://linkedin.com" target="_blank" className="hover:text-indigo-600 transition"><Linkedin size={18} /></a>
            <a href="https://twitter.com" target="_blank" className="hover:text-indigo-600 transition"><Twitter size={18} /></a>
          </div>
        </div>
      </footer>

    </div>
  );
}
