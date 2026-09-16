import React from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowRight, ShieldCheck, Clock, CheckCircle2 } from 'lucide-react';
import { MotionReveal } from './MotionReveal';

interface FinalCTASectionProps {
  onOpenContactModal: () => void;
}

export const FinalCTASection: React.FC<FinalCTASectionProps> = ({ onOpenContactModal }) => {
  const { i18n } = useTranslation('home');
  const isRtl = i18n.language === 'ar';

  return (
    <section className="py-24 sm:py-36 bg-[#00221F] border-t border-[#04846E]/30 relative overflow-hidden text-white">
      
      {/* Background radial glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#00D991]/12 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Executive Banner Container */}
        <MotionReveal delay={0.1} direction="up">
          <div className="rounded-3xl bg-gradient-to-br from-[#032B27] via-[#043833] to-[#011C19] border border-[#00D991]/30 p-8 sm:p-16 lg:p-20 shadow-2xl relative overflow-hidden">
            
            {/* Top decorative corner glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#00D991]/20 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-4xl text-start relative z-10">

              <h2 className="font-editorial text-4xl sm:text-6xl lg:text-[72px] font-bold text-white tracking-tight leading-[1.06]">
                Have a procurement<br />
                <span className="font-editorial-italic text-[#00D991]">
                  requirement?
                </span>
              </h2>

              <p className="mt-8 text-lg sm:text-xl text-[#A3C2BD] font-normal leading-relaxed max-w-2xl font-body">
                Tell us what you're looking for. Our senior international desk will review technical specifications, evaluate direct mill options, and determine the optimal path forward.
              </p>

              {/* Action Buttons */}
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <button
                  onClick={onOpenContactModal}
                  className="altexis-pill-btn px-8 py-4 text-xs font-bold uppercase tracking-wider cursor-pointer inline-flex items-center gap-3 shadow-xl active:scale-[0.98]"
                >
                  <span>Submit a Procurement Request</span>
                  <ArrowRight className={`w-3.5 h-3.5 ${isRtl ? 'rotate-180' : ''}`} />
                </button>

                <a
                  href="#contact"
                  className="altexis-pill-btn-outline px-8 py-4 text-xs font-semibold uppercase tracking-wider inline-flex items-center gap-2"
                >
                  <span>Explore Direct Inquiry Form</span>
                </a>
              </div>

              {/* Trust Indicators Bar */}
              <div className="mt-12 pt-8 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-mono text-[#A3C2BD]">
                <div className="flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-[#00D991]" />
                  <span>48h Guaranteed SLA Dispatch</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#00D991]" />
                  <span>100% Direct Factory Pricing</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-[#00D991]" />
                  <span>Fiduciary NDA Protected</span>
                </div>
              </div>

            </div>

          </div>
        </MotionReveal>

      </div>
    </section>
  );
};
