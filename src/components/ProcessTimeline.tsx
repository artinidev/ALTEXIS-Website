import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  FileText,
  ScanSearch,
  Globe2,
  ShieldCheck,
  BarChart3,
  Truck,
  ArrowRight,
  CheckCircle2,
  FileCheck
} from 'lucide-react';

export const ProcessTimeline: React.FC = () => {
  const { t, i18n } = useTranslation('home');
  const isRtl = i18n.language === 'ar';
  const [activeStep, setActiveStep] = useState(0);

  const stepIcons = [FileText, ScanSearch, Globe2, ShieldCheck, BarChart3, Truck];

  const stepsData = [
    {
      num: '01',
      title: t('process.steps.0.title', { ns: 'home' }),
      action: t('process.steps.0.action', { ns: 'home' }),
      desc: t('process.steps.0.desc', { ns: 'home' }),
      deliverables: ['Standardized RFQ Specification Sheet', 'Tolerances & Quality Requisites', 'Target Landed Timeline'],
      mockTitle: 'Step 01 Output: Requirement Dossier',
      mockSnippet: 'Status: Ingested • Part: ANSI 600 Ball Valves • Target Date: 18 Sept • Qty: 24 Units',
    },
    {
      num: '02',
      title: t('process.steps.1.title', { ns: 'home' }),
      action: t('process.steps.1.action', { ns: 'home' }),
      desc: t('process.steps.1.desc', { ns: 'home' }),
      deliverables: ['Engineering Standard Mapping (ASME/API/ISO)', 'Procurement Strategy & Sourcing Corridor Plan', 'Pre-Qualification Criteria'],
      mockTitle: 'Step 02 Output: Procurement Scoping Brief',
      mockSnippet: 'Technical Review Passed • Material Class: Inconel 625 Clad • Target Mills: Europe & US',
    },
    {
      num: '03',
      title: t('process.steps.2.title', { ns: 'home' }),
      action: t('process.steps.2.action', { ns: 'home' }),
      desc: t('process.steps.2.desc', { ns: 'home' }),
      deliverables: ['Vetted International Manufacturer Shortlist', 'Multi-Tier Supplier Outreach', 'Direct Mill Access (No Brokers)'],
      mockTitle: 'Step 03 Output: Global Sourcing Candidate Longlist',
      mockSnippet: 'Identified: 6 Potential Tier-1 Manufacturers • 3 Regions Engaged (DE, NL, US)',
    },
    {
      num: '04',
      title: t('process.steps.3.title', { ns: 'home' }),
      action: t('process.steps.3.action', { ns: 'home' }),
      desc: t('process.steps.3.desc', { ns: 'home' }),
      deliverables: ['5-Point Supplier Audit Report', 'Commercial Register & Legal Authentication', 'Factory Quality & Tooling Verification'],
      mockTitle: 'Step 04 Output: Verified Supplier Risk Card',
      mockSnippet: 'Audited: 4 Approved • 2 Disqualified (Financial Risk Flagged) • Verification Pass: 96%',
    },
    {
      num: '05',
      title: t('process.steps.4.title', { ns: 'home' }),
      action: t('process.steps.4.action', { ns: 'home' }),
      desc: t('process.steps.4.desc', { ns: 'home' }),
      deliverables: ['Multi-Factor Landed Cost Matrix', 'Lead-Time & Expediting Breakdown', 'Payment Terms & Commercial Risk Balancing'],
      mockTitle: 'Step 05 Output: Decision Matrix & Recommendation',
      mockSnippet: 'Bids Normalized • Recommended: Supplier A ($18.4k / 12 Days / 30-70 Safe Terms)',
    },
    {
      num: '06',
      title: t('process.steps.5.title', { ns: 'home' }),
      action: t('process.steps.5.action', { ns: 'home' }),
      desc: t('process.steps.5.desc', { ns: 'home' }),
      deliverables: ['PO Execution & Milestone Tracking', 'Pre-Shipment Inspection & MTR Review', 'Ocean / Air Logistics Coordination'],
      mockTitle: 'Step 06 Output: Delivery Coordination & Tracking Feed',
      mockSnippet: 'PO Dispatched • FAT Witnessed • Air Waybill / Bill of Lading Issued • Live Tracking Active',
    },
  ];

  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-[#080d19] relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-start max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-4">
            <span className="w-2 h-2 rounded-full bg-cyan-400" />
            <span>{t('process.tag', { ns: 'home' })}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {t('process.headline', { ns: 'home' })}
          </h2>
          <p className="mt-3 text-slate-300 text-base sm:text-lg">
            {t('process.subtitle', { ns: 'home' })}
          </p>
        </div>

        {/* 6 Step Interactive Horizontal Stepper */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-8">
          {stepsData.map((step, idx) => {
            const Icon = stepIcons[idx];
            const isActive = activeStep === idx;
            return (
              <button
                key={idx}
                onClick={() => setActiveStep(idx)}
                className={`p-4 rounded-xl border text-start transition-all duration-200 cursor-pointer flex flex-col justify-between ${isActive
                    ? 'bg-slate-900 border-cyan-400 shadow-lg shadow-cyan-500/10 ring-1 ring-cyan-400'
                    : 'bg-slate-950/60 border-slate-800 hover:border-slate-700 hover:bg-slate-900/40'
                  }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className={`font-mono text-xs font-bold px-2 py-0.5 rounded ${isActive ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40' : 'bg-slate-800 text-slate-400'
                      }`}>
                      {step.num}
                    </span>
                    <Icon className={`w-4 h-4 ${isActive ? 'text-cyan-400' : 'text-slate-500'}`} />
                  </div>
                  <h3 className={`text-xs font-bold tracking-wider uppercase font-mono ${isActive ? 'text-white' : 'text-slate-400'
                    }`}>
                    {step.title}
                  </h3>
                </div>
                <div className={`mt-3 text-[11px] font-medium truncate ${isActive ? 'text-cyan-300' : 'text-slate-500'
                  }`}>
                  {step.action}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Step Detailed Inspector Showcase */}
        <div className="rounded-2xl bg-gradient-to-br from-slate-900 to-[#0c1424] border border-cyan-500/30 p-6 sm:p-8 relative shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

            {/* Left detail */}
            <div className="lg:col-span-7 text-start">
              <div className="flex items-center gap-3 mb-4">
                <span className="font-mono text-xl sm:text-2xl font-black text-cyan-400 px-3 py-1 bg-cyan-950/70 border border-cyan-500/40 rounded-lg">
                  {stepsData[activeStep].num}
                </span>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white font-mono">
                    {stepsData[activeStep].title} — {stepsData[activeStep].action}
                  </h3>
                  <span className="text-xs text-emerald-400 font-mono flex items-center gap-1 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Stage Active in Standard SLA
                  </span>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed mt-4">
                {stepsData[activeStep].desc}
              </p>

              {/* Deliverables checklist */}
              <div className="mt-6 pt-4 border-t border-slate-800">
                <h4 className="text-xs font-mono font-bold tracking-wider text-slate-400 uppercase mb-3">
                  Desk Deliverables & Verified Controls:
                </h4>
                <div className="space-y-2">
                  {stepsData[activeStep].deliverables.map((item, i) => (
                    <div key={i} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Step Navigation Controls */}
              <div className="mt-8 flex items-center gap-3">
                <button
                  disabled={activeStep === 0}
                  onClick={() => setActiveStep((prev) => Math.max(0, prev - 1))}
                  className="px-4 py-2 text-xs font-mono font-semibold rounded-lg bg-slate-800 text-slate-300 hover:bg-slate-700 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
                >
                  ← Previous Step
                </button>
                <button
                  disabled={activeStep === stepsData.length - 1}
                  onClick={() => setActiveStep((prev) => Math.min(stepsData.length - 1, prev + 1))}
                  className="px-4 py-2 text-xs font-mono font-semibold rounded-lg bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 hover:bg-cyan-500/30 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer flex items-center gap-1"
                >
                  <span>Next Step</span>
                  <ArrowRight className={`w-3.5 h-3.5 ${isRtl ? 'rotate-180' : ''}`} />
                </button>
              </div>
            </div>

            {/* Right Live Artifact Simulation Card */}
            <div className="lg:col-span-5">
              <div className="rounded-xl bg-slate-950/90 border border-slate-800 p-5 font-mono text-xs shadow-inner">
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800">
                  <div className="flex items-center gap-2 text-slate-300 font-bold">
                    <FileCheck className="w-4 h-4 text-cyan-400" />
                    <span>{stepsData[activeStep].mockTitle}</span>
                  </div>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                    SLA: OK
                  </span>
                </div>

                <div className="bg-slate-900/90 rounded-lg p-3 border border-slate-800 text-slate-300 leading-relaxed text-[11px] mb-3">
                  {stepsData[activeStep].mockSnippet}
                </div>

                <div className="space-y-2 text-[11px]">
                  <div className="flex items-center justify-between text-slate-400">
                    <span>Audit Traceability:</span>
                    <span className="text-cyan-400">100% Documented</span>
                  </div>
                  <div className="flex items-center justify-between text-slate-400">
                    <span>Buyer Visibility:</span>
                    <span className="text-emerald-400">Direct Portal Access</span>
                  </div>
                  <div className="flex items-center justify-between text-slate-400">
                    <span>Quality Checkpoint:</span>
                    <span className="text-white">Passed & Logged</span>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-[10px] text-slate-500">
                  <span>ALTEXIS Protocol v4.2</span>
                  <span>Desk Ref #ALTX-0248</span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
