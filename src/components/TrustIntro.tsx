import React from 'react';
import { useTranslation } from 'react-i18next';
import { MotionReveal } from './MotionReveal';

export const TrustIntro: React.FC = () => {
  const { t } = useTranslation('home');

  return (
    <section className="py-24 sm:py-32 bg-[#0d0c0a] border-t border-white/6">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-4xl text-start">
          
          <MotionReveal delay={0.1}>
            <span className="text-[11px] font-mono font-medium tracking-[0.25em] text-[#dfba63] uppercase block mb-6">
              {t('trustIntro.eyebrow', { ns: 'home' })}
            </span>
          </MotionReveal>

          <MotionReveal delay={0.2}>
            <h2 className="font-editorial text-3xl sm:text-5xl lg:text-[54px] font-normal text-[#f7f5ef] tracking-tight leading-[1.14]">
              {t('trustIntro.headline', { ns: 'home' })}
            </h2>
          </MotionReveal>

          <MotionReveal delay={0.3}>
            <p className="mt-8 text-lg sm:text-xl text-[#a3a098] font-normal leading-relaxed">
              {t('trustIntro.body', { ns: 'home' })}
            </p>
          </MotionReveal>

        </div>
      </div>
    </section>
  );
};
