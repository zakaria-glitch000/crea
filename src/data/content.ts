import {
  Monitor,
  ShoppingCart,
  Network,
  ShieldCheck,
  Server,
  Settings2,
  Wrench,
  Settings,
  GraduationCap,
  RefreshCw,
  Headphones,
  LifeBuoy,
  Store,
  UtensilsCrossed,
  Hotel,
  Truck,
  Briefcase,
  Building2,
  type LucideIcon,
} from 'lucide-react';

export const NAV_LINKS = [
  { label: 'Accueil', href: '#home' },
  { label: 'Solutions', href: '#solutions' },
  { label: 'Services', href: '#services' },
  { label: 'Produits', href: '#featured' },
  { label: 'À propos', href: '#about' },
  { label: 'Contact', href: '#contact' },
] as const;

export const TRUST_LOGOS = [
  'VARIPOS',
  'CSI',
  'INNOSHOP',
  'EASYBEL',
  'GESTICLEAN',
  'ZEBRA',
] as const;

export interface Solution {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
}

export const SOLUTIONS: Solution[] = [
  {
    icon: ShoppingCart,
    title: 'Systèmes de caisse & POS',
    description: 'Des terminaux de point de vente modernes, rapides et fiables pour la restauration, le retail et les services.',
    features: ['Encaissement rapide', 'Gestion des ventes', 'Multi-terminal'],
  },
  {
    icon: Monitor,
    title: 'Logiciels de gestion',
    description: 'Des solutions logicielles sur mesure pour piloter votre activité : stocks, clients, facturation et reporting.',
    features: ['Tableaux de bord', 'Automatisation', 'Intégrations'],
  },
  {
    icon: Network,
    title: 'Solutions réseau & infrastructure',
    description: "Conception et déploiement d'infrastructures réseau sécurisées, performantes et évolutives pour votre entreprise.",
    features: ['Architecture réseau', 'Wifi pro', 'Cloud & serveurs'],
  },
  {
    icon: ShieldCheck,
    title: 'Sécurité informatique',
    description: "Protection de vos données et systèmes : firewall, sauvegardes, contrôle d'accès et surveillance continue.",
    features: ['Firewall & VPN', 'Sauvegarde auto', 'Audit de sécurité'],
  },
  {
    icon: Server,
    title: 'Solutions matérielles',
    description: 'Sélection, fourniture et installation de matériel informatique professionnel adapté à vos besoins.',
    features: ['Serveurs & NAS', 'Postes de travail', 'Périphériques'],
  },
  {
    icon: Settings2,
    title: 'Solutions personnalisées',
    description: 'Développement de solutions sur mesure répondant précisément à vos processus métier et contraintes.',
    features: ['Développement spécifique', 'API & intégrations', 'Conception UX'],
  },
];

export interface Service {
  icon: LucideIcon;
  step: string;
  title: string;
  description: string;
}

export const SERVICES: Service[] = [
  {
    icon: Wrench,
    step: '01',
    title: 'Installation',
    description: 'Déploiement professionnel de vos équipements et systèmes sur site, avec configuration complète et tests.',
  },
  {
    icon: Settings,
    step: '02',
    title: 'Configuration',
    description: 'Paramétrage fin de vos logiciels et matériels selon vos process métier, pour une mise en service immédiate.',
  },
  {
    icon: GraduationCap,
    step: '03',
    title: 'Formation',
    description: 'Sessions de formation pratiques pour vos équipes, afin de maîtriser pleinement vos nouveaux outils.',
  },
  {
    icon: RefreshCw,
    step: '04',
    title: 'Maintenance',
    description: 'Contrats de maintenance préventive et corrective pour assurer la continuité de votre activité.',
  },
  {
    icon: Headphones,
    step: '05',
    title: 'Assistance technique',
    description: 'Support technique disponible à distance et sur site, avec intervention rapide et diagnostics précis.',
  },
  {
    icon: LifeBuoy,
    step: '06',
    title: 'SAV',
    description: 'Service après-vente complet : garantie, remplacement de pièces et suivi qualité pour vos équipements.',
  },
];

export const STATS = [
  { value: '10+', label: "Années d'expérience" },
  { value: '500+', label: 'Entreprises accompagnées' },
  { value: '24/7', label: 'Support disponible' },
  { value: '99%', label: 'Taux de satisfaction' },
] as const;

