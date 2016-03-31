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
    templateUrl: './app/app.component.html', // A component cannot have both pipes and @View set at the same time.
    providers: [LocaleService, LocalizationService, TranslatePipe], // Localization providers: inherited by all descendants.
    pipes: [TranslatePipe] // Add in each component to invoke the transform method.
})

@RouteConfig([
    new AsyncRoute({ path: '/', loader: () => Promise.resolve(HomeComponent), name: 'Home', useAsDefault: true }),
    new AsyncRoute({ path: '/i18n', loader: () => Promise.resolve(I18nComponent), name: 'I18n' })
])

export class AppComponent {

    constructor(public locale: LocaleService, public localization: LocalizationService, public location: Location) {
        
        // Initializes the LocaleService & LocalizationService: asynchronous loading.           
        this.locale.addLanguage('en'); // Required: adds a new language.
        this.locale.addLanguage('it');

        this.locale.definePreferredLanguage('en', 30); // Required: default language and expiry (No days). If the expiry is omitted, the cookie becomes a session cookie.
                
        this.localization.translationProvider('./resources/locale-'); // Required: initializes the translation provider with the given path prefix.

    }

    // Gets the current language.
    get currentLanguage(): string {

        return this.locale.getCurrentLanguage();

    }
    
    // Sets a new language.
    selectLanguage(language: string) {

        this.locale.setCurrentLanguage(language);

    }

}
