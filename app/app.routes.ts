import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// Components.
import { HomeComponent } from './home.component';
import { I18nComponent } from './i18n.component';
import { ValidationComponent } from './validation.component';
// Loader for webpack.
import { load } from './utils/async-ng-module-loader';

const appRoutes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'i18n', component: I18nComponent },
    {
        path: 'list',
        loadChildren: load(() => new Promise((resolve: any) => {
            (require as any).ensure([], (require: any) => {
                resolve(require('./list.module').default);
            });
        }))
    },
    { path: 'validation', component: ValidationComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes, { useHash: true });
