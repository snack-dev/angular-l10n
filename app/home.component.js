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
// Services.
var angular2localization_1 = require('angular2localization/angular2localization');
var HomeComponent = (function (_super) {
    __extends(HomeComponent, _super);
    function HomeComponent(locale, localization) {
        _super.call(this, locale, localization);
        this.locale = locale;
        this.localization = localization;
        this.today = Date.now();
        this.pi = 3.14159;
        this.a = Math.round(Math.random() * 100) / 100;
        this.b = Math.round(Math.random() * 1000000) / 100;
        this.intlSupport = angular2localization_1.IntlSupport.DateTimeFormat(this.locale.getDefaultLocale())
            && angular2localization_1.IntlSupport.NumberFormat(this.locale.getDefaultLocale())
            && angular2localization_1.IntlSupport.Collator(this.locale.getCurrentLanguage());
    }
    HomeComponent = __decorate([
        core_1.Component({
            templateUrl: './app/home.component.html'
        }), 
        __metadata('design:paramtypes', [angular2localization_1.LocaleService, angular2localization_1.LocalizationService])
    ], HomeComponent);
    return HomeComponent;
}(angular2localization_1.Locale));
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map