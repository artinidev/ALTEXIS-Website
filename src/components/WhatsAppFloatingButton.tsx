import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import {
  X,
  Building2,
  PackageCheck,
  FileCheck2,
  ArrowRight,
  ShieldCheck,
} from 'lucide-react';

const WHATSAPP_NUMBER = '213670132353';

// Official WhatsApp SVG Brand Icon
export const WhatsAppIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12.004 2C6.48 2 2 6.48 2 12.004c0 1.765.46 3.486 1.332 5.004L2 22l5.143-1.314a9.96 9.96 0 0 0 4.861 1.318c5.524 0 10.004-4.48 10.004-10.004C22.008 6.48 17.528 2 12.004 2zm0 18.334a8.31 8.31 0 0 1-4.238-1.16l-.304-.18-3.149.826.84-3.07-.198-.316a8.31 8.31 0 0 1-1.28-4.43c0-4.593 3.738-8.331 8.331-8.331 4.593 0 8.331 3.738 8.331 8.331 0 4.593-3.738 8.33-8.333 8.33zm4.569-6.236c-.251-.125-1.485-.733-1.715-.817-.23-.084-.397-.125-.564.125-.167.251-.648.817-.794.984-.146.167-.293.188-.544.063-.251-.125-1.059-.39-2.016-1.244-.745-.664-1.248-1.484-1.394-1.735-.146-.251-.016-.387.11-.512.112-.112.251-.293.376-.439.125-.146.167-.251.251-.418.084-.167.042-.314-.021-.439-.063-.125-.564-1.36-.773-1.863-.204-.49-.411-.423-.564-.431h-.481c-.167 0-.439.063-.669.314-.23.251-.878.858-.878 2.093s.899 2.428 1.024 2.595c.125.167 1.768 2.7 4.284 3.785.599.259 1.067.414 1.432.53.602.191 1.15.164 1.583.099.483-.072 1.485-.607 1.694-1.193.209-.586.209-1.088.146-1.193-.063-.105-.23-.167-.481-.293z" />
  </svg>
);

interface LocalizedString {
  fr: string;
  en: string;
  ar: string;
}

interface QuickTopic {
  id: string;
  title: LocalizedString;
  subtitle: LocalizedString;
  badge: LocalizedString;
  icon: React.ComponentType<{ className?: string }>;
  iconBg: string;
  iconColor: string;
  message: LocalizedString;
}

const QUICK_TOPICS: QuickTopic[] = [
  {
    id: 'domiciliation',
    title: {
      fr: 'Domiciliation & Centre d’Affaires',
      en: 'Domiciliation & Business Center',
      ar: 'التوطين التجاري ومساحات العمل',
    },
    subtitle: {
      fr: 'Formules Silver, Business & Bureaux',
      en: 'Silver, Business & Private Offices',
      ar: 'باقات Silver، Business والمكاتب الخاصة',
    },
    badge: {
      fr: 'Dély Ibrahim',
      en: 'Dely Ibrahim',
      ar: 'دالي إبراهيم',
    },
    icon: Building2,
    iconBg: 'bg-[#04846E]/10',
    iconColor: 'text-[#04846E]',
    message: {
      fr: 'Bonjour ALTEXIS, je souhaite avoir des informations sur vos offres de Domiciliation d’entreprises et d’espaces de travail à Dély Ibrahim.',
      en: 'Hello ALTEXIS, I would like to inquire about your company domiciliation plans and workspaces in Dely Ibrahim.',
      ar: 'مرحباً ألتيكسيس، أود الحصول على معلومات وتفاصيل حول باقات التوطين التجاري ومساحات العمل في دالي إبراهيم.',
    },
  },
  {
    id: 'sourcing',
    title: {
      fr: 'Sourcing Industriel & Achats B2B',
      en: 'Industrial Sourcing & Procurement',
      ar: 'المشتريات والتوريد الصناعي B2B',
    },
    subtitle: {
      fr: 'Équipements, usines vérifiées & devis',
      en: 'Equipment, verified plants & RFQs',
      ar: 'المعدات، المصانع المعتمدة وعروض الأسعار',
    },
    badge: {
      fr: 'Global Desk',
      en: 'Global Desk',
      ar: 'مكتب دولي',
    },
    icon: PackageCheck,
    iconBg: 'bg-[#123C32]/10',
    iconColor: 'text-[#123C32]',
    message: {
      fr: 'Bonjour ALTEXIS, je souhaite entrer en contact avec votre bureau d’achat pour une demande de Sourcing et d’approvisionnement industriel.',
      en: 'Hello ALTEXIS, I would like to connect with your procurement desk regarding an industrial sourcing requirement.',
      ar: 'مرحباً ألتيكسيس، أود التواصل مع مكتب المشتريات بخصوص طلب توريد ومشتريات صناعية دولية.',
    },
  },
  {
    id: 'creation',
    title: {
      fr: 'Création d’Entreprise & Conseil',
      en: 'Company Setup & Advisory',
      ar: 'إنشاء الشركات والاستشارات',
    },
    subtitle: {
      fr: 'Statuts juridiques, fiscalité & pack complet',
      en: 'Legal structure, tax & full setup',
      ar: 'التأسيس القانوني، الجباية والباقات الشاملة',
    },
    badge: {
      fr: 'Sur Mesure',
      en: 'Turnkey',
      ar: 'شامل ومتكامل',
    },
    icon: FileCheck2,
    iconBg: 'bg-[#8EDB68]/20',
    iconColor: 'text-[#04846E]',
    message: {
      fr: 'Bonjour ALTEXIS, je souhaite être accompagné pour la création de ma société / conseil juridique et fiscal en Algérie.',
      en: 'Hello ALTEXIS, I would like guidance on company creation, legal and tax advisory services in Algeria.',
      ar: 'مرحباً ألتيكسيس، أود المرافقة في إنشاء شركتي والاستفادة من الاستشارات القانونية والجبائية في الجزائر.',
    },
  },
];

