import React from "react";
import {
  Zap,
  Link2,
  Settings,
  BadgeCheck,
  ShoppingCart,
  Apple,
  Store,
  Fish,
  Croissant,
  Milk,
  Beef,
  Carrot,
  Wrench,
  Users,
  Headphones,
  ArrowRight,
} from "lucide-react";
import "./Zebra.css";

/* ------------------------------------------------------------------
   IMAGES : placez vos fichiers dans /public/images/ avec ces noms
   (ou changez simplement les chemins ci-dessous).
   - logo-orali.png         : logo ORALI SYSTEMS
   - hero-pos-zebra.png     : photo en haut à droite (écran INNOSHOP + imprimante Zebra + bananes)
   - step1-innoshop.png     : écran INNOSHOP
   - step2-zebra.png        : imprimante Zebra avec étiquette
   - step3-etiquette.jpg    : étiquette BANANES collée sur le produit
   - step4-scan.jpg         : scanner qui lit le code-barres
------------------------------------------------------------------- */
const IMG = {
  logo: "/images/logo-orali.png",
  hero: "/src/assets/zebra.jpeg",
  step2: "/src/assets/z1.jpeg",
  step3: "/src/assets/z2.jpeg",
  step1: "/src/assets/inno.jpg",
  step4: "/src/assets/z3.jpeg",
};

/* Code-barres généré en SVG à partir d'une chaîne (rendu décoratif) */
function Barcode({ value = "123456789012", height = 44 }) {
  const bars = [];
  let x = 0;
  for (let i = 0; i < 46; i++) {
    const code = value.charCodeAt(i % value.length) + i * 7;
    const w = (code % 3) + 1;
    if (i % 2 === 0) bars.push(<rect key={i} x={x} y="0" width={w} height={height} />);
    x += w;
  }
  return (
    <svg
      className="barcode"
      viewBox={`0 0 ${x} ${height}`}
      preserveAspectRatio="none"
      height={height}
      aria-hidden="true"
    >
      {bars}
    </svg>
  );
}

const features = [
  {
    icon: <Zap size={44} />,
    tone: "orange",
    title: "Étiquetage rapide",
    text: "Impression instantanée des étiquettes avec codes à barres.",
  },
  {
    icon: <Link2 size={44} />,
    tone: "blue",
    title: "Connexion INNOSHOP",
    text: "Communication directe avec votre logiciel de gestion.",
  },
  {
    icon: <Settings size={36} />,
    tone: "green",
    title: "Informations complètes",
    text: "Prix, poids, référence, libellé, date, etc.",
    row: true,
  },
  {
    icon: <BadgeCheck size={36} />,
    tone: "amber",
    title: "Moins d’erreurs",
    text: "Lecture fiable des codes à barres par un scanner à la caisse.",
    row: true,
  },
];

const steps = [
  {
    img: IMG.step1,
    alt: "Écran INNOSHOP",
    title: "1. Création des articles dans INNOSHOP",
    text: "Saisie des produits, des prix et des informations.",
  },
  {
    img: IMG.step2,
    alt: "Imprimante Zebra",
    title: "2. Impression des étiquettes",
    text: "Depuis INNOSHOP, avec l’imprimante Zebra.",
  },
  {
    img: IMG.step3,
    alt: "Étiquette collée sur le produit",
    title: "3. Étiquette à coller sur le produit",
    text: "Prix, poids, code à barres, libellé, etc.",
  },
  {
    img: IMG.step4,
    alt: "Lecture du code à barres en caisse",
    title: "4. Lecture du code à barres en caisse",
    text: "Le produit est automatiquement retrouvé dans INNOSHOP.",
  },
];

const labels = [
  {
    name: "POMME ROYAL",
    lines: ["Origine : France", "Catégorie : 1"],
    price: "18,90 DH",
    unit: "/kg",
  },
  {
    name: "FILET DE POULET",
    lines: ["Origine : Maroc", "Poids : 1,250 kg"],
    price: "49,90 DH",
  },
  {
    name: "FROMAGE GOUDA",
    lines: ["Poids : 0,320 kg", "Prix / kg : 120,00 DH"],
    price: "38,40 DH",
  },
];