export interface Industry {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const INDUSTRIES: Industry[] = [
  { icon: Store, title: 'Retail', description: 'Encaissement, gestion des stocks et fidélité client pour magasins et boutiques.' },
  { icon: UtensilsCrossed, title: 'Restaurants', description: 'Solutions de caisse, cuisine et gestion de tables pour la restauration.' },
  { icon: Hotel, title: 'Hôtellerie', description: 'Systèmes de gestion hôtelière, check-in et billing intégrés.' },
  { icon: Truck, title: 'Distribution', description: "Optimisation logistique, traçabilité et gestion d'entrepôts." },
  { icon: Briefcase, title: 'Services', description: 'Outils de gestion de rendez-vous, facturation et relation client.' },
  { icon: Building2, title: 'PME', description: 'Solutions informatiques complètes et abordables pour petites et moyennes entreprises.' },
];

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export const PROCESS_STEPS: ProcessStep[] = [
  { step: '01', title: 'Analyse', description: "Audit de vos besoins, infrastructure existante et objectifs pour cerner précisément le contexte." },
  { step: '02', title: 'Conseil', description: "Recommandations stratégiques et choix de solutions adaptés à votre activité et votre budget." },
  { step: '03', title: 'Installation', description: "Déploiement, configuration et intégration de vos solutions par nos techniciens certifiés." },
  { step: '04', title: 'Accompagnement', description: "Formation, support continu et maintenance pour garantir la performance durable de vos systèmes." },
];

export interface Project {
  category: string;
  title: string;
  description: string;
  solution: string;
  image: string;
}

export const PROJECTS: Project[] = [
  {
    category: 'Retail · POS',
    title: 'Déploiement multi-site pour une chaîne de magasins',
    description: "Installation de 40 terminaux de caisse et d'un système de gestion centralisé pour une enseigne nationale.",
    solution: 'Système POS + Logiciel de gestion',
    image: 'https://images.pexels.com/photos/5691660/pexels-photo-5691660.jpeg?auto=compress&cs=tinysrgb&w=1600',
  },
  {
    category: 'Infrastructure · Réseau',
    title: "Modernisation réseau d'un groupe hôtelier",
    description: "Refonte complète de l'infrastructure réseau et wifi pour un groupe de 8 hôtels avec gestion centralisée.",
    solution: 'Réseau pro + Wifi + Sécurité',
    image: 'https://images.pexels.com/photos/1831234/pexels-photo-1831234.jpeg?auto=compress&cs=tinysrgb&w=1600',
  },
  {
    category: 'Logiciel · Sur-mesure',
    title: 'Plateforme de gestion pour distributeur logistique',
    description: "Développement d'une solution personnalisée de gestion d'entrepôt et de traçabilité des expéditions.",
    solution: 'Logiciel sur-mesure + API',
    image: 'https://images.pexels.com/photos/4451252/pexels-photo-4451252.jpeg?auto=compress&cs=tinysrgb&w=1600',
  },
];

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  quote: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Karim Benali',
    role: 'Directeur',
    company: 'Atlas Retail Group',
    quote: "NOVATEK a déployé nos 40 caisses en moins de deux semaines, sans interruption de l'activité. Un partenaire fiable et réactif.",
  },
  {
    name: 'Sophie Marchand',
    role: 'Gérante',
    company: 'Hôtel Meridian',
    quote: "L'équipe a su comprendre nos contraintes et nous proposer une solution réseau parfaitement adaptée. Support irréprochable.",
  },
  {
    name: 'Thomas Lefèvre',
    role: 'Responsable logistique',
    company: 'DistriFlow',
    quote: "Le logiciel sur-mesure développé par NOVATEK a transformé notre gestion d'entrepôt. Gains de temps considérables.",
  },
];

export const FEATURE_LIST = [
  'Gestion des ventes',
  'Gestion des stocks',
  'Reporting',
  'Clients',
  'Produits',
  'Multi-utilisateurs',
  'Sécurité',
];

export const COMPANY = {
  name: 'CREA SOLUTION',
  tagline: 'Solutions Technologiques',
  address: "CASABLANCA MAROC",
  phone: '+212520202000',
  email: 'contact@creasolution.fr',
  hours: 'Lun – Ven : 8h30 – 19h00',
  social: {
    linkedin: '#',
    twitter: '#',
    facebook: '#',
  },
} as const;
