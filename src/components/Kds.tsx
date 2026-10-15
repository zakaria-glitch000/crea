import React from "react";
import {
  Timer,
  ChefHat,
  FileX2,
  CircleCheck,
  ListChecks,
  Clock,
  Monitor,
  ArrowLeftRight,
  Settings,
  Users,
  Headset,
  Wrench,
  ArrowRight,
} from "lucide-react";
import "./Kds.css";

import heads from "@/assets/9.jpeg";
import deux from "@/assets/11.jpeg";
import trois from "@/assets/10.jpeg";
import caisseImage from "@/assets/0.jpg";
import borneImage from "@/assets/1.jpg";
import padImage from "@/assets/3.jpg";
import kdsImage from "@/assets/4.jpg";

const benefits = [
  { Icon: Timer, tone: "orange", title: "Gain de temps", text: "Affichage instantané des commandes en cuisine." },
  { Icon: ChefHat, tone: "blue", title: "Meilleure organisation", text: "Priorisation des commandes et suivi en temps réel." },
  { Icon: FileX2, tone: "red", title: "Zéro ticket papier", text: "Plus écologique et plus fiable." },
  { Icon: CircleCheck, tone: "blue", title: "Communication fluide", text: "Connecté à la caisse CSI, aux bornes et aux PAD." },
];

const features = [
  { Icon: ListChecks, tone: "orange", title: "Affichage clair des commandes", text: "Par table ou par chronologie avec code couleur." },
  { Icon: Clock, tone: "blue", title: "Suivi du temps de préparation", text: "Alertes visuelles pour respecter les délais." },
  { Icon: ChefHat, tone: "orange", title: "Hiérarchisation des commandes", text: "Entrées, plats, desserts et menus." },
  { Icon: Monitor, tone: "blue", title: "Gestion multi-postes", text: "Plusieurs écrans selon les postes de cuisine." },
  { Icon: ArrowLeftRight, tone: "orange", title: "Communique avec tout le système", text: "Caisse CSI, bornes et PAD." },
  { Icon: Settings, tone: "blue", title: "Interface simple", text: "Facile à prendre en main pour l’équipe." },
];

const gallery = [
  { img: heads, alt: "Cuisine équipée avec écran KDS et imprimante" },
  { img: deux, alt: "Équipe en cuisine devant l'écran KDS" },
  { img: trois, alt: "Plan de salle affiché sur l'écran KDS" },
];

const flow = [
  { img: caisseImage, label: "Caisse CSI" },
  { img: borneImage, label: "Borne de commande" },
  { img: padImage, label: "PAD de prise de commande" },
  { img: kdsImage, label: "KDS", sub: "Écran cuisine" },
];

const support = [
  { Icon: Settings, title: "Installation et paramétrage", text: "Par nos techniciens" },
  { Icon: Users, title: "Formation des équipes", text: "Utilisation simple et rapide" },
  { Icon: Headset, title: "Assistance technique", text: "À distance ou sur site" },
  { Icon: Wrench, title: "Suivi et maintenance", text: "Pour une utilisation en toute sérénité" },
];

function Logo() {
  return (
    <div className="kds-logo" aria-label="ORALI SYSTEMS">
  
      <div>
      
      </div>
    </div>
  );
}

export default function KdsPage() {
  return (
    <main className="kds-page">
      {/* HERO + AVANTAGES (la photo passe derrière les deux) */}
      <div className="kds-top">
        <img
          className="kds-top__bg"
          src={heads}
          alt=""
          aria-hidden="true"
          fetchPriority="high"
        />
        <div className="kds-top__fade" />

        <header className="kds-hero">
          <Logo />
          <p className="kds-eyebrow">KDS – Écran cuisine</p>
          <h1>
            <strong>Une cuisine plus organisée,</strong>
            <span>un service plus rapide</span>
          </h1>
          <p className="kds-hero__text">
            Notre solution KDS simplifie la gestion des commandes en cuisine,
            élimine les tickets papier et améliore la communication entre la
            salle, les bornes, les PAD et la caisse CSI.
          </p>
        </header>

        <section className="kds-benefits" aria-label="Les avantages du KDS">
          {benefits.map(({ Icon, tone, title, text }) => (
            <article className="kds-benefit" key={title}>
              <div className={`kds-benefit__icon kds-tone--${tone}`}>
                <Icon />
              </div>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </section>
      </div>

      <div className="kds-container kds-stack">
        {/* ÉCRAN KDS + FONCTIONNALITÉS */}
        <section className="kds-showcase">
          <div className="kds-showcase__visual">
            <img src={kdsImage} alt="Écran KDS affichant les commandes en cuisine" />
          </div>

          <aside className="kds-features">
            <p className="kds-eyebrow kds-eyebrow--panel">
              Les fonctionnalités du KDS
            </p>
            <ul>
              {features.map(({ Icon, tone, title, text }) => (
                <li key={title} className={`kds-tone-text--${tone}`}>
                  <Icon />
                  <div>
                    <h4>{title}</h4>
                    <p>{text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </aside>
        </section>

        {/* GALERIE */}
        <section className="kds-gallery" aria-label="Le KDS en situation">
          {gallery.map(({ img, alt }) => (
            <figure key={alt}>
              <img src={img} alt={alt} loading="lazy" />
            </figure>
          ))}
        </section>

        {/* SOLUTION COMPLÈTE + ACCOMPAGNEMENT */}
        <section className="kds-bottom">
          <div className="kds-bottom__left">
            <p className="kds-eyebrow kds-eyebrow--small">Une solution complète</p>
            <h2>De la commande à la cuisine, sans délai</h2>

            <div className="kds-flow">
              {flow.map((step, i) => (
                <React.Fragment key={step.label}>
                  <figure className="kds-flow__step">
                    <div className="kds-flow__image">
                      <img src={step.img} alt={step.label} />
                    </div>
                    <figcaption>
                      {step.label}
                      {step.sub && <span>{step.sub}</span>}
                    </figcaption>
                  </figure>
                  {i < flow.length - 1 && (
                    <ArrowRight className="kds-flow__arrow" strokeWidth={2.2} />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          <div className="kds-bottom__right">
            <p className="kds-eyebrow kds-eyebrow--small">Notre accompagnement</p>
            <h2>Installation, formation et support</h2>

            <ul className="kds-support">
              {support.map(({ Icon, title, text }) => (
                <li key={title}>
                  <Icon />
                  <div>
                    <h4>{title}</h4>
                    <p>{text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </main>
  );
}