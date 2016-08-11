import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// Components.
import { HomeComponent } from './home.component';
import { I18nComponent } from './i18n.component';
import { ListComponent } from './list.component';
import { ValidationComponent } from './validation.component';

const appRoutes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'i18n', component: I18nComponent },
    { path: 'list', component: ListComponent },
    { path: 'validation', component: ValidationComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes, { useHash: true });
