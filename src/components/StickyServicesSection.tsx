import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDown, CheckCircle2, ArrowRight } from 'lucide-react';
import { MotionReveal } from './MotionReveal';
import { getOptimizedImageUrl } from '../utils/imageOptimizer';

interface StickyServicesSectionProps {
  onOpenContactModal: (topic?: string) => void;
}

export const StickyServicesSection: React.FC<StickyServicesSectionProps> = ({ onOpenContactModal }) => {
  const { i18n } = useTranslation(['home', 'common']);
  const isRtl = i18n.language === 'ar';
  const [activeStep, setActiveStep] = useState(0);

  const stepsData = {
    en: [
      {
        num: '01',
        title: 'Understand',
        desc: 'We start with your requirement, specifications, quantity and delivery needs. We review technical drawings, target milestones, and compliance constraints before any supplier is contacted.',
        image: getOptimizedImageUrl('https://images.unsplash.com/photo-1581092160607-ee22621dd758', { width: 1000, quality: 75, format: 'webp' }),
      },
      {
        num: '02',
        title: 'Source',
        desc: 'We identify suppliers that match your technical and commercial requirements. We tap directly into qualified manufacturers and tier-1 mills across vetted international trade corridors.',
        image: '/hot-forged-metallurgy.jpg',
      },
      {
        num: '03',
        title: 'Verify',
        desc: 'We review relevant supplier information before you move forward. Our desk executes 5-point audits on production capacity, ISO/API credentials, financial standing, and export history.',
        image: getOptimizedImageUrl('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158', { width: 1000, quality: 75, format: 'webp' }),
      },
      {
        num: '04',
        title: 'Compare',
        desc: 'We help evaluate quotations across price, specifications, lead time and commercial terms. All supplier bids are structured into normalized matrices for informed decision-making.',
        image: getOptimizedImageUrl('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d', { width: 1000, quality: 75, format: 'webp' }),
      },
      {
        num: '05',
        title: 'Support',
        desc: 'We help coordinate communication and follow-up through the procurement process. From factory milestone inspections through Incoterms freight dispatch, we protect your interests.',
        image: getOptimizedImageUrl('https://images.unsplash.com/photo-1578575437130-527eed3abbec', { width: 1000, quality: 75, format: 'webp' }),
      },
    ],
    fr: [
      {
        num: '01',
        title: 'Comprendre',
        desc: 'Nous commençons par vos spécifications techniques, quantités, tolérances et impératifs de livraison. Nous examinons vos plans et contraintes avant toute prise de contact usine.',
        image: getOptimizedImageUrl('https://images.unsplash.com/photo-1581092160607-ee22621dd758', { width: 1000, quality: 75, format: 'webp' }),
      },
      {
        num: '02',
        title: 'Sourcer',
        desc: 'Nous identifions les usines et fournisseurs correspondant à vos critères techniques et commerciaux à travers des couloirs d\'approvisionnement internationaux qualifiés.',
        image: '/hot-forged-metallurgy.jpg',
      },
      {
        num: '03',
        title: 'Vérifier',
        desc: 'Nous auditons les capacités industrielles réelles, certifications ISO/API, conformité export et santé financière des fabricants avant tout engagement.',
        image: getOptimizedImageUrl('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158', { width: 1000, quality: 75, format: 'webp' }),
      },
      {
        num: '04',
        title: 'Comparer',
        desc: 'Nous normalisons les offres des fournisseurs dans une matrice comparative claire (prix départ usine, fret, délais réels et garanties) pour une prise de décision éclairée.',
        image: getOptimizedImageUrl('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d', { width: 1000, quality: 75, format: 'webp' }),
      },
      {
        num: '05',
        title: 'Accompagner',
        desc: 'Nous assurons la coordination avec les usines, le contrôle d\'étape, l\'inspection avant expédition et le suivi logistique jusqu\'à destination finale.',
        image: getOptimizedImageUrl('https://images.unsplash.com/photo-1578575437130-527eed3abbec', { width: 1000, quality: 75, format: 'webp' }),
      },
    ],
    ar: [
      {
        num: '01',
        title: 'الفهم والتحليل',
        desc: 'نبدأ بدراسة متطلباتك ومواصفاتك الفنية والكميات ومواعيد التسليم المطلوبة، وفحص الرسومات الهندسية والشهادات اللازمة قبل بدء الاتصال بأي مصنع.',
        image: getOptimizedImageUrl('https://images.unsplash.com/photo-1581092160607-ee22621dd758', { width: 1000, quality: 75, format: 'webp' }),
      },
      {
        num: '02',
        title: 'التوريد والبحث',
        desc: 'نحدد المصنعين والموردين العالميين المؤهلين القادرين على مطابقة مواصفاتك الهندسية والتجارية عبر ممرات التجارة المعتمدة لدينا.',
        image: '/hot-forged-metallurgy.jpg',
      },
      {
        num: '03',
        title: 'التحقق والتدقيق',
        desc: 'يجري فريقنا فحصاً شاملاً يشمل شهادات ISO/API، وطاقات خطوط الإنتاج، والجاهزية التصديرية والملاءة المالية قبل اتخاذ قرار الشراء.',
        image: getOptimizedImageUrl('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158', { width: 1000, quality: 75, format: 'webp' }),
      },
      {
        num: '04',
        title: 'المقارنة والتوحيد',
        desc: 'نوحد عروض الأسعار في جداول مقارنة دقيقة تبرز التكلفة الفعلية والمواصفات وفترات التصنيع والشروط التجارية لاتخاذ القرار الأمثل.',
        image: getOptimizedImageUrl('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d', { width: 1000, quality: 75, format: 'webp' }),
      },
      {
        num: '05',
        title: 'الدعم والتنسيق',
        desc: 'نساعد في تنسيق التواصل ومتابعة مراحل التصنيع والفحص قبل الشحن وإجراءات الشحن الدولي لضمان حماية مصالحك الكاملة.',
        image: getOptimizedImageUrl('https://images.unsplash.com/photo-1578575437130-527eed3abbec', { width: 1000, quality: 75, format: 'webp' }),
      },
    ],
  };

  const steps = stepsData[i18n.language as keyof typeof stepsData] || stepsData.en;

  return (
    <section id="how-we-help" className="py-24 sm:py-36 bg-[#123C32] text-[#F5F3EA] relative overflow-hidden">

      {/* Background ambient glows */}
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-[#8EDB68]/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">

        {/* Section Header */}
        <div className="max-w-3xl text-start mb-14 sm:mb-20">
          <MotionReveal delay={0.1}>
            <h2 className="font-heading text-3xl sm:text-5xl lg:text-[52px] font-semibold text-white tracking-tight leading-[1.1]">
              {i18n.language === 'fr' ? (
                <>Du besoin initial<br />à la livraison.</>
              ) : i18n.language === 'ar' ? (
                <>من تحديد الاحتياج<br />حتى الاستلام النهائي.</>
              ) : (
                <>From requirement<br />to delivery.</>
              )}
            </h2>
          </MotionReveal>
        </div>

        {/* Farmio Sticky Sourcing Layout: Desktop Sticky Left Image + Interactive Steps */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">

          {/* Left Column: Clean Sticky Visual Container (No overlaid chips/numbers) */}
          <div className="lg:col-span-6 lg:sticky lg:top-28">
            <MotionReveal delay={0.2} direction="right">
              <div className="relative rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden aspect-[4/3] sm:aspect-[16/11] bg-[#111817] shadow-2xl border border-white/15">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeStep}
                    src={steps[activeStep].image}
                    alt={steps[activeStep].title}
                    loading="lazy"
                    decoding="async"
                    initial={{ opacity: 0, scale: 1.04 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    className="w-full h-full object-cover gpu-layer"
                  />
                </AnimatePresence>

                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#123C32]/80 via-transparent to-black/20 pointer-events-none" />

                {/* Keep Scrolling Pill Indicator */}
                <div className="absolute bottom-6 right-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-[#123C32] text-xs font-mono font-bold tracking-wider uppercase shadow-xl animate-bounce">
                  <span>KEEP SCROLLING</span>
                  <ArrowDown className="w-3.5 h-3.5" />
                </div>
              </div>
            </MotionReveal>
          </div>

          {/* Right Column: 5 Clean Interactive Scrolling Step Cards (No redundant SERVICE 01 / 01/05 tags) */}
          <div className="lg:col-span-6 space-y-6 text-start">
            {steps.map((step, idx) => {
              const isActive = activeStep === idx;
              return (
                <MotionReveal key={step.num} delay={0.1 * idx} direction="up">
                  <div
                    onClick={() => setActiveStep(idx)}
                    className={`rounded-[2rem] p-8 sm:p-10 border transition-all duration-300 cursor-pointer ${isActive
                        ? 'bg-white text-[#111817] border-[#8EDB68] shadow-2xl scale-[1.02]'
                        : 'bg-white/5 text-white/80 border-white/10 hover:bg-white/10 hover:border-white/20'
                      }`}
                  >
                    <h3
                      className={`font-heading text-xl sm:text-2xl font-semibold mb-2.5 leading-snug ${isActive ? 'text-[#123C32]' : 'text-white'
                        }`}
                    >
                      {step.title}
                    </h3>

                    <p
                      className={`text-base leading-relaxed font-secondary ${isActive ? 'text-[#5E6D68]' : 'text-white/70'
                        }`}
                    >
                      {step.desc}
                    </p>

                    {isActive && (
                      <div className="mt-6 pt-6 border-t border-[#E2DFD5] flex items-center justify-between">
                        <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#123C32]">
                          <CheckCircle2 className="w-4 h-4 text-[#8EDB68]" />
                          <span>
                            {i18n.language === 'fr'
                              ? 'Protocole Opérationnel Certifié'
                              : i18n.language === 'ar'
                              ? 'بروتوكول تشغيلي معتمد'
                              : 'Standard Operating Protocol'}
                          </span>
                        </div>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            onOpenContactModal(`Step ${step.num} - ${step.title}`);
                          }}
                          className="text-xs font-bold uppercase tracking-wider text-[#123C32] hover:text-[#04846E] inline-flex items-center gap-1.5 cursor-pointer"
                        >
                          <span>
                            {i18n.language === 'fr'
                              ? 'Démarrer l\'étape'
                              : i18n.language === 'ar'
                              ? 'بدء الخطوة'
                              : 'Initiate Step'}
                          </span>
                          <ArrowRight className={`w-3.5 h-3.5 ${isRtl ? 'rotate-180' : ''}`} />
                        </button>
                      </div>
                    )}
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
