import React, { ReactNode } from "react";
import {
  ShoppingCart, Package, BarChart3, Settings, Tag, Users, Store, Clock,
  ShieldCheck, TrendingUp, Headphones, Calendar, Phone,
  ShoppingBasket, Shirt, Cake, Apple, Sofa, Sparkles, BookOpen,
  User, Euro, Ticket, Boxes,
} from "lucide-react";
import "./Innoshop.css";

/* ================== CHEMINS DES IMAGES ==================
   Les fichiers doivent être dans : public/images/
   Pour changer une image, modifiez juste le chemin ici. */
const IMAGES = {
  hero: "/src/assets/inn.jpg",
  commercante: "/src/assets/commercante.jpg",
  article: "/src/assets/article.jpg",
  supermarche: "/src/assets/sup.jpg",
  boutique: "/src/assets/boutique.jpg",
  boulangerie: "/src/assets/boulangerie.jpg",
  epicerie: "/src/assets/epicerie.jpg",
  bazar: "/src/assets/bazar.jpg",
  parfumerie: "/src/assets/parfumerie.jpg",
  librairie: "/src/assets/librairie.jpg",
  specialise: "/src/assets/commercante.jpg",
  pos: "/images/ecran-caisse.jpg", 
};

/* ---------- Petits composants ---------- */
const Logo = ({ size = "lg" }: { size?: "lg" | "xl" | "inline" }) => (
  <span className={`logo logo-${size}`}>
    INN<span className="logo-o">O</span>SHOP
  </span>
);

const Bullets = ({ items }: { items: string[] }) => (
  <ul className="bullets">
    {items.map((t) => (
      <li key={t}>{t}</li>
    ))}
  </ul>
);

const RedIcon = ({ children, round = true }: { children: ReactNode; round?: boolean }) => (
  <span className={`red-icon ${round ? "round" : ""}`}>{children}</span>
);

/* ---------- Données ---------- */

const heroFeatures = [
  { icon: <ShoppingCart size={22} />, text: "Encaissez facilement" },
  { icon: <Package size={22} />, text: "Gérez vos stocks" },
  { icon: <BarChart3 size={22} />, text: "Suivez votre activité" },
  { icon: <Settings size={22} />, text: "Une solution évolutive adaptée à vos besoins" },
];

const stockRows: (string | number)[][] = [
  ["Eau", 1200, "6,00", "Boissons"],
  ["Lait", 350, "12,00", "Produits laitiers"],
  ["Riz", 180, "15,00", "Épicerie"],
  ["Huile", 95, "25,00", "Épicerie"],
  ["Sucre", 210, "9,00", "Épicerie"],
];

const stores: string[][] = [
  ["Magasin 1", "Casablanca", "12 560"],
  ["Magasin 2", "Rabat", "8 230"],
  ["Magasin 3", "Marrakech", "9 450"],
  ["Magasin 4", "Tanger", "7 690"],
];

const bars = [30, 45, 38, 60, 52, 70, 48, 66, 80, 58, 72, 90];

const features = [
  {
    n: "01", icon: <ShoppingCart size={20} />, title: "Encaissement simple et rapide",
    items: [
      "Interface intuitive et tactile",
      "Gestion des remises et promotions",
      "Fidélité clients",
      "Multiples modes de règlement",
      "Édition de tickets et factures",
    ],
    mock: "pos",
  },
  {
    n: "02", icon: <Package size={20} />, title: "Gestion des stocks et inventaires",
    items: [
      "Suivi des entrées et sorties",
      "Inventaires rapides",
      "Alertes de stock bas",
      "Valorisation du stock",
    ],
    mock: "stock",
  },
  {
    n: "03", icon: <Tag size={20} />, title: "Gestion des articles et des tarifs",
    items: [
      "Création et classification des articles",
      "Gestion des familles et sous-familles",
      "Prix, remises et promotions",
      "Codes-barres et étiquetage",
    ],
    mock: "article",
  },
  {
    n: "04", icon: <Users size={20} />, title: "Gestion et fidélisation clients",
    items: [
      "Fiches clients complètes",
      "Historique des achats",
      "Programmes de fidélité",
      "Remises personnalisées",
      "Suivi des points et avantages",
    ],
    mock: "client",
  },
  {
    n: "05", icon: <BarChart3 size={20} />, title: "Analyse des ventes et reporting",
    items: [
      "Tableaux de bord clairs",
      "Chiffre d'affaires par période",
      "Ventes par article / famille",
      "Rapports détaillés et exportables",
    ],
    mock: "stats",
  },
  {
    n: "06", icon: <Store size={20} />, title: "Gestion multi-points de vente",
    items: [
      "Pilotage multi-magasins",
      "Suivi des ventes par magasin",
      "Gestion centralisée des articles",
      "Accès aux rapports et statistiques",
    ],
    mock: "stores",
  },
];

