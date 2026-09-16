import React from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowRight } from 'lucide-react';
import { MotionReveal } from './MotionReveal';

interface GlobalSourcingSectionProps {
  onOpenContactModal: () => void;
}

export const GlobalSourcingSection: React.FC<GlobalSourcingSectionProps> = ({ onOpenContactModal }) => {
  const { t, i18n } = useTranslation('home');
  const isRtl = i18n.language === 'ar';

  return (
    <section className="relative py-32 sm:py-44 bg-[#0a0908] border-t border-white/6 overflow-hidden">
      {/* Background Cinematic Port Photograph with Dark Vignette */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=2000&q=85"
          alt="International container port terminal and global trade corridors"
          className="w-full h-full object-cover grayscale opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0908] via-[#0a0908]/70 to-[#0a0908]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="max-w-3xl text-start">
          
          <MotionReveal delay={0.1}>
            <span className="text-[11px] font-mono font-medium tracking-[0.25em] text-[#dfba63] uppercase block mb-6">
              {t('globalSourcing.eyebrow', { ns: 'home' })}
            </span>
          </MotionReveal>

          <MotionReveal delay={0.2}>
            <h2 className="font-editorial text-3xl sm:text-5xl lg:text-[62px] font-normal text-[#f7f5ef] tracking-tight leading-[1.1]">
              When the right supplier isn't nearby,{' '}
              <span className="font-editorial-italic text-[#dfba63] block sm:inline">
                look further.
              </span>
            </h2>
          </MotionReveal>

          <MotionReveal delay={0.3}>
            <p className="mt-8 text-lg sm:text-xl text-[#a3a098] font-normal leading-relaxed">
              {t('globalSourcing.body', { ns: 'home' })}
            </p>
          </MotionReveal>

          <MotionReveal delay={0.4}>
            <div className="mt-10">
              <button
                onClick={onOpenContactModal}
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#f7f5ef] hover:bg-[#dfba63] text-[#141310] font-semibold text-xs uppercase tracking-wider transition-colors cursor-pointer active:scale-[0.98]"
              >
                <span>{t('globalSourcing.cta', { ns: 'home' })}</span>
                <ArrowRight className={`w-3.5 h-3.5 ${isRtl ? 'rotate-180' : ''}`} />
              </button>
            </div>
          </MotionReveal>

        </div>
      </div>
    </section>
  );
};
