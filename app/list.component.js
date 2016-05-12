System.register(['@angular/core', '@angular2-material/card', '@angular2-material/list', '@angular2-material/button', '@angular2-material/input', 'angular2localization/angular2localization'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
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
    var core_1, card_1, list_1, button_1, input_1, angular2localization_1, angular2localization_2, angular2localization_3, angular2localization_4;
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
            function (button_1_1) {
                button_1 = button_1_1;
            },
            function (input_1_1) {
                input_1 = input_1_1;
            },
            function (angular2localization_1_1) {
                angular2localization_1 = angular2localization_1_1;
                angular2localization_2 = angular2localization_1_1;
                angular2localization_3 = angular2localization_1_1;
                angular2localization_4 = angular2localization_1_1;
            }],
        execute: function() {
            ListComponent = (function (_super) {
                __extends(ListComponent, _super);
                // Async methods.
                /*get ASYNC_DATA(): Observable<Array<Data>> {
            
                    return new Observable((observer: Observer<Array<Data>>) => {
            
                        observer.next(this.DATA);
                        observer.complete();
            
                    });
            
                }*/
                function ListComponent(locale, localization) {
                    _super.call(this, locale, localization);
                    this.locale = locale;
                    this.localization = localization;
                    // Array that contains the columns to look for.
                    this.keyNames = [];
                    this.DATA = this.loadData();
                    this.keyNames.push('position');
                    this.keyName = "";
                    this.order = "";
                    this.s = "";
                }
                ListComponent.prototype.orderBy = function (keyName, order) {
                    this.DATA = this.localization.sort(this.DATA, keyName, order, "", { sensitivity: 'variant' });
                    // Async methods.
                    /*this.localization.sortAsync(this.DATA, keyName, order, "", { sensitivity: 'variant' }).forEach(
            
                        // Next.
                        (list: Array<Data>) => { this.DATA = list }
            
                    );*/
                    // Stores parameters.
                    this.keyName = keyName;
                    this.order = order;
                };
                ListComponent.prototype.search = function (s) {
                    // Initializes the data if the search string is shorter than the previous.
                    if (s.length < this.s.length) {
                        this.DATA = this.localization.search(s, this.loadData(), this.keyNames, { usage: 'search', sensitivity: 'base' });
                        // Keeps sorting.
                        this.orderBy(this.keyName, this.order);
                    }
                    else {
                        // Continues the search with the entered string.
                        this.DATA = this.localization.search(s, this.DATA, this.keyNames, { usage: 'search', sensitivity: 'base' });
                    }
                    // Async methods.
                    /*this.DATA = new Array<Data>();
            
                    this.localization.searchAsync(s, this.loadData(), this.keyNames, { usage: 'search', sensitivity: 'base' }).forEach(
            
                        // Next.
                        (data: Data) => { this.DATA.push(data) }
            
                    );*/
                    // Stores the parameter.
                    this.s = s;
                };
                ListComponent.prototype.reset = function () {
                    // Initializes the data.
                    this.DATA = this.loadData();
                    // Keeps sorting.
                    this.orderBy(this.keyName, this.order);
                };
                ListComponent.prototype.loadData = function () {
                    // Mock data.    
                    var DATA = new Array();
                    var data = new Data();
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
                };
                ListComponent = __decorate([
                    core_1.Component({
                        templateUrl: './app/list.component.html',
                        pipes: [angular2localization_2.TranslatePipe, angular2localization_3.LocaleDatePipe, angular2localization_4.LocaleCurrencyPipe],
                        directives: [card_1.MD_CARD_DIRECTIVES, list_1.MD_LIST_DIRECTIVES, button_1.MdButton, input_1.MD_INPUT_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [angular2localization_1.LocaleService, angular2localization_1.LocalizationService])
                ], ListComponent);
                return ListComponent;
            }(angular2localization_1.Locale));
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
