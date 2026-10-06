import { ArrowRight } from 'lucide-react';
import { Reveal } from './ui/Reveal';

export function CTA() {
  return (
    <section className="relative overflow-hidden bg-white py-24 lg:py-32">
      <div className="absolute inset-0 grid-bg opacity-40" />

      {/* Glow */}
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-500/[0.07] blur-[120px]" />
      <div className="absolute left-1/2 top-1/2 h-[300px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-500/[0.04] blur-[80px]" />

      <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-8">
        <Reveal>
          <h2 className="font-display text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-6xl text-balance">
            Prêt à faire évoluer votre entreprise ?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-500">
            Parlons de votre projet et construisons ensemble la solution adaptée à vos besoins.
          </p>
          <div className="mt-10 flex justify-center">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-xl bg-brand-500 px-8 py-4 text-base font-semibold text-white transition-all hover:bg-brand-400 hover:shadow-xl hover:shadow-brand-500/30"
            >
              Demander un démo
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
