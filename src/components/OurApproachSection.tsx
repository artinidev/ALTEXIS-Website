import React from 'react';
import { useTranslation } from 'react-i18next';
import { MotionReveal } from './MotionReveal';

export const OurApproachSection: React.FC = () => {
  const { i18n } = useTranslation();
  const lang = (i18n.language || 'en') as 'en' | 'fr' | 'ar';

  const content = {
    en: {
      eyebrow: 'Our Approach',
      headline: 'Principles behind the procurement.',
      subtitle: 'The core commitments guiding our buyer-side mandate execution and supplier oversight.',
      badge: 'Core Fiduciary Standard',
      principles: [
        {
          num: '01',
          title: 'Expertise',
          desc: 'Procurement decisions require more than a supplier list. We bring deep engineering awareness, tolerance understanding, and commercial trade insight.',
        },
        {
          num: '02',
          title: 'Transparency',
          desc: 'Clear information leads to better decisions. We present unvarnished factory costs, true lead times, and verified risk factors.',
        },
        {
          num: '03',
          title: 'Reliability',
          desc: 'We focus strictly on suppliers capable of meeting real operational requirements, backed by active certifications and verified factory capacity.',
        },
        {
          num: '04',
          title: 'Partnership',
          desc: 'We work alongside your procurement desk as a fiduciary partner rather than simply passing along unvetted broker quotations.',
        },
      ],
    },
    fr: {
      eyebrow: 'Notre Approche',
      headline: 'Les principes qui guident nos achats.',
      subtitle: 'Les engagements fondamentaux qui structurent l’exécution de nos mandats acheteurs et la sélection des usines.',
      badge: 'Norme Fiduciaire Fondamentale',
      principles: [
        {
          num: '01',
          title: 'Expertise',
          desc: 'Acheter exige bien plus qu’une liste de contacts. Nous apportons une compréhension technique aiguë, la maîtrise des tolérances et une vision commerciale pointue.',
        },
        {
          num: '02',
          title: 'Transparence',
          desc: 'Des données claires permettent les meilleures décisions. Nous restituons les coûts d’usine directs, les délais réels et les facteurs de risque audités.',
        },
        {
          num: '03',
          title: 'Fiabilité',
          desc: 'Nous nous concentrons exclusivement sur des fabricants capables d’honorer vos exigences réelles, avec des certifications actives et des capacités vérifiées.',
        },
        {
          num: '04',
          title: 'Partenariat',
          desc: 'Nous opérons aux côtés de vos équipes d’achat en qualité de partenaire fiduciaire plutôt que de simples transmetteurs de devis.',
        },
      ],
    },
    ar: {
      eyebrow: 'منهجيتنا في العمل',
      headline: 'المبادئ التوجيهية لقرارات الشراء.',
      subtitle: 'الالتزامات الأساسية التي تحكم تنفيذ مهام المشتريات والرقابة الفنية على المصانع لمصلحة المشتري.',
      badge: 'معيار الالتزام الائتماني',
      principles: [
        {
          num: '01',
          title: 'الخبرة الهندسية والتجارية',
          desc: 'قرارات المشتريات تتطلب ما هو أعمق من مجرد قائمة أسماء؛ نحن نوفر فهماً دقيقاً للمواصفات والتفاوتات الهندسية ورؤية تجارية شاملة.',
        },
        {
          num: '02',
          title: 'الشفافية والوضوح التام',
          desc: 'المعلومات الدقيقة تقود لأفضل القرارات؛ نكشف التكاليف المباشرة للمصانع، ومواعيد التسليم الحقيقية، وعوامل المخاطرة الموثقة.',
        },
        {
          num: '03',
          title: 'الموثوقية والجاهزية',
          desc: 'نركز حصرياً على موردين يمتلكون القدرة الفعلية على تلبية متطلبات التشغيل، مدعومين بشهادات جودة سارية وطاقات إنتاجية مفحوصة.',
        },
        {
          num: '04',
          title: 'الشراكة الائتمانية',
          desc: 'نعمل كشريك موثوق ومخلص لمكتب المشتريات لديكم بدلاً من الاكتفاء بتمرير عروض أسعار الوسطاء دون تدقيق.',
        },
      ],
    },
  };

  const current = content[lang] || content.en;

  return (
    <section className="py-24 sm:py-32 bg-[#F2F3EE] text-[#111817] border-b border-[#E2E3DC]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16 sm:mb-20 text-start">
          <div className="lg:col-span-4">
            <MotionReveal delay={0.1}>
              <span className="font-heading text-lg sm:text-xl font-bold text-[#123C32]">
                {current.eyebrow}
              </span>
            </MotionReveal>
          </div>

          <div className="lg:col-span-8">
            <MotionReveal delay={0.2} direction="up">
              <h2 className="font-heading text-2xl sm:text-4xl lg:text-[44px] font-semibold text-[#123C32] tracking-tight leading-[1.15]">
                {current.headline}
              </h2>
              <p className="mt-3.5 text-base sm:text-lg text-[#5E6D68] font-secondary leading-relaxed max-w-2xl">
                {current.subtitle}
              </p>
            </MotionReveal>
          </div>
        </div>

        {/* 4 Clean Rounded Principle Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-start">
          {current.principles.map((p, idx) => (
            <MotionReveal key={p.num} delay={0.1 * idx} direction="up">
              <div className="p-8 rounded-[2.25rem] bg-white border border-[#E2DFD5] shadow-lg hover:shadow-xl hover:border-[#8EDB68] transition-all duration-300 flex flex-col justify-between h-full group cursor-pointer">
                <div>
                  <div className="mb-5">
                    <span className="font-heading text-3xl sm:text-4xl font-light text-[#123C32]/30 group-hover:text-[#8EDB68] transition-colors duration-300">
                      {p.num}
                    </span>
                  </div>

                  <h3 className="font-heading text-lg sm:text-xl font-semibold text-[#123C32] mb-2.5 leading-snug group-hover:text-[#04846E] transition-colors">
                    {p.title}
                  </h3>

                  <p className="text-sm text-[#5E6D68] leading-relaxed font-secondary">
                    {p.desc}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-[#F2F3EE] text-xs font-mono text-[#123C32] font-bold">
                  {current.badge}
                </div>
              </div>
            </MotionReveal>
          ))}
        </div>

      </div>
    </section>
  );
};
