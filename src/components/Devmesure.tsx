import React, { useState } from 'react';
import {
  Cpu,
  Smartphone,
  Database,
  BarChart3,
  Layers,
  Headphones,
  Search,
  Lightbulb,
  Code2,
  CheckCircle2,
  Rocket,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  TrendingUp,
  Sparkles,
  Users,
  PhoneCall,
  Mail,
  Calendar,
  ArrowRight,
  PieChart,
  ShoppingBag,
} from 'lucide-react';

export default function App() {
  const [activeSlide, setActiveSlide] = useState(0);

  const projects = [
    {
      id: 1,
      title: 'Gestion des stocks avancée',
      subtitle: 'Suivi des stocks, achats et réapprovisionnements.',
      type: 'Entrepôt & Logistique',
      stats: '99.8% Précision',
      image:
        'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 2,
      title: 'Gestion multi-sites',
      subtitle: 'Pilotage centralisé pour plusieurs points de vente.',
      type: 'Retail & Franchise',
      stats: '12+ Magasins sync',
      image:
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 3,
      title: 'Gestion de la relation client',
      subtitle: 'CRM personnalisé avec historique et fidélité.',
      type: 'CRM & Marketing',
      stats: '+45% Rétention',
      image:
        'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 4,
      title: 'Reporting sur mesure',
      subtitle: 'Tableaux de bord adaptés à vos indicateurs métiers.',
      type: 'Business Intelligence',
      stats: 'Temps réel',
      image:
        'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=800&q=80',
    },
  ];

  const services = [
    {
      icon: <Cpu className="h-6 w-6 text-blue-600" />,
      title: 'Logiciels métiers sur mesure',
      desc: 'Des applications adaptées à vos processus et à votre organisation.',
    },
    {
      icon: <Smartphone className="h-6 w-6 text-blue-600" />,
      title: 'Applications web et mobiles',
      desc: 'Des outils accessibles sur ordinateur, tablette et smartphone.',
    },
    {
      icon: <Database className="h-6 w-6 text-blue-600" />,
      title: 'ERP et gestion personnalisée',
      desc: 'Centralisez vos opérations, votre comptabilité et vos données dans une solution unique.',
    },
    {
      icon: <BarChart3 className="h-6 w-6 text-blue-600" />,
      title: 'Tableaux de bord et reporting',
      desc: 'Des indicateurs en temps réel pour piloter votre activité en toute simplicité.',
    },
    {
      icon: <Layers className="h-6 w-6 text-blue-600" />,
      title: 'Intégration de solutions',
      desc: 'Connexion avec vos logiciels existants (comptabilité, e-commerce, monétique, etc.).',
    },
    {
      icon: <Headphones className="h-6 w-6 text-blue-600" />,
      title: 'Accompagnement technique',
      desc: 'De l’analyse de vos besoins à la mise en service, avec un support durable.',
    },
  ];

  const steps = [
    {
      num: '01',
      icon: <Search className="h-5 w-5 text-blue-600" />,
      title: 'Analyse de vos besoins',
      desc: 'Compréhension de votre activité et de vos objectifs.',
    },
    {
      num: '02',
      icon: <Lightbulb className="h-5 w-5 text-blue-600" />,
      title: 'Conception de la solution',
      desc: 'Étude fonctionnelle et proposition sur mesure.',
    },
    {
      num: '03',
      icon: <Code2 className="h-5 w-5 text-blue-600" />,
      title: 'Développement',
      desc: 'Création et intégration des fonctionnalités.',
    },
    {
      num: '04',
      icon: <CheckCircle2 className="h-5 w-5 text-blue-600" />,
      title: 'Tests et validation',
      desc: 'Vérification et optimisation avec vos équipes.',
    },
    {
      num: '05',
      icon: <Rocket className="h-5 w-5 text-blue-600" />,
      title: 'Mise en service et suivi',
      desc: 'Déploiement et support continu.',
    },
  ];

  const handleNextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % projects.length);
  };

  const handlePrevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-800 antialiased selection:bg-blue-600 selection:text-white">

      {/* =====================================================
          HERO : TEXTE À GAUCHE + IMAGE À DROITE
      ===================================================== */}
      <section
        id="accueil"
        className="relative overflow-hidden bg-gradient-to-br from-white via-slate-50 to-sky-50/60"
      >
        <div className="relative mx-auto grid min-h-[620px] max-w-7xl grid-cols-1 items-center gap-10 px-6 py-16 sm:px-8 lg:grid-cols-2 lg:gap-8 lg:px-8 lg:py-20">

          {/* Effets lumineux */}
          <div className="pointer-events-none absolute -left-32 top-10 h-80 w-80 rounded-full bg-sky-100/70 blur-3xl" />
          <div className="pointer-events-none absolute bottom-0 right-0 h-72 w-72 rounded-full bg-blue-100/50 blur-3xl" />

          {/* TEXTE À GAUCHE */}
          <div className="relative z-10 max-w-2xl">

            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50/90 px-4 py-2 text-xs font-bold uppercase tracking-wider text-blue-700">
              <span className="h-2 w-2 animate-pulse rounded-full bg-blue-600" />
              Développement sur mesure
            </div>

            <h1 className="text-4xl font-black leading-[1.12] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Vos besoins sont uniques.
              <span className="mt-2 block bg-gradient-to-r from-sky-500 to-blue-700 bg-clip-text text-transparent">
                Nos solutions aussi.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
              Nous concevons et développons des solutions logicielles sur
              mesure pour répondre précisément à vos besoins de gestion,
              d’encaissement et de pilotage. Des outils performants,
              intuitifs et adaptés à votre activité.
            </p>

            {/* Points forts */}
            <div className="mt-7 flex flex-col gap-3">
              {[
                'Des logiciels adaptés à votre métier',
                'Des interfaces modernes et intuitives',
                'Un accompagnement de la conception au déploiement',
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 text-sm font-medium text-slate-700 sm:text-base"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-700">
                    <CheckCircle2 className="h-4 w-4" />
                  </span>
                  {item}
                </div>
              ))}
            </div>

            {/* Boutons vers le formulaire contact */}
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-orange-500 px-7 py-4 text-sm font-bold text-white shadow-lg shadow-orange-500/20 transition-all duration-300 hover:-translate-y-1 hover:bg-orange-600 hover:shadow-xl"
              >
                Parler de votre projet
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-7 py-4 text-sm font-bold text-slate-700 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:text-blue-700 hover:shadow-lg"
              >
                Demander une démo
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>

            <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-slate-200/80 pt-6 text-sm text-slate-500">
              <span className="inline-flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-blue-600" />
                Solutions personnalisées
              </span>
              <span className="inline-flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-blue-600" />
                Accompagnement dédié
              </span>
            </div>
          </div>

