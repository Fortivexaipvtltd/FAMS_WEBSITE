import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import Features from '@/components/Features';
import Modules from '@/components/Modules';
import ProductShowcase from '@/components/ProductShowcase';
import HowItWorks from '@/components/HowItWorks';
import Benefits from '@/components/Benefits';
import Security from '@/components/Security';
import UseCases from '@/components/UseCases';
import WhyFams from '@/components/WhyFams';
import Pricing from '@/components/Pricing';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main">
        <Hero />
        <Stats />
        <Features />
        <Modules />
        <ProductShowcase />
        <HowItWorks />
        <Benefits />
        <Security />
        <UseCases />
        <WhyFams />
        <Pricing />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
