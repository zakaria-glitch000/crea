import React from "react";
import {
  ShoppingCart, Barcode, Box, ClipboardList, RefreshCw, Search, Truck,
  ArrowLeftRight, BarChart3, Wrench, Users, Headset, Settings, ArrowRight,
} from "lucide-react";
import "./Stock.css";

const heroBadges = [
  { icon: Barcode, text: "Lecture codes-barres rapide et fiable" },
  { icon: Box, text: "Saisie et création des articles" },
  { icon: ClipboardList, text: "Inventaires simplifiés et précis" },
  { icon: RefreshCw, text: "Synchronisation en temps réel avec INNOSHOP" },
];

const features = [
  { icon: Barcode, color: "#e91e63", bg: "#fde4ec", title: "Saisie des articles", text: "Ajoutez rapidement de nouveaux produits (code, prix, famille, libellé...)." },
  { icon: Search, color: "#1e6fe0", bg: "#e0ecfc", title: "Lecture de codes-barres", text: "Lecture rapide et fiable des codes produits, EAN, QR Code..." },
  { icon: Box, color: "#1fa347", bg: "#dff5e6", title: "Inventaire", text: "Réalisez vos inventaires en quelques clics avec un comptage rapide et précis." },
  { icon: Truck, color: "#f26a1b", bg: "#fde6d7", title: "Réception", text: "Enregistrez vos entrées de marchandises et mettez à jour vos stocks." },
  { icon: ArrowLeftRight, color: "#6c3fd1", bg: "#ebe3fb", title: "Transfert", text: "Gérez les mouvements de stock entre vos magasins ou vos zones de stockage." },
  { icon: BarChart3, color: "#f5b400", bg: "#fff3cc", title: "Consultation", text: "Visualisez les quantités, les emplacements et les informations produits." },
];

const steps = [
  { img: "/images/step-1.png", title: "Choix de l’opération", text: "Saisie, inventaire, réception..." },
  { img: "/images/step-2.png", title: "Saisie ou scan", text: "Entrez les informations ou scannez le code-barres." },
  { img: "/images/step-3.png", title: "Comptage rapide", text: "Scannez vos produits et validez les quantités." },
  { img: "/images/step-4.png", title: "Mise à jour automatique", text: "Vos données sont directement synchronisées avec INNOSHOP.", wide: true },
];

const shops = [
  { img: "/images/shop-supermarche.jpg", label: "Supermarchés indépendants" },
  { img: "/images/shop-epicerie.jpg", label: "Épiceries et primeurs" },
  { img: "/images/shop-boucherie.jpg", label: "Boucheries et charcuteries" },
  { img: "/images/shop-fromagerie.jpg", label: "Fromageries" },
  { img: "/images/shop-specialise.jpg", label: "Commerces spécialisés" },
];

const support = [
  { icon: Wrench, text: "Installation et paramétrage" },
  { icon: Users, text: "Formation des équipes" },
  { icon: Headset, text: "Assistance technique" },
  { icon: Settings, text: "Suivi et maintenance" },
];

export default function App() {
  return (
    <div className="page">
      {/* HERO SECTION */}
      <header className="hero" style={{ backgroundImage: "url(/images/hero-bg.jpg)" }}>
        <div className="hero-overlay" />
        
        {/* Left Content */}
        <div className="hero-left">
          <img className="logo" src="/images/logo-orali.png" alt="Orali Systems" />
          <p className="eyebrow">TERMINAL DE SAISIE ET D’INVENTAIRE</p>
          <h1>Maîtrisez vos stocks avec INNOSHOP</h1>
          <p className="hero-text">
            Notre terminal de saisie est connecté à votre logiciel INNOSHOP pour vous
            permettre de saisir vos articles, réaliser vos inventaires, contrôler vos
            réceptions et mettre à jour vos stocks rapidement et en toute fiabilité.
          </p>
        </div>

        {/* Center/Overlap Terminal Image */}
        <div className="hero-terminal-wrapper">
          <img className="terminal" src="/images/terminal-hero.png" alt="Terminal Zebra INNOSHOP" />
        </div>

        {/* Right Content (INNOSHOP Box + Badges) */}
        <div className="hero-right">
          <div className="innoshop-box">
            <ShoppingCart size={32} />
            <div>
              <strong>INNOSHOP</strong>
              <span>Logiciel de gestion Retail</span>
            </div>
          </div>
          {heroBadges.map(({ icon: Icon, text }) => (
            <div className="badge" key={text}>
              <Icon size={26} strokeWidth={1.5} className="badge-icon" />
              <span>{text}</span>
            </div>
          ))}
        </div>
      </header>

      {/* FONCTIONNALITÉS */}
      <section className="section">
        <p className="eyebrow">LES FONCTIONNALITÉS</p>
        <h2>Un terminal polyvalent pour toutes vos opérations</h2>
        <div className="features">
          {features.map(({ icon: Icon, color, bg, title, text }) => (
            <div className="feature" key={title}>
              <div className="circle" style={{ background: bg, color }}>
                <Icon size={32} strokeWidth={2} />
              </div>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FONCTIONNEMENT */}
      <section className="section">
        <p className="eyebrow">UN FONCTIONNEMENT SIMPLE</p>
        <h2>De la saisie à la mise à jour dans INNOSHOP</h2>
        <div className="steps">
          {steps.map((s, i) => (
            <React.Fragment key={s.title}>
              <div className={`step ${s.wide ? "wide" : ""}`}>
                <span className="num">{i + 1}</span>
                <img src={s.img} alt={s.title} />
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
              {i < steps.length - 1 && <ArrowRight className="arrow" size={32} />}
            </React.Fragment>
          ))}
        </div>
      </section>

      {/* COMMERCES */}
      <section className="shops">
        <div className="shops-title">
          <p className="eyebrow">IDÉAL POUR TOUS LES COMMERCES</p>
          <h2>Une solution adaptée à votre activité</h2>
        </div>
        {shops.map((s) => (
          <figure key={s.label}>
            <img src={s.img} alt={s.label} />
            <figcaption>{s.label}</figcaption>
          </figure>
        ))}
      </section>

      {/* SUPPORT */}
      <footer className="support">
        <div className="support-main">
          <Settings size={48} color="#f26a1b" strokeWidth={1.5} />
          <div>
            <h3>Installation, formation et support</h3>
            <p>Notre équipe vous accompagne pour une prise en main rapide et une utilisation en toute sérénité.</p>
          </div>
        </div>
        {support.map(({ icon: Icon, text }) => (
          <div className="support-item" key={text}>
            <Icon size={30} strokeWidth={1.5} />
            <span>{text}</span>
          </div>
        ))}
      </footer>
    </div>
  );
}