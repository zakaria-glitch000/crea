import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from 'lucide-react';
import { COMPANY } from '@/data/content';
import { Reveal, SectionTag } from './ui/Reveal';

const SERVICE_OPTIONS = [
  'Systèmes de caisse & POS',
  'Logiciels de gestion',
  'Réseau & infrastructure',
  'Sécurité informatique',
  'Solutions matérielles',
  'Solutions personnalisées',
  'Support & maintenance',
];

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative bg-slate-50 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal className="max-w-2xl">
          <SectionTag>Contact</SectionTag>
          <h2 className="mt-6 font-display text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl text-balance">
            Parlons de votre projet.
          </h2>
          <p className="mt-5 text-lg text-slate-500">
            Décrivez-nous vos besoins, nous vous recontactons sous 24h avec une proposition adaptée.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-[1fr_360px]">
          {/* Form */}
          <Reveal delay={0.1}>
            <div className="rounded-2xl border border-slate-200/80 bg-white p-8 lg:p-10">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-16 text-center"
                >
                  <CheckCircle2 className="h-16 w-16 text-emerald-500" />
                  <h3 className="mt-6 font-display text-xl font-semibold text-slate-900">Message envoyé !</h3>
                  <p className="mt-2 text-sm text-slate-500">Nous vous recontactons très rapidement.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <Field label="Nom" name="name" type="text" placeholder="Jean Dupont" required />
                    <Field label="Entreprise" name="company" type="text" placeholder="Votre société" />
                  </div>
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <Field label="Email" name="email" type="email" placeholder="jean@societe.fr" required />
                    <Field label="Téléphone" name="phone" type="tel" placeholder="+33 6 12 34 56 78" />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700">Service</label>
                    <select
                      name="service"
                      className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition-colors focus:border-brand-400"
                    >
                      {SERVICE_OPTIONS.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700">Message</label>
                    <textarea
                      name="message"
                      rows={4}
                      placeholder="Décrivez votre projet en quelques lignes..."
                      className="w-full resize-none rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition-colors focus:border-brand-400"
                    />
                  </div>
                  <button
                    type="submit"
                    className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-brand-500 px-6 py-3.5 text-sm font-semibold text-white transition-all hover:bg-brand-400 hover:shadow-xl hover:shadow-brand-500/30 sm:w-auto"
                  >
                    Envoyer le message
                    <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </form>
              )}
            </div>
          </Reveal>

          {/* Info + map */}
          <Reveal delay={0.2}>
            <div className="space-y-5">
              <div className="rounded-2xl border border-slate-200/80 bg-white p-6">
                <h3 className="font-display text-base font-semibold text-slate-900">Coordonnées</h3>
                <div className="mt-5 space-y-4">
                  <InfoRow icon={MapPin} label="Adresse" value={COMPANY.address} />
                  <InfoRow icon={Phone} label="Téléphone" value={COMPANY.phone} />
                  <InfoRow icon={Mail} label="Email" value={COMPANY.email} />
                  <InfoRow icon={Clock} label="Horaires" value={COMPANY.hours} />
                </div>
              </div>

              {/* Map placeholder */}
              <div className="relative aspect-square overflow-hidden rounded-2xl border border-slate-200/80 bg-slate-50">
                <div className="absolute inset-0 grid-bg-fine opacity-60" />
                <div
                  className="absolute inset-0"
                  style={{
                    background: 'radial-gradient(circle at 50% 50%, rgba(46,123,255,0.08), transparent 70%)',
                  }}
                />
                {/* Fake roads */}
                <svg className="absolute inset-0 h-full w-full" preserveAspectRatio="none">
                  <line x1="0" y1="35%" x2="100%" y2="35%" stroke="rgba(15,23,42,0.06)" strokeWidth="2" />
                  <line x1="0" y1="65%" x2="100%" y2="65%" stroke="rgba(15,23,42,0.06)" strokeWidth="2" />
                  <line x1="30%" y1="0" x2="30%" y2="100%" stroke="rgba(15,23,42,0.06)" strokeWidth="2" />
                  <line x1="70%" y1="0" x2="70%" y2="100%" stroke="rgba(15,23,42,0.06)" strokeWidth="2" />
                </svg>
                {/* Pin */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="relative">
                    <div className="absolute inset-0 animate-ping rounded-full bg-brand-500/30" />
                    <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-brand-500 shadow-lg shadow-brand-500/40">
                      <MapPin className="h-5 w-5 text-white" />
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 rounded-lg border border-slate-200 bg-white/90 px-3 py-2 text-xs text-slate-500 backdrop-blur">
                  {COMPANY.address}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type,
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type: string;
  placeholder: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-slate-700">
        {label}{required && <span className="text-brand-500"> *</span>}
      </label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        required={required}
        className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition-colors focus:border-brand-400"
      />
    </div>
  );
}

function InfoRow({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ElementType;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-start gap-3">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-slate-200 bg-slate-50">
        <Icon className="h-4 w-4 text-brand-600" />
      </div>
      <div>
        <div className="text-xs text-slate-400">{label}</div>
        <div className="mt-0.5 text-sm text-slate-700">{value}</div>
      </div>
    </div>
  );
}
