import { PROCESS_STEPS } from '@/data/content';
import { Reveal, SectionTag } from './ui/Reveal';

export function Process() {
  return (
    <section className="relative overflow-hidden bg-white py-24 lg:py-32">
      <div className="absolute inset-0 grid-bg-fine opacity-30" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal className="max-w-2xl">
          <SectionTag>Méthode</SectionTag>
          <h2 className="mt-6 font-display text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl text-balance">
            Notre méthode.
          </h2>
          <p className="mt-5 text-lg text-slate-500">
            Une approche structurée et transparente, de l'analyse initiale à l'accompagnement long terme.
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-0">
          {PROCESS_STEPS.map((step, i) => (
            <Reveal key={step.step} delay={i * 0.12}>
              <div className="relative lg:px-8">
                {/* Connector line */}
                {i < PROCESS_STEPS.length - 1 && (
                  <div className="absolute top-8 left-[3.25rem] hidden h-px w-[calc(100%-3.25rem)] bg-gradient-to-r from-brand-300 to-transparent lg:block" />
                )}

                <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl border border-slate-200 bg-white shadow-sm">
                  <span className="font-display text-2xl font-bold gradient-text">{step.step}</span>
                  {/* Glow */}
                  <div className="absolute inset-0 -z-10 rounded-2xl bg-brand-500/10 blur-xl opacity-0 transition-opacity duration-300 hover:opacity-100" />
                </div>

                <h3 className="mt-6 font-display text-xl font-semibold text-slate-900">{step.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-slate-500">{step.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
