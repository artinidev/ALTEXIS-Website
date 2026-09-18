import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import {
  X,
  CheckCircle2,
  ShieldCheck,
  ArrowRight,
  Phone,
  MapPin,
  Calendar,
  Users,
  Copy,
  Check,
  Sparkles,
  ChevronDown,
  Building2,
  Laptop,
  DoorClosed,
  FileCheck2,
  Compass,
  Cpu,
  Award,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { WhatsAppIcon } from '../WhatsAppFloatingButton';

interface CompanySetupModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTopic?: string;
}

interface ServiceItem {
  id: string;
  categoryKey: string;
  category: { en: string; fr: string; ar: string };
  title: { en: string; fr: string; ar: string };
  price: { en: string; fr: string; ar: string };
  period?: { en: string; fr: string; ar: string };
  badge?: { en: string; fr: string; ar: string };
  popular?: boolean;
  icon: React.ComponentType<{ className?: string }>;
}

const SERVICE_ITEMS: ServiceItem[] = [
  // 1. Domiciliation
  {
    id: 'dom-silver',
    categoryKey: 's1',
    category: {
      fr: 'Domiciliation d’entreprises',
      en: 'Company Domiciliation',
      ar: 'التوطين التجاري وتوطين الشركات',
    },
    title: {
      fr: 'Formule Silver',
      en: 'Silver Plan',
      ar: 'باقة Silver',
    },
    price: { fr: '7 000 DZD', en: '7,000 DZD', ar: '7,000 د.ج' },
    period: { fr: '/ mois', en: '/ month', ar: '/ شهرياً' },
    badge: { fr: 'Facturation annuelle', en: 'Annual billing', ar: 'فوترة سنوية' },
    icon: Building2,
  },
  {
    id: 'dom-business',
    categoryKey: 's1',
    category: {
      fr: 'Domiciliation d’entreprises',
      en: 'Company Domiciliation',
      ar: 'التوطين التجاري وتوطين الشركات',
    },
    title: {
      fr: 'Formule Business',
      en: 'Business Plan',
      ar: 'باقة Business',
    },
    price: { fr: '12 000 DZD', en: '12,000 DZD', ar: '12,000 د.ج' },
    period: { fr: '/ mois', en: '/ month', ar: '/ شهرياً' },
    popular: true,
    badge: { fr: 'Recommandé', en: 'Recommended', ar: 'موصى بها' },
    icon: Award,
  },
  {
    id: 'dom-gold',
    categoryKey: 's1',
    category: {
      fr: 'Domiciliation d’entreprises',
      en: 'Company Domiciliation',
      ar: 'التوطين التجاري وتوطين الشركات',
    },
    title: {
      fr: 'Formule Gold',
      en: 'Gold Plan',
      ar: 'باقة Gold',
    },
    price: { fr: '18 000 DZD', en: '18,000 DZD', ar: '18,000 د.ج' },
    period: { fr: '/ mois', en: '/ month', ar: '/ شهرياً' },
    badge: { fr: 'Pack Premium', en: 'Premium Suite', ar: 'الباقة الشاملة' },
    icon: Building2,
  },

  // 2. Coworking & Bureaux
  {
    id: 'cw-coworking',
    categoryKey: 's2',
    category: {
      fr: 'Espace Coworking & Bureaux',
      en: 'Coworking & Offices',
      ar: 'مساحات العمل المشترك والمكاتب',
    },
    title: {
      fr: 'Poste Coworking',
      en: 'Coworking Desk',
      ar: 'مساحة عمل مشتركة (Coworking)',
    },
    price: { fr: '1 800 DZD', en: '1,800 DZD', ar: '1,800 د.ج' },
    period: { fr: '/ jour', en: '/ day', ar: '/ يومياً' },
    badge: { fr: 'Open Space', en: 'Open Space', ar: 'مساحة مفتوحة' },
    icon: Laptop,
  },
  {
    id: 'cw-bureau',
    categoryKey: 's2',
    category: {
      fr: 'Espace Coworking & Bureaux',
      en: 'Coworking & Offices',
      ar: 'مساحات العمل المشترك والمكاتب',
    },
    title: {
      fr: 'Bureau Privatif',
      en: 'Private Office',
      ar: 'مكتب خاص مؤثث',
    },
    price: { fr: '7 500 DZD', en: '7,500 DZD', ar: '7,500 د.ج' },
    period: { fr: '/ jour', en: '/ day', ar: '/ يومياً' },
    badge: { fr: 'Bureau Fermé', en: 'Lockable Office', ar: 'مكتب مغلق' },
    icon: DoorClosed,
  },
  {
    id: 'cw-salle',
    categoryKey: 's2',
    category: {
      fr: 'Espace Coworking & Bureaux',
      en: 'Coworking & Offices',
      ar: 'مساحات العمل المشترك والمكاتب',
    },
    title: {
      fr: 'Salle de réunion',
      en: 'Meeting Room',
      ar: 'قاعة اجتماعات',
    },
    price: { fr: '9 500 DZD', en: '9,500 DZD', ar: '9,500 د.ج' },
    period: { fr: '/ jour', en: '/ day', ar: '/ يومياً' },
    badge: { fr: '6 à 20 pers.', en: '6 to 20 seats', ar: '6 إلى 20 شخص' },
    icon: Users,
  },

  // 3. Services aux entreprises
  {
    id: 'as-creation',
    categoryKey: 's3',
    category: {
      fr: 'Services aux entreprises',
      en: 'Corporate & Business Services',
      ar: 'خدمات الشركات والأعمال',
    },
    title: {
      fr: 'Création d’entreprise',
      en: 'Company Creation',
      ar: 'تأسيس الشركات',
    },
    price: { fr: 'Sur devis', en: 'Custom quote', ar: 'حسب الطلب' },
    badge: { fr: 'SARL / EURL', en: 'SARL / EURL', ar: 'ش.ذ.م.م / ش.ش.و.ذ.م.م' },
    icon: FileCheck2,
  },
  {
    id: 'as-conseil',
    categoryKey: 's3',
    category: {
      fr: 'Services aux entreprises',
      en: 'Corporate & Business Services',
      ar: 'خدمات الشركات والأعمال',
    },
    title: {
      fr: 'Conseils & accompagnement',
      en: 'Advisory & Support',
      ar: 'الاستشارات والمرافقة الجبائية',
    },
    price: { fr: 'Sur devis', en: 'Custom quote', ar: 'حسب الطلب' },
    badge: { fr: 'Juridique / Fisc', en: 'Legal & Tax', ar: 'قانوني وجبائي' },
    icon: Compass,
  },
  {
    id: 'as-digital',
    categoryKey: 's3',
    category: {
      fr: 'Services aux entreprises',
      en: 'Corporate & Business Services',
      ar: 'خدمات الشركات والأعمال',
    },
    title: {
      fr: 'Transformation Digitale',
      en: 'Digital Transformation',
      ar: 'التحول الرقمي والأمن السيبراني',
    },
    price: { fr: 'Sur devis', en: 'Custom quote', ar: 'حسب الطلب' },
    badge: { fr: 'Web & Tech', en: 'Web & Tech', ar: 'تقنية وأمن معلومات' },
    icon: Cpu,
  },
];

