import { Component } from '@angular/core';
// FormBuilder with formControl.
/*import { FormBuilder, FormGroup, AbstractControl } from '@angular/forms';*/
// Services.
import { Locale, LocaleService, LocalizationService, LocaleParser } from 'angular2localization/angular2localization';
// Pipes.
import { LocaleDecimalPipe } from 'angular2localization/angular2localization';
// Directives for FormBuilder with formControl.
/*import { LocaleNumberValidator, validateLocaleNumber } from 'angular2localization/angular2localization';*/
// Directives for ngModel.
import { LocaleNumberValidator } from 'angular2localization/angular2localization';

@Component({
    templateUrl: './app/validation.component.html',
    directives: [LocaleNumberValidator],
    pipes: [LocaleDecimalPipe]
})

export class ValidationComponent extends Locale {

    // Options.
    digits: string = "1.2-2";
    minValue: number = -Math.round(Math.random() * 10000) / 100;
    maxValue: number = Math.round(Math.random() * 10000) / 100;

    parsedValue: number = null;

    // FormBuilder with formControl.
    /*numberForm: FormGroup;
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

    }*/

    // ngModel.
    constructor(public locale: LocaleService, public localization: LocalizationService) {
        super(locale, localization);
    }

    onSubmit(value: string): void {

        this.parsedValue = LocaleParser.Number(value, this.locale.getDefaultLocale());

    }

}
