import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { TrustLogos } from '@/components/TrustLogos';
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
import { Nf525Page } from '@/components/Nf525Page';

// Component dyal la page d'accueil (Home)
function HomePage() {
  return (
    <>
      <Hero />
      <TrustLogos />
      <Solutions />
      <FeaturedProduct />
      <Services />
      <WhyUs />
      <Industries />
      <Process />
      <About />
      <Testimonials />
      <CTA />
      <Contact />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white text-slate-700 antialiased">
        <Header />
        <main>
          <Routes>
            {/* Page d'accueil */}
            <Route path="/" element={<HomePage />} />
            
            {/* Page NF525 (kat-supporti /nf w /nf525 bach tkon hani) */}
            <Route path="/nf" element={<Nf525Page />} />
            <Route path="/nf525" element={<Nf525Page />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;