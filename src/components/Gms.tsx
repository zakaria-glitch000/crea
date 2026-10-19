import React from 'react';

const GmsCsiPage = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-800">
      {/* ========== HERO ========== */}
      <header className="relative bg-gradient-to-br from-blue-50/90 via-white/80 to-blue-50/90 overflow-hidden">
        {/* Background image mockup with blur for the exact poster feel */}
        <div 
          className="absolute inset-0 z-0 opacity-15 bg-cover bg-center pointer-events-none"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=2000')` }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
          {/* Logo + top icons */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-10">
            <div className="flex items-center gap-3">
              <div>
              </div>
            </div>

            <div className="flex flex-wrap gap-6 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                  <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <span className="font-medium text-gray-700 leading-tight">Centralisez<br /><span className="text-xs text-gray-500">toutes vos données</span></span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                  <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="font-medium text-gray-700 leading-tight">Gagnez<br /><span className="text-xs text-gray-500">du temps</span></span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                  <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <span className="font-medium text-gray-700 leading-tight">Maîtrisez<br /><span className="text-xs text-gray-500">vos coûts</span></span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                  <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <span className="font-medium text-gray-700 leading-tight">Une gestion<br /><span className="text-xs text-gray-500">sécurisée</span></span>
              </div>
            </div>
          </div>

          {/* Title */}
          <div className="text-center lg:text-left max-w-3xl mb-12">
            <h2 className="text-5xl md:text-6xl font-black tracking-tight">
              <span className="text-blue-600">GMS -</span>{' '}
              <span className="text-blue-900">Back Office</span>
            </h2>
            <p className="text-2xl md:text-3xl font-extrabold text-gray-900 mt-1 tracking-wide">
              ERP RESTAURATION
            </p>
            <p className="mt-3 text-lg font-semibold text-gray-700">
              Une solution complète, connectée à vos caisses CSI
            </p>
            <p className="mt-1 text-gray-500 text-sm md:text-base">
              De l'encaissement à la gestion de votre activité, tout est centralisé pour un pilotage simple et performant.
            </p>
          </div>

          {/* Devices mockup */}
          <div className="relative mt-10">
            <div className="flex flex-col xl:flex-row items-center xl:items-end justify-center gap-6">
              {/* Caisse */}
              <div className="relative z-10">
               
               
              </div>

              {/* Desktop */}
              <div className="relative z-20 -mb-2">
                
              </div>

             

              {/* Mobile */}
              <div className="relative z-10">
                  
                    <div className="p-2 space-y-1.5">
                                 </div>

              </div>
            </div>

            {/* Cloud connection line */}
            <div className="flex justify-center mt-12">
              <div className="bg-blue-600 text-white text-xs md:text-sm font-semibold px-6 py-2.5 rounded-full flex items-center gap-2.5 shadow-lg">
                <svg className="w-5 h-5 text-blue-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
                Toutes les informations de vos caisses remontent automatiquement dans GMS-Back Office
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ========== FONCTIONNALITÉS ========== */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs font-bold text-blue-600 tracking-widest uppercase">
              DES FONCTIONNALITÉS COMPLÈTES
            </p>
            <h2 className="mt-2 text-3xl md:text-4xl font-extrabold text-gray-900">
              Une gestion globale de votre restaurant
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* 1. Ventes et encaissements */}
            <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm hover:shadow-md transition">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
                  <span className="text-orange-600 text-lg">📊</span>
                </div>
                <h3 className="font-bold text-gray-900 text-sm">Ventes et encaissements</h3>
              </div>
              <ul className="text-xs text-gray-600 space-y-1.5 mb-4 list-disc pl-4">
                <li>Suivi du chiffre d'affaires</li>
                <li>Analyse par article, catégorie, serveur, table…</li>
                <li>Tickets, panier moyen</li>
                <li>Modes de règlement</li>
              </ul>
              <div className="bg-gray-50 border border-gray-100 rounded-lg p-2 text-[10px] overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="text-gray-400 border-b">
                      <th className="text-left pb-1">Nom</th>
                      <th className="pb-1">Date</th>
                      <th className="pb-1">Total</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    <tr><td className="py-0.5">12/10/2025</td><td>12:30</td><td className="font-semibold">101,00</td></tr>
                    <tr><td className="py-0.5">12/10/2025</td><td>13:15</td><td className="font-semibold">85,50</td></tr>
                    <tr><td className="py-0.5">12/10/2025</td><td>14:00</td><td className="font-semibold">156,00</td></tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* 2. Stocks et inventaires */}
            <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm hover:shadow-md transition">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                  <span className="text-blue-600 text-lg">📦</span>
                </div>
                <h3 className="font-bold text-gray-900 text-sm">Stocks et inventaires</h3>
              </div>
              <ul className="text-xs text-gray-600 space-y-1.5 mb-4 list-disc pl-4">
                <li>Suivi des mouvements</li>
                <li>Valorisation des stocks</li>
                <li>Inventaires</li>
                <li>Alertes de stock minimum</li>
                <li>Gestion des pertes et écarts</li>
              </ul>
              <div className="bg-gray-50 border border-gray-100 rounded-lg p-2 text-[10px]">
                <table className="w-full">
                  <thead>
                    <tr className="text-gray-400 border-b">
                      <th className="text-left pb-1">Article</th>
                      <th className="pb-1">Stock</th>
                      <th className="pb-1">Prix</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    <tr><td className="py-0.5 text-green-600 font-medium">● Tomate</td><td>25,00</td><td>12,00</td></tr>
                    <tr><td className="py-0.5 text-red-500 font-medium">● Mozzarella</td><td>12,00</td><td>48,00</td></tr>
                    <tr><td className="py-0.5 text-red-500 font-medium">● Salade</td><td>18,00</td><td>10,00</td></tr>
                    <tr><td className="py-0.5 text-orange-500 font-medium">● Viande hachée</td><td>8,00</td><td>65,00</td></tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* 3. Achats et fournisseurs */}
            <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm hover:shadow-md transition">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center">
                  <span className="text-pink-600 text-lg">🛒</span>
                </div>
                <h3 className="font-bold text-gray-900 text-sm">Achats et fournisseurs</h3>
              </div>
              <ul className="text-xs text-gray-600 space-y-1.5 mb-4 list-disc pl-4">
                <li>Commandes fournisseurs</li>
                <li>Réception et contrôle</li>
                <li>Factures fournisseurs</li>
                <li>Suivi des prix d'achat</li>
                <li>Gestion des fournisseurs</li>
              </ul>
              <div className="bg-gray-50 border border-gray-100 rounded-lg p-2 text-[10px]">
                <table className="w-full">
                  <thead>
                    <tr className="text-gray-400 border-b">
                      <th className="text-left pb-1">Date</th>
                      <th className="pb-1">Fournisseur</th>
                      <th className="pb-1">Statut</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    <tr><td className="py-0.5">12/10</td><td>Metro</td><td className="text-green-600 font-medium">Reçu</td></tr>
                    <tr><td className="py-0.5">10/10</td><td>DistriFood</td><td className="text-green-600 font-medium">Reçu</td></tr>
                    <tr><td className="py-0.5">08/10</td><td>Fresh Food</td><td className="text-orange-500 font-medium">En cours</td></tr>
                    <tr><td className="py-0.5">02/10</td><td>Boulangerie</td><td className="text-green-600 font-medium">Reçu</td></tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* 4. Production et fiches techniques */}
            <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm hover:shadow-md transition">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center">
                  <span className="text-emerald-600 text-lg">👨‍🍳</span>
                </div>
                <h3 className="font-bold text-gray-900 text-sm">Production et fiches techniques</h3>
              </div>
              <ul className="text-xs text-gray-600 space-y-1.5 mb-4 list-disc pl-4">
                <li>Recettes et ingrédients</li>
                <li>Coûts de revient</li>
                <li>Consommation matières premières</li>
                <li>Maîtrise des pertes</li>
                <li>Suivi de la production</li>
              </ul>
              <div className="bg-gray-50 border border-gray-100 rounded-lg p-2 flex gap-2 items-center">
                <div className="text-[10px] flex-1">
                  <p className="font-bold text-blue-700">Fiche technique : Burger</p>
                  <p className="text-gray-600">Pain burger : 1,00</p>
                  <p className="text-gray-600">Viande : 1,00</p>
                  <p className="text-gray-600">Salade : 0,50</p>
                </div>
                <div className="w-14 h-14 bg-yellow-100/70 border border-yellow-200 rounded-lg flex items-center justify-center text-2xl shadow-inner">
                  🍔
                </div>
              </div>
            </div>

            {/* 5. Clients et fidélité */}
            <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm hover:shadow-md transition">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                  <span className="text-blue-600 text-lg">👥</span>
                </div>
                <h3 className="font-bold text-gray-900 text-sm">Clients et fidélité</h3>
              </div>
              <ul className="text-xs text-gray-600 space-y-1.5 mb-4 list-disc pl-4">
                <li>Base clients centralisée</li>
                <li>Historique des achats</li>
                <li>Programmes de fidélité</li>
                <li>Analyse du comportement</li>
              </ul>
              <div className="bg-gray-50 border border-gray-100 rounded-lg p-2 text-[10px]">
                <table className="w-full">
                  <thead>
                    <tr className="text-gray-400 border-b">
                      <th className="text-left pb-1">Nom</th>
                      <th className="pb-1">Téléphone</th>
                      <th className="pb-1">Points</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    <tr><td className="py-0.5">Karim</td><td>0612345678</td><td className="font-semibold text-blue-600">120</td></tr>
                    <tr><td className="py-0.5">Sara</td><td>0661122334</td><td className="font-semibold text-blue-600">85</td></tr>
                    <tr><td className="py-0.5">Youssef</td><td>0609988776</td><td className="font-semibold text-blue-600">60</td></tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* 6. Rapports et statistiques */}
            <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm hover:shadow-md transition">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                  <span className="text-purple-600 text-lg">📈</span>
                </div>
                <h3 className="font-bold text-gray-900 text-sm">Rapports et statistiques</h3>
              </div>
              <ul className="text-xs text-gray-600 space-y-1.5 mb-4 list-disc pl-4">
                <li>Ventes, annulations, retours</li>
                <li>Offerts et remises</li>
                <li>Analyse par période</li>
                <li>Export des données (Excel, PDF)</li>
              </ul>
              <div className="bg-gray-50 border border-gray-100 rounded-lg p-2 h-20 flex items-end justify-around">
                {[30, 45, 35, 60, 50, 70, 55, 80, 65, 90, 75, 85].map((h, i) => (
                  <div key={i} className="w-2.5 bg-blue-500 rounded-t" style={{ height: `${h}%` }} />
                ))}
              </div>
              <p className="text-[10px] text-center text-gray-500 mt-1">Chiffre d'affaires 2025-2026</p>
            </div>

            {/* 7. Gestion multi-sites */}
            <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm hover:shadow-md transition">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-cyan-100 flex items-center justify-center">
                  <span className="text-cyan-600 text-lg">🏢</span>
                </div>
                <h3 className="font-bold text-gray-900 text-sm">Gestion multi-sites et franchises</h3>
              </div>
              <ul className="text-xs text-gray-600 space-y-1.5 mb-4 list-disc pl-4">
                <li>Centralisation des données</li>
                <li>Comparaison des résultats</li>
                <li>Suivi en temps réel</li>
                <li>Tableaux de bord consolidés</li>
              </ul>
              <div className="bg-gray-50 border border-gray-100 rounded-lg p-2 text-[10px]">
                <table className="w-full">
                  <thead>
                    <tr className="text-gray-400 border-b">
                      <th className="text-left pb-1">Site</th>
                      <th className="pb-1">CA du jour</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    <tr><td className="py-0.5 text-red-500 font-medium">● Centre</td><td>5 630,50</td></tr>
                    <tr><td className="py-0.5 text-orange-500 font-medium">● Plage</td><td>3 240,00</td></tr>
                    <tr><td className="py-0.5 text-green-500 font-medium">● Ville</td><td>2 180,00</td></tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* 8. Planning et réservation */}
            <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm hover:shadow-md transition">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center">
                  <span className="text-indigo-600 text-lg">📅</span>
                </div>
                <h3 className="font-bold text-gray-900 text-sm">Planning et réservation</h3>
              </div>
              <ul className="text-xs text-gray-600 space-y-1.5 mb-4 list-disc pl-4">
                <li>Gestion des réservations</li>
                <li>Planning des tables</li>
                <li>Suivi de l'occupation</li>
                <li>Intégration avec la caisse</li>
              </ul>
              <div className="bg-gray-50 border border-gray-100 rounded-lg p-2 text-[10px]">
                <table className="w-full">
                  <thead>
                    <tr className="text-gray-400 border-b">
                      <th className="text-left pb-1">Heure</th>
                      <th className="pb-1">Table</th>
                      <th className="pb-1">Couverts</th>
                      <th className="pb-1">Statut</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    <tr><td className="py-0.5">12:30</td><td>Table 5</td><td>4</td><td className="text-green-600 font-medium">Confirmée</td></tr>
                    <tr><td className="py-0.5">13:00</td><td>Table 8</td><td>2</td><td className="text-green-600 font-medium">Confirmée</td></tr>
                    <tr><td className="py-0.5">14:00</td><td>Table 2</td><td>6</td><td className="text-green-600 font-medium">Confirmée</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== FOOTER BENEFITS ========== */}
      <section className="py-12 bg-gradient-to-r from-blue-50/80 via-indigo-50/50 to-blue-50/80 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
{/* Accessible partout */}
<div className="text-center">
  <p className="font-bold text-gray-800 mb-5 text-xl">
    Accessible partout
  </p>

  <div className="flex justify-center gap-8">
    <div className="flex flex-col items-center">
      <div className="w-16 h-16 bg-white rounded-2xl shadow-md flex items-center justify-center text-3xl border border-gray-100">
        💻
      </div>
      <span className="text-sm mt-2 text-gray-600 font-semibold">
        Ordinateur
      </span>
    </div>

    <div className="flex flex-col items-center">
      <div className="w-16 h-16 bg-white rounded-2xl shadow-md flex items-center justify-center text-3xl border border-gray-100">
        📱
      </div>
      <span className="text-sm mt-2 text-gray-600 font-semibold">
        Tablette
      </span>
    </div>

    <div className="flex flex-col items-center">
      <div className="w-16 h-16 bg-white rounded-2xl shadow-md flex items-center justify-center text-3xl border border-gray-100">
        📲
      </div>
      <span className="text-sm mt-2 text-gray-600 font-semibold">
        Mobile
      </span>
    </div>
  </div>
</div>

            {/* Sans cloud */}
            <div className="text-center">
             
            </div>

            {/* CTA */}
            <div className="text-center">
              <div className="inline-flex items-center gap-3 bg-blue-600 text-white px-6 py-3.5 rounded-full font-bold shadow-xl hover:bg-blue-700 transition text-sm">
                <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
                <span className="text-left leading-tight">
                  Gérez votre restaurant en toute sérénité<br />
                  <span className="text-blue-200 font-black">avec GMS-Back Office</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GmsCsiPage;