import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Clock3,
  Settings2,
  ChartNoAxesCombined,
  ShieldCheck,
  Wrench,
  GraduationCap,
  Headset,
  TrendingUp,
  Sparkles,
  Monitor,
  UtensilsCrossed,
  Smartphone,
  Bell,
  Package,
  Boxes,
  Store,
  Network,
} from 'lucide-react';

import heroImage from '@/assets/2.jpg';
import caisseImage from '@/assets/2.jpg';
import borneImage from '@/assets/1.jpg';
import pdaImage from '@/assets/3.jpg';
import kdsImage from '@/assets/4.jpg';
import ERP_IMAGE from '@/assets/b.jpg'
import REPORTING_IMAGE from '@/assets/a.jpg'

const DEMO_LINK =
  'https://wa.me/212600000000?text=Bonjour%2C%20je%20souhaite%20une%20demonstration%20de%20vos%20solutions%20restauration';



const BENEFITS = [
  { icon: Clock3, label: 'Gain de temps', number: '01' },
  { icon: Settings2, label: 'Service plus efficace', number: '02' },
  { icon: ChartNoAxesCombined, label: 'Meilleure rentabilité', number: '03' },
  { icon: ShieldCheck, label: 'Solution fiable et sécurisée', number: '04' },
];

const SUPPORT = [
  { icon: Wrench, label: 'Installation sur site' },
  { icon: GraduationCap, label: 'Formation de votre équipe' },
  { icon: Headset, label: 'Assistance technique' },
  { icon: TrendingUp, label: 'Suivi et évolutions' },
];

const SOLUTIONS = [
  {
    number: '01',
    eyebrow: 'POINT DE VENTE',
    title: 'Encaissement en salle ou au comptoir',
    intro:
      'Une caisse tactile intuitive et performante pour gérer votre activité en toute simplicité.',
    items: [
      'Interface tactile simple et rapide',
      'Encaissement fluide',
      'Écran client pour les promotions',
      'Matériel professionnel robuste',
    ],
    image: caisseImage,
    imageAlt: 'Solution de caisse tactile pour restaurant',
    icon: Monitor,
  },
  {
    number: '02',
    eyebrow: 'COMMANDE AUTONOME',
    title: 'Borne de commande',
    intro:
      'Modernisez le parcours client avec une prise de commande autonome et intuitive.',
    items: [
      'Commande rapide et autonome',
      'Réduction du temps d’attente',
      'Transmission des commandes',
      'Expérience moderne et élégante',
    ],
    image: borneImage,
    imageAlt: 'Borne tactile de commande pour restaurant',
    icon: UtensilsCrossed,
  },
  {
    number: '03',
    eyebrow: 'MOBILITÉ EN SALLE',
    title: 'PDA prise de commande',
    intro:
      'Prenez les commandes directement à table et transmettez-les instantanément aux équipes.',
    items: [
      'Terminal mobile professionnel',
      'Saisie simple et rapide',
      'Transmission des commandes',
      'Adapté aux salles et terrasses',
    ],
    image: pdaImage,
    imageAlt: 'Terminal mobile PDA de prise de commande',
    icon: Monitor,
  },
  {
    number: '04',
    eyebrow: 'ORGANISATION CUISINE',
    title: 'Écran cuisine KDS',
    intro:
      'Centralisez les commandes en cuisine pour améliorer la coordination et la fluidité du service.',
    items: [
      'Affichage clair des commandes',
      'Suivi de préparation',
      'Moins de tickets papier',
      'Meilleure coordination des équipes',
    ],
    image: kdsImage,
    imageAlt: 'Écran de gestion des commandes en cuisine',
    icon: Settings2,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

function SectionTag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2.5 rounded-full border border-sky-100 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-blue-700 shadow-sm shadow-blue-900/[0.03]">
      <span className="h-2 w-2 rounded-full bg-gradient-to-r from-sky-400 to-blue-600" />
      {children}
    </span>
  );
}

