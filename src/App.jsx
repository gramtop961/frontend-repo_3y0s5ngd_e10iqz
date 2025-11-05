import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen w-full bg-neutral-950 font-inter text-white">
      {/* Top bar / simple brand */}
      <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-neutral-950/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2 text-white">
            <div className="h-5 w-5 rounded-full bg-gradient-to-br from-fuchsia-400 via-sky-400 to-amber-300" />
            <span className="text-sm font-semibold tracking-tight">AskCatalyst</span>
          </div>
          <nav className="hidden items-center gap-6 text-sm text-white/80 sm:flex">
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#pricing" className="hover:text-white">Pricing</a>
            <a href="#cta" className="hover:text-white">Get started</a>
          </nav>
          <a href="#pricing" className="rounded-md bg-white px-3 py-2 text-xs font-semibold text-neutral-900 sm:hidden">Start</a>
        </div>
      </header>

      <main>
        <Hero />
        <Features />
        <Pricing />
      </main>

      <Footer />
    </div>
  );
}
