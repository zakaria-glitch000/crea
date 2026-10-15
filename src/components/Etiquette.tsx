import React from "react";
import {
  ShoppingCart,
  ShoppingBasket,
  Store,
  Beef,
  Zap,
  Target,
  Clock,
  BarChart3,
  Wifi,
  ArrowRight,
  Wrench,
  Users,
  Headset,
  Settings,
} from "lucide-react";
import "./Etiquette.css";

const benefits = [
  { icon: Zap, color: "#f26a1b", bg: "#fde6d7", title: "Mise à jour automatique", text: "Les prix et informations sont mis à jour directement depuis INNOSHOP en quelques clics." },
  { icon: Target, color: "#1e6fe0", bg: "#dce9fc", title: "Zéro erreur", text: "Fini les étiquettes papier et les erreurs de prix en rayon." },
  { icon: Clock, color: "#1fa347", bg: "#dff5e6", title: "Gain de temps", text: "Modifiez une ou plusieurs étiquettes en un instant, sur tout le magasin." },
  { icon: BarChart3, color: "#7c3aed", bg: "#ece3fb", title: "Image moderne", text: "Des rayons clairs, professionnels et attractifs pour vos clients." },
];

const syncLabels = [
  "/src/assets/t0.jpeg",
  "/src/assets/t1.jpeg",
  "/src/assets/t2.jpeg",
];

const formats = [
  { img: "/src/assets/t3.jpeg", title: "Petit format", sub: "Fruits & légumes", w: 125 },
  { img: "/src/assets/t4.jpeg", title: "Format moyen", sub: "Épicerie", w: 140 },
  { img: "/src/assets/t5.jpeg", title: "Grand format", sub: "Boucherie", w: 155 },
  { img: "/src/assets/t6.jpeg", title: "Format large", sub: "Produits promotionnels", w: 175 },
];

const shops = [
  { icon: ShoppingCart, color: "#e30613", text: "Supermarchés indépendants" },
  { icon: ShoppingBasket, color: "#f26a1b", text: "Épiceries et primeurs" },
  { icon: Beef, color: "#1e5fd6", text: "Boucheries et fromageries" },
  { icon: Store, color: "#1fa347", text: "Commerces spécialisés" },
];

const support = [
  { icon: Wrench, text: "Installation et paramétrage" },
  { icon: Users, text: "Formation des équipes" },
  { icon: Headset, text: "Assistance technique" },
  { icon: Settings, text: "Suivi et maintenance" },
];

export default function Etiquettes() {
  return (
    <main className="etq-page">
      {/* HERO */}
      <header className="etq-hero">
        <div
          className="etq-hero__bg"
          style={{ backgroundImage: "url(/src/assets/e1.jpeg)" }}
          aria-hidden="true"
        />
        <div className="etq-hero__fade" />

        <div className="etq-hero__inner">

          <p className="etq-eyebrow">Étiquettes électroniques</p>
          <h1>
            Des rayons toujours
            <br />
            à jour, en toute simplicité
          </h1>
          <p className="etq-hero__text">
            Nos étiquettes électroniques sont connectées à votre logiciel
            INNOSHOP pour une mise à jour automatique des prix et des
            informations produits. Gagnez du temps, réduisez les erreurs et
            offrez une expérience d’achat moderne à vos clients.
          </p>

          <div className="etq-innoshop">
            <ShoppingCart />
            <div>
              <strong>INNOSHOP</strong>
              <span>Logiciel de gestion Retail</span>
            </div>
          </div>
        </div>
      </header>

      <div className="etq-container etq-stack">
        {/* AVANTAGES */}
        <section className="etq-benefits">
          {benefits.map(({ icon: Icon, color, bg, title, text }) => (
            <article className="etq-benefit" key={title}>
              <div className="etq-benefit__icon" style={{ background: bg, color }}>
                <Icon strokeWidth={2.2} />
              </div>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </section>

        {/* SOLUTION CONNECTÉE */}
        <section className="etq-sync">
          <div className="etq-sync__text">
            <p className="etq-eyebrow">Une solution connectée</p>
            <h2>
              Des étiquettes toujours
              <br />
              synchronisées avec INNOSHOP
            </h2>
            <p className="etq-sync__desc">
              Toutes les modifications de prix, promotions et informations
              produits sont envoyées automatiquement aux étiquettes
              électroniques. Vous gardez un contrôle total et en temps réel
              depuis votre logiciel INNOSHOP.
            </p>
            <a className="etq-btn" href="#devis">
              Demander un devis <ArrowRight />
            </a>
          </div>

          <div className="etq-sync__visual">
            <Wifi className="etq-wifi" strokeWidth={2.5} />
            <img className="etq-monitor" src="/src/assets/e0.png" alt="Écran INNOSHOP" />
            <div className="etq-sync__labels">
              {syncLabels.map((src) => (
                <div className="etq-sync__row" key={src}>
                  <ArrowRight className="etq-sync__arrow" strokeWidth={2.4} />
                  <img src={src} alt="Étiquette électronique" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FORMATS + COMMERCES */}
        <section className="etq-bottom">
          <div className="etq-formats">
            <p className="etq-eyebrow etq-eyebrow--small">
              Différents formats pour tous les rayons
            </p>
            <h2>Des étiquettes adaptées à vos produits</h2>

            <div className="etq-formats__row">
              {formats.map((f) => (
                <figure key={f.title}>
                  <img src={f.img} alt={f.title} style={{ width: f.w }} />
                  <figcaption>
                    <strong>{f.title}</strong>
                    <span>{f.sub}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>

          <div className="etq-shops">
            <p className="etq-eyebrow etq-eyebrow--small">
              Idéal pour tous les commerces
            </p>
            <h2>
              Une solution performante
              <br />
              et évolutive
            </h2>

            <div className="etq-shops__grid">
              {shops.map(({ icon: Icon, color, text }) => (
                <div className="etq-shop" key={text}>
                  <Icon color={color} strokeWidth={1.6} />
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SUPPORT */}
        <footer className="etq-support">
          <div className="etq-support__main">
            <Settings strokeWidth={1.5} />
            <div>
              <h3>Installation, formation et support</h3>
              <p>
                Notre équipe vous accompagne pour une mise en place rapide et
                une utilisation en toute sérénité.
              </p>
            </div>
          </div>

          {support.map(({ icon: Icon, text }) => (
            <div className="etq-support__item" key={text}>
              <Icon strokeWidth={1.5} />
              <span>{text}</span>
            </div>
          ))}
        </footer>
      </div>
    </main>
  );
}