function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3.5">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-sky-400 to-blue-600 text-white shadow-sm shadow-blue-600/20">
            <Check className="h-3 w-3" strokeWidth={3} />
          </span>
          <span className="text-sm leading-6 text-slate-600">{item}</span>
        </li>
      ))}
    </ul>
  );
}

function FeatureCard({
  number,
  eyebrow,
  title,
  intro,
  items,
  image,
  imageAlt,
  icon: Icon,
}: {
  number: string;
  eyebrow: string;
  title: string;
  intro: string;
  items: string[];
  image: string;
  imageAlt: string;
  icon: React.ElementType;
}) {
  return (
    <motion.article
      variants={fadeUp}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-sm transition-shadow duration-300 hover:border-sky-200 hover:shadow-xl hover:shadow-blue-900/[0.07]"
    >
      <div className="absolute left-0 top-0 z-20 h-full w-1 origin-top scale-y-0 bg-gradient-to-b from-sky-400 to-blue-600 transition-transform duration-300 group-hover:scale-y-100" />

      <div className="relative flex min-h-[210px] items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-sky-50 p-7 sm:min-h-[245px]">
        <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-sky-100/70 blur-3xl transition-opacity duration-500 group-hover:bg-blue-200/60" />

        <img
          src={image}
          alt={imageAlt}
          loading="lazy"
          decoding="async"
          className="relative z-10 h-48 w-full object-contain transition-transform duration-700 ease-out group-hover:scale-105 sm:h-56"
        />

        <span className="absolute left-5 top-5 rounded-full border border-white bg-white/90 px-3 py-1.5 text-[10px] font-bold tracking-[0.16em] text-slate-500 shadow-sm backdrop-blur">
          {number}
        </span>

        <span className="absolute bottom-5 right-5 flex h-11 w-11 items-center justify-center rounded-2xl border border-white bg-white/95 text-blue-600 shadow-lg shadow-blue-900/[0.06] transition-all duration-300 group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-sky-400 group-hover:to-blue-600 group-hover:text-white">
          <Icon className="h-5 w-5" />
        </span>
      </div>

      <div className="relative flex flex-1 flex-col p-6 sm:p-8">
        <p className="text-[10px] font-extrabold tracking-[0.18em] text-blue-600 sm:text-xs">
          {eyebrow}
        </p>

        <h3 className="mt-3 text-xl font-bold leading-snug tracking-tight text-slate-900 transition-colors duration-300 group-hover:text-blue-700 sm:text-2xl">
          {title}
        </h3>

        <p className="mt-3 text-sm leading-7 text-slate-500">{intro}</p>

        <div className="my-6 h-px w-full bg-slate-100" />

        <div className="flex-1">
          <CheckList items={items} />
        </div>

        <div className="mt-7 h-1 w-full origin-left scale-x-0 rounded-full bg-gradient-to-r from-sky-400 to-blue-600 transition-transform duration-500 group-hover:scale-x-100" />
      </div>

      <div className="pointer-events-none absolute -bottom-12 -right-12 h-36 w-36 rounded-full bg-blue-100/60 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />
    </motion.article>
  );
}

