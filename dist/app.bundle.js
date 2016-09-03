webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var platform_browser_dynamic_1 = __webpack_require__(1);
	var core_1 = __webpack_require__(3);
	var app_module_1 = __webpack_require__(24);
	core_1.enableProdMode();
	platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);


/***/ },

/***/ 24:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	// Root module.
	var core_1 = __webpack_require__(3);
	var platform_browser_1 = __webpack_require__(22);
	// Bootstrap component.
	var app_component_1 = __webpack_require__(25);
	var app_routes_1 = __webpack_require__(34);
	// Components.
	var home_component_1 = __webpack_require__(62);
	var i18n_component_1 = __webpack_require__(63);
	var validation_component_1 = __webpack_require__(64);
	// Feature modules.
	var shared_module_1 = __webpack_require__(68);
	var material_module_1 = __webpack_require__(69);
	// Angular 2 Localization.
	var angular2localization_1 = __webpack_require__(26);
	var AppModule = (function () {
	    function AppModule() {
	    }
	    AppModule = __decorate([
	        core_1.NgModule({
	            imports: [
	                platform_browser_1.BrowserModule,
	                app_routes_1.routing,
	                shared_module_1.SharedModule,
	                material_module_1.MaterialModule,
	                angular2localization_1.LocaleModule.forRoot(),
	                angular2localization_1.LocalizationModule.forRoot() // New instance of LocalizationService.
	            ],
	            declarations: [
	                app_component_1.AppComponent,
	                home_component_1.HomeComponent,
	                i18n_component_1.I18nComponent,
	                validation_component_1.ValidationComponent
	            ],
	            providers: [platform_browser_1.Title],
	            bootstrap: [app_component_1.AppComponent]
	        }), 
	        __metadata('design:paramtypes', [])
	    ], AppModule);
	    return AppModule;
	}());
	exports.AppModule = AppModule;


/***/ },

/***/ 25:
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(3);
	var platform_browser_1 = __webpack_require__(22);
	// Services.
	var angular2localization_1 = __webpack_require__(26);
	var AppComponent = (function (_super) {
	    __extends(AppComponent, _super);
	    function AppComponent(locale, localization, title) {
	        var _this = this;
	        _super.call(this, null, localization);
	        this.locale = locale;
	        this.localization = localization;
	        this.title = title;
	        // Set document title.
	        this.localization.translationChanged.subscribe(
	        // Refresh the document title with the new translation when the selected language changes.
	        function () { _this.title.setTitle(_this.localization.translate('TITLE')); });
	        // Adds a new language (ISO 639 two-letter or three-letter code).
	        this.locale.addLanguage('en');
	        this.locale.addLanguage('it');
	        this.locale.addLanguage('ar');
	        // Add a new language here.
	        /*this.locale.useLocalStorage();*/
	        // Required: default language, country (ISO 3166 two-letter, uppercase code) and expiry (No days). If the expiry is omitted, the cookie becomes a session cookie.
	        this.locale.definePreferredLocale('en', 'US', 30);
	        // Optional: default currency (ISO 4217 three-letter code).
	        this.locale.definePreferredCurrency('USD');
	        // Initializes LocalizationService: asynchronous loading.
	        this.localization.translationProvider('./resources/locale-'); // Required: initializes the translation provider with the given path prefix.
	        /*this.localization.translationProvider('http://localhost:54703/api/values/', 'json', true); */
	        this.localization.updateTranslation(); // Need to update the translation.
	        // Initializes direction.
	        if (this.locale.getCurrentLanguage() == "ar") {
	            this.dir = 'rtl';
	        }
	        else {
	            this.dir = 'ltr';
	        }
	    }
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
	            templateUrl: './app/app.component.html'
	        }), 
	        __metadata('design:paramtypes', [angular2localization_1.LocaleService, angular2localization_1.LocalizationService, platform_browser_1.Title])
	    ], AppComponent);
	    return AppComponent;
	}(angular2localization_1.Locale));
	exports.AppComponent = AppComponent;


/***/ },

