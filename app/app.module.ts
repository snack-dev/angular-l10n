// Root module.
import { NgModule, APP_INITIALIZER, Injectable } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
// Bootstrap component.
import { AppComponent } from './app.component';
import { routing } from './app.routes';
// Components.
import { HomeComponent } from './home.component';
import { I18nComponent } from './i18n.component';
import { ValidationComponent } from './validation.component';
// Feature modules.
import { SharedModule } from './shared/shared.module';
// Angular 2 Material.
import { MaterialModule } from '@angular/material';
// Angular 2 Localization.
import { LocaleModule, LocalizationModule, LocaleService, LocalizationService } from 'angular2localization';

/**
 * Advanced initialization.
 * 
 * With these settings, translation file will be loaded before the app.
 */
@Injectable()
export class LocalizationConfig {

    constructor(public locale: LocaleService, public localization: LocalizationService) { }

    load(): Promise<any> {

        // Adds the languages (ISO 639 two-letter or three-letter code).
        this.locale.addLanguages(['en', 'it', 'ar']);

        // Required: default language, country (ISO 3166 two-letter, uppercase code) and expiry (No days). If the expiry is omitted, the cookie becomes a session cookie.
        this.locale.definePreferredLocale('en', 'US', 30);

        // Optional: default currency (ISO 4217 three-letter code).
        this.locale.definePreferredCurrency('USD');

        // Initializes LocalizationService: asynchronous loading.
        this.localization.translationProvider('./resources/locale-'); // Required: initializes the translation provider with the given path prefix.

        var promise: Promise<any> = new Promise((resolve: any) => {
            this.localization.translationChanged.subscribe(() => {
                resolve(true);
            });
        });

        this.localization.updateTranslation(); // Need to update the translation.

        return promise;
    }
}

/**
 * Aot compilation requires a reference to an exported function.
 */
export function initLocalization(localizationConfig: LocalizationConfig): Function {
    return () => localizationConfig.load();
}

@NgModule({
    imports: [
        BrowserModule,
        routing,
        SharedModule,
        MaterialModule.forRoot(),
        LocaleModule.forRoot(), // New instance of LocaleService.
        LocalizationModule.forRoot() // New instance of LocalizationService.
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        I18nComponent,
        ValidationComponent
    ],
    providers: [
        Title,
        LocalizationConfig,
        {
            provide: APP_INITIALIZER, // APP_INITIALIZER will execute the function when the app is initialized and delay what it provides.
            useFactory: initLocalization,
            deps: [LocalizationConfig],
            multi: true
        }
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }
