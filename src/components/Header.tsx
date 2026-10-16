import { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { NAV_LINKS } from '@/data/content';
import { Logo } from './ui/Logo';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [pendingHash, setPendingHash] = useState('');

  const location = useLocation();
  const navigate = useNavigate();

  // Détection du scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Bloquer le scroll lorsque le menu mobile est ouvert
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  // Scroll vers une section après le chargement de l'accueil
  useEffect(() => {
    if (!pendingHash || location.pathname !== '/') return;

    const hash = pendingHash;

    const timer = window.setTimeout(() => {
      const element = document.getElementById(
        decodeURIComponent(hash.replace(/^#/, ''))
      );

      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }

      setPendingHash('');
    }, 150);

    return () => window.clearTimeout(timer);
  }, [location.pathname, pendingHash]);

  // Navigation intelligente entre les pages et les sections
  const handleNavigation = useCallback(
    (href: string) => {
      setMobileOpen(false);

      const hashIndex = href.indexOf('#');

      // Lien sans ancre : navigation normale
      if (hashIndex === -1) {
        navigate(href);
        return;
      }

      const hash = href.slice(hashIndex);

      // Déjà sur la page d'accueil : scroll direct
      if (location.pathname === '/') {
        const element = document.getElementById(
          decodeURIComponent(hash.replace(/^#/, ''))
        );

        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        } else {
          // Si la section n'existe pas, réessayer après le rendu
          setPendingHash(hash);
        }

        return;
      }

      // Depuis une page solution : revenir à l'accueil
      // puis descendre vers la section demandée
      setPendingHash(hash);
      navigate('/');
    },
    [location.pathname, navigate]
  );

  // Logo : retour à l'accueil en haut de page
  const handleLogoClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    setMobileOpen(false);
    setPendingHash('');
    navigate('/');

    window.setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }, 100);
  };

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.5,
          ease: [0.22, 1, 0.36, 1],
        }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'border-b border-slate-200/80 bg-white/80 backdrop-blur-xl'
            : 'border-b border-transparent bg-transparent'
        }`}
      >
        <div
          className={`mx-auto flex max-w-7xl items-center justify-between px-6 transition-all duration-300 lg:px-8 ${
            scrolled ? 'h-16' : 'h-20'
          }`}
        >
          {/* LOGO */}
          <Link
            to="/"
            onClick={handleLogoClick}
            aria-label="Accueil ORALI SYSTEMS"
          >
            <Logo />
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden items-center gap-1 lg:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(event) => {
                  event.preventDefault();
                  handleNavigation(link.href);
                }}
                className="rounded-lg px-4 py-2 text-sm font-medium text-slate-500 transition-colors hover:text-brand-600"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* DESKTOP CTA */}
          <div className="hidden lg:block">
            <a
              href="#contact"
              onClick={(event) => {
                event.preventDefault();
                handleNavigation('#contact');
              }}
              className="group inline-flex items-center gap-2 rounded-xl bg-brand-500 px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-brand-400 hover:shadow-lg hover:shadow-brand-500/30"
            >
              Demander une démo

              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setMobileOpen(true)}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-slate-700 lg:hidden"
            aria-label="Ouvrir le menu"
            aria-expanded={mobileOpen}
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* OVERLAY */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[60] bg-slate-900/20 backdrop-blur-sm lg:hidden"
              onClick={() => setMobileOpen(false)}
            />

            {/* MOBILE MENU */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{
                type: 'spring',
                damping: 30,
                stiffness: 300,
              }}
              className="fixed right-0 top-0 z-[70] flex h-full w-[85%] max-w-sm flex-col border-l border-slate-200 bg-white lg:hidden"
            >
              {/* MOBILE HEADER */}
              <div className="flex items-center justify-between border-b border-slate-200 px-6 py-5">
                <Link
                  to="/"
                  onClick={handleLogoClick}
                  aria-label="Accueil ORALI SYSTEMS"
                >
                  <Logo />
                </Link>

                <button
                  onClick={() => setMobileOpen(false)}
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-slate-700"
                  aria-label="Fermer le menu"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* MOBILE NAV */}
              <nav className="flex flex-1 flex-col gap-1 overflow-y-auto px-4 py-6">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(event) => {
                      event.preventDefault();
                      handleNavigation(link.href);
                    }}
                    className="rounded-xl px-4 py-3 text-base font-medium text-slate-600 transition-colors hover:bg-slate-50 hover:text-brand-600"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>

              {/* MOBILE CTA */}
              <div className="border-t border-slate-200 p-4">
                <a
                  href="#contact"
                  onClick={(event) => {
                    event.preventDefault();
                    handleNavigation('#contact');
                  }}
                  className="flex items-center justify-center gap-2 rounded-xl bg-brand-500 px-5 py-3.5 text-base font-semibold text-white"
                >
                  Demander une démo

                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
