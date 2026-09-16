import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Layers, Flame, Hammer, Cog } from 'lucide-react';
import { MotionReveal } from '../MotionReveal';
import { getOptimizedImageUrl } from '../../utils/imageOptimizer';

interface HeroVariantProps {
  onOpenContactModal: (topic?: string) => void;
  isRtl?: boolean;
}

interface SectorConfig {
  id: string;
  label: string;
  icon: React.ElementType;
  headline: string;
  image: string;
  stat1: string;
  stat1Label: string;
  stat2: string;
  stat2Label: string;
  stat3: string;
  stat3Label: string;
}

const SECTORS: SectorConfig[] = [
  {
    id: 'energy',
    label: 'Energy & Valves',
    icon: Flame,
    headline: 'High-pressure valves & API 6D pipeline fittings.',
    image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec',
    stat1: '420+',
    stat1Label: 'Audited Mills',
    stat2: '-19.2%',
    stat2Label: 'Direct Yield',
    stat3: '48h',
    stat3Label: 'RFQ Normalization',
  },
  {
    id: 'forging',
    label: 'Forged Components',
    icon: Hammer,
    headline: 'Precision metallurgy, flanges & heavy forgings.',
    image: 'https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122',
    stat1: '380+',
    stat1Label: 'Tier-1 Forges',
    stat2: '100%',
    stat2Label: 'Material Traceability',
    stat3: '< 30d',
    stat3Label: 'Expedited Milling',
  },
  {
    id: 'machinery',
    label: 'Heavy Machinery',
    icon: Cog,
    headline: 'Turbines, pump skids & engineered assemblies.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158',
    stat1: '290+',
    stat1Label: 'OEM Fabricators',
    stat2: 'Zero',
    stat2Label: 'Broker Markups',
    stat3: 'ISO/API',
    stat3Label: 'Strict Adherence',
  },
];