/***/ 34:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var router_1 = __webpack_require__(35);
	// Components.
	var home_component_1 = __webpack_require__(62);
	var i18n_component_1 = __webpack_require__(63);
	var validation_component_1 = __webpack_require__(64);
	var appRoutes = [
	    { path: '', redirectTo: 'home', pathMatch: 'full' },
	    { path: 'home', component: home_component_1.HomeComponent },
	    { path: 'i18n', component: i18n_component_1.I18nComponent },
	    {
	        path: 'list', loadChildren: function () {
	            return new Promise(function (resolve) {
	                return __webpack_require__.e/* nsure */(1, function () {
	                    return resolve(__webpack_require__(65).default);
	                });
	            });
	        }
	    },
	    { path: 'validation', component: validation_component_1.ValidationComponent }
	];
	exports.routing = router_1.RouterModule.forRoot(appRoutes, { useHash: true });


/***/ },

/***/ 62:
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(3);
	// Services.
	var angular2localization_1 = __webpack_require__(26);
	var HomeComponent = (function (_super) {
	    __extends(HomeComponent, _super);
	    function HomeComponent(locale, localization) {
	        _super.call(this, locale, localization);
	        this.locale = locale;
	        this.localization = localization;
	        this.today = Date.now();
	        this.pi = 3.14159;
	        this.a = Math.round(Math.random() * 100) / 100;
	        this.b = Math.round(Math.random() * 1000000) / 100;
	        this.intlSupport = angular2localization_1.IntlSupport.DateTimeFormat(this.locale.getDefaultLocale())
	            && angular2localization_1.IntlSupport.NumberFormat(this.locale.getDefaultLocale())
	            && angular2localization_1.IntlSupport.Collator(this.locale.getCurrentLanguage());
	    }
	    HomeComponent = __decorate([
	        core_1.Component({
	            templateUrl: './app/home.component.html'
	        }), 
	        __metadata('design:paramtypes', [angular2localization_1.LocaleService, angular2localization_1.LocalizationService])
	    ], HomeComponent);
	    return HomeComponent;
	}(angular2localization_1.Locale));
	exports.HomeComponent = HomeComponent;


/***/ },

/***/ 63:
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(3);
	var common_1 = __webpack_require__(23);
	// Services.
	var angular2localization_1 = __webpack_require__(26);
	var MessagesLocalization = (function (_super) {
	    __extends(MessagesLocalization, _super);
	    function MessagesLocalization() {
	        _super.apply(this, arguments);
	    }
	    MessagesLocalization.prototype.getPluralCategory = function (value) {
	        if (value > 1) {
	            return 'other';
	        }
	    };
	    return MessagesLocalization;
	}(common_1.NgLocalization));
	var I18nComponent = (function (_super) {
	    __extends(I18nComponent, _super);
	    function I18nComponent(localization) {
	        _super.call(this, null, localization);
	        this.localization = localization;
	        this.message = "";
	        this.gender = "";
	        this.inviteMapping = {
	            'male': 'Invite_him',
	            'female': 'Invite_her'
	        };
	        this.messages = [];
	        this.messageMapping = {
	            '=0': 'No_messages',
	            '=1': 'One_message',
	            'other': '# messages'
	        };
	    }
	    I18nComponent.prototype.addMessage = function (value) {
	        this.messages.push(value.message);
	        this.message = "";
	    };
	    I18nComponent = __decorate([
	        core_1.Component({
	            templateUrl: './app/i18n.component.html',
	            providers: [{ provide: common_1.NgLocalization, useClass: MessagesLocalization }]
	        }), 
	        __metadata('design:paramtypes', [angular2localization_1.LocalizationService])
	    ], I18nComponent);
	    return I18nComponent;
	}(angular2localization_1.Locale));
	exports.I18nComponent = I18nComponent;


/***/ },

