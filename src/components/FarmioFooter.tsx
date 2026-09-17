import React from 'react';
import { Mail, Phone, MapPin, ShieldCheck } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { LanguageSwitcher } from './LanguageSwitcher';
import { useRouter } from '../utils/router';
import { WhatsAppIcon } from './WhatsAppFloatingButton';

interface FarmioFooterProps {
  onOpenContactModal?: (topic?: string) => void;
}

export const FarmioFooter: React.FC<FarmioFooterProps> = ({ onOpenContactModal }) => {
  const { t, i18n } = useTranslation(['common']);
  const { navigate, pathname } = useRouter();

  const navLinks = [
    { href: '/', label: t('nav.home', { ns: 'common' }), isRoute: true },
    { href: '/our-offers', label: t('nav.offers', { ns: 'common' }) || 'Company setup', isRoute: true },
    { href: '#about', label: t('nav.about', { ns: 'common' }), isRoute: false },
    { href: '#services', label: t('nav.services', { ns: 'common' }), isRoute: false },
    { href: '#how-we-help', label: t('nav.approach', { ns: 'common' }), isRoute: false },
    { href: '#industries', label: t('nav.industries', { ns: 'common' }), isRoute: false },
    { href: '#faq', label: t('nav.faq', { ns: 'common' }), isRoute: false },
    { href: '#contact-intake', label: t('nav.contact', { ns: 'common' }), isRoute: false },
  ];

  const officeLocations = [
    { city: 'Algeria', address: 'Residence El Ferdous, Ain Allah, Dely Brahim, Alger', code: 'CET' },
    { city: 'USA', address: 'Houston & New York Desk', code: 'EST/CST' },
    { city: 'Dubai', address: 'Gate Precinct 4, DIFC', code: 'GST' },
    { city: 'Singapore', address: 'Marina Bay Financial Centre', code: 'SGT' },
  ];

  const handleLinkClick = (link: typeof navLinks[0], e: React.MouseEvent) => {
    e.preventDefault();
    if (link.isRoute) {
      navigate(link.href);
    } else {
      if (pathname.startsWith('/our-offers')) {
        navigate('/');
        setTimeout(() => {
          const el = document.querySelector(link.href);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 150);
      } else {
        const el = document.querySelector(link.href);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-[#123C32] text-[#F5F3EA] border-t border-white/10 pt-20 pb-12 text-start">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          
          {/* Brand Col */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <a
                href="/"
                onClick={(e) => {
                  e.preventDefault();
                  navigate('/');
                }}
                className="inline-block"
              >
                <img
                  src="/altexis-logo-white.png"
                  alt="ALTEXIS"
                  className="h-8 w-auto object-contain"
                />
              </a>
            </div>

            <p className="font-heading text-lg text-white font-bold max-w-sm leading-snug">
              Global procurement. Trusted sourcing. Better decisions.
            </p>

            <p className="text-sm text-[#F5F3EA]/75 max-w-md font-secondary leading-relaxed">
              Centre d'affaires, solutions de domiciliation & plateforme internationale d'accompagnement B2B et procurement industriel.
            </p>

            {/* Address Badge */}
            <div className="flex items-start gap-2 text-xs font-secondary text-[#F5F3EA]/80 pt-1">
              <MapPin className="w-4 h-4 text-[#8EDB68] shrink-0 mt-0.5" />
              <span>Residence El Ferdous, Ain Allah, Dely Brahim, Alger</span>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-2">
              <div className="px-3 py-1.5 rounded-full bg-white/10 text-[11px] font-mono text-[#8EDB68] flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Espace Professionnel Agréé</span>
              </div>
              <div className="px-3 py-1.5 rounded-full bg-white/10 text-[11px] font-mono text-white flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#8EDB68]" />
                <span>ISO 9001:2015 Audited</span>
              </div>
            </div>

            <div className="pt-4">
              <LanguageSwitcher variant="footer" />
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-3 space-y-4">
            <span className="text-xs font-mono font-bold tracking-widest text-[#8EDB68] uppercase block mb-4">
              Navigation
            </span>
            <ul className="space-y-3 text-sm font-secondary text-[#F5F3EA]/80">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(link, e)}
                    className="hover:text-[#8EDB68] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a href="https://altexisai.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#8EDB68] transition-colors">
                  altexisai.com
                </a>
              </li>
            </ul>
          </div>

          {/* Global Hubs & Direct Desk */}
          <div className="lg:col-span-4 space-y-5">
            <span className="text-xs font-mono font-bold tracking-widest text-[#8EDB68] uppercase block mb-4">
              Global Sourcing & Business Desks
            </span>

            <div className="grid grid-cols-2 gap-3 text-xs font-mono">
              {officeLocations.map((loc, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-white/5 border border-white/10">
                  <div className="text-white font-bold flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-[#8EDB68]" />
                    {loc.city}
                  </div>
                  <div className="text-[#F5F3EA]/60 text-[10px] mt-0.5">{loc.code}</div>
                </div>
              ))}
            </div>

            <div className="pt-2 space-y-2.5 text-xs font-mono text-[#F5F3EA]/80">
              <div className="flex items-center gap-2">
                <WhatsAppIcon className="w-3.5 h-3.5 text-[#25D366] shrink-0" />
                <a
                  href={`https://wa.me/213560189825?text=${encodeURIComponent(
                    i18n.language === 'ar'
                      ? 'مرحباً ألتيكسيس، أود الاستفسار عن خدماتكم.'
                      : i18n.language === 'en'
                      ? 'Hello ALTEXIS, I would like to inquire about your services.'
                      : 'Bonjour ALTEXIS, je souhaite me renseigner sur vos services.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#25D366] font-bold hover:underline transition-colors inline-flex items-center gap-1"
                >
                  <span>WhatsApp Direct Desk (0560 18 98 25)</span>
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#8EDB68] shrink-0" />
                <a href="https://wa.me/213560189825" target="_blank" rel="noopener noreferrer" className="text-white font-bold hover:text-[#8EDB68] transition-colors">
                  0560 18 98 25
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#8EDB68] shrink-0" />
                <a href="mailto:admin@altexisai.com" className="text-[#8EDB68] hover:underline font-bold">
                  admin@altexisai.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#8EDB68] font-bold">Web:</span>
                <a href="https://altexisai.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#8EDB68] transition-colors">
                  altexisai.com
                </a>
              </div>
            </div>

            {onOpenContactModal && (
              <div className="pt-2">
                <button
                  onClick={() => onOpenContactModal('Footer Action')}
                  className="w-full farmio-btn-accent py-3 px-5 text-xs font-extrabold uppercase tracking-wider cursor-pointer shadow-lg"
                >
                  Submit a Request
                </button>
              </div>
            )}
          </div>

        </div>

        {/* Bottom Legal Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#F5F3EA]/60">
          <div className="flex flex-wrap items-center gap-2 sm:gap-4">
            <span className="text-white font-medium">ALTEXIS (altexisai.com)</span>
            <span>•</span>
            <span>Global Desks: USA, Algeria, Dubai, Singapore</span>
            <span>•</span>
            <span>Fiduciary Buyer-Side Protection</span>
          </div>
          <div>
            © {new Date().getFullYear()} ALTEXIS. All rights reserved.
          </div>
        </div>

      </div>
    </footer>
  );
};
