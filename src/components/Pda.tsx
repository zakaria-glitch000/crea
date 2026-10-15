import React from "react";
import {
  Smartphone,
  Settings,
  Wifi,
  BookOpen,
  ConciergeBell,
  Zap,
  LayoutGrid,
  Armchair,
  BarChart3,
  RefreshCw,
  Timer,
  Users,
  ChefHat,
  TrendingUp,
  Wrench,
  Headset,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
} from "lucide-react";

import "./Pda.css";

import pdaImage from "@/assets/20.png";
import deuxImage from "@/assets/21.png";
import troisImage from "@/assets/22.png";
import heroImage from "@/assets/90.jpeg";
import quatreImage from "@/assets/3.jpg";
import cinqImage from "@/assets/00.png";
import sixImage from "@/assets/4.jpg";

const cards = [
  {
    img: pdaImage,
    title: "PAD CSI",
    subtitle: "Robuste, léger et performant",
    features: [
      { icon: Smartphone, label: 'Écran tactile 5"' },
      { icon: Settings, label: "Design robuste" },
      { icon: Wifi, label: "Wi-Fi / 4G / Bluetooth" },
    ],
  },
  {
    img: deuxImage,
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
    img: troisImage,
    title: "Plan de salle",
    subtitle: "Visualisez et gérez vos tables en temps réel",
    features: [
      { icon: LayoutGrid, label: "Suivi des tables en temps réel" },
      { icon: Armchair, label: "Ouverture, transfert et regroupement" },
      { icon: BarChart3, label: "État des tables clair et visuel" },
      { icon: RefreshCw, label: "Synchronisation avec la caisse CSI" },
    ],
  },
];

const advantages = [
  {
    icon: Timer,
    color: "#2563eb",
    bg: "#eff6ff",
    title: "Gain de temps",
    text: "Commandes envoyées directement en cuisine sans déplacement.",
  },
  {
    icon: Users,
    color: "#f26a1b",
    bg: "#fff1e6",
    title: "Meilleure organisation",
    text: "Suivi des tables et des commandes en temps réel.",
  },
  {
    icon: ChefHat,
    color: "#16a34a",
    bg: "#f0fdf4",
    title: "Moins d'erreurs",
    text: "Saisie intuitive et claire avec menus visuels.",
  },
  {
    icon: TrendingUp,
    color: "#7c3aed",
    bg: "#f5f3ff",
    title: "Plus de ventes",
    text: "Mise en avant des options et des produits complémentaires.",
  },
];

const services = [
  {
    icon: Settings,
    title: "Installation et paramétrage",
    text: "Par nos techniciens",
  },
  {
    icon: Users,
    title: "Formation des équipes",
    text: "Utilisation simple et rapide",
  },
  {
    icon: Headset,
    title: "Assistance technique",
    text: "À distance ou sur site",
  },
  {
    icon: Wrench,
    title: "Suivi et maintenance",
    text: "Pour une utilisation en toute sérénité",
  },
];

