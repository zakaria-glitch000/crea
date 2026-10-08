import { motion, type Variants } from 'framer-motion';
import {
  ArrowRight,
  Phone,
  Receipt,
  BarChart3,
  Code2,
  Database,
  Settings,
  Headphones,
} from 'lucide-react';
import heroImage from '@/assets/IMAGE.jpg'; // 7ot hna l image dyal l hero

const features = [
  { icon: Receipt, label: 'Encaissement' },
  { icon: BarChart3, label: 'Logiciels de gestion' },
  { icon: Code2, label: 'Développement sur mesure' },
  { icon: Database, label: 'ERP & Reporting' },
  { icon: Settings, label: 'Intégration IT' },
  { icon: Headphones, label: 'Maintenance' },
];

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
};
const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export function Hero() {
  return (
    <section id="home" className="relative bg-white">
      {/* ===== Hero: image kamla + texte direct ===== */}
      <div className="relative overflow-hidden pt-24 lg:pt-0">
        {/* Image kamla f l khalfiya */}
        <img
          src={heroImage}
          alt="Solutions technologiques"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />

        {/* Fade sghir f l ta7t bach tdkhol f strip */}
        <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-white/70 to-transparent" />

        <div className="relative mx-auto flex max-w-7xl items-center px-6 pb-10 pt-6 lg:min-h-[560px] lg:px-8 lg:py-24">
          {/* Texte bla panneau */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="max-w-xl"
          >
            <motion.p
              variants={item}
              className="text-xs font-semibold tracking-[0.18em] text-brand-600"
            >
              TECHNOLOGIE · LOGICIELS · INNOVATION
            </motion.p>

            <motion.h1
              variants={item}
              className="mt-4 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-slate-900 sm:text-5xl lg:text-[3.25rem]"
            >
              Des solutions technologiques qui font{' '}
              <span className="text-brand-500">avancer votre entreprise.</span>
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-5 max-w-md text-base leading-relaxed text-slate-700 sm:text-lg"
            >
              Nous accompagnons les professionnels avec des solutions d'encaissement, des
              logiciels de gestion et des applications développées sur mesure.
            </motion.p>

            <motion.div variants={item} className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a
                href="#solutions"
                className="group inline-flex items-center justify-center gap-2 rounded-lg bg-brand-500 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-500/25 transition-all hover:bg-brand-400 hover:shadow-xl hover:shadow-brand-500/35 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500"
              >
                Découvrir nos solutions
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white/80 px-6 py-3.5 text-sm font-semibold text-slate-700 transition-all hover:border-slate-300 hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500"
              >
                <Phone className="h-4 w-4 text-brand-500" />
                Parler à un expert
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* ===== Strip dyal les services ===== */}
      <div className="border-y border-slate-100 bg-slate-50/70">
        <ul className="mx-auto grid max-w-7xl grid-cols-2 gap-y-8 px-6 py-8 sm:grid-cols-3 lg:grid-cols-6 lg:gap-y-0 lg:px-8">
          {features.map(({ icon: Icon, label }, i) => (
            <li
              key={label}
              className={`flex flex-col items-center gap-3 px-3 text-center ${
                i !== 0 ? 'lg:border-l lg:border-slate-200' : ''
              }`}
            >
              <Icon className="h-7 w-7 text-brand-500" strokeWidth={1.5} />
              <span className="text-[11px] font-semibold uppercase leading-snug tracking-wide text-slate-700">
                {label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}