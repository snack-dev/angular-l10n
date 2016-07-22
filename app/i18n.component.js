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
var common_1 = require('@angular/common');
// Angular 2 Material.
var material_1 = require('./shared/material');
// Services.
var angular2localization_1 = require('angular2localization/angular2localization');
// Pipes.
var angular2localization_2 = require('angular2localization/angular2localization');
var MessagesLocalization = (function (_super) {
    __extends(MessagesLocalization, _super);
    function MessagesLocalization() {
        _super.apply(this, arguments);
    }
    MessagesLocalization.prototype.getPluralCategory = function (value) {
        if (value > 1) {
            return 'other';
        }
    };
    return MessagesLocalization;
}(common_1.NgLocalization));
var I18nComponent = (function (_super) {
    __extends(I18nComponent, _super);
    function I18nComponent(localization) {
        _super.call(this, null, localization);
        this.localization = localization;
        this.message = "";
        this.gender = "";
        this.inviteMapping = {
            'male': 'Invite_him',
            'female': 'Invite_her'
        };
        this.messages = [];
        this.messageMapping = {
            '=0': 'No_messages',
            '=1': 'One_message',
            'other': '# messages'
        };
    }
    I18nComponent.prototype.addMessage = function (value) {
        this.messages.push(value.message);
        this.message = "";
    };
    I18nComponent = __decorate([
        core_1.Component({
            templateUrl: './app/i18n.component.html',
            directives: [material_1.MD_CARD_DIRECTIVES, material_1.MdRadioButton, material_1.MD_INPUT_DIRECTIVES, material_1.MdButton],
            providers: [material_1.MdUniqueSelectionDispatcher, { provide: common_1.NgLocalization, useClass: MessagesLocalization }],
            pipes: [angular2localization_2.TranslatePipe]
        }), 
        __metadata('design:paramtypes', [angular2localization_1.LocalizationService])
    ], I18nComponent);
    return I18nComponent;
}(angular2localization_1.Locale));
exports.I18nComponent = I18nComponent;
//# sourceMappingURL=i18n.component.js.map