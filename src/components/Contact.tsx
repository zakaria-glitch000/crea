import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';
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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-slate-50 py-24 lg:py-32"
    >
      {/* Background effects */}
      <div className="pointer-events-none absolute -left-40 top-10 h-80 w-80 rounded-full bg-sky-200/25 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-blue-200/25 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <Reveal className="max-w-2xl">
          <SectionTag>Contact</SectionTag>

          <h2 className="mt-6 text-balance font-display text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Parlons de votre{' '}
            <span className="bg-gradient-to-r from-sky-500 to-blue-700 bg-clip-text text-transparent">
              projet.
            </span>
          </h2>

          <p className="mt-5 max-w-xl text-base leading-8 text-slate-500 sm:text-lg">
            Décrivez-nous vos besoins, nous vous recontactons sous 24h avec
            une proposition adaptée.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 items-start gap-8 lg:grid-cols-[minmax(0,1fr)_360px]">
          {/* Contact form */}
          <Reveal delay={0.1}>
            <div className="group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition-all duration-300 hover:border-sky-200 hover:shadow-xl hover:shadow-blue-900/5 sm:p-8 lg:p-10">
              {/* Animated vertical accent */}
              <div className="absolute left-0 top-0 h-full w-1 origin-top scale-y-0 bg-gradient-to-b from-sky-400 to-blue-600 transition-transform duration-300 group-hover:scale-y-100" />

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, y: 12, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  className="flex flex-col items-center justify-center py-16 text-center"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-emerald-100 bg-emerald-50">
                    <CheckCircle2 className="h-8 w-8 text-emerald-500" />
                  </div>

                  <h3 className="mt-6 font-display text-xl font-semibold text-slate-900">
                    Message envoyé !
                  </h3>

                  <p className="mt-2 max-w-sm text-sm leading-6 text-slate-500">
                    Merci pour votre intérêt. Nous vous recontactons très
                    rapidement.
                  </p>

                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-6 text-sm font-semibold text-blue-600 transition-colors hover:text-sky-500"
                  >
                    Envoyer un autre message
                  </button>
                </motion.div>
              ) : (
                <>
                  <div className="mb-8">
                    <h3 className="font-display text-xl font-semibold text-slate-900">
                      Envoyez-nous un message
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-slate-500">
                      Complétez le formulaire ci-dessous pour nous parler de
                      votre projet.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                      <Field
                        label="Nom"
                        name="name"
                        type="text"
                        placeholder="Jean Dupont"
                        required
                      />

                      <Field
                        label="Entreprise"
                        name="company"
                        type="text"
                        placeholder="Votre société"
                      />
                    </div>

                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                      <Field
                        label="Email"
                        name="email"
                        type="email"
                        placeholder="jean@societe.fr"
                        required
                      />

                      <Field
                        label="Téléphone"
                        name="phone"
                        type="tel"
                        placeholder="+212 6 00 00 00 00"
                      />
                    </div>

                    {/* Service selection */}
                    <div>
                      <label
                        htmlFor="contact-service"
                        className="mb-2 block text-sm font-medium text-slate-700"
                      >
                        Service souhaité
                      </label>

                      <select
                        id="contact-service"
                        name="service"
                        defaultValue={SERVICE_OPTIONS[0]}
                        className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none transition-all duration-300 focus:border-sky-400 focus:ring-4 focus:ring-sky-500/10"
                      >
                        {SERVICE_OPTIONS.map((service) => (
                          <option key={service} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label
                        htmlFor="contact-message"
                        className="mb-2 block text-sm font-medium text-slate-700"
                      >
                        Message
                      </label>

                      <textarea
                        id="contact-message"
                        name="message"
                        rows={5}
                        placeholder="Décrivez votre projet en quelques lignes..."
                        className="w-full resize-y rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm leading-6 text-slate-900 outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-sky-400 focus:ring-4 focus:ring-sky-500/10"
                      />
                    </div>

                    {/* Submit button */}
                    <button
                      type="submit"
                      className="group/button relative inline-flex w-full items-center justify-center gap-3 overflow-hidden rounded-xl bg-gradient-to-r from-sky-500 to-blue-700 px-6 py-4 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-blue-600/30 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2 sm:w-auto"
                    >
                      <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover/button:translate-x-full" />

                      <span className="relative z-10">
                        Envoyer le message
                      </span>

                      <Send className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover/button:translate-x-1" />
                    </button>

                    <p className="text-xs leading-5 text-slate-400">
                      Les informations transmises seront utilisées pour
                      répondre à votre demande.
                    </p>
                  </form>
                </>
              )}
            </div>
          </Reveal>

          {/* Contact details and map */}
          <Reveal delay={0.2}>
            <div className="space-y-5">
              {/* Contact information */}
              <div className="group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition-all duration-300 hover:border-sky-200 hover:shadow-lg hover:shadow-blue-900/5">
                <div className="absolute left-0 top-0 h-full w-1 origin-top scale-y-0 bg-gradient-to-b from-sky-400 to-blue-600 transition-transform duration-300 group-hover:scale-y-100" />

                <h3 className="font-display text-base font-semibold text-slate-900">
                  Nos coordonnées
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Notre équipe est à votre disposition pour vous accompagner.
                </p>

                <div className="mt-6 space-y-2">
                  <InfoRow
                    icon={MapPin}
                    label="Adresse"
                    value={COMPANY.address}
                  />

                  <InfoRow
                    icon={Phone}
                    label="Téléphone"
                    value={COMPANY.phone}
                  />

                  <InfoRow
                    icon={Mail}
                    label="Email"
                    value={COMPANY.email}
                  />

                  <InfoRow
                    icon={Clock}
                    label="Horaires"
                    value={COMPANY.hours}
                  />
                </div>
              </div>

              {/* Map-style location card */}
              <div className="group relative aspect-square overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm transition-all duration-300 hover:border-sky-200 hover:shadow-xl hover:shadow-blue-900/5 sm:aspect-[4/3] lg:aspect-square">
                <div className="pointer-events-none absolute inset-0 bg-slate-50" />
                <div className="pointer-events-none absolute inset-0 grid-bg-fine opacity-60" />

                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(14,165,233,0.12),transparent_65%)]" />

                {/* Decorative roads */}
                <svg
                  className="absolute inset-0 h-full w-full"
                  viewBox="0 0 360 360"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <path
                    d="M-20 95 L380 250"
                    fill="none"
                    stroke="white"
                    strokeWidth="18"
                  />
                  <path
                    d="M-20 95 L380 250"
                    fill="none"
                    stroke="#e2e8f0"
                    strokeWidth="2"
                  />
                  <path
                    d="M80 -20 L230 380"
                    fill="none"
                    stroke="white"
                    strokeWidth="15"
                  />
                  <path
                    d="M80 -20 L230 380"
                    fill="none"
                    stroke="#e2e8f0"
                    strokeWidth="2"
                  />
                  <path
                    d="M300 -20 L115 380"
                    fill="none"
                    stroke="white"
                    strokeWidth="12"
                  />
                  <path
                    d="M300 -20 L115 380"
                    fill="none"
                    stroke="#e2e8f0"
                    strokeWidth="2"
                  />
                </svg>

                {/* Location pin */}
                <div className="absolute left-1/2 top-[42%] -translate-x-1/2 -translate-y-1/2">
                  <div className="relative flex h-14 w-14 items-center justify-center">
                    <div className="absolute inset-0 animate-ping rounded-full bg-sky-400/20" />

                    <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500 to-blue-700 shadow-xl shadow-blue-600/30 transition-transform duration-300 group-hover:scale-110">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                  </div>
                </div>

                {/* Address label */}
                <div className="absolute inset-x-4 bottom-4 rounded-xl border border-slate-200/80 bg-white/95 p-4 shadow-lg backdrop-blur-md">
                  <div className="flex items-start gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-sky-50">
                      <MapPin className="h-4 w-4 text-blue-600" />
                    </div>

                    <div className="min-w-0 flex-1">
                      <p className="text-xs font-semibold text-slate-900">
                        ORALI SYSTEMS
                      </p>
                      <p className="mt-1 break-words text-xs leading-5 text-slate-500">
                        {COMPANY.address}
                      </p>
                    </div>

                    <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-slate-400 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-blue-600" />
                  </div>
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
  required = false,
}: {
  label: string;
  name: string;
  type: string;
  placeholder: string;
  required?: boolean;
}) {
  const id = `contact-${name}`;

  return (
    <div>
      <label
        htmlFor={id}
        className="mb-2 block text-sm font-medium text-slate-700"
      >
        {label}
        {required && <span className="ml-1 text-blue-600">*</span>}
      </label>

      <input
        id={id}
        type={type}
        name={name}
        placeholder={placeholder}
        required={required}
        autoComplete={
          name === 'name'
            ? 'name'
            : name === 'company'
              ? 'organization'
              : name === 'email'
                ? 'email'
                : name === 'phone'
                  ? 'tel'
                  : undefined
        }
        className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition-all duration-300 placeholder:text-slate-400 hover:border-slate-300 focus:border-sky-400 focus:ring-4 focus:ring-sky-500/10"
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
    <div className="group/row flex items-start gap-3 rounded-xl border border-transparent p-2 transition-all duration-300 hover:border-sky-100 hover:bg-sky-50/60">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 transition-all duration-300 group-hover/row:border-sky-200 group-hover/row:bg-gradient-to-br group-hover/row:from-sky-500 group-hover/row:to-blue-600">
        <Icon className="h-4 w-4 text-blue-600 transition-colors duration-300 group-hover/row:text-white" />
      </div>

      <div className="min-w-0 flex-1 pt-0.5">
        <div className="text-xs text-slate-400">{label}</div>
        <div className="mt-1 break-words text-sm leading-6 text-slate-700 transition-colors duration-300 group-hover/row:text-blue-700">
          {value}
        </div>
      </div>
    </div>
  );
}
