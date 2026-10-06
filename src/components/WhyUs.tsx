import { motion } from 'framer-motion';
import { Cpu, Target, Headphones, Handshake } from 'lucide-react';
import { STATS } from '@/data/content';
import { Reveal, SectionTag } from './ui/Reveal';

const ADVANTAGES = [
  {
    icon: Cpu,
    title: 'Expertise technique',
    description: "Une équipe d'ingénieurs et techniciens certifiés, à la pointe des technologies IT et logicielles.",
  },
  {
    icon: Target,
    title: 'Solutions adaptées',
    description: 'Des réponses sur-mesure, calibrées selon votre secteur, votre taille et vos contraintes réelles.',
  },
  {
    icon: Headphones,
    title: 'Support réactif',
    description: 'Une assistance disponible 24/7, avec intervention rapide et résolution efficace des incidents.',
  },
  {
    icon: Handshake,
    title: 'Accompagnement durable',
    description: "Un accompagnement durable, de la mise en service à l'évolution continue de vos systèmes.",
  },
];

export function WhyUs() {
  return (
    <section className="relative overflow-hidden bg-white py-24 lg:py-32">
      <div className="absolute inset-0 grid-bg-fine opacity-30" />
      <div className="absolute -top-20 right-0 h-[400px] w-[400px] rounded-full bg-brand-500/[0.06] blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal className="max-w-2xl">
          <SectionTag>Pourquoi nous</SectionTag>
          <h2 className="mt-6 font-display text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl text-balance">
            Pourquoi nous faire confiance ?
          </h2>
        </Reveal>

        {/* Stats bar */}
        <Reveal delay={0.1}>
          <div className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-slate-200/80 bg-slate-200/70 lg:grid-cols-4">
            {STATS.map((stat) => (
              <div key={stat.label} className="bg-white p-8 text-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="font-display text-4xl font-bold gradient-text lg:text-5xl"
                >
                  {stat.value}
                </motion.div>
                <div className="mt-2 text-sm text-slate-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Advantages */}
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {ADVANTAGES.map((adv, i) => (
            <Reveal key={adv.title} delay={i * 0.08}>
              <div className="group h-full rounded-2xl border border-slate-200/80 bg-white p-7 transition-all hover:border-brand-200 hover:shadow-premium">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-brand-100 bg-brand-50 transition-transform group-hover:scale-110">
                  <adv.icon className="h-5 w-5 text-brand-600" />
                </div>
                <h3 className="mt-5 font-display text-base font-semibold text-slate-900">{adv.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-slate-500">{adv.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
