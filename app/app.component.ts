import { Component } from '@angular/core';
import { Title }     from '@angular/platform-browser';
// Services.
import { Locale, LocaleService, LocalizationService } from 'angular2localization';

export type LayoutDirection = 'ltr' | 'rtl';

@Component({
    selector: 'app-component',
    templateUrl: './app/app.component.html'
})

export class AppComponent extends Locale {

    dir: LayoutDirection;

    constructor(public locale: LocaleService, public localization: LocalizationService, public title: Title) {
        super(null, localization);

        // Set document title.
        this.localization.translationChanged.subscribe(

            // Refresh the document title with the new translation when the selected language changes.
            () => { this.title.setTitle(this.localization.translate('TITLE')); }

        );

        // Adds a new language (ISO 639 two-letter or three-letter code).
        this.locale.addLanguage('en');
        this.locale.addLanguage('it');
        this.locale.addLanguage('ar');
        // Add a new language here.

        /*this.locale.useLocalStorage();*/

        // Required: default language, country (ISO 3166 two-letter, uppercase code) and expiry (No days). If the expiry is omitted, the cookie becomes a session cookie.
        this.locale.definePreferredLocale('en', 'US', 30);

        // Optional: default currency (ISO 4217 three-letter code).
        this.locale.definePreferredCurrency('USD');

        // Initializes LocalizationService: asynchronous loading.
        this.localization.translationProvider('./resources/locale-'); // Required: initializes the translation provider with the given path prefix.
        /*this.localization.translationProvider('http://localhost:54703/api/values/', 'json', true); */
        this.localization.updateTranslation(); // Need to update the translation.

        // Initializes direction.
        if (this.locale.getCurrentLanguage() == "ar") {

            this.dir = 'rtl';

        } else {

            this.dir = 'ltr';

        }

    }

    // Gets the current country.
    get currentCountry(): string {

        return this.locale.getCurrentCountry();

    }

    // Sets a new locale & currency.
    selectLocale(language: string, country: string, currency: string): void {

        this.locale.setCurrentLocale(language, country);
        this.locale.setCurrentCurrency(currency);

    }

}
