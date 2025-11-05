import React from 'react';
import { Mic, Shield, Rocket, Workflow, Headphones, Zap, Check } from 'lucide-react';

const features = [
  {
    icon: Mic,
    title: 'Natural voice understanding',
    desc: 'Advanced speech-to-intent that picks up nuance, context, and multi-turn conversations.'
  },
  {
    icon: Rocket,
    title: 'Workflow automation',
    desc: 'Connect to your tools to book meetings, create tickets, and trigger actions instantly.'
  },
  {
    icon: Shield,
    title: 'Enterprise-grade security',
    desc: 'SOC2-ready patterns, data encryption in transit and at rest, PII redaction.'
  },
  {
    icon: Zap,
    title: 'Real-time responses',
    desc: 'Ultra-low latency streaming that feels human — no awkward pauses.'
  }
];

export default function Features() {
  return (
    <section id="features" className="relative w-full bg-neutral-950 py-24 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Built for outcomes</h2>
          <p className="mt-3 text-white/70">
            AskCatalyst turns conversations into actions with reliability you can trust.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition hover:bg-white/10">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-fuchsia-500/20 via-sky-500/20 to-amber-500/20 text-white">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-white/70">{desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-6">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <div>
              <h3 className="text-xl font-semibold">Plug into your stack</h3>
              <p className="mt-1 text-sm text-white/70">Bring your CRM, helpdesk, calendar, and more. Configure in minutes.</p>
            </div>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
              {['Slack', 'HubSpot', 'Zendesk', 'Salesforce', 'Google Calendar', 'Notion'].map((i) => (
                <div key={i} className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/80">
                  <Check className="h-4 w-4 text-emerald-400" /> {i}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
