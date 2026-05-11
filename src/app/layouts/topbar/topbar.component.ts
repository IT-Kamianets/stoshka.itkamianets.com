import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateDirective } from '@wawjs/ngx-translate';
import { ThemeService } from '@wawjs/ngx-ui';
import { CompanyService } from '../../feature/company/company.service';
import { LanguageService } from '../../feature/language/language.service';

@Component({
	selector: 'app-topbar',
	imports: [RouterLink, TranslateDirective],
	templateUrl: './topbar.component.html',
	styleUrl: './topbar.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TopbarComponent {
	private readonly _companyService = inject(CompanyService);
	private readonly _themeService = inject(ThemeService);
	private readonly _languageService = inject(LanguageService);

	protected readonly company = this._companyService.company;
	protected readonly languageMenuOpen = signal(false);
	protected readonly languages = this._languageService.languages;
	protected readonly currentLanguage = this._languageService.language;

	protected readonly isDark = computed(() => this._themeService.mode() === 'dark');

	protected readonly toggleIcon = computed(() =>
		this.isDark() ? 'light_mode' : 'dark_mode',
	);

	protected readonly currentFlag = computed(() => {
		const lang = this._languageService.getLanguage(this.currentLanguage());
		return lang?.flagSrc ?? 'flags/ukraine.svg';
	});

	protected readonly currentLangLabel = computed(() => {
		const lang = this._languageService.getLanguage(this.currentLanguage());
		return lang?.label ?? 'UA';
	});

	protected toggleMode() {
		const current = this._themeService.mode();
		this._themeService.setMode(current === 'dark' ? 'light' : 'dark');
	}

	protected toggleLanguageMenu() {
		this.languageMenuOpen.update((v) => !v);
	}

	protected closeLanguageMenu() {
		this.languageMenuOpen.set(false);
	}

	protected async selectLanguage(code: string) {
		await this._languageService.setLanguage(code as Parameters<typeof this._languageService.setLanguage>[0]);
		this.closeLanguageMenu();
	}
}
