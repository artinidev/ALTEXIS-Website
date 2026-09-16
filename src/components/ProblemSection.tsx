import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  AlertOctagon,
  CheckCircle,
  XCircle,
  TrendingDown,
  TrendingUp,
  Sparkles
} from 'lucide-react';

export const ProblemSection: React.FC = () => {
  const { t } = useTranslation('home');
  const [activeView, setActiveView] = useState<'both' | 'without' | 'with'>('both');

  const withoutSteps = [
    { num: '01', text: t('problem.withoutSteps.0.text', { ns: 'home' }), risk: 'Unclear specs' },
    { num: '02', text: t('problem.withoutSteps.1.text', { ns: 'home' }), risk: 'No vetting' },
    { num: '03', text: t('problem.withoutSteps.2.text', { ns: 'home' }), risk: 'Unknown legitimacy' },
    { num: '04', text: t('problem.withoutSteps.3.text', { ns: 'home' }), risk: 'Non-comparable' },
    { num: '05', text: t('problem.withoutSteps.4.text', { ns: 'home' }), risk: 'Subjective guess' },
    { num: '06', text: t('problem.withoutSteps.5.text', { ns: 'home' }), risk: 'Commercial trap' },
    { num: '07', text: t('problem.withoutSteps.6.text', { ns: 'home' }), risk: 'Plant downtime' },
  ];

  const withSteps = [
    { num: '01', text: t('problem.withSteps.0.text', { ns: 'home' }), value: 'Engineering audit' },
    { num: '02', text: t('problem.withSteps.1.text', { ns: 'home' }), value: 'Direct tier-1 mills' },
    { num: '03', text: t('problem.withSteps.2.text', { ns: 'home' }), value: '5-point legal & factory check' },
    { num: '04', text: t('problem.withSteps.3.text', { ns: 'home' }), value: 'Normalized terms' },
    { num: '05', text: t('problem.withSteps.4.text', { ns: 'home' }), value: 'Landed cost & risk rating' },
    { num: '06', text: t('problem.withSteps.5.text', { ns: 'home' }), value: 'PO & factory inspection' },
    { num: '07', text: t('problem.withSteps.6.text', { ns: 'home' }), value: 'Full control & on-time arrival' },
  ];

  return (
    <section className="py-20 md:py-28 bg-[#060a12] relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-red-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="max-w-3xl mb-14 text-start">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/40 border border-red-500/30 text-red-400 text-xs font-mono mb-4">
            <AlertOctagon className="w-3.5 h-3.5" />
            <span>THE PROCUREMENT CHALLENGE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            {t('problem.headline', { ns: 'home' })}
          </h2>

          <p className="mt-3 text-lg font-medium text-cyan-400">
            {t('problem.subtitle', { ns: 'home' })}
          </p>

          <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed">
            {t('problem.body1', { ns: 'home' })}
          </p>

          <div className="mt-4 p-4 rounded-xl bg-slate-900/80 border border-cyan-500/30 flex items-start gap-3">
            <Sparkles className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
            <p className="text-xs sm:text-sm text-slate-200 font-medium">
              {t('problem.body2', { ns: 'home' })}
            </p>
          </div>
        </div>

        {/* View Toggle on Mobile/Tablet */}
        <div className="flex sm:hidden items-center justify-center p-1 bg-slate-900 rounded-lg border border-slate-800 mb-6">
          <button
            onClick={() => setActiveView('both')}
            className={`flex-1 py-1.5 text-xs font-semibold rounded ${activeView === 'both' ? 'bg-slate-800 text-white' : 'text-slate-400'}`}
          >
            Compare Both
          </button>
          <button
            onClick={() => setActiveView('without')}
            className={`flex-1 py-1.5 text-xs font-semibold rounded ${activeView === 'without' ? 'bg-red-950/60 text-red-400' : 'text-slate-400'}`}
          >
            Without
          </button>
          <button
            onClick={() => setActiveView('with')}
            className={`flex-1 py-1.5 text-xs font-semibold rounded ${activeView === 'with' ? 'bg-cyan-950/60 text-cyan-400' : 'text-slate-400'}`}
          >
            With
          </button>
        </div>

        {/* Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* Column 1: WITHOUT ALTEXIS */}
          {(activeView === 'both' || activeView === 'without') && (
            <div className="rounded-2xl bg-gradient-to-b from-red-950/20 via-slate-950/60 to-slate-950 border border-red-900/30 p-6 sm:p-8 relative">
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-red-900/30">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-red-950/80 border border-red-700/50 flex items-center justify-center text-red-400">
                    <XCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-red-200 font-mono tracking-wider">
                      {t('problem.withoutTitle', { ns: 'home' })}
                    </h3>
                    <p className="text-[11px] text-red-400/80">Traditional Fragmented Process</p>
                  </div>
                </div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-red-950/80 text-red-400 border border-red-800/40">
                  High Risk & Delays
                </span>
              </div>

              {/* Steps timeline */}
              <div className="space-y-3">
                {withoutSteps.map((step, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between p-3 rounded-xl bg-slate-900/40 border border-red-900/20 hover:border-red-800/40 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs font-bold text-red-400/60 bg-red-950/40 w-6 h-6 rounded flex items-center justify-center">
                        {step.num}
                      </span>
                      <span className="text-xs sm:text-sm text-slate-300 font-medium">
                        {step.text}
                      </span>
                    </div>
                    <span className="text-[10px] font-mono text-red-400 bg-red-950/60 px-2 py-0.5 rounded border border-red-900/40 shrink-0">
                      {step.risk}
                    </span>
                  </div>
                ))}
              </div>

              {/* Bottom Result summary */}
              <div className="mt-6 pt-4 border-t border-red-900/30 flex items-center justify-between text-xs font-mono text-red-400">
                <span className="flex items-center gap-1">
                  <TrendingDown className="w-4 h-4" />
                  Outcome: Cost Overruns & Blindspots
                </span>
                <span className="text-slate-500 font-normal">Disjointed</span>
              </div>
            </div>
          )}

          {/* Column 2: WITH ALTEXIS */}
          {(activeView === 'both' || activeView === 'with') && (
            <div className="rounded-2xl bg-gradient-to-b from-cyan-950/20 via-slate-950/60 to-slate-950 border border-cyan-500/40 p-6 sm:p-8 relative shadow-xl shadow-cyan-950/30">
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-cyan-800/40">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-cyan-950/80 border border-cyan-500/50 flex items-center justify-center text-cyan-400">
                    <CheckCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-cyan-200 font-mono tracking-wider">
                      {t('problem.withTitle', { ns: 'home' })}
                    </h3>
                    <p className="text-[11px] text-cyan-400/80">Buyer-Side Dedicated Desk</p>
                  </div>
                </div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                  Verified & Controlled
                </span>
              </div>

              {/* Steps timeline */}
              <div className="space-y-3">
                {withSteps.map((step, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between p-3 rounded-xl bg-slate-900/60 border border-cyan-500/20 hover:border-cyan-500/50 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs font-bold text-cyan-300 bg-cyan-950/60 w-6 h-6 rounded flex items-center justify-center border border-cyan-500/30">
                        {step.num}
                      </span>
                      <span className="text-xs sm:text-sm text-slate-100 font-semibold">
                        {step.text}
                      </span>
                    </div>
                    <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30 shrink-0">
                      ✓ {step.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Bottom Result summary */}
              <div className="mt-6 pt-4 border-t border-cyan-800/40 flex items-center justify-between text-xs font-mono text-cyan-400">
                <span className="flex items-center gap-1 text-emerald-400">
                  <TrendingUp className="w-4 h-4" />
                  Outcome: Traceable, Audited & On-Time
                </span>
                <span className="text-cyan-400/80 font-bold">100% Visibility</span>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
