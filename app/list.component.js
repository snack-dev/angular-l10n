System.register(['@angular/core', '@angular2-material/card', '@angular2-material/list', 'angular2localization/angular2localization'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, card_1, list_1, angular2localization_1, angular2localization_2, angular2localization_3;
    var ListComponent, Data;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (card_1_1) {
                card_1 = card_1_1;
            },
            function (list_1_1) {
                list_1 = list_1_1;
            },
            function (angular2localization_1_1) {
                angular2localization_1 = angular2localization_1_1;
                angular2localization_2 = angular2localization_1_1;
                angular2localization_3 = angular2localization_1_1;
            }],
        execute: function() {
            ListComponent = (function () {
                // Array of arrays.
                /*DATA: any[][] = [];*/
                function ListComponent(localizationSorting) {
                    this.localizationSorting = localizationSorting;
                    // Array of Data objects.
                    this.DATA = new Array();
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
                ListComponent = __decorate([
                    core_1.Component({
                        templateUrl: './app/list.component.html',
                        providers: [angular2localization_1.LocalizationService],
                        pipes: [angular2localization_2.TranslatePipe, angular2localization_3.TranslateArrayPipe],
                        directives: [card_1.MD_CARD_DIRECTIVES, list_1.MD_LIST_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [angular2localization_1.LocalizationService])
                ], ListComponent);
                return ListComponent;
            }());
            exports_1("ListComponent", ListComponent);
            Data = (function () {
                function Data() {
                }
                return Data;
            }());
            exports_1("Data", Data);
        }
    }
});
