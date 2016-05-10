import {Component} from '@angular/core';
// Angular 2 Material.
import {MD_CARD_DIRECTIVES} from '@angular2-material/card';
import {MD_LIST_DIRECTIVES} from '@angular2-material/list';
// Services.
import {Locale, LocaleService, LocalizationService} from 'angular2localization/angular2localization';
// Pipes.
import {TranslatePipe} from 'angular2localization/angular2localization';
import {LocaleDatePipe} from 'angular2localization/angular2localization';
import {LocaleCurrencyPipe} from 'angular2localization/angular2localization';

@Component({
    templateUrl: './app/list.component.html',
    pipes: [TranslatePipe, LocaleDatePipe, LocaleCurrencyPipe],
    directives: [MD_CARD_DIRECTIVES, MD_LIST_DIRECTIVES]
})

export class ListComponent extends Locale {

    DATA: Array<Data> = new Array<Data>();

    constructor(public locale: LocaleService, public localization: LocalizationService) {
        super(locale, localization);

        // Mock data.
        var data = new Data();

        data.name = "Tiger Nixon";
        data.position = "System Architect";
        data.salary = 320800;
        data.startDate = new Date("2011/04/25");
        this.DATA.push(data);

        data = new Data();
        data.name = "Garrett Winters";
        data.position = "Accountant";
        data.salary = 170750;
        data.startDate = new Date("2011/07/25");
        this.DATA.push(data);

        data = new Data();
        data.name = "Ashton Cox";
        data.position = "Junior Technical Author";
        data.salary = 86000;
        data.startDate = new Date("2009/01/12");
        this.DATA.push(data);

        var data = new Data();
        data.name = "Cedric Kelly";
        data.position = "Senior Javascript Developer";
        data.salary = 433060;
        data.startDate = new Date("2012/03/29");
        this.DATA.push(data);

        var data = new Data();
        data.name = "Airi Satou";
        data.position = "Accountant";
        data.salary = 162700;
        data.startDate = new Date("2008/11/28");
        this.DATA.push(data);

    }

}

export class Data {

    name: string;
    position: string;
    salary: number;
    startDate: Date;

}
