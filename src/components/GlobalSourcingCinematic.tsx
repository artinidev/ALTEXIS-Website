import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ArrowRight, Globe } from 'lucide-react';
import { MotionReveal } from './MotionReveal';
import { AltexisRibbonLogo } from './AltexisRibbonLogo';

interface GlobalSourcingCinematicProps {
  onOpenContactModal: () => void;
}

export const GlobalSourcingCinematic: React.FC<GlobalSourcingCinematicProps> = ({ onOpenContactModal }) => {
  const { i18n } = useTranslation(['home', 'common']);
  const isRtl = i18n.language === 'ar';

  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-[#F5F3EA]">
      {/* Large Full-Width Rounded Farmio Cinematic Container */}
      <div className="max-w-7xl mx-auto rounded-[2rem] sm:rounded-[2.75rem] overflow-hidden bg-[#111817] text-white relative min-h-[500px] sm:min-h-[580px] flex items-center shadow-2xl p-8 sm:p-14 lg:p-16">
        
        {/* Background Cinematic Photo with Darker Low-Opacity Layer */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img
            src="/global-sourcing-director.jpg"
            alt="International procurement engineering and supplier verification"
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover object-top -scale-x-100 translate-y-2 sm:translate-y-4 scale-105 brightness-[0.82] contrast-[1.05] gpu-layer"
          />
          {/* Darker low-opacity neutral overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/35" />
          <div className="absolute inset-0 bg-black/20" />
        </div>

        {/* Content Grid: Left Copy & CTA + Right 3D Interactive Ribbon Logo */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center relative z-10">
          
          {/* Left Column: Heading, Eyebrow & CTA */}
          <div className="lg:col-span-7 max-w-2xl text-start">
            <MotionReveal delay={0.1}>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-md text-xs font-mono font-bold tracking-[0.2em] text-[#8EDB68] uppercase mb-6">
                <Globe className="w-3.5 h-3.5 text-[#8EDB68]" />
                {i18n.language === 'fr' ? 'SOURCING MONDIAL' : i18n.language === 'ar' ? 'التوريد الدولي' : 'GLOBAL SOURCING REACH'}
              </div>

              <h2 className="font-heading text-2xl sm:text-4xl lg:text-[46px] font-semibold text-white tracking-tight leading-[1.12]">
                {i18n.language === 'fr' ? (
                  <>
                    Lorsque le bon fournisseur n'est pas à proximité,{' '}
                    <span className="text-[#8EDB68] font-semibold">regardez plus loin.</span>
                  </>
                ) : i18n.language === 'ar' ? (
                  <>
                    عندما لا يتوفر المورد المناسب محلياً،{' '}
                    <span className="text-[#8EDB68] font-semibold">ابحث أبعد.</span>
                  </>
                ) : (
                  <>
                    When the right supplier isn't nearby,{' '}
                    <span className="text-[#8EDB68] font-semibold">look further.</span>
                  </>
                )}
              </h2>
            </MotionReveal>

            <MotionReveal delay={0.2}>
              <p className="mt-8 text-base sm:text-xl text-[#F5F3EA]/85 font-normal leading-relaxed font-secondary">
                {i18n.language === 'fr'
                  ? 'Notre approche internationale permet aux entreprises d\'accéder à des fabricants performants au-delà des marchés traditionnels, en préservant la qualité, la fiabilité et la valeur commerciale.'
                  : i18n.language === 'ar'
                  ? 'تتيح منهجيتنا في التوريد الدولي للشركات الوصول إلى مصانع رائدة خارج الأسواق المحلية التقليدية مع ضمان الجودة والالتزام والجدوى الاقتصادية.'
                  : 'Our international sourcing approach helps businesses access suppliers beyond traditional local markets while maintaining focus on quality, reliability and commercial value.'}
              </p>
            </MotionReveal>

            <MotionReveal delay={0.3}>
              <div className="mt-10">
                <button
                  onClick={onOpenContactModal}
                  className="farmio-btn-accent px-8 py-4 text-xs font-extrabold uppercase tracking-wider cursor-pointer inline-flex items-center gap-3 active:scale-[0.98]"
                >
                  <span>{i18n.language === 'fr' ? 'Discuter de votre Besoin' : i18n.language === 'ar' ? 'ناقش متطلباتك' : 'Discuss Your Requirement'}</span>
                  <ArrowRight className={`w-4 h-4 ${isRtl ? 'rotate-180' : ''}`} />
                </button>
              </div>
            </MotionReveal>
          </div>

          {/* Right Column: Floating 3D Interactive Glass Logo */}
          <div className="lg:col-span-5 flex items-center justify-center lg:justify-end">
            <MotionReveal delay={0.35} direction="up">
              <motion.div
                animate={{
                  y: [-6, 6, -6],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="relative w-52 sm:w-64 md:w-72 lg:w-80 aspect-[200/175] flex items-center justify-center cursor-pointer group"
                onClick={onOpenContactModal}
              >
                <AltexisRibbonLogo size="100%" />
              </motion.div>
            </MotionReveal>
          </div>

        </div>

      </div>
    </section>
  );
};
