import {Component} from 'angular2/core';
import {NgClass} from 'angular2/common';
import {RouteConfig, AsyncRoute, Location, ROUTER_DIRECTIVES} from 'angular2/router';
// Services.
import {LocaleService} from 'angular2localization/angular2localization'; // LocaleService class.
import {LocalizationService} from 'angular2localization/angular2localization'; // LocalizationService class.
// Pipes.
import {TranslatePipe} from 'angular2localization/angular2localization'; // TranslatePipe class.
// Components.
import {HomeComponent} from './home.component';
import {I18nComponent} from './i18n.component';

@Component({
    selector: 'app-component',
    directives: [ROUTER_DIRECTIVES, NgClass],
    templateUrl: './app/app.component.html',
    providers: [LocaleService, LocalizationService], // Localization providers: inherited by all descendants.
    pipes: [TranslatePipe] // Add in each component to invoke the transform method.
})

@RouteConfig([
    new AsyncRoute({ path: '/', loader: () => Promise.resolve(HomeComponent), name: 'Home', useAsDefault: true }),
    new AsyncRoute({ path: '/i18n', loader: () => Promise.resolve(I18nComponent), name: 'I18n' })
])

export class AppComponent {

    constructor(public locale: LocaleService, public localization: LocalizationService, public location: Location) {
                   
        // Initializes LocaleService.
        this.locale.addLanguage('en'); // Required: adds a new language (ISO 639 two-letter code).
        this.locale.addLanguage('it');

        this.locale.definePreferredLanguage('en', 30); // Required: default language and expiry (No days). If the expiry is omitted, the cookie becomes a session cookie.

        // Optional: default country for date & numbers (ISO 3166 two-letter, uppercase code).
        this.locale.definePreferredCountry('US');
        // Optional: default currency (ISO 4217 three-letter code).
        this.locale.definePreferredCurrency('USD');

        // Initializes LocalizationService: asynchronous loading.
        this.localization.translationProvider('./resources/locale-'); // Required: initializes the translation provider with the given path prefix.

    }

    // Gets the current country.
    get currentCountry(): string {

        return this.locale.getCurrentCountry();

    }

    // Sets a new locale & currency.
    selectLocale(language: string, country: string, currency: string) {

        this.locale.setCurrentLanguage(language);
        this.locale.setCurrentCountry(country);
        this.locale.setCurrentcurrency(currency);

    }

}
