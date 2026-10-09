import { motion } from 'framer-motion';
import { SERVICES } from '@/data/content';
import {
  Reveal,
  SectionTag,
  staggerContainer,
  fadeUp,
} from './ui/Reveal';

export function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-slate-50 py-24 lg:py-32"
    >
      {/* Background effects */}
      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-sky-200/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-blue-200/20 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section heading */}
        <Reveal className="max-w-2xl">
          <SectionTag>Services</SectionTag>

          <h2 className="mt-6 text-balance font-display text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Un accompagnement{' '}
            <span className="bg-gradient-to-r from-sky-500 to-blue-700 bg-clip-text text-transparent">
              de A à Z.
            </span>
          </h2>

          <p className="mt-5 max-w-xl text-base leading-8 text-slate-500 sm:text-lg">
            De l'installation initiale au support permanent, nous sommes
            présents à chaque étape de la vie de vos systèmes.
          </p>
        </Reveal>

        {/* Services cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-slate-200/80 bg-slate-200/70 shadow-sm sm:grid-cols-2 lg:grid-cols-3"
        >
          {SERVICES.map((service) => (
            <motion.div
              key={service.title}
              variants={fadeUp}
              className="group relative overflow-hidden bg-white p-7 transition-all duration-300 hover:z-10 hover:bg-white hover:shadow-xl hover:shadow-blue-900/5 sm:p-8"
            >
              {/* Animated vertical blue line */}
              <div className="absolute left-0 top-0 z-20 h-full w-1 origin-top scale-y-0 bg-gradient-to-b from-sky-400 to-blue-600 transition-transform duration-300 ease-out group-hover:scale-y-100" />

              {/* Soft hover glow */}
              <div className="pointer-events-none absolute -right-16 -top-16 h-36 w-36 rounded-full bg-sky-100/0 blur-3xl transition-all duration-500 group-hover:bg-sky-100/80" />

              <div className="relative z-10">
                {/* Icon and step number */}
                <div className="flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 transition-all duration-300 group-hover:scale-105 group-hover:border-sky-200 group-hover:bg-gradient-to-br group-hover:from-sky-500 group-hover:to-blue-600 group-hover:shadow-lg group-hover:shadow-blue-500/20">
                    <service.icon className="h-5 w-5 text-blue-600 transition-colors duration-300 group-hover:text-white" />
                  </div>

                  <span className="font-display text-3xl font-bold text-slate-200 transition-all duration-300 group-hover:translate-x-[-2px] group-hover:text-blue-500/60">
                    {service.step}
                  </span>
                </div>

                {/* Service title */}
                <h3 className="mt-6 font-display text-lg font-semibold text-slate-900 transition-colors duration-300 group-hover:text-blue-700">
                  {service.title}
                </h3>

                {/* Service description */}
                <p className="mt-3 text-sm leading-7 text-slate-500 transition-colors duration-300 group-hover:text-slate-600">
                  {service.description}
                </p>

                {/* Animated bottom accent */}
                <div className="mt-6 h-0.5 w-8 origin-left rounded-full bg-gradient-to-r from-sky-400 to-blue-600 transition-all duration-300 group-hover:w-16" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