export const WhatsAppFloatingButton: React.FC = () => {
  const { i18n } = useTranslation();
  const lang = (i18n.language || 'fr') as 'fr' | 'en' | 'ar';
  const isRtl = lang === 'ar';

  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const openWhatsApp = (customMsg?: string) => {
    let defaultMsg = 'Bonjour ALTEXIS, je souhaite me renseigner sur vos services.';
    if (lang === 'en') {
      defaultMsg = 'Hello ALTEXIS, I would like to inquire about your services.';
    } else if (lang === 'ar') {
      defaultMsg = 'مرحباً ألتيكسيس، أود الاستفسار عن خدماتكم.';
    }

    const text = encodeURIComponent(customMsg || defaultMsg);
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    setIsOpen(false);
  };

  const uiTexts = {
    fr: {
      headerTitle: 'Discuter sur WhatsApp',
      onlineStatus: 'Conseillers en ligne • Réponse rapide',
      chooseTopic: 'Choisissez votre sujet :',
      openDirect: 'Ouvrir une discussion directe',
      trustNotice: 'Discussion officielle ALTEXIS (+213 670 13 23 53)',
      closeAria: 'Fermer',
      triggerAria: 'Contacter sur WhatsApp',
    },
    en: {
      headerTitle: 'Chat on WhatsApp',
      onlineStatus: 'Advisors Online • Fast Response',
      chooseTopic: 'Choose your topic:',
      openDirect: 'Start Direct Discussion',
      trustNotice: 'Official ALTEXIS Desk (+213 670 13 23 53)',
      closeAria: 'Close',
      triggerAria: 'Contact on WhatsApp',
    },
    ar: {
      headerTitle: 'تحدث معنا عبر واتساب',
      onlineStatus: 'المستشارون متصلون • رد سريع',
      chooseTopic: 'اختر موضوع استفسارك:',
      openDirect: 'بدء محادثة مباشرة الآن',
      trustNotice: 'المكتب الرسمي لألتيكسيس (+213 670 13 23 53)',
      closeAria: 'إغلاق',
      triggerAria: 'تواصل معنا عبر واتساب',
    },
  }[lang] || {
    headerTitle: 'Discuter sur WhatsApp',
    onlineStatus: 'Conseillers en ligne • Réponse rapide',
    chooseTopic: 'Choisissez votre sujet :',
    openDirect: 'Ouvrir une discussion directe',
    trustNotice: 'Discussion officielle ALTEXIS (+213 670 13 23 53)',
    closeAria: 'Fermer',
    triggerAria: 'Contacter sur WhatsApp',
  };

  return (
    <div
      ref={containerRef}
      className="fixed bottom-6 right-6 items-end z-50 flex flex-col"
    >
      {/* Expandable Quick-Chat Popover Card */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.94 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className={`mb-4 w-[340px] sm:w-[380px] rounded-[2rem] bg-white border border-[#E2DFD5] shadow-2xl overflow-hidden ${
              isRtl ? 'rtl text-right' : 'ltr text-left'
            }`}
          >
            {/* Popover Header */}
            <div className="bg-[#123C32] text-white p-5 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#25D366]/20 rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-start justify-between relative z-10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-[#25D366] text-white flex items-center justify-center shadow-md shrink-0">
                    <WhatsAppIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-poppins text-base font-bold text-white leading-snug">
                      {uiTexts.headerTitle}
                    </h3>
                    <div className="flex items-center gap-2 mt-0.5">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#8EDB68] opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-[#8EDB68]" />
                      </span>
                      <span className="text-[11px] font-poppins text-white/80">
                        {uiTexts.onlineStatus}
                      </span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer shrink-0"
                  aria-label={uiTexts.closeAria}
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Quick-Option Selection Cards */}
            <div className="p-4 space-y-2.5 bg-[#FAF9F5]">
              <span className="px-2 text-[11px] font-poppins font-bold uppercase tracking-wider text-[#5E6D68] block">
                {uiTexts.chooseTopic}
              </span>

              {QUICK_TOPICS.map((topic) => {
                const TopicIcon = topic.icon;
                const topicTitle = topic.title[lang] || topic.title.fr;
                const topicSubtitle = topic.subtitle[lang] || topic.subtitle.fr;
                const topicMessage = topic.message[lang] || topic.message.fr;

                return (
                  <button
                    key={topic.id}
                    onClick={() => openWhatsApp(topicMessage)}
                    className="w-full p-3 rounded-2xl bg-white hover:bg-[#F0EEE4] border border-[#E2DFD5] hover:border-[#04846E]/40 transition-all text-start flex items-center justify-between gap-3 group cursor-pointer shadow-xs"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div
                        className={`p-2.5 rounded-xl ${topic.iconBg} ${topic.iconColor} shrink-0 group-hover:scale-105 transition-transform`}
                      >
                        <TopicIcon className="w-4 h-4" />
                      </div>

                      <div className="flex flex-col min-w-0">
                        <div className="flex items-center gap-1.5">
                          <span className="font-poppins text-xs font-bold text-[#123C32] truncate">
                            {topicTitle}
                          </span>
                        </div>
                        <span className="text-[11px] font-poppins text-[#5E6D68] truncate">
                          {topicSubtitle}
                        </span>
                      </div>
                    </div>

                    <ArrowRight
                      className={`w-4 h-4 text-[#5E6D68] group-hover:text-[#04846E] transition-all shrink-0 ${
                        isRtl ? 'rotate-180 group-hover:-translate-x-0.5' : 'group-hover:translate-x-0.5'
                      }`}
                    />
                  </button>
                );
              })}

              {/* Direct Open General Discussion button */}
              <div className="pt-2">
                <button
                  onClick={() => openWhatsApp()}
                  className="w-full py-3 px-4 rounded-2xl bg-[#25D366] hover:bg-[#20ba5a] text-white font-poppins text-xs font-bold uppercase tracking-wider inline-flex items-center justify-center gap-2 shadow-md cursor-pointer transition-all active:scale-[0.98]"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  <span>{uiTexts.openDirect}</span>
                </button>
              </div>

              {/* Trust Subtext */}
              <div className="pt-1 flex items-center justify-center gap-1.5 text-[10px] font-poppins text-[#5E6D68]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#04846E]" />
                <span>{uiTexts.trustNotice}</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Action Trigger Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.94 }}
        className={`relative p-4 rounded-full shadow-2xl flex items-center justify-center cursor-pointer transition-colors duration-200 ${
          isOpen
            ? 'bg-[#123C32] text-white'
            : 'bg-[#25D366] text-white hover:bg-[#20ba5a]'
        }`}
        aria-label={uiTexts.triggerAria}
      >
        {/* Pulsing beacon behind when closed */}
        {!isOpen && (
          <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-30 animate-ping pointer-events-none" />
        )}

        {isOpen ? (
          <X className="w-7 h-7" />
        ) : (
          <WhatsAppIcon className="w-7 h-7" />
        )}

        {/* Small live status dot */}
        {!isOpen && (
          <span className="absolute top-1 right-1 w-3.5 h-3.5 rounded-full bg-[#8EDB68] border-2 border-white" />
        )}
      </motion.button>
    </div>
  );
};
