import React from 'react';
import { useTranslation } from 'react-i18next';
import { MotionReveal } from './MotionReveal';

export const AboutImpactSection: React.FC = () => {
  const { t, i18n } = useTranslation(['home', 'common']);

  const stats = [
    {
      value: '20+',
      label: i18n.language === 'fr' ? 'Années d\'expérience' : i18n.language === 'ar' ? 'سنوات من الخبرة' : 'Years of experience',
    },
    {
      value: '235+',
      label: i18n.language === 'fr' ? 'Usines mondiales qualifiées' : i18n.language === 'ar' ? 'مصنع عالمي معتمد' : 'Qualified global mills',
    },
    {
      value: '35%',
      label: i18n.language === 'fr' ? 'Économies d\'achats potentielles' : i18n.language === 'ar' ? 'توفير محتمل في تكاليف الشراء' : 'Potential procurement savings',
    },
    {
      value: '98%',
      label: i18n.language === 'fr' ? 'Précision des spécifications' : i18n.language === 'ar' ? 'دقة مطابقة المواصفات' : 'Specification accuracy',
    },
  ];

  return (
    <section id="about" className="py-24 sm:py-32 bg-[#F2F3EE] text-[#111817] border-b border-[#E2E3DC]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* Top Grid: Left 'About Us' label + Right Massive Headline with Highlight Box (Matches Screenshot 1 Exactly) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start mb-20 sm:mb-28 text-start">
          
          {/* Left: Section Label */}
          <div className="md:col-span-4 lg:col-span-3">
            <MotionReveal delay={0.1}>
              <span className="font-heading text-lg sm:text-xl font-bold text-[#123C32]">
                {t('nav.about', { ns: 'common', defaultValue: 'About Us' })}
              </span>
            </MotionReveal>
          </div>

          {/* Right: Refined Headline with Farmio Highlight Box */}
          <div className="md:col-span-8 lg:col-span-9">
            <MotionReveal delay={0.2} direction="up">
              <h2 className="font-heading text-2xl sm:text-4xl lg:text-[44px] font-semibold text-[#123C32] tracking-tight leading-[1.25]">
                {i18n.language === 'fr' ? (
                  <>
                    Conçu par des experts en chaîne d'approvisionnement forts d'une vaste expérience en sourcing et achats internationaux,{' '}
                    <span className="text-[#04846E]">
                      ALTEXIS
                    </span>{' '}
                    relie les entreprises à des fournisseurs de confiance et des solutions compétitives à travers le monde.
                  </>
                ) : i18n.language === 'ar' ? (
                  <>
                    بُنيت بواسطة خبراء في سلاسل الإمداد يتمتعون بخبرة واسعة في التوريد والمشتريات الدولية، تربط{' '}
                    <span className="text-[#04846E]">
                      ألتيكسيس (ALTEXIS)
                    </span>{' '}
                    الشركات بالموردين الموثوقين والحلول التنافسية في جميع أنحاء العالم.
                  </>
                ) : (
                  <>
                    Built by supply chain experts with extensive experience in global sourcing and procurement,{' '}
                    <span className="text-[#04846E]">
                      ALTEXIS
                    </span>{' '}
                    connects businesses with trusted suppliers and competitive solutions worldwide.
                  </>
                )}
              </h2>
            </MotionReveal>
          </div>

        </div>

        {/* Bottom Statistics Row with Vertical Dividers */}
        <MotionReveal delay={0.3} direction="up">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 pt-8 border-t border-[#DCDDCF] text-start">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className={`lg:px-8 first:pl-0 last:border-r-0 ${
                  idx !== 0 ? 'lg:border-l border-[#DCDDCF]' : ''
                }`}
              >
                <div className="font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#123C32] tracking-tight">
                  {stat.value}
                </div>
                <div className="text-sm sm:text-base text-[#5E6D68] font-secondary mt-1.5 font-normal">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </MotionReveal>

      </div>
    </section>
  );
};
