import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Reveal, SectionTag } from './ui/Reveal';

export function About() {
  return (
    <section id="About" className="relative overflow-hidden bg-white py-24 lg:py-32">
      <div className="absolute -left-32 top-1/4 h-[400px] w-[400px] rounded-full bg-brand-500/[0.05] blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: visual */}
          <Reveal>
            <div className="relative">
              <div className="absolute inset-0 -z-10 rounded-3xl bg-brand-500/8 blur-3xl" />
              <div className="overflow-hidden rounded-3xl border border-slate-200 shadow-xl shadow-slate-300/30">
                <img
                  src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Équipe NOVATEK"
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover"
                />
              </div>
              {/* Floating card */}
              <div className="absolute -bottom-6 -right-6 hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-xl md:block">
                <div className="font-display text-3xl font-bold gradient-text">10+</div>
                <div className="mt-1 text-xs text-slate-500">ans d'expertise IT</div>
              </div>
            </div>
          </Reveal>

          {/* Right: content */}
          <div>
            <Reveal>
              <SectionTag>À propos</SectionTag>
              <h2 className="mt-6 font-display text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] text-balance">
                Votre partenaire technologique.
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-slate-500">
                CREA SOLUTION est une entreprise spécialisée dans les solutions informatiques et logicielles pour les professionnels. Depuis plus de dix ans, nous accompagnons des entreprises de toutes tailles dans leur transformation technologique.
              </p>
              <p className="mt-4 text-base leading-relaxed text-slate-400">
                Notre mission : rendre la technologie accessible, fiable et performante pour votre activité. Nous combinons expertise technique et approche métier pour livrer des solutions qui ont un impact réel.
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="mt-8 space-y-3">
                {[
                  "Équipe d'ingénieurs et techniciens certifiés",
                  'Solutions éprouvées et support permanent',
                  'Approche sur-mesure et conseil personnalisé',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-accent-500" />
                    <span className="text-sm text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <a
                href="#contact"
                className="group mt-10 inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-3.5 text-sm font-semibold text-slate-700 transition-all hover:border-slate-400 hover:bg-slate-50"
              >
                Discutons de votre projet
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
