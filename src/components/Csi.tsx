import type { ElementType } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  ArrowUpDown,
  Check,
  Gauge,
  ChartNoAxesCombined,
  Users,
  Settings,
} from 'lucide-react';

import heroImage from '@/assets/res.webp';
import caisseImage from '@/assets/00.png';
import borneImage from '@/assets/bb1.png';
import pdaImage from '@/assets/bb3.png';
import kdsImage from '@/assets/bb4.png';
import ERP_IMAGE from '@/assets/bb5.png';
import REPORTING_IMAGE from '@/assets/bb6.png';

/* =====================================================
   CONTACT
===================================================== */

const CONTACT_LINK = '/#contact';

/* =====================================================
   DATA
===================================================== */

const TOP_BENEFITS: { icon: ElementType; lines: [string, string] }[] = [
  { icon: Gauge, lines: ['Service', 'plus rapide'] },
  { icon: ChartNoAxesCombined, lines: ['Meilleure', 'rentabilité'] },
  { icon: Users, lines: ['Organisation', 'optimisée'] },
  { icon: Settings, lines: ['Gestion', 'centralisée'] },
];

const SATELLITES = {
  borne: {
    title: 'Bornes de commande',
    text: 'Commande autonome pour vos clients',
    image: borneImage,
  },
  pda: {
    title: 'PAD – Prise de commande',
    text: 'Mobilité et efficacité pour vos équipes',
    image: pdaImage,
  },
  kds: {
    title: 'Écran cuisine KDS',
    text: 'Des cuisines plus organisées et plus performantes',
    image: kdsImage,
  },
  reporting: {
    title: 'Reporting CSI',
    text: 'Suivez vos performances en temps réel',
    image: REPORTING_IMAGE,
  },
  erp: {
    title: 'GMS / ERP CSI',
    text: 'Gestion centralisée de vos établissements',
    image: ERP_IMAGE,
  },
};

const CARDS = [
  {
    number: '01',
    title: 'Caisses enregistreuses CSI',
    subtitle: 'Encaissez, organisez et pilotez votre activité.',
    image: caisseImage,
    items: [
      'Gestion des tables et des commandes',
      'Encaissements multi-règlements',
      'Gestion des utilisateurs et des accès',
      'Solution évolutive et centralisée',
    ],
  },
  {
    number: '02',
    title: 'Bornes de commande',
    subtitle: 'Une commande autonome et fluide pour vos clients.',
    image: borneImage,
    items: [
      'Interface simple et attractive',
      'Personnalisation des menus',
      'Réduction du temps d’attente',
      'Augmentation du panier moyen',
    ],
  },
  {
    number: '03',
    title: 'PAD – Prise de commande',
    subtitle: 'Mobilité et efficacité pour vos équipes.',
    image: pdaImage,
    items: [
      'Prise de commande rapide et intuitive',
      'Gestion des tables en temps réel',
      'Envoi direct en cuisine (KDS)',
      'Réduction des erreurs de saisie',
    ],
  },
  {
    number: '04',
    title: 'Écran cuisine KDS',
    subtitle: 'Des cuisines plus organisées et plus performantes.',
    image: kdsImage,
    items: [
      'Affichage clair et lisible',
      'Organisation des commandes par poste',
      'Suivi des temps de préparation',
      'Priorisation automatique',
    ],
  },
  {
    number: '05',
    title: 'Reporting CSI',
    subtitle: 'Analysez vos performances en temps réel.',
    image: REPORTING_IMAGE,
    items: [
      'Tableaux de bord complets',
      'Suivi des ventes par période',
      'Analyse des produits et catégories',
      'Accès sécurisé à distance',
    ],
  },
  {
    number: '06',
    title: 'GMS / ERP CSI',
    subtitle: 'Gestion centralisée de vos établissements.',
    image: ERP_IMAGE,
    items: [
      'Gestion des achats et fournisseurs',
      'Suivi des stocks en temps réel',
      'Analyse des coûts et de la rentabilité',
      'Gestion multi-établissements',
    ],
  },
];

/* =====================================================
   ANIMATIONS
===================================================== */

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

/* =====================================================
   SATELLITE (image + bulle de texte)
===================================================== */

function Bubble({
  title,
  text,
  className = '',
}: {
  title: string;
  text: string;
  className?: string;
}) {
  return (
    <div
      className={`rounded-2xl bg-white/85 px-4 py-3 shadow-lg shadow-blue-900/[0.06] ring-1 ring-sky-100 backdrop-blur-md ${className}`}
    >
      <p className="text-sm font-extrabold leading-tight tracking-tight text-[#0b2a5b] sm:text-base">
        {title}
      </p>
      <p className="mt-0.5 text-xs leading-snug text-slate-600 sm:text-[13px]">
        {text}
      </p>
    </div>
  );
}

