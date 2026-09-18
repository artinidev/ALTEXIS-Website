import React from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowRight } from 'lucide-react';
import { MotionReveal } from './MotionReveal';

interface AboutSectionProps {
  onOpenContactModal: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenContactModal }) => {
  const { t, i18n } = useTranslation('home');
  const isRtl = i18n.language === 'ar';

  return (
    <section id="about" className="py-24 sm:py-32 bg-[#0d0c0a] border-t border-white/6">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Industrial Activity Image */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <MotionReveal delay={0.2} direction="right">
              <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl aspect-[4/3] bg-[#141310]">
                <img
                  src="/hot-forged-metallurgy.jpg"
                  alt="Industrial precision engineering and metal fabrication inspection"
                  className="w-full h-full object-cover grayscale opacity-85 hover:grayscale-0 hover:scale-[1.02] transition-all duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d0c0a]/80 via-transparent to-transparent" />
                
                <div className="absolute bottom-6 inset-x-6 flex items-center justify-between text-xs font-mono text-[#a3a098]">
                  <span>Fiduciary Buyer-Side Desk</span>
                  <span className="text-[#dfba63]">Global Sourcing Intelligence</span>
                </div>
              </div>
            </MotionReveal>
          </div>

          {/* Right Column: Editorial Narrative */}
          <div className="lg:col-span-6 order-1 lg:order-2 text-start">
            <MotionReveal delay={0.1}>
              <span className="text-[11px] font-mono font-medium tracking-[0.25em] text-[#dfba63] uppercase block mb-4">
                {t('about.eyebrow', { ns: 'home' })}
              </span>
            </MotionReveal>

            <MotionReveal delay={0.2}>
              <h2 className="font-editorial text-3xl sm:text-5xl font-normal text-[#f7f5ef] tracking-tight leading-[1.14]">
                {t('about.headline', { ns: 'home' })}
              </h2>
            </MotionReveal>

            <MotionReveal delay={0.3}>
              <p className="mt-8 text-base sm:text-lg text-[#a3a098] font-normal leading-relaxed">
                {t('about.body', { ns: 'home' })}
              </p>
            </MotionReveal>

            <MotionReveal delay={0.4}>
              <div className="mt-10">
                <button
                  onClick={onOpenContactModal}
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-transparent hover:bg-white/5 text-[#f7f5ef] border border-white/15 text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
                >
                  <span>{t('about.cta', { ns: 'home' })}</span>
                  <ArrowRight className={`w-3.5 h-3.5 ${isRtl ? 'rotate-180' : ''}`} />
                </button>
              </div>
            </MotionReveal>
          </div>

        </div>

      </div>
    </section>
  );
};
