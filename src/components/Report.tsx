import React from "react";
import {
  BarChart3, Clock, Smartphone, ShieldCheck, AlertCircle, RotateCcw, Gift,
  CalendarDays, Star, CreditCard, Share2, Send, Laptop, Tablet, Check,
} from "lucide-react";

const ORANGE = "#f26a14";
const NAVY = "#0f1b4c";

const Icon = ({ color, children }) => (
  <div className="w-11 h-11 rounded-full flex items-center justify-center text-white shrink-0" style={{ background: color }}>
    {children}
  </div>
);

/* ---------- Mini tables ---------- */
const MiniTable = ({ title, color, heads, rows, redCol }) => (
  <div className="bg-white border border-slate-200 rounded-lg p-2 text-[9px] mt-3">
    <div className="flex items-center gap-1 font-semibold mb-1.5" style={{ color: NAVY }}>
      <span className="w-2.5 h-2.5 rounded-sm" style={{ background: color }} /> {title}
    </div>
    <table className="w-full">
      <thead>
        <tr className="text-slate-500 text-left">{heads.map((h) => <th key={h} className="font-medium pb-1">{h}</th>)}</tr>
      </thead>
      <tbody>
        {rows.map((r, i) => (
          <tr key={i} className="border-t border-slate-100">
            {r.map((c, j) => (
              <td key={j} className={`py-1 ${j === redCol ? "text-red-500" : "text-slate-700"}`}>{c}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const FeatureCard = ({ icon, color, title, text, children }) => (
  <div className="bg-white/80 border border-slate-200 rounded-xl p-4">
    <div className="flex gap-3">
      <Icon color={color}>{icon}</Icon>
      <div>
        <h3 className="font-bold text-[15px]" style={{ color: NAVY }}>{title}</h3>
        <p className="text-[12px] text-slate-500 leading-snug mt-1">{text}</p>
      </div>
    </div>
    {children}
  </div>
);

/* ---------- Mock screens (hero) ---------- */
const Kpi = ({ color, label, value }) => (
  <div className="rounded-md p-2 text-white" style={{ background: color }}>
    <div className="text-[8px] opacity-90">{label}</div>
    <div className="text-[13px] font-bold">{value}</div>
  </div>
);

const Bars = ({ n = 28, colors = ["#2f80ed", "#f26a14", "#22c55e"] }) => (
  <div className="flex items-end gap-[3px] h-24">
    {Array.from({ length: n }).map((_, i) => (
      <div key={i} className="flex-1 rounded-t-sm"
        style={{ height: `${25 + ((i * 37) % 70)}%`, background: colors[i % colors.length] }} />
    ))}
  </div>
);

const Monitor = () => (
  <div className="rounded-lg border-[6px] border-slate-800 bg-white shadow-2xl overflow-hidden w-full">
    <div className="flex">
      <div className="w-[22%] bg-[#6b2fa8] text-white p-2 text-[7px] space-y-2 min-h-[210px]">
        <div className="font-black text-[11px]">CRS</div>
        {["Tableau de Bord", "Clôtures Z", "Ventes", "Règlements", "Comparatif CA", "Journalier"].map((x) => <div key={x}>{x}</div>)}
      </div>
      <div className="flex-1 p-2 bg-slate-50">
        <div className="grid grid-cols-5 gap-1.5">
          <Kpi color="#f59e0b" label="Ventes" value="5 630.50" />
          <Kpi color="#ef4444" label="Annulations" value="35.00" />
          <Kpi color="#7c3aed" label="Retours" value="-275.00" />
          <Kpi color="#22c55e" label="Offerts" value="505.00" />
          <Kpi color="#06b6d4" label="Remises" value="0.00" />
        </div>
        <div className="grid grid-cols-3 gap-1.5 mt-2">
          <div className="rounded-md bg-cyan-500 h-20" />
          <div className="rounded-md bg-pink-500 h-20" />
          <div className="rounded-md bg-green-500 h-20" />
        </div>
        <div className="grid grid-cols-2 gap-1.5 mt-2">
          <div className="rounded-md bg-orange-500 text-white text-[8px] p-2">Ventes du 2026-10-13</div>
          <div className="rounded-md bg-green-500 text-white text-[8px] p-2">Top des ventes</div>
        </div>
      </div>
    </div>
  </div>
);

const Laptop_ = () => (
  <div className="rounded-t-lg border-[5px] border-slate-800 bg-white shadow-xl overflow-hidden">
    <div className="flex">
      <div className="w-[20%] bg-[#6b2fa8] text-white p-1.5 text-[6px] min-h-[150px]">
        <div className="font-black text-[9px] mb-2">CRS</div>
        {["Ventes", "Retours", "Règlements", "Journalier"].map((x) => <div key={x} className="mb-1">{x}</div>)}
      </div>
      <div className="flex-1 p-2 text-[6px]">
        <div className="font-bold text-[9px] mb-1">Ventes</div>
        {Array.from({ length: 9 }).map((_, i) => (
          <div key={i} className="flex justify-between border-b border-slate-100 py-[2px] text-slate-500">
            <span>2026-10-13</span><span>1024{i}</span><span>Burger</span><span>15.00</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const Tablet_ = () => (
  <div className="rounded-xl border-[5px] border-slate-800 bg-white shadow-xl overflow-hidden">
    <div className="flex">
      <div className="w-[16%] bg-[#6b2fa8] min-h-[150px]" />
      <div className="flex-1 p-2">
        <div className="text-[8px] font-bold mb-1">Analyse des ventes</div>
        <Bars n={30} />
        <div className="flex gap-2 mt-2 items-center">
          <div className="flex-1 h-10 bg-slate-100 rounded" />
          <div className="w-12 h-12 rounded-full"
            style={{ background: "conic-gradient(#f59e0b 0 42%, #2f80ed 42% 62%, #22c55e 62% 82%, #ef4444 82%)" }} />
        </div>
      </div>
    </div>
  </div>
);

const Phone = () => (
  <div className="rounded-[22px] border-[5px] border-slate-900 bg-white shadow-2xl overflow-hidden w-[130px]">
    <div className="bg-[#6b2fa8] text-white font-black text-[11px] p-2 text-center">CRS</div>
    {[["#f59e0b", "Ventes", "5 630.50"], ["#ef4444", "Annulations", "35.00"], ["#7c3aed", "Retours", "-275.00"],
      ["#22c55e", "Offerts", "505.00"], ["#06b6d4", "Remises", "0.00"]].map(([c, l, v]) => (
      <div key={l} className="m-1.5 rounded-md text-white p-1.5" style={{ background: c }}>
        <div className="text-[7px]">{l}</div><div className="text-[12px] font-bold">{v}</div>
      </div>
    ))}
  </div>
);

/* ---------- Feature visuals ---------- */
const Donut = ({ stops, size = 110 }) => (
  <div className="rounded-full relative shrink-0" style={{ width: size, height: size, background: `conic-gradient(${stops})` }}>
    <div className="absolute inset-[22%] bg-white rounded-full" />
  </div>
);

export default function OraliReporting() {
  return (
    <div className="max-w-[1024px] mx-auto bg-white text-slate-800 font-sans overflow-hidden">
      {/* ================= HERO ================= */}
      <section className="relative px-8 pt-6 pb-8" style={{ background: "linear-gradient(180deg,#fff 0%,#f7efe6 55%,#e9d9c4 100%)" }}>
        <div className="flex items-center gap-2">
          <svg width="44" height="44" viewBox="0 0 44 44"><path d="M8 38C14 14 30 6 40 4 34 14 26 32 8 38Z" fill={ORANGE} /></svg>
          <div>
            <div className="text-[34px] leading-none tracking-wide" style={{ color: NAVY }}>
              <b className="font-black">ORALI</b> SYSTEMS
            </div>
            <div className="text-[9px] tracking-[0.25em] text-slate-500">SOLUTIONS COMMERCE & RESTAURANT</div>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-4 mt-6">
          <div className="col-span-5">
            <p className="text-[22px] tracking-wide" style={{ color: ORANGE }}>REPORTING CSI</p>
            <h1 className="text-[34px] leading-[1.1] mt-1" style={{ color: NAVY }}>
              <b className="font-extrabold">Toutes les informations de votre activité</b>
              <br /><span className="font-light">au même endroit</span>
            </h1>
            <p className="text-[17px] text-slate-500 leading-snug mt-3 font-light">
              Un suivi complet et détaillé de votre établissement, accessible partout, à tout moment, sur ordinateur, tablette et mobile.
            </p>
          </div>
          <div className="col-span-7 relative"><Monitor />
            <div className="absolute -right-2 top-10 hidden md:block"><Phone /></div>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-4 -mt-10">
          <div className="col-span-5 mt-10 grid grid-cols-4 gap-2 self-end">
            {[
              [<BarChart3 key="a" />, ORANGE, "Vision globale", "de votre activité"],
              [<Clock key="b" />, "#2563eb", "En temps réel", "24h/24 - 7j/7"],
              [<Smartphone key="c" />, "#16a34a", "Accessible", "sur tous vos appareils"],
              [<ShieldCheck key="d" />, "#6d28d9", "Données sécurisées", "en local, sans cloud"],
            ].map(([ic, c, t, s]) => (
              <div key={t} className="bg-white rounded-xl shadow-sm p-2 text-center">
                <div className="mx-auto w-9 h-9 rounded-full flex items-center justify-center text-white" style={{ background: c }}>{ic}</div>
                <div className="text-[10px] font-bold mt-1.5" style={{ color: NAVY }}>{t}</div>
                <div className="text-[8px] text-slate-500">{s}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-12 gap-4 mt-6 items-end">
          <div className="col-span-5"><Laptop_ /><div className="h-2 bg-slate-300 rounded-b-xl" /></div>
          <div className="col-span-5"><Tablet_ /></div>
          <div className="col-span-2" />
        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="px-5 pt-6 pb-4 bg-white">
        <p className="text-[16px] font-medium" style={{ color: ORANGE }}>DES FONCTIONNALITÉS COMPLÈTES</p>
        <h2 className="text-[28px] font-extrabold mb-4" style={{ color: NAVY }}>Un contrôle total de votre établissement</h2>

        <div className="grid grid-cols-4 gap-3">
          <FeatureCard icon={<BarChart3 />} color={ORANGE} title="Ventes détaillées"
            text="Consultez toutes vos ventes en détail : tickets, articles, modes de règlement, TVA…">
            <MiniTable title="Ventes" color="#7c3aed"
              heads={["Date", "Ticket", "Article", "Qté", "Total"]}
              rows={[["2026-10-13", "10346", "Burger", "1", "15.00"], ["2026-10-13", "10346", "Burger", "1", "16.00"],
                ["2026-10-13", "10347", "Salade", "1", "9.00"], ["2026-10-13", "10348", "Dessert", "1", "10.00"]]} />
          </FeatureCard>

          <FeatureCard icon={<AlertCircle />} color="#ef4444" title="Annulations"
            text="Suivez les annulations par article, par utilisateur et par motif.">
            <MiniTable title="Annulations" color="#ef4444"
              heads={["Date", "Ticket", "Article", "Utilisateur", "Montant"]}
              rows={[["2026-10-13", "10348", "Pizza", "Manager", "25.00"], ["2026-10-13", "10348", "Salade", "Manager", "8.00"],
                ["2026-10-13", "10348", "Boisson", "Manager", "12.00"], ["2026-10-13", "10348", "Dessert", "Manager", "6.00"]]} />
          </FeatureCard>

          <FeatureCard icon={<RotateCcw />} color="#7c3aed" title="Retours et pertes"
            text="Analysez les retours, pertes et motifs pour mieux maîtriser vos coûts.">
            <MiniTable title="Retours" color="#7c3aed" redCol={3}
              heads={["Date", "Article", "Quantité", "Montant"]}
              rows={[["2026-10-13", "Burger", "-1", "-15.00"], ["2026-10-13", "Frites", "-1", "-8.00"],
                ["2026-10-13", "Salade", "-2", "-18.00"], ["2026-10-13", "Boisson", "-1", "-5.00"]]} />
          </FeatureCard>

          <FeatureCard icon={<Gift />} color="#22a55a" title="Offres et remises"
            text="Visualisez l'impact de vos offres commerciales et remises sur votre chiffre d'affaires.">
            <MiniTable title="Offerts / remises" color="#22a55a" redCol={3}
              heads={["Date", "Type", "Article", "Montant"]}
              rows={[["2026-10-13", "Offert", "Café", "0.00"], ["2026-10-13", "Remise", "Pizza", "-10.00"],
                ["2026-10-13", "Offert", "Dessert", "0.00"], ["2026-10-13", "Remise", "Menu", "-15.00"]]} />
          </FeatureCard>

          {/* Row 2 */}
          <FeatureCard icon={<CalendarDays />} color="#2563eb" title="Analyse par période"
            text="Comparez votre chiffre d'affaires par jour, semaine, mois ou année.">
            <div className="bg-white border border-slate-200 rounded-lg p-2 mt-3 text-[9px]">
              <div className="font-semibold mb-1" style={{ color: NAVY }}>Comparatif CA</div>
              <div className="flex gap-3 text-slate-500 mb-1">
                <span><i className="inline-block w-2 h-2 bg-blue-600 mr-1" />CA 2026</span>
                <span><i className="inline-block w-2 h-2 bg-orange-400 mr-1" />CA 2025</span>
              </div>
              <Bars n={24} colors={["#2563eb", "#fb923c"]} />
              <div className="flex justify-between text-[7px] text-slate-400 mt-1">
                {["Jan", "Fév", "Mar", "Avr", "Mai", "Juin", "Juil", "Aoû", "Sep", "Oct", "Nov", "Déc"].map((m) => <span key={m}>{m}</span>)}
              </div>
            </div>
          </FeatureCard>

          <FeatureCard icon={<Star />} color={ORANGE} title="Meilleures ventes"
            text="Identifiez vos articles, catégories et menus les plus vendus.">
            <div className="bg-white border border-slate-200 rounded-lg p-2 mt-3 text-[9px]">
              <div className="font-semibold mb-1.5" style={{ color: NAVY }}>Top des ventes</div>
              {[["Burger", 520, 100], ["Pizza", 480, 90], ["Salade", 320, 62], ["Frites", 280, 54], ["Boisson", 250, 48]].map(([n, v, w], i) => (
                <div key={n} className="flex items-center gap-2 py-[5px] border-t border-slate-100">
                  <span className="w-3 text-slate-500">{i + 1}</span>
                  <span className="w-12">{n}</span>
                  <div className="flex-1"><div className="h-2 bg-sky-500" style={{ width: `${w}%` }} /></div>
                  <span className="w-7 text-right">{v}</span>
                </div>
              ))}
            </div>
          </FeatureCard>

          <FeatureCard icon={<CreditCard />} color="#22a55a" title="Ventes par règlement"
            text="Analysez vos encaissements par mode de règlement (espèces, carte, titres, …).">
            <div className="bg-white border border-slate-200 rounded-lg p-2 mt-3 text-[9px]">
              <div className="font-semibold mb-1.5" style={{ color: NAVY }}>Répartition des règlements</div>
              <div className="flex items-center gap-3">
                <Donut size={90} stops="#0ea5e9 0 45%, #f59e0b 45% 75%, #22c55e 75% 90%, #a78bfa 90%" />
                <div className="space-y-1.5 flex-1">
                  {[["#0ea5e9", "CB", "45%"], ["#f59e0b", "Espèces", "30%"], ["#2563eb", "Tickets", "15%"], ["#22c55e", "Autres", "10%"]].map(([c, n, p]) => (
                    <div key={n} className="flex items-center justify-between">
                      <span className="flex items-center gap-1"><i className="w-2 h-2 rounded-full inline-block" style={{ background: c }} />{n}</span>
                      <span>{p}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FeatureCard>

          <FeatureCard icon={<Share2 />} color="#6d28d9" title="Multi-sites"
            text="Pilotez plusieurs points de vente depuis une seule interface.">
            <div className="bg-white border border-slate-200 rounded-lg p-2 mt-3 text-[9px]">
              <div className="font-semibold mb-1.5" style={{ color: NAVY }}>Sélection du point de vente</div>
              <div className="border border-slate-300 rounded px-2 py-1 mb-2 flex justify-between">Tous les établissements <span>⌄</span></div>
              {[["Restaurant Centre", "5 630.50", true], ["Restaurant Plage", "3 240.00", false], ["Café Ville", "2 180.00", false]].map(([n, v, c]) => (
                <div key={n} className="flex items-center justify-between py-1">
                  <span className="flex items-center gap-1.5">
                    <i className={`w-3 h-3 rounded-sm border inline-flex items-center justify-center ${c ? "bg-blue-600 border-blue-600 text-white" : "border-slate-300"}`}>{c && <Check size={9} />}</i>{n}
                  </span><span>{v}</span>
                </div>
              ))}
              <div className="flex justify-between font-bold border-t border-slate-200 pt-1 mt-1"><span>Total Général</span><span>11 050.50</span></div>
            </div>
          </FeatureCard>
        </div>
      </section>

      {/* ================= FOOTER BAND ================= */}
      <section className="grid grid-cols-12 gap-4 px-5 pt-2 pb-8 items-center">
        <div className="col-span-5 relative rounded-r-3xl text-white flex items-center overflow-hidden min-h-[200px]" style={{ background: ORANGE }}>
          <div className="w-[38%] p-3">
            <div className="bg-white text-slate-700 rounded-2xl p-2 text-[8px] -rotate-6 shadow-xl leading-snug">
              <div className="bg-green-500 text-white rounded-full w-7 h-7 flex items-center justify-center mb-1 font-bold">W</div>
              <b>Rapport journalier</b><br />13/10/2026<br />CA : 5 630.50 DH<br />Annulations : 35.00 DH<br />Retours : -275.00 DH<br />Top article : Burger
            </div>
          </div>
          <div className="flex-1 pr-4 py-4 flex gap-2">
            <Send className="shrink-0 mt-1 opacity-90" size={30} />
            <div>
              <h3 className="font-bold text-[19px] leading-tight">Recevez vos rapports sur WhatsApp</h3>
              <p className="text-[12px] mt-2 opacity-95 leading-snug">Recevez automatiquement vos rapports quotidiens ou horaires directement sur WhatsApp.</p>
            </div>
          </div>
        </div>

        <div className="col-span-4 text-center">
          <p className="text-[14px] font-medium text-left" style={{ color: ORANGE }}>ACCESSIBLE PARTOUT</p>
          <h3 className="text-[22px] font-extrabold text-left mb-3" style={{ color: NAVY }}>Sur tous vos appareils</h3>
          <div className="flex justify-around" style={{ color: ORANGE }}>
            {[[Laptop, "Ordinateur"], [Tablet, "Tablette"], [Smartphone, "Mobile"]].map(([I, l]) => (
              <div key={l}><I size={44} strokeWidth={1.5} className="mx-auto" /><div className="text-[12px] text-slate-600 mt-2">{l}</div></div>
            ))}
          </div>
        </div>

        <div className="col-span-3 rounded-2xl bg-orange-50/60 p-3">
          <div className="flex gap-2 items-start">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center text-white shrink-0" style={{ background: ORANGE }}><ShieldCheck /></div>
            <div>
              <div className="text-[11px] font-semibold" style={{ color: ORANGE }}>SOLUTION SÉCURISÉE</div>
              <div className="text-[13px] font-bold leading-tight" style={{ color: NAVY }}>Sans cloud et sans abonnement</div>
            </div>
          </div>
          <ul className="mt-3 space-y-1.5 text-[11px] text-slate-600">
            {["Vos données restent sur votre serveur", "Accès local ou à distance sécurisé", "Aucun abonnement", "Une solution performante et fiable"].map((t) => (
              <li key={t} className="flex gap-1.5"><Check size={14} className="shrink-0" style={{ color: ORANGE }} />{t}</li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}