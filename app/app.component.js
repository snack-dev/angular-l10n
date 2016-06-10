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
var router_1 = require('@angular/router');
// Angular 2 Material.
var dir_1 = require('@angular2-material/core/rtl/dir');
var sidenav_1 = require('@angular2-material/sidenav');
var list_1 = require('@angular2-material/list');
var toolbar_1 = require('@angular2-material/toolbar');
// Services.
var angular2localization_1 = require('angular2localization/angular2localization');
// Pipes.
var angular2localization_2 = require('angular2localization/angular2localization');
// Components.
var home_component_1 = require('./home.component');
var i18n_component_1 = require('./i18n.component');
var list_component_1 = require('./list.component');
var validation_component_1 = require('./validation.component');
var AppComponent = (function (_super) {
    __extends(AppComponent, _super);
    function AppComponent(router, locale, localization) {
        _super.call(this, null, localization);
        this.router = router;
        this.locale = locale;
        this.localization = localization;
        // Adds a new language (ISO 639 two-letter or three-letter code).
        this.locale.addLanguage('en');
        this.locale.addLanguage('it');
        this.locale.addLanguage('ar');
        // Add a new language here.
        // Required: default language, country (ISO 3166 two-letter, uppercase code) and expiry (No days). If the expiry is omitted, the cookie becomes a session cookie.
        this.locale.definePreferredLocale('en', 'US', 30);
        // Optional: default currency (ISO 4217 three-letter code).
        this.locale.definePreferredCurrency('USD');
        // Initializes LocalizationService: asynchronous loading.
        this.localization.translationProvider('./resources/locale-'); // Required: initializes the translation provider with the given path prefix.
        this.localization.updateTranslation(); // Need to update the translation.
        // Initializes direction.
        if (this.locale.getCurrentLanguage() == "ar") {
            this.dir = 'rtl';
        }
        else {
            this.dir = 'ltr';
        }
    }
    AppComponent.prototype.ngOnInit = function () {
        this.router.navigate(['/home']);
    };
    Object.defineProperty(AppComponent.prototype, "currentCountry", {
        // Gets the current country.
        get: function () {
            return this.locale.getCurrentCountry();
        },
        enumerable: true,
        configurable: true
    });
    // Sets a new locale & currency.
    AppComponent.prototype.selectLocale = function (language, country, currency) {
        this.locale.setCurrentLocale(language, country);
        this.locale.setCurrentCurrency(currency);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-component',
            directives: [router_1.ROUTER_DIRECTIVES, dir_1.Dir, sidenav_1.MD_SIDENAV_DIRECTIVES, list_1.MD_LIST_DIRECTIVES, toolbar_1.MdToolbar],
            templateUrl: './app/app.component.html',
            providers: [angular2localization_1.LocaleService, angular2localization_1.LocalizationService],
            pipes: [angular2localization_2.TranslatePipe]
        }),
        router_1.Routes([
            { path: '/home', component: home_component_1.HomeComponent },
            { path: '/i18n', component: i18n_component_1.I18nComponent },
            { path: '/list', component: list_component_1.ListComponent },
            { path: '/validation', component: validation_component_1.ValidationComponent }
        ]), 
        __metadata('design:paramtypes', [router_1.Router, angular2localization_1.LocaleService, angular2localization_1.LocalizationService])
    ], AppComponent);
    return AppComponent;
}(angular2localization_1.Locale));
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEscUJBQWdDLGVBQWUsQ0FBQyxDQUFBO0FBQ2hELHVCQUFnRCxpQkFBaUIsQ0FBQyxDQUFBO0FBQ2xFLHNCQUFzQjtBQUN0QixvQkFBa0IsaUNBQWlDLENBQUMsQ0FBQTtBQUNwRCx3QkFBb0MsNEJBQTRCLENBQUMsQ0FBQTtBQUNqRSxxQkFBaUMseUJBQXlCLENBQUMsQ0FBQTtBQUMzRCx3QkFBd0IsNEJBQTRCLENBQUMsQ0FBQTtBQUNyRCxZQUFZO0FBQ1oscUNBQXlELDJDQUEyQyxDQUFDLENBQUE7QUFDckcsU0FBUztBQUNULHFDQUE0QiwyQ0FBMkMsQ0FBQyxDQUFBO0FBQ3hFLGNBQWM7QUFDZCwrQkFBNEIsa0JBQWtCLENBQUMsQ0FBQTtBQUMvQywrQkFBNEIsa0JBQWtCLENBQUMsQ0FBQTtBQUMvQywrQkFBNEIsa0JBQWtCLENBQUMsQ0FBQTtBQUMvQyxxQ0FBa0Msd0JBQXdCLENBQUMsQ0FBQTtBQW1CM0Q7SUFBa0MsZ0NBQU07SUFJcEMsc0JBQW9CLE1BQWMsRUFBUyxNQUFxQixFQUFTLFlBQWlDO1FBQ3RHLGtCQUFNLElBQUksRUFBRSxZQUFZLENBQUMsQ0FBQztRQURWLFdBQU0sR0FBTixNQUFNLENBQVE7UUFBUyxXQUFNLEdBQU4sTUFBTSxDQUFlO1FBQVMsaUJBQVksR0FBWixZQUFZLENBQXFCO1FBR3RHLGlFQUFpRTtRQUNqRSxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM5QixJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM5QixJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM5QiwyQkFBMkI7UUFFM0IsaUtBQWlLO1FBQ2pLLElBQUksQ0FBQyxNQUFNLENBQUMscUJBQXFCLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQztRQUVsRCwyREFBMkQ7UUFDM0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyx1QkFBdUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUUzQyx5REFBeUQ7UUFDekQsSUFBSSxDQUFDLFlBQVksQ0FBQyxtQkFBbUIsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUMsNkVBQTZFO1FBQzNJLElBQUksQ0FBQyxZQUFZLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxDQUFDLGtDQUFrQztRQUV6RSx5QkFBeUI7UUFDekIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxrQkFBa0IsRUFBRSxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUM7WUFFM0MsSUFBSSxDQUFDLEdBQUcsR0FBRyxLQUFLLENBQUM7UUFFckIsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBRUosSUFBSSxDQUFDLEdBQUcsR0FBRyxLQUFLLENBQUM7UUFFckIsQ0FBQztJQUVMLENBQUM7SUFFRCwrQkFBUSxHQUFSO1FBRUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBRXBDLENBQUM7SUFHRCxzQkFBSSx3Q0FBYztRQURsQiw0QkFBNEI7YUFDNUI7WUFFSSxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBRTNDLENBQUM7OztPQUFBO0lBRUQsZ0NBQWdDO0lBQ2hDLG1DQUFZLEdBQVosVUFBYSxRQUFnQixFQUFFLE9BQWUsRUFBRSxRQUFnQjtRQUU1RCxJQUFJLENBQUMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUNoRCxJQUFJLENBQUMsTUFBTSxDQUFDLGtCQUFrQixDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBRTdDLENBQUM7SUF0RUw7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLGVBQWU7WUFDekIsVUFBVSxFQUFFLENBQUMsMEJBQWlCLEVBQUUsU0FBRyxFQUFFLCtCQUFxQixFQUFFLHlCQUFrQixFQUFFLG1CQUFTLENBQUM7WUFDMUYsV0FBVyxFQUFFLDBCQUEwQjtZQUN2QyxTQUFTLEVBQUUsQ0FBQyxvQ0FBYSxFQUFFLDBDQUFtQixDQUFDO1lBQy9DLEtBQUssRUFBRSxDQUFDLG9DQUFhLENBQUM7U0FDekIsQ0FBQztRQUVELGVBQU0sQ0FBQztZQUNKLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsOEJBQWEsRUFBRTtZQUMzQyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLDhCQUFhLEVBQUU7WUFDM0MsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSw4QkFBYSxFQUFFO1lBQzNDLEVBQUUsSUFBSSxFQUFFLGFBQWEsRUFBRSxTQUFTLEVBQUUsMENBQW1CLEVBQUU7U0FDMUQsQ0FBQzs7b0JBQUE7SUEyREYsbUJBQUM7QUFBRCxDQUFDLEFBekRELENBQWtDLDZCQUFNLEdBeUR2QztBQXpEWSxvQkFBWSxlQXlEeEIsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge1JvdXRlcywgUm91dGVyLCBST1VURVJfRElSRUNUSVZFU30gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuLy8gQW5ndWxhciAyIE1hdGVyaWFsLlxyXG5pbXBvcnQge0Rpcn0gZnJvbSAnQGFuZ3VsYXIyLW1hdGVyaWFsL2NvcmUvcnRsL2Rpcic7XHJcbmltcG9ydCB7TURfU0lERU5BVl9ESVJFQ1RJVkVTfSBmcm9tICdAYW5ndWxhcjItbWF0ZXJpYWwvc2lkZW5hdic7XHJcbmltcG9ydCB7TURfTElTVF9ESVJFQ1RJVkVTfSBmcm9tICdAYW5ndWxhcjItbWF0ZXJpYWwvbGlzdCc7XHJcbmltcG9ydCB7TWRUb29sYmFyfSBmcm9tICdAYW5ndWxhcjItbWF0ZXJpYWwvdG9vbGJhcic7XHJcbi8vIFNlcnZpY2VzLlxyXG5pbXBvcnQge0xvY2FsZSwgTG9jYWxlU2VydmljZSwgTG9jYWxpemF0aW9uU2VydmljZX0gZnJvbSAnYW5ndWxhcjJsb2NhbGl6YXRpb24vYW5ndWxhcjJsb2NhbGl6YXRpb24nO1xyXG4vLyBQaXBlcy5cclxuaW1wb3J0IHtUcmFuc2xhdGVQaXBlfSBmcm9tICdhbmd1bGFyMmxvY2FsaXphdGlvbi9hbmd1bGFyMmxvY2FsaXphdGlvbic7XHJcbi8vIENvbXBvbmVudHMuXHJcbmltcG9ydCB7SG9tZUNvbXBvbmVudH0gZnJvbSAnLi9ob21lLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7STE4bkNvbXBvbmVudH0gZnJvbSAnLi9pMThuLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7TGlzdENvbXBvbmVudH0gZnJvbSAnLi9saXN0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7VmFsaWRhdGlvbkNvbXBvbmVudH0gZnJvbSAnLi92YWxpZGF0aW9uLmNvbXBvbmVudCc7XHJcblxyXG5leHBvcnQgdHlwZSBMYXlvdXREaXJlY3Rpb24gPSAnbHRyJyB8ICdydGwnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2FwcC1jb21wb25lbnQnLFxyXG4gICAgZGlyZWN0aXZlczogW1JPVVRFUl9ESVJFQ1RJVkVTLCBEaXIsIE1EX1NJREVOQVZfRElSRUNUSVZFUywgTURfTElTVF9ESVJFQ1RJVkVTLCBNZFRvb2xiYXJdLFxyXG4gICAgdGVtcGxhdGVVcmw6ICcuL2FwcC9hcHAuY29tcG9uZW50Lmh0bWwnLFxyXG4gICAgcHJvdmlkZXJzOiBbTG9jYWxlU2VydmljZSwgTG9jYWxpemF0aW9uU2VydmljZV0sIC8vIEluaGVyaXRlZCBieSBhbGwgZGVzY2VuZGFudHMuXHJcbiAgICBwaXBlczogW1RyYW5zbGF0ZVBpcGVdXHJcbn0pXHJcblxyXG5AUm91dGVzKFtcclxuICAgIHsgcGF0aDogJy9ob21lJywgY29tcG9uZW50OiBIb21lQ29tcG9uZW50IH0sXHJcbiAgICB7IHBhdGg6ICcvaTE4bicsIGNvbXBvbmVudDogSTE4bkNvbXBvbmVudCB9LFxyXG4gICAgeyBwYXRoOiAnL2xpc3QnLCBjb21wb25lbnQ6IExpc3RDb21wb25lbnQgfSxcclxuICAgIHsgcGF0aDogJy92YWxpZGF0aW9uJywgY29tcG9uZW50OiBWYWxpZGF0aW9uQ29tcG9uZW50IH1cclxuXSlcclxuXHJcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQgZXh0ZW5kcyBMb2NhbGUgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICAgIGRpcjogTGF5b3V0RGlyZWN0aW9uO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHB1YmxpYyBsb2NhbGU6IExvY2FsZVNlcnZpY2UsIHB1YmxpYyBsb2NhbGl6YXRpb246IExvY2FsaXphdGlvblNlcnZpY2UpIHtcclxuICAgICAgICBzdXBlcihudWxsLCBsb2NhbGl6YXRpb24pO1xyXG5cclxuICAgICAgICAvLyBBZGRzIGEgbmV3IGxhbmd1YWdlIChJU08gNjM5IHR3by1sZXR0ZXIgb3IgdGhyZWUtbGV0dGVyIGNvZGUpLlxyXG4gICAgICAgIHRoaXMubG9jYWxlLmFkZExhbmd1YWdlKCdlbicpO1xyXG4gICAgICAgIHRoaXMubG9jYWxlLmFkZExhbmd1YWdlKCdpdCcpO1xyXG4gICAgICAgIHRoaXMubG9jYWxlLmFkZExhbmd1YWdlKCdhcicpO1xyXG4gICAgICAgIC8vIEFkZCBhIG5ldyBsYW5ndWFnZSBoZXJlLlxyXG5cclxuICAgICAgICAvLyBSZXF1aXJlZDogZGVmYXVsdCBsYW5ndWFnZSwgY291bnRyeSAoSVNPIDMxNjYgdHdvLWxldHRlciwgdXBwZXJjYXNlIGNvZGUpIGFuZCBleHBpcnkgKE5vIGRheXMpLiBJZiB0aGUgZXhwaXJ5IGlzIG9taXR0ZWQsIHRoZSBjb29raWUgYmVjb21lcyBhIHNlc3Npb24gY29va2llLlxyXG4gICAgICAgIHRoaXMubG9jYWxlLmRlZmluZVByZWZlcnJlZExvY2FsZSgnZW4nLCAnVVMnLCAzMCk7XHJcblxyXG4gICAgICAgIC8vIE9wdGlvbmFsOiBkZWZhdWx0IGN1cnJlbmN5IChJU08gNDIxNyB0aHJlZS1sZXR0ZXIgY29kZSkuXHJcbiAgICAgICAgdGhpcy5sb2NhbGUuZGVmaW5lUHJlZmVycmVkQ3VycmVuY3koJ1VTRCcpO1xyXG5cclxuICAgICAgICAvLyBJbml0aWFsaXplcyBMb2NhbGl6YXRpb25TZXJ2aWNlOiBhc3luY2hyb25vdXMgbG9hZGluZy5cclxuICAgICAgICB0aGlzLmxvY2FsaXphdGlvbi50cmFuc2xhdGlvblByb3ZpZGVyKCcuL3Jlc291cmNlcy9sb2NhbGUtJyk7IC8vIFJlcXVpcmVkOiBpbml0aWFsaXplcyB0aGUgdHJhbnNsYXRpb24gcHJvdmlkZXIgd2l0aCB0aGUgZ2l2ZW4gcGF0aCBwcmVmaXguXHJcbiAgICAgICAgdGhpcy5sb2NhbGl6YXRpb24udXBkYXRlVHJhbnNsYXRpb24oKTsgLy8gTmVlZCB0byB1cGRhdGUgdGhlIHRyYW5zbGF0aW9uLlxyXG5cclxuICAgICAgICAvLyBJbml0aWFsaXplcyBkaXJlY3Rpb24uXHJcbiAgICAgICAgaWYgKHRoaXMubG9jYWxlLmdldEN1cnJlbnRMYW5ndWFnZSgpID09IFwiYXJcIikge1xyXG5cclxuICAgICAgICAgICAgdGhpcy5kaXIgPSAncnRsJztcclxuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZGlyID0gJ2x0cic7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcblxyXG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2hvbWUnXSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8vIEdldHMgdGhlIGN1cnJlbnQgY291bnRyeS5cclxuICAgIGdldCBjdXJyZW50Q291bnRyeSgpOiBzdHJpbmcge1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5sb2NhbGUuZ2V0Q3VycmVudENvdW50cnkoKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLy8gU2V0cyBhIG5ldyBsb2NhbGUgJiBjdXJyZW5jeS5cclxuICAgIHNlbGVjdExvY2FsZShsYW5ndWFnZTogc3RyaW5nLCBjb3VudHJ5OiBzdHJpbmcsIGN1cnJlbmN5OiBzdHJpbmcpIHtcclxuXHJcbiAgICAgICAgdGhpcy5sb2NhbGUuc2V0Q3VycmVudExvY2FsZShsYW5ndWFnZSwgY291bnRyeSk7XHJcbiAgICAgICAgdGhpcy5sb2NhbGUuc2V0Q3VycmVudEN1cnJlbmN5KGN1cnJlbmN5KTtcclxuXHJcbiAgICB9XHJcblxyXG59Il19