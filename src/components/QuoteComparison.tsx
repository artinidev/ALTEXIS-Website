import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Scale,
  Sparkles,
  ShieldCheck
} from 'lucide-react';

interface QuoteComparisonProps {
  onOpenRfqModal: (context?: string) => void;
}

export const QuoteComparison: React.FC<QuoteComparisonProps> = ({ onOpenRfqModal }) => {
  const { t } = useTranslation('home');
  const [selectedRow, setSelectedRow] = useState<'A' | 'B' | 'C'>('A');

  return (
    <section id="quote-comparison" className="py-20 md:py-28 bg-[#080d19] relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-start max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-4">
            <Scale className="w-3.5 h-3.5" />
            <span>{t('comparison.tag', { ns: 'home' })}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {t('comparison.headline', { ns: 'home' })}
          </h2>
          <p className="mt-3 text-slate-300 text-base sm:text-lg">
            {t('comparison.subtitle', { ns: 'home' })}
          </p>
        </div>

        {/* Value Equation Banner */}
        <div className="mb-8 p-4 sm:p-5 rounded-xl bg-slate-900/90 border border-slate-700 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
            <Sparkles className="w-4 h-4 text-cyan-300" />
            <span className="font-bold uppercase tracking-wider">Multi-Factor Value Equation:</span>
          </div>
          <div className="font-mono text-xs sm:text-sm font-bold text-white tracking-wide text-center">
            {t('comparison.valueEquation', { ns: 'home' })}
          </div>
        </div>

        {/* Comparison Table / Stacked Cards Container */}
        <div className="rounded-2xl bg-[#0a0f1d] border border-slate-800 overflow-hidden shadow-2xl">

          {/* Desktop Table View */}
          <div className="hidden lg:block overflow-x-auto">
            <table className="w-full text-start border-collapse text-xs font-mono">
              <thead>
                <tr className="border-b border-slate-800 bg-slate-950/80 text-slate-400 uppercase tracking-wider text-[11px]">
                  <th className="py-4 px-6 text-start">{t('comparison.colSupplier', { ns: 'home' })}</th>
                  <th className="py-4 px-6 text-start">{t('comparison.colPrice', { ns: 'home' })}</th>
                  <th className="py-4 px-6 text-start">{t('comparison.colLeadTime', { ns: 'home' })}</th>
                  <th className="py-4 px-6 text-start">{t('comparison.colTerms', { ns: 'home' })}</th>
                  <th className="py-4 px-6 text-start">{t('comparison.colVerification', { ns: 'home' })}</th>
                  <th className="py-4 px-6 text-start">{t('comparison.colAction', { ns: 'home' })}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60">

                {/* Row Supplier A - Recommended */}
                <tr
                  onClick={() => setSelectedRow('A')}
                  className={`transition-colors cursor-pointer ${selectedRow === 'A'
                      ? 'bg-cyan-950/30 ring-1 ring-inset ring-cyan-500/40'
                      : 'hover:bg-slate-900/50'
                    }`}
                >
                  <td className="py-5 px-6">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-white text-sm">
                        {t('comparison.supplierA.name', { ns: 'home' })}
                      </span>
                      <span className="px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 text-[10px] font-bold uppercase">
                        {t('comparison.supplierA.badge', { ns: 'home' })}
                      </span>
                    </div>
                    <div className="text-[11px] text-slate-400 mt-1 font-sans">
                      {t('comparison.supplierA.highlight', { ns: 'home' })}
                    </div>
                  </td>
                  <td className="py-5 px-6 font-bold text-cyan-300 text-sm">
                    {t('comparison.supplierA.price', { ns: 'home' })}
                  </td>
                  <td className="py-5 px-6 text-slate-200 font-semibold">
                    {t('comparison.supplierA.leadTime', { ns: 'home' })}
                  </td>
                  <td className="py-5 px-6 text-slate-300">
                    {t('comparison.supplierA.terms', { ns: 'home' })}
                  </td>
                  <td className="py-5 px-6 text-emerald-400 font-bold">
                    {t('comparison.supplierA.verification', { ns: 'home' })}
                  </td>
                  <td className="py-5 px-6">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onOpenRfqModal('Supplier A Recommendation');
                      }}
                      className="px-3.5 py-1.5 rounded-lg bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold uppercase tracking-wider text-[10px] transition-colors cursor-pointer"
                    >
                      Select Option
                    </button>
                  </td>
                </tr>

                {/* Row Supplier B - Alternative */}
                <tr
                  onClick={() => setSelectedRow('B')}
                  className={`transition-colors cursor-pointer ${selectedRow === 'B'
                      ? 'bg-slate-900 ring-1 ring-inset ring-slate-700'
                      : 'hover:bg-slate-900/50'
                    }`}
                >
                  <td className="py-5 px-6">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-white text-sm">
                        {t('comparison.supplierB.name', { ns: 'home' })}
                      </span>
                      <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-400 text-[10px]">
                        {t('comparison.supplierB.badge', { ns: 'home' })}
                      </span>
                    </div>
                    <div className="text-[11px] text-slate-400 mt-1 font-sans">
                      {t('comparison.supplierB.highlight', { ns: 'home' })}
                    </div>
                  </td>
                  <td className="py-5 px-6 font-bold text-slate-200 text-sm">
                    {t('comparison.supplierB.price', { ns: 'home' })}
                  </td>
                  <td className="py-5 px-6 text-slate-300">
                    {t('comparison.supplierB.leadTime', { ns: 'home' })}
                  </td>
                  <td className="py-5 px-6 text-slate-300">
                    {t('comparison.supplierB.terms', { ns: 'home' })}
                  </td>
                  <td className="py-5 px-6 text-emerald-400">
                    {t('comparison.supplierB.verification', { ns: 'home' })}
                  </td>
                  <td className="py-5 px-6">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onOpenRfqModal('Supplier B Alternative');
                      }}
                      className="px-3.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-[10px] transition-colors cursor-pointer"
                    >
                      Evaluate
                    </button>
                  </td>
                </tr>

                {/* Row Supplier C - Review Required */}
                <tr
                  onClick={() => setSelectedRow('C')}
                  className={`transition-colors cursor-pointer ${selectedRow === 'C'
                      ? 'bg-amber-950/20 ring-1 ring-inset ring-amber-500/40'
                      : 'hover:bg-slate-900/50'
                    }`}
                >
                  <td className="py-5 px-6">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-white text-sm">
                        {t('comparison.supplierC.name', { ns: 'home' })}
                      </span>
                      <span className="px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/40 text-[10px] font-bold uppercase">
                        {t('comparison.supplierC.badge', { ns: 'home' })}
                      </span>
                    </div>
                    <div className="text-[11px] text-amber-400/90 mt-1 font-sans">
                      {t('comparison.supplierC.highlight', { ns: 'home' })}
                    </div>
                  </td>
                  <td className="py-5 px-6 font-bold text-slate-400 text-sm">
                    {t('comparison.supplierC.price', { ns: 'home' })}
                  </td>
                  <td className="py-5 px-6 text-amber-400 font-bold">
                    {t('comparison.supplierC.leadTime', { ns: 'home' })}
                  </td>
                  <td className="py-5 px-6 text-amber-400/90">
                    {t('comparison.supplierC.terms', { ns: 'home' })}
                  </td>
                  <td className="py-5 px-6 text-amber-400 font-bold">
                    {t('comparison.supplierC.verification', { ns: 'home' })}
                  </td>
                  <td className="py-5 px-6">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onOpenRfqModal('Supplier C Audit Review');
                      }}
                      className="px-3.5 py-1.5 rounded-lg bg-amber-950/60 border border-amber-800/60 text-amber-300 text-[10px] transition-colors cursor-pointer"
                    >
                      Audit Required
                    </button>
                  </td>
                </tr>

              </tbody>
            </table>
          </div>

          {/* Mobile Stacked Cards */}
          <div className="lg:hidden p-4 space-y-4 font-mono">
            {/* Supplier A Mobile */}
            <div className="p-4 rounded-xl bg-cyan-950/30 border border-cyan-500/40">
              <div className="flex items-center justify-between mb-2">
                <span className="font-bold text-white text-sm">{t('comparison.supplierA.name', { ns: 'home' })}</span>
                <span className="px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 text-[10px] font-bold">Recommended</span>
              </div>
              <div className="grid grid-cols-2 gap-2 text-xs my-3">
                <div>Price: <span className="text-cyan-300 font-bold">{t('comparison.supplierA.price', { ns: 'home' })}</span></div>
                <div>Lead Time: <span className="text-white">{t('comparison.supplierA.leadTime', { ns: 'home' })}</span></div>
                <div>Terms: <span className="text-slate-300">{t('comparison.supplierA.terms', { ns: 'home' })}</span></div>
                <div>Status: <span className="text-emerald-400 font-bold">Verified ✓</span></div>
              </div>
              <p className="text-[11px] text-slate-300 font-sans">{t('comparison.supplierA.highlight', { ns: 'home' })}</p>
            </div>

            {/* Supplier B Mobile */}
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
              <div className="flex items-center justify-between mb-2">
                <span className="font-bold text-white text-sm">{t('comparison.supplierB.name', { ns: 'home' })}</span>
                <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-400 text-[10px]">Alternative</span>
              </div>
              <div className="grid grid-cols-2 gap-2 text-xs my-3">
                <div>Price: <span className="text-white font-bold">{t('comparison.supplierB.price', { ns: 'home' })}</span></div>
                <div>Lead Time: <span className="text-white">{t('comparison.supplierB.leadTime', { ns: 'home' })}</span></div>
                <div>Terms: <span className="text-slate-300">{t('comparison.supplierB.terms', { ns: 'home' })}</span></div>
                <div>Status: <span className="text-emerald-400 font-bold">Verified ✓</span></div>
              </div>
              <p className="text-[11px] text-slate-400 font-sans">{t('comparison.supplierB.highlight', { ns: 'home' })}</p>
            </div>

            {/* Supplier C Mobile */}
            <div className="p-4 rounded-xl bg-amber-950/20 border border-amber-900/40">
              <div className="flex items-center justify-between mb-2">
                <span className="font-bold text-white text-sm">{t('comparison.supplierC.name', { ns: 'home' })}</span>
                <span className="px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 text-[10px] font-bold">Risk Flag</span>
              </div>
              <div className="grid grid-cols-2 gap-2 text-xs my-3">
                <div>Price: <span className="text-slate-300 font-bold">{t('comparison.supplierC.price', { ns: 'home' })}</span></div>
                <div>Lead Time: <span className="text-amber-400 font-bold">{t('comparison.supplierC.leadTime', { ns: 'home' })}</span></div>
                <div>Terms: <span className="text-amber-400">{t('comparison.supplierC.terms', { ns: 'home' })}</span></div>
                <div>Status: <span className="text-amber-400 font-bold">Review Required</span></div>
              </div>
              <p className="text-[11px] text-amber-300/80 font-sans">{t('comparison.supplierC.highlight', { ns: 'home' })}</p>
            </div>
          </div>

          {/* Bottom Desk Recommendation Footnote */}
          <div className="p-4 bg-slate-950 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono">
            <span className="text-emerald-400 flex items-center gap-1.5 font-bold">
              <ShieldCheck className="w-4 h-4" />
              {t('comparison.recommendation', { ns: 'home' })}
            </span>
            <span className="text-slate-400">
              Normalized Incoterms: CFR Lagos Port • 100% Traceable
            </span>
          </div>

        </div>

      </div>
    </section>
  );
};