/***/ 64:
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(3);
	// FormBuilder with formControl.
	var forms_1 = __webpack_require__(30);
	// Services.
	var angular2localization_1 = __webpack_require__(26);
	// Directives for FormBuilder with formControl.
	var angular2localization_2 = __webpack_require__(26);
	var ValidationComponent = (function (_super) {
	    __extends(ValidationComponent, _super);
	    function ValidationComponent(locale, localization, fb) {
	        _super.call(this, locale, localization);
	        this.locale = locale;
	        this.localization = localization;
	        this.fb = fb;
	        // Options.
	        this.digits = "1.2-2";
	        this.minValue = -Math.round(Math.random() * 10000) / 100;
	        this.maxValue = Math.round(Math.random() * 10000) / 100;
	        this.parsedValue = null;
	        this.numberForm = fb.group({
	            'decimal': ['', angular2localization_2.validateLocaleNumber(this.locale, this.digits, this.minValue, this.maxValue)]
	        });
	        // 'decimal' control. 
	        this.decimal = this.numberForm.controls['decimal'];
	    }
	    ValidationComponent.prototype.onSubmit = function (value) {
	        this.parsedValue = angular2localization_1.LocaleParser.Number(value.decimal, this.locale.getDefaultLocale());
	    };
	    ValidationComponent = __decorate([
	        core_1.Component({
	            templateUrl: './app/validation.component.html'
	        }), 
	        __metadata('design:paramtypes', [angular2localization_1.LocaleService, angular2localization_1.LocalizationService, forms_1.FormBuilder])
	    ], ValidationComponent);
	    return ValidationComponent;
	}(angular2localization_1.Locale));
	exports.ValidationComponent = ValidationComponent;


/***/ },

/***/ 68:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var http_1 = __webpack_require__(27);
	var common_1 = __webpack_require__(23);
	var forms_1 = __webpack_require__(30);
	var SHARED_MODULES = [
	    http_1.HttpModule,
	    common_1.CommonModule,
	    forms_1.FormsModule,
	    forms_1.ReactiveFormsModule
	];
	var SharedModule = (function () {
	    function SharedModule() {
	    }
	    SharedModule = __decorate([
	        core_1.NgModule({
	            imports: SHARED_MODULES,
	            exports: SHARED_MODULES
	        }), 
	        __metadata('design:paramtypes', [])
	    ], SharedModule);
	    return SharedModule;
	}());
	exports.SharedModule = SharedModule;


/***/ },

/***/ 69:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	// Angular 2 Material.
	var core_2 = __webpack_require__(70);
	var sidenav_1 = __webpack_require__(71);
	var list_1 = __webpack_require__(72);
	var toolbar_1 = __webpack_require__(73);
	var card_1 = __webpack_require__(74);
	var radio_1 = __webpack_require__(75);
	var input_1 = __webpack_require__(76);
	var button_1 = __webpack_require__(77);
	var icon_1 = __webpack_require__(78);
	var MATERIAL_MODULES = [
	    core_2.MdCoreModule,
	    sidenav_1.MdSidenavModule,
	    list_1.MdListModule,
	    toolbar_1.MdToolbarModule,
	    card_1.MdCardModule,
	    radio_1.MdRadioModule,
	    input_1.MdInputModule,
	    button_1.MdButtonModule,
	    icon_1.MdIconModule
	];
	var MaterialModule = (function () {
	    function MaterialModule() {
	    }
	    MaterialModule = __decorate([
	        core_1.NgModule({
	            imports: [
	                core_2.MdCoreModule.forRoot(),
	                sidenav_1.MdSidenavModule.forRoot(),
	                list_1.MdListModule.forRoot(),
	                toolbar_1.MdToolbarModule.forRoot(),
	                card_1.MdCardModule.forRoot(),
	                radio_1.MdRadioModule.forRoot(),
	                input_1.MdInputModule.forRoot(),
	                button_1.MdButtonModule.forRoot(),
	                icon_1.MdIconModule.forRoot()
	            ],
	            exports: MATERIAL_MODULES
	        }), 
	        __metadata('design:paramtypes', [])
	    ], MaterialModule);
	    return MaterialModule;
	}());
	exports.MaterialModule = MaterialModule;


/***/ }

});
//# sourceMappingURL=app.bundle.js.map