{/* IMAGE À DROITE */}
<div className="relative z-10 mx-auto w-full max-w-xl lg:ml-auto">
  <div className="absolute -inset-5 rounded-[2rem] bg-gradient-to-br from-sky-200/60 via-blue-100/40 to-orange-100/50 blur-2xl" />

  <div className="relative overflow-hidden rounded-[1.75rem] border border-white/80 bg-white p-2 shadow-2xl shadow-blue-900/10">
    <div className="relative overflow-hidden rounded-[1.35rem] bg-slate-50">
      <img
        src="/src/assets/dev.jpg"
        alt="Développement logiciel et conception de solutions informatiques"
        className="h-[320px] w-full object-contain sm:h-[420px] lg:h-[480px]"
      />

      {/* Dégradé léger sur l'image */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-blue-950/10 via-transparent to-white/5" />
    </div>
  </div>



            {/* Icône décorative */}
            <div className="absolute -right-3 top-8 hidden h-16 w-16 items-center justify-center rounded-2xl border border-white bg-white/90 text-blue-600 shadow-lg sm:flex">
              <Cpu className="h-8 w-8" />
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          NOS SERVICES
      ===================================================== */}
      <section id="solutions" className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="mx-auto mb-16 max-w-2xl text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Nos services de développement
            </h2>
            <div className="mx-auto my-3 h-1 w-12 rounded-full bg-blue-600" />
            <p className="font-medium text-slate-600">
              Des solutions personnalisées pour optimiser la gestion de
              votre activité.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((srv, idx) => (
              <div
                key={idx}
                className="group flex flex-col items-start rounded-2xl border border-slate-100 bg-white p-8 shadow-sm transition-all duration-300 hover:border-blue-100 hover:shadow-xl hover:shadow-blue-500/5"
              >
                <div className="mb-6 rounded-xl bg-blue-50 p-3.5 text-blue-600 transition-colors duration-300 group-hover:bg-blue-600 group-hover:text-white">
                  {srv.icon}
                </div>

                <h3 className="mb-2 text-lg font-bold text-slate-900 transition-colors group-hover:text-blue-600">
                  {srv.title}
                </h3>

                <p className="text-sm leading-relaxed text-slate-600">
                  {srv.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          MÉTHODE DE DÉVELOPPEMENT
      ===================================================== */}
      <section
        id="developpement"
        className="border-y border-slate-100 bg-slate-50/70 py-20"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Notre méthode de développement
            </h2>
            <div className="mx-auto my-3 h-1 w-12 rounded-full bg-blue-600" />
            <p className="font-medium text-slate-600">
              <span className="font-semibold text-blue-600">
                Un accompagnement complet
              </span>
              , de l'idée à la mise en production.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-12 right-12 top-12 -z-0 hidden h-0.5 bg-blue-200 lg:block" />

            <div className="relative z-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5">
              {steps.map((st) => (
                <div
                  key={st.num}
                  className="group flex flex-col items-center text-center"
                >
                  <div className="relative mb-6 flex h-16 w-16 items-center justify-center rounded-full border-2 border-blue-500 bg-white shadow-md transition-all duration-300 group-hover:scale-110 group-hover:border-blue-600 group-hover:bg-blue-600">
                    <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-blue-600 text-[10px] font-bold text-white transition-colors group-hover:bg-orange-500">
                      {st.num}
                    </span>

                    <div className="text-blue-600 transition-colors group-hover:text-white">
                      {st.icon}
                    </div>
                  </div>

                  <h3 className="mb-2 text-base font-bold text-slate-900 transition-colors group-hover:text-blue-600">
                    {st.title}
                  </h3>

                  <p className="max-w-[200px] text-xs leading-relaxed text-slate-500">
                    {st.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          EXEMPLES DE SOLUTIONS
      ===================================================== */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Quelques exemples de solutions développées
            </h2>
            <div className="mx-auto my-3 h-1 w-12 rounded-full bg-blue-600" />
            <p className="font-medium text-slate-600">
              Des projets concrets pour des métiers variés.
            </p>
          </div>

          <div className="relative">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {projects.map((proj, idx) => (
                <div
                  key={proj.id}
                  className={`group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:shadow-xl ${
                    idx === activeSlide
                      ? 'ring-2 ring-blue-600 ring-offset-2'
                      : ''
                  }`}
                >
                  <div className="relative h-48 overflow-hidden bg-slate-900">
                    <img
                      src={proj.image}
                      alt={proj.title}
                      className="h-full w-full object-cover opacity-90 transition-transform duration-500 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

                    <span className="absolute left-3 top-3 rounded-full bg-slate-900/80 px-2.5 py-1 text-[10px] font-semibold text-white backdrop-blur-md">
                      {proj.type}
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col justify-between bg-white p-5">
                    <div>
                      <h3 className="mb-1 text-base font-bold text-slate-900 transition-colors group-hover:text-blue-600">
                        {proj.title}
                      </h3>

                      <p className="mb-4 text-xs leading-relaxed text-slate-500">
                        {proj.subtitle}
                      </p>
                    </div>

                    <div className="flex items-center justify-between border-t border-slate-100 pt-3 text-xs font-semibold text-blue-600">
                      <span>{proj.stats}</span>
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Commandes du carrousel */}
            <div className="mt-8 flex items-center justify-center gap-4">
              <button
                type="button"
                onClick={handlePrevSlide}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900"
                aria-label="Projet précédent"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>

              <div className="flex items-center gap-2">
                {projects.map((project, i) => (
                  <button
                    key={project.id}
                    type="button"
                    onClick={() => setActiveSlide(i)}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      i === activeSlide
                        ? 'w-8 bg-blue-600'
                        : 'w-2.5 bg-slate-200 hover:bg-slate-300'
                    }`}
                    aria-label={`Afficher le projet ${i + 1}`}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={handleNextSlide}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900"
                aria-label="Projet suivant"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

{/* =====================================================
    POURQUOI CHOISIR ORALI — TEXTE À GAUCHE + IMAGE À DROITE
===================================================== */}
<section className="relative overflow-hidden bg-gradient-to-br from-white via-slate-50 to-sky-50/60 py-20 sm:py-24">

  {/* Effets lumineux */}
  <div className="pointer-events-none absolute -left-32 top-10 h-80 w-80 rounded-full bg-sky-100/60 blur-3xl" />
  <div className="pointer-events-none absolute -bottom-20 right-0 h-80 w-80 rounded-full bg-blue-100/50 blur-3xl" />

  <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-8">

    <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">

      {/* =====================================================
          TEXTE À GAUCHE
      ===================================================== */}
      <div className="relative z-10">

        {/* Badge */}
        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-wider text-blue-700">
          <span className="h-2 w-2 rounded-full bg-blue-600" />
          Pourquoi nous choisir ?
        </div>

        {/* Titre */}
        <h2 className="text-3xl font-black leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
          Pourquoi choisir{' '}
          <span className="bg-gradient-to-r from-sky-500 to-blue-700 bg-clip-text text-transparent">
            ORALI
          </span>{' '}
          ?
        </h2>

        <div className="my-5 h-1 w-14 rounded-full bg-orange-500" />

        {/* Description */}
        <p className="max-w-xl text-base leading-8 text-slate-600">
          Nous mettons la technologie au service de votre entreprise.
          Nos solutions sont pensées pour simplifier votre quotidien,
          améliorer votre productivité et accompagner durablement
          votre développement.
        </p>

        {/* Avantages */}
        <div className="mt-8 space-y-6">

          {/* Avantage 1 */}
          <div className="group flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-blue-100 bg-blue-50 text-blue-600 transition-all duration-300 group-hover:border-blue-600 group-hover:bg-blue-600 group-hover:text-white">
              <ShieldCheck className="h-6 w-6" />
            </div>

            <div>
              <h3 className="text-base font-bold text-slate-900 transition-colors group-hover:text-blue-700">
                Une solution 100% personnalisée
              </h3>
              <p className="mt-1 text-sm leading-6 text-slate-600">
                Des fonctionnalités adaptées à vos besoins, à votre
                métier et à vos processus de travail.
              </p>
            </div>
          </div>

          {/* Avantage 2 */}
          <div className="group flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-blue-100 bg-blue-50 text-blue-600 transition-all duration-300 group-hover:border-blue-600 group-hover:bg-blue-600 group-hover:text-white">
              <TrendingUp className="h-6 w-6" />
            </div>

            <div>
              <h3 className="text-base font-bold text-slate-900 transition-colors group-hover:text-blue-700">
                Un meilleur pilotage de votre activité
              </h3>
              <p className="mt-1 text-sm leading-6 text-slate-600">
                Visualisez vos indicateurs, suivez vos performances et
                prenez des décisions plus éclairées.
              </p>
            </div>
          </div>

          {/* Avantage 3 */}
          <div className="group flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-blue-100 bg-blue-50 text-blue-600 transition-all duration-300 group-hover:border-blue-600 group-hover:bg-blue-600 group-hover:text-white">
              <Sparkles className="h-6 w-6" />
            </div>

            <div>
              <h3 className="text-base font-bold text-slate-900 transition-colors group-hover:text-blue-700">
                Une interface simple et intuitive
              </h3>
              <p className="mt-1 text-sm leading-6 text-slate-600">
                Des outils modernes et faciles à utiliser pour
                simplifier le travail quotidien de vos équipes.
              </p>
            </div>
          </div>

          {/* Avantage 4 */}
          <div className="group flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-blue-100 bg-blue-50 text-blue-600 transition-all duration-300 group-hover:border-blue-600 group-hover:bg-blue-600 group-hover:text-white">
              <Users className="h-6 w-6" />
            </div>

            <div>
              <h3 className="text-base font-bold text-slate-900 transition-colors group-hover:text-blue-700">
                Un accompagnement durable
              </h3>
              <p className="mt-1 text-sm leading-6 text-slate-600">
                Nous vous accompagnons dans le déploiement, la
                maintenance et l'évolution de vos solutions.
              </p>
            </div>
          </div>

        </div>

        {/* Bouton */}
        <div className="mt-9">
          <a
            href="#contact"
            className="group inline-flex items-center justify-center gap-2 rounded-xl bg-orange-500 px-7 py-4 text-sm font-bold text-white shadow-lg shadow-orange-500/20 transition-all duration-300 hover:-translate-y-1 hover:bg-orange-600 hover:shadow-xl"
          >
            Parlons de votre projet
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

      </div>

      {/* =====================================================
          IMAGE À DROITE
      ===================================================== */}
      <div className="relative mx-auto w-full max-w-xl lg:ml-auto">

        {/* Halo lumineux */}
        <div className="absolute -inset-5 rounded-[2rem] bg-gradient-to-br from-sky-200/60 via-blue-100/40 to-orange-100/50 blur-2xl" />

        {/* Cadre image */}
        <div className="relative overflow-hidden rounded-[1.75rem] border border-white bg-white p-2 shadow-2xl shadow-blue-900/10">

          <div className="relative overflow-hidden rounded-[1.35rem]">

            <img
              src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=85"
              alt="Équipe professionnelle collaborant sur des solutions informatiques"
              className="h-[420px] w-full object-cover sm:h-[520px]"
              loading="lazy"
            />

            {/* Dégradé sur l'image */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/10 to-white/5" />

            {/* Texte sur l'image */}
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">

              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-2 text-xs font-semibold text-white backdrop-blur-md">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                Votre partenaire technologique
              </div>

              <h3 className="max-w-md text-2xl font-black leading-tight text-white sm:text-3xl">
                La technologie au service de votre réussite.
              </h3>

              <p className="mt-3 max-w-md text-sm leading-6 text-slate-200">
                Des solutions intelligentes pour optimiser vos opérations
                et faire évoluer votre entreprise.
              </p>

            </div>

          </div>
        </div>

        {/* Carte flottante en bas */}
        <div className="absolute -bottom-5 -left-3 flex items-center gap-3 rounded-2xl border border-slate-100 bg-white p-4 shadow-xl sm:-left-6">

          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
            <CheckCircle2 className="h-6 w-6" />
          </div>

          <div>
            <p className="text-sm font-bold text-slate-900">
              Une approche sur mesure
            </p>
            <p className="mt-1 text-xs text-slate-500">
              Adaptée à vos objectifs
            </p>
          </div>

        </div>

        {/* Icône décorative */}
        <div className="absolute -right-3 top-8 hidden h-16 w-16 items-center justify-center rounded-2xl border border-white bg-white/95 text-blue-600 shadow-lg sm:flex">
          <Cpu className="h-8 w-8" />
        </div>

      </div>

    </div>
  </div>
</section>
      {/* =====================================================
          CONTACT
      ===================================================== */}
      <section id="contact" className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12">

            {/* Informations à gauche */}
            <div className="space-y-6 lg:col-span-5">
              <div>
                <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                  Parlons de{' '}
                  <span className="text-blue-600">votre projet</span>
                </h2>

                <div className="my-3 h-1 w-12 rounded-full bg-blue-600" />

                <p className="mt-4 text-sm leading-relaxed text-slate-600">
                  Un besoin spécifique ? Une idée de projet ?
                  <br />
                  Notre équipe est à votre écoute pour vous proposer la
                  meilleure solution.
                </p>
              </div>

              {/* Téléphone */}
              <a
                href="tel:+212522000000"
                className="flex items-center gap-4 rounded-xl border border-slate-200/80 bg-white p-4 shadow-sm transition-colors hover:border-blue-300"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-600 text-white">
                  <PhoneCall className="h-5 w-5" />
                </div>

                <div>
                  <div className="text-xs font-semibold text-slate-400">
                    Nous contacter par téléphone
                  </div>
                  <div className="text-sm font-bold text-slate-800">
                    +212 522 00 00 00
                  </div>
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:contact@oralisystems.com"
                className="flex items-center gap-4 rounded-xl border border-slate-200/80 bg-white p-4 shadow-sm transition-colors hover:border-blue-300"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-600 text-white">
                  <Mail className="h-5 w-5" />
                </div>

                <div>
                  <div className="text-xs font-semibold text-slate-400">
                    Nous écrire par email
                  </div>
                  <div className="text-sm font-bold text-slate-800">
                    contact@oralisystems.com
                  </div>
                </div>
              </a>

              {/* Démo */}
              <a
                href="mailto:contact@oralisystems.com?subject=Demande%20de%20d%C3%A9monstration"
                className="flex items-center gap-4 rounded-xl border border-slate-200/80 bg-white p-4 shadow-sm transition-colors hover:border-blue-300"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-600 text-white">
                  <Calendar className="h-5 w-5" />
                </div>

                <div>
                  <div className="text-xs font-semibold text-slate-400">
                    Demander une démo gratuite
                  </div>
                  <div className="text-sm font-bold text-slate-800">
                    Présentation en ligne ou sur site
                  </div>
                </div>
              </a>
            </div>

            {/* Bloc complémentaire à droite */}
            <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10 lg:col-span-7">
              <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-blue-100/60 blur-3xl" />

              <div className="relative">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                  <Code2 className="h-7 w-7" />
                </div>

                <h3 className="text-2xl font-bold text-slate-900 sm:text-3xl">
                  Donnons vie à vos idées.
                </h3>

                <p className="mt-4 max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
                  Vous recherchez un logiciel personnalisé, une application
                  web ou une solution de gestion adaptée à votre entreprise ?
                  Présentez-nous votre besoin et construisons ensemble la
                  solution qui vous correspond.
                </p>

                <div className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-slate-100 bg-slate-50 p-4">
                    <Cpu className="mb-3 h-6 w-6 text-blue-600" />
                    <h4 className="font-bold text-slate-900">
                      Développement sur mesure
                    </h4>
                    <p className="mt-1 text-sm leading-relaxed text-slate-500">
                      Des fonctionnalités pensées pour vos besoins.
                    </p>
                  </div>

                  <div className="rounded-xl border border-slate-100 bg-slate-50 p-4">
                    <Headphones className="mb-3 h-6 w-6 text-blue-600" />
                    <h4 className="font-bold text-slate-900">
                      Accompagnement dédié
                    </h4>
                    <p className="mt-1 text-sm leading-relaxed text-slate-500">
                      Une équipe à vos côtés à chaque étape.
                    </p>
                  </div>
                </div>

                <a
                  href="mailto:contact@oralisystems.com?subject=Parlons%20de%20votre%20projet"
                  className="group mt-8 inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition-all hover:-translate-y-0.5 hover:bg-blue-700"
                >
                  Nous contacter
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
