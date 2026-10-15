import React, { useState } from "react";
import {
  Monitor, Settings, ShieldCheck, CheckCircle, Smartphone, Utensils,
  ChefHat, Receipt, TrendingUp, Users, Clock, BarChart2, Coins, Wrench,
  GraduationCap, Headphones, Cog, ArrowRight, X, Phone, Mail, Building,
  User, Check, Minimize2, Sliders, Sparkles, Zap, CreditCard, ShoppingBag
} from "lucide-react";
import borneStandard from "@/assets/b1.jpeg";
import bornePremium from "@/assets/b2.jpeg";
import borneMurale from "@/assets/b3.jpeg";

const products = [
  {
    name: "Borne standard",
    subtitle: "L’essentiel pour commencer",
    screen: '21,5"',
    image: borneStandard,
    description:
      "Une solution intuitive et compacte pour fluidifier la prise de commande.",
    features: [
      { icon: Monitor, text: <>Écran tactile <strong>21,5"</strong></> },
      { icon: Sliders, text: "Design épuré et compact" },
      { icon: ShieldCheck, text: "Paiement intégré en option" },
      { icon: CheckCircle, text: "Installation simple et rapide" },
    ],
    variant: "standard",
  },
  {
    name: "Borne premium",
    subtitle: "Performance et élégance",
    screen: '27"',
    image: bornePremium,
    description:
      "Une expérience grand format adaptée aux établissements à fort trafic.",
    features: [
      { icon: Monitor, text: <>Écran tactile <strong>27"</strong></> },
      { icon: Sliders, text: "Design moderne et élégant" },
      { icon: ShieldCheck, text: "Lecteur de carte bancaire en option" },
      { icon: CheckCircle, text: "Idéale pour les restaurants très fréquentés" },
    ],
    variant: "premium",
  },
  {
    name: "Borne murale",
    subtitle: "Une solution gain de place",
    screen: '21,5"',
    image: borneMurale,
    description:
      "Optimisez votre espace avec une borne discrète et facile d’accès.",
    features: [
      { icon: Monitor, text: <>Écran tactile <strong>21,5"</strong></> },
      { icon: Minimize2, text: "Fixation murale" },
      { icon: ShieldCheck, text: "Design compact et robuste" },
      { icon: CheckCircle, text: "Parfaite pour les espaces restreints" },
    ],
    variant: "wall",
  },
];

const features = [
  { icon: Smartphone, color: "bg-blue-600", title: "Commande autonome", text: "Un parcours client simple et intuitif." },
  { icon: Utensils, color: "bg-orange-500", title: "Menus personnalisables", text: "Options, suppléments et formules selon votre activité." },
  { icon: ChefHat, color: "bg-emerald-500", title: "Transmission en cuisine", text: "Envoi automatique des commandes sur écrans KDS." },
  { icon: Receipt, color: "bg-violet-500", title: "Intégration CSI", text: "Communication directe avec votre caisse et votre gestion." },
  { icon: BarChart2, color: "bg-sky-500", title: "Ventes additionnelles", text: "Mettez en valeur vos plats et offres spéciales." },
];

const benefits = [
  { icon: Users, color: "bg-orange-50 text-orange-600", title: "Améliore l’expérience client", text: "Un service plus rapide et plus fluide." },
  { icon: Clock, color: "bg-blue-50 text-blue-600", title: "Réduit le temps d’attente", text: "Des files moins longues et plus de confort." },
  { icon: TrendingUp, color: "bg-emerald-50 text-emerald-600", title: "Optimise l’organisation", text: "Moins de pression sur le personnel, plus d’efficacité." },
  { icon: Coins, color: "bg-violet-50 text-violet-600", title: "Augmente le panier moyen", text: "Grâce aux suggestions et offres complémentaires." },
];

const supportItems = [
  { icon: Wrench, title: "Installation et paramétrage" },
  { icon: GraduationCap, title: "Formation des équipes" },
  { icon: Headphones, title: "Assistance technique" },
  { icon: Cog, title: "Suivi et maintenance" },
];

function Eyebrow({ children, light = false }) {
  return (
    <span className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-extrabold uppercase tracking-[0.14em] ${
      light ? "border-white/30 bg-white/10 text-white" : "border-blue-100 bg-blue-50 text-blue-700"
    }`}>
      <span className="h-2 w-2 rounded-full bg-orange-500" />
      {children}
    </span>
  );
}

function KioskIllustration({ product }) {
  return (
    <div className="relative flex h-64 items-center justify-center overflow-hidden rounded-2xl border border-slate-100 bg-gradient-to-br from-white via-slate-50 to-blue-50/70">

      {/* Décoration */}
      <div className="absolute -right-8 -top-10 h-36 w-36 rounded-full bg-orange-100/60 blur-2xl" />
      <div className="absolute -bottom-10 -left-8 h-36 w-36 rounded-full bg-blue-100/70 blur-2xl" />

      {/* Image réelle du produit */}
      <img
        src={product.image}
        alt={product.name}
        loading="lazy"
        className="relative z-10 h-full w-full object-contain p-3 transition-transform duration-500 group-hover:scale-105"
      />

      {/* Badge */}
      <div className="absolute bottom-3 left-3 z-20 inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/95 px-3 py-1.5 text-[11px] font-bold text-slate-600 shadow-sm backdrop-blur">
        <span className="h-2 w-2 rounded-full bg-emerald-500" />
        Compatible avec CSI
      </div>
    </div>
  );
}

function KioskScreen({ tall }) {
  return (
    <div className={`relative w-28 rounded-xl border-[5px] border-slate-800 bg-slate-900 p-1.5 shadow-xl ${tall ? "h-44" : "h-36"}`}>
      <div className="flex h-full flex-col overflow-hidden rounded-md bg-white p-1.5">
        <div className="mb-2 flex items-center justify-between rounded bg-orange-500 px-1.5 py-1">
          <span className="text-[7px] font-black text-white">ORALI MENU</span>
          <span className="h-1 w-3 rounded bg-white/70" />
        </div>
        <div className="mb-2 grid grid-cols-2 gap-1">
          {["🍔", "🍟", "🥤", "🍕"].map((item, i) => (
            <div key={i} className="flex h-9 items-center justify-center rounded-md bg-slate-100 text-sm">{item}</div>
          ))}
        </div>
        <div className="mt-auto flex items-center justify-between rounded bg-blue-50 px-1.5 py-1">
          <span className="text-[6px] font-bold text-slate-600">Votre commande</span>
          <span className="rounded bg-blue-600 px-1 py-0.5 text-[6px] font-bold text-white">OK</span>
        </div>
      </div>
      <div className="absolute -right-3 top-16 h-9 w-5 rounded-md border border-slate-500 bg-slate-950 shadow-md">
        <div className="mx-auto mt-1 h-1.5 w-2.5 rounded-sm bg-emerald-400" />
        <div className="mx-auto mt-1 h-3 w-3 rounded-sm bg-slate-700" />
      </div>
    </div>
  );
}

export default function BornesCommande() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState("devis");
  const [selectedProduct, setSelectedProduct] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleOpenModal = (type, product = "") => {
    setModalType(type);
    setSelectedProduct(product);
    setFormSubmitted(false);
    setModalOpen(true);
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    window.setTimeout(() => {
      setModalOpen(false);
      setFormSubmitted(false);
    }, 2200);
  };

  const goToContact = () => {
    window.location.href = "/#contact";
  };

  return (
    <main className="min-h-screen overflow-hidden bg-white font-sans text-slate-800 antialiased selection:bg-orange-500 selection:text-white">
      <section className="relative isolate flex min-h-[650px] items-center overflow-hidden bg-gradient-to-br from-white via-slate-50 to-sky-50 pt-24 sm:min-h-[700px]">
        <div
          className="absolute inset-0 -z-30 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=2000&q=85')" }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 -z-20 bg-gradient-to-r from-white/95 via-white/85 to-white/35" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-slate-100/70 via-transparent to-white/10" />
        <div className="pointer-events-none absolute -left-28 top-24 -z-10 h-80 w-80 rounded-full bg-blue-200/30 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 right-0 -z-10 h-80 w-80 rounded-full bg-orange-200/30 blur-3xl" />

        <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
          <div className="max-w-4xl">
            <Eyebrow>Bornes de commande</Eyebrow>
            <h1 className="mt-6 max-w-4xl text-4xl font-black leading-[1.1] tracking-tight text-slate-900 sm:text-5xl md:text-6xl lg:text-7xl">
              Simplifiez la prise de commande.
              <span className="mt-3 block bg-gradient-to-r from-blue-600 via-sky-500 to-orange-500 bg-clip-text text-transparent">
                Améliorez l’expérience client.
              </span>
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg sm:leading-9">
              Des bornes interactives modernes et intuitives, parfaitement intégrées à votre solution d’encaissement CSI pour une gestion fluide et performante de votre établissement.
            </p>
            <div className="mt-8 grid max-w-2xl grid-cols-1 gap-3 sm:grid-cols-2">
              {[
                "Commandes simples et autonomes",
                "Connexion fluide avec votre caisse",
                "Une expérience adaptée à votre établissement",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 text-sm font-semibold leading-6 text-slate-700">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                    <CheckCircle className="h-4 w-4" />
                  </span>
                  {item}
                </div>
              ))}
            </div>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <button onClick={() => handleOpenModal("devis")} className="group inline-flex items-center justify-center gap-3 rounded-xl bg-orange-500 px-7 py-4 text-sm font-bold text-white shadow-lg shadow-orange-500/20 transition-all duration-300 hover:-translate-y-1 hover:bg-orange-600 hover:shadow-xl">
                Demander un devis <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
              <button onClick={() => handleOpenModal("demo")} className="group inline-flex items-center justify-center gap-3 rounded-xl border border-slate-200 bg-white px-7 py-4 text-sm font-bold text-slate-700 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700">
                Demander une démo <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
            <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 border-t border-slate-200 pt-6 text-sm text-slate-600">
              <span className="inline-flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-blue-600" /> Solution intégrée à CSI</span>
              <span className="inline-flex items-center gap-2"><CheckCircle className="h-4 w-4 text-blue-600" /> Installation et accompagnement</span>
            </div>
          </div>
        </div>
        <div className="absolute bottom-7 right-7 hidden items-center gap-3 rounded-2xl border border-slate-200 bg-white/90 px-4 py-3 text-sm text-slate-700 shadow-lg backdrop-blur-lg md:flex">
          <ShoppingBag className="h-5 w-5 text-blue-600" />
          <span>Commande · Encaissement · Performance</span>
        </div>
      </section>

      <section className="scroll-mt-24 bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <Eyebrow>Nos solutions</Eyebrow>
            <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">Choisissez la borne adaptée à votre activité</h2>
            <div className="mx-auto my-4 h-1 w-14 rounded-full bg-orange-500" />
            <p className="leading-7 text-slate-600">Trois configurations pour améliorer le parcours de commande et répondre aux contraintes de votre espace.</p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <article key={product.name} className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-900/5 sm:p-6">
                <KioskIllustration product={product} />
                <div className="mt-6 flex-1">
                  <div className="mb-2 inline-flex rounded-full bg-blue-50 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-blue-700">{product.screen} tactile</div>
                  <h3 className="text-xl font-extrabold tracking-tight text-slate-900 transition-colors group-hover:text-blue-700">{product.name}</h3>
                  <p className="mt-1 text-sm font-semibold text-slate-500">{product.subtitle}</p>
                  <p className="mt-4 text-sm leading-7 text-slate-600">{product.description}</p>
                  <ul className="mt-5 space-y-3 border-t border-slate-100 pt-5 text-sm text-slate-700">
                    {product.features.map((feature, i) => {
                      const Icon = feature.icon;
                      return <li key={i} className="flex items-start gap-3"><Icon className="mt-0.5 h-4 w-4 shrink-0 text-blue-600" /><span>{feature.text}</span></li>;
                    })}
                  </ul>
                </div>
                <button onClick={() => handleOpenModal("devis", product.name)} className="group/button mt-7 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-orange-500 px-5 py-3.5 text-sm font-bold text-white shadow-md shadow-orange-500/15 transition-all hover:-translate-y-0.5 hover:bg-orange-600">
                  Demander un devis <ArrowRight className="h-4 w-4 transition-transform group-hover/button:translate-x-1" />
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-slate-100 bg-slate-50/80 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <Eyebrow>Une solution complète</Eyebrow>
            <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">Une seule solution, les mêmes avantages</h2>
            <div className="mx-auto my-4 h-1 w-14 rounded-full bg-orange-500" />
            <p className="leading-7 text-slate-600">Quel que soit le modèle, profitez de fonctionnalités pensées pour simplifier le quotidien de vos équipes.</p>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {features.map((item) => {
              const Icon = item.icon;
              return <div key={item.title} className="group rounded-2xl border border-slate-200/80 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className={`mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl ${item.color} text-white shadow-md transition-transform group-hover:scale-105`}><Icon className="h-6 w-6" /></div>
                <h3 className="text-sm font-extrabold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-500">{item.text}</p>
              </div>;
            })}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="mb-10 max-w-2xl">
            <Eyebrow>Les avantages pour votre établissement</Eyebrow>
            <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">Un service plus rapide, une gestion plus efficace</h2>
            <div className="my-4 h-1 w-14 rounded-full bg-orange-500" />
            <p className="leading-7 text-slate-600">Offrez plus d’autonomie à vos clients tout en gardant une vue claire sur votre activité.</p>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((item) => {
              const Icon = item.icon;
              return <div key={item.title} className="group flex items-start gap-4 rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
                <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${item.color}`}><Icon className="h-5 w-5" /></div>
                <div><h3 className="font-bold text-slate-900">{item.title}</h3><p className="mt-2 text-sm leading-6 text-slate-500">{item.text}</p></div>
              </div>;
            })}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-br from-white via-slate-50 to-sky-50/70 py-20 sm:py-24">
        <div className="pointer-events-none absolute -left-32 top-10 h-80 w-80 rounded-full bg-sky-100/70 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 right-0 h-80 w-80 rounded-full bg-orange-100/60 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="relative overflow-hidden rounded-[1.75rem] border border-white bg-white p-2 shadow-2xl shadow-blue-900/10">
              <div className="relative h-[340px] overflow-hidden rounded-[1.35rem] sm:h-[460px]">
                <img src="/src/assets/b4.jpeg" alt="Accompagnement et installation de solutions de commande" className="h-full w-full object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/10 to-white/5" />
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                  <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-2 text-xs font-semibold text-white backdrop-blur-md"><span className="h-2 w-2 rounded-full bg-emerald-400" /> ORALI SYSTEMS</div>
                  <h3 className="max-w-md text-2xl font-black leading-tight text-white sm:text-3xl">Votre partenaire, de l’installation au quotidien.</h3>
                  <p className="mt-3 max-w-md text-sm leading-6 text-slate-200">Une équipe à vos côtés pour déployer votre solution en toute sérénité.</p>
                </div>
              </div>
            </div>
            <div>
              <Eyebrow>Notre accompagnement</Eyebrow>
              <h2 className="mt-5 text-3xl font-black leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">Installation, formation et support</h2>
              <div className="my-5 h-1 w-14 rounded-full bg-orange-500" />
              <p className="max-w-xl text-base leading-8 text-slate-600">Notre équipe technique vous accompagne à chaque étape pour une mise en service rapide et une utilisation en toute sérénité.</p>
              <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-2">
                {supportItems.map((item) => {
                  const Icon = item.icon;
                  return <div key={item.title} className="flex items-start gap-3 rounded-xl border border-slate-200/80 bg-white p-4 shadow-sm transition-all hover:border-blue-200 hover:shadow-md">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600"><Icon className="h-5 w-5" /></div>
                    <span className="pt-1 text-sm font-bold leading-5 text-slate-800">{item.title}</span>
                  </div>;
                })}
              </div>
              <button onClick={() => handleOpenModal("demo")} className="group mt-8 inline-flex items-center justify-center gap-2 rounded-xl bg-orange-500 px-7 py-4 text-sm font-bold text-white shadow-lg shadow-orange-500/20 transition-all hover:-translate-y-1 hover:bg-orange-600">
                Demander une démonstration <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="scroll-mt-24 bg-slate-50 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12">
            <div className="space-y-6 lg:col-span-5">
              <div><Eyebrow>Contactez-nous</Eyebrow>
                <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">Parlons de <span className="text-blue-600">votre projet</span></h2>
                <div className="my-4 h-1 w-14 rounded-full bg-orange-500" />
                <p className="text-sm leading-7 text-slate-600">Un besoin spécifique ? Notre équipe est à votre écoute pour vous présenter la solution de commande adaptée à votre établissement.</p>
              </div>
              <a href="tel:+212522000000" className="flex items-center gap-4 rounded-xl border border-slate-200/80 bg-white p-4 shadow-sm transition-all hover:border-blue-300 hover:shadow-md">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-white"><Phone className="h-5 w-5" /></span>
                <span><span className="block text-xs font-semibold text-slate-400">Nous contacter par téléphone</span><span className="mt-1 block text-sm font-bold text-slate-800">+212 522 00 00 00</span></span>
              </a>
              <a href="mailto:contact@oralisystems.com" className="flex items-center gap-4 rounded-xl border border-slate-200/80 bg-white p-4 shadow-sm transition-all hover:border-blue-300 hover:shadow-md">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-white"><Mail className="h-5 w-5" /></span>
                <span><span className="block text-xs font-semibold text-slate-400">Nous écrire par email</span><span className="mt-1 block text-sm font-bold text-slate-800">contact@oralisystems.com</span></span>
              </a>
            </div>
            <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-7 shadow-sm sm:p-10 lg:col-span-7">
              <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-blue-100/60 blur-3xl" />
              <div className="relative">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600"><Zap className="h-7 w-7" /></div>
                <h3 className="text-2xl font-bold text-slate-900 sm:text-3xl">Faites évoluer l’expérience de vos clients.</h3>
                <p className="mt-4 max-w-xl text-sm leading-7 text-slate-600 sm:text-base">Découvrez comment les bornes de commande peuvent améliorer le service, fluidifier les commandes et compléter votre solution d’encaissement.</p>
                <div className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-slate-100 bg-slate-50 p-5"><Monitor className="mb-3 h-6 w-6 text-blue-600" /><h4 className="font-bold text-slate-900">Une solution adaptée</h4><p className="mt-2 text-sm leading-6 text-slate-500">Choisissez la configuration qui correspond à votre espace.</p></div>
                  <div className="rounded-xl border border-slate-100 bg-slate-50 p-5"><Headphones className="mb-3 h-6 w-6 text-blue-600" /><h4 className="font-bold text-slate-900">Un accompagnement dédié</h4><p className="mt-2 text-sm leading-6 text-slate-500">Une équipe à vos côtés à chaque étape.</p></div>
                </div>
                <button onClick={() => handleOpenModal("demo")} className="group mt-8 inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition-all hover:-translate-y-0.5 hover:bg-blue-700">
                  Réserver une démonstration <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {modalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-slate-950/60 p-4 backdrop-blur-sm" onMouseDown={(e) => { if (e.target === e.currentTarget) setModalOpen(false); }}>
          <div role="dialog" aria-modal="true" aria-labelledby="request-title" className="relative my-6 w-full max-w-lg rounded-3xl border border-slate-100 bg-white p-6 shadow-2xl sm:p-8">
            <button type="button" onClick={() => setModalOpen(false)} aria-label="Fermer" className="absolute right-5 top-5 rounded-full p-2 text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"><X className="h-5 w-5" /></button>
            {formSubmitted ? (
              <div className="space-y-3 py-8 text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-600"><Check className="h-7 w-7 stroke-[3]" /></div>
                <h3 className="text-xl font-extrabold text-slate-900">Demande transmise !</h3>
                <p className="text-sm leading-6 text-slate-600">Un conseiller ORALI SYSTEMS prendra contact avec vous sous 24h.</p>
              </div>
            ) : (
              <>
                <div className="mb-6 pr-8">
                  <Eyebrow>{modalType === "demo" ? "Démonstration en direct" : "Devis sur mesure"}</Eyebrow>
                  <h3 id="request-title" className="mt-4 text-2xl font-extrabold text-slate-900">{modalType === "demo" ? "Réserver une démo" : "Demander un devis"}</h3>
                  {selectedProduct && <p className="mt-2 text-sm text-slate-500">Modèle : <strong className="text-orange-600">{selectedProduct}</strong></p>}
                </div>
                <form onSubmit={handleSubmitForm} className="space-y-4">
                  <label className="block"><span className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-slate-600">Nom & prénom</span><span className="relative block"><User className="absolute left-3 top-3 h-4 w-4 text-slate-400" /><input type="text" required placeholder="Votre nom" className="w-full rounded-xl border border-slate-200 py-3 pl-10 pr-3 text-sm outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10" /></span></label>
                  <label className="block"><span className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-slate-600">Établissement / restaurant</span><span className="relative block"><Building className="absolute left-3 top-3 h-4 w-4 text-slate-400" /><input type="text" required placeholder="Nom de votre enseigne" className="w-full rounded-xl border border-slate-200 py-3 pl-10 pr-3 text-sm outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10" /></span></label>
                  <label className="block"><span className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-slate-600">Téléphone</span><span className="relative block"><Phone className="absolute left-3 top-3 h-4 w-4 text-slate-400" /><input type="tel" required placeholder="06 XX XX XX XX" className="w-full rounded-xl border border-slate-200 py-3 pl-10 pr-3 text-sm outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10" /></span></label>
                  <label className="block"><span className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-slate-600">Email professionnel</span><span className="relative block"><Mail className="absolute left-3 top-3 h-4 w-4 text-slate-400" /><input type="email" required placeholder="contact@restaurant.com" className="w-full rounded-xl border border-slate-200 py-3 pl-10 pr-3 text-sm outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10" /></span></label>
                  <button type="submit" className="group mt-2 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-orange-500 px-5 py-3.5 text-sm font-extrabold text-white shadow-lg shadow-orange-500/20 transition hover:-translate-y-0.5 hover:bg-orange-600">Envoyer la demande <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></button>
                </form>
                <p className="mt-4 text-center text-xs leading-5 text-slate-400">En envoyant ce formulaire, vous acceptez d’être recontacté au sujet de votre demande.</p>
              </>
            )}
          </div>
        </div>
      )}
    </main>
  );
}
