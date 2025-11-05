import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-neutral-950 text-white">
      {/* Spline 3D Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Subtle gradient overlays to boost contrast */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-neutral-950/60 via-neutral-950/20 to-neutral-950/80" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-neutral-950" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-6 pt-28 text-center sm:pt-36">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs font-medium text-white/80 backdrop-blur-md">
          <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
          Now live — AI Voice Agent for modern teams
        </span>
        <h1 className="mt-6 text-4xl font-semibold leading-tight tracking-tight text-white sm:text-6xl">
          AskCatalyst
          <span className="block bg-gradient-to-r from-fuchsia-400 via-sky-400 to-amber-300 bg-clip-text text-transparent">
            Conversational AI that closes the loop
          </span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base text-white/80 sm:text-lg">
          Turn voice into action. Capture intent, trigger workflows, and deliver outcomes — all in one seamless AI agent.
        </p>
        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
          <a
            href="#pricing"
            className="inline-flex items-center justify-center rounded-md bg-white px-5 py-3 text-sm font-semibold text-neutral-900 transition hover:bg-white/90"
          >
            Start free trial
          </a>
          <a
            href="#features"
            className="inline-flex items-center justify-center rounded-md border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            See how it works
          </a>
        </div>
        <div className="mt-6 text-xs text-white/60">
          No credit card required • 14‑day free trial
        </div>
      </div>
    </section>
  );
}
