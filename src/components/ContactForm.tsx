import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { UploadCloud, CheckCircle2, ArrowRight, ShieldCheck, Copy, Check, FileText, Mail, Phone, MapPin, Globe } from 'lucide-react';
import { MotionReveal } from './MotionReveal';
import { WhatsAppIcon } from './WhatsAppFloatingButton';

interface ContactFormProps {
  initialService?: string;
  isModal?: boolean;
  onClose?: () => void;
}

export const ContactForm: React.FC<ContactFormProps> = ({
  initialService = '',
  isModal = false,
  onClose,
}) => {
  const { i18n } = useTranslation();
  const lang = (i18n.language || 'en') as 'en' | 'fr' | 'ar';
  const isRtl = lang === 'ar';

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    product: initialService ? `${initialService}` : '',
    quantity: '',
    destination: '',
    deliveryDate: '',
    specs: '',
    file: null as string | null,
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedRef, setSubmittedRef] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const content = {
    en: {
      eyebrow: 'DIRECT INTAKE DESK & CONTACTS',
      headline: 'Tell us what you need.',
      subtitle: 'Connect directly with our international procurement desk to source industrial equipment, audit suppliers, or normalize quotations.',
      cards: {
        email: 'Email',
        phone: 'Phone',
        address: 'Address',
        addressVal: 'Residence El Ferdous, Ain Allah, Dely Brahim, Alger',
        addressShort: 'Residence El Ferdous, Alger',
        desks: 'Global Desks',
        desksVal: 'USA, Algeria, Dubai, Singapore',
      },
      fields: {
        name: 'Full Name',
        namePlaceholder: 'e.g. Marcus Vance',
        company: 'Company Name',
        companyPlaceholder: 'e.g. Apex Industrial Ltd.',
        email: 'Business Email',
        emailPlaceholder: 'm.vance@apexenergy.com',
        phone: 'Phone Number',
        phonePlaceholder: '+213 670 13 23 53',
        product: 'Product / Category',
        productPlaceholder: 'e.g. Forged Flanges & High-Pressure Valves',
        quantity: 'Target Quantity',
        quantityPlaceholder: 'e.g. 5,000 Units / 80 Tons',
        drawing: 'Technical Drawing / RFQ File',
        dropzoneTitle: 'Drop PDF, CAD (STEP/DWG), or Excel',
        attached: 'Attached: ',
        dropzoneHint: 'Up to 50MB • Protected under NDA',
        notes: 'Technical Standards / Notes',
        notesPlaceholder: 'Material grades (e.g. 316L), testing specs (API 6D, NACE MR0175), or mill preference...',
        trustText: 'Buyer-Side Protected • Guaranteed 48h Direct Turnaround',
        submit: 'Submit Procurement Request',
        submitting: 'Routing to Desk...',
      },
      success: {
        title: 'Procurement Request Received',
        subtitle: 'Your technical specifications have been routed to our senior sourcing desk.',
        trackingId: 'Confidential Tracking ID',
        copy: 'Copy Tracking ID',
        copied: 'Copied',
        close: 'Close Window',
        another: 'Submit Another Request',
      },
    },
    fr: {
      eyebrow: 'BUREAU D’ACHAT & CONTACTS',
      headline: 'Dites-nous ce dont vous avez besoin.',
      subtitle: 'Entrez en contact direct avec notre bureau d’achat international pour sourcer vos équipements industriels, auditer des usines ou normaliser vos devis.',
      cards: {
        email: 'Email',
        phone: 'Téléphone',
        address: 'Adresse',
        addressVal: 'Résidence El Ferdous, Ain Allah, Dely Brahim, Alger',
        addressShort: 'Résidence El Ferdous, Alger',
        desks: 'Bureaux Internationaux',
        desksVal: 'USA, Algérie, Dubaï, Singapour',
      },
      fields: {
        name: 'Nom & Prénom',
        namePlaceholder: 'ex. Jean-Marc Laurent',
        company: 'Entreprise',
        companyPlaceholder: 'ex. Groupe Industriel Méditerranée',
        email: 'Email Professionnel',
        emailPlaceholder: 'jm.laurent@groupe-industrie.com',
        phone: 'Numéro de Téléphone',
        phonePlaceholder: '+213 670 13 23 53',
        product: 'Produit / Équipement',
        productPlaceholder: 'ex. Brides forgées & Vannes haute pression',
        quantity: 'Quantité Requise',
        quantityPlaceholder: 'ex. 5 000 Unités / 80 Tonnes',
        drawing: 'Plan Technique / Fichier RFQ',
        dropzoneTitle: 'Déposez vos fichiers PDF, CAO (STEP/DWG) ou Excel',
        attached: 'Fichier joint : ',
        dropzoneHint: 'Jusqu’à 50 Mo • Protégé sous accord NDA',
        notes: 'Spécifications Techniques / Normes',
        notesPlaceholder: 'Nuances d’aciers (ex. 316L), normes de contrôle (API 6D, NACE MR0175) ou préférences...',
        trustText: 'Protection Côté Acheteur • Réponse Directe sous 48h',
        submit: 'Envoyer la Demande d’Achat',
        submitting: 'Transmission en cours...',
      },
      success: {
        title: 'Demande d’Achat Enregistrée',
        subtitle: 'Vos spécifications techniques ont été transmises à notre bureau de sourcing senior.',
        trackingId: 'Identifiant de Suivi Confidentiel',
        copy: 'Copier le Numéro de Suivi',
        copied: 'Copié',
        close: 'Fermer la Fenêtre',
        another: 'Soumettre une Autre Demande',
      },
    },
    ar: {
      eyebrow: 'مكتب المشتريات والتواصل المباشر',
      headline: 'شاركنا تفاصيل متطلباتكم.',
      subtitle: 'تواصل مباشرة مع مكتب المشتريات والتوريد الدولي لتوريد المعدات الصناعية، وتدقيق المصانع، ومقارنة عروض الأسعار.',
      cards: {
        email: 'البريد الإلكتروني',
        phone: 'رقم الهاتف',
        address: 'العنوان',
        addressVal: 'إقامة الفردوس، عين الله، دالي براهيم، الجزائر',
        addressShort: 'إقامة الفردوس، دالي براهيم، الجزائر',
        desks: 'المكاتب الدولية',
        desksVal: 'الولايات المتحدة، الجزائر، دبي، سنغافورة',
      },
      fields: {
        name: 'الاسم الكامل',
        namePlaceholder: 'مثال: عبد القادر بن علي',
        company: 'اسم الشركة / المؤسسة',
        companyPlaceholder: 'مثال: مجمع الصناعات الوطنية',
        email: 'البريد الإلكتروني المهني',
        emailPlaceholder: 'a.benali@company.com',
        phone: 'رقم الهاتف',
        phonePlaceholder: '+213 670 13 23 53',
        product: 'المنتج / فئة التوريد',
        productPlaceholder: 'مثال: صمامات الضغط العالي والفلنجات المطروقة',
        quantity: 'الكمية المطلوبة',
        quantityPlaceholder: 'مثال: 5,000 قطعة / 80 طن',
        drawing: 'المخطط الهندسي / ملف كراسة الشروط',
        dropzoneTitle: 'اسحب وأفلت ملفات PDF أو CAD أو Excel',
        attached: 'تم إرفاق: ',
        dropzoneHint: 'حتى 50 ميجابايت • محمي باتفاقية سرية كاملة',
        notes: 'المعايير الفنية والملاحظات',
        notesPlaceholder: 'فئات المعادن (مثل 316L)، ومعايير الفحص (API 6D, NACE)، ومتطلبات المصانع...',
        trustText: 'حماية كاملة للمشتري • رد مباشر ومضمون خلال 48 ساعة',
        submit: 'إرسال طلب المشتريات',
        submitting: 'جاري توجيه الطلب للمختصين...',
      },
      success: {
        title: 'تم استلام طلب المشتريات بنجاح',
        subtitle: 'تم توجيه مواصفاتكم الفنية مباشرة إلى مكتب كبار مديري التوريد.',
        trackingId: 'رقم التتبع السري للطلب',
        copy: 'نسخ رقم التتبع',
        copied: 'تم النسخ',
        close: 'إغلاق النافذة',
        another: 'تقديم طلب آخر',
      },
    },
  };

  const current = content[lang] || content.en;

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, file: e.target.files[0].name });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      const generatedRef = `ALX-${Math.floor(1000 + Math.random() * 9000)}`;
      setSubmittedRef(generatedRef);
      setIsSubmitting(false);
    }, 800);
  };

  const handleCopy = () => {
    if (submittedRef) {
      navigator.clipboard.writeText(submittedRef);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  if (submittedRef) {
    return (
      <div className="rounded-[1.75rem] bg-white border border-[#8EDB68] p-6 sm:p-10 text-start shadow-xl">
        <div className="flex items-center gap-3.5 pb-5 mb-5 border-b border-[#E2DFD5]">
          <div className="w-12 h-12 rounded-xl bg-[#8EDB68]/20 border border-[#8EDB68] flex items-center justify-center text-[#123C32] shrink-0">
            <CheckCircle2 className="w-7 h-7 text-[#123C32]" />
          </div>
          <div>
            <h3 className="font-heading text-xl sm:text-2xl font-semibold text-[#123C32]">
              {current.success.title}
            </h3>
            <p className="text-xs sm:text-sm text-[#5E6D68] mt-0.5 font-secondary">
              {current.success.subtitle}
            </p>
          </div>
        </div>

        <div className="p-4 sm:p-5 rounded-xl bg-[#F5F3EA] border border-[#E2DFD5] flex items-center justify-between mb-6">
          <div>
            <span className="text-[11px] font-heading font-semibold text-[#5E6D68] uppercase tracking-wider block mb-0.5">
              {current.success.trackingId}
            </span>
            <span className="font-heading text-2xl sm:text-3xl font-bold text-[#123C32]">
              {submittedRef}
            </span>
          </div>

          <button
            onClick={handleCopy}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#D8D5CA] text-xs font-heading font-semibold text-[#123C32] hover:bg-[#F5F3EA] cursor-pointer transition-colors shadow-2xs"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-[#123C32]" /> : <Copy className="w-3.5 h-3.5 text-[#5E6D68]" />}
            <span>{copied ? current.success.copied : current.success.copy}</span>
          </button>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          {onClose && (
            <button
              onClick={onClose}
              className="farmio-btn-dark px-6 py-2.5 text-xs uppercase tracking-wider font-bold cursor-pointer"
            >
              {current.success.close}
            </button>
          )}

          <button
            onClick={() => {
              setSubmittedRef(null);
              setFormData({
                name: '',
                company: '',
                email: '',
                phone: '',
                product: '',
                quantity: '',
                destination: '',
                deliveryDate: '',
                specs: '',
                file: null,
                message: '',
              });
            }}
            className="px-5 py-2.5 rounded-full bg-[#E2DFD5] text-[#123C32] hover:bg-[#DCD7C8] text-xs font-heading font-semibold uppercase tracking-wider cursor-pointer transition-colors"
          >
            {current.success.another}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div id="contact" className={isModal ? '' : 'py-12 sm:py-18 bg-[#F5F3EA] text-[#111817] border-t border-[#E2DFD5]'}>
      <div className={isModal ? '' : 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'}>
        
        {!isModal && (
          <div className="mb-8 sm:mb-10 text-start">
            <MotionReveal delay={0.1}>
              <span className="text-xs font-heading font-semibold tracking-[0.18em] text-[#123C32] uppercase block mb-2">
                {current.eyebrow}
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#123C32] tracking-tight leading-[1.15]">
                {current.headline}
              </h2>
            </MotionReveal>

            <MotionReveal delay={0.15}>
              <p className="mt-2.5 text-sm sm:text-base text-[#5E6D68] font-normal leading-relaxed font-secondary max-w-3xl">
                {current.subtitle}
              </p>
            </MotionReveal>

            {/* Quick Contact & Desks Metadata Badges */}
            <MotionReveal delay={0.2}>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 mt-6 font-secondary">
                <a
                  href="mailto:admin@altexisai.com"
                  className="p-3.5 rounded-2xl bg-white border border-[#E2DFD5] flex items-center gap-3 hover:border-[#123C32] hover:shadow-sm transition-all text-start"
                >
                  <div className="w-9 h-9 rounded-xl bg-[#8EDB68]/20 flex items-center justify-center text-[#123C32] shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="overflow-hidden">
                    <span className="text-[10px] font-heading font-bold text-[#5E6D68] uppercase tracking-wider block">
                      {current.cards.email}
                    </span>
                    <span className="text-xs font-semibold text-[#123C32] truncate block">admin@altexisai.com</span>
                  </div>
                </a>

                <a
                  href="tel:+213670132353"
                  className="p-3.5 rounded-2xl bg-white border border-[#E2DFD5] flex items-center gap-3 hover:border-[#123C32] hover:shadow-sm transition-all text-start"
                >
                  <div className="w-9 h-9 rounded-xl bg-[#8EDB68]/20 flex items-center justify-center text-[#123C32] shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-heading font-bold text-[#5E6D68] uppercase tracking-wider block">
                      {current.cards.phone}
                    </span>
                    <span className="text-xs font-semibold text-[#123C32] block" dir="ltr">+213 670 13 23 53</span>
                  </div>
                </a>

                <div className="p-3.5 rounded-2xl bg-white border border-[#E2DFD5] flex items-center gap-3 text-start">
                  <div className="w-9 h-9 rounded-xl bg-[#8EDB68]/20 flex items-center justify-center text-[#123C32] shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div className="overflow-hidden">
                    <span className="text-[10px] font-heading font-bold text-[#5E6D68] uppercase tracking-wider block">
                      {current.cards.address}
                    </span>
                    <span className="text-xs font-semibold text-[#123C32] truncate block" title={current.cards.addressVal}>
                      {current.cards.addressShort}
                    </span>
                  </div>
                </div>

                <a
                  href="https://altexisai.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-2xl bg-white border border-[#E2DFD5] flex items-center gap-3 hover:border-[#123C32] hover:shadow-sm transition-all text-start"
                >
                  <div className="w-9 h-9 rounded-xl bg-[#8EDB68]/20 flex items-center justify-center text-[#123C32] shrink-0">
                    <Globe className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-heading font-bold text-[#5E6D68] uppercase tracking-wider block">
                      {current.cards.desks}
                    </span>
                    <span className="text-xs font-semibold text-[#123C32] block">{current.cards.desksVal}</span>
                  </div>
                </a>
              </div>
            </MotionReveal>
          </div>
        )}

        {/* Compact & Space-Optimized Executive Intake Card */}
        <div className="rounded-[1.75rem] sm:rounded-[2.25rem] bg-white p-5 sm:p-8 lg:p-10 border border-[#E2DFD5] shadow-xl text-start">
          <form onSubmit={handleSubmit} className="space-y-4 max-w-5xl">
            
            {/* Row 1 (3 Columns): Name, Company, Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4">
              <div>
                <label className="block text-[11px] sm:text-xs font-heading font-semibold uppercase tracking-wider text-[#123C32]/80 mb-1.5">
                  {current.fields.name} <span className="text-[#8EDB68] font-bold">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder={current.fields.namePlaceholder}
                  className="w-full px-3.5 py-2.5 sm:py-3 rounded-xl bg-[#F5F3EA]/70 hover:bg-[#F5F3EA] border border-[#D8D5CA] text-xs sm:text-sm text-[#111817] font-secondary placeholder-[#7E918C] focus:outline-hidden focus:border-[#123C32] focus:ring-2 focus:ring-[#8EDB68]/40 focus:bg-white transition-all duration-150 shadow-2xs"
                />
              </div>

              <div>
                <label className="block text-[11px] sm:text-xs font-heading font-semibold uppercase tracking-wider text-[#123C32]/80 mb-1.5">
                  {current.fields.company} <span className="text-[#8EDB68] font-bold">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  placeholder={current.fields.companyPlaceholder}
                  className="w-full px-3.5 py-2.5 sm:py-3 rounded-xl bg-[#F5F3EA]/70 hover:bg-[#F5F3EA] border border-[#D8D5CA] text-xs sm:text-sm text-[#111817] font-secondary placeholder-[#7E918C] focus:outline-hidden focus:border-[#123C32] focus:ring-2 focus:ring-[#8EDB68]/40 focus:bg-white transition-all duration-150 shadow-2xs"
                />
              </div>

              <div className="sm:col-span-2 lg:col-span-1">
                <label className="block text-[11px] sm:text-xs font-heading font-semibold uppercase tracking-wider text-[#123C32]/80 mb-1.5">
                  {current.fields.email} <span className="text-[#8EDB68] font-bold">*</span>
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder={current.fields.emailPlaceholder}
                  className="w-full px-3.5 py-2.5 sm:py-3 rounded-xl bg-[#F5F3EA]/70 hover:bg-[#F5F3EA] border border-[#D8D5CA] text-xs sm:text-sm text-[#111817] font-secondary placeholder-[#7E918C] focus:outline-hidden focus:border-[#123C32] focus:ring-2 focus:ring-[#8EDB68]/40 focus:bg-white transition-all duration-150 shadow-2xs"
                />
              </div>
            </div>

            {/* Row 2 (3 Columns): Phone, Product Category, Quantity */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4">
              <div>
                <label className="block text-[11px] sm:text-xs font-heading font-semibold uppercase tracking-wider text-[#123C32]/80 mb-1.5">
                  {current.fields.phone} <span className="text-[#8EDB68] font-bold">*</span>
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder={current.fields.phonePlaceholder}
                  dir="ltr"
                  className="w-full px-3.5 py-2.5 sm:py-3 rounded-xl bg-[#F5F3EA]/70 hover:bg-[#F5F3EA] border border-[#D8D5CA] text-xs sm:text-sm text-[#111817] font-secondary placeholder-[#7E918C] focus:outline-hidden focus:border-[#123C32] focus:ring-2 focus:ring-[#8EDB68]/40 focus:bg-white transition-all duration-150 shadow-2xs text-start"
                />
              </div>

              <div>
                <label className="block text-[11px] sm:text-xs font-heading font-semibold uppercase tracking-wider text-[#123C32]/80 mb-1.5">
                  {current.fields.product} <span className="text-[#8EDB68] font-bold">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.product}
                  onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                  placeholder={current.fields.productPlaceholder}
                  className="w-full px-3.5 py-2.5 sm:py-3 rounded-xl bg-[#F5F3EA]/70 hover:bg-[#F5F3EA] border border-[#D8D5CA] text-xs sm:text-sm text-[#111817] font-secondary placeholder-[#7E918C] focus:outline-hidden focus:border-[#123C32] focus:ring-2 focus:ring-[#8EDB68]/40 focus:bg-white transition-all duration-150 shadow-2xs"
                />
              </div>

              <div className="sm:col-span-2 lg:col-span-1">
                <label className="block text-[11px] sm:text-xs font-heading font-semibold uppercase tracking-wider text-[#123C32]/80 mb-1.5">
                  {current.fields.quantity} <span className="text-[#8EDB68] font-bold">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.quantity}
                  onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                  placeholder={current.fields.quantityPlaceholder}
                  className="w-full px-3.5 py-2.5 sm:py-3 rounded-xl bg-[#F5F3EA]/70 hover:bg-[#F5F3EA] border border-[#D8D5CA] text-xs sm:text-sm text-[#111817] font-secondary placeholder-[#7E918C] focus:outline-hidden focus:border-[#123C32] focus:ring-2 focus:ring-[#8EDB68]/40 focus:bg-white transition-all duration-150 shadow-2xs"
                />
              </div>
            </div>

            {/* Row 3 (2 Columns Split): Upload Drawing & Technical Notes */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-4 items-stretch">
              
              {/* Left: Compact Dropzone */}
              <div className="flex flex-col">
                <label className="block text-[11px] sm:text-xs font-heading font-semibold uppercase tracking-wider text-[#123C32]/80 mb-1.5">
                  {current.fields.drawing}
                </label>
                <label className="flex-1 flex items-center justify-center p-4 rounded-xl border-2 border-dashed border-[#D8D5CA] hover:border-[#8EDB68] bg-[#F5F3EA]/50 hover:bg-white cursor-pointer transition-all duration-150 group min-h-[92px]">
                  <div className="flex items-center gap-3 text-start">
                    <div className="w-10 h-10 rounded-xl bg-[#8EDB68]/20 flex items-center justify-center text-[#123C32] shrink-0 group-hover:scale-105 transition-transform">
                      {formData.file ? <FileText className="w-5 h-5 text-[#123C32]" /> : <UploadCloud className="w-5 h-5 text-[#123C32]" />}
                    </div>
                    <div>
                      <span className="text-xs font-heading font-semibold text-[#123C32] block leading-tight">
                        {formData.file ? `${current.fields.attached}${formData.file}` : current.fields.dropzoneTitle}
                      </span>
                      <span className="text-[11px] text-[#5E6D68] font-secondary font-normal mt-0.5 block">
                        {current.fields.dropzoneHint}
                      </span>
                    </div>
                  </div>
                  <input type="file" onChange={handleFileUpload} className="hidden" />
                </label>
              </div>

              {/* Right: Compact Notes Textarea */}
              <div className="flex flex-col">
                <label className="block text-[11px] sm:text-xs font-heading font-semibold uppercase tracking-wider text-[#123C32]/80 mb-1.5">
                  {current.fields.notes}
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder={current.fields.notesPlaceholder}
                  className="flex-1 w-full px-3.5 py-2.5 rounded-xl bg-[#F5F3EA]/70 hover:bg-[#F5F3EA] border border-[#D8D5CA] text-xs sm:text-sm text-[#111817] font-secondary placeholder-[#7E918C] focus:outline-hidden focus:border-[#123C32] focus:ring-2 focus:ring-[#8EDB68]/40 focus:bg-white transition-all duration-150 shadow-2xs resize-none"
                />
              </div>

            </div>

            {/* Bottom Actions Bar */}
            <div className="pt-3 mt-1 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-t border-[#E2DFD5]">
              <span className="text-xs font-secondary font-medium text-[#5E6D68] flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#123C32] shrink-0" />
                <span>{current.fields.trustText}</span>
              </span>

              <div className="flex flex-wrap items-center gap-2.5">
                <button
                  type="button"
                  onClick={() => {
                    const lines = [
                      '👋 *Bonjour ALTEXIS Procurement Desk*, voici ma demande de sourcing :',
                      formData.name ? `• *Nom* : ${formData.name}` : '',
                      formData.company ? `• *Société* : ${formData.company}` : '',
                      formData.product ? `• *Produit / Catégorie* : ${formData.product}` : '',
                      formData.quantity ? `• *Quantité visée* : ${formData.quantity}` : '',
                      formData.phone ? `• *Téléphone* : ${formData.phone}` : '',
                      formData.email ? `• *Email* : ${formData.email}` : '',
                      formData.message ? `• *Spécifications* : ${formData.message}` : '',
                    ].filter(Boolean);
                    const text = encodeURIComponent(lines.length > 1 ? lines.join('\n') : 'Bonjour ALTEXIS, je souhaite soumettre une demande de sourcing industriel.');
                    window.open(`https://wa.me/213670132353?text=${text}`, '_blank', 'noopener,noreferrer');
                  }}
                  className="py-3 px-5 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white font-heading text-xs font-bold uppercase tracking-wider inline-flex items-center justify-center gap-2 active:scale-[0.98] shadow-sm cursor-pointer shrink-0"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  <span>WhatsApp Desk</span>
                </button>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="farmio-btn-dark px-7 py-3 text-xs font-heading font-bold uppercase tracking-wider cursor-pointer disabled:opacity-50 inline-flex items-center justify-center gap-2.5 active:scale-[0.98] shadow-sm shrink-0"
                >
                  <span>{isSubmitting ? current.fields.submitting : current.fields.submit}</span>
                  <ArrowRight className={`w-3.5 h-3.5 ${isRtl ? 'rotate-180' : ''}`} />
                </button>
              </div>
            </div>

          </form>
        </div>

      </div>
    </div>
  );
};
