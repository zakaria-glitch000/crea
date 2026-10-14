import React from "react";
import {
  Zap,
  Target,
  CheckCircle2,
  TrendingUp,
  Scale,
  Barcode,
  Coins,
  FileText,
  PieChart,
  Settings,
  Wrench,
  Users,
  Headphones,
  ArrowRight,
} from "lucide-react";
import "./Balance.css";

/* ------------------------------------------------------------------
   IMAGES : placez vos fichiers dans /public/images/ avec ces noms
   (ou modifiez les chemins ci-dessous)
------------------------------------------------------------------- */
const IMG = {
  logo: "/images/logo-orali.png",
  hero: "/images/hero-balance-caisse.jpg", // photo supermarché + balance + écran INNOSHOP
  integrated: "/images/balance-innoshop-sync.png", // balance + oranges + écran caisse
  fruits: "/images/fruits-legumes.jpg",
  boucherie: "/images/boucherie.jpg",
  poissonnerie: "/images/poissonnerie.jpg",
  epicerie: "/images/epicerie-vrac.jpg",
  rayons: "/images/rayons-frais.jpg",
};

const advantages = [
  {
    icon: Zap,
    color: "orange",
    title: "Encaissement plus rapide",
    text: "La pesée s'intègre automatiquement dans INNOSHOP.",
  },
  {
    icon: Target,
    color: "blue",
    title: "Moins d'erreurs",
    text: "Prix et poids transmis directement à la caisse.",
  },
  {
    icon: CheckCircle2,
    color: "green",
    title: "Gestion simplifiée",
    text: "Mise à jour des prix et produits depuis INNOSHOP.",
  },
  {
    icon: TrendingUp,
    color: "purple",
    title: "Adaptée à votre commerce",
    text: "Fruits et légumes, boucherie, poissonnerie, rayons frais, épicerie…",
  },
];

const features = [
  {
    icon: Scale,
    color: "orange",
    title: "Pesée en temps réel",
    text: "Affichage clair du poids et du prix sur la balance et à l'écran de la caisse.",
  },
  {
    icon: Barcode,
    color: "blue",
    title: "Articles par code ou par famille",
    text: "Fruits et légumes, viandes, poissons, produits en vrac.",
  },
  {
    icon: Coins,
    color: "green",
    title: "Mise à jour des prix",
    text: "Depuis INNOSHOP, sans intervention sur la balance.",
  },
  {
    icon: FileText,
    color: "red",
    title: "Intégration caisse",
    text: "Le produit est ajouté automatiquement dans le ticket.",
  },
  {
    icon: PieChart,
    color: "purple",
    title: "Suivi des ventes",
    text: "Statistiques par article, par rayon ou par période.",
  },
];

const sectors = [
  { img: IMG.fruits, label: "Fruits et légumes" },
  { img: IMG.boucherie, label: "Boucherie" },
  { img: IMG.poissonnerie, label: "Poissonnerie" },
  { img: IMG.epicerie, label: "Épicerie et produits en vrac" },
  { img: IMG.rayons, label: "Rayons frais" },
];

const support = [
  { icon: Wrench, label: "Installation et paramétrage" },
  { icon: Users, label: "Formation des équipes" },
  { icon: Headphones, label: "Assistance technique" },
  { icon: Settings, label: "Suivi et maintenance" },
];

export default function OraliPage() {
  return (
    <div className="orali">
      {/* ================= HERO ================= */}
      <header className="hero">
        <img className="hero__bg" src={IMG.hero} alt="Balance connectée à la caisse INNOSHOP" />
        <div className="hero__overlay" />
        <div className="hero__content">
          <img className="hero__logo" src={IMG.logo} alt="Orali Systems - Solutions commerce & restaurant" />
          <p className="eyebrow">BALANCE CONNECTÉE</p>
          <h1>
            Une pesée rapide
            <br />
            et une gestion simplifiée
          </h1>
          <p className="hero__text">
            Notre balance électronique est directement connectée à notre logiciel INNOSHOP pour un
            encaissement rapide, fiable et sans erreur, idéal pour les supermarchés, épiceries,
            boucheries, fruits et légumes, poissonneries et commerces alimentaires.
          </p>
        </div>
      </header>

      {/* ================= AVANTAGES ================= */}
      <section className="advantages">
        {advantages.map(({ icon: Icon, color, title, text }) => (
          <article className="advantage" key={title}>
            <span className={`icon-circle icon-circle--${color}`}>
              <Icon size={30} />
            </span>
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </section>

      {/* ================= SOLUTION INTÉGRÉE ================= */}
      <section className="integrated">
        <div className="integrated__text">
          <p className="eyebrow">UNE SOLUTION INTÉGRÉE</p>
          <h2>
            Balance + INNOSHOP
            <br />
            en parfaite synchronisation
          </h2>
          <p>
            Le poids, le prix et la référence article sont automatiquement envoyés à la caisse.
            Vous gagnez du temps et vous sécurisez vos ventes.
          </p>
          <a href="#devis" className="btn">
            Demander un devis <ArrowRight size={20} />
          </a>
        </div>

        <div className="integrated__visual">
          <img src={IMG.integrated} alt="Balance et caisse INNOSHOP synchronisées" />
          <span className="caption caption--left">
            Transmission automatique
            <br />
            du poids et du prix
          </span>
          <span className="caption caption--right">
            Encaissement direct
            <br />
            dans INNOSHOP
          </span>
        </div>
      </section>

      {/* ================= FONCTIONNALITÉS ================= */}
      <section className="features">
        <p className="eyebrow eyebrow--center">LES FONCTIONNALITÉS</p>
        <h2 className="features__title">Tout ce qu'il vous faut pour une gestion efficace</h2>
        <div className="features__grid">
          {features.map(({ icon: Icon, color, title, text }) => (
            <article className="feature" key={title}>
              <span className={`icon-circle icon-circle--${color}`}>
                <Icon size={32} />
              </span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ================= SECTEURS ================= */}
      <section className="sectors">
        <div className="sectors__intro">
          <p className="eyebrow">
            IDÉAL POUR TOUS LES
            <br />
            PROFESSIONNELS DU RETAIL
          </p>
          <h2>
            Une solution adaptée
            <br />à votre métier
          </h2>
        </div>
        {sectors.map(({ img, label }) => (
          <figure className="sector" key={label}>
            <img src={img} alt={label} />
            <figcaption>{label}</figcaption>
          </figure>
        ))}
      </section>

      {/* ================= SUPPORT ================= */}
      <footer className="support">
        <div className="support__main">
          <Settings size={54} className="support__gear" />
          <div>
            <h3>
              Installation, formation
              <br />
              et support
            </h3>
            <p>Notre équipe vous accompagne à chaque étape pour une utilisation simple et efficace.</p>
          </div>
        </div>
        {support.map(({ icon: Icon, label }) => (
          <div className="support__item" key={label}>
            <Icon size={34} />
            <span>{label}</span>
          </div>
        ))}
      </footer>
    </div>
  );
}