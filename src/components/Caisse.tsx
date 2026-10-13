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
  ChevronRight 
} from 'lucide-react';

export default function OraliPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans p-4 md:p-8">
      <div className="max-w-5xl mx-auto bg-white shadow-xl rounded-2xl overflow-hidden p-6 md:p-10 space-y-12">
        
        {/* HEADER */}
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        
          
        </header>

        {/* HERO TITLE & SUBTITLE */}
        <section className="text-left space-y-3">
          <p className="text-xs md:text-sm font-bold uppercase tracking-wider text-orange-600">
            Caisses Enregistreuses CSI
          </p>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight">
            Deux modèles,<br />la même performance
          </h2>
          <p className="text-slate-600 max-w-2xl text-sm md:text-base leading-relaxed">
            Des terminaux tactiles fiables et modernes, avec toutes les fonctionnalités de notre <strong className="text-slate-800">solution d'encaissement CSI</strong>.<br />
            Choisissez le format qui correspond le mieux à votre espace.
          </p>
        </section>

        {/* PRODUCTS SECTION */}
        <section className="grid md:grid-cols-2 gap-8">
          
          {/* PRODUIT 1 : CSI TF-15 */}
          <div className="bg-slate-50/50 rounded-xl p-6 border border-slate-100 flex flex-col justify-between">
            <div>
              <div className="h-56 flex items-center justify-center bg-white rounded-lg shadow-inner mb-6 p-4">
                <img 
                  src="" 
                  alt="CSI TF-15" 
                  className="max-h-full object-contain"
                />
              </div>
              <h3 className="text-2xl font-black text-slate-900">CSI TF-15</h3>
              <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">LA PERFORMANCE AU QUOTIDIEN</p>
              <p className="text-xs text-slate-600 mb-6">
                Un terminal tactile fiable et robuste, idéal pour les restaurants, cafés, bars et commerces de proximité.
              </p>
            </div>

            {/* Badges CSI TF-15 */}
            <div className="grid grid-cols-4 gap-2 text-center border-t border-slate-200 pt-4">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-orange-500 text-white flex items-center justify-center mb-1">
                  <Tv className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-semibold text-slate-700">Écran tactile 15"</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-orange-500 text-white flex items-center justify-center mb-1">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-semibold text-slate-700">Robuste et fiable</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-orange-500 text-white flex items-center justify-center mb-1">
                  <Gauge className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-semibold text-slate-700">Usage intensif</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-orange-500 text-white flex items-center justify-center mb-1">
                  <Layers className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-semibold text-slate-700">Compatible tous périphériques</span>
              </div>
            </div>
          </div>

          {/* PRODUIT 2 : CSI MINI */}
          <div className="bg-slate-50/50 rounded-xl p-6 border border-slate-100 flex flex-col justify-between">
            <div>
              <div className="h-56 flex items-center justify-center bg-white rounded-lg shadow-inner mb-6 p-4">
                <img 
                  src="" 
                  alt="CSI MINI" 
                  className="max-h-full object-contain"
                />
              </div>
              <h3 className="text-2xl font-black text-slate-900">CSI MINI</h3>
              <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">COMPACTE ET EFFICACE</p>
              <p className="text-xs text-slate-600 mb-6">
                Une caisse tactile tout-en-un, parfaite pour les petits espaces et les activités à taille humaine.
              </p>
            </div>

            {/* Badges CSI MINI */}
            <div className="grid grid-cols-4 gap-2 text-center border-t border-slate-200 pt-4">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-orange-500 text-white flex items-center justify-center mb-1">
                  <Tv className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-semibold text-slate-700">Écran tactile 12"</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-orange-500 text-white flex items-center justify-center mb-1">
                  <Maximize className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-semibold text-slate-700">Design compact</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-orange-500 text-white flex items-center justify-center mb-1">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-semibold text-slate-700">Robuste et fiable</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-orange-500 text-white flex items-center justify-center mb-1">
                  <Wrench className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-semibold text-slate-700">Installation rapide</span>
              </div>
            </div>
          </div>

        </section>

        {/* SECTION FONCTIONNALITÉS */}
        <section className="bg-orange-50/40 rounded-2xl p-6 md:p-8 space-y-6">
          <div className="text-center space-y-1">
            <p className="text-xs font-bold text-orange-600 uppercase tracking-wider">
              LES FONCTIONNALITÉS DE LA CAISSE CSI
            </p>
            <h3 className="text-2xl font-extrabold text-slate-900">
              Une solution complète, identique sur les deux modèles
            </h3>
            <p className="text-xs text-slate-500">
              Quel que soit le modèle choisi, vous bénéficiez des mêmes fonctionnalités avancées pour gérer votre activité.
            </p>
          </div>

          {/* GRILLE DES 10 FONCTIONNALITÉS */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 pt-4">
            
            {/* 1 */}
            <div className="bg-white p-4 rounded-xl shadow-sm text-center border border-orange-100/50 flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center mb-2">
                <Utensils className="w-5 h-5" />
              </div>
              <h4 className="text-xs font-bold text-slate-900">Gestion des ventes</h4>
              <p className="text-[10px] text-slate-500 mt-1">Encaissement rapide et intuitif, en salle, au bar ou en magasin.</p>
            </div>

            {/* 2 */}
            <div className="bg-white p-4 rounded-xl shadow-sm text-center border border-blue-100/50 flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mb-2">
                <LayoutGrid className="w-5 h-5" />
              </div>
              <h4 className="text-xs font-bold text-slate-900">Gestion des tables et plans de salle</h4>
              <p className="text-[10px] text-slate-500 mt-1">Organisation simple du service et suivi en temps réel.</p>
            </div>

            {/* 3 */}
            <div className="bg-white p-4 rounded-xl shadow-sm text-center border border-rose-100/50 flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center mb-2">
                <Soup className="w-5 h-5" />
              </div>
              <h4 className="text-xs font-bold text-slate-900">Menus et formules</h4>
              <p className="text-[10px] text-slate-500 mt-1">Gestion des menus, formules, options et suppléments.</p>
            </div>

            {/* 4 */}
            <div className="bg-white p-4 rounded-xl shadow-sm text-center border border-emerald-100/50 flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-2">
                <Tag className="w-5 h-5" />
              </div>
              <h4 className="text-xs font-bold text-slate-900">Promotions et offres</h4>
              <p className="text-[10px] text-slate-500 mt-1">Création de promotions, remises et prix spéciaux.</p>
            </div>

            {/* 5 */}
            <div className="bg-white p-4 rounded-xl shadow-sm text-center border border-purple-100/50 flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center mb-2">
                <Users className="w-5 h-5" />
              </div>
              <h4 className="text-xs font-bold text-slate-900">Gestion des clients</h4>
              <p className="text-[10px] text-slate-500 mt-1">Fidélisation et suivi de la clientèle.</p>
            </div>

            {/* 6 */}
            <div className="bg-white p-4 rounded-xl shadow-sm text-center border border-amber-100/50 flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center mb-2">
                <BarChart3 className="w-5 h-5" />
              </div>
              <h4 className="text-xs font-bold text-slate-900">Rapports et statistiques</h4>
              <p className="text-[10px] text-slate-500 mt-1">Suivi du chiffre d'affaires, annulations, retours, pertes et offres.</p>
            </div>

            {/* 7 */}
            <div className="bg-white p-4 rounded-xl shadow-sm text-center border border-indigo-100/50 flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center mb-2">
                <Printer className="w-5 h-5" />
              </div>
              <h4 className="text-xs font-bold text-slate-900">Impression et cuisine</h4>
              <p className="text-[10px] text-slate-500 mt-1">Impression des tickets, commandes cuisine et bons de préparation.</p>
            </div>

            {/* 8 */}
            <div className="bg-white p-4 rounded-xl shadow-sm text-center border border-teal-100/50 flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-teal-100 text-teal-600 flex items-center justify-center mb-2">
                <Share2 className="w-5 h-5" />
              </div>
              <h4 className="text-xs font-bold text-slate-900">Multi-postes et périphériques</h4>
              <p className="text-[10px] text-slate-500 mt-1">Connexion des imprimantes, tiroirs-caisses, écrans cuisine KDS, PDA...</p>
            </div>

            {/* 9 */}
            <div className="bg-white p-4 rounded-xl shadow-sm text-center border border-red-100/50 flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-red-100 text-red-600 flex items-center justify-center mb-2">
                <Settings className="w-5 h-5" />
              </div>
              <h4 className="text-xs font-bold text-slate-900">Paramétrage simple</h4>
              <p className="text-[10px] text-slate-500 mt-1">Interface claire et personnalisable selon votre activité.</p>
            </div>

            {/* 10 */}
            <div className="bg-white p-4 rounded-xl shadow-sm text-center border border-sky-100/50 flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center mb-2">
                <Store className="w-5 h-5" />
              </div>
              <h4 className="text-xs font-bold text-slate-900">Adaptée à plusieurs secteurs</h4>
              <p className="text-[10px] text-slate-500 mt-1">Restauration, cafés, bars, commerce de proximité, retail...</p>
            </div>

          </div>
        </section>

        {/* FOOTER / CALL TO ACTION */}
        <footer className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center border-t border-slate-100 pt-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full border border-orange-200 flex items-center justify-center text-orange-500 shrink-0">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <h5 className="text-xs font-bold text-slate-900">Une solution fiable</h5>
              <p className="text-[10px] text-slate-500">Conçue pour un usage professionnel et intensif.</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full border border-orange-200 flex items-center justify-center text-orange-500 shrink-0">
              <Wrench className="w-4 h-4" />
            </div>
            <div>
              <h5 className="text-xs font-bold text-slate-900">Un matériel polyvalent</h5>
              <p className="text-[10px] text-slate-500">Compatible avec tous les équipements de votre installation.</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full border border-orange-200 flex items-center justify-center text-orange-500 shrink-0">
              <Headphones className="w-4 h-4" />
            </div>
            <div>
              <h5 className="text-xs font-bold text-slate-900">Un accompagnement sur mesure</h5>
              <p className="text-[10px] text-slate-500">Notre équipe vous conseille et vous accompagne à chaque étape.</p>
            </div>
          </div>

          <div className="text-right">
            <button className="w-full md:w-auto bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs py-3 px-5 rounded-full shadow-md transition flex items-center justify-center gap-2">
              Demander un devis
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </footer>

      </div>
    </div>
  );
}