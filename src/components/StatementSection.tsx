import React from 'react';
import { useTranslation } from 'react-i18next';
import { MotionReveal } from './MotionReveal';

export const StatementSection: React.FC = () => {
  const { t } = useTranslation('home');

  return (
    <section className="relative py-32 sm:py-44 bg-[#0a0908] border-t border-white/6 overflow-hidden">
      {/* Background Cinematic Industrial Visual with Dark Mask */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=2000&q=85"
          alt="Global ocean freight and intermodal logistics container terminal"
          className="w-full h-full object-cover grayscale opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0908] via-[#0a0908]/80 to-[#0a0908]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="max-w-3xl text-start">
          
          <MotionReveal delay={0.1}>
            <h2 className="font-editorial text-4xl sm:text-6xl lg:text-[68px] font-normal text-[#f7f5ef] tracking-tight leading-[1.08]">
              Global reach.{' '}
              <span className="font-editorial-italic text-[#dfba63] block sm:inline">
                Local understanding.
              </span>
            </h2>
          </MotionReveal>

          <MotionReveal delay={0.2}>
            <p className="mt-8 text-lg sm:text-xl text-[#a3a098] font-normal leading-relaxed">
              {t('statement.supportingText', { ns: 'home' })}
            </p>
          </MotionReveal>

        </div>
      </div>
    </section>
  );
};
