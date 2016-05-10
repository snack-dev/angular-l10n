import {Component} from '@angular/core';
// Angular 2 Material.
import {MD_CARD_DIRECTIVES} from '@angular2-material/card';
// Services.
import {Locale, LocaleService, LocalizationService} from 'angular2localization/angular2localization';
// Pipes.
import {TranslatePipe} from 'angular2localization/angular2localization';
import {LocaleDatePipe} from 'angular2localization/angular2localization';
import {LocaleDecimalPipe, LocalePercentPipe, LocaleCurrencyPipe} from 'angular2localization/angular2localization';

@Component({
    templateUrl: './app/home.component.html',
    pipes: [TranslatePipe, LocaleDatePipe, LocaleDecimalPipe, LocalePercentPipe, LocaleCurrencyPipe],
    directives: [MD_CARD_DIRECTIVES]
})

export class HomeComponent extends Locale {

    today: number;
    pi: number;
    a: number;
    b: number;

    constructor(public locale: LocaleService, public localization: LocalizationService) {
        super(locale, localization);

        this.today = Date.now();
        this.pi = 3.14159;
        this.a = Math.random();
        this.b = Math.random() * 1000;

    }

}