const ideal = [
  { icon: <ShoppingCart size={38} />, color: "#f26a1b", label: "Supermarchés indépendants" },
  { icon: <Apple size={38} />, color: "#22a34a", label: "Épiceries et primeurs", bold: true },
  { icon: <Store size={38} />, color: "#f26a1b", label: "Boucheries et fromageries" },
  { icon: <Fish size={38} />, color: "#2563eb", label: "Poissonneries" },
  { icon: <Croissant size={38} />, color: "#f59e0b", label: "Boulangeries" },
  { icon: <Milk size={38} />, color: "#7c3aed", label: "Produits en vrac" },
  { icon: <Beef size={38} />, color: "#e11d2a", label: "Viandes et charcuteries", bold: true },
  { icon: <Carrot size={38} />, color: "#f26a1b", label: "Produits frais" },
];

const support = [
  { icon: <Wrench size={34} />, label: "Installation et paramétrage" },
  { icon: <Users size={34} />, label: "Formation des équipes" },
  { icon: <Headphones size={34} />, label: "Assistance technique" },
  { icon: <Settings size={34} />, label: "Suivi et maintenance" },
];

export default function OraliFlyer() {
  return (
    <main className="flyer">
      {/* ============ HERO ============ */}
      <section className="hero">
        <img className="hero__bg" src={IMG.hero} alt="Écran INNOSHOP et imprimante Zebra" />
        <div className="hero__content">
          <p className="kicker">IMPRIMANTE DE BALISAGE ZEBRA</p>
          <h1 className="hero__title">
            <strong>Imprimez vos codes-barres,</strong>
            <br />
            scannez et encaissez
            <br />
            en toute simplicité
          </h1>
          <p className="hero__text">
            Notre imprimante Zebra est directement connectée à votre logiciel INNOSHOP pour
            imprimer des étiquettes avec codes à barres (prix, poids, référence…) et faciliter la
            gestion de vos produits.
          </p>
        </div>
      </section>

      {/* ============ FEATURES ============ */}
      <section className="features">
        {features.map((f) => (
          <article key={f.title} className={`feature feature--${f.tone} ${f.row ? "feature--row" : ""}`}>
            <div className={`feature__icon feature__icon--${f.tone}`}>{f.icon}</div>
            <div className="feature__body">
              <h3>{f.title}</h3>
              <p>{f.text}</p>
            </div>
          </article>
        ))}
      </section>

      {/* ============ FONCTIONNEMENT ============ */}
      <section className="how">
        <div className="how__head">
          <div>
            <p className="kicker kicker--orange">UN FONCTIONNEMENT SIMPLE</p>
            <h2>De l’étiquetage à l’encaissement</h2>
          </div>
          <div className="badge">
            <ShoppingCart size={46} strokeWidth={1.6} />
            <div>
              <strong>INNOSHOP</strong>
              <span>Logiciel de gestion Retail</span>
            </div>
          </div>
        </div>

        <div className="steps">
          {steps.map((s, i) => (
            <React.Fragment key={s.title}>
              <article className="step">
                <img src={s.img} alt={s.alt} />
                <h4>{s.title}</h4>
                <p>{s.text}</p>
              </article>
              {i < steps.length - 1 && <ArrowRight className="steps__arrow" size={34} />}
            </React.Fragment>
          ))}
        </div>
      </section>

      {/* ============ EXEMPLES + IDÉAL POUR ============ */}
      <section className="split">
        <div className="panel">
          <h3 className="panel__title">EXEMPLES D’ÉTIQUETTES</h3>
          <div className="labels">
            {labels.map((l) => (
              <div key={l.name} className="label">
                <strong className="label__name">{l.name}</strong>
                {l.lines.map((t) => (
                  <span key={t} className="label__line">{t}</span>
                ))}
                <Barcode />
                <span className="label__code">123456789012</span>
                <span className="label__price">
                  {l.price}
                  {l.unit && <small>{l.unit}</small>}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="panel">
          <h3 className="panel__title">IDÉAL POUR</h3>
          <div className="ideal">
            {ideal.map((it) => (
              <div key={it.label} className="ideal__item">
                <span style={{ color: it.color }}>{it.icon}</span>
                <p className={it.bold ? "is-bold" : ""}>{it.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ SUPPORT ============ */}
      <footer className="support">
        <div className="support__intro">
          <Settings size={62} strokeWidth={1.4} color="#f26a1b" />
          <div>
            <h3>Installation, formation et support</h3>
            <p>
              Notre équipe vous accompagne pour une mise en service rapide et une utilisation en
              toute sérénité.
            </p>
          </div>
        </div>
        <ul className="support__list">
          {support.map((s) => (
            <li key={s.label}>
              {s.icon}
              <span>{s.label}</span>
            </li>
          ))}
        </ul>
      </footer>
    </main>
  );
}