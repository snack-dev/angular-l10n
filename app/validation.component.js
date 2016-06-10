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
// FormBuilder with NgFormControl.
var common_1 = require('@angular/common');
// Angular 2 Material.
var card_1 = require('@angular2-material/card');
var input_1 = require('@angular2-material/input');
var button_1 = require('@angular2-material/button');
// Services.
var angular2localization_1 = require('angular2localization/angular2localization');
// Pipes.
var angular2localization_2 = require('angular2localization/angular2localization');
var angular2localization_3 = require('angular2localization/angular2localization');
// Directives for FormBuilder with NgFormControl.
var angular2localization_4 = require('angular2localization/angular2localization');
// Directives for NgControl.
/*import {LocaleNumberValidator} from 'angular2localization/angular2localization';*/
var ValidationComponent = (function (_super) {
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
exports.ValidationComponent = ValidationComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ2YWxpZGF0aW9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQSxxQkFBd0IsZUFBZSxDQUFDLENBQUE7QUFDeEMsa0NBQWtDO0FBQ2xDLHVCQUF3QyxpQkFBaUIsQ0FBQyxDQUFBO0FBQzFELHNCQUFzQjtBQUN0QixxQkFBaUMseUJBQXlCLENBQUMsQ0FBQTtBQUMzRCxzQkFBa0MsMEJBQTBCLENBQUMsQ0FBQTtBQUM3RCx1QkFBdUIsMkJBQTJCLENBQUMsQ0FBQTtBQUNuRCxZQUFZO0FBQ1oscUNBQXVFLDJDQUEyQyxDQUFDLENBQUE7QUFDbkgsU0FBUztBQUNULHFDQUE0QiwyQ0FBMkMsQ0FBQyxDQUFBO0FBQ3hFLHFDQUFnQywyQ0FBMkMsQ0FBQyxDQUFBO0FBQzVFLGlEQUFpRDtBQUNqRCxxQ0FBMEQsMkNBQTJDLENBQUMsQ0FBQTtBQUN0Ryw0QkFBNEI7QUFDNUIsb0ZBQW9GO0FBUXBGO0lBQXlDLHVDQUFNO0lBYzNDLDZCQUFtQixNQUFxQixFQUFTLFlBQWlDLEVBQVUsRUFBZTtRQUN2RyxrQkFBTSxNQUFNLEVBQUUsWUFBWSxDQUFDLENBQUE7UUFEWixXQUFNLEdBQU4sTUFBTSxDQUFlO1FBQVMsaUJBQVksR0FBWixZQUFZLENBQXFCO1FBQVUsT0FBRSxHQUFGLEVBQUUsQ0FBYTtRQVozRyxVQUFLLEdBQVcsRUFBRSxDQUFDO1FBRW5CLFdBQVc7UUFDWCxXQUFNLEdBQVcsT0FBTyxDQUFDO1FBQ3pCLGFBQVEsR0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEtBQUssQ0FBQyxHQUFHLEdBQUcsQ0FBQztRQUM1RCxhQUFRLEdBQVcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsS0FBSyxDQUFDLEdBQUcsR0FBRyxDQUFDO1FBRTNELGdCQUFXLEdBQVcsSUFBSSxDQUFDO1FBUXZCLElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQztZQUN2QixTQUFTLEVBQUUsQ0FBQyxFQUFFLEVBQUUsMkNBQW9CLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQ2hHLENBQUMsQ0FBQztJQUVQLENBQUM7SUFFRCxzQ0FBUSxHQUFSLFVBQVMsS0FBVTtRQUVmLElBQUksQ0FBQyxXQUFXLEdBQUcsbUNBQVksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLGdCQUFnQixFQUFFLENBQUMsQ0FBQztJQUUxRixDQUFDO0lBakNMO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFdBQVcsRUFBRSxpQ0FBaUM7WUFDOUMsS0FBSyxFQUFFLENBQUMsb0NBQWEsRUFBRSx3Q0FBaUIsQ0FBQztZQUN6QyxVQUFVLEVBQUUsQ0FBQyw0Q0FBcUIsRUFBRSx5QkFBa0IsRUFBRSwyQkFBbUIsRUFBRSxpQkFBUSxDQUFDO1NBQ3pGLENBQUM7OzJCQUFBO0lBMENGLDBCQUFDO0FBQUQsQ0FBQyxBQXhDRCxDQUF5Qyw2QkFBTSxHQXdDOUM7QUF4Q1ksMkJBQW1CLHNCQXdDL0IsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuLy8gRm9ybUJ1aWxkZXIgd2l0aCBOZ0Zvcm1Db250cm9sLlxyXG5pbXBvcnQge0Zvcm1CdWlsZGVyLCBDb250cm9sR3JvdXB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbi8vIEFuZ3VsYXIgMiBNYXRlcmlhbC5cclxuaW1wb3J0IHtNRF9DQVJEX0RJUkVDVElWRVN9IGZyb20gJ0Bhbmd1bGFyMi1tYXRlcmlhbC9jYXJkJztcclxuaW1wb3J0IHtNRF9JTlBVVF9ESVJFQ1RJVkVTfSBmcm9tICdAYW5ndWxhcjItbWF0ZXJpYWwvaW5wdXQnO1xyXG5pbXBvcnQge01kQnV0dG9ufSBmcm9tICdAYW5ndWxhcjItbWF0ZXJpYWwvYnV0dG9uJztcclxuLy8gU2VydmljZXMuXHJcbmltcG9ydCB7TG9jYWxlLCBMb2NhbGVTZXJ2aWNlLCBMb2NhbGl6YXRpb25TZXJ2aWNlLCBMb2NhbGVQYXJzZXJ9IGZyb20gJ2FuZ3VsYXIybG9jYWxpemF0aW9uL2FuZ3VsYXIybG9jYWxpemF0aW9uJztcclxuLy8gUGlwZXMuXHJcbmltcG9ydCB7VHJhbnNsYXRlUGlwZX0gZnJvbSAnYW5ndWxhcjJsb2NhbGl6YXRpb24vYW5ndWxhcjJsb2NhbGl6YXRpb24nO1xyXG5pbXBvcnQge0xvY2FsZURlY2ltYWxQaXBlfSBmcm9tICdhbmd1bGFyMmxvY2FsaXphdGlvbi9hbmd1bGFyMmxvY2FsaXphdGlvbic7XHJcbi8vIERpcmVjdGl2ZXMgZm9yIEZvcm1CdWlsZGVyIHdpdGggTmdGb3JtQ29udHJvbC5cclxuaW1wb3J0IHtMb2NhbGVOdW1iZXJWYWxpZGF0b3IsIHZhbGlkYXRlTG9jYWxlTnVtYmVyfSBmcm9tICdhbmd1bGFyMmxvY2FsaXphdGlvbi9hbmd1bGFyMmxvY2FsaXphdGlvbic7XHJcbi8vIERpcmVjdGl2ZXMgZm9yIE5nQ29udHJvbC5cclxuLyppbXBvcnQge0xvY2FsZU51bWJlclZhbGlkYXRvcn0gZnJvbSAnYW5ndWxhcjJsb2NhbGl6YXRpb24vYW5ndWxhcjJsb2NhbGl6YXRpb24nOyovXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHRlbXBsYXRlVXJsOiAnLi9hcHAvdmFsaWRhdGlvbi5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBwaXBlczogW1RyYW5zbGF0ZVBpcGUsIExvY2FsZURlY2ltYWxQaXBlXSxcclxuICAgIGRpcmVjdGl2ZXM6IFtMb2NhbGVOdW1iZXJWYWxpZGF0b3IsIE1EX0NBUkRfRElSRUNUSVZFUywgTURfSU5QVVRfRElSRUNUSVZFUywgTWRCdXR0b25dXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgVmFsaWRhdGlvbkNvbXBvbmVudCBleHRlbmRzIExvY2FsZSB7XHJcblxyXG4gICAgdmFsdWU6IHN0cmluZyA9IFwiXCI7XHJcblxyXG4gICAgLy8gT3B0aW9ucy5cclxuICAgIGRpZ2l0czogc3RyaW5nID0gXCIxLjItMlwiO1xyXG4gICAgbWluVmFsdWU6IG51bWJlciA9IC1NYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAxMDAwMCkgLyAxMDA7XHJcbiAgICBtYXhWYWx1ZTogbnVtYmVyID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogMTAwMDApIC8gMTAwO1xyXG5cclxuICAgIHBhcnNlZFZhbHVlOiBudW1iZXIgPSBudWxsO1xyXG5cclxuICAgIC8vIEZvcm1CdWlsZGVyIHdpdGggTmdGb3JtQ29udHJvbC5cclxuICAgIG51bWJlckZvcm06IENvbnRyb2xHcm91cDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgbG9jYWxlOiBMb2NhbGVTZXJ2aWNlLCBwdWJsaWMgbG9jYWxpemF0aW9uOiBMb2NhbGl6YXRpb25TZXJ2aWNlLCBwcml2YXRlIGZiOiBGb3JtQnVpbGRlcikge1xyXG4gICAgICAgIHN1cGVyKGxvY2FsZSwgbG9jYWxpemF0aW9uKVxyXG5cclxuICAgICAgICB0aGlzLm51bWJlckZvcm0gPSBmYi5ncm91cCh7XHJcbiAgICAgICAgICAgICdkZWNpbWFsJzogWycnLCB2YWxpZGF0ZUxvY2FsZU51bWJlcih0aGlzLmxvY2FsZSwgdGhpcy5kaWdpdHMsIHRoaXMubWluVmFsdWUsIHRoaXMubWF4VmFsdWUpXVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBvblN1Ym1pdCh2YWx1ZTogYW55KSB7XHJcblxyXG4gICAgICAgIHRoaXMucGFyc2VkVmFsdWUgPSBMb2NhbGVQYXJzZXIuTnVtYmVyKHZhbHVlLmRlY2ltYWwsIHRoaXMubG9jYWxlLmdldERlZmF1bHRMb2NhbGUoKSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8vIE5nQ29udHJvbC5cclxuICAgIC8qY29uc3RydWN0b3IocHVibGljIGxvY2FsZTogTG9jYWxlU2VydmljZSwgcHVibGljIGxvY2FsaXphdGlvbjogTG9jYWxpemF0aW9uU2VydmljZSkge1xyXG4gICAgICAgIHN1cGVyKGxvY2FsZSwgbG9jYWxpemF0aW9uKVxyXG4gICAgfVxyXG5cclxuICAgIG9uU3VibWl0KHZhbHVlOiBzdHJpbmcpIHtcclxuXHJcbiAgICAgICAgdGhpcy5wYXJzZWRWYWx1ZSA9IExvY2FsZVBhcnNlci5OdW1iZXIodmFsdWUsIHRoaXMubG9jYWxlLmdldERlZmF1bHRMb2NhbGUoKSk7XHJcblxyXG4gICAgfSovXHJcblxyXG59Il19