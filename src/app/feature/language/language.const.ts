import { LanguageOption } from './language.interface';

export const LANGUAGES: (LanguageOption & { population: number })[] = [
	{
		code: 'ua',
		label: 'Українська',
		flagSrc: 'flags/ukraine.svg',
		htmlLang: 'uk',
		population: 35,
	},
	{
		code: 'en',
		label: 'English',
		flagSrc: 'flags/united-kingdom.svg',
		htmlLang: 'en',
		population: 280,
	},
];
