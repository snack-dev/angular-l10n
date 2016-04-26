System.register(['angular2/core', 'angular2/common', 'angular2/platform/common', 'angular2/router', 'angular2localization/angular2localization', './home.component', './i18n.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, common_2, router_1, angular2localization_1, angular2localization_2, home_component_1, i18n_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (common_2_1) {
                common_2 = common_2_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (angular2localization_1_1) {
                angular2localization_1 = angular2localization_1_1;
                angular2localization_2 = angular2localization_1_1;
            },
            function (home_component_1_1) {
                home_component_1 = home_component_1_1;
            },
            function (i18n_component_1_1) {
                i18n_component_1 = i18n_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(locale, localization, location) {
                    this.locale = locale;
                    this.localization = localization;
                    this.location = location;
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
                Object.defineProperty(AppComponent.prototype, "currentCountry", {
                    // Gets the current country.
                    get: function () {
                        return this.locale.getCurrentCountry();
                    },
                    enumerable: true,
                    configurable: true
                });
                // Sets a new locale & currency.
                AppComponent.prototype.selectLocale = function (language, country, currency) {
                    this.locale.setCurrentLocale(language, country);
                    this.locale.setCurrentcurrency(currency);
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'app-component',
                        directives: [router_1.ROUTER_DIRECTIVES, common_1.NgClass],
                        templateUrl: './app/app.component.html',
                        providers: [angular2localization_1.LocaleService, angular2localization_1.LocalizationService],
                        pipes: [angular2localization_2.TranslatePipe] // Add in each component to invoke the transform method.
                    }),
                    router_1.RouteConfig([
                        new router_1.AsyncRoute({ path: '/', loader: function () { return Promise.resolve(home_component_1.HomeComponent); }, name: 'Home', useAsDefault: true }),
                        new router_1.AsyncRoute({ path: '/i18n', loader: function () { return Promise.resolve(i18n_component_1.I18nComponent); }, name: 'I18n' })
                    ]), 
                    __metadata('design:paramtypes', [angular2localization_1.LocaleService, angular2localization_1.LocalizationService, common_2.Location])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
