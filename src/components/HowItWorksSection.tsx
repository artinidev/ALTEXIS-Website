import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion, type Variants } from 'framer-motion';
import { MotionReveal } from './MotionReveal';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 36,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export const HowItWorksSection: React.FC = () => {
  const { i18n } = useTranslation(['home', 'common']);

  const stepsData = {
    en: [
      {
        step: '01',
        title: 'Tell us what you need',
        desc: 'Share your product, quantity, specifications, destination and delivery requirements with our desk.',
        milestone: 'Requirement Scoping',
      },
      {
        step: '02',
        title: 'We find and evaluate suppliers',
        desc: 'We identify suitable international suppliers and assess relevant factory credentials and capacity.',
        milestone: 'Supplier Due Diligence',
      },
      {
        step: '03',
        title: 'Compare and decide',
        desc: 'Review normalized supplier responses and evaluate options across price, lead-time, and commercial terms.',
        milestone: 'Bid Normalization',
      },
      {
        step: '04',
        title: 'Procure with confidence',
        desc: 'Move forward with greater clarity while our team supports communication and milestone oversight.',
        milestone: 'Milestone Execution',
      },
    ],
    fr: [
      {
        step: '01',
        title: 'Exprimez votre besoin',
        desc: 'Transmettez votre nomenclature, quantités, tolérances, port d\'arrivée et impératifs de planning.',
        milestone: 'Cadrage du Besoin',
      },
      {
        step: '02',
        title: 'Sourcing et audit des usines',
        desc: 'Nous identifions les fabricants qualifiés et auditons leurs accréditations et capacités d\'atelier.',
        milestone: 'Audit & Vérification',
      },
      {
        step: '03',
        title: 'Comparaison et décision',
        desc: 'Examinez la matrice comparative des devis (prix, délais réels, incoterms et garanties de conformité).',
        milestone: 'Normalisation des Offres',
      },
      {
        step: '04',
        title: 'Achetez en confiance',
        desc: 'Engagez la commande avec une parfaite sérénité tandis que notre bureau assure le suivi d\'étape.',
        milestone: 'Exécution & Contrôle',
      },
    ],
    ar: [
      {
        step: '01',
        title: 'حدد متطلباتك ومواصفاتك',
        desc: 'شاركنا تفاصيل المنتجات، الكميات، المعايير الهندسية، ميناء الوصول ومواعيد التسليم المطلوبة.',
        milestone: 'تحديد نطاق الاحتياج',
      },
      {
        step: '02',
        title: 'البحث والتدقيق الفني للمصانع',
        desc: 'نحدد الموردين العالميين المؤهلين ونفحص شهاداتهم وطاقتهم الإنتاجية وتاريخهم التصديري.',
        milestone: 'الفحص والتحقق الصارم',
      },
      {
        step: '03',
        title: 'المقارنة واتخاذ القرار',
        desc: 'راجع جدول المقارنة الموحد لعروض الأسعار وقيم الخيارات بحسب السعر والمواصفات وسرعة التسليم.',
        milestone: 'توحيد وتحليل العروض',
      },
      {
        step: '04',
        title: 'الشراء بأعلى درجات الثقة',
        desc: 'امضِ قدماً في اعتماد الطلب باطمئنان بينما يتولى فريقنا متابعة مراحل الإنتاج والإشراف.',
        milestone: 'متابعة وتنفيذ المراحل',
      },
    ],
  };

  const steps = stepsData[i18n.language as keyof typeof stepsData] || stepsData.en;

  return (
    <section className="py-24 sm:py-32 bg-[#F2F3EE] text-[#111817] border-b border-[#E2E3DC]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16 sm:mb-20 text-start">
          <div className="lg:col-span-4">
            <MotionReveal delay={0.1}>
              <span className="font-heading text-lg sm:text-xl font-bold text-[#123C32]">
                {i18n.language === 'fr' ? 'Comment ça marche' : i18n.language === 'ar' ? 'منهجية العمل' : 'How It Works'}
              </span>
            </MotionReveal>
          </div>

          <div className="lg:col-span-8">
            <MotionReveal delay={0.2} direction="up">
              <h2 className="font-heading text-2xl sm:text-4xl lg:text-[44px] font-semibold text-[#123C32] tracking-tight leading-[1.15]">
                {i18n.language === 'fr'
                  ? 'Une méthode claire pour des achats industriels réussis.'
                  : i18n.language === 'ar'
                  ? 'مسار واضح ومدروس لقرارات مشتريات أفضل.'
                  : 'A simpler path to better procurement.'}
              </h2>
              <p className="mt-3.5 text-base sm:text-lg text-[#5E6D68] font-secondary leading-relaxed max-w-2xl">
                {i18n.language === 'fr'
                  ? 'Un processus côté acheteur en 4 étapes transparentes conçu pour éliminer les frictions, supprimer les marges des courtiers et sécuriser les meilleures usines.'
                  : i18n.language === 'ar'
                  ? 'عملية منظمة من أربع مراحل لصالح المشتري مصممة لإزالة العوائق وإلغاء هوامش الوسطاء وضمان التعامل مع المصنع المناسب مباشرة.'
                  : 'A transparent, four-phase buyer-side process designed to remove friction, eliminate broker markups, and secure the right suppliers.'}
              </p>
            </MotionReveal>
          </div>
        </div>

        {/* 4 Process Cards Animating in Sequentially One After One by Order */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-start"
        >
          {steps.map((item) => (
            <motion.div
              key={item.step}
              variants={cardVariants}
              className="h-full"
            >
              <div className="p-8 rounded-[2.25rem] bg-white border border-[#E2DFD5] shadow-lg hover:shadow-xl hover:border-[#8EDB68] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between h-full group cursor-pointer">
                <div>
                  {/* Refined Number that turns vibrant green on hover */}
                  <div className="mb-5">
                    <span className="font-heading text-3xl sm:text-4xl font-light text-[#123C32]/30 group-hover:text-[#8EDB68] transition-colors duration-300">
                      {item.step}
                    </span>
                  </div>

                  <h3 className="font-heading text-lg sm:text-xl font-semibold text-[#123C32] mb-2.5 leading-snug group-hover:text-[#04846E] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-sm text-[#5E6D68] leading-relaxed font-secondary">
                    {item.desc}
                  </p>
                </div>

                {/* Milestone Phase Indicator */}
                <div className="mt-8 pt-4 border-t border-[#F2F3EE] flex items-center gap-2 text-xs font-mono text-[#123C32] font-bold">
                  <span className="w-2 h-2 rounded-full bg-[#8EDB68] group-hover:scale-125 transition-transform" />
                  <span>{item.milestone}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};
