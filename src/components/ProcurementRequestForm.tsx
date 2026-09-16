import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  UploadCloud,
  CheckSquare,
  Square,
  ShieldCheck,
  CheckCircle2,
  Clock,
  ArrowRight,
  Copy,
  Check,
  User,
  Layers,
  MapPin
} from 'lucide-react';

interface ProcurementRequestFormProps {
  initialService?: string;
  isModal?: boolean;
  onClose?: () => void;
}

export const ProcurementRequestForm: React.FC<ProcurementRequestFormProps> = ({
  initialService = '',
  onClose,
}) => {
  const { t, i18n } = useTranslation(['rfq', 'common']);
  const isRtl = i18n.language === 'ar';

  const [formData, setFormData] = useState({
    product: '',
    quantity: '',
    specs: '',
    deliveryDate: '',
    destination: '',
    project: initialService ? `Context: ${initialService}` : '',
    fullName: '',
    company: '',
    email: '',
    phone: '',
    file: null as string | null,
  });

  const [selectedServices, setSelectedServices] = useState<string[]>([
    'sourcing',
    'verification',
    'comparison',
  ]);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedRef, setSubmittedRef] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const toggleService = (key: string) => {
    if (selectedServices.includes(key)) {
      setSelectedServices(selectedServices.filter((s) => s !== key));
    } else {
      setSelectedServices([...selectedServices, key]);
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, file: e.target.files[0].name });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      const randomRef = `PS-${Math.floor(1000 + Math.random() * 9000)}`;
      setSubmittedRef(randomRef);
      setIsSubmitting(false);
    }, 1200);
  };

  const handleCopyRef = () => {
    if (submittedRef) {
      navigator.clipboard.writeText(submittedRef);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  // Success State View
  if (submittedRef) {
    return (
      <div className="rounded-2xl bg-gradient-to-b from-[#0c1626] to-[#080d19] border border-emerald-500/40 p-6 sm:p-8 text-start shadow-2xl">
        <div className="flex items-center gap-3 pb-5 mb-5 border-b border-slate-800">
          <div className="w-12 h-12 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
            <CheckCircle2 className="w-7 h-7" />
          </div>
          <div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-white font-mono">
              {t('success.title', { ns: 'rfq' })}
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              {t('success.subtitle', { ns: 'rfq' })}
            </p>
          </div>
        </div>

        {/* Reference Badge */}
        <div className="p-4 rounded-xl bg-slate-950/80 border border-emerald-500/30 flex flex-wrap items-center justify-between gap-4 mb-6">
          <div>
            <span className="text-[11px] font-mono text-slate-400 block uppercase">
              {t('success.refLabel', { ns: 'rfq' })}
            </span>
            <span className="text-2xl sm:text-3xl font-black font-mono text-emerald-400 tracking-wider">
              {submittedRef}
            </span>
          </div>

          <button
            onClick={handleCopyRef}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-800 text-xs font-mono text-slate-200 hover:bg-slate-700 transition-colors cursor-pointer"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-slate-400" />}
            <span>{copied ? 'Copied' : 'Copy Reference'}</span>
          </button>
        </div>

        {/* SLA Notice */}
        <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 flex items-start gap-3 mb-6">
          <Clock className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
          <p className="text-xs text-slate-300 leading-relaxed font-mono">
            {t('success.timelineNotice', { ns: 'rfq' })}
          </p>
        </div>

        {/* Submitted Summary */}
        <div className="space-y-2 text-xs font-mono text-slate-300 pb-6 border-b border-slate-800">
          <div className="text-slate-400 font-bold uppercase text-[11px] mb-2">
            {t('success.summaryTitle', { ns: 'rfq' })}
          </div>
          <div className="flex justify-between py-1 border-b border-slate-900">
            <span className="text-slate-500">Item / Equipment:</span>
            <span className="text-white font-bold">{formData.product || 'High-Pressure Valve Requirement'}</span>
          </div>
          <div className="flex justify-between py-1 border-b border-slate-900">
            <span className="text-slate-500">Quantity:</span>
            <span className="text-white">{formData.quantity || '24 Units'}</span>
          </div>
          <div className="flex justify-between py-1 border-b border-slate-900">
            <span className="text-slate-500">Destination:</span>
            <span className="text-cyan-300">{formData.destination || 'Direct Port Delivery'}</span>
          </div>
          <div className="flex justify-between py-1 border-b border-slate-900">
            <span className="text-slate-500">Contact:</span>
            <span className="text-white">{formData.fullName} ({formData.company})</span>
          </div>
        </div>

        {/* Actions */}
        <div className="mt-6 flex flex-wrap items-center gap-3">
          {onClose && (
            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-mono font-bold cursor-pointer"
            >
              {t('success.ctaClose', { ns: 'rfq' })}
            </button>
          )}

          <button
            onClick={() => {
              setSubmittedRef(null);
              setFormData({
                product: '',
                quantity: '',
                specs: '',
                deliveryDate: '',
                destination: '',
                project: '',
                fullName: '',
                company: '',
                email: '',
                phone: '',
                file: null,
              });
            }}
            className="px-5 py-2.5 rounded-lg bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 hover:bg-cyan-500/30 text-xs font-mono font-bold cursor-pointer"
          >
            Submit Another Requirement
          </button>
        </div>
      </div>
    );
  }

  // Active Form View
  return (
    <form onSubmit={handleSubmit} className="space-y-6 text-start">

      {/* Step 1: Technical Requirement */}
      <div>
        <div className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider mb-3 flex items-center gap-1.5">
          <Layers className="w-3.5 h-3.5" />
          <span>{t('step1', { ns: 'rfq' })}</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1.5">
              {t('fields.product', { ns: 'rfq' })} <span className="text-cyan-400">*</span>
            </label>
            <input
              type="text"
              required
              value={formData.product}
              onChange={(e) => setFormData({ ...formData, product: e.target.value })}
              placeholder={t('fields.productPlaceholder', { ns: 'rfq' })}
              className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-hidden focus:border-cyan-400 transition-colors"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1.5">
              {t('fields.quantity', { ns: 'rfq' })} <span className="text-cyan-400">*</span>
            </label>
            <input
              type="text"
              required
              value={formData.quantity}
              onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
              placeholder={t('fields.quantityPlaceholder', { ns: 'rfq' })}
              className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-hidden focus:border-cyan-400 transition-colors"
            />
          </div>
        </div>

        <div className="mt-3">
          <label className="block text-xs font-medium text-slate-300 mb-1.5">
            {t('fields.specs', { ns: 'rfq' })}
          </label>
          <textarea
            rows={3}
            value={formData.specs}
            onChange={(e) => setFormData({ ...formData, specs: e.target.value })}
            placeholder={t('fields.specsPlaceholder', { ns: 'rfq' })}
            className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-hidden focus:border-cyan-400 transition-colors"
          />
        </div>
      </div>

      {/* Step 2: Logistics & Destination */}
      <div className="pt-4 border-t border-slate-800/80">
        <div className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider mb-3 flex items-center gap-1.5">
          <MapPin className="w-3.5 h-3.5" />
          <span>{t('step2', { ns: 'rfq' })}</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1.5">
              {t('fields.destination', { ns: 'rfq' })} <span className="text-cyan-400">*</span>
            </label>
            <input
              type="text"
              required
              value={formData.destination}
              onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
              placeholder={t('fields.destinationPlaceholder', { ns: 'rfq' })}
              className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-hidden focus:border-cyan-400 transition-colors"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1.5">
              {t('fields.deliveryDate', { ns: 'rfq' })}
            </label>
            <input
              type="date"
              value={formData.deliveryDate}
              onChange={(e) => setFormData({ ...formData, deliveryDate: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-hidden focus:border-cyan-400 transition-colors"
            />
          </div>
        </div>

        <div className="mt-3">
          <label className="block text-xs font-medium text-slate-300 mb-1.5">
            {t('fields.project', { ns: 'rfq' })}
          </label>
          <input
            type="text"
            value={formData.project}
            onChange={(e) => setFormData({ ...formData, project: e.target.value })}
            placeholder={t('fields.projectPlaceholder', { ns: 'rfq' })}
            className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-hidden focus:border-cyan-400 transition-colors"
          />
        </div>
      </div>

      {/* Upload Box */}
      <div className="pt-4 border-t border-slate-800/80">
        <label className="block text-xs font-medium text-slate-300 mb-1.5">
          {t('fields.uploadLabel', { ns: 'rfq' })}
        </label>
        <label className="flex flex-col items-center justify-center p-4 rounded-xl border-2 border-dashed border-slate-700 hover:border-cyan-500/60 bg-slate-950/60 cursor-pointer transition-colors">
          <UploadCloud className="w-6 h-6 text-cyan-400 mb-1" />
          <span className="text-xs text-slate-300 font-medium">
            {formData.file ? `${t('fields.fileSelected', { ns: 'rfq' })} ${formData.file}` : t('fields.uploadHint', { ns: 'rfq' })}
          </span>
          <input type="file" onChange={handleFileUpload} className="hidden" />
        </label>
      </div>

      {/* Step 3: Scope of Desk Support Checkboxes */}
      <div className="pt-4 border-t border-slate-800/80">
        <div className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider mb-3">
          {t('fields.supportLabel', { ns: 'rfq' })}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {[
            { key: 'sourcing', label: t('fields.supportOptions.sourcing', { ns: 'rfq' }) },
            { key: 'verification', label: t('fields.supportOptions.verification', { ns: 'rfq' }) },
            { key: 'rfq', label: t('fields.supportOptions.rfq', { ns: 'rfq' }) },
            { key: 'comparison', label: t('fields.supportOptions.comparison', { ns: 'rfq' }) },
            { key: 'followup', label: t('fields.supportOptions.followup', { ns: 'rfq' }) },
          ].map((opt) => {
            const isChecked = selectedServices.includes(opt.key);
            return (
              <button
                type="button"
                key={opt.key}
                onClick={() => toggleService(opt.key)}
                className={`p-3 rounded-lg border text-start flex items-center gap-3 transition-colors cursor-pointer ${isChecked
                    ? 'bg-slate-900 border-cyan-500/50 text-cyan-200'
                    : 'bg-slate-950 border-slate-800 text-slate-400'
                  }`}
              >
                {isChecked ? (
                  <CheckSquare className="w-4 h-4 text-cyan-400 shrink-0" />
                ) : (
                  <Square className="w-4 h-4 text-slate-600 shrink-0" />
                )}
                <span className="text-xs font-medium">{opt.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Step 4: Contact Information */}
      <div className="pt-4 border-t border-slate-800/80">
        <div className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider mb-3 flex items-center gap-1.5">
          <User className="w-3.5 h-3.5" />
          <span>{t('step4', { ns: 'rfq' })}</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1.5">
              {t('fields.fullName', { ns: 'rfq' })} <span className="text-cyan-400">*</span>
            </label>
            <input
              type="text"
              required
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              placeholder={t('fields.fullNamePlaceholder', { ns: 'rfq' })}
              className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-hidden focus:border-cyan-400 transition-colors"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1.5">
              {t('fields.company', { ns: 'rfq' })} <span className="text-cyan-400">*</span>
            </label>
            <input
              type="text"
              required
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              placeholder={t('fields.companyPlaceholder', { ns: 'rfq' })}
              className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-hidden focus:border-cyan-400 transition-colors"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1.5">
              {t('fields.email', { ns: 'rfq' })} <span className="text-cyan-400">*</span>
            </label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder={t('fields.emailPlaceholder', { ns: 'rfq' })}
              className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-hidden focus:border-cyan-400 transition-colors"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1.5">
              {t('fields.phone', { ns: 'rfq' })} <span className="text-cyan-400">*</span>
            </label>
            <input
              type="tel"
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              placeholder={t('fields.phonePlaceholder', { ns: 'rfq' })}
              className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-hidden focus:border-cyan-400 transition-colors"
            />
          </div>
        </div>
      </div>

      {/* Submit Action */}
      <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
        <span className="text-[11px] font-mono text-slate-500 flex items-center gap-1">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
          Encrypted & ISO Compliant RFQ Ingestion
        </span>

        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-400 to-cyan-300 hover:from-cyan-300 hover:to-cyan-200 text-slate-950 font-bold text-xs uppercase tracking-wider font-mono shadow-lg shadow-cyan-500/20 transition-all cursor-pointer disabled:opacity-50"
        >
          <span>{isSubmitting ? t('submitting', { ns: 'rfq' }) : t('submitBtn', { ns: 'rfq' })}</span>
          <ArrowRight className={`w-3.5 h-3.5 ${isRtl ? 'rotate-180' : ''}`} />
        </button>
      </div>

    </form>
  );
};