export default function OraliPage() {
  const goToContact = () => {
    window.location.href = "/#contact";
  };

  return (
    <main className="orali min-h-screen w-full overflow-hidden bg-white font-sans text-slate-800 antialiased">
      {/* HERO */}
      <section id="accueil" className="pda-hero">
        <div
          className="pda-hero-bg"
          style={{ backgroundImage: `url("${heroImage}")` }}
          aria-hidden="true"
        />

        <div className="pda-hero-overlay" />
        <div className="pda-hero-bottom" />

        <div className="pda-hero-content">
          <div className="pda-eyebrow">
            <span className="pda-status-dot" />
            PDA / TERMINAL DE PRISE DE COMMANDE
          </div>

          <h1>
            Un service plus rapide
            <span> au bout des mains.</span>
          </h1>

          <p className="pda-hero-description">
            Le terminal mobile CSI vous permet de prendre les commandes
            directement à table, de les envoyer en cuisine via le KDS et de
            les intégrer à votre caisse, pour un service fluide et plus
            efficace.
          </p>

          <div className="pda-hero-points">
            <div>
              <CheckCircle2 />
              Prise de commande mobile
            </div>
            <div>
              <CheckCircle2 />
              Synchronisation en temps réel
            </div>
            <div>
              <CheckCircle2 />
              Une solution pensée pour la restauration
            </div>
          </div>

          <div className="pda-hero-actions">
            <button
              type="button"
              onClick={goToContact}
              className="pda-btn-primary"
            >
              Demander une démo
              <ArrowRight />
            </button>

            <button
              type="button"
              onClick={goToContact}
              className="pda-btn-secondary"
            >
              Parlons de votre projet
              <ArrowRight />
            </button>
          </div>

          <div className="pda-hero-trust">
            <span>
              <ShieldCheck />
              Solution professionnelle
            </span>
            <span>
              <CheckCircle2 />
              Accompagnement dédié
            </span>
          </div>
        </div>

        <div className="pda-hero-badge">
          <Smartphone />
          <span>
            <strong>La prise de commande</strong>
            <small>En toute mobilité</small>
          </span>
        </div>
      </section>

      {/* LES SOLUTIONS PDA */}
      <section id="solutions" className="pda-section pda-products">
        <div className="pda-container">
          <div className="pda-section-heading">
            <span className="pda-section-tag">Nos solutions</span>
            <h2>
              Une expérience de commande
              <span> simple et connectée</span>
            </h2>
            <div className="pda-heading-line" />
            <p>
              Des outils conçus pour faciliter le travail de vos équipes,
              fluidifier le service et améliorer l'expérience de vos clients.
            </p>
          </div>

          <div className="pda-product-grid">
            {cards.map((card, index) => (
              <article className="pda-product-card" key={card.title}>
                <div className="pda-product-image">
                  <img src={card.img} alt={card.title} loading="lazy" />
                  <span className="pda-product-number">
                    0{index + 1}
                  </span>
                </div>

                <div className="pda-product-content">
                  <h3>{card.title}</h3>
                  <p className="pda-product-subtitle">{card.subtitle}</p>

                  <div className="pda-feature-list">
                    {card.features.map(({ icon: Icon, label }) => (
                      <div className="pda-feature" key={label}>
                        <span className="pda-feature-icon">
                          <Icon />
                        </span>
                        <span>{label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* AVANTAGES */}
      <section className="pda-section pda-advantages">
        <div className="pda-container">
          <div className="pda-section-heading">
            <span className="pda-section-tag">
              Les avantages pour votre établissement
            </span>

            <h2>
              Un service plus fluide
              <span> et plus efficace</span>
            </h2>

            <div className="pda-heading-line" />

            <p>
              Gagnez du temps, simplifiez les opérations et offrez à vos
              clients une expérience de service plus agréable.
            </p>
          </div>

          <div className="pda-adv-grid">
            {advantages.map(({ icon: Icon, color, bg, title, text }) => (
              <article className="pda-adv-card" key={title}>
                <div
                  className="pda-adv-icon"
                  style={{ backgroundColor: bg, color }}
                >
                  <Icon />
                </div>

                <h3>{title}</h3>
                <p>{text}</p>
                <div className="pda-adv-bottom">
                  <CheckCircle2 />
                  <span>Un service optimisé</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SOLUTION CONNECTÉE */}
      <section id="fonctionnement" className="pda-section pda-connected">
        <div className="pda-container">
          <div className="pda-connected-panel">
            <div className="pda-connected-main">
              <span className="pda-section-tag">
                Une solution connectée
              </span>

              <h2 className="pda-connected-title">
                De la table à la cuisine,
                <span> sans délai.</span>
              </h2>

              <p className="pda-connected-description">
                Chaque commande suit un parcours fluide entre le terminal
                mobile, l'écran de cuisine et la caisse CSI. Vos équipes
                travaillent avec des informations synchronisées.
              </p>

              <div className="pda-flow">
                <figure className="pda-flow-item">
                  <div className="pda-flow-image">
                    <img src={quatreImage} alt="Terminal de commande PAD CSI" loading="lazy" />
                  </div>
                  <figcaption>
                    <span>01</span>
                    <strong>Prise de commande</strong>
                    <small>Sur PAD CSI</small>
                  </figcaption>
                </figure>

                <div className="pda-flow-arrow">
                  <ArrowRight />
                </div>

                <figure className="pda-flow-item">
                  <div className="pda-flow-image">
                    <img src={sixImage} alt="Écran de cuisine KDS" loading="lazy" />
                  </div>
                  <figcaption>
                    <span>02</span>
                    <strong>Affichage en cuisine</strong>
                    <small>Sur KDS</small>
                  </figcaption>
                </figure>

                <div className="pda-flow-arrow">
                  <ArrowRight />
                </div>

                <figure className="pda-flow-item">
                  <div className="pda-flow-image">
                    <img src={cinqImage} alt="Caisse CSI" loading="lazy" />
                  </div>
                  <figcaption>
                    <span>03</span>
                    <strong>Intégration à la caisse</strong>
                    <small>CSI</small>
                  </figcaption>
                </figure>
              </div>
            </div>

            <aside className="pda-services">
              <div className="pda-services-heading">
                <span className="pda-section-tag">À vos côtés</span>
                <h3>Un accompagnement complet</h3>
                <p>De l'installation à la maintenance de votre solution.</p>
              </div>

              {services.map(({ icon: Icon, title, text }) => (
                <div className="pda-service-item" key={title}>
                  <div className="pda-service-icon">
                    <Icon />
                  </div>
                  <div>
                    <strong>{title}</strong>
                    <span>{text}</span>
                  </div>
                </div>
              ))}

              <button
                type="button"
                onClick={goToContact}
                className="pda-service-cta"
              >
                Contactez notre équipe
                <ArrowRight />
              </button>
            </aside>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="pda-final-cta">
        <div className="pda-container">
          <div className="pda-final-cta-inner">
            <div>
              <span className="pda-final-label">
                Optimisez votre service
              </span>
              <h2>
                Prêt à passer à une prise de commande plus efficace ?
              </h2>
              <p>
                Découvrez comment la solution PDA CSI peut s'intégrer à
                votre établissement et simplifier le quotidien de vos équipes.
              </p>
            </div>

            <button
              type="button"
              onClick={goToContact}
              className="pda-btn-primary pda-final-button"
            >
              Parlons de votre projet
              <ArrowRight />
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
