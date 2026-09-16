import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Globe, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface LanguageSwitcherProps {
  variant?: 'nav' | 'footer' | 'compact';
  isHero?: boolean;
}

const LANGUAGES = [
  { code: 'en', label: 'English', short: 'EN', dir: 'ltr' },
  { code: 'fr', label: 'Français', short: 'FR', dir: 'ltr' },
  { code: 'ar', label: 'العربية', short: 'AR', dir: 'rtl' },
];

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ variant = 'nav', isHero = false }) => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentLang = LANGUAGES.find((l) => l.code === i18n.language) || LANGUAGES[0];

  useEffect(() => {
    const selected = LANGUAGES.find((l) => l.code === i18n.language);
    document.documentElement.dir = selected?.dir || 'ltr';
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  const handleSelect = (code: string) => {
    i18n.changeLanguage(code);
    localStorage.setItem('i18nextLng', code);
    setIsOpen(false);
  };

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const isLightText = isHero || variant === 'footer';

  return (
    <div className="relative inline-block text-start" ref={dropdownRef}>
      {/* Single Globe Icon Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-1.5 px-3 py-2 rounded-full transition-all duration-200 cursor-pointer focus:outline-hidden ${
          isLightText
            ? 'bg-white/10 hover:bg-white/20 text-white border border-white/15'
            : 'bg-black/5 hover:bg-black/10 text-[#123C32] border border-black/5'
        }`}
        aria-label="Change language"
      >
        <Globe className={`w-3.5 h-3.5 ${isLightText ? 'text-white' : 'text-[#123C32]'} shrink-0`} />
        <span className="text-xs font-heading font-semibold uppercase tracking-wider">{currentLang.short}</span>
      </button>

      {/* Pop-up Dropdown for 3 Languages */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -5 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -5 }}
            transition={{ duration: 0.15, ease: 'easeOut' }}
            className={`absolute z-50 ${
              variant === 'footer' ? 'bottom-full mb-2' : 'top-full mt-2'
            } right-0 min-w-[150px] p-1.5 rounded-2xl bg-white text-[#123C32] border border-[#E2DFD5] shadow-2xl overflow-hidden`}
          >
            <div className="space-y-1">
              {LANGUAGES.map((lang) => {
                const isActive = lang.code === i18n.language;
                return (
                  <button
                    key={lang.code}
                    onClick={() => handleSelect(lang.code)}
                    className={`w-full flex items-center justify-between px-3.5 py-2 rounded-xl text-xs font-bold transition-colors cursor-pointer ${
                      isActive
                        ? 'bg-[#123C32] text-[#8EDB68]'
                        : 'text-[#123C32] hover:bg-[#F5F3EA]'
                    }`}
                  >
                    <span>{lang.label}</span>
                    {isActive && <Check className="w-3.5 h-3.5 text-[#8EDB68]" />}
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
