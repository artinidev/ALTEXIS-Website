import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { MotionReveal } from '../MotionReveal';
import { AltexisRibbonLogo } from '../AltexisRibbonLogo';

interface HeroVariantProps {
  onOpenContactModal: (topic?: string) => void;
  isRtl?: boolean;
}

interface TradeNode {
  id: string;
  name: string;
  x: number;
  y: number;
  code: string;
}

const NODES: TradeNode[] = [
  { id: '1', name: 'Rotterdam Port', x: 28, y: 32, code: 'RTM' },
  { id: '2', name: 'Shanghai Gateway', x: 78, y: 46, code: 'SHA' },
  { id: '3', name: 'Houston Terminal', x: 16, y: 52, code: 'HOU' },
  { id: '4', name: 'Hamburg Hub', x: 38, y: 28, code: 'HAM' },
  { id: '5', name: 'Dubai Sourcing', x: 56, y: 48, code: 'DXB' },
  { id: '6', name: 'Singapore Strait', x: 72, y: 64, code: 'SIN' },
];

const PHRASES_BY_LANG: Record<string, string[]> = {
  en: [
    'The right decision.',
    'The verified supplier.',
    'The direct price.',
    'The audited factory.',
    'The secure delivery.',
  ],
  fr: [
    'La bonne décision.',
    'Le fournisseur qualifié.',
    'Le prix direct usine.',
    'L\'usine auditée.',
    'La livraison sécurisée.',
  ],
  ar: [
    'القرار الصحيح.',
    'المورد المعتمد.',
    'السعر المباشر من المصنع.',
    'المصنع الخاضع للتدقيق.',
    'التسليم الآمن والموثوق.',
  ],
};

