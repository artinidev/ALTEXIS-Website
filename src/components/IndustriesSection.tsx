import React from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowUpRight } from 'lucide-react';
import { MotionReveal } from './MotionReveal';

interface IndustriesSectionProps {
  onOpenContactModal: (industryName?: string) => void;
}

export const IndustriesSection: React.FC<IndustriesSectionProps> = ({ onOpenContactModal }) => {
  const { t, i18n } = useTranslation('home');
  const isRtl = i18n.language === 'ar';

  const industries = [
    {
      num: '01',
      title: t('industries.items.0.title', { ns: 'home' }),
      desc: t('industries.items.0.desc', { ns: 'home' }),
    },
    {
      num: '02',
      title: t('industries.items.1.title', { ns: 'home' }),
      desc: t('industries.items.1.desc', { ns: 'home' }),
    },
    {
      num: '03',
      title: t('industries.items.2.title', { ns: 'home' }),
      desc: t('industries.items.2.desc', { ns: 'home' }),
    },
    {
      num: '04',
      title: t('industries.items.3.title', { ns: 'home' }),
      desc: t('industries.items.3.desc', { ns: 'home' }),
    },
    {
      num: '05',
      title: t('industries.items.4.title', { ns: 'home' }),
      desc: t('industries.items.4.desc', { ns: 'home' }),
    },
    {
      num: '06',
      title: t('industries.items.5.title', { ns: 'home' }),
      desc: t('industries.items.5.desc', { ns: 'home' }),
    },
  ];

  return (
    <section id="industries" className="py-24 sm:py-32 bg-[#0d0c0a] border-t border-white/6">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl text-start mb-20">
          <MotionReveal delay={0.1}>
            <span className="text-[11px] font-mono font-medium tracking-[0.25em] text-[#dfba63] uppercase block mb-4">
              {t('industries.eyebrow', { ns: 'home' })}
            </span>
          </MotionReveal>

          <MotionReveal delay={0.2}>
            <h2 className="font-editorial text-3xl sm:text-5xl lg:text-[54px] font-normal text-[#f7f5ef] tracking-tight leading-[1.12]">
              {t('industries.headline', { ns: 'home' })}
            </h2>
          </MotionReveal>

          <MotionReveal delay={0.3}>
            <p className="mt-6 text-base sm:text-lg text-[#a3a098] font-normal leading-relaxed">
              {t('industries.subtitle', { ns: 'home' })}
            </p>
          </MotionReveal>
        </div>

        {/* 6 Industry Editorial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-start">
          {industries.map((ind, idx) => (
            <MotionReveal key={ind.num} delay={0.1 * idx} direction="up">
              <div
                onClick={() => onOpenContactModal(ind.title)}
                className="p-8 rounded-3xl bg-[#141310] border border-white/8 hover:border-[#dfba63]/50 transition-all duration-300 flex flex-col justify-between h-full group cursor-pointer"
              >
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <span className="font-editorial text-sm font-bold text-[#dfba63]">
                      {ind.num}
                    </span>
                    <div className="w-8 h-8 rounded-full border border-white/10 group-hover:border-[#dfba63] group-hover:bg-[#dfba63] flex items-center justify-center text-[#a3a098] group-hover:text-[#141310] transition-colors">
                      <ArrowUpRight className={`w-3.5 h-3.5 ${isRtl ? '-scale-x-100' : ''}`} />
                    </div>
                  </div>

                  <h3 className="font-editorial text-2xl font-bold text-[#f7f5ef] group-hover:text-[#dfba63] transition-colors mb-3">
                    {ind.title}
                  </h3>

                  <p className="text-sm text-[#a3a098] leading-relaxed font-normal">
                    {ind.desc}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-white/6 text-xs font-mono text-[#6e6b63]">
                  Technical Sourcing Coverage
                </div>
              </div>
            </MotionReveal>
          ))}
        </div>

      </div>
    </section>
  );
};
