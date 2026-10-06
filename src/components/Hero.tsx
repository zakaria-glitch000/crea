import { motion } from 'framer-motion';
import { ArrowRight, Phone, TrendingUp, ShieldCheck } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-white pt-32 pb-20 lg:pt-40 lg:pb-32">
      {/* Background layers */}
      <div className="absolute inset-0 grid-bg opacity-60" />
      <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-slate-50" />

      {/* Glow orbs */}
      <div className="absolute -top-20 -right-20 h-[600px] w-[600px] rounded-full bg-brand-500/[0.08] blur-[120px] animate-pulse-glow" />
      <div className="absolute top-1/3 -left-32 h-[500px] w-[500px] rounded-full bg-accent-500/[0.05] blur-[100px]" />

      {/* Radial spotlight */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 70% 20%, rgba(46,123,255,0.06), transparent 60%)',
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-8 lg:items-center">
          {/* Left: content */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } } }}
          >
            <motion.div
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
              className="inline-flex items-center gap-2 rounded-full border border-brand-100 bg-brand-50 px-4 py-1.5 text-xs font-medium tracking-wide text-brand-600"
            >
              <span className="flex h-2 w-2">
                <span className="absolute h-2 w-2 animate-ping rounded-full bg-accent-500 opacity-75" />
                <span className="h-2 w-2 rounded-full bg-accent-500" />
              </span>
              IT · Logiciels · Systèmes professionnels
            </motion.div>

            <motion.h1
              variants={{ hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } } }}
              className="mt-6 font-display text-4xl font-bold leading-[1.05] tracking-tight text-slate-900 sm:text-5xl lg:text-[3.5rem] text-balance"
            >
              Des solutions technologiques qui font{' '}
              <span className="gradient-text">avancer votre entreprise.</span>
            </motion.h1>

            <motion.p
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
              className="mt-6 max-w-xl text-lg leading-relaxed text-slate-500"
            >
              Nous concevons, déployons et accompagnons des solutions IT, logiciels et systèmes professionnels adaptés aux besoins de votre entreprise.
            </motion.p>

            <motion.div
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
              className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
            >
              <a
                href="#solutions"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-brand-500 px-6 py-3.5 text-sm font-semibold text-white transition-all hover:bg-brand-400 hover:shadow-xl hover:shadow-brand-500/30"
              >
                Découvrir nos solutions
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-3.5 text-sm font-semibold text-slate-700 transition-all hover:border-slate-400 hover:bg-slate-50"
              >
                <Phone className="h-4 w-4 text-brand-500" />
                Parler à un expert
              </a>
            </motion.div>
          </motion.div>

          {/* Right: image mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <HeroMockup />
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-slate-50 to-transparent" />
    </section>
  );
}

function HeroMockup() {
  return (
    <div className="relative flex justify-center items-center">
      {/* Floating glow behind */}
      <div className="absolute inset-0 -z-10 rounded-3xl bg-brand-500/15 blur-3xl" />

{/* Main image container with float animation */}
<motion.div
  animate={{ y: [0, -12, 0] }}
  transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
  className="relative w-full max-w-xl"
>
  <img 
    src="/IMAGE.png"
    alt="Solutions technologiques"
    className="w-full h-auto object-contain drop-shadow-2xl"
  />
</motion.div>
      {/* Floating badge 1 */}
      <motion.div
        animate={{ y: [0, -18, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -left-4 top-1/4 hidden rounded-xl border border-slate-200 bg-white p-3 shadow-xl md:block"
      >
        <div className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-50">
            <ShieldCheck className="h-5 w-5 text-emerald-600" />
          </div>
          <div>
            <div className="text-xs font-semibold text-slate-900">Système sécurisé</div>
            <div className="text-[10px] text-slate-400">Chiffrement actif</div>
          </div>
        </div>
      </motion.div>

      {/* Floating badge 2 */}
      <motion.div
        animate={{ y: [0, 14, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute -right-4 bottom-1/4 hidden rounded-xl border border-slate-200 bg-white p-3 shadow-xl md:block"
      >
        <div className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-50">
            <TrendingUp className="h-5 w-5 text-brand-600" />
          </div>
          <div>
            <div className="text-xs font-semibold text-slate-900">+34% ce mois</div>
            <div className="text-[10px] text-slate-400">Croissance ventes</div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}