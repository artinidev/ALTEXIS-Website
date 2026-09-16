import React from 'react';
import { useTranslation } from 'react-i18next';
import { ShieldAlert, Globe, Compass, Clock, Eye, Layers } from 'lucide-react';

export const WhyUsSection: React.FC = () => {
  const { t } = useTranslation('home');

  const icons = [ShieldAlert, Globe, Compass, Clock, Eye];

  const benefits = [
    {
      title: t('whyUs.benefits.0.title', { ns: 'home' }),
      desc: t('whyUs.benefits.0.desc', { ns: 'home' }),
      accent: 'text-emerald-400',
      border: 'hover:border-emerald-500/40',
      metric: '0% Fraud Risk',
    },
    {
      title: t('whyUs.benefits.1.title', { ns: 'home' }),
      desc: t('whyUs.benefits.1.desc', { ns: 'home' }),
      accent: 'text-cyan-400',
      border: 'hover:border-cyan-500/40',
      metric: '48+ Countries',
    },
    {
      title: t('whyUs.benefits.2.title', { ns: 'home' }),
      desc: t('whyUs.benefits.2.desc', { ns: 'home' }),
      accent: 'text-amber-400',
      border: 'hover:border-amber-500/40',
      metric: 'Multi-Factor Data',
    },
    {
      title: t('whyUs.benefits.3.title', { ns: 'home' }),
      desc: t('whyUs.benefits.3.desc', { ns: 'home' }),
      accent: 'text-blue-400',
      border: 'hover:border-blue-500/40',
      metric: '75% Faster RFQ',
    },
    {
      title: t('whyUs.benefits.4.title', { ns: 'home' }),
      desc: t('whyUs.benefits.4.desc', { ns: 'home' }),
      accent: 'text-indigo-400',
      border: 'hover:border-indigo-500/40',
      metric: '100% Traceability',
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-[#060a12] relative industrial-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-start max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-4">
            <Layers className="w-3.5 h-3.5" />
            <span>{t('whyUs.tag', { ns: 'home' })}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {t('whyUs.headline', { ns: 'home' })}
          </h2>
          <p className="mt-3 text-slate-300 text-base sm:text-lg">
            {t('whyUs.subtitle', { ns: 'home' })}
          </p>
        </div>

        {/* 5 Strategic Benefit Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((item, idx) => {
            const Icon = icons[idx];
            return (
              <div
                key={idx}
                className={`p-6 sm:p-7 rounded-2xl bg-gradient-to-b from-slate-900/90 to-[#0a101d] border border-slate-800 ${item.border} transition-all duration-300 group flex flex-col justify-between`}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className={`w-11 h-11 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center ${item.accent} group-hover:scale-105 transition-transform`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-[10px] font-bold text-slate-400 bg-slate-950/80 px-2 py-0.5 rounded border border-slate-800">
                      {item.metric}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 font-mono group-hover:text-cyan-300 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-500">
                  <span>Buyer Advantage 0{idx + 1}</span>
                  <span className="text-cyan-400/80">Active Standard</span>
                </div>
              </div>
            );
          })}

          {/* Quick Desk Philosophy Card */}
          <div className="p-6 sm:p-7 rounded-2xl bg-gradient-to-br from-cyan-950/40 via-slate-900 to-slate-950 border border-cyan-500/40 flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono font-bold text-cyan-300 uppercase tracking-wider block mb-2">
                The ALTEXIS Standard
              </span>
              <h3 className="text-xl font-extrabold text-white font-mono mb-3">
                Source Smarter. Procure With Confidence.
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Zero speculation, verified manufacturer integrity, and complete operational transparency at every commercial milestone.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-cyan-500/20 text-xs font-mono text-cyan-400 font-bold">
              ✓ 100% Fiduciary Alignment With The Buyer
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
