import React from "react";
import {
  ShoppingCart,
  Barcode,
  Box,
  ClipboardList,
  RefreshCw,
  Search,
  Truck,
  ArrowLeftRight,
  BarChart3,
  Wrench,
  Users,
  Headset,
  Settings,
  ArrowRight,
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
  { img: "/src/assets/c1.jpeg", title: "Choix de l’opération", text: "Saisie, inventaire, réception..." },
  { img: "/src/assets/c2.jpeg", title: "Saisie ou scan", text: "Entrez les informations ou scannez le code-barres." },
  { img: "/src/assets/c3.jpeg", title: "Comptage rapide", text: "Scannez vos produits et validez les quantités." },
  { img: "/src/assets/c4.jpeg", title: "Mise à jour automatique", text: "Vos données sont directement synchronisées avec INNOSHOP.", wide: true },
];

const shops = [
  { img: "/src/assets/a1.jpeg", label: "Supermarchés indépendants" },
  { img: "/src/assets/a2.jpeg", label: "Épiceries et primeurs" },
  { img: "/src/assets/a3.jpeg", label: "Boucheries et charcuteries" },
  { img: "/src/assets/a4.jpeg", label: "Fromageries" },
  { img: "/src/assets/a5.jpeg", label: "Commerces spécialisés" },
];

const support = [
  { icon: Wrench, text: "Installation et paramétrage" },
  { icon: Users, text: "Formation des équipes" },
  { icon: Headset, text: "Assistance technique" },
  { icon: Settings, text: "Suivi et maintenance" },
];

function Logo() {
  return (
    <div className="stk-logo" aria-label="ORALI SYSTEMS">
  
      <div>
        
      </div>
    </div>
  );
}

export default function App() {
  return (
    <main className="stk-page">
      {/* HERO */}
      <header className="stk-hero">
        <div
          className="stk-hero__bg"
          style={{ backgroundImage: "url(/images/hero-bg.jpg)" }}
          aria-hidden="true"
        />
        <div className="stk-hero__fade" />

        <div className="stk-hero__inner">
          <div className="stk-hero__left">
            <Logo />
            <p className="stk-eyebrow">Terminal de saisie et d’inventaire</p>
            <h1>
              Maîtrisez vos stocks
              <br />
              avec INNOSHOP
            </h1>
            <p className="stk-hero__text">
              Notre terminal de saisie est connecté à votre logiciel INNOSHOP
              pour vous permettre de saisir vos articles, réaliser vos
              inventaires, contrôler vos réceptions et mettre à jour vos stocks
              rapidement et en toute fiabilité.
            </p>
          </div>

          <div className="stk-hero__terminal">
            <img src="/src/assets/90.jpeg" alt="Terminal Zebra INNOSHOP" />
          </div>

          <div className="stk-hero__right">
            <div className="stk-innoshop">
              <ShoppingCart />
              <div>
                <strong>INNOSHOP</strong>
                <span>Logiciel de gestion Retail</span>
              </div>
            </div>

            {heroBadges.map(({ icon: Icon, text }) => (
              <div className="stk-badge" key={text}>
                <Icon strokeWidth={1.5} />
                <span>{text}</span>
              </div>
            ))}
          </div>
        </div>
      </header>

      <div className="stk-container stk-stack">
        {/* FONCTIONNALITÉS */}
        <section className="stk-block stk-block--peach">
          <p className="stk-eyebrow">Les fonctionnalités</p>
          <h2>Un terminal polyvalent pour toutes vos opérations</h2>

          <div className="stk-features">
            {features.map(({ icon: Icon, color, bg, title, text }) => (
              <article className="stk-feature" key={title}>
                <div className="stk-feature__icon" style={{ background: bg, color }}>
                  <Icon strokeWidth={2} />
                </div>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        {/* FONCTIONNEMENT */}
        <section className="stk-block stk-block--soft">
          <p className="stk-eyebrow">Un fonctionnement simple</p>
          <h2>De la saisie à la mise à jour dans INNOSHOP</h2>

          <div className="stk-steps">
            {steps.map((s, i) => (
              <React.Fragment key={s.title}>
                <div className={`stk-step ${s.wide ? "stk-step--wide" : ""}`}>
                  <div className="stk-step__image">
                    <span className="stk-step__num">{i + 1}</span>
                    <img src={s.img} alt={s.title} loading="lazy" />
                  </div>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </div>
                {i < steps.length - 1 && (
                  <ArrowRight className="stk-steps__arrow" strokeWidth={2.2} />
                )}
              </React.Fragment>
            ))}
          </div>
        </section>

        {/* COMMERCES */}
        <section className="stk-shops">
          <div className="stk-shops__title">
            <p className="stk-eyebrow">Idéal pour tous les commerces</p>
            <h2>
              Une solution adaptée
              <br />
              à votre activité
            </h2>
          </div>

          {shops.map((s) => (
            <figure key={s.label}>
              <img src={s.img} alt={s.label} loading="lazy" />
              <figcaption>{s.label}</figcaption>
            </figure>
          ))}
        </section>

        {/* SUPPORT */}
        <footer className="stk-support">
          <div className="stk-support__main">
            <Settings strokeWidth={1.5} />
            <div>
              <h3>Installation, formation et support</h3>
              <p>
                Notre équipe vous accompagne pour une prise en main rapide et
                une utilisation en toute sérénité.
              </p>
            </div>
          </div>

          {support.map(({ icon: Icon, text }) => (
            <div className="stk-support__item" key={text}>
              <Icon strokeWidth={1.5} />
              <span>{text}</span>
            </div>
          ))}
        </footer>
      </div>
    </main>
  );
}