import React from 'react';
import { useTranslation } from 'react-i18next';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { ContactForm } from './ContactForm';

interface RFQModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTopic?: string;
}

export const RFQModal: React.FC<RFQModalProps> = ({ isOpen, onClose, initialTopic }) => {
  const { i18n } = useTranslation();
  const lang = (i18n.language || 'en') as 'en' | 'fr' | 'ar';

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.classList.add('modal-open');
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.classList.remove('modal-open');
      document.body.style.overflow = '';
    }

    return () => {
      document.body.classList.remove('modal-open');
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  const content = {
    en: {
      eyebrow: 'PROCUREMENT DESK INTAKE',
      title: 'Submit Your Requirement',
    },
    fr: {
      eyebrow: 'BUREAU D’ACHAT & SOURCING',
      title: 'Déposer votre Cahier des Charges',
    },
    ar: {
      eyebrow: 'مكتب استقبال طلبات المشتريات',
      title: 'تقديم متطلبات المشتريات والمواصفات',
    },
  };

  const current = content[lang] || content.en;

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          data-lenis-prevent="true"
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-md [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden cursor-pointer"
          onClick={onClose}
        >
          <div className="min-h-full flex items-center justify-center p-4 sm:p-6 py-8 sm:py-12 pointer-events-none">
            <motion.div
              data-lenis-prevent="true"
              initial={{ opacity: 0, scale: 0.96, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 12 }}
              transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-4xl rounded-[2rem] bg-white border border-[#E2DFD5] shadow-2xl p-5 sm:p-7 text-start pointer-events-auto font-poppins cursor-default"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#E2DFD5]">
                <div>
                  <span className="text-xs font-heading font-semibold tracking-[0.18em] text-[#123C32] uppercase block mb-1">
                    {current.eyebrow}
                  </span>
                  <h2 className="font-heading text-xl sm:text-2xl font-semibold text-[#123C32]">
                    {current.title}
                  </h2>
                </div>

                <button
                  onClick={onClose}
                  className="p-2 rounded-full bg-[#F5F3EA] hover:bg-[#123C32] hover:text-[#8EDB68] text-[#123C32] transition-colors cursor-pointer"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Form */}
              <ContactForm
                initialService={initialTopic}
                isModal={true}
                onClose={onClose}
              />
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
};
