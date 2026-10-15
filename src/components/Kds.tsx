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
  { Icon: ListChecks, color: "orange", title: "Affichage clair des commandes", text: "Par table ou par chronologie avec code couleur." },
  { Icon: Clock, color: "blue", title: "Suivi du temps de préparation", text: "Alertes visuelles pour respecter les délais." },
  { Icon: ChefHat, color: "orange", title: "Hiérarchisation des commandes", text: "Entrées, plats, desserts et menus." },
  { Icon: Monitor, color: "blue", title: "Gestion multi-postes", text: "Plusieurs écrans selon les postes de cuisine." },
  { Icon: ArrowLeftRight, color: "orange", title: "Communique avec tout le système", text: "Caisse CSI, bornes et PAD." },
  { Icon: Settings, color: "blue", title: "Interface simple", text: "Facile à prendre en main pour l'équipe." },
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

export default function KdsPage() {
  return (
    <main className="kds-page">
      <header className="kds-hero">
        <div className="kds-hero__image" aria-hidden="true">
          <img src={heads} alt="" />
        </div>
        <div className="kds-hero__overlay" aria-hidden="true" />
        <div className="kds-hero__content">
          <span className="kds-eyebrow">KDS — ÉCRAN CUISINE</span>
          <h1 className="kds-hero__title">
            Une cuisine plus organisée,
            <span>un service plus rapide</span>
          </h1>
          <p className="kds-hero__text">
            Notre solution KDS simplifie la gestion des commandes en cuisine,
            élimine les tickets papier et améliore la communication entre la
            salle, les bornes, les PAD et la caisse CSI.
          </p>
          <a className="kds-hero__link" href="/#contact">
            Découvrir notre solution <ArrowRight size={17} />
          </a>
        </div>
        <span className="kds-hero__badge"><Monitor size={17} /> Kitchen Display System</span>
      </header>

      <section className="kds-benefits" aria-label="Les avantages du KDS">
        {benefits.map(({ Icon, tone, title, text }) => (
          <article className="kds-benefit" key={title}>
            <div className={`kds-benefit__icon kds-tone--${tone}`}><Icon size={24} strokeWidth={2} /></div>
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </section>

      <section className="kds-showcase">
        <div className="kds-showcase__visual">
          <div className="kds-section-label">VISUALISATION EN TEMPS RÉEL</div>
          <img src={kdsImage} alt="Écran KDS affichant les commandes en cuisine" />
          <div className="kds-showcase__caption"><span className="kds-live-dot" /> Une vue claire sur chaque commande</div>
        </div>
        <aside className="kds-features">
          <div className="kds-section-label">LES FONCTIONNALITÉS DU KDS</div>
          <h2>Tout le service en un seul écran</h2>
          <p className="kds-features__intro">Les informations essentielles sont accessibles en un coup d’œil pour aider votre équipe à rester efficace pendant le service.</p>
          <ul>
            {features.map(({ Icon, color, title, text }) => (
              <li key={title}>
                <div className={`kds-feature__icon kds-feature__icon--${color}`}><Icon size={19} strokeWidth={2} /></div>
                <div><h4>{title}</h4><p>{text}</p></div>
              </li>
            ))}
          </ul>
        </aside>
      </section>

      <section className="kds-gallery-section">
        <div className="kds-section-heading">
          <div><div className="kds-section-label">AU CŒUR DE VOTRE CUISINE</div><h2>Un service mieux coordonné</h2></div>
          <p>Une solution pensée pour fluidifier la préparation et la communication entre les équipes.</p>
        </div>
        <div className="kds-gallery">
          <figure><img src={heads} alt="Cuisine équipée avec écran et imprimante" /><figcaption>Une cuisine connectée</figcaption></figure>
          <figure><img src={deux} alt="Équipe en cuisine devant l'écran KDS" /><figcaption>Une équipe bien coordonnée</figcaption></figure>
          <figure><img src={trois} alt="Écran KDS en situation" /><figcaption>Les commandes en un coup d’œil</figcaption></figure>
        </div>
      </section>

      <section className="kds-bottom">
        <div className="kds-bottom__left">
          <div className="kds-section-label">UNE SOLUTION COMPLÈTE</div>
          <h2>De la commande à la cuisine, sans délai</h2>
          <p className="kds-bottom__intro">Vos équipements communiquent entre eux pour transmettre les commandes au bon endroit.</p>
          <div className="kds-flow">
            {flow.map((step, i) => (
              <React.Fragment key={step.label}>
                <figure className="kds-flow__step">
                  <div className="kds-flow__image"><img src={step.img} alt={step.label} /></div>
                  <figcaption>{step.label}{step.sub && <span>{step.sub}</span>}</figcaption>
                </figure>
                {i < flow.length - 1 && <ArrowRight className="kds-flow__arrow" size={18} strokeWidth={2.5} />}
              </React.Fragment>
            ))}
          </div>
        </div>
        <div className="kds-bottom__right">
          <div className="kds-section-label">NOTRE ACCOMPAGNEMENT</div>
          <h2>Installation, formation et support</h2>
          <p className="kds-bottom__intro">Nous vous accompagnons de la mise en place à l’utilisation quotidienne.</p>
          <ul className="kds-support">
            {support.map(({ Icon, title, text }) => (
              <li key={title}>
                <div className="kds-support__icon"><Icon size={18} strokeWidth={2} /></div>
                <div><h4>{title}</h4><p>{text}</p></div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="kds-cta">
        <div className="kds-cta__orb" aria-hidden="true" />
        <div className="kds-cta__content">
          <div className="kds-section-label">OPTIMISEZ VOTRE SERVICE</div>
          <h2>Prêt à connecter votre cuisine ?</h2>
          <p>Contactez notre équipe pour découvrir comment le KDS peut simplifier votre organisation au quotidien.</p>
        </div>
        <a href="/#contact" className="kds-cta__button">Parlons de votre projet <ArrowRight size={17} /></a>
      </section>
    </main>
  );
}
