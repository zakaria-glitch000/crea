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
import heads from '@/assets/9.jpeg';
import deux from '@/assets/11.jpeg';
import trois from '@/assets/10.jpeg';

import caisseImage from '@/assets/0.jpg';
import borneImage from '@/assets/1.jpg';
import padImage from '@/assets/3.jpg';
import kdsImage from '@/assets/4.jpg';

const benefits = [
  {
    Icon: Timer,
    tone: "orange",
    title: "Gain de temps",
    text: "Affichage instantané des commandes en cuisine.",
  },
  {
    Icon: ChefHat,
    tone: "blue",
    title: "Meilleure organisation",
    text: "Priorisation des commandes et suivi en temps réel.",
  },
  {
    Icon: FileX2,
    tone: "red",
    title: "Zéro ticket papier",
    text: "Plus écologique et plus fiable.",
  },
  {
    Icon: CircleCheck,
    tone: "blue",
    title: "Communication fluide",
    text: "Connecté à la caisse CSI, aux bornes et aux PAD.",
  },
];

const features = [
  {
    Icon: ListChecks,
    color: "orange",
    title: "Affichage clair des commandes",
    text: "Par table ou par chronologie avec code couleur.",
  },
  {
    Icon: Clock,
    color: "blue",
    title: "Suivi du temps de préparation",
    text: "Alertes visuelles pour respecter les délais.",
  },
  {
    Icon: ChefHat,
    color: "orange",
    title: "Hiérarchisation des commandes",
    text: "Entrées, plats, desserts et menus.",
  },
  {
    Icon: Monitor,
    color: "blue",
    title: "Gestion multi-postes",
    text: "Plusieurs écrans selon les postes de cuisine.",
  },
  {
    Icon: ArrowLeftRight,
    color: "orange",
    title: "Communique avec tout le système",
    text: "Caisse CSI, bornes et PAD.",
  },
  {
    Icon: Settings,
    color: "blue",
    title: "Interface simple",
    text: "Facile à prendre en main pour l'équipe.",
  },
];

const flow = [
  { img: caisseImage, label: "Caisse CSI" },
  { img: borneImage, label: "Borne de commande" },
  { img: padImage, label: "PAD de prise de commande" },
  { img: kdsImage, label: "KDS", sub: "Écran cuisine" },
];
const support = [
  {
    Icon: Settings,
    title: "Installation et paramétrage",
    text: "Par nos techniciens",
  },
  {
    Icon: Users,
    title: "Formation des équipes",
    text: "Utilisation simple et rapide",
  },
  {
    Icon: Headset,
    title: "Assistance technique",
    text: "À distance ou sur site",
  },
  {
    Icon: Wrench,
    title: "Suivi et maintenance",
    text: "Pour une utilisation en toute sérénité",
  },
];

export default function KdsPage() {
  return (
    <div className="kds-page">
      {/* ================= 1. HERO ================= */}
      <header className="hero">
        <div className="hero__content">
          <br></br>
          <p className="kicker">KDS – ÉCRAN CUISINE</p>
      <h1 className="hero__title">
  <strong className="hero__title-white">
    Une cuisine plus organisée,
  </strong>
  <span>un service plus rapide</span>
</h1>
          <p className="hero__text">
            Notre solution KDS simplifie la gestion des commandes en cuisine,
            élimine les tickets papier et améliore la communication entre la
            salle, les bornes, les PAD et la caisse CSI.
          </p>
        </div>
        <div className="hero__bg" aria-hidden="true">
          <img src={heads} alt="Cuisine KDS" />
        </div>
      </header>

      {/* ================= 2. BÉNÉFICES (4 Blocs en Ligne) ================= */}
      <section className="benefits">
        {benefits.map(({ Icon, tone, title, text }) => (
          <article className="benefit" key={title}>
            <div className={`benefit__icon benefit__icon--${tone}`}>
              <Icon size={26} strokeWidth={2} />
            </div>
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </section>

      {/* ================= 3. ÉCRAN + FONCTIONNALITÉS ================= */}
      <section className="showcase">
        <div className="showcase__screen">
<img
  src={kdsImage}
  alt="Écran KDS affichant les commandes en cuisine"
/>        </div>
        <aside className="features">
          <h2 className="kicker kicker--small">LES FONCTIONNALITÉS DU KDS</h2>
          <ul>
            {features.map(({ Icon, color, title, text }) => (
              <li key={title}>
                <div className={`features__icon-box features__icon-box--${color}`}>
                  <Icon size={20} strokeWidth={2} />
                </div>
                <div>
                  <h4>{title}</h4>
                  <p>{text}</p>
                </div>
              </li>
            ))}
          </ul>
        </aside>
      </section>

      {/* ================= 4. GALERIE (3 Images) ================= */}
      <section className="gallery">
        <img src={heads} alt="Cuisine équipée avec écran et imprimante" />
        <img src={deux} alt="Équipe en cuisine devant l'écran KDS" />
        <img src={trois} alt="Écran KDS Terrasse" />
      </section>

      {/* ================= 5. SOLUTION COMPLÈTE + ACCOMPAGNEMENT ================= */}
      <section className="bottom">
        <div className="bottom__left">
          <p className="kicker kicker--small">UNE SOLUTION COMPLÈTE</p>
          <h2 className="bottom__title">De la commande à la cuisine, sans délai</h2>

          <div className="flow">
            {flow.map((step, i) => (
              <React.Fragment key={step.label}>
                <figure className="flow__step">
                  <div className="flow__img-wrapper">
                    <img src={step.img} alt={step.label} />
                  </div>
                  <figcaption>
                    {step.label}
                    {step.sub && <span>{step.sub}</span>}
                  </figcaption>
                </figure>
                {i < flow.length - 1 && (
                  <ArrowRight className="flow__arrow" size={18} strokeWidth={2.5} />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        <div className="bottom__right">
          <p className="kicker kicker--small">NOTRE ACCOMPAGNEMENT</p>
          <h2 className="bottom__title">Installation, formation et support</h2>
          <ul className="support">
            {support.map(({ Icon, title, text }) => (
              <li key={title}>
                <div className="support__icon-box">
                  <Icon size={18} strokeWidth={2} />
                </div>
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
  );
}