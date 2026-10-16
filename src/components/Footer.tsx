import { Linkedin, Twitter, Facebook, ArrowRight, MapPin, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { NAV_LINKS, SOLUTIONS, SERVICES, COMPANY } from '@/data/content';
import { Logo } from './ui/Logo';

const solutionLinks = SOLUTIONS.map((s) => ({
  label: s.title,
  href: '/#NosExpertises',
}));

const serviceLinks = SERVICES.map((s) => ({
  label: s.title,
  href: '/#services',
}));

const OFFICES = [
  {
    title: 'Siège Social Paris',
    name: 'ARTIS Consulting',
    address: ['48 RUE JULES FERRY 92250', 'LA GARENNE-COLOMBES'],
    phone: '+33 7 82 05 40 70',
    email: 'contact@artisconsulting.fr',
  },
  {
    title: 'Service Client Région de Lyon',
    name: null,
    address: null,
    phone: '+33 6 30 21 87 57',
    email: 'sjalal@artisconsulting.fr',
  },
];

export function Footer() {
  return (
    <footer className="relative isolate overflow-hidden border-t border-blue-300/60 bg-gradient-to-br from-sky-300 via-blue-400 to-indigo-500">

      {/* Background effects */}
      <div className="pointer-events-none absolute inset-0 -z-10 grid-bg-fine opacity-20" />

      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-tr from-white/30 via-transparent to-blue-700/20" />

      <div className="pointer-events-none absolute -right-24 -top-32 -z-10 h-96 w-96 rounded-full bg-white/25 blur-3xl" />

      <div className="pointer-events-none absolute -bottom-40 -left-20 -z-10 h-96 w-96 rounded-full bg-sky-200/30 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        {/* Top section */}
        <div className="grid grid-cols-1 gap-12 py-16 lg:grid-cols-[1.5fr_1fr_1fr_1fr_1.2fr] lg:gap-8 lg:py-20">

          {/* Brand */}
          <div>
            <Logo />

            <p className="mt-5 max-w-xs text-sm leading-relaxed text-slate-950">
              Solutions IT, logiciels et systèmes professionnels pour
              entreprises. Conception, déploiement et accompagnement de A à Z.
            </p>

            {/* Social media */}
            <div className="mt-6 flex gap-3">
              {[
                {
                  icon: Linkedin,
                  href: COMPANY.social.linkedin,
                  label: 'LinkedIn',
                },
                {
                  icon: Twitter,
                  href: COMPANY.social.twitter,
                  label: 'Twitter',
                },
                {
                  icon: Facebook,
                  href: COMPANY.social.facebook,
                  label: 'Facebook',
                },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-blue-900/15 bg-white/70 text-slate-950 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-900/30 hover:bg-white hover:shadow-lg"
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <FooterColumn
            title="Navigation"
            links={NAV_LINKS.map((link) => ({
              label: link.label,
              href: link.href.startsWith('#')
                ? `/${link.href}`
                : link.href,
            }))}
          />

          {/* Solutions */}
          <FooterColumn
            title="Solutions"
            links={solutionLinks}
          />

          {/* Services */}
          <FooterColumn
            title="Services"
            links={serviceLinks}
          />

          {/* Newsletter */}
          <div>
            <h4 className="font-display text-sm font-bold text-slate-950">
              Newsletter
            </h4>

            <p className="mt-4 text-sm leading-relaxed text-slate-900">
              Recevez nos actualités et conseils technologiques.
            </p>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-4"
            >
              <div className="flex gap-2">
         

   
              </div>
            </form>
          </div>
        </div>

        {/* Contact / Agences */}
        <div className="grid grid-cols-1 gap-5 border-t border-blue-900/20 py-10 md:grid-cols-2">
          {OFFICES.map((office) => (
            <div
              key={office.title}
              className="rounded-2xl border border-blue-900/10 bg-white/60 p-5 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/80 hover:shadow-lg"
            >
              <h4 className="font-display text-sm font-bold text-slate-950">
                {office.title}
              </h4>

              <ul className="mt-4 space-y-3 text-sm text-slate-900">
                {office.address && (
                  <li className="flex items-start gap-3">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-blue-800" />
                    <span className="leading-relaxed">
                      <span className="font-semibold text-slate-950">
                        {office.name}
                      </span>
                      {office.address.map((line) => (
                        <span key={line} className="block">
                          {line}
                        </span>
                      ))}
                    </span>
                  </li>
                )}

                <li className="flex items-center gap-3">
                  <Phone className="h-4 w-4 shrink-0 text-blue-800" />
                  <a
                    href={`tel:${office.phone.replace(/\s/g, '')}`}
                    className="font-medium transition-colors duration-200 hover:text-white"
                  >
                    {office.phone}
                  </a>
                </li>

                <li className="flex items-center gap-3">
                  <Mail className="h-4 w-4 shrink-0 text-blue-800" />
                  <a
                    href={`mailto:${office.email}`}
                    className="break-all font-medium transition-colors duration-200 hover:text-white"
                  >
                    {office.email}
                  </a>
                </li>
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-blue-900/20 py-6 sm:flex-row">

          <p className="text-center text-sm text-slate-950 sm:text-left">
            © 2026 {COMPANY.name}. Tous droits réservés.
          </p>

          <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm font-medium text-slate-950">
            <Link
              to="/mentions-legales"
              className="transition-colors duration-200 hover:text-white"
            >
              Mentions légales
            </Link>

            <Link
              to="/confidentialite"
              className="transition-colors duration-200 hover:text-white"
            >
              Confidentialité
            </Link>

            <Link
              to="/cgv"
              className="transition-colors duration-200 hover:text-white"
            >
              CGV
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h4 className="font-display text-sm font-bold text-slate-950">
        {title}
      </h4>

      <ul className="mt-4 space-y-3">
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              className="text-sm text-slate-900 transition-all duration-200 hover:translate-x-1 hover:text-white"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}