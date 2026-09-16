import React, { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { MotionReveal } from './MotionReveal';

interface ServicesSectionProps {
  onOpenContactModal: (serviceName?: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenContactModal }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const services = [
    {
      title: 'Supplier Sourcing & Identification',
      desc: 'We identify qualified manufacturers, direct mills, and specialist fabricators capable of meeting your exact technical specifications without broker markups.',
      image1: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80',
      image2: 'https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=600&q=80',
    },
    {
      title: '5-Point Supplier Verification',
      desc: 'We assess supplier identity, legal authentication, factory capacity, ISO/API quality certifications, and financial risk before you commit capital.',
      image1: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80',
      image2: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80',
    },
    {
      title: 'RFQ & Quote Normalization',
      desc: 'We structure requests for quotation and translate international bids into normalized multi-factor matrices evaluating price, lead-time, terms, and risk.',
      image1: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=600&q=80',
      image2: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80',
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % services.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + services.length) % services.length);
  };

  return (
    <section id="services" className="py-24 sm:py-36 bg-[#00221F] text-white border-t border-[#04846E]/30">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Centered Large Serif Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <MotionReveal delay={0.1}>
            <h2 className="font-editorial text-4xl sm:text-6xl lg:text-[68px] font-bold text-white tracking-tight leading-[1.08]">
              Where we do our<br />sharpest work
            </h2>
          </MotionReveal>
        </div>

        {/* Feature Carousel Card */}
        <MotionReveal delay={0.25} direction="up">
          <div className="max-w-6xl mx-auto rounded-3xl overflow-hidden bg-gradient-to-br from-[#032B27] via-[#043833] to-[#011C19] text-white p-8 sm:p-12 shadow-2xl border border-[#00D991]/30">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Left Column: Service Details */}
              <div className="lg:col-span-6 flex flex-col justify-between h-full text-start">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    transition={{ duration: 0.25 }}
                  >
                    <h3 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                      {services[currentSlide].title}
                    </h3>

                    <p className="text-base text-[#A3C2BD] font-normal leading-relaxed mb-8 max-w-md font-body">
                      {services[currentSlide].desc}
                    </p>
                  </motion.div>
                </AnimatePresence>

                {/* Bottom Row: Button & Pagination Arrows */}
                <div className="flex flex-wrap items-center justify-between gap-4 pt-4">
                  <button
                    onClick={() => onOpenContactModal(services[currentSlide].title)}
                    className="altexis-pill-btn px-7 py-3.5 text-xs font-bold uppercase tracking-wider cursor-pointer"
                  >
                    <span>Book a Consultation</span>
                  </button>

                  <div className="flex items-center gap-3">
                    <button
                      onClick={prevSlide}
                      className="w-10 h-10 rounded-full bg-[#00D991]/15 hover:bg-[#00D991]/30 border border-[#00D991]/40 flex items-center justify-center text-[#00D991] transition-colors cursor-pointer"
                      aria-label="Previous"
                    >
                      <ArrowLeft className="w-4 h-4" />
                    </button>
                    <div className="text-xs font-mono font-bold text-[#A3C2BD]">
                      0{currentSlide + 1} / 0{services.length}
                    </div>
                    <button
                      onClick={nextSlide}
                      className="w-10 h-10 rounded-full bg-[#00D991]/15 hover:bg-[#00D991]/30 border border-[#00D991]/40 flex items-center justify-center text-[#00D991] transition-colors cursor-pointer"
                      aria-label="Next"
                    >
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Right Column: Two Photographic Cards with Crosshairs */}
              <div className="lg:col-span-6 grid grid-cols-2 gap-4">
                <div className="relative rounded-2xl overflow-hidden aspect-[3/4] bg-[#00221F] shadow-lg border border-[#04846E]/40">
                  <img
                    src={services[currentSlide].image1}
                    alt="ALTEXIS Industrial Verification"
                    className="w-full h-full object-cover brightness-95"
                  />
                  <div className="absolute top-3 left-3 text-[#00D991] text-xs font-mono font-bold">+</div>
                  <div className="absolute top-3 right-3 text-[#00D991] text-xs font-mono font-bold">+</div>
                  <div className="absolute bottom-3 left-3 text-[#00D991] text-xs font-mono font-bold">+</div>
                  <div className="absolute bottom-3 right-3 text-[#00D991] text-xs font-mono font-bold">+</div>
                </div>

                <div className="relative rounded-2xl overflow-hidden aspect-[3/4] bg-[#00221F] shadow-lg border border-[#04846E]/40">
                  <img
                    src={services[currentSlide].image2}
                    alt="ALTEXIS Direct Mill Partner"
                    className="w-full h-full object-cover brightness-95"
                  />
                  <div className="absolute top-3 left-3 text-[#00D991] text-xs font-mono font-bold">+</div>
                  <div className="absolute top-3 right-3 text-[#00D991] text-xs font-mono font-bold">+</div>
                  <div className="absolute bottom-3 left-3 text-[#00D991] text-xs font-mono font-bold">+</div>
                  <div className="absolute bottom-3 right-3 text-[#00D991] text-xs font-mono font-bold">+</div>
                </div>
              </div>

            </div>
          </div>
        </MotionReveal>

        {/* Four Large Metric Numbers Below */}
        <MotionReveal delay={0.4} direction="up">
          <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 pt-16 sm:pt-20 text-start">
            <div className="border-l border-[#04846E]/40 pl-6 first:border-none md:first:pl-0">
              <div className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
                120+
              </div>
              <div className="text-xs sm:text-sm text-[#A3C2BD] font-body mt-2">
                Mandates delivered
              </div>
            </div>

            <div className="border-l border-[#04846E]/40 pl-6">
              <div className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-bold text-[#00D991]">
                $4.2B
              </div>
              <div className="text-xs sm:text-sm text-[#A3C2BD] font-body mt-2">
                In procurement advised
              </div>
            </div>

            <div className="border-l border-[#04846E]/40 pl-6">
              <div className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
                14
              </div>
              <div className="text-xs sm:text-sm text-[#A3C2BD] font-body mt-2">
                Industrial sectors
              </div>
            </div>

            <div className="border-l border-[#04846E]/40 pl-6">
              <div className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-bold text-[#00D991]">
                90%
              </div>
              <div className="text-xs sm:text-sm text-[#A3C2BD] font-body mt-2">
                Of clients return
              </div>
            </div>
          </div>
        </MotionReveal>

      </div>
    </section>
  );
};
