import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { MotionReveal } from './MotionReveal';
import { AltexisRibbonLogo } from './AltexisRibbonLogo';

interface TypewriterQuoteProps {
  text: string;
  trigger: boolean;
}

const TypewriterQuote: React.FC<TypewriterQuoteProps> = ({ text, trigger }) => {
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    setCharIndex(0);
    if (!trigger) return;

    // Fast, punchy typewriter cadence (18ms per character)
    const interval = setInterval(() => {
      setCharIndex((prev) => {
        if (prev < text.length) {
          return prev + 1;
        }
        clearInterval(interval);
        return prev;
      });
    }, 18);

    return () => clearInterval(interval);
  }, [text, trigger]);

  const displayedText = text.slice(0, charIndex);
  const isTyping = trigger && charIndex < text.length;

  return (
    <blockquote className="font-heading text-xl sm:text-3xl lg:text-[36px] font-medium text-white tracking-tight leading-[1.3] mb-8 min-h-[4.5em] sm:min-h-[3.9em]">
      "{displayedText}
      {isTyping ? (
        <motion.span
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 0.5, repeat: Infinity, ease: 'easeInOut' }}
          className="inline-block w-[3px] sm:w-[4px] h-[0.85em] bg-[#8EDB68] ml-1.5 align-baseline shadow-[0_0_10px_#8EDB68]"
        />
      ) : (
        '"'
      )}
    </blockquote>
  );
};

