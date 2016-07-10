import { Component } from '@angular/core';
// FormBuilder with formControl.
/*import { FORM_DIRECTIVES, REACTIVE_FORM_DIRECTIVES, FormBuilder, FormGroup, AbstractControl } from '@angular/forms';*/
// Angular 2 Material.
import {
    MD_CARD_DIRECTIVES,
    MD_INPUT_DIRECTIVES,
    MdButton
} from './shared/material';
// Services.
import { Locale, LocaleService, LocalizationService, LocaleParser } from 'angular2localization/angular2localization';
// Pipes.
import { TranslatePipe } from 'angular2localization/angular2localization';
import { LocaleDecimalPipe } from 'angular2localization/angular2localization';
// Directives for FormBuilder with formControl.
/*import { LocaleNumberValidator, validateLocaleNumber } from 'angular2localization/angular2localization';*/
// Directives for ngModel.
import { LocaleNumberValidator } from 'angular2localization/angular2localization';

@Component({
    templateUrl: './app/validation.component.html',
    /*directives: [FORM_DIRECTIVES, REACTIVE_FORM_DIRECTIVES, LocaleNumberValidator, MD_CARD_DIRECTIVES, MD_INPUT_DIRECTIVES, MdButton],*/ // FormBuilder with formControl.
    directives: [LocaleNumberValidator, MD_CARD_DIRECTIVES, MD_INPUT_DIRECTIVES, MdButton],
    pipes: [TranslatePipe, LocaleDecimalPipe]
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
        super(locale, localization)

        this.numberForm = fb.group({
            'decimal': ['', validateLocaleNumber(this.locale, this.digits, this.minValue, this.maxValue)]
        });

        // 'decimal' control. 
        this.decimal = this.numberForm.controls['decimal'];

    }

    onSubmit(value: any) {

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
