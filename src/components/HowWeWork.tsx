import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MotionReveal } from './MotionReveal';

interface HowWeWorkProps {
  onOpenContactModal?: (topic?: string) => void;
}

export const HowWeWork: React.FC<HowWeWorkProps> = ({ onOpenContactModal }) => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      label: 'UNDERSTAND',
      num: '01',
      title: 'We start with the real question',
      body: 'Procurement gets reduced to decks and spreadsheets. Up close, it is experienced specialists in a room, thinking hard, analyzing technical tolerances, asking the uncomfortable questions, and staying until the right supplier is qualified. This is that work.',
    },
    {
      label: 'SOURCE',
      num: '02',
      title: 'Direct mill access, zero intermediaries',
      body: 'We identify international manufacturers and tier-1 mills capable of meeting your exact engineering requirements, bypassing trading layers to secure commercial clarity.',
    },
    {
      label: 'VERIFY',
      num: '03',
      title: 'Auditing before you commit',
      body: 'We review supplier credentials, factory tooling, ISO/API certifications, and legal status before any financial commitment is made.',
    },
    {
      label: 'SUPPORT',
      num: '04',
      title: 'Coordination through delivery',
      body: 'From quote normalization through factory milestones and final shipment, we stay alongside your procurement desk until the cargo reaches your facility.',
    },
  ];

  return (
    <section id="approach" className="py-24 sm:py-36 bg-[#ECEAE1] text-[#00221F] border-t border-[#D8D5CA]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Centered Large Serif Headline (matches Screenshot 2) */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <MotionReveal delay={0.1}>
            <h2 className="font-editorial text-4xl sm:text-6xl lg:text-[68px] font-normal text-[#00221F] tracking-tight leading-[1.08]">
              How the work<br />actually goes
            </h2>
          </MotionReveal>
        </div>

        {/* Two-Column Card Component (matches Screenshot 2) */}
        <MotionReveal delay={0.25} direction="up">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch max-w-6xl mx-auto">
            
            {/* Left: Large Editorial Photograph */}
            <div className="lg:col-span-6 rounded-3xl overflow-hidden shadow-xl aspect-[4/3] lg:aspect-auto min-h-[320px] bg-[#DFDCCE]">
              <img
                src="/process-bg.jpg"
                alt="ALTEXIS partners examining technical procurement blueprints"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right: White Card with Interactive Tab Pill Selectors */}
            <div className="lg:col-span-6 rounded-3xl bg-white p-8 sm:p-12 shadow-xl flex flex-col justify-between text-start border border-[#E2DFD5]">
              <div>
                
                {/* Tab Pill Buttons */}
                <div className="flex flex-wrap items-center gap-2 mb-8">
                  {tabs.map((tab, idx) => {
                    const isActive = activeTab === idx;
                    return (
                      <button
                        key={tab.num}
                        onClick={() => setActiveTab(idx)}
                        className={`px-4 py-2 rounded-lg text-xs font-mono font-bold tracking-wider uppercase transition-all duration-200 cursor-pointer ${
                          isActive
                            ? 'bg-[#00221F] text-[#00D991] shadow-md'
                            : 'bg-[#F4F2EA] text-[#4A635F] hover:bg-[#EAE7DC]'
                        }`}
                      >
                        {tab.label}
                      </button>
                    );
                  })}
                </div>

                <div className="h-px bg-[#ECEAE1] mb-8" />

                {/* Tab Content Display */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#00221F] mb-4 leading-snug">
                      {tabs[activeTab].title}
                    </h3>
                    <p className="text-sm sm:text-base text-[#4A635F] leading-relaxed font-normal">
                      {tabs[activeTab].body}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="pt-8 mt-8 border-t border-[#F4F2EA] text-xs font-mono text-[#4A635F] flex items-center justify-between">
                <span>Stage {tabs[activeTab].num} of 04</span>
                <span className="text-[#04846E] font-bold">Standard SLA</span>
              </div>
            </div>

          </div>
        </MotionReveal>

        {/* Bottom Centered Dark Pill Button (matches Screenshot 2) */}
        <MotionReveal delay={0.4}>
          <div className="mt-14 sm:mt-16 text-center">
            <button
              onClick={() => onOpenContactModal && onOpenContactModal('How The Work Goes')}
              className="altexis-pill-btn-dark px-8 py-4 text-xs uppercase tracking-wider font-semibold cursor-pointer shadow-lg active:scale-[0.98] inline-flex items-center justify-center"
            >
              <span>Submit a Procurement Request</span>
            </button>
          </div>
        </MotionReveal>

      </div>
    </section>
  );
};
