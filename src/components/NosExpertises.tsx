import React from 'react';

export default function NosExpertises() {
  const expertises = [
    {
      title: "Solutions Restauration & CHR",
      description: "Des solutions complètes pour piloter votre établissement : caisses CSI, bornes de commande, écrans cuisine KDS, ERP et reporting.",
      image: "/src/assets/caisse.jpg", 
      iconBg: "bg-orange-500",
      iconSvg: (
        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      linkUrl: "#"
    },
    {
      title: "Solutions Commerce & Retail",
      description: "Avec INNOSHOP, accompagnez les commerces et points de vente dans l'encaissement, la gestion des stocks et le suivi de leur activité.",
      image: "/src/assets/logiciel.jpg",
      iconBg: "bg-blue-600",
      iconSvg: (
        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      linkUrl: "#"
    },
    {
      title: "Développement de Logiciels sur Mesure",
      description: "Conception et réalisation d'applications métier personnalisées, adaptées aux besoins et aux processus de chaque entreprise.",
      image: "/src/assets/dev.jpg",
      iconBg: "bg-purple-600",
      iconSvg: (
        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      linkUrl: "#"
    }
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      {/* Titre dyal la section */}
      <div className="max-w-7xl mx-auto text-center mb-12">
        <span className="text-xs font-bold tracking-widest text-blue-600 uppercase">Nos expertises</span>
        <h2 className="text-3xl font-extrabold text-gray-900 mt-2">Une offre complète pour vos projets</h2>
        <div className="w-12 h-1 bg-blue-600 mx-auto mt-3 rounded-full"></div>
      </div>

      {/* Les Cartes */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {expertises.map((item, index) => (
          <div key={index} className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col justify-between text-left border border-gray-100">
            
            {/* L'image lfoq - b object-cover bach t3mr blashtha w tban kbir 3la 9ad la carte */}
            <div className="relative h-48 w-full overflow-hidden">
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Contenu de la carte */}
            <div className="p-6 relative pt-8">
              {/* Icône daira m3llqka */}
              <div className={`absolute -top-6 left-6 w-12 h-12 rounded-full ${item.iconBg} flex items-center justify-center shadow-md border-2 border-white`}>
                {item.iconSvg}
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">{item.description}</p>
            </div>

            {/* Bouton En savoir plus */}
            <div className="px-6 pb-6 pt-0">
              <a 
                href={item.linkUrl} 
                className="inline-flex items-center text-blue-600 font-semibold text-sm hover:text-blue-800 transition-colors group"
              >
                En savoir plus 
                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}