export const TestimonialCarousel: React.FC = () => {
  const { i18n } = useTranslation();
  const lang = (i18n.language || 'en') as 'en' | 'fr' | 'ar';
  const isRtl = lang === 'ar';

  const [currentIdx, setCurrentIdx] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: false, amount: 0.25 });

  const content = {
    en: {
      eyebrow: 'CLIENT PERSPECTIVE',
      headline: 'Built on trust.',
      testimonials: [
        {
          quote: 'ALTEXIS helped us turn a complex international sourcing requirement into a clear, structured procurement decision with complete factory transparency.',
          author: 'Karim Benali',
          role: 'Director of Global Procurement & Supply Chain',
          company: 'Maghreb Energy & Infrastructure Group',
        },
        {
          quote: 'Their 5-point supplier audit saved us months of uncertainty. We accessed tier-1 European and Asian forging mills at direct factory cost with zero broker markups.',
          author: 'Tarek Mansouri',
          role: 'Head of Technical Procurement & Sourcing',
          company: 'North Africa EPC & Industrial Projects',
        },
        {
          quote: 'The quote normalization matrix allowed our engineering and commercial teams to align seamlessly. A truly indispensable buyer-side partner for our cross-border projects.',
          author: 'Amine Cherif',
          role: 'Director of Capital Projects & Logistics',
          company: 'Atlas Industrial & Manufacturing Corp',
        },
        {
          quote: 'Direct factory access, transparent mill audits, and uncompromising specification compliance across all international orders.',
          author: 'Yassine Hadj-Ahmed',
          role: 'Senior Sourcing & Quality Manager',
          company: 'Alliance Metallurgy & Engineering',
        },
      ],
    },
    fr: {
      eyebrow: 'PERSPECTIVE CLIENT',
      headline: 'Bâti sur la confiance.',
      testimonials: [
        {
          quote: 'ALTEXIS nous a permis de transformer un besoin de sourcing international complexe en une décision d’achat claire, structurée et d’une transparence totale.',
          author: 'Karim Benali',
          role: 'Directeur des Achats Globaux & Supply Chain',
          company: 'Groupe Énergie & Infrastructures Maghreb',
        },
        {
          quote: 'Leur audit fournisseur en 5 points nous a épargné des mois d’incertitude. Nous avons accédé à des forges de rang 1 en Europe et en Asie au coût d’usine direct, sans marge d’intermédiaire.',
          author: 'Tarek Mansouri',
          role: 'Responsable Sourcing & Achats Techniques',
          company: 'Grands Projets EPC & Industrie Afrique du Nord',
        },
        {
          quote: 'La matrice de normalisation des devis a permis un alignement immédiat de nos ingénieurs et acheteurs. Un partenaire fiduciaire indispensable pour nos projets transfrontaliers.',
          author: 'Amine Cherif',
          role: 'Directeur des Projets d’Investissement & Logistique',
          company: 'Atlas Industrial & Manufacturing Corp',
        },
        {
          quote: 'Accès direct aux usines, audits d’ateliers rigoureux et respect absolu des spécifications techniques sur l’ensemble de nos commandes internationales.',
          author: 'Yassine Hadj-Ahmed',
          role: 'Responsable Sourcing & Qualité Fournisseurs',
          company: 'Alliance Métallurgie & Ingénierie',
        },
      ],
    },
    ar: {
      eyebrow: 'آراء ومشاريع العملاء',
      headline: 'شراكات مبنية على الثقة.',
      testimonials: [
        {
          quote: 'ساعدتنا ألتيكسيس في تحويل متطلب توريد دولي معقد للغاية إلى قرار شراء واضح ومدروس وبشفافية تصنيعية مطلقة.',
          author: 'كريم بن علي',
          role: 'مدير المشتريات وسلاسل الإمداد العالمية',
          company: 'مجموعة المغرب العربي للطاقة والبنية التحتية',
        },
        {
          quote: 'وفر علينا تدقيق الموردين الخماسي أشهراً من التردد. تمكنا من الوصول المباشر لمصانع سبك وتشكيل كبرى في أوروبا وآسيا بسعر المصنع المباشر وبدون هوامش وسطاء.',
          author: 'طارق منصوري',
          role: 'رئيس المشتريات الفنية والتوريد الهندسي',
          company: 'شركة المشاريع الهندسية والصناعية (EPC)',
        },
        {
          quote: 'أتاحت لنا مصفوفة توحيد عروض الأسعار مواءمة سريعة بين الفريق الهندسي والتجاري. ألتيكسيس شريك ائتماني لا غنى عنه لمشاريعنا العابرة للحدود.',
          author: 'أمين شريف',
          role: 'مدير المشاريع الرأسمالية واللوجستيات',
          company: 'أطلس للصناعات والتصنيع الثقيل',
        },
        {
          quote: 'وصول مباشر لأرضيات المصانع، وتدقيق شفاف للمواصفات، ومطابقة هندسية صارمة لكافة طلبياتنا الدولية دون أي تنازلات.',
          author: 'ياسين حاج أحمد',
          role: 'كبير مسؤولي التوريد وضمان الجودة',
          company: 'التحالف للصناعات المعدنية والهندسة',
        },
      ],
    },
  };

  const current = content[lang] || content.en;
  const testimonials = current.testimonials;

  const prev = () => {
    setCurrentIdx((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const next = useCallback(() => {
    setCurrentIdx((prev) => (prev + 1) % testimonials.length);
  }, [testimonials.length]);

  // Total duration: typing time (18ms per character) + 3 seconds reading buffer
  const currentQuoteLength = testimonials[currentIdx]?.quote.length || 80;
  const typingDurationSeconds = (currentQuoteLength * 18) / 1000;
  const totalDurationSeconds = typingDurationSeconds + 3;

  // The green line starts loading as soon as typing begins, and triggers next() exactly 3s after typing completes
  useEffect(() => {
    if (!isInView) return;

    const totalDurationMs = totalDurationSeconds * 1000;
    const timer = setTimeout(() => {
      next();
    }, totalDurationMs);

    return () => clearTimeout(timer);
  }, [currentIdx, isInView, next, totalDurationSeconds, lang]);

  return (
    <section className="py-24 sm:py-36 bg-[#F5F3EA] text-[#111817] border-t border-[#E2DFD5]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14 sm:mb-18 text-start">
          <MotionReveal delay={0.1}>
            <span className="text-xs font-mono font-bold tracking-[0.2em] text-[#123C32] uppercase block mb-2.5">
              {current.eyebrow}
            </span>
            <h2 className="font-heading text-2xl sm:text-4xl lg:text-[44px] font-semibold text-[#123C32] tracking-tight leading-[1.15]">
              {current.headline}
            </h2>
          </MotionReveal>

          {/* Navigation Buttons */}
          <MotionReveal delay={0.2}>
            <div className="flex items-center gap-3">
              <button
                onClick={prev}
                className="w-12 h-12 rounded-full bg-white border border-[#E2DFD5] hover:border-[#123C32] hover:bg-[#123C32] hover:text-[#8EDB68] text-[#123C32] flex items-center justify-center transition-all cursor-pointer active:scale-95"
                aria-label="Previous testimonial"
              >
                <ArrowLeft className={`w-5 h-5 ${isRtl ? 'rotate-180' : ''}`} />
              </button>
              <button
                onClick={next}
                className="w-12 h-12 rounded-full bg-white border border-[#E2DFD5] hover:border-[#123C32] hover:bg-[#123C32] hover:text-[#8EDB68] text-[#123C32] flex items-center justify-center transition-all cursor-pointer active:scale-95"
                aria-label="Next testimonial"
              >
                <ArrowRight className={`w-5 h-5 ${isRtl ? 'rotate-180' : ''}`} />
              </button>
            </div>
          </MotionReveal>
        </div>

        {/* Testimonial Card */}
        <MotionReveal delay={0.25} direction="up">
          <div
            ref={cardRef}
            className="rounded-[2rem] sm:rounded-[2.75rem] bg-[#123C32] text-[#F5F3EA] p-8 sm:p-14 lg:p-20 relative overflow-hidden text-start border border-white/10"
          >
            <div className="absolute top-8 right-8 text-white/10 pointer-events-none">
              <Quote className="w-24 h-24" />
            </div>

            <div className="relative z-10 max-w-4xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${currentIdx}-${lang}`}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                >
                  <TypewriterQuote
                    key={`${currentIdx}-${isInView}-${lang}`}
                    text={testimonials[currentIdx]?.quote || ''}
                    trigger={isInView}
                  />

                  {/* Author & Title Row */}
                  <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pt-6 border-t border-white/15 pr-28 sm:pr-36 md:pr-44">
                    <div className="space-y-2.5">
                      <div>
                        <div className="font-heading text-sm sm:text-base font-semibold text-[#8EDB68]">
                          {testimonials[currentIdx]?.author}
                        </div>
                        <div className="text-xs text-white/70 font-secondary mt-0.5">
                          {testimonials[currentIdx]?.role} • {testimonials[currentIdx]?.company}
                        </div>
                      </div>

                      {/* Loading Animation Line */}
                      <div className="w-20 sm:w-28 h-1 bg-white/15 rounded-full overflow-hidden relative">
                        <motion.div
                          key={`progress-line-${currentIdx}-${isInView}-${lang}`}
                          initial={{ width: '0%' }}
                          animate={{ width: isInView ? '100%' : '0%' }}
                          transition={{
                            duration: totalDurationSeconds,
                            ease: 'linear',
                          }}
                          className="h-full bg-gradient-to-r from-[#8EDB68] to-[#92FED7] rounded-full shadow-[0_0_6px_#8EDB68]"
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* 3D Brand Logo Identity in Bottom-Right Corner */}
            <div className="absolute bottom-5 right-5 sm:bottom-8 sm:right-10 md:bottom-10 md:right-12 w-24 sm:w-28 md:w-32 aspect-[200/175] flex items-center justify-center pointer-events-auto z-20 hover:scale-105 transition-transform duration-300">
              <AltexisRibbonLogo size="100%" />
            </div>

          </div>
        </MotionReveal>

      </div>
    </section>
  );
};
