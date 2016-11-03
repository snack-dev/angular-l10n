import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
// Services.
import { Locale, LocaleService, LocalizationService } from 'angular2localization';

export type LayoutDirection = 'ltr' | 'rtl';

@Component({
    selector: 'app-component',
    templateUrl: 'app.component.html'
})

export class AppComponent extends Locale {

    dir: LayoutDirection;

    constructor(public locale: LocaleService, public localization: LocalizationService, public title: Title) {
        super(null, localization);

        // Initializes the document title with the current translation at the time of the component loading.
        this.title.setTitle(this.localization.translate('TITLE'));

        this.localization.translationChanged.subscribe(

            // Refreshes the document title with the new translation when the selected language changes.
            () => { this.title.setTitle(this.localization.translate('TITLE')); }

        );

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
