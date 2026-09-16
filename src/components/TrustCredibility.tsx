import React from 'react';
import { useTranslation } from 'react-i18next';
import { MotionReveal } from './MotionReveal';

export const TrustCredibility: React.FC = () => {
  const { t } = useTranslation('home');

  const pillars = [
    {
      title: t('trustCredibility.pillars.0.title', { ns: 'home' }),
      desc: t('trustCredibility.pillars.0.desc', { ns: 'home' }),
    },
    {
      title: t('trustCredibility.pillars.1.title', { ns: 'home' }),
      desc: t('trustCredibility.pillars.1.desc', { ns: 'home' }),
    },
    {
      title: t('trustCredibility.pillars.2.title', { ns: 'home' }),
      desc: t('trustCredibility.pillars.2.desc', { ns: 'home' }),
    },
  ];

  return (
    <section className="py-24 sm:py-32 bg-[#11100d] border-t border-white/6">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16 text-start">
          <div className="lg:col-span-5">
            <MotionReveal delay={0.1}>
              <span className="text-[11px] font-mono font-medium tracking-[0.25em] text-[#dfba63] uppercase block mb-4">
                {t('trustCredibility.eyebrow', { ns: 'home' })}
              </span>
              <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-normal text-[#f7f5ef] tracking-tight">
                {t('trustCredibility.headline', { ns: 'home' })}
              </h2>
            </MotionReveal>
          </div>

          <div className="lg:col-span-7 lg:pt-8">
            <MotionReveal delay={0.2}>
              <p className="text-base sm:text-lg text-[#a3a098] font-normal leading-relaxed">
                {t('trustCredibility.body', { ns: 'home' })}
              </p>
            </MotionReveal>
          </div>
        </div>

        {/* 3 Editorial Pillar Lines */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-white/8 text-start">
          {pillars.map((pillar, idx) => (
            <MotionReveal key={idx} delay={0.15 * idx} direction="up">
              <div className="space-y-3">
                <span className="font-editorial text-sm font-bold text-[#dfba63]">
                  0{idx + 1}
                </span>
                <h3 className="font-editorial text-xl font-bold text-[#f7f5ef]">
                  {pillar.title}
                </h3>
                <p className="text-sm text-[#a3a098] leading-relaxed font-normal">
                  {pillar.desc}
                </p>
              </div>
            </MotionReveal>
          ))}
        </div>

      </div>
    </section>
  );
};
