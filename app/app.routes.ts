import {provideRouter, RouterConfig} from '@angular/router';
// Components.
import {HomeComponent} from './home.component';
import {I18nComponent} from './i18n.component';
import {ListComponent} from './list.component';
import {ValidationComponent} from './validation.component';

export const routes: RouterConfig = [
    { path: '', redirectTo: 'home', terminal: true },
    { path: 'home', component: HomeComponent },
    { path: 'i18n', component: I18nComponent },
    { path: 'list', component: ListComponent },
    { path: 'validation', component: ValidationComponent }
];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
];
