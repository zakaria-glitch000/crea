import React from "react";
import {
  Zap,
  Target,
  CheckCircle2,
  TrendingUp,
  Scale,
  Barcode,
  Coins,
  FileText,
  PieChart,
  Settings,
  Wrench,
  Users,
  Headphones,
  ArrowRight,
} from "lucide-react";
import "./Balance.css";
import { Link } from "react-router-dom";
import logoImage from "@/assets/70.jpeg";
import heroImage from "@/assets/70.jpeg";
import integratedImage from "@/assets/71.jpeg";
import fruitsImage from "@/assets/72.jpeg";
import boucherieImage from "@/assets/73.jpeg";
import poissonnerieImage from "@/assets/74.jpeg";
import epicerieImage from "@/assets/75.jpeg";
import rayonsImage from "@/assets/76.jpeg";
import tbal from "@/assets/tbal.jpeg";

const IMG = {
  logo: logoImage,
  hero: heroImage,
  integrated: integratedImage,
  fruits: fruitsImage,
  boucherie: boucherieImage,
  poissonnerie: poissonnerieImage,
  epicerie: epicerieImage,
  rayons: rayonsImage,
};

const advantages = [
  {
    icon: Zap,
    color: "orange",
    title: "Encaissement plus rapide",
    text: "La pesée s'intègre automatiquement dans INNOSHOP.",
  },
  {
    icon: Target,
    color: "blue",
    title: "Moins d'erreurs",
    text: "Prix et poids transmis directement à la caisse.",
  },
  {
    icon: CheckCircle2,
    color: "green",
    title: "Gestion simplifiée",
    text: "Mise à jour des prix et produits depuis INNOSHOP.",
  },
  {
    icon: TrendingUp,
    color: "purple",
    title: "Adaptée à votre commerce",
    text: "Fruits et légumes, boucherie, poissonnerie, rayons frais, épicerie…",
  },
];

const features = [
  {
    icon: Scale,
    color: "orange",
    title: "Pesée en temps réel",
    text: "Affichage clair du poids et du prix sur la balance et à l'écran de la caisse.",
  },
  {
    icon: Barcode,
    color: "blue",
    title: "Articles par code ou par famille",
    text: "Fruits et légumes, viandes, poissons, produits en vrac.",
  },
  {
    icon: Coins,
    color: "green",
    title: "Mise à jour des prix",
    text: "Depuis INNOSHOP, sans intervention sur la balance.",
  },
  {
    icon: FileText,
    color: "red",
    title: "Intégration caisse",
    text: "Le produit est ajouté automatiquement dans le ticket.",
  },
  {
    icon: PieChart,
    color: "purple",
    title: "Suivi des ventes",
    text: "Statistiques par article, par rayon ou par période.",
  },
];

const sectors = [
  { img: IMG.fruits, label: "Fruits et légumes" },
  { img: IMG.boucherie, label: "Boucherie" },
  { img: IMG.poissonnerie, label: "Poissonnerie" },
  { img: IMG.epicerie, label: "Épicerie et produits en vrac" },
  { img: IMG.rayons, label: "Rayons frais" },
];

const support = [
  { icon: Wrench, label: "Installation et paramétrage" },
  { icon: Users, label: "Formation des équipes" },
  { icon: Headphones, label: "Assistance technique" },
  { icon: Settings, label: "Suivi et maintenance" },
];

