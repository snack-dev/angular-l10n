import {Component} from 'angular2/core';
import {NgClass} from 'angular2/common';
import {Location} from 'angular2/platform/common';
import {RouteConfig, AsyncRoute, ROUTER_DIRECTIVES} from 'angular2/router';
// Services.
import {LocaleService, LocalizationService } from 'angular2localization/angular2localization';
// Pipes.
import {TranslatePipe} from 'angular2localization/angular2localization';
// Components.
import {HomeComponent} from './home.component';
import {I18nComponent} from './i18n.component';

@Component({
    selector: 'app-component',
    directives: [ROUTER_DIRECTIVES, NgClass],
    templateUrl: './app/app.component.html',
    providers: [LocaleService, LocalizationService], // Inherited by all descendants.
    pipes: [TranslatePipe] // Add in each component to invoke the transform method.
})

@RouteConfig([
    new AsyncRoute({ path: '/', loader: () => Promise.resolve(HomeComponent), name: 'Home', useAsDefault: true }),
    new AsyncRoute({ path: '/i18n', loader: () => Promise.resolve(I18nComponent), name: 'I18n' })
])

export class AppComponent {

    constructor(public locale: LocaleService, public localization: LocalizationService, public location: Location) {
                   
        // Adds a new language (ISO 639 two-letter code).
        this.locale.addLanguage('en');
        this.locale.addLanguage('it');
        // Add a new language here.

        // Required: default language, country (ISO 3166 two-letter, uppercase code) and expiry (No days). If the expiry is omitted, the cookie becomes a session cookie.
        this.locale.definePreferredLocale('en', 'US', 30);

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

        this.locale.setCurrentLocale(language, country);
        this.locale.setCurrentcurrency(currency);

    }

}
