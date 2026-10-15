import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { INDUSTRIES, Industry } from '@/data/content';
import {
  Reveal,
  SectionTag,
  staggerContainer,
  fadeUp,
} from './ui/Reveal';

interface IndustriesProps {
  onSelectIndustry?: (industry: Industry, index: number) => void;
}
export function Industries({ onSelectIndustry }: IndustriesProps) {
  const navigate = useNavigate();

  const handleCardClick = (industry: Industry, index: number) => {
    // Garder le comportement existant si onSelectIndustry est fourni
    if (onSelectIndustry) {
      onSelectIndustry(industry, index);
      return;
    }

    // Chaînes et Franchise → Franchise.tsx
    if (
      industry.title
        .trim()
        .toLowerCase()
        .includes('chaînes et franchise')
    ) {
      navigate('/franchise');
      return;
    }

    // Retail Moderne → Innep
    if (
      industry.title.trim().toLowerCase() === 'retail moderne'
    ) {
      navigate('/innep');
      return;
    }

    // Cards 4 et 5 → Innoshop
    if (index === 3 || index === 4) {
      navigate('/innoshop');
      return;
    }

    // Autres cards → Affcsi
    navigate('/Affcsi');
  };

  return (
    <section
      id="Industries"
      className="relative scroll-mt-24 overflow-hidden bg-slate-50 py-8 lg:py-12"
    >
      <div className="pointer-events-none absolute -top-24 right-0 h-80 w-80 rounded-full bg-blue-100/40 blur-3xl" />

      <div className="pointer-events-none absolute -bottom-24 left-0 h-80 w-80 rounded-full bg-sky-100/40 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal className="max-w-2xl">
          <SectionTag>Métier</SectionTag>

          <h2 className="mt-4 text-balance font-display text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Des solutions adaptées à{' '}
            <span className="bg-gradient-to-r from-sky-500 to-blue-700 bg-clip-text text-transparent">
              chaque métier.
            </span>
          </h2>

          <p className="mt-4 text-base leading-7 text-slate-500 sm:text-lg">
            Nous comprenons les enjeux spécifiques de votre métier et adaptons
            nos technologies à votre réalité terrain.
          </p>
        </Reveal>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {INDUSTRIES.map((industry, index) => (
            <motion.article
              key={industry.title}
              variants={fadeUp}
              onClick={() => handleCardClick(industry, index)}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  event.preventDefault();
                  handleCardClick(industry, index);
                }
              }}
              role="link"
              tabIndex={0}
              aria-label={`Découvrir ${industry.title}`}
              className="group relative cursor-pointer overflow-hidden rounded-2xl border border-slate-200/80 bg-white transition-all duration-300 hover:-translate-y-1.5 hover:border-blue-300 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <div className="absolute left-0 top-0 z-30 h-full w-1 origin-top scale-y-0 bg-gradient-to-b from-sky-400 to-blue-600 transition-transform duration-300 group-hover:scale-y-100" />

              <div className="relative h-48 overflow-hidden bg-slate-100">
                <img
                  src={industry.image}
                  alt={industry.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 via-transparent to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-40" />

                <div className="absolute bottom-4 left-5 flex h-10 w-10 items-center justify-center rounded-xl border border-white/70 bg-white/95 shadow-lg backdrop-blur-sm transition-all duration-300 group-hover:scale-110 group-hover:border-blue-200 group-hover:bg-blue-50">
                  <industry.icon className="h-5 w-5 text-slate-500 transition-colors duration-300 group-hover:text-blue-600" />
                </div>
              </div>

              <div className="relative p-6">
                <h3 className="font-display text-xl font-semibold text-slate-900 transition-colors duration-300 group-hover:text-blue-700">
                  {industry.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  {industry.description}
                </p>

                <div className="mt-3 flex items-center gap-2 text-xs font-bold text-blue-600 opacity-90 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">
                  <span>En savoir plus</span>
                  <span className="text-sm">→</span>
                </div>

                <div className="mt-3 h-px w-full origin-left scale-x-0 bg-gradient-to-r from-sky-400 to-blue-600 transition-transform duration-500 group-hover:scale-x-100" />
              </div>

              <div className="pointer-events-none absolute -bottom-12 -right-12 h-32 w-32 rounded-full bg-blue-100/60 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}