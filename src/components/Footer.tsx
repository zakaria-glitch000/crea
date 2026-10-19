import {
  Linkedin,
  Twitter,
  Facebook,
  MapPin,
  Phone,
  Mail,
  Send,
} from 'lucide-react';

import { Link } from 'react-router-dom';
import {
  NAV_LINKS,
  SOLUTIONS,
  SERVICES,
  COMPANY,
} from '@/data/content';

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
    <footer className="relative isolate overflow-hidden border-t border-blue-300/60 bg-gradient-to-br from-sky-300 via-blue-400 to-indigo-500 text-slate-950">
      {/* Background effects */}
      <div className="pointer-events-none absolute inset-0 -z-10 grid-bg-fine opacity-20" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-tr from-white/30 via-transparent to-blue-700/20" />
      <div className="pointer-events-none absolute -right-24 -top-32 -z-10 h-96 w-96 rounded-full bg-white/25 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -left-20 -z-10 h-96 w-96 rounded-full bg-sky-200/30 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Main footer layout */}
        <div className="grid grid-cols-1 gap-10 py-16 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr_1.3fr] lg:gap-8 lg:py-20">
          
          {/* Brand & Socials */}
          <div className="flex flex-col justify-between space-y-6">
            <div>
              <Logo />
              <p className="mt-5 max-w-xs text-sm leading-relaxed text-slate-900">
                Solutions IT, logiciels et systèmes professionnels pour
                entreprises. Conception, déploiement et accompagnement de A à Z.
              </p>
            </div>

            {/* Social media icons */}
            <div className="flex gap-3">
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
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-blue-900/15 bg-white/30 text-slate-950 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-white/50 hover:bg-white/50 hover:shadow-lg"
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Column */}
          <FooterColumn
            title="Navigation"
            links={NAV_LINKS.map((link) => ({
              label: link.label,
              href: link.href.startsWith('#')
                ? `/${link.href}`
                : link.href,
            }))}
          />

          {/* Solutions Column */}
          <FooterColumn title="Solutions" links={solutionLinks} />

          {/* Services Column */}
          <FooterColumn title="Services" links={serviceLinks} />

          {/* Contact & Newsletter */}
          <div className="space-y-8 sm:col-span-2 lg:col-span-1">
            {/* Contact offices */}
            <div>
              <h4 className="font-display text-sm font-bold uppercase tracking-wider text-slate-950">
                Nos coordonnées
              </h4>

              <div className="mt-4 space-y-3">
                {OFFICES.map((office) => (
                  <div
                    key={office.title}
                    className="rounded-2xl border border-white/30 bg-white/20 p-4 shadow-sm backdrop-blur-md transition-all duration-300 hover:border-white/60 hover:bg-white/30"
                  >
                    <h5 className="text-sm font-bold text-slate-950">
                      {office.title}
                    </h5>

                    {office.name && (
                      <p className="mt-0.5 text-xs font-semibold text-slate-800">
                        {office.name}
                      </p>
                    )}

                    {office.address && (
                      <div className="mt-2.5 flex items-start gap-2.5 text-xs leading-relaxed text-slate-900">
                        <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-slate-800" />
                        <p>
                          {office.address.map((line, index) => (
                            <span key={line}>
                              {index > 0 && <br />}
                              {line}
                            </span>
                          ))}
                        </p>
                      </div>
                    )}

                    <div className="mt-3 space-y-1.5 border-t border-slate-900/10 pt-2.5">
                      <a
                        href={`tel:${office.phone.replace(/\s/g, '')}`}
                        className="flex items-center gap-2.5 text-xs font-medium text-slate-900 transition-colors hover:text-white"
                      >
                        <Phone className="h-3.5 w-3.5 shrink-0 text-slate-800" />
                        <span>{office.phone}</span>
                      </a>

                      <a
                        href={`mailto:${office.email}`}
                        className="flex items-center gap-2.5 break-all text-xs font-medium text-slate-900 transition-colors hover:text-white"
                      >
                        <Mail className="h-3.5 w-3.5 shrink-0 text-slate-800" />
                        <span>{office.email}</span>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="font-display text-sm font-bold uppercase tracking-wider text-slate-950">
                Newsletter
              </h4>

              <p className="mt-2 text-xs leading-relaxed text-slate-900">
                Recevez nos actualités et conseils technologiques.
              </p>

              <form
                onSubmit={(e) => e.preventDefault()}
                className="mt-3 flex items-center gap-2"
              >
                <div className="relative flex-1">
             
                </div>
        
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-blue-900/20 py-6 sm:flex-row">
          <p className="text-center text-xs text-slate-900 sm:text-left">
            © 2026 {COMPANY.name} By ARTIS Consulting. Tous droits réservés.
          </p>

          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs font-medium text-slate-950">
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
      <h4 className="font-display text-sm font-bold uppercase tracking-wider text-slate-950">
        {title}
      </h4>

      <ul className="mt-4 space-y-2.5">
        {links.map((link) => (
          <li key={link.label}>
            {link.href.startsWith('/') ? (
              <Link
                to={link.href}
                className="inline-block text-xs font-medium text-slate-900 transition-all duration-200 hover:translate-x-1 hover:text-white"
              >
                {link.label}
              </Link>
            ) : (
              <a
                href={link.href}
                className="inline-block text-xs font-medium text-slate-900 transition-all duration-200 hover:translate-x-1 hover:text-white"
              >
                {link.label}
              </a>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}