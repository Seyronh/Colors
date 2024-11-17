import { ui, defaultLang } from "./ui";

export function useTranslations(lang: keyof typeof ui) {
	return function t(key: keyof (typeof ui)[typeof defaultLang]) {
		//@ts-expect-error
		return ui[lang][key] || ui[defaultLang][key];
	};
}
