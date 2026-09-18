import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { BrandingShowcaseSection } from './BrandingShowcaseSection';
import { BrandingModal } from './BrandingModal';
import {
  Building2,
  Laptop,
  DoorClosed,
  Users,
  FileCheck2,
  Compass,
  Cpu,
  ArrowRight,
  Check,
  PhoneCall,
  ShieldCheck,
  MapPin,
  HelpCircle,
  Sparkles,
  Wifi,
  Coffee,
  Clock,
  Layers,
  Award,
} from 'lucide-react';

interface OurOffersPageProps {
  onOpenContactModal: (topic?: string) => void;
}

export const OurOffersPage: React.FC<OurOffersPageProps> = ({ onOpenContactModal }) => {
  const { t, i18n } = useTranslation(['offers', 'common']);
  const heroContainerRef = useRef<HTMLDivElement>(null);
  const isRtl = i18n.language === 'ar';

  const [isBrandingModalOpen, setIsBrandingModalOpen] = useState(false);
  const [brandingInitialType, setBrandingInitialType] = useState<'branding' | 'website' | 'bundle'>('bundle');

  const handleOpenBrandingModal = (type: 'branding' | 'website' | 'bundle' = 'bundle') => {
    setBrandingInitialType(type);
    setIsBrandingModalOpen(true);
  };

  const handleCloseBrandingModal = () => {
    setIsBrandingModalOpen(false);
  };

  useEffect(() => {
    if (i18n.language === 'fr') {
      document.title = 'Création d’Entreprises & Solutions d’Affaires — ALTEXIS';
    } else if (i18n.language === 'ar') {
      document.title = 'إنشاء وتأسيس الشركات وحلول الأعمال — ألتيكسيس';
    } else {
      document.title = 'Company Setup & Business Solutions — ALTEXIS';
    }
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [i18n.language]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const navOffset = 90;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  // Safe features list helpers
  const getFeatures = (key: string): string[] => {
    const items = t(key, { ns: 'offers', returnObjects: true });
    return Array.isArray(items) ? (items as string[]) : [];
  };

  return (
    <div className={`min-h-screen bg-[#F5F3EA] text-[#111817] selection:bg-[#8EDB68]/40 selection:text-[#123C32] ${isRtl ? 'rtl' : 'ltr'}`}>
      
      {/* =========================================================================
          1. HERO HEADER: Editorial & Authoritative Overview
         ========================================================================= */}
      <section
        ref={heroContainerRef}
        className="relative w-full pt-32 sm:pt-36 pb-16 sm:pb-20 px-6 sm:px-10 lg:px-16 overflow-hidden bg-[#0B1E19] text-white text-start"
      >
        {/* Background Architectural Atmosphere */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img
            src="/hero-offers.jpg"
            alt="Centre d’affaires ALTEXIS Dély Ibrahim"
            loading="eager"
            decoding="async"
            className="w-full h-full object-cover object-center brightness-[0.7] contrast-[1.05] gpu-layer"
          />
          {/* Dark cinematic faded overlays (matching landing page hero) */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/40" />
          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute inset-0 bg-[radial-gradient(#8EDB68_1px,transparent_1px)] [background-size:24px_24px] opacity-10" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full space-y-8">
          
          <div className="max-w-3xl space-y-5">
            {/* Location Tag */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-xs font-heading font-semibold text-white shadow-lg">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#8EDB68] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#8EDB68]" />
              </span>
              <span>{t('hero.badge', { ns: 'offers' })}</span>
            </div>

            {/* Main Title */}
            <h1 className="font-heading text-3xl sm:text-5xl lg:text-[56px] font-semibold text-white tracking-tight leading-[1.1]">
              {t('hero.titlePrefix', { ns: 'offers' })} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8EDB68] via-[#aef08f] to-[#8EDB68]">
                {t('hero.titleHighlight', { ns: 'offers' })}
              </span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-white/85 font-normal leading-relaxed max-w-2xl font-sans">
              {t('hero.description', { ns: 'offers' })}
            </p>
          </div>

          {/* Quick Jump Anchors */}
          <div className="pt-2 flex flex-wrap items-center gap-3">
            <button
              onClick={() => scrollToSection('section-domiciliation')}
              className="px-5 py-3 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/15 backdrop-blur-md text-white text-xs font-heading font-semibold inline-flex items-center gap-2 cursor-pointer transition-all duration-200"
            >
              <Building2 className="w-4 h-4 text-[#8EDB68]" />
              <span>1. {t('sections.s1.title', { ns: 'offers' })}</span>
            </button>

            <button
              onClick={() => scrollToSection('section-coworking')}
              className="px-5 py-3 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/15 backdrop-blur-md text-white text-xs font-heading font-semibold inline-flex items-center gap-2 cursor-pointer transition-all duration-200"
            >
              <Laptop className="w-4 h-4 text-[#8EDB68]" />
              <span>2. {t('sections.s2.title', { ns: 'offers' })}</span>
            </button>

            <button
              onClick={() => scrollToSection('section-branding')}
              className="px-5 py-3 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/15 backdrop-blur-md text-white text-xs font-heading font-semibold inline-flex items-center gap-2 cursor-pointer transition-all duration-200"
            >
              <Sparkles className="w-4 h-4 text-[#8EDB68]" />
              <span>3. {t('hero.navBranding', { ns: 'offers' })}</span>
            </button>

            <button
              onClick={() => scrollToSection('section-assistance')}
              className="px-5 py-3 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/15 backdrop-blur-md text-white text-xs font-heading font-semibold inline-flex items-center gap-2 cursor-pointer transition-all duration-200"
            >
              <Compass className="w-4 h-4 text-[#8EDB68]" />
              <span>4. {t('hero.navServices', { ns: 'offers' })}</span>
            </button>
          </div>

          {/* Top Trust Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-white/15 text-start">
            <div className="space-y-1">
              <span className="text-xs font-heading font-semibold text-[#8EDB68] block">{t('hero.trust.cnrc', { ns: 'offers' })}</span>
              <p className="font-heading font-semibold text-sm text-white">{t('hero.trust.cnrcVal', { ns: 'offers' })}</p>
            </div>
            <div className="space-y-1">
              <span className="text-xs font-heading font-semibold text-[#8EDB68] block">{t('hero.trust.location', { ns: 'offers' })}</span>
              <p className="font-heading font-semibold text-sm text-white">{t('hero.trust.locationVal', { ns: 'offers' })}</p>
            </div>
            <div className="space-y-1">
              <span className="text-xs font-heading font-semibold text-[#8EDB68] block">{t('hero.trust.services', { ns: 'offers' })}</span>
              <p className="font-heading font-semibold text-sm text-white">{t('hero.trust.servicesVal', { ns: 'offers' })}</p>
            </div>
            <div className="space-y-1">
              <span className="text-xs font-heading font-semibold text-[#8EDB68] block">{t('hero.trust.remote', { ns: 'offers' })}</span>
              <p className="font-heading font-semibold text-sm text-white">{t('hero.trust.remoteVal', { ns: 'offers' })}</p>
            </div>
          </div>

        </div>
      </section>


      {/* Main Sections Container */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 py-16 space-y-24 text-start">

        {/* =========================================================================
            SECTION 1 : DOMICILIATION D'ENTREPRISES (Silver - Business - Gold)
           ========================================================================= */}
        <section id="section-domiciliation" className="scroll-mt-32 space-y-10">
          
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#E2DFD5]">
            <div className="max-w-3xl space-y-3">
              <div className="inline-flex items-center gap-2 text-xs font-heading font-semibold text-[#04846E] bg-[#04846E]/10 px-3 py-1 rounded-full">
                <Building2 className="w-3.5 h-3.5" />
                <span>{t('sections.s1.tag', { ns: 'offers' })}</span>
              </div>
              <h2 className="font-heading text-2xl sm:text-4xl lg:text-[44px] font-semibold text-[#123C32] tracking-tight leading-[1.15]">
                {t('sections.s1.title', { ns: 'offers' })}
              </h2>
              <p className="text-base sm:text-lg font-heading font-medium text-[#123C32]/90">
                {t('sections.s1.subtitle', { ns: 'offers' })}
              </p>
              <p className="text-sm sm:text-base text-[#5E6D68] leading-relaxed">
                {t('sections.s1.description', { ns: 'offers' })}
              </p>
              <p className="text-xs sm:text-sm font-heading font-semibold text-[#04846E] pt-1">
                {t('sections.s1.formulaIntro', { ns: 'offers' })}
              </p>
            </div>

            <div className="flex items-center gap-2 text-xs font-heading font-semibold text-[#04846E] bg-white border border-[#E2DFD5] px-4 py-2.5 rounded-2xl shadow-xs shrink-0">
              <ShieldCheck className="w-4 h-4 text-[#04846E]" />
              <span>{t('sections.s1.badge', { ns: 'offers' })}</span>
            </div>
          </div>

          {/* 3 Formula Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            
            {/* 1. FORMULE SILVER */}
            <div className="relative rounded-3xl bg-white border border-[#E2DFD5] p-7 sm:p-8 flex flex-col justify-between shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="space-y-6">
                
                {/* Header */}
                <div className="flex items-center justify-between gap-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F5F3EA] text-xs font-heading font-semibold text-[#5E6D68]">
                    <Layers className="w-3 h-3 text-[#5E6D68]" />
                    <span>{t('sections.s1.silver.tag', { ns: 'offers' })}</span>
                  </div>
                  <span className="text-xs font-sans font-medium text-[#5E6D68]">{t('sections.s1.silver.billing', { ns: 'offers' })}</span>
                </div>

                <div>
                  <h3 className="font-heading text-xl sm:text-2xl font-semibold text-[#123C32]">
                    {t('sections.s1.silver.title', { ns: 'offers' })}
                  </h3>
                  <p className="text-xs text-[#5E6D68] mt-1 leading-relaxed">
                    {t('sections.s1.silver.desc', { ns: 'offers' })}
                  </p>
                </div>

                {/* Price */}
                <div className="p-4 rounded-2xl bg-[#F5F3EA] border border-[#E2DFD5]/60">
                  <span className="text-xs font-heading text-[#5E6D68] block">{t('sections.s1.silver.label', { ns: 'offers' })}</span>
                  <div className="flex items-baseline gap-1.5 mt-0.5">
                    <span className="font-heading text-3xl font-bold text-[#123C32]">{t('sections.s1.silver.price', { ns: 'offers' })}</span>
                    <span className="font-heading text-sm font-bold text-[#123C32]">{t('sections.s1.silver.unit', { ns: 'offers' })}</span>
                    <span className="text-xs text-[#5E6D68]">{t('sections.s1.silver.period', { ns: 'offers' })}</span>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-3 pt-2">
                  <span className="text-xs font-heading font-semibold uppercase tracking-wider text-[#123C32] block">
                    {t('sections.s1.silver.featuresTitle', { ns: 'offers' })}
                  </span>
                  <ul className="space-y-2.5">
                    {getFeatures('sections.s1.silver.features').map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-[#111817] leading-relaxed">
                        <div className="w-4 h-4 rounded-full bg-[#04846E]/10 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-2.5 h-2.5 text-[#04846E]" />
                        </div>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

              {/* Action Button */}
              <div className="pt-8 mt-6 border-t border-[#E2DFD5]">
                <button
                  onClick={() => onOpenContactModal('Souscription Domiciliation - Formule Silver (7 000 DZD/mois)')}
                  className="w-full farmio-btn-outline px-5 py-3 text-xs font-heading font-semibold uppercase tracking-wider cursor-pointer flex items-center justify-center gap-2 active:scale-[0.98] transition-transform"
                >
                  <span>{t('sections.s1.silver.cta', { ns: 'offers' })}</span>
                  <ArrowRight className={`w-3.5 h-3.5 ${isRtl ? 'rotate-180' : ''}`} />
                </button>
              </div>
            </div>


            {/* 2. FORMULE BUSINESS (Highlighted / Most Popular) */}
            <div className="relative rounded-3xl bg-[#123C32] text-white p-7 sm:p-8 flex flex-col justify-between shadow-2xl border-2 border-[#8EDB68] md:-translate-y-2">
              
              {/* Popular Badge */}
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#8EDB68] text-[#123C32] font-heading text-[11px] font-semibold uppercase tracking-wider shadow-md flex items-center gap-1.5 whitespace-nowrap">
                <Sparkles className="w-3 h-3 text-[#123C32]" />
                <span>{t('sections.s1.business.badge', { ns: 'offers' })}</span>
              </div>

              <div className="space-y-6 pt-2">
                
                {/* Header */}
                <div className="flex items-center justify-between gap-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 text-xs font-heading font-semibold text-[#8EDB68]">
                    <Award className="w-3.5 h-3.5 text-[#8EDB68]" />
                    <span>{t('sections.s1.business.tag', { ns: 'offers' })}</span>
                  </div>
                  <span className="text-xs font-sans font-medium text-white/80">{t('sections.s1.business.billing', { ns: 'offers' })}</span>
                </div>

                <div>
                  <h3 className="font-heading text-xl sm:text-2xl font-semibold text-white">
                    {t('sections.s1.business.title', { ns: 'offers' })}
                  </h3>
                  <p className="text-xs text-white/80 mt-1 leading-relaxed">
                    {t('sections.s1.business.desc', { ns: 'offers' })}
                  </p>
                </div>

                {/* Price */}
                <div className="p-4 rounded-2xl bg-white/10 border border-white/15">
                  <span className="text-xs font-heading text-white/70 block">{t('sections.s1.business.label', { ns: 'offers' })}</span>
                  <div className="flex items-baseline gap-1.5 mt-0.5">
                    <span className="font-heading text-3xl font-bold text-[#8EDB68]">{t('sections.s1.business.price', { ns: 'offers' })}</span>
                    <span className="font-heading text-sm font-bold text-[#8EDB68]">{t('sections.s1.business.unit', { ns: 'offers' })}</span>
                    <span className="text-xs text-white/70">{t('sections.s1.business.period', { ns: 'offers' })}</span>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-3 pt-2">
                  <span className="text-xs font-heading font-semibold uppercase tracking-wider text-[#8EDB68] block">
                    {t('sections.s1.business.featuresTitle', { ns: 'offers' })}
                  </span>
                  <ul className="space-y-2.5">
                    {getFeatures('sections.s1.business.features').map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-white leading-relaxed">
                        <div className="w-4 h-4 rounded-full bg-[#8EDB68] flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-2.5 h-2.5 text-[#123C32]" />
                        </div>
                        <span className="font-medium">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

              {/* Action Button */}
              <div className="pt-8 mt-6 border-t border-white/15">
                <button
                  onClick={() => onOpenContactModal('Souscription Domiciliation - Formule Business (12 000 DZD/mois)')}
                  className="w-full farmio-btn-accent px-5 py-3.5 text-xs font-heading font-semibold uppercase tracking-wider cursor-pointer flex items-center justify-center gap-2 shadow-lg active:scale-[0.98] transition-transform"
                >
                  <span>{t('sections.s1.business.cta', { ns: 'offers' })}</span>
                  <ArrowRight className={`w-3.5 h-3.5 ${isRtl ? 'rotate-180' : ''}`} />
                </button>
              </div>
            </div>


            {/* 3. FORMULE GOLD */}
            <div className="relative rounded-3xl bg-white border border-[#E2DFD5] p-7 sm:p-8 flex flex-col justify-between shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="space-y-6">
                
                {/* Header */}
                <div className="flex items-center justify-between gap-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F5F3EA] text-xs font-heading font-semibold text-[#5E6D68]">
                    <Layers className="w-3 h-3 text-[#5E6D68]" />
                    <span>{t('sections.s1.gold.tag', { ns: 'offers' })}</span>
                  </div>
                  <span className="text-xs font-sans font-medium text-[#5E6D68]">{t('sections.s1.gold.billing', { ns: 'offers' })}</span>
                </div>

                <div>
                  <h3 className="font-heading text-xl sm:text-2xl font-semibold text-[#123C32]">
                    {t('sections.s1.gold.title', { ns: 'offers' })}
                  </h3>
                  <p className="text-xs text-[#5E6D68] mt-1 leading-relaxed">
                    {t('sections.s1.gold.desc', { ns: 'offers' })}
                  </p>
                </div>

                {/* Price */}
                <div className="p-4 rounded-2xl bg-[#F5F3EA] border border-[#E2DFD5]/60">
                  <span className="text-xs font-heading text-[#5E6D68] block">{t('sections.s1.gold.label', { ns: 'offers' })}</span>
                  <div className="flex items-baseline gap-1.5 mt-0.5">
                    <span className="font-heading text-3xl font-bold text-[#123C32]">{t('sections.s1.gold.price', { ns: 'offers' })}</span>
                    <span className="font-heading text-sm font-bold text-[#123C32]">{t('sections.s1.gold.unit', { ns: 'offers' })}</span>
                    <span className="text-xs text-[#5E6D68]">{t('sections.s1.gold.period', { ns: 'offers' })}</span>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-3 pt-2">
                  <span className="text-xs font-heading font-semibold uppercase tracking-wider text-[#123C32] block">
                    {t('sections.s1.gold.featuresTitle', { ns: 'offers' })}
                  </span>
                  <ul className="space-y-2.5">
                    {getFeatures('sections.s1.gold.features').map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-[#111817] leading-relaxed">
                        <div className="w-4 h-4 rounded-full bg-[#04846E]/10 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-2.5 h-2.5 text-[#04846E]" />
                        </div>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

              {/* Action Button */}
              <div className="pt-8 mt-6 border-t border-[#E2DFD5]">
                <button
                  onClick={() => onOpenContactModal('Souscription Domiciliation - Formule Gold (18 000 DZD/mois)')}
                  className="w-full farmio-btn-outline px-5 py-3 text-xs font-heading font-semibold uppercase tracking-wider cursor-pointer flex items-center justify-center gap-2 active:scale-[0.98] transition-transform"
                >
                  <span>{t('sections.s1.gold.cta', { ns: 'offers' })}</span>
                  <ArrowRight className={`w-3.5 h-3.5 ${isRtl ? 'rotate-180' : ''}`} />
                </button>
              </div>
            </div>

          </div>

        </section>


        {/* =========================================================================
            SECTION 2 : ESPACE COWORKING & ESPACES DE TRAVAIL
            (Coworking: 1500 DZD/jour - Bureau Privatif: 6500 DZD/jour - Salle de réunion: 8000 DZD/jour)
           ========================================================================= */}
        <section id="section-coworking" className="scroll-mt-32 space-y-10">
          
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#E2DFD5]">
            <div className="max-w-3xl space-y-2">
              <div className="inline-flex items-center gap-2 text-xs font-heading font-semibold text-[#04846E] bg-[#04846E]/10 px-3 py-1 rounded-full">
                <Laptop className="w-3.5 h-3.5" />
                <span>{t('sections.s2.tag', { ns: 'offers' })}</span>
              </div>
              <h2 className="font-heading text-2xl sm:text-4xl lg:text-[44px] font-semibold text-[#123C32] tracking-tight leading-[1.15]">
                {t('sections.s2.title', { ns: 'offers' })}
              </h2>
              <p className="text-sm sm:text-base text-[#5E6D68] leading-relaxed">
                {t('sections.s2.description', { ns: 'offers' })}
              </p>
            </div>

            <div className="flex items-center gap-3 text-xs font-heading text-[#5E6D68]">
              <div className="flex items-center gap-1.5 bg-white border border-[#E2DFD5] px-3 py-1.5 rounded-xl">
                <Wifi className="w-3.5 h-3.5 text-[#04846E]" />
                <span>{t('sections.s2.fiber', { ns: 'offers' })}</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white border border-[#E2DFD5] px-3 py-1.5 rounded-xl">
                <Coffee className="w-3.5 h-3.5 text-[#04846E]" />
                <span>{t('sections.s2.drinks', { ns: 'offers' })}</span>
              </div>
            </div>
          </div>

          {/* 3 Workspaces Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            
            {/* 1. COWORKING (1 500 DZD / jour) */}
            <div className="relative rounded-3xl bg-white border border-[#E2DFD5] p-7 sm:p-8 flex flex-col justify-between shadow-sm hover:shadow-xl hover:border-[#04846E]/40 transition-all duration-300">
              <div className="space-y-6">
                
                {/* Meta */}
                <div className="flex items-center justify-between gap-2">
                  <div className="p-3 rounded-2xl bg-[#04846E]/10 text-[#04846E]">
                    <Laptop className="w-6 h-6" />
                  </div>
                  <span className="px-3 py-1 rounded-full bg-[#F5F3EA] text-[11px] font-heading font-semibold text-[#04846E]">
                    {t('sections.s2.coworking.badge', { ns: 'offers' })}
                  </span>
                </div>

                <div>
                  <h3 className="font-heading text-xl sm:text-2xl font-semibold text-[#123C32]">
                    {t('sections.s2.coworking.title', { ns: 'offers' })}
                  </h3>
                  <p className="text-xs text-[#5E6D68] mt-1 leading-relaxed">
                    {t('sections.s2.coworking.desc', { ns: 'offers' })}
                  </p>
                </div>

                {/* Price */}
                <div className="p-4 rounded-2xl bg-[#FAF9F5] border border-[#E2DFD5]/80">
                  <span className="text-xs font-heading text-[#5E6D68] block">{t('sections.s2.coworking.label', { ns: 'offers' })}</span>
                  <div className="flex items-baseline gap-1.5 mt-0.5">
                    <span className="font-heading text-3xl font-bold text-[#123C32]">{t('sections.s2.coworking.price', { ns: 'offers' })}</span>
                    <span className="font-heading text-sm font-bold text-[#123C32]">{t('sections.s2.coworking.unit', { ns: 'offers' })}</span>
                    <span className="text-xs text-[#5E6D68]">{t('sections.s2.coworking.period', { ns: 'offers' })}</span>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-3 pt-2">
                  <span className="text-xs font-heading font-semibold uppercase tracking-wider text-[#123C32] block">
                    {t('sections.s2.coworking.featuresTitle', { ns: 'offers' })}
                  </span>
                  <ul className="space-y-2.5">
                    {getFeatures('sections.s2.coworking.features').map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-[#111817] leading-relaxed">
                        <div className="w-4 h-4 rounded-full bg-[#04846E]/10 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-2.5 h-2.5 text-[#04846E]" />
                        </div>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

              {/* Action Button */}
              <div className="pt-8 mt-6 border-t border-[#E2DFD5]">
                <button
                  onClick={() => onOpenContactModal('Réservation Espace Coworking (1 800 DZD/jour)')}
                  className="w-full farmio-btn-accent px-5 py-3.5 text-xs font-heading font-semibold uppercase tracking-wider cursor-pointer flex items-center justify-center gap-2 shadow-sm active:scale-[0.98] transition-transform"
                >
                  <span>{t('sections.s2.coworking.cta', { ns: 'offers' })}</span>
                  <ArrowRight className={`w-3.5 h-3.5 ${isRtl ? 'rotate-180' : ''}`} />
                </button>
              </div>
            </div>


            {/* 2. BUREAU PRIVATIF (7 500 DZD / jour) */}
            <div className="relative rounded-3xl bg-white border-2 border-[#04846E] p-7 sm:p-8 flex flex-col justify-between shadow-md hover:shadow-xl transition-all duration-300">
              
              <div className="absolute -top-3 left-6 px-3.5 py-0.5 rounded-full bg-[#04846E] text-white font-heading text-[10px] font-semibold uppercase tracking-wider">
                {t('sections.s2.office.topBadge', { ns: 'offers' })}
              </div>

              <div className="space-y-6 pt-1">
                
                {/* Meta */}
                <div className="flex items-center justify-between gap-2">
                  <div className="p-3 rounded-2xl bg-[#04846E]/10 text-[#04846E]">
                    <DoorClosed className="w-6 h-6" />
                  </div>
                  <span className="px-3 py-1 rounded-full bg-[#04846E]/10 text-[11px] font-heading font-semibold text-[#04846E]">
                    {t('sections.s2.office.badge', { ns: 'offers' })}
                  </span>
                </div>

                <div>
                  <h3 className="font-heading text-xl sm:text-2xl font-semibold text-[#123C32]">
                    {t('sections.s2.office.title', { ns: 'offers' })}
                  </h3>
                  <p className="text-xs text-[#5E6D68] mt-1 leading-relaxed">
                    {t('sections.s2.office.desc', { ns: 'offers' })}
                  </p>
                </div>

                {/* Price */}
                <div className="p-4 rounded-2xl bg-[#FAF9F5] border border-[#04846E]/20">
                  <span className="text-xs font-heading text-[#5E6D68] block">{t('sections.s2.office.label', { ns: 'offers' })}</span>
                  <div className="flex items-baseline gap-1.5 mt-0.5">
                    <span className="font-heading text-3xl font-bold text-[#04846E]">{t('sections.s2.office.price', { ns: 'offers' })}</span>
                    <span className="font-heading text-sm font-bold text-[#04846E]">{t('sections.s2.office.unit', { ns: 'offers' })}</span>
                    <span className="text-xs text-[#5E6D68]">{t('sections.s2.office.period', { ns: 'offers' })}</span>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-3 pt-2">
                  <span className="text-xs font-heading font-semibold uppercase tracking-wider text-[#123C32] block">
                    {t('sections.s2.office.featuresTitle', { ns: 'offers' })}
                  </span>
                  <ul className="space-y-2.5">
                    {getFeatures('sections.s2.office.features').map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-[#111817] leading-relaxed">
                        <div className="w-4 h-4 rounded-full bg-[#04846E]/15 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-2.5 h-2.5 text-[#04846E]" />
                        </div>
                        <span className="font-medium">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

              {/* Action Button */}
              <div className="pt-8 mt-6 border-t border-[#E2DFD5]">
                <button
                  onClick={() => onOpenContactModal('Réservation Bureau Privatif (7 500 DZD/jour)')}
                  className="w-full farmio-btn-accent px-5 py-3.5 text-xs font-heading font-semibold uppercase tracking-wider cursor-pointer flex items-center justify-center gap-2 shadow-sm active:scale-[0.98] transition-transform"
                >
                  <span>{t('sections.s2.office.cta', { ns: 'offers' })}</span>
                  <ArrowRight className={`w-3.5 h-3.5 ${isRtl ? 'rotate-180' : ''}`} />
                </button>
              </div>
            </div>


            {/* 3. SALLE DE RÉUNION (9 500 DZD / jour) */}
            <div className="relative rounded-3xl bg-white border border-[#E2DFD5] p-7 sm:p-8 flex flex-col justify-between shadow-sm hover:shadow-xl hover:border-[#04846E]/40 transition-all duration-300">
              <div className="space-y-6">
                
                {/* Meta */}
                <div className="flex items-center justify-between gap-2">
                  <div className="p-3 rounded-2xl bg-[#04846E]/10 text-[#04846E]">
                    <Users className="w-6 h-6" />
                  </div>
                  <span className="px-3 py-1 rounded-full bg-[#F5F3EA] text-[11px] font-heading font-semibold text-[#04846E]">
                    {t('sections.s2.meeting.badge', { ns: 'offers' })}
                  </span>
                </div>

                <div>
                  <h3 className="font-heading text-xl sm:text-2xl font-semibold text-[#123C32]">
                    {t('sections.s2.meeting.title', { ns: 'offers' })}
                  </h3>
                  <p className="text-xs text-[#5E6D68] mt-1 leading-relaxed">
                    {t('sections.s2.meeting.desc', { ns: 'offers' })}
                  </p>
                </div>

                {/* Price */}
                <div className="p-4 rounded-2xl bg-[#FAF9F5] border border-[#E2DFD5]/80">
                  <span className="text-xs font-heading text-[#5E6D68] block">{t('sections.s2.meeting.label', { ns: 'offers' })}</span>
                  <div className="flex items-baseline gap-1.5 mt-0.5">
                    <span className="font-heading text-3xl font-bold text-[#123C32]">{t('sections.s2.meeting.price', { ns: 'offers' })}</span>
                    <span className="font-heading text-sm font-bold text-[#123C32]">{t('sections.s2.meeting.unit', { ns: 'offers' })}</span>
                    <span className="text-xs text-[#5E6D68]">{t('sections.s2.meeting.period', { ns: 'offers' })}</span>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-3 pt-2">
                  <span className="text-xs font-heading font-semibold uppercase tracking-wider text-[#123C32] block">
                    {t('sections.s2.meeting.featuresTitle', { ns: 'offers' })}
                  </span>
                  <ul className="space-y-2.5">
                    {getFeatures('sections.s2.meeting.features').map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-[#111817] leading-relaxed">
                        <div className="w-4 h-4 rounded-full bg-[#04846E]/10 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-2.5 h-2.5 text-[#04846E]" />
                        </div>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

              {/* Action Button */}
              <div className="pt-8 mt-6 border-t border-[#E2DFD5]">
                <button
                  onClick={() => onOpenContactModal('Réservation Salle de Réunion (9 500 DZD/jour)')}
                  className="w-full farmio-btn-outline px-5 py-3 text-xs font-heading font-semibold uppercase tracking-wider cursor-pointer flex items-center justify-center gap-2 active:scale-[0.98] transition-transform"
                >
                  <span>{t('sections.s2.meeting.cta', { ns: 'offers' })}</span>
                  <ArrowRight className={`w-3.5 h-3.5 ${isRtl ? 'rotate-180' : ''}`} />
                </button>
              </div>
            </div>

          </div>

        </section>


        {/* =========================================================================
            SECTION 3 : IDENTITÉ DE MARQUE & SITES WEB3 (Studio Showcase)
           ========================================================================= */}
        <section id="section-branding" className="scroll-mt-32">
          <BrandingShowcaseSection onOpenBrandingModal={handleOpenBrandingModal} />
        </section>


        {/* =========================================================================
            SECTION 4 : SERVICES AUX ENTREPRISES
           ========================================================================= */}
        <section id="section-assistance" className="scroll-mt-32 space-y-10">
          
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#E2DFD5]">
            <div className="max-w-3xl space-y-3">
              <div className="inline-flex items-center gap-2 text-xs font-heading font-semibold text-[#04846E] bg-[#04846E]/10 px-3 py-1 rounded-full">
                <Compass className="w-3.5 h-3.5" />
                <span>{t('sections.s3.tag', { ns: 'offers' })}</span>
              </div>
              <h2 className="font-heading text-2xl sm:text-4xl lg:text-[44px] font-semibold text-[#123C32] tracking-tight leading-[1.15]">
                {t('sections.s3.title', { ns: 'offers' })}
              </h2>
              <p className="text-base sm:text-lg font-heading font-medium text-[#123C32]/90">
                {t('sections.s3.subtitle', { ns: 'offers' })}
              </p>
              <p className="text-sm sm:text-base text-[#5E6D68] leading-relaxed">
                {t('sections.s3.description', { ns: 'offers' })}
              </p>
              <div className="flex flex-wrap items-center gap-2 pt-2">
                {getFeatures('sections.s3.servicesList').map((serviceItem, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white border border-[#E2DFD5] text-xs font-sans font-medium text-[#123C32] shadow-2xs"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#04846E]" />
                    <span>{serviceItem}</span>
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs font-heading font-semibold text-[#123C32] bg-white border border-[#E2DFD5] px-4 py-2.5 rounded-2xl shadow-xs shrink-0">
              <Clock className="w-4 h-4 text-[#04846E]" />
              <span>{t('sections.s3.quoteDelay', { ns: 'offers' })}</span>
            </div>
          </div>

          {/* 3 Consulting Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            
            {/* 1. CRÉATION D'ENTREPRISE (Sur devis) */}
            <div className="relative rounded-3xl bg-white border border-[#E2DFD5] p-7 sm:p-8 flex flex-col justify-between shadow-sm hover:shadow-xl hover:border-[#04846E]/40 transition-all duration-300">
              <div className="space-y-6">
                
                {/* Meta */}
                <div className="flex items-center justify-between gap-2">
                  <div className="p-3 rounded-2xl bg-[#04846E]/10 text-[#04846E]">
                    <FileCheck2 className="w-6 h-6" />
                  </div>
                  <span className="px-3 py-1 rounded-full bg-[#04846E]/10 text-[11px] font-heading font-semibold text-[#04846E]">
                    {t('sections.s3.creation.badge', { ns: 'offers' })}
                  </span>
                </div>

                <div>
                  <h3 className="font-heading text-xl sm:text-2xl font-semibold text-[#123C32]">
                    {t('sections.s3.creation.title', { ns: 'offers' })}
                  </h3>
                  <p className="text-xs text-[#5E6D68] mt-1 leading-relaxed">
                    {t('sections.s3.creation.desc', { ns: 'offers' })}
                  </p>
                </div>

                {/* Price / Quote Pill */}
                <div className="p-4 rounded-2xl bg-[#FAF9F5] border border-[#E2DFD5]/80 flex items-center justify-between">
                  <div>
                    <span className="text-xs font-heading text-[#5E6D68] block">{t('sections.s3.creation.label', { ns: 'offers' })}</span>
                    <span className="font-heading text-2xl font-bold text-[#123C32]">{t('sections.s3.creation.price', { ns: 'offers' })}</span>
                  </div>
                  <span className="text-[11px] font-heading font-semibold bg-[#123C32] text-white px-3 py-1 rounded-full">
                    {t('sections.s3.creation.pill', { ns: 'offers' })}
                  </span>
                </div>

                {/* Features */}
                <div className="space-y-3 pt-2">
                  <span className="text-xs font-heading font-semibold uppercase tracking-wider text-[#123C32] block">
                    {t('sections.s3.creation.featuresTitle', { ns: 'offers' })}
                  </span>
                  <ul className="space-y-2.5">
                    {getFeatures('sections.s3.creation.features').map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-[#111817] leading-relaxed">
                        <div className="w-4 h-4 rounded-full bg-[#04846E]/10 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-2.5 h-2.5 text-[#04846E]" />
                        </div>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

              {/* Action Button */}
              <div className="pt-8 mt-6 border-t border-[#E2DFD5]">
                <button
                  onClick={() => onOpenContactModal('Demande de devis - Création d’entreprise')}
                  className="w-full farmio-btn-accent px-5 py-3.5 text-xs font-heading font-semibold uppercase tracking-wider cursor-pointer flex items-center justify-center gap-2 shadow-sm active:scale-[0.98] transition-transform"
                >
                  <span>{t('sections.s3.creation.cta', { ns: 'offers' })}</span>
                  <ArrowRight className={`w-3.5 h-3.5 ${isRtl ? 'rotate-180' : ''}`} />
                </button>
              </div>
            </div>


            {/* 2. CONSEILS & ACCOMPAGNEMENT (Sur devis) */}
            <div className="relative rounded-3xl bg-white border border-[#E2DFD5] p-7 sm:p-8 flex flex-col justify-between shadow-sm hover:shadow-xl hover:border-[#04846E]/40 transition-all duration-300">
              <div className="space-y-6">
                
                {/* Meta */}
                <div className="flex items-center justify-between gap-2">
                  <div className="p-3 rounded-2xl bg-[#04846E]/10 text-[#04846E]">
                    <Compass className="w-6 h-6" />
                  </div>
                  <span className="px-3 py-1 rounded-full bg-[#04846E]/10 text-[11px] font-heading font-semibold text-[#04846E]">
                    {t('sections.s3.advisory.badge', { ns: 'offers' })}
                  </span>
                </div>

                <div>
                  <h3 className="font-heading text-xl sm:text-2xl font-semibold text-[#123C32]">
                    {t('sections.s3.advisory.title', { ns: 'offers' })}
                  </h3>
                  <p className="text-xs text-[#5E6D68] mt-1 leading-relaxed">
                    {t('sections.s3.advisory.desc', { ns: 'offers' })}
                  </p>
                </div>

                {/* Price / Quote Pill */}
                <div className="p-4 rounded-2xl bg-[#FAF9F5] border border-[#E2DFD5]/80 flex items-center justify-between">
                  <div>
                    <span className="text-xs font-heading text-[#5E6D68] block">{t('sections.s3.advisory.label', { ns: 'offers' })}</span>
                    <span className="font-heading text-2xl font-bold text-[#123C32]">{t('sections.s3.advisory.price', { ns: 'offers' })}</span>
                  </div>
                  <span className="text-[11px] font-heading font-semibold bg-[#123C32] text-white px-3 py-1 rounded-full">
                    {t('sections.s3.advisory.pill', { ns: 'offers' })}
                  </span>
                </div>

                {/* Features */}
                <div className="space-y-3 pt-2">
                  <span className="text-xs font-heading font-semibold uppercase tracking-wider text-[#123C32] block">
                    {t('sections.s3.advisory.featuresTitle', { ns: 'offers' })}
                  </span>
                  <ul className="space-y-2.5">
                    {getFeatures('sections.s3.advisory.features').map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-[#111817] leading-relaxed">
                        <div className="w-4 h-4 rounded-full bg-[#04846E]/10 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-2.5 h-2.5 text-[#04846E]" />
                        </div>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

              {/* Action Button */}
              <div className="pt-8 mt-6 border-t border-[#E2DFD5]">
                <button
                  onClick={() => onOpenContactModal('Demande de devis - Conseils & Accompagnement')}
                  className="w-full farmio-btn-accent px-5 py-3.5 text-xs font-heading font-semibold uppercase tracking-wider cursor-pointer flex items-center justify-center gap-2 shadow-sm active:scale-[0.98] transition-transform"
                >
                  <span>{t('sections.s3.advisory.cta', { ns: 'offers' })}</span>
                  <ArrowRight className={`w-3.5 h-3.5 ${isRtl ? 'rotate-180' : ''}`} />
                </button>
              </div>
            </div>


            {/* 3. TRANSFORMATION DIGITALE (Sur devis) */}
            <div className="relative rounded-3xl bg-white border border-[#E2DFD5] p-7 sm:p-8 flex flex-col justify-between shadow-sm hover:shadow-xl hover:border-[#04846E]/40 transition-all duration-300">
              <div className="space-y-6">
                
                {/* Meta */}
                <div className="flex items-center justify-between gap-2">
                  <div className="p-3 rounded-2xl bg-[#04846E]/10 text-[#04846E]">
                    <Cpu className="w-6 h-6" />
                  </div>
                  <span className="px-3 py-1 rounded-full bg-[#04846E]/10 text-[11px] font-heading font-semibold text-[#04846E]">
                    {t('sections.s3.digital.badge', { ns: 'offers' })}
                  </span>
                </div>

                <div>
                  <h3 className="font-heading text-xl sm:text-2xl font-semibold text-[#123C32]">
                    {t('sections.s3.digital.title', { ns: 'offers' })}
                  </h3>
                  <p className="text-xs text-[#5E6D68] mt-1 leading-relaxed">
                    {t('sections.s3.digital.desc', { ns: 'offers' })}
                  </p>
                </div>

                {/* Price / Quote Pill */}
                <div className="p-4 rounded-2xl bg-[#FAF9F5] border border-[#E2DFD5]/80 flex items-center justify-between">
                  <div>
                    <span className="text-xs font-heading text-[#5E6D68] block">{t('sections.s3.digital.label', { ns: 'offers' })}</span>
                    <span className="font-heading text-2xl font-bold text-[#123C32]">{t('sections.s3.digital.price', { ns: 'offers' })}</span>
                  </div>
                  <span className="text-[11px] font-heading font-semibold bg-[#123C32] text-white px-3 py-1 rounded-full">
                    {t('sections.s3.digital.pill', { ns: 'offers' })}
                  </span>
                </div>

                {/* Features */}
                <div className="space-y-3 pt-2">
                  <span className="text-xs font-heading font-semibold uppercase tracking-wider text-[#123C32] block">
                    {t('sections.s3.digital.featuresTitle', { ns: 'offers' })}
                  </span>
                  <ul className="space-y-2.5">
                    {getFeatures('sections.s3.digital.features').map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-[#111817] leading-relaxed">
                        <div className="w-4 h-4 rounded-full bg-[#04846E]/10 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-2.5 h-2.5 text-[#04846E]" />
                        </div>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

              {/* Action Button */}
              <div className="pt-8 mt-6 border-t border-[#E2DFD5]">
                <button
                  onClick={() => onOpenContactModal('Demande de devis - Transformation Digitale')}
                  className="w-full farmio-btn-accent px-5 py-3.5 text-xs font-heading font-semibold uppercase tracking-wider cursor-pointer flex items-center justify-center gap-2 shadow-sm active:scale-[0.98] transition-transform"
                >
                  <span>{t('sections.s3.digital.cta', { ns: 'offers' })}</span>
                  <ArrowRight className={`w-3.5 h-3.5 ${isRtl ? 'rotate-180' : ''}`} />
                </button>
              </div>
            </div>

          </div>

        </section>


        {/* =========================================================================
            4. BOTTOM ADVISORY BANNER & DIRECT CONTACT DESK
           ========================================================================= */}
        <section className="pt-8">
          <div className="relative rounded-[2.5rem] bg-[#123C32] text-[#F5F3EA] p-8 sm:p-12 md:p-16 overflow-hidden shadow-2xl border border-[#04846E]/40 text-start">
            
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#04846E]/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#8EDB68]/10 rounded-full blur-2xl pointer-events-none" />

            <div className="relative z-10 max-w-3xl space-y-6">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-white font-heading text-xs font-semibold">
                <HelpCircle className="w-3.5 h-3.5 text-[#8EDB68]" />
                <span>{t('bottomCta.badge', { ns: 'offers' })}</span>
              </div>

              <h2 className="font-heading text-2xl sm:text-4xl lg:text-[44px] font-semibold text-white tracking-tight leading-[1.15]">
                {t('bottomCta.title', { ns: 'offers' })}
              </h2>

              <p className="text-base sm:text-lg text-[#F5F3EA]/85 font-normal leading-relaxed max-w-2xl">
                {t('bottomCta.desc', { ns: 'offers' })}
              </p>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onOpenContactModal('Conseil personnalisé - Company Setup')}
                  className="farmio-btn-accent px-8 py-4 text-xs sm:text-sm font-heading font-semibold inline-flex items-center gap-2.5 shadow-xl cursor-pointer active:scale-[0.98] transition-all"
                >
                  <span>{t('bottomCta.ctaContact', { ns: 'offers' })}</span>
                  <ArrowRight className={`w-4 h-4 ${isRtl ? 'rotate-180' : ''}`} />
                </button>

                <a
                  href="https://wa.me/213560189825"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="farmio-btn-outline-white px-8 py-4 text-xs sm:text-sm font-heading font-semibold inline-flex items-center gap-2 cursor-pointer active:scale-[0.98] transition-all"
                >
                  <PhoneCall className="w-4 h-4 text-[#8EDB68]" />
                  <span>0560 18 98 25</span>
                </a>
              </div>

              <div className="pt-6 flex flex-wrap items-center gap-6 text-xs font-heading text-[#F5F3EA]/70">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#8EDB68]" />
                  <span>{t('bottomCta.trust1', { ns: 'offers' })}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#8EDB68]" />
                  <span>{t('bottomCta.trust2', { ns: 'offers' })}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#8EDB68]" />
                  <span>{t('bottomCta.trust3', { ns: 'offers' })}</span>
                </div>
              </div>

            </div>
          </div>
        </section>

      </div>

      {/* Dedicated Branding & Web3 Pop-up Modal */}
      <BrandingModal
        isOpen={isBrandingModalOpen}
        onClose={handleCloseBrandingModal}
        initialServiceType={brandingInitialType}
      />

    </div>
  );
};
