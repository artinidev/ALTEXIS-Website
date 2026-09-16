import React from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowRight, Mail, ShieldCheck, Clock, CheckCircle2 } from 'lucide-react';
import { MotionReveal } from './MotionReveal';

interface FarmioFinalCTAProps {
  onOpenContactModal: () => void;
}

export const FarmioFinalCTA: React.FC<FarmioFinalCTAProps> = ({ onOpenContactModal }) => {
  const { i18n } = useTranslation();
  const lang = (i18n.language || 'en') as 'en' | 'fr' | 'ar';
  const isRtl = lang === 'ar';

  const content = {
    en: {
      headline: 'Ready to source smarter?',
      subtitle: "Tell us what you need. We'll help you find the right way forward.",
      primaryCta: 'Submit a Procurement Request',
      secondaryCta: 'Contact Us',
      badge1: '48h SLA Response Turnaround',
      badge2: '100% Direct Factory Pricing',
      badge3: 'Fiduciary NDA Protection',
    },
    fr: {
      headline: 'Prêt à optimiser vos achats industriels ?',
      subtitle: 'Partagez votre cahier des charges. Nous vous aidons à concrétiser la meilleure solution.',
      primaryCta: "Déposer une Demande d'Achat",
      secondaryCta: 'Contactez-nous',
      badge1: 'Délai de Réponse Garanti 48h',
      badge2: 'Prix 100% Usine Directe',
      badge3: 'Protection Fiduciaire & Accord NDA',
    },
    ar: {
      headline: 'جاهز لترقية وإحكام مشترياتك الصناعية؟',
      subtitle: 'شاركنا متطلباتك ومواصفاتك الفنية. سنساعدك في تحديد المسار الأمثل للشراء والتوريد.',
      primaryCta: 'تقديم طلب مشتريات',
      secondaryCta: 'تواصل معنا',
      badge1: 'استجابة سريعة ومضمونة خلال 48 ساعة',
      badge2: 'أسعار مصانع مباشرة 100%',
      badge3: 'حماية ائتمانية واتفاقية سرية (NDA)',
    },
  };

  const current = content[lang] || content.en;

  return (
    <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-[#F5F3EA]">
      {/* Large Rounded Farmio CTA Container */}
      <div className="max-w-7xl mx-auto rounded-[2rem] sm:rounded-[2.75rem] bg-[#123C32] text-[#F5F3EA] p-8 sm:p-16 lg:p-24 relative overflow-hidden shadow-2xl">
        
        {/* Subtle Ambient Radial Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#8EDB68]/15 rounded-full blur-[160px] pointer-events-none" />

        <div className="max-w-4xl text-start relative z-10">
          
          <MotionReveal delay={0.1}>
            <h2 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-semibold text-white tracking-tight leading-[1.1]">
              {current.headline}
            </h2>
          </MotionReveal>

          <MotionReveal delay={0.2}>
            <p className="mt-6 text-base sm:text-xl text-[#F5F3EA]/85 font-normal leading-relaxed max-w-2xl font-secondary">
              {current.subtitle}
            </p>
          </MotionReveal>

          {/* Action CTAs */}
          <MotionReveal delay={0.3}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenContactModal}
                className="farmio-btn-accent px-8 py-4 text-xs font-extrabold uppercase tracking-wider cursor-pointer inline-flex items-center gap-3 active:scale-[0.98]"
              >
                <span>{current.primaryCta}</span>
                <ArrowRight className={`w-4 h-4 ${isRtl ? 'rotate-180' : ''}`} />
              </button>

              <a
                href="#contact"
                className="farmio-btn-outline-white px-8 py-4 text-xs font-extrabold uppercase tracking-wider inline-flex items-center gap-2"
              >
                <Mail className="w-4 h-4 text-[#8EDB68]" />
                <span>{current.secondaryCta}</span>
              </a>
            </div>
          </MotionReveal>

          {/* Trust Strip */}
          <div className="mt-14 pt-8 border-t border-white/15 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-mono text-white/80">
            <div className="flex items-center gap-2.5">
              <Clock className="w-4 h-4 text-[#8EDB68] shrink-0" />
              <span>{current.badge1}</span>
            </div>
            <div className="flex items-center gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#8EDB68] shrink-0" />
              <span>{current.badge2}</span>
            </div>
            <div className="flex items-center gap-2.5">
              <ShieldCheck className="w-4 h-4 text-[#8EDB68] shrink-0" />
              <span>{current.badge3}</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