// Helper to map an initial topic string to a matched item
const findServiceByTopic = (topic?: string): ServiceItem => {
  if (!topic) return SERVICE_ITEMS[1];
  const lower = topic.toLowerCase();

  if (lower.includes('silver')) return SERVICE_ITEMS[0];
  if (lower.includes('gold')) return SERVICE_ITEMS[2];
  if (lower.includes('business')) return SERVICE_ITEMS[1];
  if (lower.includes('coworking')) return SERVICE_ITEMS[3];
  if (lower.includes('privatif') || lower.includes('bureau')) return SERVICE_ITEMS[4];
  if (lower.includes('salle') || lower.includes('réunion') || lower.includes('meeting')) return SERVICE_ITEMS[5];
  if (lower.includes('création') || lower.includes('creation') || lower.includes('incorporation')) return SERVICE_ITEMS[6];
  if (lower.includes('conseil') || lower.includes('accompagnement') || lower.includes('advisory')) return SERVICE_ITEMS[7];
  if (lower.includes('digital') || lower.includes('transformation')) return SERVICE_ITEMS[8];

  return SERVICE_ITEMS[1];
};

export const CompanySetupModal: React.FC<CompanySetupModalProps> = ({
  isOpen,
  onClose,
  initialTopic = '',
}) => {
  const { t, i18n } = useTranslation(['offers', 'common']);
  const lang = (i18n.language || 'en') as 'en' | 'fr' | 'ar';
  const isRtl = lang === 'ar';

  const [fullName, setFullName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedItem, setSelectedItem] = useState<ServiceItem>(() => findServiceByTopic(initialTopic));
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [startDate, setStartDate] = useState('');
  const [teamSize, setTeamSize] = useState('1');
  const [notes, setNotes] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedRef, setSubmittedRef] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (initialTopic) {
      setSelectedItem(findServiceByTopic(initialTopic));
    }
  }, [initialTopic]);

  // Click outside listener for custom dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    if (isDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isDropdownOpen]);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      const generatedRef = `ALX-SETUP-${Math.floor(100000 + Math.random() * 900000)}`;
      setSubmittedRef(generatedRef);
      setIsSubmitting(false);
    }, 800);
  };

  const handleCopyRef = () => {
    if (submittedRef) {
      navigator.clipboard.writeText(submittedRef);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleReset = () => {
    setSubmittedRef(null);
    setFullName('');
    setCompanyName('');
    setEmail('');
    setPhone('');
    setNotes('');
    onClose();
  };

  const handleWhatsAppSubmit = () => {
    const itemTitle = selectedItem.title[lang] || selectedItem.title.fr;
    const itemCat = selectedItem.category[lang] || selectedItem.category.fr;
    const itemPrice = selectedItem.price[lang] || selectedItem.price.fr;
    const itemPeriod = selectedItem.period ? (selectedItem.period[lang] || selectedItem.period.fr) : '';

    let lines: string[] = [];

    if (lang === 'fr') {
      lines = [
        '👋 *Bonjour ALTEXIS*, je souhaite faire une demande pour :',
        `• *Prestation souhaitée* : ${itemTitle} (${itemPrice} ${itemPeriod})`,
        `• *Catégorie* : ${itemCat}`,
        fullName ? `• *Nom & Prénom* : ${fullName}` : '',
        companyName ? `• *Société / Projet* : ${companyName}` : '',
        phone ? `• *Téléphone* : ${phone}` : '',
        email ? `• *Email* : ${email}` : '',
        startDate ? `• *Démarrage souhaité* : ${startDate}` : '',
        teamSize ? `• *Nombre de personnes* : ${teamSize}` : '',
        notes ? `• *Précisions / Besoins* : ${notes}` : '',
      ];
    } else if (lang === 'ar') {
      lines = [
        '👋 *مرحباً ألتيكسيس (ALTEXIS)*، أود تقديم طلب بخصوص:',
        `• *الخدمة / الباقة المطلوبة* : ${itemTitle} (${itemPrice} ${itemPeriod})`,
        `• *القسم* : ${itemCat}`,
        fullName ? `• *الاسم واللقب* : ${fullName}` : '',
        companyName ? `• *الشركة / المشروع* : ${companyName}` : '',
        phone ? `• *رقم الهاتف* : ${phone}` : '',
        email ? `• *البريد الإلكتروني* : ${email}` : '',
        startDate ? `• *تاريخ البدء المطلوب* : ${startDate}` : '',
        teamSize ? `• *عدد الأفراد* : ${teamSize}` : '',
        notes ? `• *ملاحظات وتفاصيل* : ${notes}` : '',
      ];
    } else {
      lines = [
        '👋 *Hello ALTEXIS*, I would like to submit an inquiry for:',
        `• *Requested Service / Plan* : ${itemTitle} (${itemPrice} ${itemPeriod})`,
        `• *Category* : ${itemCat}`,
        fullName ? `• *Full Name* : ${fullName}` : '',
        companyName ? `• *Company / Project* : ${companyName}` : '',
        phone ? `• *Phone Number* : ${phone}` : '',
        email ? `• *Email Address* : ${email}` : '',
        startDate ? `• *Desired Start Date* : ${startDate}` : '',
        teamSize ? `• *Team Size* : ${teamSize}` : '',
        notes ? `• *Notes / Requirements* : ${notes}` : '',
      ];
    }

    const text = encodeURIComponent(lines.filter(Boolean).join('\n'));
    window.open(`https://wa.me/213560189825?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  // Group items by categoryKey for the custom popover
  const categoryKeys = Array.from(new Set(SERVICE_ITEMS.map((item) => item.categoryKey)));

  const SelectedIcon = selectedItem.icon;
  const currentTitle = selectedItem.title[lang] || selectedItem.title.fr;
  const currentCategory = selectedItem.category[lang] || selectedItem.category.fr;
  const currentPrice = selectedItem.price[lang] || selectedItem.price.fr;
  const currentPeriod = selectedItem.period ? (selectedItem.period[lang] || selectedItem.period.fr) : '';

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
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
              className={`relative w-full max-w-3xl rounded-[2.25rem] bg-[#FAF9F5] border border-[#E2DFD5] shadow-2xl p-6 sm:p-9 text-start pointer-events-auto font-sans cursor-default ${isRtl ? 'rtl' : 'ltr'}`}
              onClick={(e) => e.stopPropagation()}
            >
            {/* Modal Header */}
            <div className="flex items-start justify-between pb-5 mb-6 border-b border-[#E2DFD5]">
              <div className="space-y-1">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#04846E]/10 text-xs font-heading font-semibold text-[#04846E]">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{t('modal.badge', { ns: 'offers' })}</span>
                </div>
                <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-[#123C32] tracking-tight">
                  {t('modal.title', { ns: 'offers' })}
                </h2>
                <p className="text-xs sm:text-sm text-[#5E6D68]">
                  {t('modal.subtitle', { ns: 'offers' })}
                </p>
              </div>

              <button
                onClick={onClose}
                className="p-2.5 rounded-full bg-white hover:bg-[#123C32] hover:text-[#8EDB68] text-[#123C32] border border-[#E2DFD5] transition-colors cursor-pointer shrink-0 ml-3"
                aria-label={t('modal.close', { ns: 'offers' })}
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Success State */}
            {submittedRef ? (
              <div className="py-8 text-center space-y-6">
                <div className="w-16 h-16 rounded-full bg-[#04846E]/10 text-[#04846E] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10 text-[#04846E]" />
                </div>

                <div className="space-y-2 max-w-md mx-auto">
                  <h3 className="font-heading text-2xl font-semibold text-[#123C32]">
                    {t('modal.successTitle', { ns: 'offers' })}
                  </h3>
                  <p className="text-sm text-[#5E6D68] leading-relaxed">
                    {t('modal.successDesc', { ns: 'offers' })}
                  </p>
                </div>

                {/* Reference ID card */}
                <div className="p-5 rounded-2xl bg-white border border-[#E2DFD5] max-w-md mx-auto space-y-3">
                  <span className="text-xs font-heading text-[#5E6D68] block">
                    {t('modal.refLabel', { ns: 'offers' })}
                  </span>
                  <div className="flex items-center justify-center gap-3">
                    <span className="font-heading text-xl font-semibold text-[#04846E]">
                      {submittedRef}
                    </span>
                    <button
                      onClick={handleCopyRef}
                      className="p-2 rounded-xl bg-[#F5F3EA] hover:bg-[#E2DFD5] text-[#123C32] transition-colors cursor-pointer inline-flex items-center gap-1.5 text-xs font-heading font-semibold"
                    >
                      {copied ? (
                        <>
                          <Check className="w-4 h-4 text-[#04846E]" />
                          <span>{t('modal.copied', { ns: 'offers' })}</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4" />
                          <span>{t('modal.copy', { ns: 'offers' })}</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

                <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
                  <button
                    onClick={() => {
                      let followMsg = `👋 Bonjour ALTEXIS, voici ma référence de dossier : *${submittedRef}* pour l'offre *${currentTitle}*.`;
                      if (lang === 'ar') {
                        followMsg = `👋 مرحباً ألتيكسيس، هذا هو رقم الملف المرجعي الخاص بي: *${submittedRef}* بخصوص *${currentTitle}*.`;
                      } else if (lang === 'en') {
                        followMsg = `👋 Hello ALTEXIS, here is my reference ID: *${submittedRef}* for the plan *${currentTitle}*.`;
                      }
                      const text = encodeURIComponent(followMsg);
                      window.open(`https://wa.me/213560189825?text=${text}`, '_blank', 'noopener,noreferrer');
                    }}
                    className="py-3.5 px-6 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white font-heading text-xs font-semibold uppercase tracking-wider inline-flex items-center gap-2 shadow-md cursor-pointer transition-all active:scale-[0.98]"
                  >
                    <WhatsAppIcon className="w-4 h-4" />
                    <span>{t('modal.followWa', { ns: 'offers' })}</span>
                  </button>

                  <button
                    onClick={handleReset}
                    className="farmio-btn-accent px-7 py-3.5 text-xs font-heading font-semibold uppercase tracking-wider cursor-pointer shadow-md"
                  >
                    {t('modal.close', { ns: 'offers' })}
                  </button>

                  <a
                    href="https://wa.me/213560189825"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="farmio-btn-outline px-5 py-3.5 text-xs font-heading font-semibold uppercase tracking-wider inline-flex items-center gap-2 cursor-pointer"
                  >
                    <Phone className="w-4 h-4" />
                    <span>{t('modal.directCall', { ns: 'offers' })} (0560 18 98 25)</span>
                  </a>
                </div>
              </div>
            ) : (
              /* Input Form */
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* 1. Custom Designed Service Selector Dropdown */}
                <div className="space-y-2" ref={dropdownRef}>
                  <label className="block text-xs font-heading font-semibold uppercase tracking-wider text-[#123C32] flex items-center justify-between">
                    <span>{t('modal.serviceLabel', { ns: 'offers' })} <span className="text-red-500">*</span></span>
                    <span className="text-[11px] font-sans font-normal text-[#5E6D68]">
                      {currentCategory}
                    </span>
                  </label>

                  {/* Custom Trigger Button */}
                  <div className="relative">
                    <button
                      type="button"
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                      className={`w-full px-4 py-3.5 rounded-2xl bg-white border text-start flex items-center justify-between gap-3 shadow-xs transition-all duration-200 cursor-pointer ${
                        isDropdownOpen
                          ? 'border-[#04846E] ring-2 ring-[#04846E]/20 shadow-md'
                          : 'border-[#E2DFD5] hover:border-[#04846E]/40'
                      }`}
                    >
                      <div className="flex items-center gap-3.5 min-w-0">
                        <div className="p-2.5 rounded-xl bg-[#04846E]/10 text-[#04846E] shrink-0">
                          <SelectedIcon className="w-5 h-5" />
                        </div>

                        <div className="flex flex-col min-w-0">
                          <div className="flex items-center gap-2">
                            <span className="font-heading text-sm font-semibold text-[#123C32] truncate">
                              {currentTitle}
                            </span>
                            {selectedItem.popular && (
                              <span className="px-2 py-0.5 rounded-full bg-[#8EDB68]/25 text-[#123C32] font-heading text-[10px] font-semibold uppercase tracking-wide">
                                {t('sections.s1.business.badge', { ns: 'offers' })}
                              </span>
                            )}
                          </div>
                          <span className="text-xs font-sans text-[#5E6D68] truncate">
                            {currentCategory} • <strong className="text-[#04846E]">{currentPrice}</strong> {currentPeriod}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 shrink-0">
                        <span className="hidden sm:inline-flex px-3 py-1 rounded-xl bg-[#F5F3EA] text-xs font-heading font-extrabold text-[#123C32]">
                          {currentPrice}
                        </span>
                        <ChevronDown
                          className={`w-5 h-5 text-[#5E6D68] transition-transform duration-200 ${
                            isDropdownOpen ? 'rotate-180 text-[#04846E]' : ''
                          }`}
                        />
                      </div>
                    </button>

                    {/* Custom Animated Dropdown Popover */}
                    <AnimatePresence>
                      {isDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: -6, scale: 0.98 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: -6, scale: 0.98 }}
                          transition={{ duration: 0.16, ease: 'easeOut' }}
                          className="absolute top-full left-0 right-0 mt-2 z-40 rounded-3xl bg-white border border-[#E2DFD5] shadow-2xl p-3 max-h-[380px] overflow-y-auto space-y-4"
                        >
                          {categoryKeys.map((catKey) => {
                            const catItems = SERVICE_ITEMS.filter((i) => i.categoryKey === catKey);
                            const groupHeader = catItems[0]?.category[lang] || catItems[0]?.category.fr;

                            return (
                              <div key={catKey} className="space-y-1.5">
                                {/* Group Title */}
                                <div className="px-3 pt-1 pb-0.5 text-[11px] font-heading font-extrabold uppercase tracking-wider text-[#5E6D68]/80">
                                  {groupHeader}
                                </div>

                                {/* Items */}
                                <div className="space-y-1">
                                  {catItems.map((item) => {
                                    const isSelected = selectedItem.id === item.id;
                                    const ItemIcon = item.icon;
                                    const itemTitle = item.title[lang] || item.title.fr;
                                    const itemBadge = item.badge ? (item.badge[lang] || item.badge.fr) : '';
                                    const itemPrice = item.price[lang] || item.price.fr;
                                    const itemPeriod = item.period ? (item.period[lang] || item.period.fr) : '';

                                    return (
                                      <button
                                        type="button"
                                        key={item.id}
                                        onClick={() => {
                                          setSelectedItem(item);
                                          setIsDropdownOpen(false);
                                        }}
                                        className={`w-full p-3 rounded-2xl flex items-center justify-between gap-3 text-start transition-all cursor-pointer ${
                                          isSelected
                                            ? 'bg-[#04846E]/10 border border-[#04846E]/30 text-[#123C32]'
                                            : 'hover:bg-[#F5F3EA] border border-transparent text-[#111817]'
                                        }`}
                                      >
                                        <div className="flex items-center gap-3 min-w-0">
                                          <div
                                            className={`p-2 rounded-xl shrink-0 transition-colors ${
                                              isSelected
                                                ? 'bg-[#04846E] text-white'
                                                : 'bg-[#F5F3EA] text-[#04846E]'
                                            }`}
                                          >
                                            <ItemIcon className="w-4 h-4" />
                                          </div>

                                          <div className="flex flex-col min-w-0">
                                            <div className="flex items-center gap-2">
                                              <span className="font-heading text-xs sm:text-sm font-semibold truncate">
                                                {itemTitle}
                                              </span>
                                              {item.popular && (
                                                <span className="px-2 py-0.5 rounded-full bg-[#8EDB68] text-[#123C32] text-[9px] font-semibold uppercase tracking-wider">
                                                  {t('sections.s1.business.badge', { ns: 'offers' })}
                                                </span>
                                              )}
                                            </div>
                                            {itemBadge && (
                                              <span className="text-[11px] font-sans text-[#5E6D68]">
                                                {itemBadge}
                                              </span>
                                            )}
                                          </div>
                                        </div>

                                        <div className="flex items-center gap-2.5 shrink-0">
                                          <span className="text-xs font-heading font-semibold text-[#04846E]">
                                            {itemPrice} <span className="text-[10px] text-[#5E6D68] font-normal">{itemPeriod}</span>
                                          </span>
                                          {isSelected && (
                                            <div className="w-5 h-5 rounded-full bg-[#04846E] text-white flex items-center justify-center shrink-0">
                                              <Check className="w-3 h-3" />
                                            </div>
                                          )}
                                        </div>
                                      </button>
                                    );
                                  })}
                                </div>
                              </div>
                            );
                          })}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                {/* 2. Personal & Company Info (2-column Grid) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="block text-xs font-medium text-[#123C32]">
                      {t('modal.name', { ns: 'offers' })} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder={t('modal.namePh', { ns: 'offers' })}
                      className="w-full px-4 py-3 rounded-2xl bg-white border border-[#E2DFD5] text-sm font-sans text-[#111817] focus:outline-hidden focus:border-[#04846E] focus:ring-2 focus:ring-[#04846E]/20 transition-all placeholder:text-[#5E6D68]/50"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-xs font-medium text-[#123C32]">
                      {t('modal.company', { ns: 'offers' })} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      placeholder={t('modal.companyPh', { ns: 'offers' })}
                      className="w-full px-4 py-3 rounded-2xl bg-white border border-[#E2DFD5] text-sm font-sans text-[#111817] focus:outline-hidden focus:border-[#04846E] focus:ring-2 focus:ring-[#04846E]/20 transition-all placeholder:text-[#5E6D68]/50"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-xs font-medium text-[#123C32]">
                      {t('modal.email', { ns: 'offers' })} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder={t('modal.emailPh', { ns: 'offers' })}
                      className="w-full px-4 py-3 rounded-2xl bg-white border border-[#E2DFD5] text-sm font-sans text-[#111817] focus:outline-hidden focus:border-[#04846E] focus:ring-2 focus:ring-[#04846E]/20 transition-all placeholder:text-[#5E6D68]/50"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-xs font-medium text-[#123C32]">
                      {t('modal.phone', { ns: 'offers' })} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder={t('modal.phonePh', { ns: 'offers' })}
                      className="w-full px-4 py-3 rounded-2xl bg-white border border-[#E2DFD5] text-sm font-sans text-[#111817] focus:outline-hidden focus:border-[#04846E] focus:ring-2 focus:ring-[#04846E]/20 transition-all placeholder:text-[#5E6D68]/50"
                    />
                  </div>
                </div>

                {/* 3. Operational Details: Desired Start Date & Team Size */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-1">
                  <div className="space-y-1.5">
                    <label className="block text-xs font-medium text-[#123C32] flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-[#04846E]" />
                      <span>{t('modal.startDate', { ns: 'offers' })}</span>
                    </label>
                    <input
                      type="text"
                      value={startDate}
                      onChange={(e) => setStartDate(e.target.value)}
                      placeholder={t('modal.startDatePh', { ns: 'offers' })}
                      className="w-full px-4 py-3 rounded-2xl bg-white border border-[#E2DFD5] text-sm font-sans text-[#111817] focus:outline-hidden focus:border-[#04846E] focus:ring-2 focus:ring-[#04846E]/20 transition-all placeholder:text-[#5E6D68]/50"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-xs font-medium text-[#123C32] flex items-center gap-1.5">
                      <Users className="w-3.5 h-3.5 text-[#04846E]" />
                      <span>{t('modal.teamSize', { ns: 'offers' })}</span>
                    </label>
                    <select
                      value={teamSize}
                      onChange={(e) => setTeamSize(e.target.value)}
                      className="w-full px-4 py-3 rounded-2xl bg-white border border-[#E2DFD5] text-sm font-sans text-[#111817] focus:outline-hidden focus:border-[#04846E] focus:ring-2 focus:ring-[#04846E]/20 transition-all cursor-pointer"
                    >
                      <option value="1">{t('modal.team1', { ns: 'offers' })}</option>
                      <option value="2-4">{t('modal.team2', { ns: 'offers' })}</option>
                      <option value="5-10">{t('modal.team3', { ns: 'offers' })}</option>
                      <option value="10+">{t('modal.team4', { ns: 'offers' })}</option>
                    </select>
                  </div>
                </div>

                {/* 4. Notes / Specifications */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-medium text-[#123C32]">
                    {t('modal.notes', { ns: 'offers' })}
                  </label>
                  <textarea
                    rows={3}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder={t('modal.notesPh', { ns: 'offers' })}
                    className="w-full px-4 py-3 rounded-2xl bg-white border border-[#E2DFD5] text-sm font-sans text-[#111817] focus:outline-hidden focus:border-[#04846E] focus:ring-2 focus:ring-[#04846E]/20 transition-all resize-none placeholder:text-[#5E6D68]/50"
                  />
                </div>

                {/* Trust and Submit row */}
                <div className="pt-3 border-t border-[#E2DFD5] space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-sans text-[#5E6D68]">
                    <div className="flex items-center gap-1.5 font-medium">
                      <ShieldCheck className="w-4 h-4 text-[#04846E]" />
                      <span>{t('modal.trust1', { ns: 'offers' })}</span>
                    </div>
                    <div className="flex items-center gap-1.5 font-medium">
                      <MapPin className="w-4 h-4 text-[#04846E]" />
                      <span>{t('modal.trust2', { ns: 'offers' })}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center justify-end gap-3 pt-2">
                    <button
                      type="button"
                      onClick={onClose}
                      className="px-5 py-3 rounded-full text-xs font-medium text-[#5E6D68] hover:bg-black/5 transition-colors cursor-pointer"
                    >
                      {t('modal.cancel', { ns: 'offers' })}
                    </button>

                    <button
                      type="button"
                      onClick={handleWhatsAppSubmit}
                      className="py-3.5 px-6 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white font-semibold text-xs uppercase tracking-wider inline-flex items-center gap-2 shadow-md cursor-pointer transition-all active:scale-[0.98]"
                    >
                      <WhatsAppIcon className="w-4 h-4" />
                      <span>{t('modal.sendWa', { ns: 'offers' })}</span>
                    </button>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="farmio-btn-accent px-7 py-3.5 text-xs font-semibold uppercase tracking-wider cursor-pointer inline-flex items-center gap-2 shadow-lg disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <span>{t('modal.sending', { ns: 'offers' })}</span>
                      ) : (
                        <>
                          <span>{t('modal.sendEmail', { ns: 'offers' })}</span>
                          <ArrowRight className={`w-4 h-4 ${isRtl ? 'rotate-180' : ''}`} />
                        </>
                      )}
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
