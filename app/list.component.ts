import {Component} from '@angular/core';
// Angular 2 Material.
import {MD_CARD_DIRECTIVES} from '@angular2-material/card';
import {MD_LIST_DIRECTIVES} from '@angular2-material/list';
// Services.
import {LocalizationService} from 'angular2localization/angular2localization';
// Pipes.
import {TranslatePipe} from 'angular2localization/angular2localization';
import {TranslateArrayPipe} from 'angular2localization/angular2localization';

@Component({
    templateUrl: './app/list.component.html',
    providers: [LocalizationService],
    pipes: [TranslatePipe, TranslateArrayPipe],
    directives: [MD_CARD_DIRECTIVES, MD_LIST_DIRECTIVES]
})

export class ListComponent {

    // Array of Data objects.
    DATA: Array<Data> = new Array<Data>();
    
    // Array of arrays.
    /*DATA: any[][] = [];*/

    constructor(public localizationSorting: LocalizationService) {

        this.localizationSorting.translationProvider('./resources/locale-data-'); // Required: initializes the translation provider with the given path prefix.

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
        
        // Array of arrays.
        /*this.DATA = [
            ["Garrett Winters", "System Architect", 320800, new Date("2011/04/25")],
            ["Tiger Nixon", "Accountant", 170750, new Date("2011/07/25")]
        ];*/

    }

}

export class Data {

    name: string;
    position: string;
    salary: number;
    startDate: Date;

}
