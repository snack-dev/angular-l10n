"use strict";
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
var core_1 = require('@angular/core');
// Angular 2 Material.
var card_1 = require('@angular2-material/card');
var list_1 = require('@angular2-material/list');
var button_1 = require('@angular2-material/button');
var input_1 = require('@angular2-material/input');
// Services.
var angular2localization_1 = require('angular2localization/angular2localization');
// Pipes.
var angular2localization_2 = require('angular2localization/angular2localization');
var angular2localization_3 = require('angular2localization/angular2localization');
var angular2localization_4 = require('angular2localization/angular2localization');
var ListComponent = (function (_super) {
    __extends(ListComponent, _super);
    // Async methods.
    /*get ASYNC_DATA(): Observable<Array<Data>> {

        return new Observable<any>((observer: Observer<Array<Data>>) => {

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
        this.intlSupport = angular2localization_1.IntlSupport.Collator(this.locale.getCurrentLanguage());
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
exports.ListComponent = ListComponent;
var Data = (function () {
    function Data() {
    }
    return Data;
}());
exports.Data = Data;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsaXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQSxxQkFBd0IsZUFBZSxDQUFDLENBQUE7QUFHeEMsc0JBQXNCO0FBQ3RCLHFCQUFpQyx5QkFBeUIsQ0FBQyxDQUFBO0FBQzNELHFCQUFpQyx5QkFBeUIsQ0FBQyxDQUFBO0FBQzNELHVCQUF1QiwyQkFBMkIsQ0FBQyxDQUFBO0FBQ25ELHNCQUFrQywwQkFBMEIsQ0FBQyxDQUFBO0FBQzdELFlBQVk7QUFDWixxQ0FBc0UsMkNBQTJDLENBQUMsQ0FBQTtBQUNsSCxTQUFTO0FBQ1QscUNBQTRCLDJDQUEyQyxDQUFDLENBQUE7QUFDeEUscUNBQTZCLDJDQUEyQyxDQUFDLENBQUE7QUFDekUscUNBQWlDLDJDQUEyQyxDQUFDLENBQUE7QUFRN0U7SUFBbUMsaUNBQU07SUFrQnJDLGlCQUFpQjtJQUNqQjs7Ozs7Ozs7O09BU0c7SUFFSCx1QkFBbUIsTUFBcUIsRUFBUyxZQUFpQztRQUM5RSxrQkFBTSxNQUFNLEVBQUUsWUFBWSxDQUFDLENBQUM7UUFEYixXQUFNLEdBQU4sTUFBTSxDQUFlO1FBQVMsaUJBQVksR0FBWixZQUFZLENBQXFCO1FBeEJsRiwrQ0FBK0M7UUFDL0MsYUFBUSxHQUFVLEVBQUUsQ0FBQztRQTBCakIsSUFBSSxDQUFDLFdBQVcsR0FBRyxrQ0FBVyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGtCQUFrQixFQUFFLENBQUMsQ0FBQztRQUUxRSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUM1QixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUMvQixJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztRQUNsQixJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztR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SUFvSkYsb0JBQUM7QUFBRCxDQUFDLEFBbEpELENBQW1DLDZCQUFNLEdBa0p4QztBQWxKWSxxQkFBYSxnQkFrSnpCLENBQUE7QUFFRDtJQUFBO0lBT0EsQ0FBQztJQUFELFdBQUM7QUFBRCxDQUFDLEFBUEQsSUFPQztBQVBZLFlBQUksT0FPaEIsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtPYnNlcnZlcn0gZnJvbSAncnhqcy9PYnNlcnZlcic7XHJcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcclxuLy8gQW5ndWxhciAyIE1hdGVyaWFsLlxyXG5pbXBvcnQge01EX0NBUkRfRElSRUNUSVZFU30gZnJvbSAnQGFuZ3VsYXIyLW1hdGVyaWFsL2NhcmQnO1xyXG5pbXBvcnQge01EX0xJU1RfRElSRUNUSVZFU30gZnJvbSAnQGFuZ3VsYXIyLW1hdGVyaWFsL2xpc3QnO1xyXG5pbXBvcnQge01kQnV0dG9ufSBmcm9tICdAYW5ndWxhcjItbWF0ZXJpYWwvYnV0dG9uJztcclxuaW1wb3J0IHtNRF9JTlBVVF9ESVJFQ1RJVkVTfSBmcm9tICdAYW5ndWxhcjItbWF0ZXJpYWwvaW5wdXQnO1xyXG4vLyBTZXJ2aWNlcy5cclxuaW1wb3J0IHtMb2NhbGUsIExvY2FsZVNlcnZpY2UsIExvY2FsaXphdGlvblNlcnZpY2UsIEludGxTdXBwb3J0fSBmcm9tICdhbmd1bGFyMmxvY2FsaXphdGlvbi9hbmd1bGFyMmxvY2FsaXphdGlvbic7XHJcbi8vIFBpcGVzLlxyXG5pbXBvcnQge1RyYW5zbGF0ZVBpcGV9IGZyb20gJ2FuZ3VsYXIybG9jYWxpemF0aW9uL2FuZ3VsYXIybG9jYWxpemF0aW9uJztcclxuaW1wb3J0IHtMb2NhbGVEYXRlUGlwZX0gZnJvbSAnYW5ndWxhcjJsb2NhbGl6YXRpb24vYW5ndWxhcjJsb2NhbGl6YXRpb24nO1xyXG5pbXBvcnQge0xvY2FsZUN1cnJlbmN5UGlwZX0gZnJvbSAnYW5ndWxhcjJsb2NhbGl6YXRpb24vYW5ndWxhcjJsb2NhbGl6YXRpb24nO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICB0ZW1wbGF0ZVVybDogJy4vYXBwL2xpc3QuY29tcG9uZW50Lmh0bWwnLFxyXG4gICAgcGlwZXM6IFtUcmFuc2xhdGVQaXBlLCBMb2NhbGVEYXRlUGlwZSwgTG9jYWxlQ3VycmVuY3lQaXBlXSxcclxuICAgIGRpcmVjdGl2ZXM6IFtNRF9DQVJEX0RJUkVDVElWRVMsIE1EX0xJU1RfRElSRUNUSVZFUywgTWRCdXR0b24sIE1EX0lOUFVUX0RJUkVDVElWRVNdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgTGlzdENvbXBvbmVudCBleHRlbmRzIExvY2FsZSB7XHJcblxyXG4gICAgaW50bFN1cHBvcnQ6IGJvb2xlYW47XHJcblxyXG4gICAgREFUQTogQXJyYXk8RGF0YT47XHJcblxyXG4gICAgLy8gQXJyYXkgdGhhdCBjb250YWlucyB0aGUgY29sdW1ucyB0byBsb29rIGZvci5cclxuICAgIGtleU5hbWVzOiBhbnlbXSA9IFtdO1xyXG5cclxuICAgIC8vIFRoZSBjb2x1bW4gdGhhdCBjb250YWlucyB0aGUga2V5cyBvZiB0aGUgdmFsdWVzIHRvIGJlIG9yZGVyZWQuXHJcbiAgICBrZXlOYW1lOiBhbnk7XHJcblxyXG4gICAgLy8gJ2FzYycgb3IgJ2Rlc2MnLlxyXG4gICAgb3JkZXI6IHN0cmluZztcclxuXHJcbiAgICAvLyBUaGUgc3RyaW5nIHRvIHNlYXJjaC5cclxuICAgIHM6IHN0cmluZztcclxuXHJcbiAgICAvLyBBc3luYyBtZXRob2RzLlxyXG4gICAgLypnZXQgQVNZTkNfREFUQSgpOiBPYnNlcnZhYmxlPEFycmF5PERhdGE+PiB7XHJcblxyXG4gICAgICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZTxhbnk+KChvYnNlcnZlcjogT2JzZXJ2ZXI8QXJyYXk8RGF0YT4+KSA9PiB7XHJcblxyXG4gICAgICAgICAgICBvYnNlcnZlci5uZXh0KHRoaXMuREFUQSk7XHJcbiAgICAgICAgICAgIG9ic2VydmVyLmNvbXBsZXRlKCk7XHJcblxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH0qL1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBsb2NhbGU6IExvY2FsZVNlcnZpY2UsIHB1YmxpYyBsb2NhbGl6YXRpb246IExvY2FsaXphdGlvblNlcnZpY2UpIHtcclxuICAgICAgICBzdXBlcihsb2NhbGUsIGxvY2FsaXphdGlvbik7XHJcblxyXG4gICAgICAgIHRoaXMuaW50bFN1cHBvcnQgPSBJbnRsU3VwcG9ydC5Db2xsYXRvcih0aGlzLmxvY2FsZS5nZXRDdXJyZW50TGFuZ3VhZ2UoKSk7XHJcblxyXG4gICAgICAgIHRoaXMuREFUQSA9IHRoaXMubG9hZERhdGEoKTtcclxuICAgICAgICB0aGlzLmtleU5hbWVzLnB1c2goJ3Bvc2l0aW9uJyk7XHJcbiAgICAgICAgdGhpcy5rZXlOYW1lID0gXCJcIjtcclxuICAgICAgICB0aGlzLm9yZGVyID0gXCJcIjtcclxuICAgICAgICB0aGlzLnMgPSBcIlwiO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBvcmRlckJ5KGtleU5hbWU6IHN0cmluZywgb3JkZXI/OiBzdHJpbmcpIHtcclxuXHJcbiAgICAgICAgdGhpcy5EQVRBID0gdGhpcy5sb2NhbGl6YXRpb24uc29ydCh0aGlzLkRBVEEsIGtleU5hbWUsIG9yZGVyLCBcIlwiLCB7IHNlbnNpdGl2aXR5OiAndmFyaWFudCcgfSk7XHJcblxyXG4gICAgICAgIC8vIEFzeW5jIG1ldGhvZHMuXHJcbiAgICAgICAgLyp0aGlzLmxvY2FsaXphdGlvbi5zb3J0QXN5bmModGhpcy5EQVRBLCBrZXlOYW1lLCBvcmRlciwgXCJcIiwgeyBzZW5zaXRpdml0eTogJ3ZhcmlhbnQnIH0pLmZvckVhY2goXHJcblxyXG4gICAgICAgICAgICAvLyBOZXh0LlxyXG4gICAgICAgICAgICAobGlzdDogQXJyYXk8RGF0YT4pID0+IHsgdGhpcy5EQVRBID0gbGlzdCB9XHJcblxyXG4gICAgICAgICk7Ki9cclxuXHJcbiAgICAgICAgLy8gU3RvcmVzIHBhcmFtZXRlcnMuXHJcbiAgICAgICAgdGhpcy5rZXlOYW1lID0ga2V5TmFtZTtcclxuICAgICAgICB0aGlzLm9yZGVyID0gb3JkZXI7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHNlYXJjaChzOiBzdHJpbmcpIHtcclxuXHJcbiAgICAgICAgLy8gSW5pdGlhbGl6ZXMgdGhlIGRhdGEgaWYgdGhlIHNlYXJjaCBzdHJpbmcgaXMgc2hvcnRlciB0aGFuIHRoZSBwcmV2aW91cy5cclxuICAgICAgICBpZiAocy5sZW5ndGggPCB0aGlzLnMubGVuZ3RoKSB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLkRBVEEgPSB0aGlzLmxvY2FsaXphdGlvbi5zZWFyY2gocywgdGhpcy5sb2FkRGF0YSgpLCB0aGlzLmtleU5hbWVzLCB7IHVzYWdlOiAnc2VhcmNoJywgc2Vuc2l0aXZpdHk6ICdiYXNlJyB9KTtcclxuICAgICAgICAgICAgLy8gS2VlcHMgc29ydGluZy5cclxuICAgICAgICAgICAgdGhpcy5vcmRlckJ5KHRoaXMua2V5TmFtZSwgdGhpcy5vcmRlcik7XHJcblxyXG4gICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICAvLyBDb250aW51ZXMgdGhlIHNlYXJjaCB3aXRoIHRoZSBlbnRlcmVkIHN0cmluZy5cclxuICAgICAgICAgICAgdGhpcy5EQVRBID0gdGhpcy5sb2NhbGl6YXRpb24uc2VhcmNoKHMsIHRoaXMuREFUQSwgdGhpcy5rZXlOYW1lcywgeyB1c2FnZTogJ3NlYXJjaCcsIHNlbnNpdGl2aXR5OiAnYmFzZScgfSk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gQXN5bmMgbWV0aG9kcy5cclxuICAgICAgICAvKnRoaXMuREFUQSA9IG5ldyBBcnJheTxEYXRhPigpO1xyXG5cclxuICAgICAgICB0aGlzLmxvY2FsaXphdGlvbi5zZWFyY2hBc3luYyhzLCB0aGlzLmxvYWREYXRhKCksIHRoaXMua2V5TmFtZXMsIHsgdXNhZ2U6ICdzZWFyY2gnLCBzZW5zaXRpdml0eTogJ2Jhc2UnIH0pLmZvckVhY2goXHJcblxyXG4gICAgICAgICAgICAvLyBOZXh0LlxyXG4gICAgICAgICAgICAoZGF0YTogRGF0YSkgPT4geyB0aGlzLkRBVEEucHVzaChkYXRhKSB9XHJcblxyXG4gICAgICAgICk7Ki9cclxuXHJcbiAgICAgICAgLy8gU3RvcmVzIHRoZSBwYXJhbWV0ZXIuXHJcbiAgICAgICAgdGhpcy5zID0gcztcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmVzZXQoKSB7XHJcblxyXG4gICAgICAgIC8vIEluaXRpYWxpemVzIHRoZSBkYXRhLlxyXG4gICAgICAgIHRoaXMuREFUQSA9IHRoaXMubG9hZERhdGEoKTtcclxuICAgICAgICAvLyBLZWVwcyBzb3J0aW5nLlxyXG4gICAgICAgIHRoaXMub3JkZXJCeSh0aGlzLmtleU5hbWUsIHRoaXMub3JkZXIpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBsb2FkRGF0YSgpOiBBcnJheTxhbnk+IHtcclxuXHJcbiAgICAgICAgLy8gTW9jayBkYXRhLiAgICBcclxuICAgICAgICB2YXIgREFUQSA9IG5ldyBBcnJheTxEYXRhPigpO1xyXG5cclxuICAgICAgICB2YXIgZGF0YSA9IG5ldyBEYXRhKCk7XHJcblxyXG4gICAgICAgIGRhdGEubmFtZSA9IFwiVGlnZXIgTml4b25cIjtcclxuICAgICAgICBkYXRhLnBvc2l0aW9uID0gXCJTeXN0ZW0gQXJjaGl0ZWN0XCI7XHJcbiAgICAgICAgZGF0YS5zYWxhcnkgPSAzMjA4MDA7XHJcbiAgICAgICAgZGF0YS5zdGFydERhdGUgPSBuZXcgRGF0ZShcIjIwMTEvMDQvMjVcIik7XHJcbiAgICAgICAgREFUQS5wdXNoKGRhdGEpO1xyXG5cclxuICAgICAgICBkYXRhID0gbmV3IERhdGEoKTtcclxuICAgICAgICBkYXRhLm5hbWUgPSBcIkdhcnJldHQgV2ludGVyc1wiO1xyXG4gICAgICAgIGRhdGEucG9zaXRpb24gPSBcIkFjY291bnRhbnRcIjtcclxuICAgICAgICBkYXRhLnNhbGFyeSA9IDE3MDc1MDtcclxuICAgICAgICBkYXRhLnN0YXJ0RGF0ZSA9IG5ldyBEYXRlKFwiMjAxMS8wNy8yNVwiKTtcclxuICAgICAgICBEQVRBLnB1c2goZGF0YSk7XHJcblxyXG4gICAgICAgIGRhdGEgPSBuZXcgRGF0YSgpO1xyXG4gICAgICAgIGRhdGEubmFtZSA9IFwiQXNodG9uIENveFwiO1xyXG4gICAgICAgIGRhdGEucG9zaXRpb24gPSBcIkp1bmlvciBUZWNobmljYWwgQXV0aG9yXCI7XHJcbiAgICAgICAgZGF0YS5zYWxhcnkgPSA4NjAwMDtcclxuICAgICAgICBkYXRhLnN0YXJ0RGF0ZSA9IG5ldyBEYXRlKFwiMjAwOS8wMS8xMlwiKTtcclxuICAgICAgICBEQVRBLnB1c2goZGF0YSk7XHJcblxyXG4gICAgICAgIGRhdGEgPSBuZXcgRGF0YSgpO1xyXG4gICAgICAgIGRhdGEubmFtZSA9IFwiQ2VkcmljIEtlbGx5XCI7XHJcbiAgICAgICAgZGF0YS5wb3NpdGlvbiA9IFwiU2VuaW9yIEphdmFzY3JpcHQgRGV2ZWxvcGVyXCI7XHJcbiAgICAgICAgZGF0YS5zYWxhcnkgPSA0MzMwNjA7XHJcbiAgICAgICAgZGF0YS5zdGFydERhdGUgPSBuZXcgRGF0ZShcIjIwMTIvMDMvMjlcIik7XHJcbiAgICAgICAgREFUQS5wdXNoKGRhdGEpO1xyXG5cclxuICAgICAgICBkYXRhID0gbmV3IERhdGEoKTtcclxuICAgICAgICBkYXRhLm5hbWUgPSBcIkFpcmkgU2F0b3VcIjtcclxuICAgICAgICBkYXRhLnBvc2l0aW9uID0gXCJBY2NvdW50YW50XCI7XHJcbiAgICAgICAgZGF0YS5zYWxhcnkgPSAxNjI3MDA7XHJcbiAgICAgICAgZGF0YS5zdGFydERhdGUgPSBuZXcgRGF0ZShcIjIwMDgvMTEvMjhcIik7XHJcbiAgICAgICAgREFUQS5wdXNoKGRhdGEpO1xyXG5cclxuICAgICAgICByZXR1cm4gREFUQTtcclxuXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgRGF0YSB7XHJcblxyXG4gICAgbmFtZTogc3RyaW5nO1xyXG4gICAgcG9zaXRpb246IHN0cmluZztcclxuICAgIHNhbGFyeTogbnVtYmVyO1xyXG4gICAgc3RhcnREYXRlOiBEYXRlO1xyXG5cclxufSJdfQ==