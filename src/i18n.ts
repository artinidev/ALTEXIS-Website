import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// English translations
import enCommon from './locales/en/common.json';
import enHome from './locales/en/home.json';
import enServices from './locales/en/services.json';
import enIndustries from './locales/en/industries.json';
import enAbout from './locales/en/about.json';
import enRfq from './locales/en/rfq.json';
import enOffers from './locales/en/offers.json';

// French translations
import frCommon from './locales/fr/common.json';
import frHome from './locales/fr/home.json';
import frServices from './locales/fr/services.json';
import frIndustries from './locales/fr/industries.json';
import frAbout from './locales/fr/about.json';
import frRfq from './locales/fr/rfq.json';
import frOffers from './locales/fr/offers.json';

// Arabic translations
import arCommon from './locales/ar/common.json';
import arHome from './locales/ar/home.json';
import arServices from './locales/ar/services.json';
import arIndustries from './locales/ar/industries.json';
import arAbout from './locales/ar/about.json';
import arRfq from './locales/ar/rfq.json';
import arOffers from './locales/ar/offers.json';

const resources = {
  en: {
    common: enCommon,
    home: enHome,
    services: enServices,
    industries: enIndustries,
    about: enAbout,
    rfq: enRfq,
    offers: enOffers,
  },
  fr: {
    common: frCommon,
    home: frHome,
    services: frServices,
    industries: frIndustries,
    about: frAbout,
    rfq: frRfq,
    offers: frOffers,
  },
  ar: {
    common: arCommon,
    home: arHome,
    services: arServices,
    industries: arIndustries,
    about: arAbout,
    rfq: arRfq,
    offers: arOffers,
  },
};

const savedLang = localStorage.getItem('altexis_lang') || localStorage.getItem('procuresight_lang') || 'en';

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: savedLang,
    fallbackLng: 'en',
    ns: ['common', 'home', 'services', 'industries', 'about', 'rfq', 'offers'],
    defaultNS: 'home',
    interpolation: {
      escapeValue: false,
    },
  });

export const updateHtmlDirection = (lang: string) => {
  const isRtl = lang === 'ar';
  document.documentElement.setAttribute('lang', lang);
  document.documentElement.setAttribute('dir', isRtl ? 'rtl' : 'ltr');
  document.documentElement.classList.toggle('rtl', isRtl);
  localStorage.setItem('altexis_lang', lang);
};

// Initialize direction immediately on script load
updateHtmlDirection(savedLang);

i18n.on('languageChanged', (lng) => {
  updateHtmlDirection(lng);
});

export default i18n;
