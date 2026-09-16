import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  ArrowRight,
  Headphones
} from 'lucide-react';
import { ProcurementRequestForm } from './ProcurementRequestForm';

interface CTASectionProps {
  onOpenRfqModal: (topic?: string) => void;
}

export const CTASection: React.FC<CTASectionProps> = ({ onOpenRfqModal }) => {
  const { t, i18n } = useTranslation(['home', 'common', 'rfq']);
  const isRtl = i18n.language === 'ar';

  return (
    <section id="rfq-section" className="py-20 md:py-28 bg-[#060a12] relative industrial-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Top Callout Box */}
        <div className="rounded-3xl bg-gradient-to-b from-[#0c1626] to-[#080d19] border border-cyan-500/30 p-8 sm:p-12 mb-16 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 text-start">
              <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest block mb-2">
                Buyer-Side Engagement
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-mono tracking-tight leading-tight">
                {t('ctaSection.headline', { ns: 'home' })}
              </h2>
              <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
                {t('ctaSection.body', { ns: 'home' })}
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3.5">
              <button
                onClick={() => onOpenRfqModal('General Sourcing Request')}
                className="w-full inline-flex items-center justify-center gap-2 py-4 px-6 rounded-xl bg-gradient-to-r from-cyan-400 to-cyan-300 hover:from-cyan-300 hover:to-cyan-200 text-slate-950 font-bold text-xs uppercase tracking-wider font-mono shadow-lg shadow-cyan-500/25 transition-all cursor-pointer"
              >
                <span>{t('ctaSection.primaryCta', { ns: 'home' })}</span>
                <ArrowRight className={`w-4 h-4 ${isRtl ? 'rotate-180' : ''}`} />
              </button>

              <a
                href="#direct-rfq"
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-200 border border-slate-700 text-xs font-mono font-semibold transition-colors"
              >
                <Headphones className="w-4 h-4 text-cyan-400" />
                <span>{t('ctaSection.secondaryCta', { ns: 'home' })}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Dedicated On-Page RFQ Form Card */}
        <div id="direct-rfq" className="rounded-3xl bg-[#090f1d] border border-slate-800 p-6 sm:p-10 shadow-2xl">
          <div className="text-start max-w-2xl mb-8 pb-6 border-b border-slate-800">
            <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest block mb-1">
              Procurement Request Desk
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-mono">
              {t('title', { ns: 'rfq' })}
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-2">
              {t('subtitle', { ns: 'rfq' })}
            </p>
          </div>

          <ProcurementRequestForm isModal={false} />
        </div>

      </div>
    </section>
  );
};
