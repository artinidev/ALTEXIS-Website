import React from 'react';
import { useTranslation } from 'react-i18next';
import { Globe2, ShieldCheck, Scale, Headphones } from 'lucide-react';

export const TrustStrip: React.FC = () => {
  const { t } = useTranslation('home');

  const items = [
    {
      id: 'global',
      icon: Globe2,
      title: t('trust.items.0.title', { ns: 'home' }),
      desc: t('trust.items.0.desc', { ns: 'home' }),
      accent: 'text-cyan-400',
      border: 'hover:border-cyan-500/40',
    },
    {
      id: 'verify',
      icon: ShieldCheck,
      title: t('trust.items.1.title', { ns: 'home' }),
      desc: t('trust.items.1.desc', { ns: 'home' }),
      accent: 'text-emerald-400',
      border: 'hover:border-emerald-500/40',
    },
    {
      id: 'compare',
      icon: Scale,
      title: t('trust.items.2.title', { ns: 'home' }),
      desc: t('trust.items.2.desc', { ns: 'home' }),
      accent: 'text-amber-400',
      border: 'hover:border-amber-500/40',
    },
    {
      id: 'support',
      icon: Headphones,
      title: t('trust.items.3.title', { ns: 'home' }),
      desc: t('trust.items.3.desc', { ns: 'home' }),
      accent: 'text-blue-400',
      border: 'hover:border-blue-500/40',
    },
  ];

  return (
    <section className="py-14 border-y border-slate-800/80 bg-[#080d19]/80 backdrop-blur-sm relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="mb-8 text-center sm:text-start flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-mono font-bold tracking-widest text-cyan-400 uppercase">
              Operational Assurance
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
              {t('trust.headline', { ns: 'home' })}
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-400 max-w-md">
            {t('trust.subtitle', { ns: 'home' })}
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className={`p-5 rounded-xl bg-slate-900/60 border border-slate-800/80 ${item.border} transition-all duration-200 group flex flex-col justify-between`}
              >
                <div>
                  <div className={`w-10 h-10 rounded-lg bg-slate-950/80 border border-slate-800 flex items-center justify-center mb-4 ${item.accent} group-hover:scale-105 transition-transform`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-800/50 flex items-center justify-between text-[11px] font-mono text-slate-500">
                  <span>Standard Protocol</span>
                  <span className="text-emerald-400/80">Active ✓</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