export default function OraliPage() {
  return (
    <main className="orali w-full min-h-screen overflow-hidden bg-white font-sans text-slate-800 antialiased">

      {/* =====================================================
          HERO — IMAGE EN ARRIÈRE-PLAN
      ===================================================== */}
      <header className="relative isolate flex min-h-[680px] items-center overflow-hidden bg-gradient-to-br from-white via-slate-50 to-sky-50 pt-28 sm:min-h-[740px] sm:pt-32">

        {/* Image de fond */}
        <div className="absolute inset-0 -z-30 overflow-hidden">
          <img
            className="h-full w-full object-cover object-center"
            src={IMG.hero}
            alt="Balance connectée à la caisse INNOSHOP"
          />
        </div>

        {/* Voile clair sur l'image */}
        <div className="absolute inset-0 -z-20 bg-gradient-to-r from-white/95 via-white/85 to-white/35" />

        {/* Dégradé inférieur */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-slate-100/80 via-transparent to-white/10" />

        {/* Décoration lumineuse */}
        <div className="pointer-events-none absolute -left-32 top-32 -z-10 h-80 w-80 rounded-full bg-blue-200/20 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 right-0 -z-10 h-80 w-80 rounded-full bg-orange-200/25 blur-3xl" />

        {/* Contenu principal */}
        <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
          <div className="max-w-4xl">

            <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-blue-100 bg-white/90 px-4 py-2.5 text-xs font-bold uppercase tracking-[0.16em] text-blue-700 shadow-sm backdrop-blur-md sm:text-sm">
              <span className="h-2 w-2 animate-pulse rounded-full bg-orange-500" />
              Balance connectée
            </div>

            <h1 className="max-w-4xl text-4xl font-black leading-[1.12] tracking-tight text-slate-900 sm:text-5xl md:text-6xl lg:text-7xl">
              Une pesée rapide
              <span className="mt-3 block bg-gradient-to-r from-blue-600 via-sky-500 to-orange-500 bg-clip-text text-transparent">
                et une gestion simplifiée.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg sm:leading-9">
              Notre balance électronique est directement connectée à notre
              logiciel INNOSHOP pour un encaissement rapide, fiable et sans
              erreur. Une solution idéale pour les supermarchés, épiceries,
              boucheries, fruits et légumes, poissonneries et commerces
              alimentaires.
            </p>

            {/* Points forts */}
            <div className="mt-8 grid max-w-2xl grid-cols-1 gap-3 sm:grid-cols-2">
              {[
                "Pesée et prix transmis automatiquement",
                "Réduction des erreurs d'encaissement",
                "Gestion simplifiée des articles",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 text-sm font-medium leading-6 text-slate-700"
                >
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                    <CheckCircle2 size={16} />
                  </span>
                  {item}
                </div>
              ))}
            </div>

            {/* Boutons */}
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                to="/#contact"
                className="group inline-flex items-center justify-center gap-3 rounded-xl bg-orange-500 px-7 py-4 text-sm font-bold text-white shadow-lg shadow-orange-500/20 transition-all duration-300 hover:-translate-y-1 hover:bg-orange-600 hover:shadow-xl"
              >
                Demander un devis
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </Link>

              <a
                href="#avantages"
                className="group inline-flex items-center justify-center gap-3 rounded-xl border border-slate-200 bg-white/90 px-7 py-4 text-sm font-bold text-slate-700 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700"
              >
                Découvrir les avantages
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </a>
            </div>

            {/* Informations complémentaires */}
            <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 border-t border-slate-200 pt-6 text-sm text-slate-600">
              <span className="inline-flex items-center gap-2">
                <CheckCircle2 size={17} className="text-blue-600" />
                Compatible avec INNOSHOP
              </span>

              <span className="inline-flex items-center gap-2">
                <CheckCircle2 size={17} className="text-blue-600" />
                Adaptée aux commerces alimentaires
              </span>
            </div>
          </div>
        </div>

        {/* Indicateur décoratif */}
        <div className="absolute bottom-7 right-7 hidden items-center gap-3 rounded-2xl border border-slate-200 bg-white/90 px-4 py-3 text-sm text-slate-700 shadow-lg backdrop-blur-lg md:flex">
          <Scale size={20} className="text-blue-600" />
          <span>Précision · Rapidité · Simplicité</span>
        </div>
      </header>

      {/* =====================================================
          AVANTAGES
      ===================================================== */}
      <section
        id="avantages"
        className="relative z-10 mx-auto w-full max-w-7xl px-5 py-12 sm:px-8 sm:py-16 lg:px-10"
      >
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {advantages.map(({ icon: Icon, color, title, text }) => (
            <article
              className="group relative flex flex-col items-start overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-900/5 sm:p-7"
              key={title}
            >
              <div className="absolute right-0 top-0 h-24 w-24 rounded-full bg-blue-50 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />

              <span
                className={`icon-circle icon-circle--${color} relative mb-5 flex h-14 w-14 items-center justify-center rounded-2xl`}
              >
                <Icon size={28} />
              </span>

              <h3 className="relative mb-3 text-lg font-bold text-slate-900 transition-colors group-hover:text-blue-700">
                {title}
              </h3>

              <p className="relative text-sm leading-7 text-slate-600">
                {text}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* =====================================================
          SOLUTION INTÉGRÉE
      ===================================================== */}
      <section className="integrated">
        <div className="integrated__text">
          <p className="eyebrow">UNE SOLUTION INTÉGRÉE</p>

          <h2>
            Balance + INNOSHOP
            <br />
            en parfaite synchronisation
          </h2>

          <p>
            Le poids, le prix et la référence article sont automatiquement
            envoyés à la caisse. Vous gagnez du temps et vous sécurisez vos
            ventes.
          </p>

          <Link
            to="/#contact"
            className="group inline-flex items-center justify-center gap-3 rounded-xl bg-orange-500 px-7 py-4 text-sm font-bold text-white shadow-lg shadow-orange-500/20 transition-all duration-300 hover:-translate-y-1 hover:bg-orange-600 hover:shadow-xl"
          >
            Demander un devis
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="integrated__visual">
          <img
            src={IMG.integrated}
            alt="Balance et caisse INNOSHOP synchronisées"
            loading="lazy"
          />

          <span className="caption caption--left">
            <svg
              className="caption__arrow"
              viewBox="0 0 210 40"
              aria-hidden="true"
            >
              <path
                d="M4 36 C4 22 12 18 26 18 C90 18 150 16 196 6"
                fill="none"
                stroke="#f26a1b"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M184 2 L198 5 L190 17"
                fill="none"
                stroke="#f26a1b"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M4 36 L0 26 M4 36 L12 31"
                fill="none"
                stroke="#f26a1b"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>

            Transmission automatique
            <br />
            du poids et du prix
          </span>

          <span className="caption caption--right">
            <svg
              className="caption__arrow"
              viewBox="0 0 120 40"
              aria-hidden="true"
            >
              <path
                d="M4 10 C30 -2 80 -2 104 24"
                fill="none"
                stroke="#f26a1b"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M92 22 L106 27 L108 12"
                fill="none"
                stroke="#f26a1b"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            Encaissement direct
            <br />
            dans INNOSHOP
          </span>
        </div>
      </section>

      {/* =====================================================
          FONCTIONNALITÉS
      ===================================================== */}
      <section className="features">
        <div className="features__header">
          <p className="eyebrow eyebrow--center">LES FONCTIONNALITÉS</p>
          <h2 className="features__title">
            Tout ce qu'il vous faut pour une gestion efficace
          </h2>
        </div>

        <div className="features__grid">
          {features.map(({ icon: Icon, color, title, text }) => (
            <article className="feature" key={title}>
              <span className={`icon-circle icon-circle--${color}`}>
                <Icon size={32} />
              </span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* =====================================================
          SECTEURS D'ACTIVITÉ
      ===================================================== */}
      <section className="sectors">
        <div className="sectors__intro">
          <p className="eyebrow">
            IDÉAL POUR TOUS LES
            <br />
            PROFESSIONNELS DU RETAIL
          </p>

          <h2>
            Une solution adaptée
            <br />à votre métier
          </h2>
        </div>

        {sectors.map(({ img, label }) => (
          <figure className="sector" key={label}>
            <img src={img} alt={label} loading="lazy" />
            <figcaption>{label}</figcaption>
          </figure>
        ))}
      </section>

      {/* =====================================================
          CARD ACCOMPAGNEMENT (AJOUTÉE EN BAS DE PAGE)
      ===================================================== */}
      <section className="mx-auto w-full max-w-7xl px-5 py-12 sm:px-8 lg:px-10">
        <div className="overflow-hidden rounded-3xl bg-[#f1f6ff] shadow-lg shadow-slate-200/50 border border-slate-200/80">
          <div className="grid lg:grid-cols-[2fr_3fr]">
            {/* Image khawya - Placeholder */}
            <div className="relative min-h-[260px] bg-slate-200/70 lg:min-h-full">
              <img
                src={tbal}
                alt="Notre accompagnement"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
              <span className="text-[12px] font-extrabold uppercase tracking-[0.16em] text-slate-500">
                NOTRE ACCOMPAGNEMENT
              </span>

              <h2 className="mt-2 text-2xl font-black tracking-tight text-[#0b2a5b] sm:text-3xl">
                Installation, formation et support
              </h2>

              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Notre équipe technique vous accompagne à chaque étape pour une mise en service rapide et une utilisation en toute sérénité.
              </p>

              <div className="mt-6 flex flex-wrap items-center justify-between gap-6">
                {/* Grid 4 icons */}
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                  <div className="flex flex-col items-center rounded-2xl bg-white p-3 text-center shadow-sm border border-slate-100">
                    <Wrench className="h-6 w-6 text-[#f26522]" strokeWidth={2} />
                    <span className="mt-2 text-[11px] font-bold leading-tight text-slate-700">
                      Installation et paramétrage
                    </span>
                  </div>

                  <div className="flex flex-col items-center rounded-2xl bg-white p-3 text-center shadow-sm border border-slate-100">
                    <Users className="h-6 w-6 text-[#f26522]" strokeWidth={2} />
                    <span className="mt-2 text-[11px] font-bold leading-tight text-slate-700">
                      Formation des équipes
                    </span>
                  </div>

                  <div className="flex flex-col items-center rounded-2xl bg-white p-3 text-center shadow-sm border border-slate-100">
                    <Headphones className="h-6 w-6 text-[#f26522]" strokeWidth={2} />
                    <span className="mt-2 text-[11px] font-bold leading-tight text-slate-700">
                      Assistance technique
                    </span>
                  </div>

                  <div className="flex flex-col items-center rounded-2xl bg-white p-3 text-center shadow-sm border border-slate-100">
                    <Settings className="h-6 w-6 text-[#f26522]" strokeWidth={2} />
                    <span className="mt-2 text-[11px] font-bold leading-tight text-slate-700">
                      Suivi et maintenance
                    </span>
                  </div>
                </div>

                {/* Bouton */}
                <Link
                  to="/#contact"
                  className="inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-[#f26522] px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-orange-950/20 transition duration-200 hover:-translate-y-0.5 hover:bg-[#d95316]"
                >
                  Demander une démonstration <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

    
    </main>
  );
}