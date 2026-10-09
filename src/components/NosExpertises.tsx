import React from 'react';
import caisseImg from '../assets/caisse.jpg';
import logicielImg from '../assets/logiciel.jpg';
import devImg from '../assets/dev.jpg';

export default function NosExpertises() {
  const expertises = [
    {
      title: 'Solutions Restauration & CHR',
      description:
        'Des solutions complètes pour piloter votre établissement : caisses CSI, bornes de commande, écrans cuisine KDS, ERP et reporting.',
      image: caisseImg,
      iconBg: 'bg-orange-500',
      iconSvg: (
        <svg
          className="h-5 w-5 text-white"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      linkUrl: '#',
    },
    {
      title: 'Solutions Commerce & Retail',
      description:
        "Avec INNOSHOP, accompagnez les commerces et points de vente dans l'encaissement, la gestion des stocks et le suivi de leur activité.",
      image: logicielImg,
      iconBg: 'bg-blue-600',
      iconSvg: (
        <svg
          className="h-5 w-5 text-white"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          />
        </svg>
      ),
      linkUrl: '#',
    },
    {
      title: 'Développement de Logiciels sur Mesure',
      description:
        'Conception et réalisation d’applications métier personnalisées, adaptées aux besoins et aux processus de chaque entreprise.',
      image: devImg,
      iconBg: 'bg-purple-600',
      iconSvg: (
        <svg
          className="h-5 w-5 text-white"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
          />
        </svg>
      ),
      linkUrl: '#',
    },
  ];

  return (
    <section
      id="NosExpertises"
      className="scroll-mt-24 bg-gray-50 px-4 py-16 sm:px-6 lg:py-20"
    >
      {/* En-tête */}
      <div className="mx-auto mb-12 max-w-7xl text-center">
        <span className="inline-flex rounded-full border border-blue-100 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-blue-600 shadow-sm">
          Nos Solutions
        </span>

        <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          Une offre complète pour{' '}
          <span className="bg-gradient-to-r from-sky-500 to-blue-700 bg-clip-text text-transparent">
            vos projets
          </span>
        </h2>

        <div className="mx-auto mt-4 h-1 w-14 rounded-full bg-gradient-to-r from-sky-400 to-blue-600" />
      </div>

      {/* Cartes */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {expertises.map((item) => (
          <article
            key={item.title}
            className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white text-left shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-slate-200/60"
          >
            {/* Ligne cyan/bleue animée */}
            <div className="absolute left-0 top-0 z-30 h-full w-1 origin-top scale-y-0 bg-gradient-to-b from-sky-400 to-blue-600 transition-transform duration-300 group-hover:scale-y-100" />

            {/* Image */}
            <div className="relative h-52 w-full overflow-hidden bg-slate-100">
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Léger dégradé sur l'image */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/20 via-transparent to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-30" />
            </div>

            {/* Contenu */}
            <div className="relative flex flex-1 flex-col px-6 pb-5 pt-9">
              {/* Icône */}
              <div
                className={`absolute -top-6 left-6 flex h-12 w-12 items-center justify-center rounded-full ${item.iconBg} border-2 border-white shadow-lg transition-transform duration-300 group-hover:scale-110`}
              >
                {item.iconSvg}
              </div>

              <h3 className="mb-3 text-xl font-bold leading-snug text-gray-900 transition-colors duration-300 group-hover:text-blue-700">
                {item.title}
              </h3>

              <p className="mb-6 flex-1 text-sm leading-7 text-gray-600">
                {item.description}
              </p>

              {/* Lien */}
              <div className="mt-auto border-t border-slate-100 pt-4">
                <a
                  href={item.linkUrl}
                  className="group/link inline-flex items-center gap-2 text-sm font-semibold text-blue-600 transition-colors duration-300 hover:text-blue-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600"
                >
                  En savoir plus
                  <span className="inline-block transition-transform duration-300 group-hover/link:translate-x-1">
                    →
                  </span>
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
