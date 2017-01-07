import { Component } from '@angular/core';

import { Observable } from 'rxjs/Observable';
// Services.
import { Locale, LocaleService, LocalizationService, IntlSupport } from 'angular2localization';

@Component({
    templateUrl: 'list.component.html'
})

export class ListComponent extends Locale {

    intlSupport: boolean;

    // Data.
    DATA: Array<Data>;

    // Array that contains the columns to look for.
    keyNames: any[] = [];

    // The column that contains the keys of the values to be ordered.
    keyName: any;

    // 'asc' or 'desc'.
    order: string;

    // The string to search.
    s: string;

    constructor(public locale: LocaleService, public localization: LocalizationService) {
        super(locale, localization);

        // Initializes LocalizationService: asynchronous loading.
        this.localization.translationProvider('./resources/locale-list-'); // Required: initializes the translation provider with the given path prefix.
        this.localization.updateTranslation(); // Need to update the translation.

        this.intlSupport = IntlSupport.Collator(this.locale.getCurrentLanguage());

        this.DATA = this.loadData();

        this.keyNames.push('position');
        this.keyName = "";
        this.order = "";
        this.s = "";

    }

    orderBy(keyName: string, order?: string): void {

        if (keyName != "" && order != "") {

            this.localization.sortAsync(this.DATA, keyName, order, "", { sensitivity: 'variant' }).subscribe(

                (list: Array<Data>) => { this.DATA = list; }

            );

            // Stores parameters.
            this.keyName = keyName;
            this.order = order;

        }

    }

    search(s: string): void {

        this.DATA = new Array<Data>();

        this.localization.searchAsync(s, this.loadData(), this.keyNames, { usage: 'search', sensitivity: 'base' }).forEach(

            // Next.
            (data: Data) => { this.DATA.push(data); }

        ).then(() => {

            // Keeps sorting.
            this.orderBy(this.keyName, this.order);

        });

    }

    loadData(): Array<any> {

        // Mock data.    
        var DATA: Array<Data> = new Array<Data>();

        var data: Data = new Data();

        data.name = "Tiger Nixon";
        data.position = "System Architect";
        data.salary = 320800;
        data.startDate = new Date("2011/04/25");
        DATA.push(data);

        data = new Data();
        data.name = "Garrett Winters";
        data.position = "Accountant";
        data.salary = 170750;
        data.startDate = new Date("2011/07/25");
        DATA.push(data);

        data = new Data();
        data.name = "Ashton Cox";
        data.position = "Junior Technical Author";
        data.salary = 86000;
        data.startDate = new Date("2009/01/12");
        DATA.push(data);

        data = new Data();
        data.name = "Cedric Kelly";
        data.position = "Senior Javascript Developer";
        data.salary = 433060;
        data.startDate = new Date("2012/03/29");
        DATA.push(data);

        data = new Data();
        data.name = "Airi Satou";
        data.position = "Accountant";
        data.salary = 162700;
        data.startDate = new Date("2008/11/28");
        DATA.push(data);

        return DATA;

    }

}

export class Data {

    name: string;
    position: string;
    salary: number;
    startDate: Date;

}
