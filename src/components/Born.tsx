import React, { useState } from 'react';
import { 
  Monitor, 
  Settings, 
  ShieldCheck, 
  CheckCircle, 
  Smartphone, 
  Utensils, 
  ChefHat, 
  Receipt, 
  TrendingUp, 
  Users, 
  Clock, 
  BarChart2, 
  Coins, 
  Wrench, 
  GraduationCap, 
  Headphones, 
  Cog, 
  ArrowRight,
  X,
  Phone,
  Mail,
  Building,
  User,
  Check,
  Minimize2,
  Sliders,
  Tv
} from 'lucide-react';

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState('devis');
  const [selectedProduct, setSelectedProduct] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleOpenModal = (type, product = '') => {
    setModalType(type);
    setSelectedProduct(product);
    setModalOpen(true);
    setFormSubmitted(false);
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setModalOpen(false);
      setFormSubmitted(false);
    }, 2200);
  };

 return (
  <div className="w-full min-h-screen bg-[#FDFBF9] text-[#1E293B] font-sans antialiased selection:bg-[#EF5623] selection:text-white pt-24">
      {/* Google Fonts link insertion */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Caveat:wght@600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />

  <style>{`
  body {
    font-family: 'Plus Jakarta Sans', sans-serif;
  }

  .font-cursive {
    font-family: 'Caveat', cursive;
  }
`}</style>

      {/* Container simulating flyer / crisp landing page */}
<div className="w-full min-h-screen bg-white overflow-hidden">
        {}
        <section className="relative px-6 sm:px-12 pt-8 pb-10 bg-gradient-to-b from-amber-50/40 via-white to-white overflow-hidden">
          {/* Top Right Restaurant Background Accent */}
          <div className="absolute top-0 right-0 w-full sm:w-2/3 h-72 opacity-25 pointer-events-none bg-[url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80')] bg-cover bg-left-bottom [mask-image:linear-gradient(to_bottom,black_40%,transparent_100%)]" />

          {/* Top Logo Bar */}
          <div className="flex items-center justify-between relative z-10 mb-8">
            <div className="flex items-center gap-3">
              
            </div>

            {/* Orange Cursive Accent Text top right */}
            <div className="hidden sm:block text-right">
              <span className="font-cursive text-3xl sm:text-4xl text-[#EF5623] font-bold tracking-wide transform -rotate-3 inline-block drop-shadow-sm">
                Une expérience<br />plus fluide
              </span>
            </div>
          </div>

          {/* Hero Main Copy */}
          <div className="max-w-2xl relative z-10 pt-2">
            <span className="text-xs sm:text-sm font-extrabold text-[#EF5623] tracking-widest uppercase mb-2 block">
              BORNES DE COMMANDE
            </span>

            <h1 className="text-2xl sm:text-4xl font-extrabold text-[#0B1A3A] tracking-tight leading-[1.15] mb-4">
              Simplifiez la prise de commande,<br />
              améliorez l'expérience client
            </h1>

            <p className="text-xs sm:text-sm text-[#475569] font-medium leading-relaxed max-w-xl">
              Des bornes interactives modernes et intuitives, parfaitement intégrées à notre solution d'encaissement CSI pour une gestion fluide et performante de votre établissement.
            </p>
          </div>
        </section>

        {}
        <section className="px-4 sm:px-10 pb-12 pt-2">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            
            {/* CARD 1: BORNE STANDARD */}
            <div className="bg-[#FAF9F6] rounded-2xl p-5 border border-slate-200/80 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow">
              <div>
                {/* Visual Representation of Kiosk */}
                <div className="w-full h-52 bg-white rounded-xl mb-4 flex items-center justify-center p-3 border border-slate-100 shadow-inner relative overflow-hidden">
                  {/* Standing Kiosk Graphics */}
                  <div className="flex flex-col items-center">
                    {/* Screen Head */}
                    <div className="w-20 h-32 bg-[#1E293B] rounded-t-lg rounded-b-md p-1 shadow-md border border-slate-600 relative flex flex-col items-center">
                      <div className="w-full h-20 bg-white rounded-xs p-1 flex flex-col gap-0.5 overflow-hidden">
                        <div className="w-full h-2 bg-[#EF5623] rounded-xs" />
                        <div className="grid grid-cols-2 gap-0.5 flex-1">
                          <div className="bg-slate-100 rounded-xs flex items-center justify-center text-[5px]">🍔</div>
                          <div className="bg-slate-100 rounded-xs flex items-center justify-center text-[5px]">🍟</div>
                          <div className="bg-slate-100 rounded-xs flex items-center justify-center text-[5px]">🥤</div>
                          <div className="bg-slate-100 rounded-xs flex items-center justify-center text-[5px]">🍦</div>
                        </div>
                      </div>
                      <div className="w-full h-3 bg-slate-200 mt-1 rounded-xs flex items-center px-1 justify-between">
                        <div className="w-2 h-0.5 bg-slate-400" />
                        <div className="w-1 h-1 rounded-full bg-emerald-500" />
                      </div>
                      {/* Attached payment terminal */}
                      <div className="absolute -right-3 top-14 w-4 h-7 bg-black rounded-xs border border-slate-500 flex flex-col items-center justify-center">
                        <div className="w-2.5 h-1.5 bg-blue-400/40 rounded-xs mb-0.5" />
                        <div className="w-2 h-2 bg-slate-800 rounded-xs" />
                      </div>
                    </div>
                    {/* Stand pole */}
                    <div className="w-4 h-12 bg-[#0F172A]" />
                    {/* Base */}
                    <div className="w-16 h-2 bg-[#0F172A] rounded-full shadow-sm" />
                  </div>
                </div>

                <div className="mb-4">
                  <h3 className="text-lg font-black text-[#0B1A3A] tracking-tight uppercase">BORNE STANDARD</h3>
                  <p className="text-xs font-semibold text-[#64748B] mt-0.5">L'essentiel pour commencer</p>
                </div>

                <ul className="space-y-2.5 text-xs text-[#334155] font-medium mb-6">
                  <li className="flex items-center gap-2.5">
                    <Monitor className="w-4 h-4 text-[#EF5623] shrink-0" />
                    <span>Écran tactile <strong>21,5"</strong></span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Sliders className="w-4 h-4 text-[#EF5623] shrink-0" />
                    <span>Design épuré et compact</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <ShieldCheck className="w-4 h-4 text-[#EF5623] shrink-0" />
                    <span>Paiement intégré (option)</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle className="w-4 h-4 text-[#EF5623] shrink-0" />
                    <span>Installation simple et rapide</span>
                  </li>
                </ul>
              </div>

              <button 
                onClick={() => handleOpenModal('devis', 'Borne Standard')}
                className="w-full py-2.5 px-4 rounded-full bg-[#EF5623] hover:bg-[#d94817] text-white font-bold text-xs shadow-sm hover:shadow transition-all flex items-center justify-center gap-1.5 group"
              >
                <span>Demander un devis</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
              </button>
            </div>

            {/* CARD 2: BORNE PREMIUM */}
            <div className="bg-[#FAF9F6] rounded-2xl p-5 border border-slate-200/80 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow">
              <div>
                {/* Visual Representation of Premium Kiosk */}
                <div className="w-full h-52 bg-white rounded-xl mb-4 flex items-center justify-center p-3 border border-slate-100 shadow-inner relative overflow-hidden">
                  <div className="flex flex-col items-center">
                    {/* Screen Head - Taller 27" */}
                    <div className="w-22 h-36 bg-[#0F172A] rounded-t-lg rounded-b-md p-1 shadow-md border-2 border-slate-700 relative flex flex-col items-center">
                      <div className="w-full h-24 bg-white rounded-xs p-1 flex flex-col gap-0.5 overflow-hidden">
                        <div className="w-full h-2.5 bg-[#EF5623] rounded-xs flex items-center px-0.5 justify-between">
                          <span className="text-[4px] text-white font-bold">27"</span>
                        </div>
                        <div className="w-full h-6 bg-amber-50 rounded-xs p-0.5 flex gap-1 items-center">
                          <div className="w-4 h-4 bg-[#EF5623] rounded-xs" />
                          <div className="w-8 h-1 bg-slate-300 rounded-xs" />
                        </div>
                        <div className="grid grid-cols-3 gap-0.5 flex-1">
                          <div className="bg-slate-100 rounded-xs flex items-center justify-center text-[5px]">🥗</div>
                          <div className="bg-slate-100 rounded-xs flex items-center justify-center text-[5px]">🍕</div>
                          <div className="bg-slate-100 rounded-xs flex items-center justify-center text-[5px]">🍰</div>
                        </div>
                      </div>
                      <div className="w-full h-3 bg-slate-300 mt-1 rounded-xs" />
                      {/* Terminal */}
                      <div className="absolute -right-3 top-16 w-4 h-7 bg-black rounded-xs border border-slate-500 flex flex-col items-center justify-center">
                        <div className="w-2.5 h-1.5 bg-emerald-400/50 rounded-xs mb-0.5" />
                        <div className="w-2 h-2 bg-slate-800 rounded-xs" />
                      </div>
                    </div>
                    {/* Stand pole */}
                    <div className="w-4.5 h-8 bg-[#0F172A]" />
                    {/* Base */}
                    <div className="w-18 h-2 bg-[#0F172A] rounded-full shadow-sm" />
                  </div>
                </div>

                <div className="mb-4">
                  <h3 className="text-lg font-black text-[#0B1A3A] tracking-tight uppercase">BORNE PREMIUM</h3>
                  <p className="text-xs font-semibold text-[#64748B] mt-0.5">Performance et élégance</p>
                </div>

                <ul className="space-y-2.5 text-xs text-[#334155] font-medium mb-6">
                  <li className="flex items-center gap-2.5">
                    <Monitor className="w-4 h-4 text-[#EF5623] shrink-0" />
                    <span>Écran tactile <strong>27"</strong></span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Sliders className="w-4 h-4 text-[#EF5623] shrink-0" />
                    <span>Design moderne en aluminium</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <ShieldCheck className="w-4 h-4 text-[#EF5623] shrink-0" />
                    <span>Paiement intégré (lecteur CB)</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle className="w-4 h-4 text-[#EF5623] shrink-0" />
                    <span>Idéale pour les restaurants et espaces à fort trafic</span>
                  </li>
                </ul>
              </div>

              <button 
                onClick={() => handleOpenModal('devis', 'Borne Premium')}
                className="w-full py-2.5 px-4 rounded-full bg-[#EF5623] hover:bg-[#d94817] text-white font-bold text-xs shadow-sm hover:shadow transition-all flex items-center justify-center gap-1.5 group"
              >
                <span>Demander un devis</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
              </button>
            </div>

            {/* CARD 3: BORNE MURALE */}
            <div className="bg-[#FAF9F6] rounded-2xl p-5 border border-slate-200/80 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow">
              <div>
                {/* Visual Representation of Wall Mounted Kiosk */}
                <div className="w-full h-52 bg-white rounded-xl mb-4 flex items-center justify-center p-3 border border-slate-100 shadow-inner relative overflow-hidden">
                  <div className="flex flex-col items-center">
                    {/* Wall Backing Panel */}
                    <div className="w-28 h-40 bg-slate-100 rounded-2xl p-2 border border-slate-200 flex flex-col items-center justify-center shadow-xs">
                      {/* Screen Mounted */}
                      <div className="w-20 h-32 bg-[#0F172A] rounded-lg p-1 shadow-md border border-slate-700 relative flex flex-col items-center">
                        <div className="w-full h-22 bg-white rounded-xs p-1 flex flex-col gap-0.5 overflow-hidden">
                          <div className="w-full h-2 bg-[#EF5623] rounded-xs" />
                          <div className="grid grid-cols-2 gap-0.5 flex-1">
                            <div className="bg-slate-100 rounded-xs" />
                            <div className="bg-slate-100 rounded-xs" />
                          </div>
                        </div>
                        {/* Integrated Terminal */}
                        <div className="absolute -right-2 top-14 w-3.5 h-6 bg-black rounded-xs flex flex-col items-center justify-center">
                          <div className="w-2 h-1 bg-emerald-400 rounded-xs" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <h3 className="text-lg font-black text-[#0B1A3A] tracking-tight uppercase">BORNE MURALE</h3>
                  <p className="text-xs font-semibold text-[#64748B] mt-0.5">Une solution gain de place</p>
                </div>

                <ul className="space-y-2.5 text-xs text-[#334155] font-medium mb-6">
                  <li className="flex items-center gap-2.5">
                    <Monitor className="w-4 h-4 text-[#EF5623] shrink-0" />
                    <span>Écran tactile <strong>21,5"</strong></span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Minimize2 className="w-4 h-4 text-[#EF5623] shrink-0" />
                    <span>Fixation murale</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <ShieldCheck className="w-4 h-4 text-[#EF5623] shrink-0" />
                    <span>Design compact et robuste</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle className="w-4 h-4 text-[#EF5623] shrink-0" />
                    <span>Parfaite pour les espaces restreints</span>
                  </li>
                </ul>
              </div>

              <button 
                onClick={() => handleOpenModal('devis', 'Borne Murale')}
                className="w-full py-2.5 px-4 rounded-full bg-[#EF5623] hover:bg-[#d94817] text-white font-bold text-xs shadow-sm hover:shadow transition-all flex items-center justify-center gap-1.5 group"
              >
                <span>Demander un devis</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
              </button>
            </div>

          </div>
        </section>

        {}
        <section className="px-6 sm:px-10 py-10 bg-[#FAF9F6] border-y border-slate-200/70">
          <div className="text-center max-w-2xl mx-auto mb-8 space-y-1">
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#EF5623]">
              LES FONCTIONNALITÉS COMMUNES
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1A3A] tracking-tight">
              Une seule solution, les mêmes avantages
            </h2>
            <p className="text-xs sm:text-sm text-[#64748B]">
              Quel que soit le modèle, nos bornes de commande offrent les mêmes fonctionnalités avancées.
            </p>
          </div>

          {/* 5 Circular Feature Icons Section */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 text-center">
            
            {/* Feature 1 */}
            <div className="flex flex-col items-center">
              <div className="w-14 h-14 rounded-full bg-[#EF5623] text-white flex items-center justify-center shadow-md mb-3">
                <Smartphone className="w-7 h-7" />
              </div>
              <h3 className="font-extrabold text-xs sm:text-sm text-[#0B1A3A] mb-1">Commande autonome</h3>
              <p className="text-[11px] text-[#64748B] leading-snug">Un parcours client simple et intuitif.</p>
            </div>

            {/* Feature 2 */}
            <div className="flex flex-col items-center">
              <div className="w-14 h-14 rounded-full bg-[#38BDF8] text-white flex items-center justify-center shadow-md mb-3">
                <Utensils className="w-7 h-7" />
              </div>
              <h3 className="font-extrabold text-xs sm:text-sm text-[#0B1A3A] mb-1">Menus personnalisables</h3>
              <p className="text-[11px] text-[#64748B] leading-snug">Options, suppléments et formules selon votre activité.</p>
            </div>

            {/* Feature 3 */}
            <div className="flex flex-col items-center">
              <div className="w-14 h-14 rounded-full bg-[#34D399] text-white flex items-center justify-center shadow-md mb-3">
                <ChefHat className="w-7 h-7" />
              </div>
              <h3 className="font-extrabold text-xs sm:text-sm text-[#0B1A3A] mb-1">Transmission en cuisine</h3>
              <p className="text-[11px] text-[#64748B] leading-snug">Envoi automatique des commandes sur écrans KDS.</p>
            </div>

            {/* Feature 4 */}
            <div className="flex flex-col items-center">
              <div className="w-14 h-14 rounded-full bg-[#F43F5E] text-white flex items-center justify-center shadow-md mb-3">
                <Receipt className="w-7 h-7" />
              </div>
              <h3 className="font-extrabold text-xs sm:text-sm text-[#0B1A3A] mb-1">Intégration CSI</h3>
              <p className="text-[11px] text-[#64748B] leading-snug">Communication directe avec votre caisse et votre gestion.</p>
            </div>

            {/* Feature 5 */}
            <div className="flex flex-col items-center col-span-2 sm:col-span-1">
              <div className="w-14 h-14 rounded-full bg-[#A855F7] text-white flex items-center justify-center shadow-md mb-3">
                <BarChart2 className="w-7 h-7" />
              </div>
              <h3 className="font-extrabold text-xs sm:text-sm text-[#0B1A3A] mb-1">Ventes additionnelles</h3>
              <p className="text-[11px] text-[#64748B] leading-snug">Mise en valeur des plats, menus et offres spéciales.</p>
            </div>

          </div>
        </section>

        {}
        <section className="px-6 sm:px-10 py-10 bg-white">
          <div className="mb-6">
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#EF5623]">
              LES AVANTAGES POUR VOTRE ÉTABLISSEMENT
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            
            {/* Benefit 1 */}
            <div className="flex items-center gap-3.5 p-3.5 rounded-xl bg-[#FAF9F6] border border-slate-200/60">
              <div className="w-10 h-10 rounded-lg bg-orange-100 text-[#EF5623] flex items-center justify-center shrink-0">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-extrabold text-xs text-[#0B1A3A] leading-tight mb-0.5">Améliore l'expérience client</h3>
                <p className="text-[11px] text-[#64748B] leading-snug">Un service plus rapide et plus fluide.</p>
              </div>
            </div>

            {/* Benefit 2 */}
            <div className="flex items-center gap-3.5 p-3.5 rounded-xl bg-[#FAF9F6] border border-slate-200/60">
              <div className="w-10 h-10 rounded-lg bg-sky-100 text-sky-600 flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-extrabold text-xs text-[#0B1A3A] leading-tight mb-0.5">Réduit le temps d'attente</h3>
                <p className="text-[11px] text-[#64748B] leading-snug">Des files moins longues et un meilleur confort.</p>
              </div>
            </div>

            {/* Benefit 3 */}
            <div className="flex items-center gap-3.5 p-3.5 rounded-xl bg-[#FAF9F6] border border-slate-200/60">
              <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                <TrendingUp className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-extrabold text-xs text-[#0B1A3A] leading-tight mb-0.5">Optimise l'organisation</h3>
                <p className="text-[11px] text-[#64748B] leading-snug">Moins de pression sur le personnel, plus d'efficacité.</p>
              </div>
            </div>

            {/* Benefit 4 */}
            <div className="flex items-center gap-3.5 p-3.5 rounded-xl bg-[#FAF9F6] border border-slate-200/60">
              <div className="w-10 h-10 rounded-lg bg-purple-100 text-purple-600 flex items-center justify-center shrink-0">
                <Coins className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-extrabold text-xs text-[#0B1A3A] leading-tight mb-0.5">Augmente le panier moyen</h3>
                <p className="text-[11px] text-[#64748B] leading-snug">Grâce aux suggestions et aux offres complémentaires.</p>
              </div>
            </div>

          </div>
        </section>

        {}
        <section className="px-6 sm:px-10 py-8 bg-[#FAF9F6] border-t border-slate-200/70">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            
            {/* Left Image Side (Technician configuring Kiosk) */}
            <div className="md:col-span-5 relative">
              <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-200/80 bg-slate-900 relative group h-64 sm:h-72">
                <img 
                  src="https://images.unsplash.com/photo-1556742049-0a670f4a4591?auto=format&fit=crop&w=800&q=80" 
                  alt="ORALI Technical Staff configuring kiosk" 
                  className="w-full h-full object-cover opacity-85 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-4">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-[#EF5623] rounded-xs transform -skew-x-12" />
                    <span className="text-white font-extrabold text-xs tracking-wider uppercase">ORALI SYSTEMS</span>
                  </div>
                  <p className="text-[10px] text-slate-300">Support & installation sur site</p>
                </div>
              </div>
            </div>

            {/* Right Text Content Side */}
            <div className="md:col-span-7 space-y-4">
              <div>
                <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#EF5623]">
                  NOTRE ACCOMPAGNEMENT
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1A3A] tracking-tight mt-0.5">
                  Installation, formation et support
                </h2>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed mt-2">
                  Notre équipe technique vous accompagne à chaque étape pour une mise en service rapide et une utilisation en toute sérénité.
                </p>
              </div>

              {/* 4 Pillar Icons */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                
                <div className="flex flex-col items-center text-center space-y-1.5 p-2">
                  <div className="w-10 h-10 rounded-full bg-orange-100 text-[#EF5623] flex items-center justify-center">
                    <Wrench className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-bold text-[#0B1A3A] leading-tight">
                    Installation et paramétrage
                  </span>
                </div>

                <div className="flex flex-col items-center text-center space-y-1.5 p-2">
                  <div className="w-10 h-10 rounded-full bg-orange-100 text-[#EF5623] flex items-center justify-center">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-bold text-[#0B1A3A] leading-tight">
                    Formation des équipes
                  </span>
                </div>

                <div className="flex flex-col items-center text-center space-y-1.5 p-2">
                  <div className="w-10 h-10 rounded-full bg-orange-100 text-[#EF5623] flex items-center justify-center">
                    <Headphones className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-bold text-[#0B1A3A] leading-tight">
                    Assistance technique
                  </span>
                </div>

                <div className="flex flex-col items-center text-center space-y-1.5 p-2">
                  <div className="w-10 h-10 rounded-full bg-orange-100 text-[#EF5623] flex items-center justify-center">
                    <Cog className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-bold text-[#0B1A3A] leading-tight">
                    Suivi et maintenance
                  </span>
                </div>

              </div>

              {/* CTA Button Bottom Right */}
              <div className="pt-2 flex justify-start sm:justify-end">
                <button 
                  onClick={() => handleOpenModal('demo')}
                  className="py-3 px-6 rounded-full bg-[#EF5623] hover:bg-[#d94817] text-white font-extrabold text-xs shadow-md hover:shadow-lg transition-all flex items-center gap-2 group"
                >
                  <span>Demander une démonstration</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>

            </div>

          </div>
        </section>

      </div>

      {}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
          <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-6 sm:p-8 relative border border-slate-100">
            
            <button 
              onClick={() => setModalOpen(false)}
              className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:bg-slate-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {formSubmitted ? (
              <div className="py-8 text-center space-y-3">
                <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <Check className="w-7 h-7 stroke-[3]" />
                </div>
                <h3 className="text-xl font-extrabold text-[#0B1A3A]">Demande transmise !</h3>
                <p className="text-slate-600 text-xs">
                  Un conseiller ORALI SYSTEMS prendra contact avec vous sous 24h.
                </p>
              </div>
            ) : (
              <div>
                <div className="mb-5 space-y-1">
                  <span className="text-[11px] font-extrabold uppercase text-[#EF5623]">
                    {modalType === 'demo' ? 'Démonstration en direct' : 'Devis Sur-Mesure'}
                  </span>
                  <h3 className="text-xl font-extrabold text-[#0B1A3A]">
                    {modalType === 'demo' ? 'Réserver une démo' : 'Demander un devis'}
                  </h3>
                  {selectedProduct && (
                    <p className="text-xs text-slate-500 font-medium">
                      Modèle : <strong className="text-[#EF5623]">{selectedProduct}</strong>
                    </p>
                  )}
                </div>

                <form onSubmit={handleSubmitForm} className="space-y-3.5">
                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">Nom & Prénom</label>
                    <div className="relative">
                      <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                      <input 
                        type="text" 
                        required 
                        placeholder="Votre nom"
                        className="w-full pl-9 pr-3 py-2 rounded-xl border border-slate-200 focus:border-[#EF5623] text-xs outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">Établissement / Restaurant</label>
                    <div className="relative">
                      <Building className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                      <input 
                        type="text" 
                        required 
                        placeholder="Nom de votre enseigne"
                        className="w-full pl-9 pr-3 py-2 rounded-xl border border-slate-200 focus:border-[#EF5623] text-xs outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">Téléphone</label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                      <input 
                        type="tel" 
                        required 
                        placeholder="06 XX XX XX XX"
                        className="w-full pl-9 pr-3 py-2 rounded-xl border border-slate-200 focus:border-[#EF5623] text-xs outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">Email</label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                      <input 
                        type="email" 
                        required 
                        placeholder="contact@restaurant.com"
                        className="w-full pl-9 pr-3 py-2 rounded-xl border border-slate-200 focus:border-[#EF5623] text-xs outline-none"
                      />
                    </div>
                  </div>

                  <button 
                    type="submit"
                    className="w-full mt-2 py-3 px-4 rounded-full bg-[#EF5623] hover:bg-[#d94817] text-white font-extrabold text-xs shadow-md transition-all flex items-center justify-center gap-2"
                  >
                    <span>Envoyer la demande</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              </div>
            )}

          </div>
        </div>
      )}

    </div>
  );
}