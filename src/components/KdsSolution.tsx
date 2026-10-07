import {
  ArrowRight,
  ArrowUpRight,
  Bell,
  Check,
  ChefHat,
  Clock3,
  Coffee,
  Monitor,
  PackageCheck,
  PlayCircle,
  RefreshCw,
  ShoppingBag,
  Smartphone,
  Timer,
  Utensils,
  Wifi,
  Zap,
} from 'lucide-react';
import { Link } from 'react-router-dom';


// ============================================================
// TYPES
// ============================================================

type FeatureCardProps = {
  icon: React.ElementType;
  title: string;
  description: string;
  items: string[];
};

type SourceCardProps = {
  icon: React.ElementType;
  title: string;
  description: string;
};


// ============================================================
// FEATURE CARD
// ============================================================

function FeatureCard({
  icon: Icon,
  title,
  description,
  items,
}: FeatureCardProps) {
  return (
    <div className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-xl">
      <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-50 text-brand-600 transition-transform duration-300 group-hover:scale-110">
        <Icon className="h-7 w-7" />
      </div>

      <h3 className="text-xl font-bold text-slate-900">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-7 text-slate-600">
        {description}
      </p>

      <div className="mt-6 space-y-3">
        {items.map((item) => (
          <div
            key={item}
            className="flex items-start gap-3 text-sm text-slate-600"
          >
            <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-600">
              <Check className="h-3.5 w-3.5" />
            </span>

            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}


// ============================================================
// KDS SCREEN MOCKUP
// ============================================================

function KdsScreen() {
  return (
    <div className="relative mx-auto w-full max-w-2xl">
      {/* Glow */}
      <div className="absolute -inset-8 rounded-[3rem] bg-brand-500/10 blur-3xl" />

      {/* Monitor */}
      <div className="relative rounded-[1.8rem] border border-slate-300 bg-slate-950 p-3 shadow-2xl">
        <div className="overflow-hidden rounded-[1.25rem] bg-slate-100">

          {/* Top bar */}
          <div className="flex items-center justify-between border-b border-slate-200 bg-white px-5 py-4">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-600 text-white">
                <ChefHat className="h-5 w-5" />
              </div>

              <div>
                <div className="text-sm font-bold text-slate-900">
                  Cuisine — Production
                </div>
                <div className="text-xs text-slate-500">
                  Service du midi
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-600">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Connecté
            </div>
          </div>

          {/* Filters */}
          <div className="flex gap-2 overflow-hidden border-b border-slate-200 bg-white px-4 py-3">
            <span className="whitespace-nowrap rounded-lg bg-brand-600 px-3 py-1.5 text-xs font-semibold text-white">
              Toutes
            </span>

            <span className="whitespace-nowrap rounded-lg bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-600">
              Chaud
            </span>

            <span className="whitespace-nowrap rounded-lg bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-600">
              Froid
            </span>

            <span className="whitespace-nowrap rounded-lg bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-600">
              Bar
            </span>
          </div>

          {/* Orders */}
          <div className="grid gap-3 p-4 sm:grid-cols-2">

            {/* Order 1 */}
            <div className="rounded-2xl border border-blue-200 bg-white p-4 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold text-slate-900">
                    Commande #1048
                  </span>

                  <div className="mt-1 text-[11px] text-slate-500">
                    Table 12 · Salle
                  </div>
                </div>

                <div className="flex items-center gap-1 rounded-full bg-blue-50 px-2 py-1 text-[10px] font-bold text-blue-600">
                  <Clock3 className="h-3 w-3" />
                  04:18
                </div>
              </div>

              <div className="my-4 h-px bg-slate-100" />

              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-medium text-slate-700">
                    Burger Maison
                  </span>
                  <span className="font-bold text-slate-900">×2</span>
                </div>

                <div className="flex items-center justify-between text-xs">
                  <span className="font-medium text-slate-700">
                    Frites fraîches
                  </span>
                  <span className="font-bold text-slate-900">×2</span>
                </div>

                <div className="flex items-center justify-between text-xs">
                  <span className="font-medium text-slate-700">
                    Salade César
                  </span>
                  <span className="font-bold text-slate-900">×1</span>
                </div>
              </div>

              <button
                type="button"
                className="mt-4 w-full rounded-xl bg-brand-600 py-2.5 text-xs font-bold text-white"
              >
                Démarrer
              </button>
            </div>

            {/* Order 2 */}
            <div className="rounded-2xl border border-amber-200 bg-white p-4 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold text-slate-900">
                    Commande #1049
                  </span>

                  <div className="mt-1 text-[11px] text-slate-500">
                    Borne · Sur place
                  </div>
                </div>

                <div className="flex items-center gap-1 rounded-full bg-amber-50 px-2 py-1 text-[10px] font-bold text-amber-600">
                  <Timer className="h-3 w-3" />
                  08:32
                </div>
              </div>

              <div className="my-4 h-px bg-slate-100" />

              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-medium text-slate-700">
                    Pizza 4 Fromages
                  </span>
                  <span className="font-bold text-slate-900">×1</span>
                </div>

                <div className="flex items-center justify-between text-xs">
                  <span className="font-medium text-slate-700">
                    Pâtes Carbonara
                  </span>
                  <span className="font-bold text-slate-900">×1</span>
                </div>

                <div className="flex items-center justify-between text-xs">
                  <span className="font-medium text-slate-700">
                    Coca-Cola
                  </span>
                  <span className="font-bold text-slate-900">×2</span>
                </div>
              </div>

              <button
                type="button"
                className="mt-4 w-full rounded-xl bg-amber-500 py-2.5 text-xs font-bold text-white"
              >
                En préparation
              </button>
            </div>

            {/* Order 3 */}
            <div className="rounded-2xl border border-red-200 bg-white p-4 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold text-slate-900">
                    Commande #1050
                  </span>

                  <div className="mt-1 text-[11px] text-slate-500">
                    Click & Collect
                  </div>
                </div>

                <div className="flex items-center gap-1 rounded-full bg-red-50 px-2 py-1 text-[10px] font-bold text-red-600">
                  <Bell className="h-3 w-3" />
                  14:27
                </div>
              </div>

              <div className="my-4 h-px bg-slate-100" />

              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-medium text-slate-700">
                    Menu Poulet
                  </span>
                  <span className="font-bold text-slate-900">×3</span>
                </div>

                <div className="flex items-center justify-between text-xs">
                  <span className="font-medium text-slate-700">
                    Frites
                  </span>
                  <span className="font-bold text-slate-900">×3</span>
                </div>
              </div>

              <button
                type="button"
                className="mt-4 w-full rounded-xl bg-red-500 py-2.5 text-xs font-bold text-white"
              >
                Prioritaire
              </button>
            </div>

            {/* Order 4 */}
            <div className="rounded-2xl border border-emerald-200 bg-white p-4 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold text-slate-900">
                    Commande #1047
                  </span>

                  <div className="mt-1 text-[11px] text-slate-500">
                    Table 08 · Salle
                  </div>
                </div>

                <div className="flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-1 text-[10px] font-bold text-emerald-600">
                  <PackageCheck className="h-3 w-3" />
                  Prête
                </div>
              </div>

              <div className="my-4 h-px bg-slate-100" />

              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-medium text-slate-700">
                    Steak Frites
                  </span>
                  <span className="font-bold text-slate-900">×2</span>
                </div>

                <div className="flex items-center justify-between text-xs">
                  <span className="font-medium text-slate-700">
                    Eau minérale
                  </span>
                  <span className="font-bold text-slate-900">×2</span>
                </div>
              </div>

              <button
                type="button"
                className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-500 py-2.5 text-xs font-bold text-white"
              >
                <Check className="h-4 w-4" />
                Prête à servir
              </button>
            </div>
          </div>
        </div>

        {/* Monitor stand */}
        <div className="mx-auto mt-2 h-5 w-32 rounded-b-xl bg-slate-800" />
        <div className="mx-auto h-2 w-48 rounded-full bg-slate-700" />
      </div>
    </div>
  );
}


// ============================================================
// SOURCE CARD
// ============================================================

function SourceCard({
  icon: Icon,
  title,
  description,
}: SourceCardProps) {
  return (
    <div className="group rounded-3xl border border-slate-200 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-50 text-brand-600 transition-transform duration-300 group-hover:scale-110">
        <Icon className="h-7 w-7" />
      </div>

      <h3 className="mt-5 text-lg font-bold text-slate-900">
        {title}
      </h3>

      <p className="mt-2 text-sm leading-6 text-slate-500">
        {description}
      </p>
    </div>
  );
}


// ============================================================
// PAGE
// ============================================================

export function KdsSolution() {
  return (
    <div className="overflow-hidden bg-white">

      {/* ======================================================
          HERO
      ====================================================== */}

      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-brand-50/70 via-white to-white" />

        <div className="absolute left-1/2 top-0 -z-10 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-brand-200/20 blur-3xl" />

        <div className="mx-auto max-w-7xl px-6 pb-20 pt-16 lg:px-8 lg:pb-28 lg:pt-24">
          <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">

            {/* Text */}
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white px-4 py-2 text-sm font-semibold text-brand-700 shadow-sm">
                <Monitor className="h-4 w-4" />
                KDS · Kitchen Display System
              </div>

              <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                Une cuisine plus
                <span className="block text-brand-600">
                  connectée et organisée.
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                Organisez votre production et affichez les commandes en
                temps réel directement sur les écrans de votre cuisine.
                Chaque équipe reçoit les informations dont elle a besoin,
                au bon moment.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="/#contact"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-600/20 transition-all hover:-translate-y-0.5 hover:bg-brand-700"
                >
                  Demander une démo
                  <ArrowRight className="h-4 w-4" />
                </a>

                <a
                  href="#fonctionnement"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-slate-700 transition-all hover:border-brand-200 hover:text-brand-600"
                >
                  Découvrir le fonctionnement
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>

              {/* Trust points */}
              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <Check className="h-4 w-4 text-brand-600" />
                  Temps réel
                </div>

                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <Check className="h-4 w-4 text-brand-600" />
                  Sans papier
                </div>

                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <Check className="h-4 w-4 text-brand-600" />
                  Multi-postes
                </div>
              </div>
            </div>

            {/* Mockup */}
            <div className="relative">
              <KdsScreen />

              {/* Floating badge */}
              <div className="absolute -bottom-5 -left-3 hidden rounded-2xl border border-slate-200 bg-white p-4 shadow-xl sm:block lg:-left-8">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                    <Zap className="h-5 w-5" />
                  </div>

                  <div>
                    <div className="text-xs font-medium text-slate-500">
                      Production
                    </div>
                    <div className="text-sm font-bold text-slate-900">
                      Optimisée en temps réel
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* ======================================================
          INTRO
      ====================================================== */}

      <section
        id="fonctionnement"
        className="border-y border-slate-100 bg-slate-50/70"
      >
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">

          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-brand-600">
              Cuisine connectée
            </span>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Chaque commande au bon poste,
              <span className="text-brand-600"> au bon moment.</span>
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Le KDS centralise les commandes et facilite leur préparation.
              Vos équipes travaillent avec une information claire,
              actualisée et adaptée à chaque poste de production.
            </p>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">

            <FeatureCard
              icon={RefreshCw}
              title="Affichage en temps réel"
              description="Chaque nouvelle commande apparaît instantanément sur les écrans de production."
              items={[
                'Commandes affichées en quelques secondes',
                'Origine visible : salle, borne ou en ligne',
                'Réduction des erreurs liées au papier',
              ]}
            />

            <FeatureCard
              icon={ChefHat}
              title="Zones de production"
              description="Chaque équipe visualise uniquement les produits qui concernent son poste."
              items={[
                'Un écran par zone de production',
                'Filtrage automatique des produits',
                'Configuration flexible des postes',
              ]}
            />

            <FeatureCard
              icon={Timer}
              title="Orchestration & timing"
              description="Suivez les temps de préparation pour synchroniser les différents éléments d'une commande."
              items={[
                'Synchronisation des préparations',
                'Minuteurs et alertes',
                'Gestion des commandes prioritaires',
              ]}
            />

          </div>
        </div>
      </section>


      {/* ======================================================
          WORKFLOW
      ====================================================== */}

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">

          <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">

            {/* Left */}
            <div>
              <span className="text-sm font-semibold uppercase tracking-wider text-brand-600">
                Parcours d'une commande
              </span>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                De la prise de commande
                <span className="block text-brand-600">
                  jusqu'au service.
                </span>
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                Chaque étape de préparation est visible en temps réel,
                permettant aux équipes de cuisine et de salle de rester
                parfaitement coordonnées.
              </p>

              <div className="mt-10 space-y-7">

                {/* Step */}
                <div className="flex gap-4">
                  <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-50 text-brand-600">
                    <Wifi className="h-5 w-5" />
                  </div>

                  <div>
                    <h3 className="font-bold text-slate-900">
                      Réception
                    </h3>

                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      La commande arrive immédiatement sur l'écran
                      correspondant à la zone de production.
                    </p>
                  </div>
                </div>

                {/* Step */}
                <div className="flex gap-4">
                  <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-50 text-brand-600">
                    <PlayCircle className="h-5 w-5" />
                  </div>

                  <div>
                    <h3 className="font-bold text-slate-900">
                      En préparation
                    </h3>

                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      Le cuisinier prend en charge la commande et démarre
                      le suivi de préparation.
                    </p>
                  </div>
                </div>

                {/* Step */}
                <div className="flex gap-4">
                  <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-50 text-brand-600">
                    <Clock3 className="h-5 w-5" />
                  </div>

                  <div>
                    <h3 className="font-bold text-slate-900">
                      Suivi du temps
                    </h3>

                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      Les minuteurs permettent de surveiller les délais
                      et d'identifier rapidement les retards.
                    </p>
                  </div>
                </div>

                {/* Step */}
                <div className="flex gap-4">
                  <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600">
                    <PackageCheck className="h-5 w-5" />
                  </div>

                  <div>
                    <h3 className="font-bold text-slate-900">
                      Prêt à servir
                    </h3>

                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      Une fois la préparation terminée, l'équipe en salle
                      est informée pour assurer le service.
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Right visual */}
            <div className="relative">
              <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6 shadow-xl">

                <div className="mb-5 flex items-center justify-between">
                  <div>
                    <div className="text-sm font-bold text-slate-900">
                      Suivi de production
                    </div>
                    <div className="text-xs text-slate-500">
                      Vue cuisine
                    </div>
                  </div>

                  <div className="rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-600">
                    8 commandes
                  </div>
                </div>

                <div className="space-y-3">

                  <div className="rounded-2xl bg-white p-4 shadow-sm">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-900">
                        #1048 · Table 12
                      </span>

                      <span className="rounded-full bg-blue-50 px-2.5 py-1 text-[10px] font-bold text-blue-600">
                        Nouvelle
                      </span>
                    </div>

                    <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-100">
                      <div className="h-full w-[18%] rounded-full bg-blue-500" />
                    </div>
                  </div>

                  <div className="rounded-2xl bg-white p-4 shadow-sm">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-900">
                        #1049 · Borne
                      </span>

                      <span className="rounded-full bg-amber-50 px-2.5 py-1 text-[10px] font-bold text-amber-600">
                        En cours
                      </span>
                    </div>

                    <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-100">
                      <div className="h-full w-[62%] rounded-full bg-amber-500" />
                    </div>
                  </div>

                  <div className="rounded-2xl bg-white p-4 shadow-sm">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-900">
                        #1050 · Click & Collect
                      </span>

                      <span className="rounded-full bg-red-50 px-2.5 py-1 text-[10px] font-bold text-red-600">
                        En retard
                      </span>
                    </div>

                    <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-100">
                      <div className="h-full w-[92%] rounded-full bg-red-500" />
                    </div>
                  </div>

                  <div className="rounded-2xl bg-white p-4 shadow-sm">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-900">
                        #1047 · Table 08
                      </span>

                      <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-[10px] font-bold text-emerald-600">
                        Prête
                      </span>
                    </div>

                    <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-100">
                      <div className="h-full w-full rounded-full bg-emerald-500" />
                    </div>
                  </div>

                </div>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* ======================================================
          STATUS COLORS
      ====================================================== */}

      <section className="bg-slate-950">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">

          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-brand-400">
              Pilotage visuel
            </span>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Une lecture immédiate de
              <span className="text-brand-400"> l'état des commandes.</span>
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-400">
              Un système visuel simple permet à vos équipes de comprendre
              instantanément quelles commandes nécessitent leur attention.
            </p>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

            {/* Nouvelle */}
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-400">
                <RefreshCw className="h-6 w-6" />
              </div>

              <h3 className="text-lg font-bold text-white">
                Nouvelle
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-400">
                La commande vient d'arriver et attend sa prise en charge.
              </p>
            </div>

            {/* En cours */}
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-500/10 text-amber-400">
                <Timer className="h-6 w-6" />
              </div>

              <h3 className="text-lg font-bold text-white">
                En cours
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-400">
                La préparation est en cours et le temps est suivi.
              </p>
            </div>

            {/* Retard */}
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-red-500/10 text-red-400">
                <Bell className="h-6 w-6" />
              </div>

              <h3 className="text-lg font-bold text-white">
                En retard
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-400">
                Une alerte signale qu'une commande dépasse le délai prévu.
              </p>
            </div>

            {/* Prête */}
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-400">
                <Check className="h-6 w-6" />
              </div>

              <h3 className="text-lg font-bold text-white">
                Prête
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-400">
                Tous les éléments sont terminés et peuvent être envoyés.
              </p>
            </div>

          </div>
        </div>
      </section>


      {/* ======================================================
          SOURCES
      ====================================================== */}

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">

          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-brand-600">
              Commandes centralisées
            </span>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Toutes vos sources de commande
              <span className="block text-brand-600">
                réunies au même endroit.
              </span>
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Salle, bornes, commandes en ligne ou livraison : vos flux
              peuvent être centralisés pour simplifier l'organisation
              de votre production.
            </p>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

            <SourceCard
              icon={Utensils}
              title="Salle"
              description="Commandes provenant de la caisse ou des PDA utilisés par vos équipes."
            />

            <SourceCard
              icon={Monitor}
              title="Bornes"
              description="Commandes autonomes transmises directement au système de production."
            />

            <SourceCard
              icon={Smartphone}
              title="Click & Collect"
              description="Commandes passées en ligne et préparées avant l'arrivée du client."
            />

            <SourceCard
              icon={ShoppingBag}
              title="Livraison"
              description="Centralisation des commandes issues de vos canaux de livraison."
            />

          </div>
        </div>
      </section>


      {/* ======================================================
          BENEFITS
      ====================================================== */}

      <section className="border-y border-slate-100 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">

          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">

            <div>
              <span className="text-sm font-semibold uppercase tracking-wider text-brand-600">
                Optimisé pour vos équipes
              </span>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Plus de visibilité,
                <span className="block text-brand-600">
                  moins de friction en cuisine.
                </span>
              </h2>

              <p className="mt-5 max-w-xl text-lg leading-8 text-slate-600">
                Le KDS transforme la manière dont vos équipes reçoivent,
                priorisent et terminent les commandes.
              </p>

              <div className="mt-8 space-y-4">

                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-100 text-brand-600">
                    <Check className="h-4 w-4" />
                  </div>

                  <div>
                    <div className="font-semibold text-slate-900">
                      Moins d'erreurs
                    </div>
                    <div className="mt-1 text-sm text-slate-600">
                      Les informations sont affichées clairement et au bon poste.
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-100 text-brand-600">
                    <Check className="h-4 w-4" />
                  </div>

                  <div>
                    <div className="font-semibold text-slate-900">
                      Meilleure coordination
                    </div>
                    <div className="mt-1 text-sm text-slate-600">
                      Cuisine et salle partagent une vision commune de l'avancement.
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-100 text-brand-600">
                    <Check className="h-4 w-4" />
                  </div>

                  <div>
                    <div className="font-semibold text-slate-900">
                      Service plus fluide
                    </div>
                    <div className="mt-1 text-sm text-slate-600">
                      Les commandes terminées sont immédiatement identifiées.
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-100 text-brand-600">
                    <Check className="h-4 w-4" />
                  </div>

                  <div>
                    <div className="font-semibold text-slate-900">
                      Production plus organisée
                    </div>
                    <div className="mt-1 text-sm text-slate-600">
                      Chaque poste travaille avec les informations qui lui sont utiles.
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Stats */}
            <div className="grid gap-4 sm:grid-cols-2">

              <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-600">
                  <Zap className="h-6 w-6" />
                </div>

                <div className="mt-6 text-3xl font-bold text-slate-900">
                  Temps réel
                </div>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Les nouvelles commandes apparaissent immédiatement.
                </p>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-600">
                  <ChefHat className="h-6 w-6" />
                </div>

                <div className="mt-6 text-3xl font-bold text-slate-900">
                  Multi-postes
                </div>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Organisez facilement plusieurs zones de production.
                </p>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-600">
                  <Clock3 className="h-6 w-6" />
                </div>

                <div className="mt-6 text-3xl font-bold text-slate-900">
                  Suivi
                </div>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Surveillez les délais de préparation en un coup d'œil.
                </p>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-600">
                  <Coffee className="h-6 w-6" />
                </div>

                <div className="mt-6 text-3xl font-bold text-slate-900">
                  Flexible
                </div>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Adaptez les zones et les flux à votre organisation.
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>


      {/* ======================================================
          CTA
      ====================================================== */}

      <section className="relative overflow-hidden bg-brand-600">
        <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-32 -right-24 h-80 w-80 rounded-full bg-black/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">

          <div className="mx-auto max-w-3xl text-center">

            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white/15 text-white">
              <Monitor className="h-8 w-8" />
            </div>

            <h2 className="mt-7 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Prêt à digitaliser votre cuisine ?
            </h2>

            <p className="mt-5 text-lg leading-8 text-brand-100">
              Découvrez comment une solution KDS peut améliorer
              l'organisation de votre production et fluidifier le service
              de vos équipes.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href="/#contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-7 py-3.5 text-sm font-bold text-brand-700 shadow-lg transition-all hover:-translate-y-0.5 hover:bg-slate-50"
              >
                Demander une démo
                <ArrowRight className="h-4 w-4" />
              </a>

              <Link
                to="/"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 px-7 py-3.5 text-sm font-semibold text-white transition-all hover:bg-white/10"
              >
                Retour à l'accueil
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}