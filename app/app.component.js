System.register(['@angular/core', '@angular/router', '@angular2-material/core/rtl/dir', '@angular2-material/sidenav', '@angular2-material/list', '@angular2-material/toolbar', 'angular2localization/angular2localization', './home.component', './i18n.component', './list.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, dir_1, sidenav_1, list_1, toolbar_1, angular2localization_1, angular2localization_2, home_component_1, i18n_component_1, list_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (dir_1_1) {
                dir_1 = dir_1_1;
            },
            function (sidenav_1_1) {
                sidenav_1 = sidenav_1_1;
            },
            function (list_1_1) {
                list_1 = list_1_1;
            },
            function (toolbar_1_1) {
                toolbar_1 = toolbar_1_1;
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
            },
            function (list_component_1_1) {
                list_component_1 = list_component_1_1;
            }],
        execute: function() {
            AppComponent = (function (_super) {
                __extends(AppComponent, _super);
                function AppComponent(router, locale, localization) {
                    _super.call(this, null, localization);
                    this.router = router;
                    this.locale = locale;
                    this.localization = localization;
                    // Adds a new language (ISO 639 two-letter code).
                    this.locale.addLanguage('en');
                    this.locale.addLanguage('it');
                    this.locale.addLanguage('ar');
                    // Add a new language here.
                    // Required: default language, country (ISO 3166 two-letter, uppercase code) and expiry (No days). If the expiry is omitted, the cookie becomes a session cookie.
                    this.locale.definePreferredLocale('en', 'US', 30);
                    // Optional: default currency (ISO 4217 three-letter code).
                    this.locale.definePreferredCurrency('USD');
                    // Initializes LocalizationService: asynchronous loading.
                    this.localization.translationProvider('./resources/locale-'); // Required: initializes the translation provider with the given path prefix.
                    this.localization.updateTranslation(); // Need to update the translation.
                    // Initializes direction.
                    if (this.locale.getCurrentLanguage() == "ar") {
                        this.dir = 'rtl';
                    }
                    else {
                        this.dir = 'ltr';
                    }
                }
                AppComponent.prototype.ngOnInit = function () {
                    this.router.navigate(['/home']);
                };
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
                    this.localization.updateTranslation(); // Need to update the translation.
                    this.locale.setCurrentCurrency(currency);
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'app-component',
                        directives: [router_1.ROUTER_DIRECTIVES, dir_1.Dir, sidenav_1.MD_SIDENAV_DIRECTIVES, list_1.MD_LIST_DIRECTIVES, toolbar_1.MdToolbar],
                        templateUrl: './app/app.component.html',
                        providers: [angular2localization_1.LocaleService, angular2localization_1.LocalizationService],
                        pipes: [angular2localization_2.TranslatePipe]
                    }),
                    router_1.Routes([
                        { path: '/home', component: home_component_1.HomeComponent },
                        { path: '/i18n', component: i18n_component_1.I18nComponent },
                        { path: '/list', component: list_component_1.ListComponent }
                    ]), 
                    __metadata('design:paramtypes', [router_1.Router, angular2localization_1.LocaleService, angular2localization_1.LocalizationService])
                ], AppComponent);
                return AppComponent;
            }(angular2localization_1.Locale));
            exports_1("AppComponent", AppComponent);
        }
    }
});