export const HeroCommandHUD: React.FC<HeroVariantProps> = ({ onOpenContactModal, isRtl }) => {
  const [activeSector, setActiveSector] = useState<SectorConfig>(SECTORS[0]);

  return (
    <div className="relative min-h-[94vh] sm:min-h-screen w-full flex flex-col justify-between pt-32 sm:pt-36 pb-12 sm:pb-16 px-6 sm:px-10 lg:px-16 overflow-hidden select-none">
      
      {/* Background Photography with Crossfade on Sector Switch */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeSector.id}
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 z-0 pointer-events-none"
        >
          <img
            src={getOptimizedImageUrl(activeSector.image, { width: 1600, quality: 75, format: 'webp' })}
            alt={activeSector.label}
            loading="eager"
            decoding="async"
            className="w-full h-full object-cover object-center brightness-[0.48] contrast-[1.18] saturate-[1.2] gpu-layer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#123C32]/98 via-[#123C32]/50 to-black/65" />
          <div className="absolute inset-0 bg-[#123C32]/25 mix-blend-multiply" />
        </motion.div>
      </AnimatePresence>

      {/* Ultra-thin Scanning Radar Beam Animation */}
      <motion.div
        animate={{ y: ['-100%', '200%'] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
        className="absolute inset-x-0 h-28 bg-gradient-to-b from-transparent via-[#8EDB68]/10 to-transparent pointer-events-none z-1 opacity-70"
      />

      {/* Main Content Area */}
      <div className="relative z-10 max-w-7xl mx-auto w-full flex-1 flex flex-col justify-between gap-10">
        
        {/* Top/Middle Left: Eyebrow + Sector Switcher + Headline */}
        <div className="max-w-3xl text-start mt-4 sm:mt-8">
          
          {/* Interactive Sector Switcher HUD Tabs */}
          <MotionReveal delay={0.1}>
            <div className="inline-flex flex-wrap items-center gap-1.5 p-1.5 rounded-full bg-black/50 backdrop-blur-xl border border-white/20 mb-6 shadow-2xl">
              {SECTORS.map((sector) => {
                const Icon = sector.icon;
                const isSelected = activeSector.id === sector.id;
                return (
                  <button
                    key={sector.id}
                    onClick={() => setActiveSector(sector)}
                    className={`flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full text-xs font-heading font-semibold transition-all duration-200 cursor-pointer ${
                      isSelected
                        ? 'bg-[#8EDB68] text-[#123C32] shadow-md scale-102'
                        : 'text-white/80 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    <span>{sector.label}</span>
                  </button>
                );
              })}
            </div>
          </MotionReveal>

          {/* Dynamic Headline synced with active Sector */}
          <MotionReveal delay={0.2} direction="up">
            <h1 className="font-heading text-3xl sm:text-5xl lg:text-[56px] font-semibold text-white tracking-tight leading-[1.1]">
              Direct mill procurement.<br />
              <span className="text-[#8EDB68] font-semibold">
                Complete fiduciary control.
              </span>
            </h1>
          </MotionReveal>

        </div>

        {/* Bottom Row: Real-Time Metric Telemetry HUD + Supporting Text & CTA */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end justify-between pt-6 sm:pt-10">
          
          {/* Left Column: Live Sector Benchmark Stats Card */}
          <div className="md:col-span-7 lg:col-span-6">
            <MotionReveal delay={0.3} direction="up">
              <div className="rounded-[2rem] bg-black/40 backdrop-blur-xl border border-white/20 p-6 sm:p-7 shadow-2xl text-start">
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/15">
                  <span className="text-xs font-heading font-semibold text-white flex items-center gap-2">
                    <Layers className="w-4 h-4 text-[#8EDB68]" />
                    <span>{activeSector.label} Intelligence Stream</span>
                  </span>

                  <span className="text-[11px] font-mono text-[#8EDB68] flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#8EDB68] animate-ping" />
                    LIVE FEED
                  </span>
                </div>

                {/* 3 Metric Counters */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                    <span className="text-xl sm:text-2xl font-heading font-bold text-[#8EDB68] block">
                      {activeSector.stat1}
                    </span>
                    <span className="text-[11px] font-secondary text-white/70 block mt-0.5">
                      {activeSector.stat1Label}
                    </span>
                  </div>

                  <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                    <span className="text-xl sm:text-2xl font-heading font-bold text-white block">
                      {activeSector.stat2}
                    </span>
                    <span className="text-[11px] font-secondary text-white/70 block mt-0.5">
                      {activeSector.stat2Label}
                    </span>
                  </div>

                  <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                    <span className="text-xl sm:text-2xl font-heading font-bold text-[#8EDB68] block">
                      {activeSector.stat3}
                    </span>
                    <span className="text-[11px] font-secondary text-white/70 block mt-0.5">
                      {activeSector.stat3Label}
                    </span>
                  </div>
                </div>
              </div>
            </MotionReveal>
          </div>

          {/* Right Column: Supporting Description & CTA */}
          <div className="md:col-span-5 lg:col-span-5 flex flex-col items-start md:items-end text-start md:text-end">
            <MotionReveal delay={0.35} direction="up">
              <p className="text-base sm:text-lg text-white/85 font-secondary font-normal leading-relaxed max-w-md mb-8">
                {activeSector.headline} Direct mill sourcing with normalized commercial comparisons.
              </p>

              <button
                onClick={() => onOpenContactModal(`HUD Intake: ${activeSector.label}`)}
                className="farmio-btn-accent px-8 py-4 text-xs font-heading font-bold uppercase tracking-wider cursor-pointer inline-flex items-center gap-3 shadow-xl active:scale-[0.98] group"
              >
                <span>SOURCE {activeSector.label.toUpperCase()}</span>
                <ArrowRight className={`w-4 h-4 group-hover:translate-x-1 transition-transform ${isRtl ? 'rotate-180' : ''}`} />
              </button>
            </MotionReveal>
          </div>

        </div>

      </div>
    </div>
  );
};
