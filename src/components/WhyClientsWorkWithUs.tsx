import React from 'react';
import { useTranslation } from 'react-i18next';
import { MotionReveal } from './MotionReveal';

export const WhyClientsWorkWithUs: React.FC = () => {
  const { t } = useTranslation('home');

  const principles = [
    {
      title: t('whyUs.principles.0.title', { ns: 'home' }),
      desc: t('whyUs.principles.0.desc', { ns: 'home' }),
    },
    {
      title: t('whyUs.principles.1.title', { ns: 'home' }),
      desc: t('whyUs.principles.1.desc', { ns: 'home' }),
    },
    {
      title: t('whyUs.principles.2.title', { ns: 'home' }),
      desc: t('whyUs.principles.2.desc', { ns: 'home' }),
    },
    {
      title: t('whyUs.principles.3.title', { ns: 'home' }),
      desc: t('whyUs.principles.3.desc', { ns: 'home' }),
    },
  ];

  return (
    <section className="py-24 sm:py-32 bg-[#11100d] border-t border-white/6">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Header */}
        <div className="max-w-3xl text-start mb-20">
          <MotionReveal delay={0.1}>
            <h2 className="font-editorial text-3xl sm:text-5xl lg:text-[54px] font-normal text-[#f7f5ef] tracking-tight">
              {t('whyUs.headline', { ns: 'home' })}
            </h2>
          </MotionReveal>
        </div>

        {/* 4 Quiet Editorial Principles - Clean Typography and Spacing, No Card Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 text-start pt-8 border-t border-white/8">
          {principles.map((p, idx) => (
            <MotionReveal key={idx} delay={0.15 * idx} direction="up">
              <div className="space-y-4">
                <span className="font-editorial text-xs font-bold text-[#dfba63] tracking-widest uppercase block">
                  Principle 0{idx + 1}
                </span>

                <h3 className="font-editorial text-2xl font-bold text-[#f7f5ef]">
                  {p.title}
                </h3>

                <p className="text-sm sm:text-base text-[#a3a098] font-normal leading-relaxed">
                  {p.desc}
                </p>
              </div>
            </MotionReveal>
          ))}
        </div>

      </div>
    </section>
  );
};
