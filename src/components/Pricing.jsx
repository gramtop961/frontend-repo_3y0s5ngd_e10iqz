import React from 'react';
import { Check } from 'lucide-react';

const tiers = [
  {
    name: 'Starter',
    price: 'Free',
    tagline: 'Get started in minutes',
    features: ['100 minutes / month', 'Email support', 'Community access'],
    cta: 'Start free',
    highlight: false,
  },
  {
    name: 'Growth',
    price: '$49',
    tagline: 'Scale with your team',
    features: ['2,000 minutes / month', 'Webhook & API access', 'Priority support'],
    cta: 'Choose Growth',
    highlight: true,
  },
  {
    name: 'Enterprise',
    price: 'Let’s talk',
    tagline: 'Custom SLAs & controls',
    features: ['Unlimited minutes', 'SSO & SCIM', 'Dedicated success manager'],
    cta: 'Contact sales',
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative w-full bg-neutral-950 py-24 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Simple, transparent pricing</h2>
          <p className="mt-3 text-white/70">Start free and upgrade when you’re ready. Cancel anytime.</p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative rounded-2xl border border-white/10 p-6 ${
                tier.highlight ? 'bg-white text-neutral-900' : 'bg-white/5 text-white'
              }`}
            >
              {tier.highlight && (
                <div className="absolute -top-3 right-4 rounded-full bg-neutral-900 px-3 py-1 text-xs font-semibold text-white">
                  Most popular
                </div>
              )}
              <h3 className="text-xl font-semibold">{tier.name}</h3>
              <div className="mt-2 flex items-end gap-1">
                <span className="text-4xl font-bold">{tier.price}</span>
                {tier.price !== 'Let’s talk' && <span className="pb-1 text-sm opacity-70">/month</span>}
              </div>
              <p className={`mt-1 text-sm ${tier.highlight ? 'text-neutral-600' : 'text-white/70'}`}>{tier.tagline}</p>

              <ul className="mt-6 space-y-2">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm">
                    <Check className={`h-4 w-4 ${tier.highlight ? 'text-emerald-600' : 'text-emerald-400'}`} />
                    <span className={tier.highlight ? 'text-neutral-800' : 'text-white/90'}>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#cta"
                className={`mt-8 inline-flex w-full items-center justify-center rounded-md px-4 py-2 text-sm font-semibold transition ${
                  tier.highlight
                    ? 'bg-neutral-900 text-white hover:bg-neutral-800'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                {tier.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
