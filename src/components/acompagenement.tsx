import React from 'react';
import { motion } from 'framer-motion';
import { 
  Handshake, 
  Settings, 
  Users, 
  Wrench, 
  RefreshCw 
} from 'lucide-react';

import accompagnementHero from '@/assets/accompagnement.jpg';
import conseilImg from '@/assets/1.jpg'; // Badel les images 3la hsab l-dossier dyalk
import installationImg from '@/assets/2.jpg';
import formationImg from '@/assets/3.jpg';
import supportImg from '@/assets/4.jpg';
import suiviImg from '@/assets/1.jpg';

const steps = [
  {
    icon: Handshake,
    title: 'Conseil & Étude',
    description: 'Analyse de vos besoins et recommandation de la solution adaptée.',
    image: conseilImg,
  },
  {
    icon: Settings,
    title: 'Installation',
    description: 'Mise en place du matériel et configuration de votre solution.',
    image: installationImg,
  },
  {
    icon: Users,
    title: 'Formation',
    description: 'Accompagnement de vos équipes pour une utilisation rapide et efficace.',
    image: formationImg,
  },
  {
    icon: Wrench,
    title: 'Support Technique',
    description: 'Assistance rapide en cas de besoin.',
    image: supportImg,
  },
  {
    icon: RefreshCw,
    title: 'Suivi & Évolution',
    description: 'Un suivi régulier pour garantir la continuité de votre activité.',
    image: suiviImg,
  },
];

export function AccompagnementPage() {
  return (
    <section id="accompagnement" className="relative overflow-hidden bg-white pb-24">
      
      {/* HERO SECTION AVEC IMAGE EN FOND ET EFFET DABAB (GRADIENT BLANC) */}
      <div className="relative overflow-hidden bg-white">
        
        {/* Contenu Texte à gauche par-dessus l'image sur grand écran */}
        <div className="relative z-10 lg:absolute lg:inset-0 lg:flex lg:items-center">
          <div className="mx-auto w-full max-w-7xl px-6 py-16 lg:px-8 lg:py-0">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-xl"
            >
              {/* Ligne orange décorative */}
              <div className="mb-4 h-1 w-12 rounded-full bg-orange-500" />

              <h1 className="font-display text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                Accompagnement
              </h1>

              <p className="mt-2 text-lg font-bold uppercase tracking-wider text-orange-600 sm:text-xl">
                À vos côtés à chaque étape
              </p>

              <p className="mt-4 text-base leading-relaxed text-slate-700 sm:text-lg">
                Nous vous accompagnons avant, pendant et après l'installation pour garantir la performance et la continuité de votre activité.
              </p>
            </motion.div>
          </div>
        </div>

        {/* L'image principale en arrière-plan */}
        <div className="relative w-full">
          <img
            src={accompagnementHero}
            alt="Équipe en accompagnement"
            className="block h-[400px] w-full object-cover lg:h-[550px]"
          />

          {/* Dégradé / Dabab byad (Gradient overlay) */}
          <div 
            className="pointer-events-none absolute inset-0 hidden lg:block"
            style={{
              background: 'linear-gradient(to right, rgba(255,255,255,0.98) 0%, rgba(255,255,255,0.85) 35%, rgba(255,255,255,0) 65%)',
            }}
          />
          {/* Dégradé pour les petits écrans (Mobile) */}
          <div className="absolute inset-0 bg-white/9 മുഖ്യമന്ത്രി backdrop-blur-[2px] lg:hidden" />
        </div>
      </div>

      {/* SECTION DES 5 ÉTAPES EN DESSOUS */}
      <div className="relative z-20 mx-auto max-w-7xl px-6 pt-16 lg:px-8">
        
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col rounded-2xl border border-slate-200/80 bg-white p-6 shadow-lg shadow-slate-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                {/* Icône ronde avec couleur orange/bleu */}
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-orange-100 bg-orange-50/50 text-orange-600 shadow-sm">
                  <Icon className="h-7 w-7" />
                </div>

                {/* Titre et description */}
                <h3 className="mb-2 text-lg font-bold text-slate-900">
                  {step.title}
                </h3>
                <p className="mb-6 flex-1 text-xs leading-relaxed text-slate-600 sm:text-sm">
                  {step.description}
                </p>

                {/* Image miniature en bas de la carte */}
                <div className="overflow-hidden rounded-xl border border-slate-100 bg-slate-50">
                  <img
                    src={step.image}
                    alt={step.title}
                    loading="lazy"
                    className="h-28 w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>

    </section>
  );
}