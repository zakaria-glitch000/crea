import { motion, type Variants } from 'framer-motion';
import {
  ArrowRight,
  Phone,
  Lightbulb,
  Settings,
  Users,
  Headphones,
} from 'lucide-react';
import heroImage from '@/assets/IMAGE.jpg';

const expertiseSteps = [
  {
    icon: Lightbulb,
    title: 'Conseil & Analyse',
    description: 'Une étude personnalisée de vos besoins.',
  },
  {
    icon: Settings,
    title: 'Solutions performantes',
    description: 'Des technologies fiables et adaptées à votre métier.',
  },
  {
    icon: Users,
    title: 'Installation & Formation',
    description: 'Un accompagnement complet sur site.',
  },
  {
    icon: Headphones,
    title: 'Support réactif',
    description: 'Une équipe à vos côtés dans la durée.',
  },
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
    <section id="home" className="bg-white pt-16">
      <div className="relative">
        <div className="relative z-10 lg:absolute lg:inset-0 lg:flex lg:items-center">
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="mx-auto w-full max-w-7xl px-6 py-10 lg:px-8 lg:py-0"
          >
            <div className="max-w-[30rem]">
              <motion.p
                variants={item}
                className="text-xs font-semibold tracking-[0.18em] text-brand-600"
              >
                TECHNOLOGIE · LOGICIELS · INNOVATION
              </motion.p>

              <motion.h1
                variants={item}
                className="mt-4 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-slate-900 sm:text-5xl"
              >
                Des solutions technologiques qui font{' '}
                <span className="text-brand-500">avancer votre entreprise.</span>
              </motion.h1>

              <motion.p
                variants={item}
                className="mt-5 max-w-md text-base leading-relaxed text-slate-600 sm:text-lg"
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
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-slate-700 transition-all hover:border-slate-300 hover:bg-slate-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500"
                >
                  <Phone className="h-4 w-4 text-brand-500" />
                  Parler à un expert
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <img
          src={heroImage}
          alt="Solutions technologiques"
          className="block h-auto w-full"
        />

        <div
          className="pointer-events-none absolute inset-0 hidden lg:block"
          style={{
            background:
              'linear-gradient(to right, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.75) 28%, rgba(255,255,255,0) 55%)',
          }}
        />
      </div>

      <div className="border-y border-slate-100 bg-slate-50/70 py-20 px-6 lg:px-8">
        <div className="mx-auto max-w-7xl text-center">
          
          <span className="text-xs font-bold tracking-widest text-brand-600 uppercase">
            Notre Expertise
          </span>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 mt-2 mb-4">
            Un partenaire pour la réussite de vos projets
          </h2>
          <p className="max-w-3xl mx-auto text-slate-600 text-base leading-relaxed mb-16">
            Nous concevons, intégrons et déployons des solutions technologiques adaptées aux besoins des professionnels. 
            De l'encaissement au développement d'applications sur mesure, nous vous accompagnons à chaque étape de votre transformation digitale.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {expertiseSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="flex flex-col items-center text-center group">
                  <div className="w-20 h-20 rounded-full bg-slate-100 flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110">
                    <Icon className="w-8 h-8 text-brand-600" strokeWidth={1.75} />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed max-w-xs">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}