import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Solutions } from '@/components/Solutions';
import { FeaturedProduct } from '@/components/FeaturedProduct';
import { Services } from '@/components/Services';
import { WhyUs } from '@/components/WhyUs';
import { Industries } from '@/components/Industries';
import { Process } from '@/components/Process';
import { About } from '@/components/About';
import { Testimonials } from '@/components/Testimonials';
import { CTA } from '@/components/CTA';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import NosExpertises from './components/NosExpertises'; // 3iyyt 3la l'composant
import { Nf525Page } from '@/components/Nf525Page';
import { PosSolution } from '@/components/PosSolution';
import { BornesCommande } from '@/components/BornesCommande';
import { GestionStocks } from '@/components/GestionStocks';
import { FideliteClient } from '@/components/FideliteClient';
import { AnalyseVentes } from '@/components/AnalyseVentes';
import { KdsSolution } from '@/components/KdsSolution';
import Fonctionnalite from './components/Fonctionnalite';
import Produit from './components/Produit';
// ============================================================
// SCROLL TO TOP
// ============================================================

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant',
    });
  }, [pathname]);

  return null;
}


// ============================================================
// PAGE D'ACCUEIL
// ============================================================

function HomePage() {
  return (
    <>
      <Hero />
      <NosExpertises />
      <Fonctionnalite />
      <Produit />
      <Industries />
      <Solutions />
      <FeaturedProduct />
      <Services />
      <WhyUs />
      <Process />
      <About />
      <Testimonials />
      <CTA />
      <Contact />
    </>
  );
}


// ============================================================
// APP
// ============================================================

function App() {
  return (
    <BrowserRouter>

      {/* Retour automatique en haut à chaque changement de page */}
      <ScrollToTop />

      <div className="min-h-screen bg-white text-slate-700 antialiased">

        <Header />

        <main>
          <Routes>

            {/* ==================================================
                PAGE D'ACCUEIL
            ================================================== */}

            <Route
              path="/"
              element={<HomePage />}
            />


            {/* ==================================================
                SOLUTIONS
            ================================================== */}

            {/* Systèmes de caisse & POS */}
            <Route
              path="/solutions/pos"
              element={<PosSolution />}
            />

            {/* Bornes de commande intelligentes */}
            <Route
              path="/solutions/bornes-commande"
              element={<BornesCommande />}
            />

            {/* Gestion des stocks */}
            <Route
              path="/solutions/gestion-stocks"
              element={<GestionStocks />}
            />

            {/* Fidélité client */}
            <Route
              path="/solutions/fidelite-client"
              element={<FideliteClient />}
            />

            {/* Analyse des ventes */}
            <Route
              path="/solutions/analyse-ventes"
              element={<AnalyseVentes />}
            />

            {/* KDS — Écran de production cuisine */}
            <Route
              path="/solutions/kds"
              element={<KdsSolution />}
            />


            {/* ==================================================
                NF525
            ================================================== */}

            <Route
              path="/nf"
              element={<Nf525Page />}
            />

            <Route
              path="/nf525"
              element={<Nf525Page />}
            />

          </Routes>
        </main>

        <Footer />

      </div>
    </BrowserRouter>
  );
}

export default App;