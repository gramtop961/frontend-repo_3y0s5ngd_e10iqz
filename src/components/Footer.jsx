import React from 'react';
import { Rocket } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="cta" className="relative w-full bg-neutral-950 pb-12 pt-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-fuchsia-500/10 via-sky-500/10 to-amber-500/10 p-8 text-center">
          <div className="mx-auto max-w-2xl">
            <h3 className="text-2xl font-semibold sm:text-3xl">Give your customers a voice they’ll love</h3>
            <p className="mt-2 text-white/70">Deploy an AI agent that understands, acts, and resolves in real time.</p>
            <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="#pricing"
                className="inline-flex items-center justify-center rounded-md bg-white px-5 py-3 text-sm font-semibold text-neutral-900 transition hover:bg-white/90"
              >
                Get started
              </a>
              <a
                href="mailto:hello@askcatalyst.in"
                className="inline-flex items-center justify-center rounded-md border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Talk to sales
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-sm text-white/60 sm:flex-row">
          <div className="flex items-center gap-2">
            <Rocket className="h-4 w-4" />
            <span>AskCatalyst</span>
            <span className="mx-2">•</span>
            <span>© {new Date().getFullYear()}</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#pricing" className="hover:text-white">Pricing</a>
            <a href="mailto:hello@askcatalyst.in" className="hover:text-white">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