export const HeroRadarMesh: React.FC<HeroVariantProps> = ({ onOpenContactModal, isRtl }) => {
  const { t, i18n } = useTranslation(['home', 'common']);
  const containerRef = useRef<HTMLDivElement>(null);
  const [phraseIndex, setPhraseIndex] = useState(0);

  const rotatingPhrases = PHRASES_BY_LANG[i18n.language] || PHRASES_BY_LANG.en;

  // Rotating phrase ticker every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setPhraseIndex((prev) => (prev + 1) % rotatingPhrases.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [rotatingPhrases.length]);

  // High-performance Framer Motion values (no React state re-render drops)
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);

  const springConfig = { damping: 28, stiffness: 120, mass: 0.6 };

  // Smooth background parallax
  const bgX = useSpring(useTransform(rawX, [-10, 10], [-8, 8]), springConfig);
  const bgY = useSpring(useTransform(rawY, [-10, 10], [-8, 8]), springConfig);

  // Smooth logo floating translation
  const logoX = useSpring(useTransform(rawX, [-10, 10], [-10, 10]), springConfig);
  const logoY = useSpring(useTransform(rawY, [-10, 10], [-10, 10]), springConfig);

  // Track cursor coordinates without triggering state re-renders
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 20;
    rawX.set(x);
    rawY.set(y);
  };

  const handleMouseLeave = () => {
    rawX.set(0);
    rawY.set(0);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-[94vh] sm:min-h-screen w-full flex flex-col justify-between pt-32 sm:pt-36 pb-12 sm:pb-16 px-6 sm:px-10 lg:px-16 overflow-hidden select-none"
    >
      {/* Background Photography with Parallax Shift */}
      <motion.div
        style={{ x: bgX, y: bgY, scale: 1.04 }}
        className="absolute inset-0 z-0 pointer-events-none"
      >
        <img
          src="/hero-procurement-night.jpg"
          alt="ALTEXIS Global Procurement Intelligence"
          loading="eager"
          decoding="async"
          // @ts-expect-error fetchpriority
          fetchpriority="high"
          className="w-full h-full object-cover object-center brightness-[0.75] contrast-[1.05] gpu-layer"
        />
        {/* Faded Black Overlays (Clean neutral darkness, zero green tint) */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/55 to-black/35" />
        <div className="absolute inset-0 bg-black/20" />
      </motion.div>

      {/* SVG Kinetic Trade Mesh & Arc Overlay */}
      <svg className="absolute inset-0 w-full h-full z-1 pointer-events-none opacity-40 sm:opacity-60">
        <defs>
          <linearGradient id="arcGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#8EDB68" stopOpacity="0.1" />
            <stop offset="50%" stopColor="#8EDB68" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#8EDB68" stopOpacity="0.1" />
          </linearGradient>
          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Global Arc Curves */}
        <motion.path
          d="M 28% 32% Q 53% 15% 78% 46%"
          fill="none"
          stroke="url(#arcGradient)"
          strokeWidth="1.5"
          strokeDasharray="6 6"
          animate={{ strokeDashoffset: [0, -48] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
        />
        <motion.path
          d="M 16% 52% Q 36% 38% 56% 48%"
          fill="none"
          stroke="url(#arcGradient)"
          strokeWidth="1.5"
          strokeDasharray="6 6"
          animate={{ strokeDashoffset: [0, -48] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
        />
        <motion.path
          d="M 38% 28% Q 55% 46% 72% 64%"
          fill="none"
          stroke="url(#arcGradient)"
          strokeWidth="1.5"
          strokeDasharray="6 6"
          animate={{ strokeDashoffset: [0, -48] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
        />

        {/* Pulse Node Rings */}
        {NODES.map((node) => (
          <g key={node.id} transform={`translate(${node.x}%, ${node.y}%)`} style={{ transformBox: 'fill-box' }}>
            <circle cx="0" cy="0" r="3" fill="#8EDB68" filter="url(#glow)" />
            <motion.circle
              cx="0"
              cy="0"
              r="3"
              fill="none"
              stroke="#8EDB68"
              strokeWidth="1"
              animate={{ r: [3, 14], opacity: [0.9, 0] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: 'easeOut', delay: Number(node.id) * 0.3 }}
            />
          </g>
        ))}
      </svg>

      {/* Main Content Area */}
      <div className="relative z-10 max-w-7xl mx-auto w-full flex-1 flex flex-col justify-between gap-10">

        {/* Top/Middle Left: Headline & Telemetry Pill */}
        <div className="max-w-3xl text-start mt-4 sm:mt-8">

          {/* Eyebrow & Live Global Stream Indicator */}
          <MotionReveal delay={0.1}>
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-black/40 border border-white/20 backdrop-blur-md text-xs font-heading font-semibold tracking-wider text-white uppercase mb-6 shadow-xl">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#8EDB68] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#8EDB68]" />
              </span>
              <span>{t('hero.eyebrow', { ns: 'home', defaultValue: 'Global Procurement Intelligence' })}</span>
            </div>
          </MotionReveal>

          {/* Kinetic Headline with Dynamic Rotating Phrase (Stop blinking, smooth ticker) */}
          <MotionReveal delay={0.2} direction="up">
            <h1 className="font-heading text-3xl sm:text-5xl lg:text-[56px] font-semibold text-white tracking-tight leading-[1.1]">
              {i18n.language === 'fr' ? 'Le bon fournisseur.' : i18n.language === 'ar' ? 'المورد المناسب.' : 'The right supplier.'}<br />
              <span className="inline-block overflow-hidden align-top min-h-[1.2em]">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={phraseIndex}
                    initial={{ y: 26, opacity: 0, filter: 'blur(3px)' }}
                    animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
                    exit={{ y: -26, opacity: 0, filter: 'blur(3px)' }}
                    transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                    className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#8EDB68] via-[#c6f7b0] to-[#8EDB68]"
                  >
                    {rotatingPhrases[phraseIndex % rotatingPhrases.length]}
                  </motion.span>
                </AnimatePresence>
              </span>
            </h1>
          </MotionReveal>

        </div>

        {/* Bottom Row: Standalone 3D Magnetic Logo + Supporting Text & CTA */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end justify-between pt-6 sm:pt-10">

          {/* Left Column: Standalone 3D Magnetic Logo */}
          <div className="md:col-span-6 lg:col-span-5">
            <MotionReveal delay={0.3} direction="up">
              <div
                className="perspective-[1000px] flex items-center justify-start cursor-pointer select-none"
                onClick={() => onOpenContactModal('Hero Logo Direct')}
              >
                {/* Standalone Interactive 3D Gyro Logo with Cursor Tilt (GPU-interpolated motion springs) */}
                <motion.div
                  style={{
                    x: logoX,
                    y: logoY,
                    transformStyle: 'preserve-3d',
                  }}
                  className="relative w-56 sm:w-72 md:w-80 lg:w-[340px] aspect-[200/175] flex items-center justify-center group"
                >
                  {/* SVG Logo with Multi-Plane Dynamic Specular Shine & Spot-based 3D Tilt */}
                  <div className="relative z-10 w-full h-full flex items-center justify-center">
                    <AltexisRibbonLogo size="100%" />
                  </div>
                </motion.div>
              </div>
            </MotionReveal>
          </div>

          {/* Right Column: Supporting Description & CTA */}
          <div className="md:col-span-6 lg:col-span-6 flex flex-col items-start md:items-end text-start md:text-end">
            <MotionReveal delay={0.35} direction="up">
              <p className="text-base sm:text-lg text-white/85 font-secondary font-normal leading-relaxed max-w-lg mb-8">
                {t('hero.supportingText', { ns: 'home' })}
              </p>

              <button
                onClick={() => onOpenContactModal('Hero Radar Intake')}
                className="farmio-btn-accent px-8 py-4 text-xs font-heading font-bold uppercase tracking-wider cursor-pointer inline-flex items-center gap-3 shadow-xl active:scale-[0.98] group"
              >
                <span>{i18n.language === 'fr' ? 'COMMENCER' : i18n.language === 'ar' ? 'ابدأ الآن' : 'GET STARTED'}</span>
                <ArrowRight className={`w-4 h-4 group-hover:translate-x-1 transition-transform ${isRtl ? 'rotate-180' : ''}`} />
              </button>
            </MotionReveal>
          </div>

        </div>

      </div>
    </div>
  );
};
