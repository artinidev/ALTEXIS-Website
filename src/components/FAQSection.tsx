import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Plus, Minus, HelpCircle, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { MotionReveal } from './MotionReveal';

interface FAQSectionProps {
  onOpenContactModal?: (topic?: string) => void;
}

export const FAQSection: React.FC<FAQSectionProps> = ({ onOpenContactModal }) => {
  const { t } = useTranslation('home');
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: t('faq.questions.0.q', { ns: 'home', defaultValue: 'How does ALTEXIS differ from a trading company or broker?' }),
      a: t('faq.questions.0.a', { ns: 'home', defaultValue: 'Unlike brokers who mark up product prices with hidden margins, ALTEXIS operates strictly on the buyer side as a fiduciary procurement desk. All supplier quotations are presented at pure factory cost with full transparency, backed by direct factory auditing and milestone oversight.' }),
    },
    {
      q: t('faq.questions.1.q', { ns: 'home', defaultValue: 'How do you verify supplier legitimacy and production quality?' }),
      a: t('faq.questions.1.a', { ns: 'home', defaultValue: 'We execute a proprietary 5-Point Verification Audit covering legal entity registration, certified manufacturing capacity, active ISO/API certifications, credit risk standing, and past export performance before any contract or deposit is authorized.' }),
    },
    {
      q: t('faq.questions.2.q', { ns: 'home', defaultValue: 'What fee structure does ALTEXIS use?' }),
      a: t('faq.questions.2.a', { ns: 'home', defaultValue: 'We structure engagements based on client preference: either a transparent milestone advisory fee or a performance-aligned percentage of verified landed cost savings. There are zero hidden costs or undisclosed factory kickbacks.' }),
    },
    {
      q: t('faq.questions.3.q', { ns: 'home', defaultValue: 'What is the typical turnaround for supplier sourcing & quotation normalization?' }),
      a: t('faq.questions.3.a', { ns: 'home', defaultValue: 'Standard industrial mandates deliver a verified multi-supplier comparison matrix with normalized factory quotations within 5 to 10 business days, depending on technical complexity and drawing tolerances.' }),
    },
    {
      q: t('faq.questions.4.q', { ns: 'home', defaultValue: 'Do you manage shipping, customs, and pre-shipment inspection?' }),
      a: t('faq.questions.4.a', { ns: 'home', defaultValue: 'Yes. Our desk coordinates third-party pre-shipment quality inspections (SGS/TÜV), packaging compliance, Incoterms harmonization, export documentation, and freight forwarding to your destination port.' }),
    },
    {
      q: t('faq.questions.5.q', { ns: 'home', defaultValue: 'How are proprietary technical drawings and IP protected?' }),
      a: t('faq.questions.5.a', { ns: 'home', defaultValue: 'All technical drawings, CAD files, and project specifications are safeguarded under mutual non-disclosure agreements (NDA). Suppliers receive anonymized drawing packages until qualified and bound by strict confidentiality covenants.' }),
    },
  ];

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 sm:py-36 bg-[#00221F] text-white border-t border-[#04846E]/30 relative overflow-hidden">
      
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[#04846E]/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Headline & Direct Contact Callout Box */}
          <div className="lg:col-span-5 text-start">
            <MotionReveal delay={0.1}>
              <h2 className="font-editorial text-4xl sm:text-6xl font-bold text-white tracking-tight leading-[1.08]">
                Questions leaders<br />ask most
              </h2>
            </MotionReveal>

            <MotionReveal delay={0.2}>
              <p className="mt-6 text-base sm:text-lg text-[#A3C2BD] font-normal leading-relaxed font-body">
                Direct answers to how our senior desk structures mandates, audits international suppliers, and guarantees commercial clarity.
              </p>
            </MotionReveal>

            {/* Advisory Support Box */}
            <MotionReveal delay={0.3}>
              <div className="mt-10 p-6 rounded-2xl bg-[#032B27]/80 border border-[#04846E]/40 backdrop-blur-md">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#00D991]/15 text-[#00D991] flex items-center justify-center shrink-0 border border-[#00D991]/30">
                    <HelpCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white mb-1">
                      Have a specific technical mandate?
                    </h3>
                    <p className="text-xs text-[#A3C2BD] leading-relaxed mb-4 font-body">
                      Speak directly with our senior advisory team to review technical tolerances and supplier availability.
                    </p>
                    <button
                      onClick={() => onOpenContactModal && onOpenContactModal('FAQ Direct Question')}
                      className="altexis-pill-btn-outline px-4 py-2 text-xs font-bold inline-flex items-center gap-2 cursor-pointer"
                    >
                      <span>Ask Senior Advisor</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </MotionReveal>

          </div>

          {/* Right Column: Premium Glass Accordion Cards */}
          <div className="lg:col-span-7 space-y-4 text-start">
            {faqs.map((item, idx) => {
              const isOpen = openIndex === idx;
              return (
                <MotionReveal key={idx} delay={0.07 * idx} direction="up">
                  <div
                    className={`rounded-2xl transition-all duration-300 border ${
                      isOpen
                        ? 'bg-[#032B27] border-[#00D991]/50 shadow-xl shadow-black/20'
                        : 'bg-[#032B27]/40 border-[#04846E]/30 hover:border-[#04846E]/60 hover:bg-[#032B27]/60'
                    } p-6 sm:p-7`}
                  >
                    <button
                      onClick={() => toggle(idx)}
                      className="w-full flex items-start justify-between gap-4 text-start group cursor-pointer focus:outline-hidden"
                    >
                      <span className="font-editorial text-lg sm:text-xl font-bold text-white group-hover:text-[#00D991] transition-colors leading-snug">
                        {item.q}
                      </span>

                      <div
                        className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 transition-all duration-200 mt-0.5 ${
                          isOpen
                            ? 'bg-[#00D991] text-[#00221F]'
                            : 'bg-[#00221F] border border-[#04846E]/50 text-[#A3C2BD] group-hover:border-[#00D991]'
                        }`}
                      >
                        {isOpen ? <Minus className="w-4 h-4 stroke-[2.5]" /> : <Plus className="w-4 h-4 stroke-[2.5]" />}
                      </div>
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                          className="overflow-hidden"
                        >
                          <div className="pt-4 mt-4 border-t border-[#04846E]/30">
                            <p className="text-sm sm:text-base text-[#A3C2BD] leading-relaxed font-normal font-body">
                              {item.a}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </MotionReveal>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
