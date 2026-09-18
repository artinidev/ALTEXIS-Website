import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Sparkles,
  Palette,
  Globe,
  ArrowRight,
  Check,
  ShieldCheck,
  Clock,
} from 'lucide-react';
import { WhatsAppIcon } from '../WhatsAppFloatingButton';

interface BrandingShowcaseSectionProps {
  onOpenBrandingModal: (serviceType?: 'branding' | 'website' | 'bundle') => void;
}

export const BrandingShowcaseSection: React.FC<BrandingShowcaseSectionProps> = ({
  onOpenBrandingModal,
}) => {
  const { t, i18n } = useTranslation(['offers', 'common']);
  const isRtl = i18n.language === 'ar';
  const [activeTab, setActiveTab] = useState<'bundle' | 'branding' | 'website'>('bundle');

  const brandDeliverables = [
    t('brandingSection.brandPillar.deliverables.0', { ns: 'offers' }),
    t('brandingSection.brandPillar.deliverables.1', { ns: 'offers' }),
    t('brandingSection.brandPillar.deliverables.2', { ns: 'offers' }),
    t('brandingSection.brandPillar.deliverables.3', { ns: 'offers' }),
  ];

  const webDeliverables = [
    t('brandingSection.webPillar.deliverables.0', { ns: 'offers' }),
    t('brandingSection.webPillar.deliverables.1', { ns: 'offers' }),
    t('brandingSection.webPillar.deliverables.2', { ns: 'offers' }),
    t('brandingSection.webPillar.deliverables.3', { ns: 'offers' }),
  ];

  return (
    <div className="relative rounded-[2.5rem] bg-gradient-to-br from-[#061F1A] via-[#041612] to-[#020B09] text-[#F5F3EA] p-7 sm:p-12 lg:p-14 overflow-hidden shadow-2xl border border-[#04846E]/40 text-start font-sans">
      {/* Ambient Glow Orbs */}
      <div className="absolute top-0 right-0 w-[30rem] h-[30rem] bg-[#04846E]/20 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#8EDB68]/10 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20" />

      {/* Subtle Tech Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(#8EDB68 1px, transparent 1px), radial-gradient(#04846E 1px, transparent 1px)',
          backgroundSize: '28px 28px',
          backgroundPosition: '0 0, 14px 14px',
        }}
      />

      <div className="relative z-10 space-y-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#8EDB68]/15 border border-[#8EDB68]/30 text-[#8EDB68] font-heading text-xs font-semibold tracking-wider uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{t('brandingSection.tag', { ns: 'offers' })} • {t('brandingSection.badge', { ns: 'offers' })}</span>
            </div>

            <h3 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-semibold text-white tracking-tight leading-tight">
              {t('brandingSection.title', { ns: 'offers' })}
            </h3>

            <p className="text-[#F5F3EA]/75 text-xs sm:text-sm leading-relaxed font-normal">
              {t('brandingSection.subtitle', { ns: 'offers' })}
            </p>
          </div>

          {/* Quick Pillar Switcher Tabs */}
          <div className="flex items-center p-1.5 rounded-2xl bg-white/5 border border-white/10 shrink-0 self-start lg:self-end">
            <button
              onClick={() => setActiveTab('bundle')}
              className={`px-4 py-2 rounded-xl text-xs font-heading font-semibold transition-all cursor-pointer ${
                activeTab === 'bundle'
                  ? 'bg-[#8EDB68] text-[#0A1D1A] shadow-md'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              {t('brandingSection.tabs.bundle', { ns: 'offers' })}
            </button>
            <button
              onClick={() => setActiveTab('branding')}
              className={`px-4 py-2 rounded-xl text-xs font-heading font-semibold transition-all cursor-pointer ${
                activeTab === 'branding'
                  ? 'bg-[#8EDB68] text-[#0A1D1A] shadow-md'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              {t('brandingSection.tabs.branding', { ns: 'offers' })}
            </button>
            <button
              onClick={() => setActiveTab('website')}
              className={`px-4 py-2 rounded-xl text-xs font-heading font-semibold transition-all cursor-pointer ${
                activeTab === 'website'
                  ? 'bg-[#8EDB68] text-[#0A1D1A] shadow-md'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              {t('brandingSection.tabs.website', { ns: 'offers' })}
            </button>
          </div>
        </div>

        {/* Dual Pillar Showcase Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Card 1: Full Brand Identity */}
          <div
            className={`relative rounded-3xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 border ${
              activeTab === 'branding' || activeTab === 'bundle'
                ? 'bg-white/[0.04] border-[#8EDB68]/40 shadow-xl ring-1 ring-[#8EDB68]/20'
                : 'bg-white/[0.02] border-white/10 opacity-70'
            }`}
          >
            <div className="space-y-6">
              {/* Header */}
              <div className="flex items-center justify-between gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#8EDB68]/15 border border-[#8EDB68]/30 flex items-center justify-center text-[#8EDB68] shadow-inner">
                  <Palette className="w-6 h-6" />
                </div>
                <span className="px-3.5 py-1.5 rounded-full bg-white/10 text-xs font-heading font-semibold text-[#8EDB68]">
                  {t('brandingSection.brandPillar.badge', { ns: 'offers' })}
                </span>
              </div>

              <div>
                <h4 className="font-heading text-xl sm:text-2xl font-semibold text-white tracking-tight">
                  {t('brandingSection.brandPillar.title', { ns: 'offers' })}
                </h4>
                <p className="text-xs sm:text-sm text-[#F5F3EA]/70 mt-1.5 leading-relaxed font-sans">
                  {t('brandingSection.brandPillar.desc', { ns: 'offers' })}
                </p>
              </div>

              {/* Deliverables List */}
              <div className="space-y-3 pt-2">
                <span className="text-xs font-heading font-semibold uppercase tracking-wider text-[#8EDB68] block">
                  {t('brandingSection.brandPillar.deliverablesTitle', { ns: 'offers' })}
                </span>
                <ul className="space-y-2.5">
                  {brandDeliverables.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-[#F5F3EA]/90 leading-relaxed font-sans">
                      <div className="w-4 h-4 rounded-full bg-[#8EDB68]/20 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-2.5 h-2.5 text-[#8EDB68]" />
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-white/10">
              <button
                onClick={() => onOpenBrandingModal('branding')}
                className="w-full py-3.5 px-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-heading text-xs font-semibold uppercase tracking-wider cursor-pointer flex items-center justify-center gap-2 transition-colors active:scale-[0.99]"
              >
                <span>{t('brandingSection.brandPillar.cta', { ns: 'offers' })}</span>
                <ArrowRight className={`w-3.5 h-3.5 ${isRtl ? 'rotate-180' : ''}`} />
              </button>
            </div>
          </div>


          {/* Card 2: Modern Web3 & Next-Gen Websites */}
          <div
            className={`relative rounded-3xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 border ${
              activeTab === 'website' || activeTab === 'bundle'
                ? 'bg-white/[0.04] border-[#04846E]/60 shadow-xl ring-1 ring-[#04846E]/30'
                : 'bg-white/[0.02] border-white/10 opacity-70'
            }`}
          >
            <div className="space-y-6">
              {/* Header */}
              <div className="flex items-center justify-between gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#04846E]/30 border border-[#04846E] flex items-center justify-center text-[#8EDB68] shadow-inner">
                  <Globe className="w-6 h-6" />
                </div>
                <span className="px-3.5 py-1.5 rounded-full bg-white/10 text-xs font-heading font-semibold text-[#8EDB68]">
                  {t('brandingSection.webPillar.badge', { ns: 'offers' })}
                </span>
              </div>

              <div>
                <h4 className="font-heading text-xl sm:text-2xl font-semibold text-white tracking-tight">
                  {t('brandingSection.webPillar.title', { ns: 'offers' })}
                </h4>
                <p className="text-xs sm:text-sm text-[#F5F3EA]/70 mt-1.5 leading-relaxed font-sans">
                  {t('brandingSection.webPillar.desc', { ns: 'offers' })}
                </p>
              </div>

              {/* Deliverables List */}
              <div className="space-y-3 pt-2">
                <span className="text-xs font-heading font-semibold uppercase tracking-wider text-[#8EDB68] block">
                  {t('brandingSection.webPillar.deliverablesTitle', { ns: 'offers' })}
                </span>
                <ul className="space-y-2.5">
                  {webDeliverables.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-[#F5F3EA]/90 leading-relaxed font-sans">
                      <div className="w-4 h-4 rounded-full bg-[#8EDB68]/20 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-2.5 h-2.5 text-[#8EDB68]" />
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-white/10">
              <button
                onClick={() => onOpenBrandingModal('website')}
                className="w-full py-3.5 px-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-heading text-xs font-semibold uppercase tracking-wider cursor-pointer flex items-center justify-center gap-2 transition-colors active:scale-[0.99]"
              >
                <span>{t('brandingSection.webPillar.cta', { ns: 'offers' })}</span>
                <ArrowRight className={`w-3.5 h-3.5 ${isRtl ? 'rotate-180' : ''}`} />
              </button>
            </div>
          </div>

        </div>

        {/* Feature Highlights & Guarantees Bar */}
        <div className="pt-4 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-sans">
          <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-white/[0.03] border border-white/10">
            <Clock className="w-5 h-5 text-[#8EDB68] shrink-0" />
            <div>
              <span className="font-semibold text-white block">
                {t('brandingSection.highlights.speed.title', { ns: 'offers' })}
              </span>
              <span className="text-[11px] text-[#F5F3EA]/60">
                {t('brandingSection.highlights.speed.desc', { ns: 'offers' })}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-white/[0.03] border border-white/10">
            <ShieldCheck className="w-5 h-5 text-[#8EDB68] shrink-0" />
            <div>
              <span className="font-semibold text-white block">
                {t('brandingSection.highlights.ownership.title', { ns: 'offers' })}
              </span>
              <span className="text-[11px] text-[#F5F3EA]/60">
                {t('brandingSection.highlights.ownership.desc', { ns: 'offers' })}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-white/[0.03] border border-white/10">
            <WhatsAppIcon className="w-5 h-5 text-[#25D366] shrink-0" />
            <div>
              <span className="font-semibold text-white block">
                {t('brandingSection.highlights.support.title', { ns: 'offers' })}
              </span>
              <span className="text-[11px] text-[#F5F3EA]/60">
                {t('brandingSection.highlights.support.desc', { ns: 'offers' })}
              </span>
            </div>
          </div>
        </div>

        {/* Primary Bottom CTA Banner */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 font-sans">
          <p className="text-xs text-[#F5F3EA]/70">
            {t('brandingSection.tagline', { ns: 'offers' })}
          </p>

          <button
            onClick={() => onOpenBrandingModal('bundle')}
            className="w-full sm:w-auto farmio-btn-accent px-8 py-4 text-xs sm:text-sm font-heading font-semibold uppercase tracking-wider cursor-pointer shadow-xl inline-flex items-center justify-center gap-3 active:scale-[0.98] transition-all"
          >
            <span>{t('brandingSection.cta', { ns: 'offers' })}</span>
            <ArrowRight className={`w-4 h-4 ${isRtl ? 'rotate-180' : ''}`} />
          </button>
        </div>

      </div>
    </div>
  );
};
