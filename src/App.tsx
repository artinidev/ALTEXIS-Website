import { useState, useEffect, lazy, Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import Lenis from 'lenis';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutImpactSection } from './components/AboutImpactSection';
import { ServicesCardsSection } from './components/ServicesCardsSection';
import { StickyServicesSection } from './components/StickyServicesSection';
import { FeaturesValueSection } from './components/FeaturesValueSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { IndustriesGridSection } from './components/IndustriesGridSection';
import { GlobalSourcingCinematic } from './components/GlobalSourcingCinematic';
import { GallerySection } from './components/GallerySection';
import { OurApproachSection } from './components/OurApproachSection';
import { TestimonialCarousel } from './components/TestimonialCarousel';
import { FAQAccordionSection } from './components/FAQAccordionSection';
import { FarmioFinalCTA } from './components/FarmioFinalCTA';
import { ContactForm } from './components/ContactForm';
import { FarmioFooter } from './components/FarmioFooter';
import { OurOffersPage } from './components/offers/OurOffersPage';
import { WhatsAppFloatingButton } from './components/WhatsAppFloatingButton';
import { RouterProvider, useRouter } from './utils/router';

// Code-split RFQ Modal and Company Setup Modal to minimize initial bundle size
const RFQModal = lazy(() => import('./components/RFQModal').then((m) => ({ default: m.RFQModal })));
const CompanySetupModal = lazy(() => import('./components/offers/CompanySetupModal').then((m) => ({ default: m.CompanySetupModal })));

function MainApp() {
  const { i18n } = useTranslation();
  const { pathname } = useRouter();
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [contactInitialTopic, setContactInitialTopic] = useState<string | undefined>();

  // High-performance responsive smooth scrolling
  useEffect(() => {
    // Respect user's motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const lenis = new Lenis({
      duration: 0.7,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.05,
      touchMultiplier: 1.2,
      syncTouch: false, // Keep native 120Hz touch momentum on mobile/trackpads
    });

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  // Update localized document title based on language & current route
  useEffect(() => {
    if (pathname.startsWith('/our-offers')) {
      if (i18n.language === 'fr') {
        document.title = 'Création d’Entreprises & Solutions d’Affaires — ALTEXIS';
      } else if (i18n.language === 'ar') {
        document.title = 'إنشاء وتأسيس الشركات وحلول الأعمال — ألتيكسيس';
      } else {
        document.title = 'Company Setup & Turnkey Business Solutions — ALTEXIS';
      }
    } else {
      if (i18n.language === 'fr') {
        document.title = 'ALTEXIS — Sourcing & Renseignement Achat Industriel';
      } else if (i18n.language === 'ar') {
        document.title = 'ألتيكسيس — المشتريات والتوريد الصناعي الدولي';
      } else {
        document.title = 'ALTEXIS — The right supplier. The right decision.';
      }
    }
  }, [i18n.language, pathname]);

  const handleOpenContactModal = (topic?: string) => {
    setContactInitialTopic(topic);
    setIsContactModalOpen(true);
  };

  const handleCloseContactModal = () => {
    setIsContactModalOpen(false);
    setContactInitialTopic(undefined);
  };

  const isOffersRoute = pathname.startsWith('/our-offers');

  return (
    <div className="min-h-screen bg-[#F5F3EA] text-[#111817] font-sans antialiased overflow-x-hidden selection:bg-[#8EDB68]/40 selection:text-[#123C32]">
      {/* 1. Farmio-style Sticky/Floating Navbar */}
      <Navbar
        onOpenContactModal={() => handleOpenContactModal('General Inquiry')}
      />

      <main>
        {isOffersRoute ? (
          /* Redesigned Premium "Our Offers / Nos offres" page */
          <OurOffersPage onOpenContactModal={handleOpenContactModal} />
        ) : (
          /* Existing Full Homepage */
          <>
            {/* 2. Hero Section: Option 1 Global Trade Radar */}
            <HeroSection
              onOpenContactModal={handleOpenContactModal}
            />

            {/* 3. About / Company Statement + Conceptual Proof Statistics */}
            <AboutImpactSection />

            {/* 4. Solutions / 4 Rounded Service Cards */}
            <ServicesCardsSection onOpenContactModal={handleOpenContactModal} />

            {/* 5. Large Sticky Scrolling Services Section (01 to 05 with sticky visual & progress) */}
            <StickyServicesSection onOpenContactModal={handleOpenContactModal} />

            {/* 6. Features / Impact: Global Reach & Supplier Confidence */}
            <FeaturesValueSection />

            {/* 7. How It Works: 4 Sequential Process Step Cards */}
            <HowItWorksSection />

            {/* 8. Industries: 6 Demanding Sector Cards */}
            <IndustriesGridSection onOpenContactModal={handleOpenContactModal} />

            {/* 9. Global Sourcing Section: Cinematic Full-Width Rounded Visual */}
            <GlobalSourcingCinematic onOpenContactModal={() => handleOpenContactModal('Global Sourcing Reach')} />

            {/* 10. Inside Our World: Asymmetrical Visual Gallery */}
            <GallerySection />

            {/* 11. Our Approach: 4 Principles Behind the Procurement */}
            <OurApproachSection />

            {/* 12. Testimonials: Farmio-Style Large Typography Slider */}
            <TestimonialCarousel />

            {/* 13. FAQ: Smooth Accordion Questions */}
            <FAQAccordionSection onOpenContactModal={handleOpenContactModal} />

            {/* 14. Large Final CTA: Ready to source smarter? */}
            <FarmioFinalCTA onOpenContactModal={() => handleOpenContactModal('Final CTA')} />

            {/* 15. On-Page Direct Procurement Intake Desk */}
            <div id="contact-intake" className="bg-[#F5F3EA]">
              <ContactForm />
            </div>
          </>
        )}
      </main>

      {/* 16. Clean Premium Farmio Footer */}
      <FarmioFooter onOpenContactModal={handleOpenContactModal} />

      {/* Floating Speed Dial: WhatsApp Direct Chat Desk */}
      <WhatsAppFloatingButton />

      {/* 17. Contextual Modal: Company Setup vs Industrial Procurement (Lazy-Loaded) */}
      <Suspense fallback={null}>
        {isContactModalOpen && (
          isOffersRoute ? (
            <CompanySetupModal
              isOpen={isContactModalOpen}
              onClose={handleCloseContactModal}
              initialTopic={contactInitialTopic}
            />
          ) : (
            <RFQModal
              isOpen={isContactModalOpen}
              onClose={handleCloseContactModal}
              initialTopic={contactInitialTopic}
            />
          )
        )}
      </Suspense>
    </div>
  );
}

export function App() {
  return (
    <RouterProvider>
      <MainApp />
    </RouterProvider>
  );
}

export default App;
