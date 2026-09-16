import React from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowUpRight } from 'lucide-react';
import { MotionReveal } from './MotionReveal';
import { getOptimizedImageUrl } from '../utils/imageOptimizer';

export const GallerySection: React.FC = () => {
  const { i18n } = useTranslation(['home', 'common']);

  const galleryData = {
    en: [
      {
        url: getOptimizedImageUrl('https://images.unsplash.com/photo-1581092160607-ee22621dd758', { width: 900, quality: 75, format: 'webp' }),
        title: 'Precision Quality Audit & Tolerance Inspection',
        subtitle: 'Technical drawing conformity and factory calibration • Algiers, Dubai & Global Mills',
        span: 'lg:col-span-7',
        aspect: 'aspect-[16/10]',
      },
      {
        url: getOptimizedImageUrl('https://images.unsplash.com/photo-1578575437130-527eed3abbec', { width: 700, quality: 75, format: 'webp' }),
        title: 'Deepwater Port Logistics Corridors',
        subtitle: 'Algiers, Dubai, Singapore & Houston freight harmonization and customs clearance',
        span: 'lg:col-span-5',
        aspect: 'aspect-[16/10]',
      },
      {
        url: getOptimizedImageUrl('https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122', { width: 700, quality: 75, format: 'webp' }),
        title: 'Hot-Forged Metallurgy & Mill Fabrication',
        subtitle: 'High-pressure alloy components and API-grade flanges for energy & industrial projects',
        span: 'lg:col-span-5',
        aspect: 'aspect-[16/10]',
      },
      {
        url: getOptimizedImageUrl('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d', { width: 900, quality: 75, format: 'webp' }),
        title: 'Automated Industrial Dispatch Facility',
        subtitle: 'Milestone tracking and pre-shipment compliance check across international desks',
        span: 'lg:col-span-7',
        aspect: 'aspect-[16/10]',
      },
    ],
    fr: [
      {
        url: getOptimizedImageUrl('https://images.unsplash.com/photo-1581092160607-ee22621dd758', { width: 900, quality: 75, format: 'webp' }),
        title: 'Audit Qualité & Contrôle des Tolérances',
        subtitle: 'Conformité des plans techniques et étalonnage en usine • Alger, Dubaï & Usines Internationales',
        span: 'lg:col-span-7',
        aspect: 'aspect-[16/10]',
      },
      {
        url: getOptimizedImageUrl('https://images.unsplash.com/photo-1578575437130-527eed3abbec', { width: 700, quality: 75, format: 'webp' }),
        title: 'Couloirs Logistiques Portuaires',
        subtitle: 'Harmonisation du fret maritime et dédouanement • Alger, Dubaï, Singapour & Houston',
        span: 'lg:col-span-5',
        aspect: 'aspect-[16/10]',
      },
      {
        url: getOptimizedImageUrl('https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122', { width: 700, quality: 75, format: 'webp' }),
        title: 'Métallurgie & Pièces Forgées Industrielles',
        subtitle: 'Composants haute pression et brides forgées certifiées pour le secteur de l\'énergie',
        span: 'lg:col-span-5',
        aspect: 'aspect-[16/10]',
      },
      {
        url: getOptimizedImageUrl('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d', { width: 900, quality: 75, format: 'webp' }),
        title: 'Centre d\'Expédition & Inspection Finale',
        subtitle: 'Contrôle avant embarquement et traçabilité logistique en temps réel',
        span: 'lg:col-span-7',
        aspect: 'aspect-[16/10]',
      },
    ],
    ar: [
      {
        url: getOptimizedImageUrl('https://images.unsplash.com/photo-1581092160607-ee22621dd758', { width: 900, quality: 75, format: 'webp' }),
        title: 'فحص الجودة والتدقيق الهندسي للأبعاد',
        subtitle: 'مطابقة المخططات الفنية ومعايرة المصانع • الجزائر، دبي والمصانع العالمية',
        span: 'lg:col-span-7',
        aspect: 'aspect-[16/10]',
      },
      {
        url: getOptimizedImageUrl('https://images.unsplash.com/photo-1578575437130-527eed3abbec', { width: 700, quality: 75, format: 'webp' }),
        title: 'ممرات الشحن البحري والموانئ الدولية',
        subtitle: 'تنسيق الشحن البحري والتخليص الجمركي • الجزائر، دبي، سنغافورة وهيوستن',
        span: 'lg:col-span-5',
        aspect: 'aspect-[16/10]',
      },
      {
        url: getOptimizedImageUrl('https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122', { width: 700, quality: 75, format: 'webp' }),
        title: 'المعادن المطروقة والسبائك الصناعية',
        subtitle: 'مكونات الضغط العالي والفلنجات المطابقة لمعايير API لمشاريع الطاقة والصناعة',
        span: 'lg:col-span-5',
        aspect: 'aspect-[16/10]',
      },
      {
        url: getOptimizedImageUrl('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d', { width: 900, quality: 75, format: 'webp' }),
        title: 'مراكز الشحن والتدقيق النهائي قبل التصدير',
        subtitle: 'متابعة مراحل الإنجاز وفحص المطابقة الإلزامية قبل مغادرة الموانئ',
        span: 'lg:col-span-7',
        aspect: 'aspect-[16/10]',
      },
    ],
  };

  const galleryItems = galleryData[i18n.language as keyof typeof galleryData] || galleryData.en;

  return (
    <section id="insights" className="py-24 sm:py-32 bg-[#F2F3EE] text-[#111817] border-b border-[#E2E3DC]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16 sm:mb-20 text-start">
          <div className="lg:col-span-4">
            <MotionReveal delay={0.1}>
              <span className="font-heading text-lg sm:text-xl font-bold text-[#123C32]">
                {i18n.language === 'fr' ? 'Notre Environnement' : i18n.language === 'ar' ? 'معرض الأعمال' : 'Inside Our World'}
              </span>
            </MotionReveal>
          </div>

          <div className="lg:col-span-8">
            <MotionReveal delay={0.2} direction="up">
              <h2 className="font-heading text-2xl sm:text-4xl lg:text-[44px] font-semibold text-[#123C32] tracking-tight leading-[1.15]">
                {i18n.language === 'fr'
                  ? 'Les achats internationaux en action.'
                  : i18n.language === 'ar'
                  ? 'المشتريات الدولية في قلب الميدان.'
                  : 'Global procurement in motion.'}
              </h2>
              <p className="mt-3.5 text-base sm:text-lg text-[#5E6D68] font-secondary leading-relaxed max-w-2xl">
                {i18n.language === 'fr'
                  ? 'Un aperçu visuel des forges, usines de fabrication, centres d\'essais et couloirs logistiques internationaux où nos mandats prennent forme.'
                  : i18n.language === 'ar'
                  ? 'نظرة شاملة على المصانع ومراكز الاختبار وممرات الشحن الدولي التي ننفذ من خلالها متطلبات عملائنا الصناعية.'
                  : 'A visual overview of the manufacturing mills, testing facilities, and international logistics corridors where our buyer-side mandates take shape.'}
              </p>
            </MotionReveal>
          </div>
        </div>

        {/* Bento Architectural Gallery Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {galleryItems.map((item, idx) => (
            <MotionReveal key={idx} delay={0.12 * idx} direction="up" className={`w-full ${item.span}`}>
              <div className={`group relative rounded-[2.5rem] overflow-hidden ${item.aspect} bg-[#111817] shadow-xl border border-[#E2DFD5] cursor-pointer`}>
                
                {/* Image with Smooth Zoom */}
                <img
                  src={item.url}
                  alt={item.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out brightness-[0.85] contrast-[1.05] gpu-layer"
                />

                {/* Elegant Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />

                {/* Corner Crosshairs */}
                <div className="absolute top-6 left-6 text-white/40 text-xs font-mono select-none pointer-events-none group-hover:text-[#8EDB68] transition-colors">
                  +
                </div>
                <div className="absolute top-6 right-6 w-9 h-9 rounded-full bg-white/10 backdrop-blur-md text-white flex items-center justify-center group-hover:bg-[#8EDB68] group-hover:text-[#123C32] transition-all duration-300 shadow-md">
                  <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                </div>

                {/* Bottom Content Narrative */}
                <div className="absolute bottom-6 sm:bottom-8 left-6 sm:left-8 right-6 sm:right-8 text-start text-white">
                  <h3 className="font-heading text-xl sm:text-2xl font-bold text-white mb-1.5 leading-snug group-hover:text-[#8EDB68] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-white/75 font-secondary font-medium">
                    {item.subtitle}
                  </p>
                </div>

              </div>
            </MotionReveal>
          ))}
        </div>

      </div>
    </section>
  );
};