export default function SolutionsRestauration() {
  return (
    <main className="overflow-hidden bg-white text-slate-800">
      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="relative isolate overflow-hidden bg-gradient-to-br from-white via-slate-50 to-sky-50">
        <div className="pointer-events-none absolute -right-28 -top-24 h-96 w-96 rounded-full bg-sky-200/40 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 left-0 h-80 w-80 rounded-full bg-blue-100/50 blur-3xl" />

        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-14 sm:px-8 sm:py-20 lg:min-h-[680px] lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:py-24">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="relative z-10 max-w-2xl"
          >
            <motion.div variants={fadeUp}>
              <Link
                to="/#NosExpertises"
                className="mb-9 inline-flex items-center gap-2 rounded-full border border-slate-200/80 bg-white/80 px-4 py-2.5 text-sm font-semibold text-slate-600 shadow-sm transition-all duration-300 hover:-translate-x-1 hover:border-sky-200 hover:text-blue-700"
              >
                <ArrowLeft className="h-4 w-4" />
                Retour aux expertises
              </Link>
            </motion.div>

            <motion.div variants={fadeUp}>
              <SectionTag>Solutions restauration &amp; CHR</SectionTag>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="mt-7 text-4xl font-black leading-[1.1] tracking-tight text-slate-950 sm:text-5xl lg:text-6xl"
            >
              La technologie au service de{' '}
              <span className="bg-gradient-to-r from-sky-500 via-blue-600 to-blue-800 bg-clip-text text-transparent">
                votre restaurant.
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-xl text-base leading-8 text-slate-500 sm:text-lg"
            >
              Une solution complète pour encaisser, prendre les commandes,
              organiser la cuisine et piloter votre activité. Gagnez du temps
              et améliorez l’expérience de vos clients.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <a
                href={DEMO_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex min-h-13 items-center justify-center gap-3 rounded-full bg-gradient-to-r from-sky-500 to-blue-700 px-7 py-4 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-600/30 focus:outline-none focus:ring-4 focus:ring-sky-200"
              >
                Demander une démonstration
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>

              <a
                href="#solutions"
                className="inline-flex min-h-13 items-center justify-center gap-2 rounded-full border border-slate-200 bg-white/80 px-7 py-4 text-sm font-bold text-slate-700 transition-all duration-300 hover:-translate-y-0.5 hover:border-sky-200 hover:bg-sky-50 hover:text-blue-700"
              >
                Découvrir nos solutions
              </a>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium text-slate-500"
            >
              <span className="flex items-center gap-2">
                <Check className="h-4 w-4 text-blue-600" strokeWidth={3} />
                Solution complète
              </span>
              <span className="flex items-center gap-2">
                <Check className="h-4 w-4 text-blue-600" strokeWidth={3} />
                Accompagnement personnalisé
              </span>
            </motion.div>
          </motion.div>

          {/* Hero visual */}
          <motion.div
            initial={{ opacity: 0, x: 35, scale: 0.97 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="relative mx-auto w-full max-w-xl"
          >
            <div className="absolute -inset-5 rounded-[2.5rem] bg-gradient-to-br from-sky-200/60 to-blue-200/40 opacity-70 blur-2xl" />

            <div className="relative rounded-[2rem] border border-white/90 bg-white/80 p-3 shadow-2xl shadow-blue-950/[0.10] backdrop-blur-xl sm:p-4">
              <div className="relative overflow-hidden rounded-[1.5rem] bg-slate-100">
                <img
                  src={heroImage}
                  alt="Solution technologique pour les professionnels de la restauration"
                  className="h-[330px] w-full object-cover sm:h-[410px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />

                <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full border border-white/40 bg-white/90 px-3.5 py-2 text-xs font-bold text-slate-800 shadow-lg backdrop-blur-md">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
                  Une activité mieux connectée
                </div>

                <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/70 bg-white/95 p-5 shadow-xl backdrop-blur-xl sm:bottom-6 sm:left-6 sm:right-6">
                  <div className="flex items-center gap-3">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-sky-400 to-blue-600 text-white shadow-md shadow-blue-600/20">
                      <Sparkles className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="font-bold text-slate-900">
                        Toute votre activité, mieux connectée.
                      </p>
                      <p className="mt-1 text-xs leading-5 text-slate-500">
                        Caisse, commandes, cuisine et reporting.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <motion.div
              animate={{ y: [0, -7, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -left-4 top-1/3 hidden items-center gap-3 rounded-2xl border border-slate-100 bg-white p-4 shadow-xl shadow-blue-950/[0.07] sm:flex lg:-left-10"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-50 text-blue-600">
                <ChartNoAxesCombined className="h-5 w-5" />
              </span>
              <div>
                <p className="text-xs font-bold text-slate-900">
                  Gestion simplifiée
                </p>
                <p className="mt-1 text-[11px] text-slate-500">
                  Un meilleur pilotage
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          BENEFITS
      ===================================================== */}
      <section className="relative border-y border-slate-100 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.5fr] lg:items-center lg:gap-14">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={stagger}
            >
              <motion.div variants={fadeUp}>
                <SectionTag>Votre performance</SectionTag>
              </motion.div>

              <motion.h2
                variants={fadeUp}
                className="mt-5 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl"
              >
                Une solution complète pour{' '}
                <span className="bg-gradient-to-r from-sky-500 to-blue-700 bg-clip-text text-transparent">
                  aller plus loin.
                </span>
              </motion.h2>

              <motion.p
                variants={fadeUp}
                className="mt-4 text-sm leading-7 text-slate-500 sm:text-base"
              >
                Des outils pensés pour rendre votre service plus rapide,
                plus fluide et plus performant au quotidien.
              </motion.p>
            </motion.div>

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              className="grid grid-cols-1 gap-4 sm:grid-cols-2"
            >
              {BENEFITS.map((benefit) => {
                const Icon = benefit.icon;

                return (
                  <motion.div
                    key={benefit.label}
                    variants={fadeUp}
                    whileHover={{ y: -4 }}
                    className="group relative flex items-center gap-4 overflow-hidden rounded-2xl border border-slate-200/80 bg-gradient-to-br from-white to-slate-50/80 p-5 transition-all duration-300 hover:border-sky-200 hover:shadow-lg hover:shadow-blue-900/[0.05]"
                  >
                    <div className="absolute left-0 top-0 h-full w-1 origin-top scale-y-0 bg-gradient-to-b from-sky-400 to-blue-600 transition-transform duration-300 group-hover:scale-y-100" />

                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-sky-100 bg-sky-50 text-blue-600 transition-all duration-300 group-hover:border-transparent group-hover:bg-gradient-to-br group-hover:from-sky-400 group-hover:to-blue-600 group-hover:text-white">
                      <Icon className="h-5 w-5" />
                    </span>

                    <div>
                      <p className="text-[10px] font-bold tracking-[0.16em] text-slate-400">
                        {benefit.number}
                      </p>
                      <p className="mt-1 text-sm font-bold leading-5 text-slate-800">
                        {benefit.label}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </section>

      {/* =====================================================
          SOLUTIONS
      ===================================================== */}
      <section
        id="solutions"
        className="relative scroll-mt-24 overflow-hidden bg-slate-50/80 py-20 lg:py-28"
      >
        <div className="pointer-events-none absolute -right-32 top-20 h-80 w-80 rounded-full bg-blue-100/50 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-sky-100/50 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={stagger}
            className="mx-auto mb-14 max-w-3xl text-center lg:mb-16"
          >
            <motion.div variants={fadeUp}>
              <SectionTag>Nos équipements</SectionTag>
            </motion.div>

            <motion.h2
              variants={fadeUp}
              className="mt-6 text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl"
            >
              Tout pour simplifier{' '}
              <span className="bg-gradient-to-r from-sky-500 to-blue-700 bg-clip-text text-transparent">
                votre service.
              </span>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base"
            >
              Des équipements connectés et des outils adaptés à votre
              établissement pour fluidifier le service, optimiser les
              commandes et faciliter votre gestion.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mx-auto mt-7 h-1 w-20 rounded-full bg-gradient-to-r from-sky-400 to-blue-600"
            />
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="grid gap-6 lg:grid-cols-2"
          >
            {SOLUTIONS.map((solution) => (
              <FeatureCard key={solution.number} {...solution} />
            ))}
          </motion.div>

          {/* =====================================================
              REPORTING CSI & ERP CSI (Nouveau design selon l'image)
          ===================================================== */}
          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            
            {/* 1. REPORTING CSI */}
            <motion.article
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.55 }}
              whileHover={{ y: -5 }}
              className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-6 shadow-sm transition-all duration-300 hover:border-sky-200 hover:shadow-xl hover:shadow-blue-900/[0.06] sm:p-8"
            >
              <div className="absolute left-0 top-0 z-20 h-full w-1 origin-top scale-y-0 bg-gradient-to-b from-sky-400 to-blue-600 transition-transform duration-300 group-hover:scale-y-100" />

              <span className="text-[10px] font-extrabold tracking-[0.18em] text-blue-600 sm:text-xs">
                SOLUTION RESTAURATION &amp; CHR
              </span>

              <h3 className="mt-2 text-3xl font-black tracking-tight text-slate-900 transition-colors duration-300 group-hover:text-blue-700">
                Reporting CSI
              </h3>

              <p className="mt-2 text-base font-bold text-slate-700">
                Gardez le contrôle de votre restaurant, où que vous soyez.
              </p>

              <p className="mt-1 text-sm leading-relaxed text-slate-500">
                Suivez vos ventes et analysez vos performances en temps réel depuis votre ordinateur ou votre mobile.
              </p>

              {/* Mockup Image Preview */}
              <div className="relative my-6 overflow-hidden rounded-2xl bg-gradient-to-br from-slate-100 to-sky-50 border border-slate-100 p-2">
                <img
                  src={REPORTING_IMAGE}
                  alt="Reporting CSI interface"
                  className="h-56 w-full object-cover rounded-xl transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* 4 Feature Badges */}
              <div className="grid grid-cols-2 gap-4 my-4 sm:grid-cols-4">
                <div className="flex flex-col items-center text-center p-2 rounded-xl bg-sky-50/50 border border-sky-100/60">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-sky-100 text-blue-600 mb-2">
                    <ChartNoAxesCombined className="h-4 w-4" />
                  </span>
                  <span className="text-xs font-bold text-slate-900">Chiffre d’affaires et statistiques</span>
                  <span className="text-[10px] text-slate-500 mt-0.5">Suivi en temps réel de vos ventes.</span>
                </div>

                <div className="flex flex-col items-center text-center p-2 rounded-xl bg-sky-50/50 border border-sky-100/60">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-sky-100 text-blue-600 mb-2">
                    <Settings2 className="h-4 w-4" />
                  </span>
                  <span className="text-xs font-bold text-slate-900">Annulations, retours et pertes</span>
                  <span className="text-[10px] text-slate-500 mt-0.5">Contrôlez les opérations sensibles.</span>
                </div>

                <div className="flex flex-col items-center text-center p-2 rounded-xl bg-sky-50/50 border border-sky-100/60">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-sky-100 text-blue-600 mb-2">
                    <Bell className="h-4 w-4" />
                  </span>
                  <span className="text-xs font-bold text-slate-900">Alertes par WhatsApp</span>
                  <span className="text-[10px] text-slate-500 mt-0.5">Recevez vos rapports et alertes automatiquement.</span>
                </div>

                <div className="flex flex-col items-center text-center p-2 rounded-xl bg-sky-50/50 border border-sky-100/60">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-sky-100 text-blue-600 mb-2">
                    <Smartphone className="h-4 w-4" />
                  </span>
                  <span className="text-xs font-bold text-slate-900">Accès PC et mobile</span>
                  <span className="text-[10px] text-slate-500 mt-0.5">Consultez vos données où que vous soyez.</span>
                </div>
              </div>

              <div className="mt-auto pt-4">
                <a
                  href={DEMO_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/button flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-sky-500 to-blue-600 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition-all duration-300 hover:shadow-xl hover:shadow-blue-600/30"
                >
                  Découvrir le Reporting CSI
                  <ArrowRight className="h-4 w-4 transition-transform group-hover/button:translate-x-1" />
                </a>
              </div>
            </motion.article>

            {/* 2. ERP CSI */}
            <motion.article
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.55, delay: 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-6 shadow-sm transition-all duration-300 hover:border-amber-200 hover:shadow-xl hover:shadow-amber-900/[0.06] sm:p-8"
            >
              <div className="absolute left-0 top-0 z-20 h-full w-1 origin-top scale-y-0 bg-gradient-to-b from-amber-400 to-orange-600 transition-transform duration-300 group-hover:scale-y-100" />

              <span className="text-[10px] font-extrabold tracking-[0.18em] text-orange-600 sm:text-xs">
                SOLUTION RESTAURATION &amp; CHR
              </span>

              <h3 className="mt-2 text-3xl font-black tracking-tight text-slate-900 transition-colors duration-300 group-hover:text-orange-600">
                ERP CSI
              </h3>

              <p className="mt-2 text-base font-bold text-slate-700">
                Centralisez et optimisez la gestion de vos établissements.
              </p>

              <p className="mt-1 text-sm leading-relaxed text-slate-500">
                Une solution complète de back-office pour gérer vos articles, stocks, fournisseurs et plusieurs sites depuis une seule interface.
              </p>

              {/* Mockup Image Preview */}
              <div className="relative my-6 overflow-hidden rounded-2xl bg-gradient-to-br from-slate-100 to-orange-50 border border-slate-100 p-2">
                <img
                  src={ERP_IMAGE}
                  alt="ERP CSI interface"
                  className="h-56 w-full object-cover rounded-xl transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* 4 Feature Badges */}
              <div className="grid grid-cols-2 gap-4 my-4 sm:grid-cols-4">
                <div className="flex flex-col items-center text-center p-2 rounded-xl bg-orange-50/50 border border-orange-100/60">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-orange-100 text-orange-600 mb-2">
                    <Package className="h-4 w-4" />
                  </span>
                  <span className="text-xs font-bold text-slate-900">Gestion des articles</span>
                  <span className="text-[10px] text-slate-500 mt-0.5">Création, paramétrage et organisation.</span>
                </div>

                <div className="flex flex-col items-center text-center p-2 rounded-xl bg-orange-50/50 border border-orange-100/60">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-orange-100 text-orange-600 mb-2">
                    <Boxes className="h-4 w-4" />
                  </span>
                  <span className="text-xs font-bold text-slate-900">Stocks et inventaires</span>
                  <span className="text-[10px] text-slate-500 mt-0.5">Suivi en temps réel de vos stocks.</span>
                </div>

                <div className="flex flex-col items-center text-center p-2 rounded-xl bg-orange-50/50 border border-orange-100/60">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-orange-100 text-orange-600 mb-2">
                    <Store className="h-4 w-4" />
                  </span>
                  <span className="text-xs font-bold text-slate-900">Achats et fournisseurs</span>
                  <span className="text-[10px] text-slate-500 mt-0.5">Gestion des commandes et approvisionnements.</span>
                </div>

                <div className="flex flex-col items-center text-center p-2 rounded-xl bg-orange-50/50 border border-orange-100/60">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-orange-100 text-orange-600 mb-2">
                    <Network className="h-4 w-4" />
                  </span>
                  <span className="text-xs font-bold text-slate-900">Multi-établissements</span>
                  <span className="text-[10px] text-slate-500 mt-0.5">Pilotage centralisé de plusieurs sites.</span>
                </div>
              </div>

              <div className="mt-auto pt-4">
                <a
                  href={DEMO_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/button flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-amber-500 to-orange-600 py-3.5 text-sm font-bold text-white shadow-lg shadow-orange-600/20 transition-all duration-300 hover:shadow-xl hover:shadow-orange-600/30"
                >
                  Découvrir l'ERP CSI
                  <ArrowRight className="h-4 w-4 transition-transform group-hover/button:translate-x-1" />
                </a>
              </div>
            </motion.article>

          </div>

          {/* Support Section */}
          <div className="mt-8">
            <motion.article
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.55 }}
              whileHover={{ y: -5 }}
              className="group relative flex flex-col overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-6 shadow-sm transition-all duration-300 hover:border-sky-200 hover:shadow-xl hover:shadow-blue-900/[0.06] sm:p-8"
            >
              <div className="absolute left-0 top-0 z-20 h-full w-1 origin-top scale-y-0 bg-gradient-to-b from-sky-400 to-blue-600 transition-transform duration-300 group-hover:scale-y-100" />

              <SectionTag>Notre engagement</SectionTag>

              <h3 className="mt-5 text-2xl font-bold tracking-tight text-slate-900 transition-colors duration-300 group-hover:text-blue-700">
                Un accompagnement complet
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-500">
                De l’installation à la prise en main, nous vous accompagnons
                à chaque étape pour faciliter l’utilisation de votre solution.
              </p>

              <div className="my-6 h-px bg-slate-100" />

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {SUPPORT.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div key={item.label} className="group/item flex items-center gap-4">
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-sky-100 bg-sky-50 text-blue-600 transition-all duration-300 group-hover/item:border-transparent group-hover/item:bg-gradient-to-br group-hover/item:from-sky-400 group-hover/item:to-blue-600 group-hover/item:text-white">
                        <Icon className="h-5 w-5" />
                      </span>
                      <span className="text-sm font-semibold leading-5 text-slate-700">
                        {item.label}
                      </span>
                    </div>
                  );
                })}
              </div>

              <div className="mt-8 flex justify-end">
                <a
                  href={DEMO_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/button inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-gradient-to-r from-sky-500 to-blue-700 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-blue-600/30 focus:outline-none focus:ring-4 focus:ring-sky-200"
                >
                  Demander une démonstration
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/button:translate-x-1" />
                </a>
              </div>
            </motion.article>
          </div>

        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ===================================================== */}
      <section className="relative isolate overflow-hidden bg-slate-950 py-16 sm:py-20 lg:py-24">
        <div className="pointer-events-none absolute -right-20 -top-32 h-96 w-96 rounded-full bg-blue-600/30 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 left-1/4 h-80 w-80 rounded-full bg-sky-500/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-7 shadow-2xl shadow-black/10 backdrop-blur-sm sm:p-10 lg:p-14"
          >
            <div className="pointer-events-none absolute right-0 top-0 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl" />

            <div className="relative flex flex-col justify-between gap-9 md:flex-row md:items-center">
              <div className="max-w-2xl">
                <span className="inline-flex items-center gap-2 rounded-full border border-sky-400/20 bg-sky-400/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-sky-300">
                  <Sparkles className="h-4 w-4" />
                  Passons à l’étape suivante
                </span>

                <h2 className="mt-6 text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
                  Prêt à moderniser{' '}
                  <span className="bg-gradient-to-r from-sky-300 to-blue-400 bg-clip-text text-transparent">
                    votre restaurant ?
                  </span>
                </h2>

                <p className="mt-5 max-w-xl text-sm leading-7 text-slate-300 sm:text-base">
                  Échangeons sur vos besoins et découvrons ensemble la
                  solution la mieux adaptée à votre établissement.
                </p>
              </div>

              <a
                href={DEMO_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex min-h-14 shrink-0 items-center justify-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-bold text-slate-950 shadow-xl shadow-black/10 transition-all duration-300 hover:-translate-y-1 hover:bg-sky-50 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-white/20"
              >
                Parlons de votre projet
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </motion.div>

          <p className="mt-7 text-center text-xs leading-6 text-slate-500">
            ORALI SYSTEMS · Des solutions technologiques pensées pour votre activité.
          </p>
        </div>
      </section>
    </main>
  );
}