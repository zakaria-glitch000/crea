import React from 'react';
import { ShieldCheck, ArrowLeft, Lock, Server, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import nfImage from '../assets/nfpage.png';
export function Nf525Page() {
  return (
    <div className="min-h-screen bg-slate-50 py-16 lg:py-24">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        
        {/* Back button */}
        <div className="mb-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-brand-600 transition-colors hover:text-brand-700"
          >
            <ArrowLeft className="h-4 w-4" />
            Retour à l'accueil
          </Link>
        </div>

        {/* Header Card */}
        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/50 lg:p-12">
          <div className="flex flex-col md:flex-row items-center gap-8 border-b border-slate-100 pb-10">
            <div className="flex h-36 w-48 flex-shrink-0 items-center justify-center rounded-2xl bg-slate-50 border border-slate-100 p-4 shadow-sm">
              <img 
                src={nfImage} 
                alt="Certification NF525" 
                className="max-h-full max-w-full object-contain"
              />
            </div>
            <div className="space-y-3 text-center md:text-left">
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-700">
                <ShieldCheck className="h-3.5 w-3.5 text-brand-600" />
                Conformité Légale & Fiscale
              </div>
              <h1 className="font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Tout savoir sur la certification NF525
              </h1>
              <p className="text-base text-slate-500">
                La norme obligatoire pour sécuriser votre système de caisse et garantir votre conformité face aux lois de finances.
              </p>
            </div>
          </div>

          {/* Main content */}
          <div className="mt-10 space-y-8 text-slate-600 leading-relaxed">
            
            <section className="space-y-4">
              <h2 className="font-display text-xl font-bold text-slate-900">
                Qu'est-ce que la certification NF525 ?
              </h2>
              <p>
                La norme <strong>NF525</strong> est la certification française de référence créée pour encadrer et sécuriser les systèmes de caisse. Délivrée par l'AFNOR (ou des organismes accrédités), elle atteste que votre logiciel de caisse respecte strictement les conditions d'<strong>inaltérabilité, de sécurisation, de conservation et d'archivage</strong> des données d'encaissement.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-display text-xl font-bold text-slate-900">
                Ce que dit la loi de finance 
              </h2>
              <p>
                La loi de finance met fin définitivement à l'utilisation de logiciels de caisse auto-certifiés. Désormais, il est <strong>strictement indispensable</strong> d'utiliser une solution de caisse officiellement certifiée par un organisme tiers.
              </p>
              <div className="rounded-2xl border border-amber-200 bg-amber-50/60 p-5 text-amber-900">
                <div className="flex items-start gap-3">
                  <span className="text-xl">⚠️</span>
                  <p className="text-sm">
                    <strong>Attention aux contrôles fiscaux :</strong> En cas de contrôle, l'absence de certificat NF525 valide expose l'entreprise à de lourdes amendes et remet en cause la comptabilité entière de la société.
                  </p>
                </div>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="font-display text-xl font-bold text-slate-900">
                Les 4 piliers fondamentaux de la norme NF525
              </h2>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 pt-2">
                {[
                  { title: "Inaltérabilité", desc: "Impossibilité de modifier ou supprimer une vente en cachette.", icon: Lock },
                  { title: "Sécurisation", desc: "Signature électronique de chaque ticket et opération enregistrée.", icon: ShieldCheck },
                  { title: "Conservation", desc: "Archivage automatique et sécurisé des données sur 6 ans minimum.", icon: Server },
                  { title: "Traçabilité", desc: "Piste d'audit complète de tous les mouvements et actions sur la caisse.", icon: FileText },
                ].map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div key={idx} className="rounded-2xl border border-slate-100 bg-slate-50/60 p-5 space-y-2">
                      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="font-display text-base font-semibold text-slate-900">{item.title}</h3>
                      <p className="text-sm text-slate-500">{item.desc}</p>
                    </div>
                  );
                })}
              </div>
            </section>

            <section className="space-y-4 pt-4 border-t border-slate-100">
              <h2 className="font-display text-xl font-bold text-slate-900">
                Soyez 100% serein avec notre solution
              </h2>
              <p>
                Notre solution intègre nativement toutes les exigences de la norme NF525. Vous profitez d'une caisse à la fois ultra-rapide, moderne et totalement protégée contre les risques fiscaux.
              </p>
            </section>

            {/* CTA Box */}
            <div className="mt-10 rounded-2xl bg-brand-500 p-8 text-center text-white shadow-xl shadow-brand-500/20">
              <h3 className="font-display text-2xl font-bold">Prêt à sécuriser votre commerce ?</h3>
              <p className="mt-2 text-brand-100 text-sm max-w-xl mx-auto">
                Passez dès aujourd'hui à une solution certifiée et évitez tout risque lors de vos futurs contrôles.
              </p>
              <div className="mt-6">
                <a
                  href="/#contact"
                  className="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-3.5 text-sm font-semibold text-slate-900 transition-all hover:bg-slate-100"
                >
                  Demander une démo gratuite
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}