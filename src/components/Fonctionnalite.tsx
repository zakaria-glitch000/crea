import React from 'react';
import { 
  Calculator, 
  FileText, 
  Box, 
  BarChart3, 
  Percent, 
  ClipboardCheck 
} from 'lucide-react';

export default function FeaturesSection() {
  const features = [
    {
      icon: <Calculator className="w-8 h-8 text-blue-600" />,
      title: "Encaissement simplifié",
      description: "Enregistrez vos ventes rapidement avec une interface intuitive."
    },
    {
      icon: <FileText className="w-8 h-8 text-blue-600" />,
      title: "Gestion des ventes",
      description: "Consultez vos tickets, historiques d'encaissement et détails des transactions."
    },
    {
      icon: <Box className="w-8 h-8 text-blue-600" />,
      title: "Gestion des articles",
      description: "Organisez vos produits, familles, prix, menus et tarifs."
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-blue-600" />,
      title: "Statistiques de ventes",
      description: "Analysez votre chiffre d'affaires et vos meilleures ventes."
    },
    {
      icon: <Percent className="w-8 h-8 text-blue-600" />,
      title: "Remises et offres",
      description: "Gérez facilement les remises, promotions et programmes de fidélité."
    },
    {
      icon: <ClipboardCheck className="w-8 h-8 text-blue-600" />,
      title: "Clôture et rapports",
      description: "Suivez les résultats de caisse et exportez vos rapports en toute simplicité."
    }
  ];

  return (
    <section className="py-16 px-4 bg-slate-50">
      <div className="max-w-6xl mx-auto text-center">
        {/* Subtitle Header */}
        <span className="text-xs font-bold tracking-widest text-blue-600 uppercase mb-3 block">
          FONCTIONNALITÉS CLÉS
        </span>
        
        {/* Main Title */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
          Des fonctionnalités pensées pour votre activité
        </h2>
        
        {/* Description */}
        <p className="text-slate-600 max-w-2xl mx-auto mb-12 text-sm md:text-base">
          Encaissez, contrôlez et analysez votre activité avec des outils de gestion adaptés aux professionnels du CHR et du Retail.
        </p>

        {/* Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-start gap-4 text-left transition-all hover:shadow-md"
            >
              <div className="p-3 bg-blue-50 rounded-xl shrink-0">
                {feature.icon}
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-lg mb-1">
                  {feature.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}