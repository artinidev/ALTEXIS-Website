import React from 'react';
import { MotionReveal } from './MotionReveal';

export const InsightsSection: React.FC = () => {
  const articles = [
    {
      category: 'STRATEGY',
      readTime: '6 MIN READ • AUGUST 2026',
      title: 'The quiet cost of a sourcing decision you keep postponing for later',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80',
    },
    {
      category: 'GOVERNANCE',
      readTime: '6 MIN READ • JULY 2026',
      title: 'What procurement boards consistently get wrong about supplier audits',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80',
    },
    {
      category: 'FINANCE',
      readTime: '6 MIN READ • JUNE 2026',
      title: 'When landed cost and manufacturing speed pull in opposite directions',
      image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=800&q=80',
    },
  ];

  return (
    <section id="insights" className="py-24 sm:py-36 bg-[#ECEAE1] text-[#00221F] border-t border-[#D8D5CA]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Header (matches Screenshot 3) */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14 sm:mb-16 text-start">
          <MotionReveal delay={0.1}>
            <h2 className="font-editorial text-4xl sm:text-6xl lg:text-[68px] font-normal text-[#00221F] tracking-tight leading-[1.08]">
              Thinking we<br />choose to share
            </h2>
          </MotionReveal>

          <MotionReveal delay={0.2}>
            <button className="altexis-pill-btn-dark px-7 py-3.5 text-xs uppercase tracking-wider font-semibold cursor-pointer self-start sm:self-auto">
              See More Insights
            </button>
          </MotionReveal>
        </div>

        {/* 3 Editorial Article Cards Grid (matches Screenshot 3 with ALTEXIS Brand Palette) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-start">
          {articles.map((art, idx) => (
            <MotionReveal key={idx} delay={0.15 * idx} direction="up">
              <article className="group cursor-pointer">
                {/* Image */}
                <div className="relative rounded-3xl overflow-hidden aspect-[16/11] bg-[#DFDCCE] mb-6 shadow-md border border-black/5">
                  <img
                    src={art.image}
                    alt={art.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500 ease-out"
                  />
                </div>

                {/* Tag Pill */}
                <div className="flex items-center gap-3 mb-3">
                  <span className="px-3 py-1 rounded-md text-[10px] font-mono font-bold uppercase tracking-wider bg-[#00D991]/25 text-[#00221F]">
                    {art.category}
                  </span>
                  <span className="text-[11px] font-mono text-[#5A7470]">
                    {art.readTime}
                  </span>
                </div>

                {/* Bold Serif Headline */}
                <h3 className="font-editorial text-xl sm:text-2xl font-bold text-[#00221F] group-hover:text-[#04846E] transition-colors leading-snug">
                  {art.title}
                </h3>
              </article>
            </MotionReveal>
          ))}
        </div>

      </div>
    </section>
  );
};
