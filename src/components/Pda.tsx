import React from "react";
import {
  Smartphone, Settings, Wifi, BookOpen, ConciergeBell, Zap, LayoutGrid,
  Armchair, BarChart3, RefreshCw, Timer, Users, ChefHat, TrendingUp,
  Wrench, Headset, ArrowRight,
} from "lucide-react";
import "./Pda.css";

/*
  IMAGES À PLACER dans /public/images/ :
  - logo-orali.png        (logo ORALI SYSTEMS)
  - hero.jpg              (photo serveur avec PDA, arrière-plan restaurant)
  - pad-csi.png           (écran d'accueil du PAD CSI)
  - interface-commande.png(écran de commande)
  - plan-de-salle.png     (écran TERRASSE)
  - flow-pad.png          (petit PAD)
  - flow-kds.png          (écran KDS)
  - flow-caisse.png       (terminal caisse CSI)
*/

const cards = [
  {
    img: "/images/pad-csi.png",
    title: "PAD CSI",
    subtitle: "Robuste, léger et performant",
    features: [
      { icon: Smartphone, label: "Écran tactile 5\"" },
      { icon: Settings, label: "Design robuste" },
      { icon: Wifi, label: "Wi-Fi / 4G (Bluetooth)" },
    ],
  },
  {
    img: "/images/interface-commande.png",
    title: "Interface de commande",
    subtitle: "Simple et intuitive",
    features: [
      { icon: BookOpen, label: "Menus et catégories" },
      { icon: ConciergeBell, label: "Options et suppléments" },
      { icon: Settings, label: "Personnalisable selon votre activité" },
      { icon: Zap, label: "Prise de commande rapide" },
    ],
  },
  {
    img: "/images/plan-de-salle.png",
    title: "Plan de salle",
    subtitle: "Visualisez et gérez vos tables en temps réel",
    features: [
      { icon: LayoutGrid, label: "Suivi des tables en temps réel" },
      { icon: Armchair, label: "Ouverture, transfert et regroupement" },
      { icon: BarChart3, label: "État des tables (claire et visuelle)" },
      { icon: RefreshCw, label: "Synchronisation avec la caisse CSI" },
    ],
  },
];

const advantages = [
  { icon: Timer, color: "#f26a1b", bg: "#fff1e6", title: "Gain de temps",
    text: "Commandes envoyées directement en cuisine sans déplacement." },
  { icon: Users, color: "#2a7de1", bg: "#e8f1fd", title: "Meilleure organisation",
    text: "Suivi des tables et des commandes en temps réel." },
  { icon: ChefHat, color: "#22a06b", bg: "#e5f6ee", title: "Moins d'erreurs",
    text: "Saisie intuitive et claire avec menus visuels." },
  { icon: TrendingUp, color: "#8a4fe0", bg: "#f1e9fc", title: "Plus de ventes",
    text: "Mise en avant des options et des produits complémentaires." },
];

const services = [
  { icon: Settings, title: "Installation et paramétrage", text: "par nos techniciens" },
  { icon: Users, title: "Formation des équipes", text: "Utilisation simple et rapide" },
  { icon: Headset, title: "Assistance technique", text: "À distance ou sur site" },
  { icon: Wrench, title: "Suivi et maintenance", text: "Pour une utilisation en toute sérénité" },
];

export default function OraliPage() {
  return (
    <div className="orali">
      {/* HERO */}
      <header className="hero" style={{ backgroundImage: "url(/images/hero.jpg)" }}>
        <div className="hero-overlay" />
        <div className="hero-content">
          <img className="logo" src="/images/logo-orali.png" alt="Orali Systems" />
          <p className="eyebrow">PDA / TERMINAL DE PRISE DE COMMANDE</p>
          <h1>
            Un service plus rapide <br /> au bout des mains
          </h1>
          <p className="lead">
            Le terminal mobile CSI vous permet de prendre les commandes
            directement à table, de les envoyer en cuisine via le KDS et de les
            intégrer à votre caisse, pour un service fluide et plus efficace.
          </p>
        </div>
        <div className="hero-script">
          La prise de commande <br /> en toute mobilité
        </div>
      </header>

      {/* 3 CARTES */}
      <section className="cards">
        {cards.map((c) => (
          <article className="card" key={c.title}>
            <div className="card-img">
              <img src={c.img} alt={c.title} />
            </div>
            <h2>{c.title}</h2>
            <p className="card-sub">{c.subtitle}</p>
            <ul className="features">
              {c.features.map(({ icon: Icon, label }) => (
                <li key={label}>
                  <Icon size={30} strokeWidth={1.6} color="#f26a1b" />
                  <span>{label}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      {/* AVANTAGES */}
      <section className="advantages">
        <p className="eyebrow center">LES AVANTAGES POUR VOTRE ÉTABLISSEMENT</p>
        <h2 className="section-title">Un service plus fluide et plus efficace</h2>
        <div className="adv-grid">
          {advantages.map(({ icon: Icon, color, bg, title, text }) => (
            <div className="adv" key={title}>
              <span className="adv-icon" style={{ background: bg }}>
                <Icon size={30} color={color} strokeWidth={1.8} />
              </span>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SOLUTION CONNECTÉE */}
      <section className="connected">
        <div className="flow-wrap">
          <p className="eyebrow">UNE SOLUTION CONNECTÉE</p>
          <h2 className="section-title left">De la table à la cuisine, sans délai</h2>
          <div className="flow">
            <figure>
              <img src="/images/flow-pad.png" alt="PAD CSI" className="flow-pad" />
              <figcaption>Prise de commande <br /> sur PAD CSI</figcaption>
            </figure>
            <ArrowRight className="arrow" size={40} color="#f26a1b" />
            <figure>
              <img src="/images/flow-kds.png" alt="KDS" className="flow-kds" />
              <figcaption>Affichage en cuisine <br /> sur KDS</figcaption>
            </figure>
            <ArrowRight className="arrow" size={40} color="#f26a1b" />
            <figure>
              <img src="/images/flow-caisse.png" alt="Caisse CSI" className="flow-caisse" />
              <figcaption>Intégration à la caisse <br /> CSI</figcaption>
            </figure>
          </div>
        </div>

        <ul className="services">
          {services.map(({ icon: Icon, title, text }) => (
            <li key={title}>
              <Icon size={38} strokeWidth={1.6} color="#f26a1b" />
              <div>
                <strong>{title}</strong>
                <span>{text}</span>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}