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

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-700 antialiased">
      <Header />
      <main>
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
      </main>
      <Footer />
    </div>
  );
}

export default App;
