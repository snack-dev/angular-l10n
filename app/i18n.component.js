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
// Angular 2 Material.
var card_1 = require('@angular2-material/card');
var radio_1 = require('@angular2-material/radio/radio');
var radio_dispatcher_1 = require('@angular2-material/radio/radio_dispatcher');
var input_1 = require('@angular2-material/input');
var button_1 = require('@angular2-material/button');
// Services.
var angular2localization_1 = require('angular2localization/angular2localization');
// Pipes.
var angular2localization_2 = require('angular2localization/angular2localization');
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
    I18nComponent.prototype.addMessage = function (message) {
        this.messages.push(message);
        this.message = "";
    };
    I18nComponent = __decorate([
        core_1.Component({
            templateUrl: './app/i18n.component.html',
            providers: [radio_dispatcher_1.MdRadioDispatcher],
            pipes: [angular2localization_2.TranslatePipe],
            directives: [card_1.MD_CARD_DIRECTIVES, radio_1.MdRadioButton, input_1.MD_INPUT_DIRECTIVES, button_1.MdButton]
        }), 
        __metadata('design:paramtypes', [angular2localization_1.LocalizationService])
    ], I18nComponent);
    return I18nComponent;
}(angular2localization_1.Locale));
exports.I18nComponent = I18nComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaTE4bi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpMThuLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQSxxQkFBd0IsZUFBZSxDQUFDLENBQUE7QUFDeEMsc0JBQXNCO0FBQ3RCLHFCQUFpQyx5QkFBeUIsQ0FBQyxDQUFBO0FBQzNELHNCQUE0QixnQ0FBZ0MsQ0FBQyxDQUFBO0FBQzdELGlDQUFnQywyQ0FBMkMsQ0FBQyxDQUFBO0FBQzVFLHNCQUFrQywwQkFBMEIsQ0FBQyxDQUFBO0FBQzdELHVCQUF1QiwyQkFBMkIsQ0FBQyxDQUFBO0FBQ25ELFlBQVk7QUFDWixxQ0FBMEMsMkNBQTJDLENBQUMsQ0FBQTtBQUN0RixTQUFTO0FBQ1QscUNBQTRCLDJDQUEyQyxDQUFDLENBQUE7QUFTeEU7SUFBbUMsaUNBQU07SUFpQnJDLHVCQUFtQixZQUFpQztRQUNoRCxrQkFBTSxJQUFJLEVBQUUsWUFBWSxDQUFDLENBQUM7UUFEWCxpQkFBWSxHQUFaLFlBQVksQ0FBcUI7UUFmcEQsWUFBTyxHQUFXLEVBQUUsQ0FBQztRQUVyQixXQUFNLEdBQVcsRUFBRSxDQUFDO1FBQ3BCLGtCQUFhLEdBQVE7WUFDakIsTUFBTSxFQUFFLFlBQVk7WUFDcEIsUUFBUSxFQUFFLFlBQVk7U0FDekIsQ0FBQTtRQUVELGFBQVEsR0FBUSxFQUFFLENBQUM7UUFDbkIsbUJBQWMsR0FBUTtZQUNsQixJQUFJLEVBQUUsYUFBYTtZQUNuQixJQUFJLEVBQUUsYUFBYTtZQUNuQixPQUFPLEVBQUUsWUFBWTtTQUN4QixDQUFBO0lBSUQsQ0FBQztJQUVELGtDQUFVLEdBQVYsVUFBVyxPQUFlO1FBRXRCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzVCLElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO0lBRXRCLENBQUM7SUFqQ0w7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsV0FBVyxFQUFFLDJCQUEyQjtZQUN4QyxTQUFTLEVBQUUsQ0FBQyxvQ0FBaUIsQ0FBQztZQUM5QixLQUFLLEVBQUUsQ0FBQyxvQ0FBYSxDQUFDO1lBQ3RCLFVBQVUsRUFBRSxDQUFDLHlCQUFrQixFQUFFLHFCQUFhLEVBQUUsMkJBQW1CLEVBQUUsaUJBQVEsQ0FBQztTQUNqRixDQUFDOztxQkFBQTtJQThCRixvQkFBQztBQUFELENBQUMsQUE1QkQsQ0FBbUMsNkJBQU0sR0E0QnhDO0FBNUJZLHFCQUFhLGdCQTRCekIsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuLy8gQW5ndWxhciAyIE1hdGVyaWFsLlxyXG5pbXBvcnQge01EX0NBUkRfRElSRUNUSVZFU30gZnJvbSAnQGFuZ3VsYXIyLW1hdGVyaWFsL2NhcmQnO1xyXG5pbXBvcnQge01kUmFkaW9CdXR0b259IGZyb20gJ0Bhbmd1bGFyMi1tYXRlcmlhbC9yYWRpby9yYWRpbyc7XHJcbmltcG9ydCB7TWRSYWRpb0Rpc3BhdGNoZXJ9IGZyb20gJ0Bhbmd1bGFyMi1tYXRlcmlhbC9yYWRpby9yYWRpb19kaXNwYXRjaGVyJztcclxuaW1wb3J0IHtNRF9JTlBVVF9ESVJFQ1RJVkVTfSBmcm9tICdAYW5ndWxhcjItbWF0ZXJpYWwvaW5wdXQnO1xyXG5pbXBvcnQge01kQnV0dG9ufSBmcm9tICdAYW5ndWxhcjItbWF0ZXJpYWwvYnV0dG9uJztcclxuLy8gU2VydmljZXMuXHJcbmltcG9ydCB7TG9jYWxlLCBMb2NhbGl6YXRpb25TZXJ2aWNlfSBmcm9tICdhbmd1bGFyMmxvY2FsaXphdGlvbi9hbmd1bGFyMmxvY2FsaXphdGlvbic7XHJcbi8vIFBpcGVzLlxyXG5pbXBvcnQge1RyYW5zbGF0ZVBpcGV9IGZyb20gJ2FuZ3VsYXIybG9jYWxpemF0aW9uL2FuZ3VsYXIybG9jYWxpemF0aW9uJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgdGVtcGxhdGVVcmw6ICcuL2FwcC9pMThuLmNvbXBvbmVudC5odG1sJyxcclxuICAgIHByb3ZpZGVyczogW01kUmFkaW9EaXNwYXRjaGVyXSxcclxuICAgIHBpcGVzOiBbVHJhbnNsYXRlUGlwZV0sXHJcbiAgICBkaXJlY3RpdmVzOiBbTURfQ0FSRF9ESVJFQ1RJVkVTLCBNZFJhZGlvQnV0dG9uLCBNRF9JTlBVVF9ESVJFQ1RJVkVTLCBNZEJ1dHRvbl1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBJMThuQ29tcG9uZW50IGV4dGVuZHMgTG9jYWxlIHtcclxuXHJcbiAgICBtZXNzYWdlOiBzdHJpbmcgPSBcIlwiO1xyXG5cclxuICAgIGdlbmRlcjogc3RyaW5nID0gXCJcIjtcclxuICAgIGludml0ZU1hcHBpbmc6IGFueSA9IHtcclxuICAgICAgICAnbWFsZSc6ICdJbnZpdGVfaGltJyxcclxuICAgICAgICAnZmVtYWxlJzogJ0ludml0ZV9oZXInXHJcbiAgICB9XHJcblxyXG4gICAgbWVzc2FnZXM6IGFueSA9IFtdO1xyXG4gICAgbWVzc2FnZU1hcHBpbmc6IGFueSA9IHtcclxuICAgICAgICAnPTAnOiAnTm9fbWVzc2FnZXMnLFxyXG4gICAgICAgICc9MSc6ICdPbmVfbWVzc2FnZScsXHJcbiAgICAgICAgJ290aGVyJzogJyMgbWVzc2FnZXMnXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IocHVibGljIGxvY2FsaXphdGlvbjogTG9jYWxpemF0aW9uU2VydmljZSkge1xyXG4gICAgICAgIHN1cGVyKG51bGwsIGxvY2FsaXphdGlvbik7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkTWVzc2FnZShtZXNzYWdlOiBzdHJpbmcpIHtcclxuXHJcbiAgICAgICAgdGhpcy5tZXNzYWdlcy5wdXNoKG1lc3NhZ2UpO1xyXG4gICAgICAgIHRoaXMubWVzc2FnZSA9IFwiXCI7XHJcblxyXG4gICAgfVxyXG5cclxufSJdfQ==