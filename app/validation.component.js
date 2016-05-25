System.register(['@angular/core', '@angular/common', '@angular2-material/card', '@angular2-material/input', '@angular2-material/button', 'angular2localization/angular2localization'], function(exports_1, context_1) {
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
    var core_1, common_1, card_1, input_1, button_1, angular2localization_1, angular2localization_2, angular2localization_3, angular2localization_4;
    var ValidationComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (card_1_1) {
                card_1 = card_1_1;
            },
            function (input_1_1) {
                input_1 = input_1_1;
            },
            function (button_1_1) {
                button_1 = button_1_1;
            },
            function (angular2localization_1_1) {
                angular2localization_1 = angular2localization_1_1;
                angular2localization_2 = angular2localization_1_1;
                angular2localization_3 = angular2localization_1_1;
                angular2localization_4 = angular2localization_1_1;
            }],
        execute: function() {
            // Directives for NgControl.
            /*import {LocaleNumberValidator} from 'angular2localization/angular2localization';*/
            ValidationComponent = (function (_super) {
                __extends(ValidationComponent, _super);
                function ValidationComponent(locale, localization, fb) {
                    _super.call(this, locale, localization);
                    this.locale = locale;
                    this.localization = localization;
                    this.fb = fb;
                    this.value = "";
                    // Options.
                    this.digits = "1.2-2";
                    this.minValue = -Math.round(Math.random() * 10000) / 100;
                    this.maxValue = Math.round(Math.random() * 10000) / 100;
                    this.parsedValue = null;
                    this.numberForm = fb.group({
                        'decimal': ['', angular2localization_4.validateLocaleNumber(this.locale, this.digits, this.minValue, this.maxValue)]
                    });
                }
                ValidationComponent.prototype.onSubmit = function (value) {
                    this.parsedValue = angular2localization_1.LocaleParser.Number(value.decimal, this.locale.getDefaultLocale());
                };
                ValidationComponent = __decorate([
                    core_1.Component({
                        templateUrl: './app/validation.component.html',
                        pipes: [angular2localization_2.TranslatePipe, angular2localization_3.LocaleDecimalPipe],
                        directives: [angular2localization_4.LocaleNumberValidator, card_1.MD_CARD_DIRECTIVES, input_1.MD_INPUT_DIRECTIVES, button_1.MdButton]
                    }), 
                    __metadata('design:paramtypes', [angular2localization_1.LocaleService, angular2localization_1.LocalizationService, common_1.FormBuilder])
                ], ValidationComponent);
                return ValidationComponent;
            }(angular2localization_1.Locale));
            exports_1("ValidationComponent", ValidationComponent);
        }
    }
});
