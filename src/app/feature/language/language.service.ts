import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { inject, Injectable, PLATFORM_ID, signal } from '@angular/core';
import { TranslateService } from '@wawjs/ngx-translate';
import { environment } from '../../../environments/environment';
import { LANGUAGES } from './language.const';
import { LanguageOption } from './language.interface';
import { LanguageCode } from './language.type';

@Injectable({ providedIn: 'root' })
export class LanguageService {
	private readonly _doc = inject(DOCUMENT);
	private readonly _translateService = inject(TranslateService);
	private readonly _isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
	private readonly _storageKey = 'app-language';

	readonly languages = signal<LanguageOption[]>(LANGUAGES);
	private readonly _defaultLanguage = this._resolveDefaultLanguage();
	readonly language = signal<LanguageCode>(this._defaultLanguage);

	init() {
		this._applyLanguage(this._defaultLanguage);
	}

	async setLanguage(language: LanguageCode) {
		if (this._isBrowser) {
			try {
				localStorage.setItem(this._storageKey, language);
			} catch {}
		}

		this.language.set(language);
		await this._applyLanguage(language);
	}

	nextLanguage() {
		const langs = LANGUAGES.map((l) => l.code);
		const currentIndex = langs.indexOf(this.language());
		const nextIndex = (currentIndex + 1) % langs.length;
		void this.setLanguage(langs[nextIndex]);
	}

	getLanguage(code: LanguageCode): LanguageOption | undefined {
		return LANGUAGES.find((l) => l.code === code);
	}

	private async _applyLanguage(code: LanguageCode) {
		const lang = this.getLanguage(code);

		if (lang) {
			this._doc.documentElement.setAttribute('lang', lang.htmlLang);
		}

		await this._translateService.setLanguage(code);
	}

	private _isSupportedLanguage(value: string | null | undefined): value is LanguageCode {
		return LANGUAGES.some((l) => l.code === value);
	}

	private _resolveDefaultLanguage(): LanguageCode {
		if (this._isBrowser) {
			try {
				const stored = localStorage.getItem(this._storageKey);

				if (this._isSupportedLanguage(stored)) {
					return stored;
				}
			} catch {}
		}

		return environment.defaultLanguage as LanguageCode;
	}
}
