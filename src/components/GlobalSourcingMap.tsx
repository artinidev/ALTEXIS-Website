import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  MapPin,
  ArrowRight,
  Radio,
  Navigation
} from 'lucide-react';

interface GlobalSourcingMapProps {
  onOpenRfqModal: (region?: string) => void;
}

export const GlobalSourcingMap: React.FC<GlobalSourcingMapProps> = ({ onOpenRfqModal }) => {
  const { t, i18n } = useTranslation('home');
  const isRtl = i18n.language === 'ar';
  const [activeHubIndex, setActiveHubIndex] = useState(0);

  const hubs = [
    {
      id: 'na',
      name: t('globalSourcing.hubs.0.name', { ns: 'home' }),
      location: t('globalSourcing.hubs.0.location', { ns: 'home' }),
      focus: t('globalSourcing.hubs.0.focus', { ns: 'home' }),
      x: '25%',
      y: '38%',
      leadTime: '8-14 Days',
      compliance: 'ASME / API / ANSI',
    },
    {
      id: 'eu',
      name: t('globalSourcing.hubs.1.name', { ns: 'home' }),
      location: t('globalSourcing.hubs.1.location', { ns: 'home' }),
      focus: t('globalSourcing.hubs.1.focus', { ns: 'home' }),
      x: '50%',
      y: '30%',
      leadTime: '7-12 Days',
      compliance: 'EN / DIN / CE / ISO',
    },
    {
      id: 'me',
      name: t('globalSourcing.hubs.2.name', { ns: 'home' }),
      location: t('globalSourcing.hubs.2.location', { ns: 'home' }),
      focus: t('globalSourcing.hubs.2.focus', { ns: 'home' }),
      x: '62%',
      y: '45%',
      leadTime: '5-10 Days',
      compliance: 'API / NACE / Aramco/ADNOC Stds',
    },
    {
      id: 'ap',
      name: t('globalSourcing.hubs.3.name', { ns: 'home' }),
      location: t('globalSourcing.hubs.3.location', { ns: 'home' }),
      focus: t('globalSourcing.hubs.3.focus', { ns: 'home' }),
      x: '80%',
      y: '48%',
      leadTime: '15-28 Days',
      compliance: 'JIS / GB / ISO 9001',
    },
    {
      id: 'af',
      name: t('globalSourcing.hubs.4.name', { ns: 'home' }),
      location: t('globalSourcing.hubs.4.location', { ns: 'home' }),
      focus: t('globalSourcing.hubs.4.focus', { ns: 'home' }),
      x: '52%',
      y: '65%',
      leadTime: 'Local & Regional Dispatch',
      compliance: 'SONCAP / SABS / Local Content',
    },
  ];

  const currentHub = hubs[activeHubIndex];

  return (
    <section id="global-network" className="py-20 md:py-28 bg-[#060a12] relative overflow-hidden industrial-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-start max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-4">
            <Radio className="w-3.5 h-3.5 animate-pulse text-cyan-400" />
            <span>{t('globalSourcing.tag', { ns: 'home' })}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-white tracking-tight leading-tight">
            {t('globalSourcing.headline', { ns: 'home' })}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            {t('globalSourcing.body', { ns: 'home' })}
          </p>
        </div>

        {/* Large Statement Callout */}
        <div className="mb-10 p-6 rounded-2xl bg-gradient-to-r from-cyan-950/40 via-slate-900 to-slate-950 border border-cyan-500/30 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest block mb-1">
              ALTEXIS Sourcing Network
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-mono">
              {t('globalSourcing.statement', { ns: 'home' })}
            </h3>
          </div>
          <button
            onClick={() => onOpenRfqModal('Global Sourcing Inquiry')}
            className="px-6 py-3 rounded-lg bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold text-xs uppercase tracking-wider font-mono shadow-md transition-colors cursor-pointer shrink-0"
          >
            {t('globalSourcing.cta', { ns: 'home' })}
          </button>
        </div>

        {/* Interactive Sourcing Map & Hub Drawer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

          {/* Left / Main: World Map Graphic with Active Sourcing Corridors */}
          <div className="lg:col-span-8 rounded-2xl bg-[#090f1d] border border-slate-800 p-6 sm:p-8 relative overflow-hidden shadow-2xl">

            <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-800 text-xs font-mono text-slate-400">
              <span className="flex items-center gap-2 text-slate-200 font-bold">
                <Navigation className="w-3.5 h-3.5 text-cyan-400" />
                GLOBAL TRADING CORRIDORS & AUDITED NODES
              </span>
              <span className="text-emerald-400">48+ Active Routes</span>
            </div>

            {/* SVG Industrial Map Canvas */}
            <div className="relative w-full h-[320px] sm:h-[400px] bg-slate-950/80 rounded-xl border border-slate-900 flex items-center justify-center p-4">

              {/* Background Map Shapes & Grid */}
              <svg className="w-full h-full text-slate-800/60" viewBox="0 0 1000 500" fill="currentColor">
                {/* Simplified Continents Silhouette */}
                <path d="M150,120 Q180,80 260,110 T320,180 T260,250 T180,240 Z" fill="rgba(30, 41, 59, 0.4)" />
                <path d="M220,280 Q260,260 290,320 T260,450 T200,380 Z" fill="rgba(30, 41, 59, 0.4)" />
                <path d="M460,100 Q540,80 580,140 T520,220 T440,160 Z" fill="rgba(30, 41, 59, 0.4)" />
                <path d="M460,240 Q520,220 560,280 T540,420 T460,380 Z" fill="rgba(30, 41, 59, 0.4)" />
                <path d="M600,100 Q750,70 850,140 T800,280 T680,260 Z" fill="rgba(30, 41, 59, 0.4)" />
                <path d="M760,340 Q840,320 860,400 T780,440 Z" fill="rgba(30, 41, 59, 0.4)" />

                {/* Animated Connection Curved Arcs */}
                <path
                  d="M250,180 Q370,120 500,150"
                  fill="none"
                  stroke="#00f0ff"
                  strokeWidth="2"
                  strokeDasharray="4 4"
                  className="opacity-70 animate-pulse"
                />
                <path
                  d="M500,150 Q560,200 620,220"
                  fill="none"
                  stroke="#00f0ff"
                  strokeWidth="2"
                  strokeDasharray="4 4"
                  className="opacity-70 animate-pulse"
                />
                <path
                  d="M620,220 Q700,210 800,240"
                  fill="none"
                  stroke="#00f0ff"
                  strokeWidth="2"
                  strokeDasharray="4 4"
                  className="opacity-70 animate-pulse"
                />
                <path
                  d="M500,150 Q480,240 520,320"
                  fill="none"
                  stroke="#10b981"
                  strokeWidth="2"
                  strokeDasharray="4 4"
                  className="opacity-70"
                />
                <path
                  d="M620,220 Q560,280 520,320"
                  fill="none"
                  stroke="#10b981"
                  strokeWidth="2"
                  strokeDasharray="4 4"
                  className="opacity-70"
                />
              </svg>

              {/* Interactive Node Markers */}
              {hubs.map((hub, idx) => {
                const isSelected = activeHubIndex === idx;
                return (
                  <button
                    key={hub.id}
                    onClick={() => setActiveHubIndex(idx)}
                    style={{ left: hub.x, top: hub.y }}
                    className="absolute -translate-x-1/2 -translate-y-1/2 group cursor-pointer focus:outline-hidden"
                  >
                    <div className="relative flex items-center justify-center">
                      <span className={`absolute w-8 h-8 rounded-full transition-all duration-300 ${isSelected
                          ? 'bg-cyan-400/30 animate-ping'
                          : 'bg-slate-700/20 group-hover:bg-cyan-400/20'
                        }`} />
                      <div className={`w-4 h-4 rounded-full border-2 transition-all flex items-center justify-center ${isSelected
                          ? 'bg-cyan-400 border-white shadow-lg shadow-cyan-400/50 scale-125'
                          : 'bg-slate-900 border-cyan-400 group-hover:bg-cyan-400'
                        }`}>
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-950" />
                      </div>
                    </div>
                    <span className={`absolute top-5 left-1/2 -translate-x-1/2 font-mono text-[10px] font-bold px-2 py-0.5 rounded whitespace-nowrap shadow-md transition-colors ${isSelected
                        ? 'bg-cyan-950 text-cyan-300 border border-cyan-500/60'
                        : 'bg-slate-900/90 text-slate-300 border border-slate-800 group-hover:text-white'
                      }`}>
                      {hub.location.split('&')[0].trim()}
                    </span>
                  </button>
                );
              })}

            </div>

            {/* Hub Selector Pills */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
              {hubs.map((h, i) => (
                <button
                  key={h.id}
                  onClick={() => setActiveHubIndex(i)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all cursor-pointer ${activeHubIndex === i
                      ? 'bg-cyan-500/20 text-cyan-300 font-bold border border-cyan-500/40'
                      : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                    }`}
                >
                  {h.name}
                </button>
              ))}
            </div>

          </div>

          {/* Right Column: Selected Hub Intelligence Dossier */}
          <div className="lg:col-span-4 rounded-2xl bg-gradient-to-b from-[#0e1628] to-[#080d19] border border-cyan-500/30 p-6 sm:p-7 shadow-2xl">
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800">
              <span className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider">
                Corridor Profile
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                Verified Desk Hub
              </span>
            </div>

            <h3 className="text-2xl font-extrabold text-white font-mono mb-1">
              {currentHub.name}
            </h3>

            <div className="flex items-center gap-2 text-xs font-mono text-cyan-300 mb-4">
              <MapPin className="w-3.5 h-3.5" />
              <span>{currentHub.location}</span>
            </div>

            <div className="space-y-4 text-xs font-mono">
              <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800">
                <span className="text-slate-500 block text-[10px] uppercase mb-1">Sourcing Specialization:</span>
                <span className="text-slate-200 font-medium font-sans leading-relaxed">{currentHub.focus}</span>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800">
                <span className="text-slate-500 block text-[10px] uppercase mb-1">Compliance & Mill Standards:</span>
                <span className="text-emerald-400 font-bold">{currentHub.compliance}</span>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800">
                <span className="text-slate-500 block text-[10px] uppercase mb-1">Typical Dispatch Lead Time:</span>
                <span className="text-white font-bold">{currentHub.leadTime}</span>
              </div>
            </div>

            <button
              onClick={() => onOpenRfqModal(`Corridor: ${currentHub.name}`)}
              className="mt-6 w-full py-3 px-4 rounded-lg bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold text-xs uppercase tracking-wider font-mono shadow-md transition-colors cursor-pointer flex items-center justify-center gap-2"
            >
              <span>Source From {currentHub.name}</span>
              <ArrowRight className={`w-3.5 h-3.5 ${isRtl ? 'rotate-180' : ''}`} />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
