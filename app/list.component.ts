import { Component } from '@angular/core';

import { Observable } from 'rxjs/Observable';
// Services.
import { Locale, LocaleService, LocalizationService, IntlSupport } from 'angular2localization';

@Component({
    templateUrl: 'list.component.html'
})

export class ListComponent extends Locale {

    intlSupport: boolean;

    DATA: Observable<Array<Data>>;

    // Array that contains the columns to look for.
    keyNames: any[];

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

        this.initializeFilters();

        // Reinitializes filters when language changes.
        this.localization.translationChanged.subscribe(
            () => { this.initializeFilters(); }
        );

    }

    initializeFilters(): void {

        this.keyNames = [];
        this.keyNames.push('position');

        this.keyName = "position";
        this.order = "asc";
        this.s = "";

        this.filterData(this.keyName, this.order);

    }

    filterData(keyName: string, order: string): void {

        this.keyName = keyName;
        this.order = order;

        var filteredDATA: Array<Data> = new Array<Data>();

        // Searching.
        this.localization.searchAsync(this.s, this.loadData(), this.keyNames, { usage: 'search', sensitivity: 'base' }).forEach(

            // Next.
            (value: Data) => {

                filteredDATA.push(value);

            }

        ).then(() => {

            // Sorting.
            this.DATA = this.localization.sortAsync(filteredDATA, this.keyName, this.order, "", { sensitivity: 'variant' });

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