const whyCards = [
  { icon: <Clock size={24} />, title: "Gagnez du temps", text: "Des encaissements rapides et une gestion simplifiée de vos opérations." },
  { icon: <ShieldCheck size={24} />, title: "Maîtrisez votre activité", text: "Un suivi en temps réel de vos stocks, ventes et performances." },
  { icon: <TrendingUp size={24} />, title: "Développez vos ventes", text: "Des outils pour vos promotions, remises et fidélisation clients." },
  { icon: <Headphones size={24} />, title: "Profitez d'un accompagnement", text: "Installation, formation et assistance technique par des experts." },
];

const trades = [
  { img: IMAGES.supermarche, icon: <ShoppingBasket size={20} />, title: "Supermarchés indépendants", items: ["Gestion multi-rayons", "Encaissement rapide", "Suivi des stocks et inventaires", "Promotions et fidélité", "Rapports détaillés"] },
  { img: IMAGES.boutique, icon: <Shirt size={20} />, title: "Boutiques & prêt-à-porter", items: ["Gestion des tailles et couleurs", "Suivi des collections", "Ventes par caissier", "Gestion des retours et avoirs", "Fidélité et promotions"] },
  { img: IMAGES.boulangerie, icon: <Cake size={20} />, title: "Boulangeries & pâtisseries", items: ["Encaissement rapide", "Gestion des familles produits", "Suivi des ventes par rayon", "Gestion des offres et promotions", "Rapports de ventes détaillés"] },
  { img: IMAGES.epicerie, icon: <Apple size={20} />, title: "Épiceries & alimentation générale", items: ["Gestion complète des articles", "Suivi des stocks en temps réel", "Promotions et remises", "Encaissement simple", "Rapports et statistiques"] },
  { img: IMAGES.bazar, icon: <Sofa size={20} />, title: "Bazar & maison", items: ["Gestion des familles d'articles", "Catalogue multi-familles", "Suivi des ventes par rayon", "Promotions et soldes", "Gestion des retours"] },
  { img: IMAGES.parfumerie, icon: <Sparkles size={20} />, title: "Parfumeries & cosmétiques", items: ["Gestion des marques et gammes", "Suivi des stocks", "Offres et coffrets promotionnels", "Fidélisation clients", "Rapports par catégorie"] },
  { img: IMAGES.librairie, icon: <BookOpen size={20} />, title: "Librairies & papeteries", items: ["Classification par catégories", "Gestion des stocks", "Suivi des ventes par famille", "Codes-barres et étiquetage", "Rapports détaillés"] },
  { img: IMAGES.specialise, icon: <Settings size={20} />, title: "Commerces spécialisés", items: ["Solution flexible et personnalisée", "Gestion des articles sur mesure", "Promotions ciblées", "Suivi des ventes et marges", "Rapports par activité"] },
];

const footerItems = [
  { icon: <Settings size={30} />, title: "Installation et paramétrage", text: "Une mise en place rapide et efficace" },
  { icon: <Users size={30} />, title: "Formation de vos équipes", text: "Une prise en main simple et rapide" },
  { icon: <Headphones size={30} />, title: "Assistance technique", text: "Un support réactif et professionnel" },
  { icon: <BarChart3 size={30} />, title: "Une solution évolutive", text: "Pour accompagner votre croissance" },
];

/* ---------- Mini-maquettes ---------- */