function Satellite({
  data,
  imgClass,
  className = '',
}: {
  data: { title: string; text: string; image: string };
  imgClass: string;
  className?: string;
}) {
  return (
    <div className={`flex flex-col items-center ${className}`}>
      <img
        src={data.image}
        alt={data.title}
        loading="lazy"
        decoding="async"
        className={`object-contain drop-shadow-xl ${imgClass}`}
      />
      <Bubble title={data.title} text={data.text} className="-mt-3" />
    </div>
  );
}

/* =====================================================
   CARTE NUMÉROTÉE
===================================================== */

function NumberedCard({
  number,
  title,
  subtitle,
  image,
  items,
}: (typeof CARDS)[number]) {
  return (
    <motion.article
      variants={fadeUp}
      whileHover={{ y: -4 }}
      className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/70 bg-white shadow-md shadow-blue-900/[0.05]"
    >
      <div className="flex items-start gap-3 p-4 pb-0">
        <span className="flex h-11 w-9 shrink-0 items-center justify-center rounded-md bg-blue-600 text-xl font-black text-white">
          {number}
        </span>

        <div>
          <h3 className="text-xl font-extrabold leading-tight tracking-tight text-[#0b2a5b]">
            {title}
          </h3>
          <p className="mt-0.5 text-sm leading-snug text-slate-600">
            {subtitle}
          </p>
        </div>
      </div>

      <div className="relative flex h-52 items-center justify-center px-4 py-3">
        <div className="pointer-events-none absolute inset-x-0 inset-y-0 bg-gradient-to-b from-white via-sky-50/60 to-white" />
        <img
          src={image}
          alt={title}
          loading="lazy"
          decoding="async"
          className="relative z-10 h-full w-full object-contain drop-shadow-lg"
        />
      </div>

      <ul className="space-y-1.5 px-5">
        {items.map((item) => (
          <li key={item} className="flex items-center gap-2.5">
            <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white">
              <Check className="h-2.5 w-2.5" strokeWidth={4} />
            </span>
            <span className="text-[13px] leading-5 text-slate-700">
              {item}
            </span>
          </li>
        ))}
      </ul>

      <div className="mt-auto p-5 pt-5">
        <a
          href={CONTACT_LINK}
          className="group inline-flex items-center gap-2 rounded-full bg-[#0b2a5b] px-5 py-2.5 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-700/25 focus:outline-none focus:ring-4 focus:ring-sky-200"
        >
          Découvrir la solution
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </a>
      </div>
    </motion.article>
  );
}

/* =====================================================
   PAGE
===================================================== */

