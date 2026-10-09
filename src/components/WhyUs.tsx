import { motion } from 'framer-motion';
import { Cpu, Target, Headphones, Handshake } from 'lucide-react';
import { STATS } from '@/data/content';
import { Reveal, SectionTag } from './ui/Reveal';

const ADVANTAGES = [
  {
    icon: Cpu,
    title: 'Expertise technique',
    description:
      "Une équipe d'ingénieurs et techniciens certifiés, à la pointe des technologies IT et logicielles.",
  },
  {
    icon: Target,
    title: 'Solutions adaptées',
    description:
      'Des réponses sur-mesure, calibrées selon votre secteur, votre taille et vos contraintes réelles.',
  },
  {
    icon: Headphones,
    title: 'Support réactif',
    description:
      'Une assistance disponible 24/7, avec intervention rapide et résolution efficace des incidents.',
  },
  {
    icon: Handshake,
    title: 'Accompagnement durable',
    description:
      "Un accompagnement durable, de la mise en service à l'évolution continue de vos systèmes.",
  },
];

export function WhyUs() {
  return (
    <section className="relative overflow-hidden bg-white py-24 lg:py-32">
      {/* Background effects */}
      <div className="pointer-events-none absolute inset-0 grid-bg-fine opacity-30" />

      <div className="pointer-events-none absolute -right-20 -top-20 h-[400px] w-[400px] rounded-full bg-sky-400/[0.07] blur-[100px]" />

      <div className="pointer-events-none absolute -bottom-32 -left-20 h-[350px] w-[350px] rounded-full bg-blue-400/[0.06] blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section heading */}
        <Reveal className="max-w-2xl">
          <SectionTag>Pourquoi nous</SectionTag>

          <h2 className="mt-6 text-balance font-display text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Pourquoi nous faire confiance
            <span className="bg-gradient-to-r from-sky-500 to-blue-700 bg-clip-text text-transparent">
              {' '}?
            </span>
          </h2>

          <p className="mt-5 max-w-xl text-base leading-8 text-slate-500 sm:text-lg">
            Un partenaire engagé à vos côtés pour sécuriser vos opérations,
            optimiser vos outils et accompagner votre croissance.
          </p>
        </Reveal>

        {/* Stats bar */}
        <Reveal delay={0.1}>
          <div className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-slate-200/80 bg-slate-200/70 shadow-sm lg:grid-cols-4">
            {STATS.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.08,
                  ease: 'easeOut',
                }}
                className="group relative overflow-hidden bg-white p-6 text-center transition-colors duration-300 hover:bg-slate-50 sm:p-8"
              >
                {/* Animated vertical line */}
                <div className="absolute left-0 top-0 h-full w-1 origin-top scale-y-0 bg-gradient-to-b from-sky-400 to-blue-600 transition-transform duration-300 group-hover:scale-y-100" />

                <div className="font-display text-3xl font-bold tracking-tight text-transparent bg-gradient-to-r from-sky-500 to-blue-700 bg-clip-text transition-transform duration-300 group-hover:scale-105 sm:text-4xl lg:text-5xl">
                  {stat.value}
                </div>

                <div className="mt-3 text-sm font-medium text-slate-500 transition-colors duration-300 group-hover:text-blue-700">
                  {stat.label}
                </div>

                <div className="mx-auto mt-4 h-0.5 w-8 rounded-full bg-gradient-to-r from-sky-400 to-blue-600 transition-all duration-300 group-hover:w-14" />
              </motion.div>
            ))}
          </div>
        </Reveal>

        {/* Advantages */}
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {ADVANTAGES.map((adv, index) => (
            <Reveal key={adv.title} delay={index * 0.08}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
                className="group relative h-full overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-7 transition-all duration-300 hover:border-sky-200 hover:shadow-xl hover:shadow-blue-900/5"
              >
                {/* Animated vertical blue line */}
                <div className="absolute left-0 top-0 z-20 h-full w-1 origin-top scale-y-0 bg-gradient-to-b from-sky-400 to-blue-600 transition-transform duration-300 ease-out group-hover:scale-y-100" />

                {/* Soft hover glow */}
                <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-sky-100/0 blur-3xl transition-all duration-500 group-hover:bg-sky-100/80" />

                <div className="relative z-10">
                  {/* Icon */}
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 transition-all duration-300 group-hover:scale-110 group-hover:border-sky-200 group-hover:bg-gradient-to-br group-hover:from-sky-500 group-hover:to-blue-600 group-hover:shadow-lg group-hover:shadow-blue-500/20">
                    <adv.icon className="h-5 w-5 text-blue-600 transition-colors duration-300 group-hover:text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="mt-5 font-display text-base font-semibold text-slate-900 transition-colors duration-300 group-hover:text-blue-700">
                    {adv.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-2.5 text-sm leading-7 text-slate-500 transition-colors duration-300 group-hover:text-slate-600">
                    {adv.description}
                  </p>

                  {/* Bottom accent */}
                  <div className="mt-6 h-0.5 w-8 origin-left rounded-full bg-gradient-to-r from-sky-400 to-blue-600 transition-all duration-300 group-hover:w-16" />
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
