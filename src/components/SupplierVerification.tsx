import React from 'react';
import { useTranslation } from 'react-i18next';
import { Check } from 'lucide-react';
import { MotionReveal } from './MotionReveal';

export const SupplierVerification: React.FC = () => {
  const { t } = useTranslation('home');

  const verificationPoints = [
    t('supplierInsight.checks.0', { ns: 'home' }),
    t('supplierInsight.checks.1', { ns: 'home' }),
    t('supplierInsight.checks.2', { ns: 'home' }),
    t('supplierInsight.checks.3', { ns: 'home' }),
  ];

  return (
    <section id="verification" className="py-24 sm:py-32 bg-[#11100d] border-t border-white/6">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Editorial Copy */}
          <div className="lg:col-span-6 text-start">
            <MotionReveal delay={0.1}>
              <span className="text-[11px] font-mono font-medium tracking-[0.25em] text-[#dfba63] uppercase block mb-4">
                {t('supplierInsight.eyebrow', { ns: 'home' })}
              </span>
            </MotionReveal>

            <MotionReveal delay={0.2}>
              <h2 className="font-editorial text-3xl sm:text-5xl font-normal text-[#f7f5ef] tracking-tight leading-[1.14]">
                {t('supplierInsight.headline', { ns: 'home' })}
              </h2>
            </MotionReveal>

            <MotionReveal delay={0.3}>
              <p className="mt-8 text-base sm:text-lg text-[#a3a098] font-normal leading-relaxed">
                {t('supplierInsight.body', { ns: 'home' })}
              </p>
            </MotionReveal>

            {/* Minimal Verification Checkpoints */}
            <MotionReveal delay={0.4}>
              <div className="mt-8 pt-8 border-t border-white/8 space-y-3">
                {verificationPoints.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-sm text-[#f7f5ef] font-medium">
                    <div className="w-5 h-5 rounded-full bg-[#10b981]/15 border border-[#10b981]/30 flex items-center justify-center text-[#10b981] shrink-0">
                      <Check className="w-3 h-3" />
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </MotionReveal>
          </div>

          {/* Right Column: High-End Industrial Supplier Facility Photography */}
          <div className="lg:col-span-6">
            <MotionReveal delay={0.3} direction="left">
              <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl aspect-[4/3] bg-[#141310]">
                <img
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80"
                  alt="Industrial manufacturing plant and CNC machining quality verification"
                  className="w-full h-full object-cover grayscale opacity-85 hover:grayscale-0 hover:scale-[1.02] transition-all duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d0c0a]/80 via-transparent to-transparent" />
                
                {/* Subtle Overlay Label */}
                <div className="absolute bottom-6 inset-x-6 flex items-center justify-between text-xs font-mono text-[#f7f5ef]">
                  <span className="bg-[#141310]/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
                    5-Point Supplier Audit
                  </span>
                  <span className="text-[#10b981] font-bold">100% Direct Verification</span>
                </div>
              </div>
            </MotionReveal>
          </div>

        </div>

      </div>
    </section>
  );
};
