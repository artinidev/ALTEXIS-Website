import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check, ArrowRight, ShieldCheck, Sparkles, MapPin } from 'lucide-react';
import type { CommercialOffer } from './offersData';

interface OfferDetailModalProps {
  offer: CommercialOffer | null;
  isOpen: boolean;
  onClose: () => void;
  onSelectAction: (topic: string) => void;
}

export const OfferDetailModal: React.FC<OfferDetailModalProps> = ({
  offer,
  isOpen,
  onClose,
  onSelectAction,
}) => {
  // Close on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!offer) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 overflow-y-auto bg-[#111817]/75 backdrop-blur-md"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-offer-title"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 15 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-4xl rounded-3xl bg-[#FAF9F5] border border-[#E2DFD5] shadow-2xl overflow-hidden my-auto max-h-[90vh] flex flex-col text-start"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-6 sm:p-8 border-b border-[#E2DFD5] bg-white relative">
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2.5">
                    <span className="font-heading text-xs font-bold text-[#04846E] bg-[#04846E]/10 px-3 py-1 rounded-full">
                      Offre {offer.number}
                    </span>
                    <span className="text-xs font-heading font-medium text-[#5E6D68]">
                      {offer.categoryLabel}
                    </span>
                  </div>

                  <h2 id="modal-offer-title" className="font-heading text-2xl sm:text-3xl font-bold text-[#123C32]">
                    {offer.title}
                  </h2>

                  {offer.editorialSubtitle && (
                    <p className="text-sm font-normal text-[#5E6D68]">
                      {offer.editorialSubtitle}
                    </p>
                  )}
                </div>

                <button
                  onClick={onClose}
                  className="p-2.5 rounded-full bg-[#F5F3EA] hover:bg-[#123C32] hover:text-[#8EDB68] text-[#123C32] transition-colors cursor-pointer shrink-0"
                  aria-label="Fermer la fenêtre"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Price Banner */}
              <div className="mt-6 pt-5 border-t border-[#E2DFD5]/60 flex flex-wrap items-baseline gap-2">
                {offer.pricePrefix && (
                  <span className="text-xs font-heading font-medium text-[#5E6D68]">
                    {offer.pricePrefix}
                  </span>
                )}
                <span className="font-heading text-3xl font-extrabold text-[#123C32]">
                  {offer.priceMain}
                </span>
                {offer.priceSuffix && (
                  <span className="text-sm font-medium text-[#5E6D68]">
                    {offer.priceSuffix}
                  </span>
                )}
              </div>
            </div>

            {/* Modal Body / Scrollable Content */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-8 flex-1">
              
              {/* Description & Key stats */}
              <div>
                <p className="text-base text-[#111817]/90 leading-relaxed max-w-3xl">
                  {offer.description}
                </p>

                {offer.keyStats && offer.keyStats.length > 0 && (
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-5">
                    {offer.keyStats.map((stat, idx) => (
                      <div key={idx} className="p-3.5 rounded-2xl bg-white border border-[#E2DFD5]">
                        <span className="text-xs font-heading text-[#5E6D68] block">
                          {stat.label}
                        </span>
                        <span className="font-heading font-bold text-sm text-[#123C32] mt-0.5 block">
                          {stat.value}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Formulas if available */}
              {offer.formulas && offer.formulas.length > 0 && (
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-[#04846E]" />
                    <h3 className="font-heading text-lg font-bold text-[#123C32]">
                      Détail des formules disponibles
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {offer.formulas.map((form, idx) => (
                      <div
                        key={idx}
                        className={`p-5 rounded-2xl flex flex-col justify-between transition-all ${
                          form.popular
                            ? 'bg-white border-2 border-[#04846E] shadow-md relative'
                            : 'bg-white border border-[#E2DFD5]'
                        }`}
                      >
                        {form.popular && (
                          <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#04846E] text-white text-[11px] font-heading font-bold px-3 py-0.5 rounded-full shadow-sm">
                            Recommandé
                          </div>
                        )}

                        <div className="space-y-3">
                          <h4 className="font-heading font-bold text-base text-[#123C32]">
                            {form.name}
                          </h4>

                          <div className="border-b border-[#E2DFD5]/60 pb-3">
                            <span className="font-heading text-xl font-bold text-[#123C32]">
                              {form.price}
                            </span>
                            {form.period && (
                              <span className="text-xs text-[#5E6D68] block mt-0.5">
                                {form.period}
                              </span>
                            )}
                          </div>

                          <ul className="space-y-2 text-xs text-[#111817]/80 pt-1">
                            {form.features.map((feat, fIdx) => (
                              <li key={fIdx} className="flex items-start gap-2">
                                <Check className="w-3.5 h-3.5 text-[#04846E] shrink-0 mt-0.5" />
                                <span>{feat}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="pt-4 mt-4 border-t border-[#E2DFD5]/60">
                          <button
                            onClick={() => {
                              onClose();
                              onSelectAction(`${offer.title} - ${form.name}`);
                            }}
                            className={`w-full py-2.5 px-3 rounded-full text-xs font-heading font-bold transition-all cursor-pointer ${
                              form.popular
                                ? 'bg-[#04846E] text-white hover:bg-[#036f5c]'
                                : 'bg-[#F5F3EA] text-[#123C32] hover:bg-[#123C32] hover:text-white'
                            }`}
                          >
                            Choisir {form.name}
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Full Features checklist */}
              {offer.fullFeaturesList && (
                <div className="space-y-3 pt-2">
                  <h3 className="font-heading text-sm font-bold text-[#123C32]">
                    Inclus & garanties professionnelles
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {offer.fullFeaturesList.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-white border border-[#E2DFD5]/70 text-xs text-[#111817]/85">
                        <ShieldCheck className="w-4 h-4 text-[#04846E] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Location Badge */}
              <div className="p-4 rounded-2xl bg-[#123C32]/5 border border-[#123C32]/10 flex items-center gap-3 text-xs text-[#123C32]">
                <MapPin className="w-4 h-4 text-[#04846E] shrink-0" />
                <span>
                  <strong>Centre d’Affaires & Hub Stratégique :</strong> Résidence El Ferdous, Aïn Allah, Dély Ibrahim, Alger.
                </span>
              </div>

            </div>

            {/* Modal Footer CTA */}
            <div className="p-6 sm:p-8 border-t border-[#E2DFD5] bg-white flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-[#5E6D68]">
                Devis personnalisé et sans engagement • Réponse sous 24h ouvrées
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <button
                  onClick={onClose}
                  className="w-1/2 sm:w-auto px-5 py-3 rounded-full text-xs font-heading font-semibold text-[#5E6D68] hover:text-[#123C32] hover:bg-[#F5F3EA] transition-colors cursor-pointer"
                >
                  Fermer
                </button>

                <button
                  onClick={() => {
                    onClose();
                    onSelectAction(offer.title);
                  }}
                  className="w-1/2 sm:w-auto farmio-btn-accent px-6 py-3 text-xs font-heading font-bold inline-flex items-center justify-center gap-2 cursor-pointer shadow-md"
                >
                  <span>Demander un devis / Réserver</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
