import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Plus, Minus, HelpCircle, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { MotionReveal } from './MotionReveal';

interface FAQAccordionSectionProps {
  onOpenContactModal?: (topic?: string) => void;
}

export const FAQAccordionSection: React.FC<FAQAccordionSectionProps> = ({ onOpenContactModal }) => {
  const { i18n } = useTranslation();
  const lang = (i18n.language || 'en') as 'en' | 'fr' | 'ar';
  const isRtl = lang === 'ar';

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const content = {
    en: {
      eyebrow: 'FAQS',
      headline: "Questions? Let's make it clear.",
      subtitle: 'Everything you need to know about our buyer-side procurement desk, supplier due diligence, and operational support.',
      boxTitle: 'Have a custom requirement?',
      boxDesc: 'Our procurement team is available for direct mandate scoping.',
      boxCta: 'Ask our team directly',
      faqs: [
        {
          q: 'What does ALTEXIS help source?',
          a: 'We support industrial procurement requirements across equipment, components, materials and specialized products. From high-pressure valves and forged metallurgy to custom fabrication and machinery.',
        },
        {
          q: 'Do you work with international suppliers?',
          a: 'Yes. International sourcing is a core part of our procurement approach, giving industrial enterprises direct access to verified mills and manufacturers globally.',
        },
        {
          q: 'How do you evaluate suppliers?',
          a: 'We review relevant supplier information including identity, documentation, capabilities, ISO/API quality certifications, and financial risk factors before you make any capital commitment.',
        },
        {
          q: 'Can you compare supplier quotations?',
          a: 'Yes. We organize supplier responses and help evaluate offers across price, technical specifications, lead time, Incoterms, and commercial terms in a clear normalized matrix.',
        },
        {
          q: 'Can you support the procurement after supplier selection?',
          a: 'Yes. Depending on the engagement, we can support technical communication, third-party pre-shipment inspections, milestone follow-up, and freight coordination.',
        },
        {
          q: 'How do I start?',
          a: 'Submit your procurement requirement through our intake desk, and our senior sourcing team will review your specifications and determine the right way forward.',
        },
      ],
    },
    fr: {
      eyebrow: 'FAQ',
      headline: 'Des questions ? Faisons le point.',
      subtitle: 'Tout ce que vous devez savoir sur notre bureau d’achat, nos audits fournisseurs et notre accompagnement opérationnel.',
      boxTitle: 'Un besoin spécifique ?',
      boxDesc: 'Notre équipe d’achat est disponible pour un cadrage direct de votre projet.',
      boxCta: 'Consulter nos experts',
      faqs: [
        {
          q: 'Quels types de produits ALTEXIS aide-t-il à sourcer ?',
          a: 'Nous prenons en charge les équipements industriels, les composants mécaniques, les matières premières et les outillages de pointe. Des vannes haute pression et aciers forgés jusqu’aux lignes de machines sur mesure.',
        },
        {
          q: 'Travaillez-vous avec des fabricants internationaux ?',
          a: 'Oui. Le sourcing international est le socle de notre approche, permettant aux industriels d’accéder directement à des usines et forges vérifiées dans le monde entier.',
        },
        {
          q: 'Comment procédez-vous à l’évaluation des usines ?',
          a: 'Nous auditons l’existence légale, la solvabilité, l’outillage en atelier, les certificats de qualité (ISO, API, PED) et la conformité export avant tout engagement financier.',
        },
        {
          q: 'Pouvez-vous normaliser et comparer les offres reçues ?',
          a: 'Oui. Nous structurons l’ensemble des réponses fournisseurs dans une grille d’analyse claire comparant prix usine, spécifications techniques, délais et incoterms.',
        },
        {
          q: 'Accompagnez-vous la commande après le choix du fournisseur ?',
          a: 'Oui. Selon le mandat confié, nous assurons la liaison technique, le suivi des jalons de fabrication, l’inspection avant expédition et la coordination fret.',
        },
        {
          q: 'Comment démarrer une collaboration ?',
          a: 'Transmettez votre cahier des charges via notre formulaire de contact, et nos directeurs de sourcing analyseront vos spécifications sans délai.',
        },
      ],
    },
    ar: {
      eyebrow: 'الأسئلة الشائعة',
      headline: 'استفساراتكم؟ نوضحها بكل دقة.',
      subtitle: 'كل ما تحتاج لمعرفته حول مكتب المشتريات الائتماني، وفحص وتدقيق الموردين، وإدارة التوريدات الصناعية.',
      boxTitle: 'هل لديك متطلب خاص؟',
      boxDesc: 'فريق المشتريات لدينا جاهز لدراسة نطاق احتياجكم وتحديد المسار المناسب.',
      boxCta: 'استشر فريقنا مباشرة',
      faqs: [
        {
          q: 'ما هي المنتجات والمعدات التي تساعد ألتيكسيس في توريدها؟',
          a: 'ندعم مختلف متطلبات المشتريات الصناعية من المعدات والمكونات الميكانيكية والمواد المتخصصة؛ بدءاً من الصمامات عالية الضغط والمسبوكات والمطروقات وحتى خطوط الإنتاج والآلات المخصصة.',
        },
        {
          q: 'هل تتعاملون مع موردين ومصانع دولية؟',
          a: 'نعم. التوريد الدولي هو المحور الرئيسي لخدماتنا، مما يتيح للمنشآت الصناعية الوصول المباشر إلى مصانع عالمية مدققة وموثوقة.',
        },
        {
          q: 'كيف تقومون بتقييم وفحص الموردين والمصانع؟',
          a: 'ندقق السجلات القانونية والتجارية، وشهادات الجودة (ISO/API)، وخطوط الإنتاج في المصنع، ومؤشرات المخاطر المالية والتشغيلية قبل دفع أي التزام مالي.',
        },
        {
          q: 'هل يمكنكم توحيد ومقارنة عروض الأسعار المختلفة؟',
          a: 'نعم. ننظم عروض الموردين ونقيمها في مصفوفة مقارنة معيارية واضحة تشمل السعر، والمواصفات الفنية، والمهل الزمنية، وشروط الشحن والتسليم.',
        },
        {
          q: 'هل تقدمون الدعم بعد اختيار المورد المناسب؟',
          a: 'نعم. وفقاً لنطاق الاتفاق، نوفر الدعم في المتابعة الفنية، وتنسيق الفحص والتفتيش قبل الشحن عبر جهات فحص معتمدة، ومتابعة الشحن والتسليم.',
        },
        {
          q: 'كيف أبدأ تقديم طلب مشتريات؟',
          a: 'أرسل متطلبات مشروعك عبر منصة الاستقبال لدينا، وسيقوم كبار مسؤولي التوريد بمراجعة المواصفات ووضع خطة العمل المثلى.',
        },
      ],
    },
  };

  const current = content[lang] || content.en;
  const faqs = current.faqs;

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 sm:py-36 bg-[#F5F3EA] text-[#111817] border-t border-[#E2DFD5]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Headline & Direct Prompt Box */}
          <div className="lg:col-span-5 text-start">
            <MotionReveal delay={0.1}>
              <span className="text-xs font-mono font-bold tracking-[0.2em] text-[#123C32] uppercase block mb-2.5">
                {current.eyebrow}
              </span>
              <h2 className="font-heading text-2xl sm:text-4xl lg:text-[44px] font-semibold text-[#123C32] tracking-tight leading-[1.15]">
                {current.headline}
              </h2>
            </MotionReveal>

            <MotionReveal delay={0.2}>
              <p className="mt-4 text-base sm:text-lg text-[#5E6D68] font-normal leading-relaxed font-secondary">
                {current.subtitle}
              </p>
            </MotionReveal>

            {/* Direct Inquiry Box */}
            <MotionReveal delay={0.3}>
              <div className="mt-10 p-6 rounded-[2rem] bg-white border border-[#E2DFD5] shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#F5F3EA] text-[#123C32] flex items-center justify-center shrink-0">
                    <HelpCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-[#123C32] mb-1">
                      {current.boxTitle}
                    </h3>
                    <p className="text-xs text-[#5E6D68] leading-relaxed mb-4 font-secondary">
                      {current.boxDesc}
                    </p>
                    <button
                      onClick={() => onOpenContactModal && onOpenContactModal('FAQ Inquiry')}
                      className="text-xs font-extrabold text-[#123C32] hover:text-[#04846E] inline-flex items-center gap-1.5 uppercase tracking-wider cursor-pointer"
                    >
                      <span>{current.boxCta}</span>
                      <ArrowRight className={`w-3.5 h-3.5 ${isRtl ? 'rotate-180' : ''}`} />
                    </button>
                  </div>
                </div>
              </div>
            </MotionReveal>
          </div>

          {/* Right Column: Clean Accordion Cards */}
          <div className="lg:col-span-7 space-y-4 text-start">
            {faqs.map((item, idx) => {
              const isOpen = openIndex === idx;
              return (
                <MotionReveal key={`${idx}-${lang}`} delay={0.08 * idx} direction="up">
                  <div
                    className={`rounded-[2rem] transition-all duration-300 border ${
                      isOpen
                        ? 'bg-white border-[#8EDB68] shadow-xl'
                        : 'bg-white/70 border-[#E2DFD5] hover:bg-white hover:border-[#123C32]/30'
                    } p-6 sm:p-8`}
                  >
                    <button
                      onClick={() => toggle(idx)}
                      className="w-full flex items-start justify-between gap-4 text-start group cursor-pointer focus:outline-hidden"
                    >
                      <span className="font-heading text-base sm:text-lg font-semibold text-[#123C32] group-hover:text-[#04846E] transition-colors leading-snug">
                        {item.q}
                      </span>

                      <div
                        className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 transition-all duration-200 mt-0.5 ${
                          isOpen
                            ? 'bg-[#8EDB68] text-[#123C32]'
                            : 'bg-[#F5F3EA] text-[#123C32] group-hover:bg-[#123C32] group-hover:text-[#8EDB68]'
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
                          <div className="pt-4 mt-4 border-t border-[#F5F3EA]">
                            <p className="text-sm sm:text-base text-[#5E6D68] leading-relaxed font-secondary">
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
