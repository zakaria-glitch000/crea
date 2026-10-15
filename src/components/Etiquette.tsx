import React from "react";
import {
  ShoppingCart, ShoppingBasket, Store, Beef, Zap, Target, Clock, BarChart3,
  Wifi, ArrowRight, Wrench, Users, Headset, Settings,
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
  { img:"/src/assets/t5.jpeg", title: "Grand format", sub: "Boucherie", w: 155 },
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
    <div className="etq">
      {/* HERO */}
      <header className="etq-hero" style={{ backgroundImage: "url(/images/hero-etiquettes.jpg)" }}>
        <div className="etq-hero-fade" />
        <div className="etq-hero-content">
          <img className="etq-logo" src="/images/logo-orali.png" alt="Orali Systems" />
          <p className="etq-eyebrow">ÉTIQUETTES ÉLECTRONIQUES</p>
          <h1>Des rayons toujours à jour, en toute simplicité</h1>
          <p className="etq-hero-text">
            Nos étiquettes électroniques sont connectées à votre logiciel INNOSHOP pour une
            mise à jour automatique des prix et des informations produits. Gagnez du temps,
            réduisez les erreurs et offrez une expérience d’achat moderne à vos clients.
          </p>
        </div>
        <div className="etq-innoshop">
          <ShoppingCart size={40} />
          <div>
            <strong>INNOSHOP</strong>
            <span>Logiciel de gestion Retail</span>
          </div>
        </div>
      </header>

      {/* AVANTAGES */}
      <section className="etq-benefits">
        {benefits.map(({ icon: Icon, color, bg, title, text }) => (
          <div className="etq-benefit" key={title}>
            <div className="etq-circle" style={{ background: bg, color }}>
              <Icon size={36} strokeWidth={2.2} />
            </div>
            <h3>{title}</h3>
            <p>{text}</p>
          </div>
        ))}
      </section>

      {/* SOLUTION CONNECTÉE */}
      <section className="etq-sync">
        <div className="etq-sync-text">
          <p className="etq-eyebrow">UNE SOLUTION CONNECTÉE</p>
          <h2>Des étiquettes toujours synchronisées avec INNOSHOP</h2>
          <p>
            Toutes les modifications de prix, promotions et informations produits sont
            envoyées automatiquement aux étiquettes électroniques. Vous gardez un contrôle
            total et en temps réel depuis votre logiciel INNOSHOP.
          </p>
          <a className="etq-btn" href="#devis">
            Demander un devis <ArrowRight size={26} />
          </a>
        </div>

        <div className="etq-sync-visual">
          <Wifi className="etq-wifi" size={56} color="#f26a1b" strokeWidth={2.5} />
          <img className="etq-monitor" src="/src/assets/e0.png" alt="Écran INNOSHOP" />
          <div className="etq-sync-labels">
            {syncLabels.map((src) => (
              <div className="etq-sync-row" key={src}>
                <ArrowRight className="etq-sync-arrow" size={28} color="#f26a1b" />
                <img src={src} alt="Étiquette électronique" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FORMATS + COMMERCES */}
      <section className="etq-bottom">
        <div className="etq-formats">
          <p className="etq-eyebrow">DIFFÉRENTS FORMATS POUR TOUS LES RAYONS</p>
          <h2>Des étiquettes adaptées à vos produits</h2>
          <div className="etq-formats-row">
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
          <p className="etq-eyebrow">IDÉAL POUR TOUS LES COMMERCES</p>
          <h2>Une solution performante et évolutive</h2>
          <div className="etq-shops-grid">
            {shops.map(({ icon: Icon, color, text }) => (
              <div className="etq-shop" key={text}>
                <Icon size={52} color={color} strokeWidth={1.6} />
                <span>{text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SUPPORT */}
      <footer className="etq-support">
        <div className="etq-support-main">
          <Settings size={64} color="#f26a1b" strokeWidth={1.5} />
          <div>
            <h3>Installation, formation et support</h3>
            <p>Notre équipe vous accompagne pour une mise en place rapide et une utilisation en toute sérénité.</p>
          </div>
        </div>
        {support.map(({ icon: Icon, text }) => (
          <div className="etq-support-item" key={text}>
            <Icon size={40} strokeWidth={1.5} />
            <span>{text}</span>
          </div>
        ))}
      </footer>
    </div>
  );
}