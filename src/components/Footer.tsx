import React from 'react';
import { ArrowUpRight, ShieldCheck, Phone, Mail, MapPin } from 'lucide-react';
import { AltexisLogo } from './AltexisLogo';
import { LanguageSwitcher } from './LanguageSwitcher';

interface FooterProps {
  onOpenContactModal?: (topic?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenContactModal }) => {
  const solutions = [
    { label: 'Direct Mill Sourcing', topic: 'Direct Mill Sourcing' },
    { label: '5-Point Supplier Verification', topic: 'Supplier Verification' },
    { label: 'RFQ & Quote Normalization', topic: 'RFQ Normalization' },
    { label: 'Pre-Shipment Quality Audits', topic: 'Pre-Shipment Quality Audits' },
    { label: 'Cross-Border Freight Coordination', topic: 'Freight & Logistics' },
  ];

  const industries = [
    { label: 'Energy, Oil & Gas', topic: 'Energy, Oil & Gas' },
    { label: 'EPC & Critical Infrastructure', topic: 'EPC & Infrastructure' },
    { label: 'Heavy Manufacturing & CNC', topic: 'Heavy Manufacturing' },
    { label: 'Specialized Flanges & Valves', topic: 'Flanges & Valves' },
    { label: 'High-Tolerance Metallurgy', topic: 'Metallurgy' },
  ];

  const globalDesks = [
    { city: 'USA', area: 'Houston / NY Desk', code: 'EST/CST', tel: '0670132353' },
    { city: 'Algeria', area: 'Residence El Ferdous, Alger', code: 'CET', tel: '0670132353' },
    { city: 'Dubai', area: 'DIFC Precinct 4', code: 'GST', tel: '0670132353' },
    { city: 'Singapore', area: 'Marina Bay Tower', code: 'SGT', tel: '0670132353' },
  ];

  return (
    <footer className="bg-[#001715] text-[#A3C2BD] border-t border-[#04846E]/30 relative overflow-hidden text-start selection:bg-[#00D991]/30 selection:text-[#00D991]">
      
      {/* Background Luxury Ambient Glows */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#00D991]/6 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-[#04846E]/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Subtle Architectural Background Watermark */}
      <div className="absolute -bottom-10 right-4 select-none pointer-events-none opacity-[0.025] font-editorial text-[160px] sm:text-[240px] font-extrabold text-white tracking-tighter leading-none whitespace-nowrap">
        ALTEXIS
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 pt-20 pb-12">
        
        {/* Top Header Marquee: Executive Proposition + Direct Callout Action */}
        <div className="pb-16 mb-16 border-b border-white/10 flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <span className="text-xs font-mono font-bold tracking-widest text-[#00D991] uppercase block mb-3">
              GLOBAL BUYER-SIDE SOURCING DESK
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
              International procurement with complete commercial oversight.
            </h2>
          </div>

          <div className="shrink-0">
            <button
              onClick={() => onOpenContactModal && onOpenContactModal('Footer Executive Briefing')}
              className="altexis-pill-btn px-8 py-4 text-xs font-bold uppercase tracking-wider cursor-pointer inline-flex items-center gap-3 shadow-xl active:scale-[0.98]"
            >
              <span>Schedule a Mandate Briefing</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 4-Column Luxury Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-10 pb-16 border-b border-white/10">
          
          {/* Column 1: Brand Logo, Mission & Fiduciary Seals (lg:col-span-4) */}
          <div className="lg:col-span-4 space-y-6">
            <AltexisLogo />
            
            <p className="text-sm text-[#A3C2BD] leading-relaxed max-w-sm font-body">
              ALTEXIS operates strictly as a buyer-side desk, connecting industrial enterprises with vetted manufacturers, mill-direct pricing, and rigorous 5-point quality assurance.
            </p>

            {/* Assurance Badges */}
            <div className="flex flex-wrap items-center gap-2.5 pt-1">
              <div className="px-3 py-1.5 rounded-full bg-[#032B27] border border-[#04846E]/50 text-[11px] font-mono text-white flex items-center gap-1.5 shadow-xs">
                <ShieldCheck className="w-3.5 h-3.5 text-[#00D991]" />
                <span>Buyer-Side Fiduciary</span>
              </div>
              <div className="px-3 py-1.5 rounded-full bg-[#032B27] border border-[#04846E]/50 text-[11px] font-mono text-[#00D991] flex items-center gap-1.5 shadow-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00D991]" />
                <span>ISO 9001:2015 & 37001</span>
              </div>
            </div>

            {/* Language Selector Embedded */}
            <div className="pt-3">
              <LanguageSwitcher variant="footer" />
            </div>
          </div>

          {/* Column 2: Solutions & Advisory (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-white">
              Solutions & Advisory
            </h3>
            <ul className="space-y-2.5 text-sm font-body">
              {solutions.map((item, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => onOpenContactModal && onOpenContactModal(item.topic)}
                    className="text-[#A3C2BD] hover:text-[#00D991] transition-colors cursor-pointer text-start flex items-center gap-1.5 group"
                  >
                    <span>{item.label}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[#00D991]" />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Demanding Sectors (lg:col-span-2) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-white">
              Sectors
            </h3>
            <ul className="space-y-2.5 text-sm font-body">
              {industries.map((ind, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => onOpenContactModal && onOpenContactModal(ind.topic)}
                    className="text-[#A3C2BD] hover:text-[#00D991] transition-colors cursor-pointer text-start flex items-center gap-1.5 group"
                  >
                    <span>{ind.label}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[#00D991]" />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Global Desks & Direct Channels (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-5">
            <div>
              <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-white mb-3">
                Global Sourcing Desks
              </h3>
              <div className="space-y-2 text-xs font-mono">
                {globalDesks.map((d, idx) => (
                  <div key={idx} className="flex items-center justify-between py-1 border-b border-white/5">
                    <span className="flex items-center gap-1.5 text-white font-medium">
                      <MapPin className="w-3 h-3 text-[#00D991]" />
                      {d.city}
                    </span>
                    <span className="text-[#5A7470]">{d.code}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Direct Channels */}
            <div className="pt-2 space-y-2 text-xs font-mono">
              <div className="flex items-center gap-2 text-[#A3C2BD]">
                <Phone className="w-3.5 h-3.5 text-[#00D991]" />
                <a href="tel:+213670132353" className="text-white font-medium hover:text-[#00D991] transition-colors">+213 670 13 23 53</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#00D991]" />
                <a
                  href="mailto:admin@altexisai.com"
                  className="text-[#00D991] hover:underline font-medium"
                >
                  admin@altexisai.com
                </a>
              </div>
              <div className="flex items-center gap-2 text-[#A3C2BD]">
                <MapPin className="w-3.5 h-3.5 text-[#00D991] shrink-0" />
                <span className="text-white font-medium text-[11px]">Residence El Ferdous, Ain Allah, Dely Brahim, Alger</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Legal, System Status & Disclosures Strip */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-xs font-mono text-[#5A7470]">
          
          {/* Live Status Indicator */}
          <div className="flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-[#00D991] animate-pulse" />
            <span className="text-white font-medium">International Sourcing Desks Online</span>
            <span className="hidden sm:inline text-white/20">•</span>
            <span className="hidden sm:inline text-[#A3C2BD]">48h SLA Response Guaranteed</span>
          </div>

          {/* Compliance & Fiduciary Assurances */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <span className="text-[#A3C2BD]">Zero Broker Markups</span>
            <span className="text-white/20">•</span>
            <span className="text-[#A3C2BD]">Mutual NDA Enforced</span>
            <span className="text-white/20">•</span>
            <span>© {new Date().getFullYear()} ALTEXIS Group.</span>
          </div>

        </div>

      </div>
    </footer>
  );
};
