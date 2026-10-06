import { motion } from 'framer-motion';
import { Check, ArrowRight, BarChart3, Boxes, Users, FileText, Layers, Lock } from 'lucide-react';
import { FEATURE_LIST } from '@/data/content';
import { Reveal, SectionTag } from './ui/Reveal';

const FEATURE_ICONS = [
  BarChart3, Boxes, FileText, Users, Layers, Users, Lock,
];

export function FeaturedProduct() {
  return (
    <section id="featured" className="relative overflow-hidden bg-white py-24 lg:py-32">
      <div className="absolute inset-0 grid-bg-fine opacity-50" />
      <div className="absolute top-1/2 left-1/2 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-500/[0.05] blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: Product mockup */}
          <Reveal>
            <ProductMockup />
          </Reveal>

          {/* Right: content */}
          <div>
            <Reveal>
              <SectionTag>Solution phare</SectionTag>
              <h2 className="mt-6 font-display text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] text-balance">
                Une technologie pensée pour votre quotidien.
              </h2>
              <p className="mt-5 text-lg text-slate-500">
                Notre plateforme de gestion et de point de vente centralise vos ventes, votre stock et votre clientèle dans une interface moderne, intuitive et sécurisée.
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {FEATURE_LIST.map((feature, i) => {
                  const Icon = FEATURE_ICONS[i] ?? Check;
                  return (
                    <div
                      key={feature}
                      className="flex items-center gap-3 rounded-xl border border-slate-200/80 bg-white px-4 py-3 transition-colors hover:border-brand-200 hover:bg-brand-50/50"
                    >
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-50">
                        <Icon className="h-4 w-4 text-brand-600" />
                      </div>
                      <span className="text-sm font-medium text-slate-700">{feature}</span>
                    </div>
                  );
                })}
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <a
                href="#contact"
                className="group mt-10 inline-flex items-center gap-2 rounded-xl bg-brand-500 px-6 py-3.5 text-sm font-semibold text-white transition-all hover:bg-brand-400 hover:shadow-xl hover:shadow-brand-500/30"
              >
                Demander une démo
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProductMockup() {
  return (
    <div className="relative">
      <div className="absolute inset-0 -z-10 rounded-3xl bg-brand-500/8 blur-3xl" />

      <div className="rounded-2xl border border-slate-200 bg-white shadow-2xl shadow-slate-300/40">
        {/* Top bar */}
        <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded-md bg-gradient-to-br from-brand-400 to-brand-600" />
            <span className="font-display text-sm font-semibold text-slate-900">CREA SOLUTION POS</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-emerald-500" />
            <span className="text-[10px] text-slate-400">En ligne</span>
          </div>
        </div>

        {/* Body */}
        <div className="grid grid-cols-[200px_1fr] gap-0">
          {/* Sidebar */}
          <div className="hidden border-r border-slate-100 p-3 sm:block">
            <div className="space-y-1">
              {['Tableau de bord', 'Ventes', 'Stock', 'Clients', 'Produits', 'Rapports'].map((item, i) => (
                <div
                  key={item}
                  className={`flex items-center gap-2 rounded-lg px-3 py-2 text-xs ${
                    i === 0 ? 'bg-brand-50 text-brand-600' : 'text-slate-500'
                  }`}
                >
                  <div className={`h-3.5 w-3.5 rounded ${i === 0 ? 'bg-brand-400/60' : 'bg-slate-200'}`} />
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Main panel */}
          <div className="p-5 space-y-4">
            {/* Header */}
            <div className="flex items-center justify-between">
              <div>
                <div className="font-display text-base font-semibold text-slate-900">Vue d'ensemble</div>
                <div className="text-[10px] text-slate-400">Octobre 2026</div>
              </div>
              <div className="flex gap-1.5">
                <div className="h-6 w-6 rounded-md bg-slate-100" />
                <div className="h-6 w-6 rounded-md bg-slate-100" />
              </div>
            </div>

            {/* KPI row */}
            <div className="grid grid-cols-3 gap-2">
              {[
                { label: 'Revenu', value: '€48.2k', trend: '+12%' },
                { label: 'Commandes', value: '1,847', trend: '+8%' },
                { label: 'Panier moyen', value: '€26', trend: '+3%' },
              ].map((kpi) => (
                <div key={kpi.label} className="rounded-xl border border-slate-100 bg-slate-50/80 p-3">
                  <div className="text-[10px] text-slate-400">{kpi.label}</div>
                  <div className="mt-1 font-display text-sm font-bold text-slate-900">{kpi.value}</div>
                  <div className="text-[10px] text-emerald-600">{kpi.trend}</div>
                </div>
              ))}
            </div>

            {/* Chart */}
            <div className="rounded-xl border border-slate-100 bg-slate-50/60 p-4">
              <div className="mb-3 flex items-center justify-between">
                <span className="text-xs text-slate-500">Ventes / jour</span>
                <div className="flex gap-2">
                  <div className="h-2 w-2 rounded-full bg-brand-500" />
                  <span className="text-[10px] text-slate-400">Cette semaine</span>
                </div>
              </div>
              <div className="flex h-28 items-end gap-2">
                {[55, 72, 48, 90, 65, 100, 78].map((h, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    whileInView={{ height: `${h}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: i * 0.08 }}
                    className="flex-1 rounded-t bg-gradient-to-t from-brand-600/40 to-brand-400/80"
                  />
                ))}
              </div>
              <div className="mt-2 flex justify-between text-[9px] text-slate-400">
                {['L', 'M', 'M', 'J', 'V', 'S', 'D'].map((d) => <span key={d}>{d}</span>)}
              </div>
            </div>

            {/* Recent transactions */}
            <div className="space-y-2">
              <div className="text-xs font-medium text-slate-500">Dernières ventes</div>
              {[
                { id: '#1042', label: 'Commande restaurant', amount: '€84.50', status: 'Payé' },
                { id: '#1041', label: 'Boutique – 3 articles', amount: '€156.00', status: 'Payé' },
              ].map((tx) => (
                <div key={tx.id} className="flex items-center gap-3 rounded-lg border border-slate-100 bg-slate-50/60 px-3 py-2.5">
                  <div className="h-7 w-7 rounded-md bg-brand-100" />
                  <div className="flex-1">
                    <div className="text-xs text-slate-900">{tx.label}</div>
                    <div className="text-[10px] text-slate-400">{tx.id}</div>
                  </div>
                  <div className="text-xs font-semibold text-slate-900">{tx.amount}</div>
                  <div className="rounded-md bg-emerald-100 px-2 py-0.5 text-[10px] text-emerald-700">{tx.status}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
