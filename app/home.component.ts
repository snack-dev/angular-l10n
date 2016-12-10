import { Component } from '@angular/core';
// Services.
import { LocaleService, IntlSupport } from 'angular2localization';

@Component({
    templateUrl: 'home.component.html'
})

/**
 * HomeComponent class doesn't extend Locale superclass
 * because the view uses only Html attributes and not the pipes to get the translation.
 */
export class HomeComponent {

    intlSupport: boolean;

    today: number;
    pi: number;
    a: number;
    b: number;

    constructor(public locale: LocaleService) {

        this.today = Date.now();

        this.pi = 3.14159;

        this.a = Math.round(Math.random() * 100) / 100;
        this.b = Math.round(Math.random() * 1000000) / 100;

        this.intlSupport = IntlSupport.DateTimeFormat(this.locale.getDefaultLocale())
            && IntlSupport.NumberFormat(this.locale.getDefaultLocale())
            && IntlSupport.Collator(this.locale.getCurrentLanguage());

    }

}
