import { Component } from '@angular/core';
// Services.
import { Locale, LocaleService, LocalizationService, IntlSupport } from 'angular2localization';

@Component({
    templateUrl: './app/home.component.html'
})

export class HomeComponent extends Locale {

    intlSupport: boolean;

    today: number;
    pi: number;
    a: number;
    b: number;

    constructor(public locale: LocaleService, public localization: LocalizationService) {
        super(locale, localization);

        this.today = Date.now();

        this.pi = 3.14159;

        this.a = Math.round(Math.random() * 100) / 100;
        this.b = Math.round(Math.random() * 1000000) / 100;

        this.intlSupport = IntlSupport.DateTimeFormat(this.locale.getDefaultLocale())
            && IntlSupport.NumberFormat(this.locale.getDefaultLocale())
            && IntlSupport.Collator(this.locale.getCurrentLanguage());

    }

}
