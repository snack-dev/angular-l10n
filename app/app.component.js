"use strict";
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
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
// Angular 2 Material.
var dir_1 = require('@angular2-material/core/rtl/dir');
var sidenav_1 = require('@angular2-material/sidenav');
var list_1 = require('@angular2-material/list');
var toolbar_1 = require('@angular2-material/toolbar');
// Services.
var angular2localization_1 = require('angular2localization/angular2localization');
// Pipes.
var angular2localization_2 = require('angular2localization/angular2localization');
var AppComponent = (function (_super) {
    __extends(AppComponent, _super);
    function AppComponent(locale, localization) {
        _super.call(this, null, localization);
        this.locale = locale;
        this.localization = localization;
        // Adds a new language (ISO 639 two-letter or three-letter code).
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
        __metadata('design:paramtypes', [angular2localization_1.LocaleService, angular2localization_1.LocalizationService])
    ], AppComponent);
    return AppComponent;
}(angular2localization_1.Locale));
exports.AppComponent = AppComponent;
