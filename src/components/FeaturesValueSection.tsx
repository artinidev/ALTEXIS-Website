import React from 'react';
import { useTranslation } from 'react-i18next';
import { MotionReveal } from './MotionReveal';
import { getOptimizedImageUrl } from '../utils/imageOptimizer';

export const FeaturesValueSection: React.FC = () => {
  const { i18n } = useTranslation(['home', 'common']);

  return (
    <section className="py-24 sm:py-32 bg-[#F2F3EE] text-[#111817] border-b border-[#E2E3DC]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16 sm:mb-20 text-start">
          <div className="lg:col-span-4">
            <MotionReveal delay={0.1}>
              <span className="font-heading text-lg sm:text-xl font-bold text-[#123C32]">
                {i18n.language === 'fr' ? 'Pourquoi ALTEXIS' : i18n.language === 'ar' ? 'لماذا ألتيكسيس' : 'Why ALTEXIS'}
              </span>
            </MotionReveal>
          </div>

          <div className="lg:col-span-8">
            <MotionReveal delay={0.2} direction="up">
              <h2 className="font-heading text-2xl sm:text-4xl lg:text-[44px] font-semibold text-[#123C32] tracking-tight leading-[1.15]">
                {i18n.language === 'fr'
                  ? 'De meilleurs achats commencent par une meilleure visibilité.'
                  : i18n.language === 'ar'
                  ? 'المشتريات الأفضل تبدأ دوماً برؤية وشفافية أعلى.'
                  : 'Better procurement starts with better visibility.'}
              </h2>
              <p className="mt-3.5 text-base sm:text-lg text-[#5E6D68] font-secondary leading-relaxed max-w-2xl">
                {i18n.language === 'fr'
                  ? 'Nous aidons les entreprises industrielles à éliminer l\'incertitude, élargir leur réseau d\'approvisionnement international et obtenir des prix direct usine sous contrôle fiduciaire complet.'
                  : i18n.language === 'ar'
                  ? 'نساعد المنشآت الصناعية في القضاء على مخاطر الشراء غير المحسوبة، وتوسيع نطاق التوريد العالمي، وضمان أسعار المصانع المباشرة بحماية ائتمانية كاملة.'
                  : 'We help industrial enterprises eliminate uncertainty, expand international sourcing reach, and secure factory-direct pricing with complete fiduciary oversight.'}
              </p>
            </MotionReveal>
          </div>
        </div>

        {/* Clean Editorial Twin Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Card 1: International Sourcing */}
          <MotionReveal delay={0.25} direction="up" className="flex">
            <div className="w-full rounded-[2.5rem] bg-[#123C32] text-white p-8 sm:p-12 flex flex-col justify-between shadow-2xl group transition-all duration-300">
              <div className="text-start">
                <span className="text-sm font-semibold text-[#8EDB68] block mb-3">
                  {i18n.language === 'fr' ? 'Couloirs de Sourcing Internationaux' : i18n.language === 'ar' ? 'ممرات التوريد الدولية' : 'International Sourcing Corridors'}
                </span>

                <h3 className="font-heading text-xl sm:text-3xl font-semibold text-white mb-3.5 leading-snug">
                  {i18n.language === 'fr'
                    ? 'Accédez aux opportunités de sourcing international.'
                    : i18n.language === 'ar'
                    ? 'الوصول إلى أفضل فرص التوريد والمصانع العالمية.'
                    : 'Access international sourcing opportunities.'}
                </h3>

                <p className="text-base text-white/75 font-secondary leading-relaxed mb-8">
                  {i18n.language === 'fr'
                    ? 'Connectez-vous directement avec des fabricants qualifiés, des forges de rang 1 et des usines spécialisées dans le monde entier sans marges d\'intermédiaires.'
                    : i18n.language === 'ar'
                    ? 'تواصل مباشرة مع كبار المصنعين ومسابك الفولاذ وورش التصنيع المتخصصة حول العالم دون هوامش وساطة غير مبررة.'
                    : 'Connect directly with qualified manufacturers, tier-1 forging mills, and specialist fabricators worldwide without intermediary trading markups.'}
                </p>
              </div>

              {/* Photographic Window */}
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden aspect-[16/10] bg-black/40 shadow-inner">
                <img
                  src={getOptimizedImageUrl('https://images.unsplash.com/photo-1578575437130-527eed3abbec', { width: 800, quality: 75, format: 'webp' })}
                  alt="Global industrial logistics and shipping corridors"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 brightness-95 gpu-layer"
                />
              </div>
            </div>
          </MotionReveal>

          {/* Card 2: Supplier Due Diligence */}
          <MotionReveal delay={0.3} direction="up" className="flex">
            <div className="w-full rounded-[2.5rem] bg-white text-[#111817] p-8 sm:p-12 flex flex-col justify-between shadow-xl border border-[#E2DFD5] group hover:border-[#8EDB68] transition-all duration-300">
              <div className="text-start">
                <span className="text-sm font-semibold text-[#123C32] block mb-3">
                  {i18n.language === 'fr' ? 'Audit et Vérification Fournisseurs' : i18n.language === 'ar' ? 'الفحص النافي للجهالة للموردين' : 'Supplier Due Diligence'}
                </span>

                <h3 className="font-heading text-xl sm:text-3xl font-semibold text-[#123C32] mb-3.5 leading-snug">
                  {i18n.language === 'fr'
                    ? 'Sachez auprès de qui vous achetez avant de vous engager.'
                    : i18n.language === 'ar'
                    ? 'اعرف تماماً هوية وقدرات من تشتري منه قبل الالتزام المالي.'
                    : 'Understand who you\'re buying from before you commit.'}
                </h3>

                <p className="text-base text-[#5E6D68] font-secondary leading-relaxed mb-8">
                  {i18n.language === 'fr'
                    ? 'Clarté complète sur les certifications d\'usine, les capacités de production, la conformité qualité ISO/API et les facteurs de risque avant tout décaissement.'
                    : i18n.language === 'ar'
                    ? 'وضوح تام حول تراخيص المصانع وسعات الإنتاج والشهادات المعتمدة ISO/API وعوامل المخاطر التجارية قبل أي توقيع عقود.'
                    : 'Complete clarity on factory credentials, production capacity, ISO/API quality adherence, and commercial risk factors before capital authorization.'}
                </p>
              </div>

              {/* Photographic Window */}
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden aspect-[16/10] bg-black/10 shadow-inner">
                <img
                  src={getOptimizedImageUrl('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158', { width: 800, quality: 75, format: 'webp' })}
                  alt="Precision component quality testing and metallurgical inspection"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 brightness-95 gpu-layer"
                />
              </div>
            </div>
          </MotionReveal>

        </div>

      </div>
    </section>
  );
};
