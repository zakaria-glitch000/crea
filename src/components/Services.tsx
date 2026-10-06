import { motion } from 'framer-motion';
import { SERVICES } from '@/data/content';
import { Reveal, SectionTag, staggerContainer, fadeUp } from './ui/Reveal';

export function Services() {
  return (
    <section id="services" className="relative bg-slate-50 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal className="max-w-2xl">
          <SectionTag>Services</SectionTag>
          <h2 className="mt-6 font-display text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl text-balance">
            Un accompagnement de A à Z.
          </h2>
          <p className="mt-5 text-lg text-slate-500">
            De l'installation initiale au support permanent, nous sommes présents à chaque étape de la vie de vos systèmes.
          </p>
        </Reveal>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-slate-200/80 bg-slate-200/70 sm:grid-cols-2 lg:grid-cols-3"
        >
          {SERVICES.map((service) => (
            <motion.div
              key={service.title}
              variants={fadeUp}
              className="group relative bg-white p-8 transition-colors duration-300 hover:bg-slate-50"
            >
              <div className="flex items-start justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 transition-colors group-hover:border-brand-200 group-hover:bg-brand-50">
                  <service.icon className="h-5 w-5 text-brand-600" />
                </div>
                <span className="font-display text-3xl font-bold text-slate-200 transition-colors group-hover:text-brand-400/60">
                  {service.step}
                </span>
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold text-slate-900">{service.title}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-slate-500">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
