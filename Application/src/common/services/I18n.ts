import i18n, { InitOptions, LanguageDetectorAsyncModule } from 'i18next';
import { initReactI18next } from 'react-i18next';
import { getCountry } from 'react-native-localize';
import pt from 'assets/translations/pt.json';
import { DEFAULT_LANGUAGE, LANGUAGES, STORAGE, DEFAULTNS } from 'src/Config';
import Storage from './Storage';
const languageDefault: string = LANGUAGES.find(x => x === getCountry().toLowerCase()) || DEFAULT_LANGUAGE;

const languageDetector: LanguageDetectorAsyncModule = {
	type: 'languageDetector',
	async: true,
	detect: async (callback: (lng: string) => void) => {
		const language = await Storage.get(STORAGE.CURRENT_LOCALE);
		return callback(language || languageDefault);
	},
	init: () => {},
	cacheUserLanguage: async (language: string) => {
		await Storage.set(STORAGE.CURRENT_LOCALE, language);
	},
};

const config: InitOptions = {
	compatibilityJSON: 'v3',
	fallbackLng: languageDefault,
	debug: false,
	initImmediate: false,
	load: 'languageOnly',
	ns: [DEFAULTNS],
	defaultNS: DEFAULTNS,
	interpolation: {
		escapeValue: false,
	},
	react: {
		// wait: true,
		useSuspense: false,
	},
	resources: {
		fr: {
			[DEFAULTNS]: pt,
		},
	},
};

i18n.use(languageDetector).use(initReactI18next).init(config);

export default i18n;