export default function SolutionsRestauration() {
  return (
    <main className="overflow-hidden bg-white text-slate-800">
      {/* =====================================================
          ÉCOSYSTÈME
      ===================================================== */}

      <section className="relative isolate overflow-hidden">
        {/* Arrière-plan restaurant flouté */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <img
            src={heroImage}
            alt=""
            aria-hidden="true"
            className="h-full w-full scale-110 object-cover object-center blur-[3px]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/70 to-white/85" />
        </div>

<div className="relative mx-auto max-w-6xl px-5 pb-12 pt-28 sm:px-8 sm:pt-32 lg:pb-16 lg:pt-36">          {/* En-tête */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="grid gap-8 lg:grid-cols-[1.25fr_1fr] lg:items-start"
          >
            <div>

              <motion.h1
                variants={fadeUp}
                className="text-3xl font-black leading-[1.08] tracking-tight text-[#0b2a5b] sm:text-4xl lg:text-5xl"
              >
                Un écosystème complet pour une gestion plus simple et plus{' '}
                <span className="text-blue-600">performante</span>
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="mt-4 max-w-xl text-sm leading-6 text-slate-700 sm:text-[15px]"
              >
                Des solutions connectées qui travaillent ensemble pour
                optimiser votre établissement, du service à l’analyse de vos
                performances.
              </motion.p>
            </div>

            {/* 4 bénéfices */}
            <motion.div
              variants={fadeUp}
              className="grid grid-cols-2 gap-y-5 sm:grid-cols-4 lg:divide-x lg:divide-slate-300/70"
            >
              {TOP_BENEFITS.map(({ icon: Icon, lines }) => (
                <div
                  key={lines.join(' ')}
                  className="flex flex-col items-center px-2 text-center"
                >
                  <Icon className="h-9 w-9 text-[#0b2a5b]" strokeWidth={1.6} />
                  <p className="mt-2 text-sm font-medium leading-tight text-[#0b2a5b]">
                    {lines[0]}
                    <br />
                    {lines[1]}
                  </p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* ---------- Écosystème desktop ---------- */}
          <div className="relative mx-auto mt-6 hidden h-[760px] w-full max-w-5xl lg:block">
            {/* Cercle pointillé */}
            <svg
              aria-hidden="true"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              className="pointer-events-none absolute left-[14%] top-[10%] h-[78%] w-[72%]"
            >
              <ellipse
                cx="50"
                cy="50"
                rx="49"
                ry="49"
                fill="rgba(255,255,255,0.35)"
                stroke="#60a5fa"
                strokeWidth="0.35"
                strokeDasharray="1.2 1.4"
                vectorEffect="non-scaling-stroke"
              />
            </svg>

            {/* Borne – haut */}
            <Satellite
              data={SATELLITES.borne}
              imgClass="h-52 w-40"
              className="absolute left-[40%] top-0 -translate-x-1/2"
            />
            <Bubble
              title={SATELLITES.borne.title}
              text={SATELLITES.borne.text}
              className="absolute left-[53%] top-[4%] hidden"
            />

            {/* PDA – gauche */}
            <Satellite
              data={SATELLITES.pda}
              imgClass="h-44 w-36 -rotate-[24deg]"
              className="absolute left-[2%] top-[19%]"
            />

            {/* KDS – droite */}
            <Satellite
              data={SATELLITES.kds}
              imgClass="h-40 w-64"
              className="absolute right-[0%] top-[22%]"
            />

            {/* Caisse – centre */}
            <div className="absolute left-1/2 top-[28%] flex -translate-x-1/2 flex-col items-center">
              <img
                src={caisseImage}
                alt="Caisse enregistreuse CSI"
                className="h-72 w-[420px] object-contain drop-shadow-2xl"
                loading="eager"
              />
              <div className="-mt-3 rounded-2xl bg-[#0b2a5b] px-7 py-3 text-center text-white shadow-xl shadow-blue-900/30">
                <p className="text-lg font-extrabold tracking-tight">
                  Caisse enregistreuse CSI
                </p>
                <p className="text-sm text-blue-100">
                  Le cœur de votre activité
                </p>
              </div>
            </div>

            {/* Flèches */}
            <ArrowUpDown
              className="absolute left-1/2 top-[19%] h-8 w-8 -translate-x-1/2 text-blue-500"
              strokeWidth={2.2}
            />
            <ArrowUpDown
              className="absolute left-1/2 top-[76%] h-9 w-9 -translate-x-1/2 text-blue-500"
              strokeWidth={2.2}
            />
            <ArrowRight
              className="absolute left-[30%] top-[35%] h-8 w-8 rotate-[28deg] text-blue-500"
              strokeWidth={2.2}
            />
            <ArrowRight
              className="absolute right-[27%] top-[35%] h-8 w-8 rotate-[152deg] text-blue-500"
              strokeWidth={2.2}
            />
            <ArrowRight
              className="absolute bottom-[26%] left-[30%] h-8 w-8 -rotate-[38deg] text-blue-500"
              strokeWidth={2.2}
            />
            <ArrowRight
              className="absolute bottom-[26%] right-[28%] h-8 w-8 -rotate-[142deg] text-blue-500"
              strokeWidth={2.2}
            />

            {/* Reporting – bas gauche */}
            <Satellite
              data={SATELLITES.reporting}
              imgClass="h-44 w-72"
              className="absolute bottom-0 left-[3%]"
            />

            {/* ERP – bas droite */}
            <Satellite
              data={SATELLITES.erp}
              imgClass="h-48 w-72"
              className="absolute bottom-0 right-[2%]"
            />
          </div>

          {/* ---------- Écosystème mobile / tablette ---------- */}
          <div className="mt-8 lg:hidden">
            <div className="flex flex-col items-center">
              <img
                src={caisseImage}
                alt="Caisse enregistreuse CSI"
                className="h-56 w-full max-w-sm object-contain drop-shadow-2xl"
                loading="eager"
              />
              <div className="-mt-3 rounded-2xl bg-[#0b2a5b] px-6 py-3 text-center text-white shadow-xl shadow-blue-900/30">
                <p className="text-base font-extrabold">
                  Caisse enregistreuse CSI
                </p>
                <p className="text-sm text-blue-100">
                  Le cœur de votre activité
                </p>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2">
              <Satellite data={SATELLITES.borne} imgClass="h-44 w-36" />
              <Satellite data={SATELLITES.pda} imgClass="h-44 w-36" />
              <Satellite data={SATELLITES.kds} imgClass="h-36 w-56" />
              <Satellite data={SATELLITES.reporting} imgClass="h-36 w-60" />
              <Satellite
                data={SATELLITES.erp}
                imgClass="h-40 w-60"
                className="sm:col-span-2"
              />
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          6 CARTES
      ===================================================== */}

      <section id="solutions" className="relative scroll-mt-24 bg-slate-50/70 py-10 sm:py-12">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="grid gap-5 md:grid-cols-2 lg:grid-cols-3"
          >
            {CARDS.map((card) => (
              <NumberedCard key={card.number} {...card} />
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  );
}