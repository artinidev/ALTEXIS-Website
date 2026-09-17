import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  Copy,
  Zap,
  Palette,
  Globe,
  Headphones,
} from 'lucide-react';
import { WhatsAppIcon } from '../WhatsAppFloatingButton';

interface BrandingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialServiceType?: 'branding' | 'website' | 'bundle';
}

export const BrandingModal: React.FC<BrandingModalProps> = ({
  isOpen,
  onClose,
  initialServiceType = 'bundle',
}) => {
  const { t, i18n } = useTranslation(['offers', 'common']);
  const isRtl = i18n.language === 'ar';

  const [serviceType, setServiceType] = useState<'branding' | 'website' | 'bundle'>(initialServiceType);
  const [fullName, setFullName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  // Status & submission
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submittedRef, setSubmittedRef] = useState('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (initialServiceType) {
      setServiceType(initialServiceType);
    }
  }, [initialServiceType, isOpen]);

  useEffect(() => {
    if (!isOpen) {
      setIsSuccess(false);
    }
  }, [isOpen]);

  useEffect(() => {
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

  const getServiceLabel = () => {
    switch (serviceType) {
      case 'bundle':
        return t('brandingModal.types.bundle', { ns: 'offers' });
      case 'branding':
        return t('brandingModal.types.branding', { ns: 'offers' });
      case 'website':
        return t('brandingModal.types.website', { ns: 'offers' });
      default:
        return t('brandingModal.types.bundle', { ns: 'offers' });
    }
  };

  const generateWhatsAppMessage = () => {
    const greeting = isRtl
      ? '🎨 *مرحباً أستوديو وتطوير ALTEXIS*، إليكم تفاصيل طلبي للمشروع :'
      : i18n.language === 'en'
      ? '🎨 *Hello ALTEXIS Studio & Web*, here is my project request:'
      : '🎨 *Bonjour ALTEXIS Studio & Web*, voici ma demande de projet :';

    const serviceLine = isRtl
      ? `• *الخدمة المطلوبة* : ${getServiceLabel()}`
      : i18n.language === 'en'
      ? `• *Requested Service* : ${getServiceLabel()}`
      : `• *Prestation souhaitée* : ${getServiceLabel()}`;

    const nameLine = fullName
      ? (isRtl ? `• *الاسم الكامل* : ${fullName}` : (i18n.language === 'en' ? `• *Full Name* : ${fullName}` : `• *Nom & Prénom* : ${fullName}`))
      : '';

    const companyLine = companyName
      ? (isRtl ? `• *الشركة / المشروع* : ${companyName}` : (i18n.language === 'en' ? `• *Company / Project* : ${companyName}` : `• *Société / Projet* : ${companyName}`))
      : '';

    const emailLine = email
      ? `• *Email* : ${email}`
      : '';

    const phoneLine = phone
      ? (isRtl ? `• *رقم الهاتف* : ${phone}` : (i18n.language === 'en' ? `• *Phone* : ${phone}` : `• *Téléphone* : ${phone}`))
      : '';

    const closing = isRtl
      ? '👉 يرجى التواصل معي لمناقشة وتأكيد العرض التجاري.'
      : i18n.language === 'en'
      ? '👉 Please contact me to discuss and finalize the proposal.'
      : '👉 Merci de me recontacter pour finaliser la proposition commerciale.';

    const lines: string[] = [
      greeting,
      serviceLine,
      nameLine,
      companyLine,
      emailLine,
      phoneLine,
      '',
      closing,
    ].filter(Boolean);

    return encodeURIComponent(lines.join('\n'));
  };

  const handleWhatsAppDirect = () => {
    const text = generateWhatsAppMessage();
    window.open(`https://wa.me/213560189825?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !phone || !email) return;

    setIsSubmitting(true);
    setTimeout(() => {
      const randomRef = `ALT-BRD-${Math.floor(1000 + Math.random() * 9000)}`;
      setSubmittedRef(randomRef);
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 500);
  };

  const handleCopyRef = () => {
    navigator.clipboard.writeText(submittedRef);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          data-lenis-prevent="true"
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 overflow-y-auto bg-black/65 backdrop-blur-md [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden cursor-pointer"
          onClick={onClose}
        >
          <div className="min-h-full flex items-center justify-center p-3 sm:p-6 py-8 sm:py-12 pointer-events-none">
            <motion.div
              data-lenis-prevent="true"
              initial={{ opacity: 0, scale: 0.95, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 16 }}
              transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-2xl rounded-[2.25rem] bg-[#FAF9F5] text-[#111817] border border-[#E2DFD5] shadow-2xl p-6 sm:p-9 text-start pointer-events-auto font-sans cursor-default"
              onClick={(e) => e.stopPropagation()}
              dir={isRtl ? 'rtl' : 'ltr'}
            >
              {/* Header */}
              <div className="flex items-start justify-between pb-5 mb-6 border-b border-[#E2DFD5] gap-4">
                <div className="space-y-1.5">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#04846E]/10 border border-[#04846E]/20 text-[#04846E] font-heading text-[11px] font-semibold tracking-wider uppercase">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{t('brandingModal.eyebrow', { ns: 'offers' })}</span>
                  </div>
                  <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-[#123C32] tracking-tight">
                    {t('brandingModal.title', { ns: 'offers' })}
                  </h2>
                  <p className="text-xs sm:text-sm text-[#5E6D68] max-w-xl leading-relaxed font-normal">
                    {t('brandingModal.desc', { ns: 'offers' })}
                  </p>
                </div>

                <button
                  onClick={onClose}
                  className="p-2.5 rounded-full bg-white hover:bg-[#123C32] hover:text-[#8EDB68] text-[#123C32] border border-[#E2DFD5] transition-colors cursor-pointer shrink-0 shadow-xs"
                  aria-label="Fermer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Success View */}
              {isSuccess ? (
                <div className="py-8 px-2 text-center space-y-6">
                  <div className="w-16 h-16 rounded-full bg-[#04846E]/10 border border-[#04846E]/30 flex items-center justify-center text-[#04846E] mx-auto shadow-sm">
                    <CheckCircle2 className="w-9 h-9" />
                  </div>

                  <div className="space-y-2 max-w-md mx-auto">
                    <h3 className="font-heading text-2xl font-semibold text-[#123C32]">
                      {t('brandingModal.cta.successTitle', { ns: 'offers' })}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#5E6D68] leading-relaxed">
                      {t('brandingModal.cta.successDesc', { ns: 'offers' })}
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-white border border-[#E2DFD5] max-w-xs mx-auto flex items-center justify-between shadow-xs">
                    <div className="text-start">
                      <span className="text-[10px] text-[#5E6D68] block uppercase font-mono">
                        {t('brandingModal.cta.ref', { ns: 'offers' })}
                      </span>
                      <span className="font-mono text-sm font-semibold text-[#04846E]">
                        {submittedRef}
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={handleCopyRef}
                      className="p-2 text-xs font-sans font-medium rounded-xl hover:bg-[#FAF9F5] text-[#5E6D68] hover:text-[#123C32] transition-colors cursor-pointer flex items-center gap-1.5"
                    >
                      <Copy className="w-3.5 h-3.5" />
                      <span>
                        {copied
                          ? (isRtl ? 'تم النسخ' : i18n.language === 'en' ? 'Copied' : 'Copié')
                          : (isRtl ? 'نسخ' : i18n.language === 'en' ? 'Copy' : 'Copier')}
                      </span>
                    </button>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                    <button
                      onClick={handleWhatsAppDirect}
                      className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white font-heading text-xs font-semibold uppercase tracking-wider inline-flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer"
                    >
                      <WhatsAppIcon className="w-4 h-4" />
                      <span>{t('brandingModal.cta.followWa', { ns: 'offers' })}</span>
                    </button>
                    <button
                      onClick={onClose}
                      className="w-full sm:w-auto farmio-btn-outline px-7 py-3.5 text-xs font-heading font-semibold uppercase tracking-wider cursor-pointer"
                    >
                      {t('brandingModal.cta.close', { ns: 'offers' })}
                    </button>
                  </div>
                </div>
              ) : (
                /* Short Essentials Form */
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* 1. Required Service Selector */}
                  <div className="space-y-2.5">
                    <label className="text-xs font-heading font-semibold uppercase tracking-wider text-[#04846E] block">
                      1. {t('brandingModal.serviceTypeLabel', { ns: 'offers' })}
                    </label>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                      {/* Option: Bundle */}
                      <button
                        type="button"
                        onClick={() => setServiceType('bundle')}
                        className={`p-3.5 rounded-2xl border text-start transition-all cursor-pointer relative flex flex-col justify-between gap-2.5 ${
                          serviceType === 'bundle'
                            ? 'bg-white border-[#04846E] shadow-md ring-2 ring-[#04846E]/20'
                            : 'bg-white border-[#E2DFD5] hover:border-[#04846E]/40'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <div className="w-7 h-7 rounded-xl bg-[#04846E]/10 flex items-center justify-center text-[#04846E]">
                            <Zap className="w-3.5 h-3.5" />
                          </div>
                          <span className="text-[9px] font-heading font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#04846E] text-white">
                            Populaire
                          </span>
                        </div>
                        <div>
                          <span className="font-heading text-xs font-semibold text-[#123C32] block">
                            {t('brandingModal.types.bundle', { ns: 'offers' })}
                          </span>
                          <span className="text-[11px] text-[#5E6D68] block mt-0.5 leading-snug">
                            {t('brandingModal.types.bundleSub', { ns: 'offers' })}
                          </span>
                        </div>
                      </button>

                      {/* Option: Branding alone */}
                      <button
                        type="button"
                        onClick={() => setServiceType('branding')}
                        className={`p-3.5 rounded-2xl border text-start transition-all cursor-pointer relative flex flex-col justify-between gap-2.5 ${
                          serviceType === 'branding'
                            ? 'bg-white border-[#04846E] shadow-md ring-2 ring-[#04846E]/20'
                            : 'bg-white border-[#E2DFD5] hover:border-[#04846E]/40'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <div className="w-7 h-7 rounded-xl bg-[#04846E]/10 flex items-center justify-center text-[#04846E]">
                            <Palette className="w-3.5 h-3.5" />
                          </div>
                        </div>
                        <div>
                          <span className="font-heading text-xs font-semibold text-[#123C32] block">
                            {t('brandingModal.types.branding', { ns: 'offers' })}
                          </span>
                          <span className="text-[11px] text-[#5E6D68] block mt-0.5 leading-snug">
                            {t('brandingModal.types.brandingSub', { ns: 'offers' })}
                          </span>
                        </div>
                      </button>

                      {/* Option: Website alone */}
                      <button
                        type="button"
                        onClick={() => setServiceType('website')}
                        className={`p-3.5 rounded-2xl border text-start transition-all cursor-pointer relative flex flex-col justify-between gap-2.5 ${
                          serviceType === 'website'
                            ? 'bg-white border-[#04846E] shadow-md ring-2 ring-[#04846E]/20'
                            : 'bg-white border-[#E2DFD5] hover:border-[#04846E]/40'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <div className="w-7 h-7 rounded-xl bg-[#04846E]/10 flex items-center justify-center text-[#04846E]">
                            <Globe className="w-3.5 h-3.5" />
                          </div>
                        </div>
                        <div>
                          <span className="font-heading text-xs font-semibold text-[#123C32] block">
                            {t('brandingModal.types.website', { ns: 'offers' })}
                          </span>
                          <span className="text-[11px] text-[#5E6D68] block mt-0.5 leading-snug">
                            {t('brandingModal.types.websiteSub', { ns: 'offers' })}
                          </span>
                        </div>
                      </button>
                    </div>
                  </div>

                  {/* 2. Essential Contact Details */}
                  <div className="space-y-3.5 pt-1">
                    <label className="text-xs font-heading font-semibold uppercase tracking-wider text-[#04846E] block">
                      2. {t('brandingModal.contactDetails', { ns: 'offers' })}
                    </label>

                    {/* Row 1: Full Name & Company Name */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      <div className="space-y-1.5">
                        <label className="text-xs font-heading font-semibold text-[#123C32]">
                          {t('brandingModal.fullName', { ns: 'offers' })} *
                        </label>
                        <input
                          type="text"
                          required
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          placeholder={t('brandingModal.fullNamePh', { ns: 'offers' })}
                          className="w-full px-4 py-3 rounded-xl bg-white border border-[#E2DFD5] text-xs font-sans text-[#111817] placeholder:text-[#5E6D68]/50 focus:outline-hidden focus:border-[#04846E] focus:ring-2 focus:ring-[#04846E]/20 transition-all shadow-2xs"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-heading font-semibold text-[#123C32]">
                          {t('brandingModal.companyName', { ns: 'offers' })}
                        </label>
                        <input
                          type="text"
                          value={companyName}
                          onChange={(e) => setCompanyName(e.target.value)}
                          placeholder={t('brandingModal.companyNamePh', { ns: 'offers' })}
                          className="w-full px-4 py-3 rounded-xl bg-white border border-[#E2DFD5] text-xs font-sans text-[#111817] placeholder:text-[#5E6D68]/50 focus:outline-hidden focus:border-[#04846E] focus:ring-2 focus:ring-[#04846E]/20 transition-all shadow-2xs"
                        />
                      </div>
                    </div>

                    {/* Row 2: Email Address & Phone Number */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      <div className="space-y-1.5">
                        <label className="text-xs font-heading font-semibold text-[#123C32]">
                          {t('brandingModal.email', { ns: 'offers' })} *
                        </label>
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder={t('brandingModal.emailPh', { ns: 'offers' })}
                          className="w-full px-4 py-3 rounded-xl bg-white border border-[#E2DFD5] text-xs font-sans text-[#111817] placeholder:text-[#5E6D68]/50 focus:outline-hidden focus:border-[#04846E] focus:ring-2 focus:ring-[#04846E]/20 transition-all shadow-2xs"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-heading font-semibold text-[#123C32]">
                          {t('brandingModal.phone', { ns: 'offers' })} *
                        </label>
                        <input
                          type="tel"
                          required
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder={t('brandingModal.phonePh', { ns: 'offers' })}
                          className="w-full px-4 py-3 rounded-xl bg-white border border-[#E2DFD5] text-xs font-sans text-[#111817] placeholder:text-[#5E6D68]/50 focus:outline-hidden focus:border-[#04846E] focus:ring-2 focus:ring-[#04846E]/20 transition-all shadow-2xs"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Reassuring Commercial Notice */}
                  <div className="p-3.5 rounded-2xl bg-white border border-[#E2DFD5] flex items-center gap-3 shadow-2xs">
                    <div className="w-8 h-8 rounded-xl bg-[#04846E]/10 flex items-center justify-center text-[#04846E] shrink-0">
                      <Headphones className="w-4 h-4" />
                    </div>
                    <p className="text-[11px] sm:text-xs text-[#5E6D68] leading-relaxed font-normal">
                      {t('brandingModal.commercialNotice', { ns: 'offers' })}
                    </p>
                  </div>

                  {/* Actions Bar */}
                  <div className="pt-2 border-t border-[#E2DFD5] flex flex-col sm:flex-row items-center justify-between gap-3">
                    <button
                      type="button"
                      onClick={handleWhatsAppDirect}
                      className="w-full sm:w-auto px-5 py-3 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white font-heading text-xs font-semibold uppercase tracking-wider inline-flex items-center justify-center gap-2 shadow-sm transition-all cursor-pointer order-2 sm:order-1"
                    >
                      <WhatsAppIcon className="w-4 h-4" />
                      <span>{t('brandingModal.cta.sendWa', { ns: 'offers' })}</span>
                    </button>

                    <div className="flex items-center gap-3 w-full sm:w-auto order-1 sm:order-2">
                      <button
                        type="button"
                        onClick={onClose}
                        className="w-1/2 sm:w-auto px-5 py-3 rounded-full border border-[#E2DFD5] bg-white hover:bg-[#FAF9F5] text-xs font-heading font-semibold text-[#5E6D68] hover:text-[#123C32] transition-colors cursor-pointer"
                      >
                        {t('brandingModal.cta.close', { ns: 'offers' })}
                      </button>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-1/2 sm:w-auto farmio-btn-accent py-3 px-6 text-xs font-heading font-semibold uppercase tracking-wider cursor-pointer shadow-md inline-flex items-center justify-center gap-2 disabled:opacity-50"
                      >
                        <span>
                          {isSubmitting
                            ? t('brandingModal.cta.submitting', { ns: 'offers' })
                            : t('brandingModal.cta.submit', { ns: 'offers' })}
                        </span>
                        <ArrowRight className={`w-3.5 h-3.5 ${isRtl ? 'rotate-180' : ''}`} />
                      </button>
                    </div>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
};
