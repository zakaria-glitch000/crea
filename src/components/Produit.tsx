import React from 'react';

import caisseImage from '@/assets/2.jpg';
import borneImage from '@/assets/1.jpg';
import kdsImage from '@/assets/4.jpg';
import terminalImage from '@/assets/3.jpg';

const products = [
  {
    title: 'Caisses enregistreuses',
    description: 'Des équipements fiables et performants.',
    image: caisseImage,
  },
  {
    title: 'Bornes de commande',
    description: 'Des bornes interactives pour simplifier le parcours client.',
    image: borneImage,
  },
  {
    title: 'Écrans cuisine KDS',
    description: 'Organisez et suivez la préparation des commandes.',
    image: kdsImage,
  },
  {
    title: 'Terminaux mobiles',
    description: 'Prenez les commandes directement à table.',
    image: terminalImage,
  },
  {
    title: 'Logiciels (CSI, INNOSHOP, ERP)',
    description: 'Gérez, analysez et pilotez votre activité.',
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=400&auto=format&fit=crop',
  },
];

export default function ProductsSection() {
  return (
    <section id="Produit" className="bg-white px-4 py-20 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 text-center">
          <span className="mb-4 block text-xs font-bold uppercase tracking-[0.25em] text-blue-600">
            Nos produits
          </span>

          <h2 className="mx-auto mb-5 max-w-3xl text-3xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
            Des équipements et logiciels performants
          </h2>

          <p className="mx-auto max-w-2xl text-sm leading-7 text-slate-500 md:text-base">
            Découvrez notre sélection de produits pour équiper, connecter et
            optimiser votre activité.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {products.map((product) => (
            <article
              key={product.title}
              className="group rounded-2xl border border-slate-200/80 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-slate-200/50"
            >
              <div className="mb-6 flex h-44 items-center justify-center overflow-hidden rounded-xl bg-slate-50 p-3">
                <img
                  src={product.image}
                  alt={product.title}
                  loading="lazy"
                  className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <h3 className="mb-3 text-base font-bold leading-6 text-slate-900">
                {product.title}
              </h3>

              <p className="text-sm leading-6 text-slate-500">
                {product.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}