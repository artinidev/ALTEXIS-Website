import React from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowRight } from 'lucide-react';
import { MotionReveal } from './MotionReveal';
import { getOptimizedImageUrl } from '../utils/imageOptimizer';

interface ServicesCardsSectionProps {
  onOpenContactModal: (serviceName?: string) => void;
}

export const ServicesCardsSection: React.FC<ServicesCardsSectionProps> = ({ onOpenContactModal }) => {
  const { t, i18n } = useTranslation(['home', 'common']);
  const isRtl = i18n.language === 'ar';

  return (
    <section id="services" className="py-24 sm:py-32 bg-[#F2F3EE] text-[#111817]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* Main Grid: Left Column (Headline + Left Card) & Center Card & Right Tall Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column (lg:col-span-8): Contains Headline Top + 2 Cards Bottom (Card 1 & Card 2) */}
          <div className="lg:col-span-8 flex flex-col justify-between gap-8">
            
            {/* Top Left: Headline & 'Contact us' Pill */}
            <div className="text-start max-w-xl">
              <MotionReveal delay={0.1}>
                <span className="text-sm font-heading font-semibold text-[#123C32] block mb-2.5">
                  {i18n.language === 'fr' ? 'Nos Solutions' : i18n.language === 'ar' ? 'حلولنا المتكاملة' : 'Our solutions'}
                </span>
                <h2 className="font-heading text-2xl sm:text-4xl lg:text-[44px] font-semibold text-[#123C32] tracking-tight leading-[1.15] mb-6">
                  {i18n.language === 'fr' ? 'Une plateforme complète pour tous vos achats industriels' : i18n.language === 'ar' ? 'منصة متكاملة لجميع حلول المشتريات الصناعية' : 'One platform complete procurement solutions'}
                </h2>

                <button
                  onClick={() => onOpenContactModal('Our Solutions Direct')}
                  className="farmio-btn-accent px-6 py-3 text-xs font-bold uppercase tracking-wider inline-flex items-center gap-2 cursor-pointer shadow-sm"
                >
                  <span>{t('nav.contact', { ns: 'common', defaultValue: 'Contact us' })}</span>
                  <ArrowRight className={`w-3.5 h-3.5 ${isRtl ? 'rotate-180' : ''}`} />
                </button>
              </MotionReveal>
            </div>

            {/* Bottom Row inside Left Column: Card 1 & Card 2 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              
              {/* Card 1: Precision Sourcing Solutions */}
              <MotionReveal delay={0.2} direction="up">
                <div
                  onClick={() => onOpenContactModal('Precision Sourcing Solutions')}
                  className="h-full rounded-[2.25rem] bg-[#0c1614] text-white p-7 sm:p-8 flex flex-col justify-between cursor-pointer group shadow-xl hover:shadow-2xl transition-all duration-300 border border-white/5"
                >
                  <div className="text-start mb-6">
                    <h3 className="font-heading text-xl sm:text-2xl font-semibold text-white mb-2.5 group-hover:text-[#8EDB68] transition-colors leading-snug">
                      {i18n.language === 'fr' ? 'Solutions de sourcing de précision' : i18n.language === 'ar' ? 'حلول التوريد الصناعي الدقيق' : 'Precision sourcing solutions'}
                    </h3>
                    <p className="text-sm text-white/70 font-secondary leading-relaxed">
                      {i18n.language === 'fr'
                        ? 'Exploitez l\'intelligence achat avancée pour identifier les usines internationales et maximiser le rendement de vos approvisionnements.'
                        : i18n.language === 'ar'
                        ? 'استفد من استخبارات الموردين المتقدمة لمتابعة المصانع الدولية وتحقيق أفضل عائد لمشترياتك بأعلى موثوقية.'
                        : 'Use advanced supplier intelligence to monitor international mills and maximize procurement yield with confidence.'}
                    </p>
                  </div>

                  {/* Card 1 Photo */}
                  <div className="relative rounded-2xl overflow-hidden aspect-[16/10] bg-black/40 mb-6">
                    <img
                      src="/precision-sourcing-solutions.jpg"
                      alt="Precision manufacturing & sourcing"
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 brightness-95 gpu-layer"
                    />
                  </div>

                  {/* Pill Tags */}
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/10 text-white border border-white/10">
                      {i18n.language === 'fr' ? 'Analyses de données' : i18n.language === 'ar' ? 'تحليلات البيانات' : 'Data insights'}
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/10 text-white border border-white/10">
                      {i18n.language === 'fr' ? 'Supervision intelligente' : i18n.language === 'ar' ? 'متابعة ذكية' : 'Smart Monitoring'}
                    </span>
                  </div>
                </div>
              </MotionReveal>

              {/* Card 2: Procurement Management System */}
              <MotionReveal delay={0.3} direction="up">
                <div
                  onClick={() => onOpenContactModal('Procurement Management System')}
                  className="h-full rounded-[2.25rem] bg-[#0c1614] text-white p-7 sm:p-8 flex flex-col justify-between cursor-pointer group shadow-xl hover:shadow-2xl transition-all duration-300 border border-white/5"
                >
                  <div className="text-start mb-6">
                    <h3 className="font-heading text-xl sm:text-2xl font-semibold text-white mb-2.5 group-hover:text-[#8EDB68] transition-colors leading-snug">
                      {i18n.language === 'fr' ? 'Système de gestion des achats' : i18n.language === 'ar' ? 'نظام إدارة المشتريات' : 'Procurement management system'}
                    </h3>
                    <p className="text-sm text-white/70 font-secondary leading-relaxed">
                      {i18n.language === 'fr'
                        ? 'Planifiez, suivez et gérez chaque étape de sourcing et normalisation des devis depuis une interface digitale unifiée.'
                        : i18n.language === 'ar'
                        ? 'خطط وتابع وأدر كافة أنشطة التوريد ومقارنة عروض الأسعار بسلاسة من خلال منصة رقمية موحدة.'
                        : 'Plan, track, and manage every sourcing activity and RFQ normalization effortlessly from one simple digital platform.'}
                    </p>
                  </div>

                  {/* Card 2 Photo */}
                  <div className="relative rounded-2xl overflow-hidden aspect-[16/10] bg-black/40 mb-6">
                    <img
                      src={getOptimizedImageUrl('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158', { width: 600, quality: 75, format: 'webp' })}
                      alt="Industrial management and tracking"
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 brightness-90 gpu-layer"
                    />
                  </div>

                  {/* Pill Tags */}
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/10 text-white border border-white/10">
                      {i18n.language === 'fr' ? 'Gain de temps' : i18n.language === 'ar' ? 'كفاءة الوقت' : 'Time Efficiency'}
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/10 text-white border border-white/10">
                      {i18n.language === 'fr' ? 'Contrôle digital' : i18n.language === 'ar' ? 'تحكم رقمي' : 'Digital Control'}
                    </span>
                  </div>
                </div>
              </MotionReveal>

            </div>

          </div>

          {/* Right Column (lg:col-span-4): Card 3 Tall Full-Height Card */}
          <div className="lg:col-span-4 flex">
            <MotionReveal delay={0.35} direction="up" className="w-full">
              <div
                onClick={() => onOpenContactModal('Sustainable Procurement Services')}
                className="h-full rounded-[2.25rem] bg-[#0c1614] text-white p-7 sm:p-8 flex flex-col justify-between cursor-pointer group shadow-xl hover:shadow-2xl transition-all duration-300 border border-white/5"
              >
                <div className="text-start mb-6">
                  <h3 className="font-heading text-xl sm:text-2xl font-semibold text-white mb-2.5 group-hover:text-[#8EDB68] transition-colors leading-snug">
                    {i18n.language === 'fr' ? 'Services d\'achats durables' : i18n.language === 'ar' ? 'خدمات المشتريات المستدامة' : 'Sustainable procurement services'}
                  </h3>
                  <p className="text-sm text-white/70 font-secondary leading-relaxed">
                    {i18n.language === 'fr'
                      ? 'Renforcez la résilience de votre chaîne d\'approvisionnement, économisez vos ressources et achetez de manière responsable.'
                      : i18n.language === 'ar'
                      ? 'عزز كفاءة سلاسل الإمداد، ووفّر الموارد، وتزود بالمواد الصناعية بمسؤولية ومعايير بيئية معتمدة.'
                      : 'Improve supply chain health, save resources, and procure responsibly with verified eco-friendly industrial practices.'}
                  </p>
                </div>

                {/* Card 3 Large Vertical Photo */}
                <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-black/40 mb-6 flex-1 min-h-[260px]">
                  <img
                    src={getOptimizedImageUrl('https://images.unsplash.com/photo-1581092160607-ee22621dd758', { width: 600, quality: 75, format: 'webp' })}
                    alt="Sustainable procurement and metallurgy inspection"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 brightness-90 gpu-layer"
                  />
                </div>

                {/* Pill Tags */}
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/10 text-white border border-white/10">
                    {i18n.language === 'fr' ? 'Durabilité' : i18n.language === 'ar' ? 'الاستدامة' : 'Sustainability'}
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/10 text-white border border-white/10">
                    {i18n.language === 'fr' ? 'Pratiques responsables' : i18n.language === 'ar' ? 'ممارسات ذكية' : 'Smart Practices'}
                  </span>
                </div>
              </div>
            </MotionReveal>
          </div>

        </div>

      </div>
    </section>
  );
};
