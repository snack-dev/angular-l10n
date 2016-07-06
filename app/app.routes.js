"use strict";
var router_1 = require('@angular/router');
// Components.
var home_component_1 = require('./home.component');
var i18n_component_1 = require('./i18n.component');
var list_component_1 = require('./list.component');
var validation_component_1 = require('./validation.component');
exports.routes = [
    { path: '', redirectTo: 'home', terminal: true },
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'i18n', component: i18n_component_1.I18nComponent },
    { path: 'list', component: list_component_1.ListComponent },
    { path: 'validation', component: validation_component_1.ValidationComponent }
];
exports.APP_ROUTER_PROVIDERS = [
    router_1.provideRouter(exports.routes)
];