const MockStock = () => (
  <div className="mock">
    <div className="mock-title">Stock des articles</div>
    <table className="mock-table">
      <thead>
        <tr><th>Article</th><th>Stock</th><th>Prix</th><th>Famille</th></tr>
      </thead>
      <tbody>
        {stockRows.map((r) => (
          <tr key={String(r[0])}>
            {r.map((c, i) => <td key={i}>{c}</td>)}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const MockArticle = () => (
  <div className="mock mock-article">
    <div className="mock-title">Fiche article</div>
    <div className="article-body">
      <img className="article-photo" src={IMAGES.article} alt="Jackette slim" />
      <dl>
        <dt>Nom</dt><dd>JACKETTE SLIM</dd>
        <dt>Famille</dt><dd>FASHION</dd>
        <dt>Prix de vente</dt><dd>580,00</dd>
        <dt>Code-barre</dt><dd>1234567890123</dd>
        <dt>Stock</dt><dd>6</dd>
      </dl>
    </div>
  </div>
);

const MockClient = () => (
  <div className="mock mock-client">
    <div className="mock-title">Fiche client</div>
    <div className="client-body">
      <div className="client-avatar"><User size={28} /></div>
      <dl>
        <dt>Nom</dt><dd>Ahmed Benali</dd>
        <dt>Téléphone</dt><dd>06xxxxxxxx</dd>
        <dt>Email</dt><dd>ahmed@email.com</dd>
        <dt>Solde points</dt><dd>320</dd>
        <dt>Remise</dt><dd>5 %</dd>
        <dt>Catégorie</dt><dd>Client fidèle</dd>
      </dl>
    </div>
  </div>
);

const MockStats = () => (
  <div className="mock">
    <div className="mock-title">Statistiques de ventes <span>Ce mois</span></div>
    <div className="chart">
      {bars.map((h, i) => (
        <span key={i} style={{ height: `${h}%` }} />
      ))}
    </div>
    <div className="kpis">
      <div><Euro size={16} color="#16a34a" /><b>125 680 DH</b><small>Chiffre d'affaires</small></div>
      <div><Ticket size={16} color="#f59e0b" /><b>2 350</b><small>Tickets</small></div>
      <div><Boxes size={16} color="#2563eb" /><b>1 248</b><small>Articles vendus</small></div>
    </div>
  </div>
);

const MockStores = () => (
  <div className="mock">
    <div className="mock-title">Mes magasins</div>
    <table className="mock-table">
      <thead>
        <tr><th>Magasin</th><th>Ville</th><th>Statut</th><th>CA du jour</th></tr>
      </thead>
      <tbody>
        {stores.map(([m, v, ca]) => (
          <tr key={m}>
            <td>{m}</td><td>{v}</td>
            <td><span className="dot" /> Ouvert</td>
            <td>{ca}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const mocks: Record<string, ReactNode> = {
  stock: <MockStock />,
  article: <MockArticle />,
  client: <MockClient />,
  stats: <MockStats />,
  stores: <MockStores />,
};

/* ---------- Page ---------- */

export default function InnoShop() {
  return (
    <div className="innoshop">
      {/* HERO */}
      <header className="hero">
        <div className="hero-text">
          <Logo />
          <p className="hero-sub">
            La solution de gestion commerciale<br />pour les professionnels du commerce
          </p>
          <ul className="hero-list">
            {heroFeatures.map((f) => (
              <li key={f.text}>
                <RedIcon>{f.icon}</RedIcon>
                <span>{f.text}</span>
              </li>
            ))}
          </ul>
        </div>
        <img className="hero-visual" src={IMAGES.hero} alt="Caisse INNOSHOP" />
        <div className="red-wave" />
      </header>

      {/* FONCTIONNALITÉS */}
      <section className="section features">
        <h2 className="title">
          Les fonctionnalités majeures d'<Logo size="inline" />
        </h2>
        <p className="subtitle">
          Une solution complète pour simplifier votre gestion et développer votre activité.
        </p>
        <div className="grid-3">
          {features.map((f) => (
            <article className="card feature-card" key={f.n}>
              <div className="card-head">
                <span className="num">{f.n}</span>
                <RedIcon round={false}>{f.icon}</RedIcon>
                <h3>{f.title}</h3>
              </div>
              <Bullets items={f.items} />
              {mocks[f.mock]}
            </article>
          ))}
        </div>
      </section>

      {/* POURQUOI */}
      <section className="why">
        <div className="why-top">
          <div className="why-text">
            <h2>Pourquoi choisir <Logo size="xl" /> ?</h2>
            <p>
              Une solution fiable et performante<br />
              pour accompagner la croissance<br />
              de votre commerce.
            </p>
          </div>
          <img className="why-photo" src={IMAGES.commercante} alt="Commerçante souriante" />
        </div>
        <div className="why-grid">
          {whyCards.map((c) => (
            <div className="card why-card" key={c.title}>
              <RedIcon>{c.icon}</RedIcon>
              <div>
                <h4>{c.title}</h4>
                <p>{c.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* MÉTIERS */}
      <section className="section trades">
        <h2 className="title red-title">
          <Logo size="inline" /> s'adapte à tous <span>les métiers du commerce</span>
        </h2>
        <p className="subtitle">Une solution sur mesure pour chaque type de point de vente.</p>
        <div className="grid-4">
          {trades.map((t) => (
            <article className="trade-card" key={t.title}>
              <img className="trade-img" src={t.img} alt={t.title} />
              <div className="trade-body">
                <h4><RedIcon>{t.icon}</RedIcon>{t.title}</h4>
                <Bullets items={t.items} />
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <div className="cta-text">
          <h2>
            Passez à une gestion plus performante<br />
            avec <Logo size="xl" />
          </h2>
          <p>
            Découvrez comment notre solution peut répondre<br />
            aux besoins de votre commerce.
          </p>
        </div>
        <div className="cta-buttons">
          <a href="#demo" className="btn btn-dark">
            <Calendar size={20} /> Demander une démonstration <span>›</span>
          </a>
          <a href="#contact" className="btn btn-light">
            <Phone size={20} /> Nous contacter
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        {footerItems.map((f) => (
          <div className="footer-item" key={f.title}>
            <span className="footer-icon">{f.icon}</span>
            <div>
              <b>{f.title}</b>
              <small>{f.text}</small>
            </div>
          </div>
        ))}
      </footer>
    </div>
  );
}