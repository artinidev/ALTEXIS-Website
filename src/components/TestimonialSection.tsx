import React from 'react';
import { useTranslation } from 'react-i18next';
import { MotionReveal } from './MotionReveal';

export const TestimonialSection: React.FC = () => {
  const { t } = useTranslation('home');

  return (
    <section className="py-24 sm:py-32 bg-[#0d0c0a] border-t border-white/6">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-4xl text-start">
          
          <MotionReveal delay={0.1}>
            <span className="text-[11px] font-mono font-medium tracking-[0.25em] text-[#dfba63] uppercase block mb-8">
              {t('testimonial.eyebrow', { ns: 'home' })}
            </span>
          </MotionReveal>

          <MotionReveal delay={0.2}>
            <blockquote className="font-editorial text-3xl sm:text-5xl lg:text-[52px] font-normal text-[#f7f5ef] tracking-tight leading-[1.2]">
              "{t('testimonial.quote', { ns: 'home' })}"
            </blockquote>
          </MotionReveal>

          <MotionReveal delay={0.3}>
            <div className="mt-10 pt-8 border-t border-white/8 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-sm text-[#a3a098]">
              <div className="font-editorial text-base font-bold text-[#f7f5ef]">
                {t('testimonial.author', { ns: 'home' })}
              </div>
              <div className="text-xs font-mono text-[#dfba63]">
                {t('testimonial.company', { ns: 'home' })}
              </div>
            </div>
          </MotionReveal>

        </div>
      </div>
    </section>
  );
};
