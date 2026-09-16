import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Layers,
  Search,
  ShieldCheck,
  FileCheck2,
  Scale,
  ShoppingBag,
  Ship,
  CheckCircle,
  Clock,
  Activity,
  Terminal
} from 'lucide-react';

export const ProcurementControlVisual: React.FC = () => {
  const { t } = useTranslation('home');
  const [activeStageIndex, setActiveStageIndex] = useState(4); // Default to Comparison

  const stages = [
    {
      id: 'req',
      title: 'REQUEST',
      label: 'Industrial Valve — 24 units',
      badge: 'Specification',
      icon: Layers,
      status: 'COMPLETED',
      telemetry: {
        timestamp: '14:22:01 UTC',
        operator: 'Lead Piping Engineer',
        documents: ['ASME_B16.34_Specs.pdf', 'MTR_Requirement_Matrix.xlsx'],
        metric: '24 Units / Class 600',
      },
    },
    {
      id: 'src',
      title: 'SUPPLIERS IDENTIFIED',
      label: '6 international suppliers',
      badge: 'Market Scan',
      icon: Search,
      status: 'COMPLETED',
      telemetry: {
        timestamp: '18:40:12 UTC',
        operator: 'Global Sourcing Desk',
        documents: ['Tier1_Manufacturer_Longlist.pdf'],
        metric: '6 Global Mills Profiled',
      },
    },
    {
      id: 'ver',
      title: 'VERIFIED',
      label: '4 qualified manufacturers',
      badge: 'Audited',
      icon: ShieldCheck,
      status: 'COMPLETED',
      telemetry: {
        timestamp: '09:15:30 UTC',
        operator: 'Compliance & Audit Lead',
        documents: ['5_Point_Verification_Report.pdf', 'ISO9001_Validation.pdf'],
        metric: '4 Audited / 2 Rejected',
      },
    },
    {
      id: 'qts',
      title: 'QUOTES RECEIVED',
      label: '3 formal offers',
      badge: 'Bids Collected',
      icon: FileCheck2,
      status: 'COMPLETED',
      telemetry: {
        timestamp: '11:05:44 UTC',
        operator: 'RFQ Coordination Desk',
        documents: ['Apex_Formal_Bid.pdf', 'Nordic_Proposal.pdf'],
        metric: '3 Normalized Bids',
      },
    },
    {
      id: 'cmp',
      title: 'COMPARISON',
      label: 'Price • Lead Time • Terms • Risk',
      badge: 'Evaluated',
      icon: Scale,
      status: 'ACTIVE',
      telemetry: {
        timestamp: 'LIVE NOW',
        operator: 'Senior Procurement Strategist',
        documents: ['Multi_Factor_Decision_Matrix.xlsx', 'Landed_Cost_Model.pdf'],
        metric: 'Top Choice: Apex ($18.4k)',
      },
    },
    {
      id: 'pur',
      title: 'PURCHASE',
      label: 'Order confirmed & PO issued',
      badge: 'Coordination',
      icon: ShoppingBag,
      status: 'PENDING',
      telemetry: {
        timestamp: 'Scheduled',
        operator: 'Contract Execution Desk',
        documents: ['Purchase_Order_Draft_PS0248.pdf'],
        metric: 'PO Ready for Dispatch',
      },
    },
    {
      id: 'del',
      title: 'DELIVERY',
      label: 'In transit / Vessel assigned',
      badge: 'Logistics',
      icon: Ship,
      status: 'SCHEDULED',
      telemetry: {
        timestamp: 'ETA 18 Sept',
        operator: 'Ocean Freight Coordinator',
        documents: ['Bill_Of_Lading_Booking.pdf'],
        metric: 'Port of Lagos Delivery',
      },
    },
  ];

  const currentStage = stages[activeStageIndex];

  return (
    <section id="control-room" className="py-20 md:py-28 bg-[#070c17] relative overflow-hidden border-t border-slate-800">

      {/* Visual background lights */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-start max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-4">
            <Activity className="w-3.5 h-3.5 animate-pulse text-cyan-300" />
            <span>{t('controlVisual.tag', { ns: 'home' })}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {t('controlVisual.headline', { ns: 'home' })}
          </h2>
          <p className="mt-3 text-slate-300 text-base sm:text-lg">
            {t('controlVisual.subtitle', { ns: 'home' })}
          </p>
        </div>

        {/* Industrial Control Dashboard Container */}
        <div className="rounded-2xl bg-gradient-to-b from-[#0b1220] via-[#080e1a] to-[#060a12] border border-slate-700/80 p-6 sm:p-8 shadow-2xl shadow-cyan-950/40">

          {/* Dashboard Header Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 border-b border-slate-800">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-cyan-400 animate-ping" />
              <div className="font-mono">
                <div className="text-xs font-bold text-white tracking-wider uppercase">
                  PROCUREMENT PIPELINE TELEMETRY — LIVE FEED
                </div>
                <div className="text-[11px] text-slate-400">
                  Project: High-Pressure Subsea Valves • Batch PS-0248
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono">
              <span className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-slate-300">
                Desk Mode: Active Control
              </span>
              <span className="px-2.5 py-1 rounded bg-emerald-950/60 border border-emerald-800/60 text-emerald-400 font-bold">
                100% Traceable
              </span>
            </div>
          </div>

          {/* Interactive Horizontal Pipeline Track */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3 mb-8">
            {stages.map((stage, idx) => {
              const isActive = activeStageIndex === idx;
              const isPast = idx < activeStageIndex;

              return (
                <button
                  key={stage.id}
                  onClick={() => setActiveStageIndex(idx)}
                  className={`p-3.5 rounded-xl border text-start transition-all duration-200 cursor-pointer flex flex-col justify-between relative group ${isActive
                      ? 'bg-cyan-950/40 border-cyan-400 ring-1 ring-cyan-400 shadow-lg shadow-cyan-500/20'
                      : isPast
                        ? 'bg-slate-900/70 border-emerald-500/30 hover:border-emerald-500/60'
                        : 'bg-slate-950/60 border-slate-800 hover:border-slate-700'
                    }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-mono text-slate-400 font-bold">
                        0{idx + 1}
                      </span>
                      {isPast ? (
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                      ) : isActive ? (
                        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                      ) : (
                        <Clock className="w-3 h-3 text-slate-600" />
                      )}
                    </div>
                    <div className="text-[11px] font-mono font-bold text-white uppercase truncate">
                      {stage.title}
                    </div>
                  </div>

                  <div className="mt-3">
                    <span className={`text-[9px] font-mono font-semibold px-1.5 py-0.5 rounded ${isActive
                        ? 'bg-cyan-500/20 text-cyan-300'
                        : isPast
                          ? 'bg-emerald-500/10 text-emerald-400'
                          : 'bg-slate-800 text-slate-500'
                      }`}>
                      {stage.badge}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Stage Data Inspector Box */}
          <div className="rounded-xl bg-slate-950/90 border border-slate-800 p-6 sm:p-7">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

              {/* Left Column: Stage details */}
              <div className="lg:col-span-7 text-start">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                    {React.createElement(currentStage.icon, { className: 'w-5 h-5' })}
                  </div>
                  <div>
                    <div className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider">
                      Stage {activeStageIndex + 1} of 7 • {currentStage.badge}
                    </div>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-white font-mono">
                      {currentStage.title}
                    </h3>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-slate-300 font-medium mt-3">
                  {currentStage.label}
                </p>

                {/* Telemetry rows */}
                <div className="mt-6 pt-4 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
                  <div className="bg-slate-900/60 p-3 rounded-lg border border-slate-800">
                    <span className="text-slate-400 block text-[10px] uppercase">Responsible Desk Lead:</span>
                    <span className="text-white font-semibold">{currentStage.telemetry.operator}</span>
                  </div>
                  <div className="bg-slate-900/60 p-3 rounded-lg border border-slate-800">
                    <span className="text-slate-400 block text-[10px] uppercase">Timestamp / SLA:</span>
                    <span className="text-cyan-300 font-semibold">{currentStage.telemetry.timestamp}</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Attached Documentation & Key Metric */}
              <div className="lg:col-span-5">
                <div className="bg-slate-900/90 rounded-xl p-4 border border-slate-800">
                  <div className="flex items-center justify-between pb-2 mb-3 border-b border-slate-800 text-xs font-mono text-slate-400">
                    <span className="flex items-center gap-1.5 text-slate-300 font-bold">
                      <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                      Audited Artifacts
                    </span>
                    <span className="text-emerald-400">Verified</span>
                  </div>

                  <div className="space-y-2 mb-4">
                    {currentStage.telemetry.documents.map((doc, dIdx) => (
                      <div
                        key={dIdx}
                        className="flex items-center justify-between p-2 rounded bg-slate-950/80 border border-slate-800 text-[11px] font-mono text-slate-300"
                      >
                        <span className="truncate">{doc}</span>
                        <FileCheck2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 ml-2" />
                      </div>
                    ))}
                  </div>

                  <div className="p-2.5 rounded bg-cyan-950/50 border border-cyan-800/40 text-center font-mono text-xs text-cyan-300 font-bold">
                    Primary Metric: {currentStage.telemetry.metric}
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
