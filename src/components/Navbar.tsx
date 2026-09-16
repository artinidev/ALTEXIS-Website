import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Menu, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { LanguageSwitcher } from './LanguageSwitcher';
import { useRouter } from '../utils/router';

interface NavbarProps {
  onOpenContactModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenContactModal,
}) => {
  const { t, i18n } = useTranslation(['common', 'home']);
  const { pathname, navigate } = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const isRtl = i18n.language === 'ar';

  const isOffersPage = pathname.startsWith('/our-offers');
  const isLightNav = isScrolled;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 35);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: t('nav.home', { ns: 'common' }), isRoute: true },
    { href: '/our-offers', label: t('nav.offers', { ns: 'common' }) || 'Company setup', isRoute: true, highlight: true },
    { href: '#about', label: t('nav.about', { ns: 'common' }), isRoute: false },
    { href: '#services', label: t('nav.services', { ns: 'common' }), isRoute: false },
    { href: '#insights', label: t('nav.insights', { ns: 'common' }), isRoute: false },
    { href: '#how-we-help', label: t('nav.approach', { ns: 'common' }), isRoute: false },
    { href: '#faq', label: t('nav.faq', { ns: 'common' }), isRoute: false },
  ];

  const handleNavClick = (link: typeof navLinks[0], e: React.MouseEvent) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (link.isRoute) {
      navigate(link.href);
    } else {
      // If we are on /our-offers and user clicks an anchor link like #about, navigate to homepage + anchor
      if (isOffersPage) {
        navigate('/');
        setTimeout(() => {
          const el = document.querySelector(link.href);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          }
        }, 150);
      } else {
        const el = document.querySelector(link.href);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 w-full z-50 transition-all duration-300 ${
        isLightNav
          ? 'bg-[#FAF9F5]/90 backdrop-blur-xl border-b border-[#E2DFD5]/80 shadow-xs py-3.5 sm:py-4'
          : 'bg-transparent border-b border-transparent shadow-none py-5 sm:py-7'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 flex items-center justify-between gap-6">

        {/* Brand Logo */}
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault();
            navigate('/');
          }}
          className="flex items-center focus:outline-hidden shrink-0"
          aria-label="ALTEXIS Homepage"
        >
          <img
            src={isLightNav ? '/altexis-logo-dark.png' : '/altexis-logo-white.png'}
            alt="ALTEXIS"
            className="h-8 sm:h-9 w-auto object-contain transition-opacity duration-200"
          />
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-heading font-semibold transition-colors duration-300">
          {navLinks.map((link) => {
            const isOfferActive = link.href === '/our-offers' && isOffersPage;

            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(link, e)}
                className={`relative py-1 transition-colors duration-200 ${
                  isOfferActive
                    ? isLightNav
                      ? 'text-[#04846E] font-bold'
                      : 'text-[#8EDB68] font-bold'
                    : isLightNav
                    ? 'text-[#123C32]/75 hover:text-[#123C32]'
                    : 'text-white/80 hover:text-white'
                }`}
              >
                <span>{link.label}</span>
                {isOfferActive && (
                  <motion.span
                    layoutId="activeNavIndicator"
                    className={`absolute -bottom-1 left-0 right-0 h-0.5 rounded-full ${
                      isLightNav ? 'bg-[#04846E]' : 'bg-[#8EDB68]'
                    }`}
                  />
                )}
                {link.highlight && !isOfferActive && (
                  <span className="ml-1.5 px-2 py-0.5 text-[10px] font-heading font-semibold bg-[#04846E]/20 text-[#8EDB68] rounded-full">
                    Nouveau
                  </span>
                )}
              </a>
            );
          })}
        </nav>

        {/* Right Actions: Language Switcher + Contact Us Pill Button */}
        <div className="hidden sm:flex items-center gap-3">
          <LanguageSwitcher variant="nav" isHero={!isLightNav} />

          <button
            onClick={onOpenContactModal}
            className="farmio-btn-accent px-5 py-2.5 text-xs font-heading font-bold uppercase tracking-wider cursor-pointer inline-flex items-center gap-2 shadow-sm active:scale-[0.98]"
          >
            <span>{t('nav.contact', { ns: 'common' })}</span>
            <ArrowRight className={`w-3.5 h-3.5 ${isRtl ? 'rotate-180' : ''}`} />
          </button>
        </div>

        {/* Mobile Menu Trigger */}
        <div className="flex items-center gap-2 md:hidden">
          <LanguageSwitcher variant="nav" isHero={!isLightNav} />

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`p-2 rounded-xl transition-colors duration-200 focus:outline-hidden ${
              isLightNav
                ? 'text-[#123C32] hover:bg-black/5'
                : 'text-white hover:bg-white/10'
            }`}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Glassmorphic Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -10 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-md mx-auto mt-3 px-4 md:hidden"
          >
            <div className="bg-white/95 backdrop-blur-2xl rounded-3xl p-6 shadow-2xl border border-[#E2DFD5] text-start space-y-4">
              <div className="flex flex-col gap-1">
                {navLinks.map((link) => {
                  const isOfferActive = link.href === '/our-offers' && isOffersPage;

                  return (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={(e) => handleNavClick(link, e)}
                      className={`text-sm font-heading font-semibold py-2 px-3 rounded-xl transition-colors flex items-center justify-between ${
                        isOfferActive
                          ? 'bg-[#04846E]/10 text-[#04846E]'
                          : 'text-[#123C32] hover:text-[#04846E] hover:bg-[#F5F3EA]'
                      }`}
                    >
                      <span>{link.label}</span>
                      {link.highlight && (
                        <span className="px-2 py-0.5 text-[10px] font-mono font-bold bg-[#04846E] text-white rounded-full uppercase">
                          New
                        </span>
                      )}
                    </a>
                  );
                })}
              </div>

              <div className="pt-2 border-t border-[#E2DFD5]">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenContactModal();
                  }}
                  className="w-full farmio-btn-accent flex items-center justify-center gap-2 py-3 px-5 text-xs font-heading font-bold uppercase tracking-wider cursor-pointer shadow-md"
                >
                  <span>{t('nav.contact', { ns: 'common' })}</span>
                  <ArrowRight className={`w-4 h-4 ${isRtl ? 'rotate-180' : ''}`} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
