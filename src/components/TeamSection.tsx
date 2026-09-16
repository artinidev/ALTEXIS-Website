import React from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { MotionReveal } from './MotionReveal';

export const TeamSection: React.FC = () => {
  const team = [
    {
      name: 'Eleanor Voss',
      role: 'Managing Partner',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
    },
    {
      name: 'Marcus Hale',
      role: 'Senior Partner, Global Sourcing',
      image: '/advisor-hale.jpg',
    },
    {
      name: 'Priya Raman',
      role: 'Principal, Industrial Audit',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80',
    },
    {
      name: 'James Whitfield',
      role: 'Partner, Engineering & Compliance',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
    },
  ];

  return (
    <section id="team" className="py-24 sm:py-36 bg-[#ECEAE1] text-[#00221F] border-t border-[#D8D5CA]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Header with Slider Navigation (matches Screenshot 5) */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 sm:mb-16 text-start">
          <MotionReveal delay={0.1}>
            <h2 className="font-editorial text-4xl sm:text-6xl lg:text-[68px] font-normal text-[#00221F] tracking-tight leading-[1.08]">
              The people behind<br />the counsel
            </h2>
          </MotionReveal>

          <MotionReveal delay={0.2}>
            <div className="flex items-center gap-3">
              <button
                className="w-12 h-12 rounded-full bg-[#00221F] hover:bg-[#04846E] text-white flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Previous team members"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
              <button
                className="w-12 h-12 rounded-full bg-[#00221F] hover:bg-[#04846E] text-white flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Next team members"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </MotionReveal>
        </div>

        {/* Team Cards Grid (matches Screenshot 5 with ALTEXIS Brand Palette) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-start">
          {team.map((member, idx) => (
            <MotionReveal key={idx} delay={0.1 * idx} direction="up">
              <div className="relative rounded-3xl overflow-hidden aspect-[3/4] bg-[#00221F] group shadow-xl border border-black/5">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500 ease-out"
                />

                {/* Bottom Glass Overlay (matches Screenshot 5) */}
                <div className="absolute bottom-4 inset-x-4 p-4 rounded-2xl bg-[#00221F]/90 backdrop-blur-md border border-[#04846E]/40 flex items-center justify-between text-white shadow-lg">
                  <div>
                    <h3 className="font-editorial text-base sm:text-lg font-bold leading-tight text-white">
                      {member.name}
                    </h3>
                    <p className="text-xs text-[#A3C2BD] font-sans mt-0.5">
                      {member.role}
                    </p>
                  </div>

                  <div className="w-8 h-8 rounded-lg bg-[#00D991] text-[#00221F] flex items-center justify-center font-bold text-xs font-mono shrink-0">
                    in
                  </div>
                </div>
              </div>
            </MotionReveal>
          ))}
        </div>

      </div>
    </section>
  );
};
