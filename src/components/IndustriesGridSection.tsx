import React from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowUpRight } from 'lucide-react';
import { MotionReveal } from './MotionReveal';
import { getOptimizedImageUrl } from '../utils/imageOptimizer';

interface IndustriesGridSectionProps {
  onOpenContactModal: (industryName?: string) => void;
}

export const IndustriesGridSection: React.FC<IndustriesGridSectionProps> = ({ onOpenContactModal }) => {
  const { i18n } = useTranslation(['home', 'common']);

  const industriesData = {
    en: [
      {
        title: 'Oil & Gas',
        desc: 'API-certified valves, forged piping, high-pressure flanges, and drilling equipment.',
        image: '/oil-and-gas.jpg',
      },
      {
        title: 'EPC & Engineering',
        desc: 'Critical path materials, pre-fabricated structural modules, and project supply chain management.',
        image: getOptimizedImageUrl('https://images.unsplash.com/photo-1581092160607-ee22621dd758', { width: 600, quality: 75, format: 'webp' }),
      },
      {
        title: 'Manufacturing',
        desc: 'Precision CNC parts, castings, specialized polymers, and direct mill raw components.',
        image: getOptimizedImageUrl('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158', { width: 600, quality: 75, format: 'webp' }),
      },
      {
        title: 'MRO & Spare Parts',
        desc: 'Rapid replacement components, industrial pumps, mechanical seals, and maintenance tooling.',
        image: '/mro-spare-parts.jpg',
      },
      {
        title: 'Fabrication',
        desc: 'High-tolerance laser-cut assemblies, pressure vessels, and specialized alloy fabrication.',
        image: getOptimizedImageUrl('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d', { width: 600, quality: 75, format: 'webp' }),
      },
      {
        title: 'Industrial Services',
        desc: 'Turnaround consumables, safety equipment, and specialized technical operational supplies.',
        image: getOptimizedImageUrl('https://images.unsplash.com/photo-1578575437130-527eed3abbec', { width: 600, quality: 75, format: 'webp' }),
      },
    ],
    fr: [
      {
        title: 'Pétrole & Gaz',
        desc: 'Vannes certifiées API, tuyauteries sous-marines, raccords forgés haute pression et instrumentation.',
        image: '/oil-and-gas.jpg',
      },
      {
        title: 'Ingénierie & EPC',
        desc: 'Aciers structuraux, ensembles préfabriqués, équipements lourds et approvisionnement de grands chantiers.',
        image: getOptimizedImageUrl('https://images.unsplash.com/photo-1581092160607-ee22621dd758', { width: 600, quality: 75, format: 'webp' }),
      },
      {
        title: 'Industrie Manufacturière',
        desc: 'Composants usinés CNC de haute précision, fonderie, polymères techniques et matières premières direct usine.',
        image: getOptimizedImageUrl('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158', { width: 600, quality: 75, format: 'webp' }),
      },
      {
        title: 'MRO & Maintenance',
        desc: 'Pièces de rechange critiques, pompes industrielles, garnitures mécaniques et outillage d\'urgence.',
        image: '/mro-spare-parts.jpg',
      },
      {
        title: 'Chaudronnerie & Fabrication',
        desc: 'Alliages spéciaux, tôles pour appareils à pression, consommables de soudage et pièces forgées.',
        image: getOptimizedImageUrl('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d', { width: 600, quality: 75, format: 'webp' }),
      },
      {
        title: 'Services Industriels',
        desc: 'Matériel pour arrêts d\'unités, équipements de protection et outillage spécialisé pour interventions.',
        image: getOptimizedImageUrl('https://images.unsplash.com/photo-1578575437130-527eed3abbec', { width: 600, quality: 75, format: 'webp' }),
      },
    ],
    ar: [
      {
        title: 'النفط والغاز',
        desc: 'صمامات معتمدة API، وأنابيب الضغط العالي المطروقة، والفلنجات ومعدات الحفر والإنتاج.',
        image: '/oil-and-gas.jpg',
      },
      {
        title: 'الهندسة والمقاولات (EPC)',
        desc: 'الهياكل الفولاذية، والوحدات الجاهزة للمشاريع الكبرى وتوريدات المواقع الإنشائية الحرجة.',
        image: getOptimizedImageUrl('https://images.unsplash.com/photo-1581092160607-ee22621dd758', { width: 600, quality: 75, format: 'webp' }),
      },
      {
        title: 'التصنيع والإنتاج',
        desc: 'المكونات الميكانيكية الدقيقة CNC، والمسبوكات، والبوليمرات المتخصصة والمواد الخام مباشرة من المصانع.',
        image: getOptimizedImageUrl('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158', { width: 600, quality: 75, format: 'webp' }),
      },
      {
        title: 'الصيانة والتشغيل (MRO)',
        desc: 'قطع الغيار الحرجة، والمضخات الصناعية، وموانع التسرب الميكانيكية ومعدات الصيانة العاجلة.',
        image: '/mro-spare-parts.jpg',
      },
      {
        title: 'التشكيل والهياكل المعدنية',
        desc: 'السبائك الخاصة، وألواح أوعية الضغط، ومستهلكات اللحام والقطع المطروقة عالية التحمل.',
        image: getOptimizedImageUrl('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d', { width: 600, quality: 75, format: 'webp' }),
      },
      {
        title: 'الخدمات الصناعية',
        desc: 'مستهلكات فترات التوقف والصيانة الشاملة، ومعدات السلامة والتجهيزات الفنية المتخصصة.',
        image: getOptimizedImageUrl('https://images.unsplash.com/photo-1578575437130-527eed3abbec', { width: 600, quality: 75, format: 'webp' }),
      },
    ],
  };

  const industries = industriesData[i18n.language as keyof typeof industriesData] || industriesData.en;

  return (
    <section id="industries" className="py-24 sm:py-36 bg-[#F5F3EA] text-[#111817] border-t border-[#E2DFD5]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl text-start mb-14 sm:mb-18">
          <MotionReveal delay={0.1}>
            <span className="text-xs font-mono font-bold tracking-[0.2em] text-[#123C32] uppercase block mb-2.5">
              {i18n.language === 'fr' ? 'SECTEURS' : i18n.language === 'ar' ? 'القطاعات الصناعية' : 'INDUSTRIES'}
            </span>
            <h2 className="font-heading text-2xl sm:text-4xl lg:text-[44px] font-semibold text-[#123C32] tracking-tight leading-[1.15]">
              {i18n.language === 'fr'
                ? 'L\'approvisionnement pour les industries exigeantes.'
                : i18n.language === 'ar'
                ? 'مشتريات مصممة للقطاعات عالية المتطلبات.'
                : 'Built for demanding industries.'}
            </h2>
          </MotionReveal>
        </div>

        {/* 6 Industry Visual Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-start">
          {industries.map((ind, idx) => (
            <MotionReveal key={ind.title} delay={0.1 * idx} direction="up">
              <div
                onClick={() => onOpenContactModal(ind.title)}
                className="group relative rounded-[2rem] overflow-hidden bg-white border border-[#E2DFD5] p-6 shadow-lg hover:shadow-2xl hover:border-[#8EDB68] transition-all duration-300 cursor-pointer flex flex-col justify-between"
              >
                {/* Image Container with Zoom */}
                <div className="relative rounded-2xl overflow-hidden aspect-[16/10] bg-[#111817] mb-6">
                  <img
                    src={ind.image}
                    alt={ind.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out brightness-90 gpu-layer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-50 group-hover:opacity-30 transition-opacity" />
                  
                  {/* Arrow CTA Button */}
                  <div className="absolute bottom-3 right-3 w-10 h-10 rounded-full bg-white text-[#123C32] group-hover:bg-[#8EDB68] flex items-center justify-center transition-all shadow-md group-hover:scale-110">
                    <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                  </div>
                </div>

                <div>
                  <h3 className="font-heading text-lg sm:text-xl font-semibold text-[#123C32] mb-1.5 group-hover:text-[#04846E] transition-colors">
                    {ind.title}
                  </h3>

                  <p className="text-sm text-[#5E6D68] leading-relaxed font-secondary">
                    {ind.desc}
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
