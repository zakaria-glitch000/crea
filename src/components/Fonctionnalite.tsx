import React from 'react';
import {
  Calculator,
  FileText,
  Box,
  BarChart3,
  Percent,
  ClipboardCheck,
} from 'lucide-react';

export default function FeaturesSection() {
  const features = [
    {
      icon: Calculator,
      title: 'Encaissement simplifié',
      description:
        'Enregistrez vos ventes rapidement avec une interface intuitive.',
    },
    {
      icon: FileText,
      title: 'Gestion des ventes',
      description:
        "Consultez vos tickets, historiques d'encaissement et détails des transactions.",
    },
    {
      icon: Box,
      title: 'Gestion des articles',
      description:
        'Organisez vos produits, familles, prix, menus et tarifs.',
    },
    {
      icon: BarChart3,
      title: 'Statistiques de ventes',
      description:
        'Analysez votre chiffre d’affaires et vos meilleures ventes.',
    },
    {
      icon: Percent,
      title: 'Remises et offres',
      description:
        'Gérez facilement les remises, promotions et programmes de fidélité.',
    },
    {
      icon: ClipboardCheck,
      title: 'Clôture et rapports',
      description:
        'Suivez les résultats de caisse et exportez vos rapports en toute simplicité.',
    },
  ];

  return (
    <section className="relative overflow-hidden bg-slate-50 px-4 py-20 sm:px-6 lg:py-24">
      {/* Décoration de fond */}
      <div className="pointer-events-none absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-100/40 blur-3xl" />

      <div className="relative mx-auto max-w-6xl">
        {/* Header */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="mb-4 inline-flex items-center rounded-full border border-blue-100 bg-white px-4 py-2 text-xs font-bold tracking-[0.18em] text-blue-600 shadow-sm">
            FONCTIONNALITÉS CLÉS
          </span>

          <h2 className="mb-5 text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Des fonctionnalités pensées pour{' '}
            <span className="bg-gradient-to-r from-sky-500 to-blue-700 bg-clip-text text-transparent">
              votre activité
            </span>
          </h2>

          <p className="mx-auto max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
            Encaissez, contrôlez et analysez votre activité avec des outils
            de gestion adaptés aux professionnels du CHR et du Retail.
          </p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <article
                key={feature.title}
                className="group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-6 text-left transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-slate-200/50 sm:p-7"
              >
                {/* Effet vertical bleu/cyan au survol */}
                <div className="absolute left-0 top-0 z-20 h-full w-1 origin-top scale-y-0 bg-gradient-to-b from-sky-400 to-blue-600 transition-transform duration-300 group-hover:scale-y-100" />

                {/* Icône */}
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-100 bg-blue-50 transition-all duration-300 group-hover:border-blue-200 group-hover:bg-blue-600 group-hover:shadow-lg group-hover:shadow-blue-600/20">
                  <Icon className="h-7 w-7 text-blue-600 transition-colors duration-300 group-hover:text-white" />
                </div>

                {/* Contenu */}
                <h3 className="mb-3 text-lg font-bold text-slate-900 transition-colors duration-300 group-hover:text-blue-700">
                  {feature.title}
                </h3>

                <p className="text-sm leading-7 text-slate-500">
                  {feature.description}
                </p>

                {/* Décoration subtile au survol */}
                <div className="pointer-events-none absolute -bottom-10 -right-10 h-28 w-28 rounded-full bg-blue-50 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
