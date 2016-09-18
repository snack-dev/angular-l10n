import { Component } from '@angular/core';
// FormBuilder with formControl.
import { FormBuilder, FormGroup, AbstractControl } from '@angular/forms';
// Services.
import { Locale, LocaleService, LocalizationService, LocaleParser } from 'angular2localization';
// Directives for FormBuilder with formControl.
import { validateLocaleNumber } from 'angular2localization';

@Component({
    templateUrl: 'validation.component.html'
})

export class ValidationComponent extends Locale {

    // Options.
    digits: string = "1.2-2";
    minValue: number = -Math.round(Math.random() * 10000) / 100;
    maxValue: number = Math.round(Math.random() * 10000) / 100;

    parsedValue: number = null;

    // FormBuilder with formControl.
    numberForm: FormGroup;
    decimal: AbstractControl;

    constructor(public locale: LocaleService, public localization: LocalizationService, private fb: FormBuilder) {
        super(locale, localization);

        this.numberForm = fb.group({
            'decimal': ['', validateLocaleNumber(this.locale, this.digits, this.minValue, this.maxValue)]
        });

        // 'decimal' control. 
        this.decimal = this.numberForm.controls['decimal'];

    }

    onSubmit(value: any): void {

        this.parsedValue = LocaleParser.Number(value.decimal, this.locale.getDefaultLocale());

    }

    // ngModel.
    /*constructor(public locale: LocaleService, public localization: LocalizationService) {
        super(locale, localization);
    }

    onSubmit(value: string): void {

        this.parsedValue = LocaleParser.Number(value, this.locale.getDefaultLocale());

    }*/

}
