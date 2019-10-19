import i18n from 'i18n-js';

const defaultLocale = 'en'

const translations = {
  en: () => require("./translations/en.json"),
}

i18n.fallbacks = true;
i18n.translations = {[defaultLocale]: translations[defaultLocale]()};
i18n.locale = defaultLocale;
i18n.missingTranslation = (name) => name;

export default i18n;
