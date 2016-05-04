System.register(['@angular/core', '@angular2-material/card', '@angular2-material/radio/radio', '@angular2-material/radio/radio_dispatcher', '@angular2-material/input', '@angular2-material/button', 'angular2localization/angular2localization'], function(exports_1, context_1) {
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
    var core_1, card_1, radio_1, radio_dispatcher_1, input_1, button_1, angular2localization_1, angular2localization_2;
    var I18nComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (card_1_1) {
                card_1 = card_1_1;
            },
            function (radio_1_1) {
                radio_1 = radio_1_1;
            },
            function (radio_dispatcher_1_1) {
                radio_dispatcher_1 = radio_dispatcher_1_1;
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
            }],
        execute: function() {
            I18nComponent = (function () {
                // Instantiates a new LocalizationService for this component and for its descendants.
                function I18nComponent(localizationI18n) {
                    this.localizationI18n = localizationI18n;
                    this.message = "";
                    this.gender = "";
                    this.inviteMapping = {
                        'male': 'INVITE_HIM',
                        'female': 'INVITE_HER'
                    };
                    this.messages = [];
                    this.messageMapping = {
                        '=0': 'NO_MESSAGES',
                        '=1': 'ONE_MESSAGE',
                        'other': '# MESSAGES'
                    };
                    this.localizationI18n.translationProvider('./resources/locale-i18n-'); // Required: initializes the translation provider with the given path prefix.
                }
                I18nComponent.prototype.addMessage = function (message) {
                    this.messages.push(message);
                    this.message = "";
                };
                I18nComponent = __decorate([
                    core_1.Component({
                        templateUrl: './app/i18n.component.html',
                        providers: [angular2localization_1.LocalizationService, radio_dispatcher_1.MdRadioDispatcher],
                        pipes: [angular2localization_2.TranslatePipe],
                        directives: [card_1.MD_CARD_DIRECTIVES, radio_1.MdRadioButton, input_1.MD_INPUT_DIRECTIVES, button_1.MdButton]
                    }), 
                    __metadata('design:paramtypes', [angular2localization_1.LocalizationService])
                ], I18nComponent);
                return I18nComponent;
            }());
            exports_1("I18nComponent", I18nComponent);
        }
    }
});
