
import React from 'react';
import {
  Tv,
  ShieldCheck,
  Gauge,
  Layers,
  Maximize,
  Wrench,
  Utensils,
  LayoutGrid,
  Soup,
  Tag,
  Users,
  BarChart3,
  Printer,
  Share2,
  Settings,
  Store,
  Headphones,
  ChevronRight,
} from 'lucide-react';
import { Link } from 'react-router-dom';

import pcImage from '@/assets/pc.jpeg';
import caisseImage from '@/assets/00.png';

export default function OraliPage() {
  return (
    <div className="w-full min-h-screen bg-white text-slate-800 font-sans pt-24 overflow-hidden">
      <div className="w-full mx-auto bg-white overflow-hidden">

        {/* HERO AVEC IMAGE FLOUE */}
        <section className="relative isolate min-h-[340px] md:min-h-[440px] flex items-center overflow-hidden bg-slate-950">
          <div
            className="absolute inset-0 scale-105 bg-cover bg-center blur-[3px]"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1800&q=85')",
            }}
          />

          <div className="absolute inset-0 bg-slate-950/60" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-900/50 to-transparent" />

          <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-16 md:py-24">
            <span className="inline-block text-xs md:text-sm font-extrabold uppercase tracking-[0.2em] text-orange-400 mb-4">
              Caisses enregistreuses CSI
            </span>

            <h1 className="text-3xl sm:text-4xl md:text-6xl font-black text-white leading-tight tracking-tight mb-5">
              Deux modèles,
              <br />
              la même performance
            </h1>

            <p className="text-sm md:text-base text-slate-100 leading-relaxed max-w-2xl">
              Des terminaux tactiles fiables et modernes, avec toutes les
              fonctionnalités de notre solution d'encaissement CSI.
              Choisissez le format qui correspond le mieux à votre espace.
            </p>

            <Link
              to="/#contact"
              className="mt-7 inline-flex items-center justify-center gap-2 rounded-full bg-orange-500 hover:bg-orange-600 px-6 py-3 text-sm font-bold text-white shadow-lg transition-colors"
            >
              Demander une démo
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

        {/* CONTENU PRINCIPAL */}
        <main className="w-full max-w-7xl mx-auto px-5 py-12 md:px-10 lg:px-16 md:py-16 space-y-16">

          {/* PRÉSENTATION DES PRODUITS */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">

            {/* CSI TF-15 */}
            <article className="bg-slate-50/70 rounded-2xl p-5 md:p-7 border border-slate-200 flex flex-col justify-between hover:shadow-lg transition-shadow">
              <div>
                <div className="h-64 md:h-72 flex items-center justify-center bg-white rounded-xl border border-slate-100 mb-6 p-5">
                  <img
                    src={caisseImage}
                    alt="Caisse enregistreuse CSI TF-15"
                    className="max-h-full max-w-full object-contain"
                  />
                </div>

                <h2 className="text-2xl md:text-3xl font-black text-slate-900">
                  CSI TF-15
                </h2>

                <p className="text-xs font-bold text-orange-600 uppercase tracking-wider mt-2 mb-3">
                  La performance au quotidien
                </p>

                <p className="text-sm text-slate-600 leading-relaxed mb-7">
                  Un terminal tactile fiable et robuste, idéal pour les
                  restaurants, cafés, bars et commerces de proximité.
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-slate-200 pt-5 text-center">
                <div className="flex flex-col items-center">
                  <div className="w-11 h-11 rounded-full bg-orange-500 text-white flex items-center justify-center mb-2">
                    <Tv className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-semibold text-slate-700">
                    Écran tactile 15"
                  </span>
                </div>

                <div className="flex flex-col items-center">
                  <div className="w-11 h-11 rounded-full bg-orange-500 text-white flex items-center justify-center mb-2">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-semibold text-slate-700">
                    Robuste et fiable
                  </span>
                </div>

                <div className="flex flex-col items-center">
                  <div className="w-11 h-11 rounded-full bg-orange-500 text-white flex items-center justify-center mb-2">
                    <Gauge className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-semibold text-slate-700">
                    Usage intensif
                  </span>
                </div>

                <div className="flex flex-col items-center">
                  <div className="w-11 h-11 rounded-full bg-orange-500 text-white flex items-center justify-center mb-2">
                    <Layers className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-semibold text-slate-700">
                    Compatible périphériques
                  </span>
                </div>
              </div>
            </article>

            {/* CSI MINI */}
            <article className="bg-slate-50/70 rounded-2xl p-5 md:p-7 border border-slate-200 flex flex-col justify-between hover:shadow-lg transition-shadow">
              <div>
                <div className="h-64 md:h-72 flex items-center justify-center bg-white rounded-xl border border-slate-100 mb-6 p-5">
                  <img
                    src={pcImage}
                    alt="Caisse enregistreuse CSI MINI"
                    className="max-h-full max-w-full object-contain"
                  />
                </div>

                <h2 className="text-2xl md:text-3xl font-black text-slate-900">
                  CSI MINI
                </h2>

                <p className="text-xs font-bold text-orange-600 uppercase tracking-wider mt-2 mb-3">
                  Compacte et efficace
                </p>

                <p className="text-sm text-slate-600 leading-relaxed mb-7">
                  Une caisse tactile tout-en-un, parfaite pour les petits
                  espaces et les activités à taille humaine.
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-slate-200 pt-5 text-center">
                <div className="flex flex-col items-center">
                  <div className="w-11 h-11 rounded-full bg-orange-500 text-white flex items-center justify-center mb-2">
                    <Tv className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-semibold text-slate-700">
                    Écran tactile 12"
                  </span>
                </div>

                <div className="flex flex-col items-center">
                  <div className="w-11 h-11 rounded-full bg-orange-500 text-white flex items-center justify-center mb-2">
                    <Maximize className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-semibold text-slate-700">
                    Design compact
                  </span>
                </div>

                <div className="flex flex-col items-center">
                  <div className="w-11 h-11 rounded-full bg-orange-500 text-white flex items-center justify-center mb-2">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-semibold text-slate-700">
                    Robuste et fiable
                  </span>
                </div>

                <div className="flex flex-col items-center">
                  <div className="w-11 h-11 rounded-full bg-orange-500 text-white flex items-center justify-center mb-2">
                    <Wrench className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-semibold text-slate-700">
                    Installation rapide
                  </span>
                </div>
              </div>
            </article>
          </section>

          {/* FONCTIONNALITÉS */}
          <section className="bg-orange-50/60 rounded-3xl p-6 md:p-10 space-y-8">
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <p className="text-xs font-extrabold text-orange-600 uppercase tracking-widest">
                Les fonctionnalités de la caisse CSI
              </p>

              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900">
                Une solution complète, identique sur les deux modèles
              </h2>

              <p className="text-sm text-slate-600 leading-relaxed">
                Quel que soit le modèle choisi, vous bénéficiez des mêmes
                fonctionnalités avancées pour gérer votre activité.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">

              <Feature
                icon={<Utensils className="w-5 h-5" />}
                title="Gestion des ventes"
                description="Encaissement rapide et intuitif, en salle, au bar ou en magasin."
                color="orange"
              />

              <Feature
                icon={<LayoutGrid className="w-5 h-5" />}
                title="Gestion des tables et plans de salle"
                description="Organisation simple du service et suivi en temps réel."
                color="blue"
              />

              <Feature
                icon={<Soup className="w-5 h-5" />}
                title="Menus et formules"
                description="Gestion des menus, formules, options et suppléments."
                color="rose"
              />

              <Feature
                icon={<Tag className="w-5 h-5" />}
                title="Promotions et offres"
                description="Création de promotions, remises et prix spéciaux."
                color="emerald"
              />

              <Feature
                icon={<Users className="w-5 h-5" />}
                title="Gestion des clients"
                description="Fidélisation et suivi de la clientèle."
                color="purple"
              />

              <Feature
                icon={<BarChart3 className="w-5 h-5" />}
                title="Rapports et statistiques"
                description="Suivi du chiffre d'affaires, annulations, retours, pertes et offres."
                color="amber"
              />

              <Feature
                icon={<Printer className="w-5 h-5" />}
                title="Impression et cuisine"
                description="Impression des tickets, commandes cuisine et bons de préparation."
                color="indigo"
              />

              <Feature
                icon={<Share2 className="w-5 h-5" />}
                title="Multi-postes et périphériques"
                description="Connexion des imprimantes, tiroirs-caisses, écrans cuisine KDS et PDA."
                color="teal"
              />

              <Feature
                icon={<Settings className="w-5 h-5" />}
                title="Paramétrage simple"
                description="Interface claire et personnalisable selon votre activité."
                color="red"
              />

              <Feature
                icon={<Store className="w-5 h-5" />}
                title="Adaptée à plusieurs secteurs"
                description="Restauration, cafés, bars, commerces de proximité et retail."
                color="sky"
              />

            </div>
          </section>

          {/* ACCOMPAGNEMENT */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <SupportItem
              icon={<ShieldCheck className="w-5 h-5" />}
              title="Une solution fiable"
              description="Conçue pour un usage professionnel et intensif."
            />

            <SupportItem
              icon={<Wrench className="w-5 h-5" />}
              title="Un matériel polyvalent"
              description="Compatible avec les équipements de votre installation."
            />

            <SupportItem
              icon={<Headphones className="w-5 h-5" />}
              title="Un accompagnement sur mesure"
              description="Notre équipe vous conseille et vous accompagne à chaque étape."
            />
          </section>

          {/* CTA FINAL */}
          <section className="relative overflow-hidden rounded-3xl bg-slate-950 px-6 py-10 md:px-12 md:py-14">
            <div className="absolute -right-16 -top-20 w-64 h-64 rounded-full bg-orange-500/20 blur-3xl" />
            <div className="absolute -left-16 -bottom-20 w-64 h-64 rounded-full bg-blue-500/10 blur-3xl" />

            <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="max-w-2xl">
                <p className="text-xs font-extrabold uppercase tracking-widest text-orange-400 mb-3">
                  Votre projet d'encaissement
                </p>

                <h2 className="text-2xl md:text-3xl font-black text-white mb-3">
                  Trouvons la caisse adaptée à votre activité
                </h2>

                <p className="text-sm text-slate-300 leading-relaxed">
                  Contactez notre équipe pour bénéficier de conseils,
                  découvrir nos solutions et organiser une démonstration.
                </p>
              </div>

              <Link
                to="/#contact"
                className="shrink-0 inline-flex items-center justify-center gap-2 rounded-full bg-orange-500 hover:bg-orange-600 px-6 py-3 text-sm font-bold text-white transition-colors"
              >
                Demander une démo
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </section>

        </main>
      </div>
    </div>
  );
}

type FeatureProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
};

function Feature({ icon, title, description, color }: FeatureProps) {
  const colorClasses: Record<string, string> = {
    orange: 'bg-orange-100 text-orange-600 border-orange-100',
    blue: 'bg-blue-100 text-blue-600 border-blue-100',
    rose: 'bg-rose-100 text-rose-600 border-rose-100',
    emerald: 'bg-emerald-100 text-emerald-600 border-emerald-100',
    purple: 'bg-purple-100 text-purple-600 border-purple-100',
    amber: 'bg-amber-100 text-amber-600 border-amber-100',
    indigo: 'bg-indigo-100 text-indigo-600 border-indigo-100',
    teal: 'bg-teal-100 text-teal-600 border-teal-100',
    red: 'bg-red-100 text-red-600 border-red-100',
    sky: 'bg-sky-100 text-sky-600 border-sky-100',
  };

  return (
    <article className="bg-white p-5 rounded-2xl shadow-sm text-center border border-slate-100 flex flex-col items-center hover:-translate-y-1 hover:shadow-md transition-all">
      <div
        className={`w-11 h-11 rounded-full flex items-center justify-center mb-3 ${
          colorClasses[color] ?? colorClasses.orange
        }`}
      >
        {icon}
      </div>

      <h3 className="text-sm font-bold text-slate-900">{title}</h3>

      <p className="text-xs text-slate-500 leading-relaxed mt-2">
        {description}
      </p>
    </article>
  );
}

type SupportItemProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

function SupportItem({ icon, title, description }: SupportItemProps) {
  return (
    <article className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 hover:shadow-md transition-shadow">
      <div className="w-11 h-11 rounded-full border border-orange-200 text-orange-500 flex items-center justify-center shrink-0">
        {icon}
      </div>

      <div>
        <h3 className="text-sm font-bold text-slate-900">{title}</h3>
        <p className="text-xs text-slate-500 leading-relaxed mt-1">
          {description}
        </p>
      </div>
    </article>
  );
}
