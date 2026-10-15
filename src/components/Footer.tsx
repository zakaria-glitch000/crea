
import { Linkedin, Twitter, Facebook, ArrowRight } from 'lucide-react';
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

export function Footer() {
  return (
<footer className="relative border-t border-sky-200 bg-blue-200/80">  <div className="absolute inset-0 grid-bg-fine opacity-30" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Top section */}
        <div className="grid grid-cols-1 gap-12 py-16 lg:grid-cols-[1.5fr_1fr_1fr_1fr_1.2fr] lg:gap-8 lg:py-20">

          {/* Brand */}
          <div>
            <Logo />

            <p className="mt-5 max-w-xs text-sm leading-relaxed text-slate-500">
              Solutions IT, logiciels et systèmes professionnels pour
              entreprises. Conception, déploiement et accompagnement de A à Z.
            </p>

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
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-400 transition-all hover:border-brand-200 hover:bg-brand-50 hover:text-brand-600"
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
            <h4 className="font-display text-sm font-semibold text-slate-900">
              Newsletter
            </h4>

            <p className="mt-4 text-sm text-slate-500">
              Recevez nos actualités et conseils technologiques.
            </p>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-4"
            >
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Votre email"
                  aria-label="Votre adresse email"
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition-colors focus:border-brand-400"
                />

                <button
                  type="submit"
                  aria-label="S'abonner"
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-500 text-white transition-colors hover:bg-brand-400"
                >
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </form>

            <div className="mt-5 space-y-2 text-sm text-slate-500">
              <div>{COMPANY.phone}</div>
              <div>{COMPANY.email}</div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-slate-200 py-6 sm:flex-row">
          <p className="text-sm text-slate-400">
            © 2026 {COMPANY.name}. Tous droits réservés.
          </p>

          <div className="flex gap-6 text-sm text-slate-400">
            <Link
              to="/mentions-legales"
              className="transition-colors hover:text-slate-700"
            >
              Mentions légales
            </Link>

            <Link
              to="/confidentialite"
              className="transition-colors hover:text-slate-700"
            >
              Confidentialité
            </Link>

            <Link
              to="/cgv"
              className="transition-colors hover:text-slate-700"
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
      <h4 className="font-display text-sm font-semibold text-slate-900">
        {title}
      </h4>

      <ul className="mt-4 space-y-3">
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              className="text-sm text-slate-500 transition-colors hover:text-brand-600"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
