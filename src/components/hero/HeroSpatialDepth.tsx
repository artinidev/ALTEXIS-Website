import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowRight, Shield, Sparkles } from 'lucide-react';
import { MotionReveal } from '../MotionReveal';
import { AltexisRibbonLogo } from '../AltexisRibbonLogo';

interface HeroVariantProps {
  onOpenContactModal: (topic?: string) => void;
  isRtl?: boolean;
}

export const HeroSpatialDepth: React.FC<HeroVariantProps> = ({ onOpenContactModal, isRtl }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  // 3D Tilt Physics using Framer Motion springs
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), { damping: 20, stiffness: 120 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-12, 12]), { damping: 20, stiffness: 120 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div
      className="relative min-h-[94vh] sm:min-h-screen w-full flex flex-col justify-between pt-32 sm:pt-36 pb-12 sm:pb-16 px-6 sm:px-10 lg:px-16 overflow-hidden select-none perspective-[1200px]"
    >
      {/* Background Multi-Layer Depth Photography */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src="/hero-procurement-night.jpg"
          alt="ALTEXIS Global Procurement Intelligence"
          loading="eager"
          decoding="async"
          // @ts-expect-error fetchpriority
          fetchpriority="high"
          className="w-full h-full object-cover object-center brightness-[0.75] contrast-[1.05] scale-105 gpu-layer"
        />
        {/* Faded Black Overlays (Clean neutral darkness, zero green tint) */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/55 to-black/35" />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Floating Spatial Verification Chips Drifting in 3D Space */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        className="hidden lg:flex absolute top-36 right-16 z-10 items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-white text-xs font-heading font-semibold shadow-2xl"
      >
        <Shield className="w-3.5 h-3.5 text-[#8EDB68]" />
        <span>ISO 9001 / API 6D Audited Mills</span>
      </motion.div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="hidden lg:flex absolute top-56 right-48 z-10 items-center gap-2 px-4 py-2 rounded-full bg-black/40 backdrop-blur-xl border border-white/15 text-white/90 text-xs font-mono shadow-2xl"
      >
        <span className="w-2 h-2 rounded-full bg-[#8EDB68] animate-ping" />
        <span>Direct Factory Pricing • 0% Intermediary Fee</span>
      </motion.div>

      {/* Main Content Area */}
      <div className="relative z-10 max-w-7xl mx-auto w-full flex-1 flex flex-col justify-between gap-10">

        {/* Top/Middle Left: Eyebrow + Headline */}
        <div className="max-w-3xl text-start mt-4 sm:mt-8">

          <MotionReveal delay={0.1}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/15 backdrop-blur-md text-xs font-heading font-semibold tracking-wider text-white uppercase mb-6 shadow-xl">
              <Sparkles className="w-3.5 h-3.5 text-[#8EDB68]" />
              <span>SPATIAL PROCUREMENT ARCHITECTURE</span>
            </div>
          </MotionReveal>

          <MotionReveal delay={0.2} direction="up">
            <h1 className="font-heading text-3xl sm:text-5xl lg:text-[56px] font-semibold text-white tracking-tight leading-[1.1]">
              Engineered sourcing.<br />
              <span className="text-[#8EDB68] font-semibold drop-shadow-md">
                Uncompromised clarity.
              </span>
            </h1>
          </MotionReveal>

        </div>

        {/* Bottom Row: Standalone 3D Gyro Tilting Logo & Supporting Text */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end justify-between pt-6 sm:pt-10">

          {/* Left Column: Standalone 3D Gyro Tilting Logo */}
          <div className="md:col-span-6 lg:col-span-5">
            <MotionReveal delay={0.3} direction="up">
              <div
                ref={cardRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                onClick={() => onOpenContactModal('Hero Logo Direct')}
                className="perspective-[1000px] flex items-center justify-start cursor-pointer select-none"
              >
                <motion.div
                  style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
                  whileHover={{ scale: 1.06, transition: { duration: 0.25, ease: 'easeOut' } }}
                  className="relative w-56 sm:w-72 md:w-80 lg:w-[340px] aspect-[200/175] flex items-center justify-center group"
                >
                  {/* Logo Itself with 3D Depth Cast (Light effect contained strictly within logo geometry) */}
                  <div className="relative z-10 w-full h-full flex items-center justify-center">
                    <AltexisRibbonLogo size="100%" />
                  </div>
                </motion.div>
              </div>
            </MotionReveal>
          </div>

          {/* Right Column: Supporting Text & Magnetic CTA */}
          <div className="md:col-span-6 lg:col-span-6 flex flex-col items-start md:items-end text-start md:text-end">
            <MotionReveal delay={0.35} direction="up">
              <p className="text-base sm:text-lg text-white/85 font-secondary font-normal leading-relaxed max-w-lg mb-8">
                Eliminate broker markups and source heavy machinery, forged components, and industrial parts directly from audited manufacturing centers worldwide.
              </p>

              <button
                onClick={() => onOpenContactModal('Hero Spatial Intake')}
                className="farmio-btn-accent px-8 py-4 text-xs font-heading font-bold uppercase tracking-wider cursor-pointer inline-flex items-center gap-3 shadow-2xl active:scale-[0.98] group"
              >
                <span>REQUEST SPECIFICATION AUDIT</span>
                <ArrowRight className={`w-4 h-4 group-hover:translate-x-1 transition-transform ${isRtl ? 'rotate-180' : ''}`} />
              </button>
            </MotionReveal>
          </div>

        </div>

      </div>
    </div>
  );
};
