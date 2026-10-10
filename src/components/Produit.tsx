import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck } from 'lucide-react';

import caisseImage from '@/assets/2.jpg';
import borneImage from '@/assets/1.jpg';
import kdsImage from '@/assets/4.jpg';
import terminalImage from '@/assets/3.jpg';
import nfLogo from '@/assets/nf.png';

// Importations dyal les nouveaux produits
import balanceImage from '@/assets/balance.jpg';
import zebraImage from '@/assets/zebra.jpg';
import pdaImage from '@/assets/pda.jpg';
import etiquetteImage from '@/assets/etiquette.jpg';

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
    title: 'Balances professionnelles',
    description: 'Pesage précis et interface tactile intuitive pour commerces.',
    image: balanceImage,
  },
  {
    title: 'Impression balisage Zebra',
    description: 'Imprimantes thermiques robustes pour étiquettes et bracelets.',
    image: zebraImage,
  },
  {
    title: 'PDA / Terminaux portables',
    description: 'Idéal pour la gestion des stocks, inventaires et scan rapide.',
    image: pdaImage,
  },
  {
    title: 'Étiquettes électroniques',
    description: 'Mise à jour dynamique des prix et des informations en rayon.',
    image: etiquetteImage,
  },
];

export default function ProductsSection() {
  return (
    <section
      id="Produit"
      className="scroll-mt-24 relative overflow-hidden bg-white px-4 py-20 sm:px-6 md:py-28"
    >
      {/* Décoration de fond */}
      <div className="pointer-events-none absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-100/40 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        {/* En-tête */}
        <div className="mb-14 text-center">
          <span className="mb-4 inline-flex rounded-full border border-blue-100 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-blue-600 shadow-sm">
            Nos produits
          </span>

          <h2 className="mx-auto mb-5 max-w-3xl text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
            Des équipements et logiciels{' '}
            <span className="bg-gradient-to-r from-sky-500 to-blue-700 bg-clip-text text-transparent">
              performants
            </span>
          </h2>

          <p className="mx-auto max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">
            Découvrez notre sélection de produits pour équiper, connecter et
            optimiser votre activité.
          </p>
        </div>

        {/* Cartes produits - Grid 4 par ligne sur grand écran */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4">
          {products.map((product, index) => (
            <motion.article
              key={product.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-4 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-slate-200/60"
            >
              {/* Ligne cyan/bleue au survol */}
              <div className="absolute left-0 top-0 z-20 h-full w-1 origin-top scale-y-0 bg-gradient-to-b from-sky-400 to-blue-600 transition-transform duration-300 group-hover:scale-y-100" />

              {/* Image sghira w mtouffa */}
              <div className="relative mb-4 flex h-36 items-center justify-center overflow-hidden rounded-xl border border-slate-100 bg-slate-50 p-2">
                <img
                  src={product.image}
                  alt={product.title}
                  loading="lazy"
                  className="h-full w-full object-contain transition-transform duration-500 ease-out group-hover:scale-105"
                />

                {/* Halo discret */}
                <div className="pointer-events-none absolute -bottom-10 -right-10 h-24 w-24 rounded-full bg-blue-100/70 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
              </div>

              {/* Contenu */}
              <div className="flex flex-1 flex-col">
                <h3 className="mb-2 text-sm font-bold leading-5 text-slate-900 transition-colors duration-300 group-hover:text-blue-700">
                  {product.title}
                </h3>

                <p className="flex-1 text-xs leading-5 text-slate-500">
                  {product.description}
                </p>

                <div className="mt-4 h-px w-full bg-slate-100 transition-colors duration-300 group-hover:bg-blue-100" />
              </div>
            </motion.article>
          ))}
        </div>

        {/* Certification NF525 */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6 }}
          className="group/nf relative mt-20 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg shadow-slate-200/40 transition-all duration-300 hover:border-blue-200 hover:shadow-xl hover:shadow-slate-200/60 md:mt-24"
        >
          {/* Ligne décorative */}
          <div className="absolute left-0 top-0 z-20 h-full w-1 origin-top scale-y-0 bg-gradient-to-b from-sky-400 to-blue-600 transition-transform duration-500 group-hover/nf:scale-y-100" />

          {/* Décorations de fond */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-rose-500/[0.06] blur-3xl transition-opacity duration-500 group-hover/nf:bg-rose-500/[0.10]" />

          <div className="pointer-events-none absolute -bottom-24 -left-20 h-64 w-64 rounded-full bg-blue-500/[0.06] blur-3xl" />

          <div className="relative grid grid-cols-1 items-center gap-8 p-6 sm:p-8 lg:grid-cols-[220px_1fr] lg:gap-12 lg:p-12">
            {/* Logo NF525 */}
            <div className="flex justify-center">
              <div className="flex h-40 w-52 items-center justify-center rounded-2xl border border-slate-100 bg-slate-50 p-5 shadow-sm transition-all duration-300 group-hover/nf:scale-[1.03] group-hover/nf:border-blue-100 group-hover/nf:shadow-md">
                <img
                  src={nfLogo}
                  alt="Logo NF525"
                  loading="lazy"
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            </div>

            {/* Texte certification */}
            <div className="space-y-5 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-semibold text-slate-700 transition-colors duration-300 group-hover/nf:border-blue-100 group-hover/nf:bg-blue-50">
                <ShieldCheck className="h-4 w-4 text-blue-600" />
                Certification Officielle
              </div>

              <h3 className="font-display text-2xl font-bold leading-tight tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
                Solution de caisse{' '}
                <span className="bg-gradient-to-r from-sky-500 to-blue-700 bg-clip-text text-transparent">
                  Certifiée NF525
                </span>
              </h3>

              <p className="mx-auto max-w-3xl text-sm leading-7 text-slate-600 sm:text-base lg:mx-0">
                Une caisse simple et intuitive conçue pour répondre aux besoins
                des professionnels. La certification NF525 concerne les
                exigences applicables aux systèmes de caisse en France.
                Vérifiez les justificatifs de certification correspondant
                précisément au logiciel et à la version utilisés.
              </p>

              <div className="flex justify-center pt-1 lg:justify-start">
                <a
                  href="/nf"
                  className="group/link inline-flex items-center gap-2 rounded-xl bg-rose-500 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-rose-600 hover:shadow-lg hover:shadow-rose-500/25 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-500"
                >
                  En savoir plus sur la NF525
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}