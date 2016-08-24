// Root module.
import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
// Bootstrap component.
import { AppComponent } from './app.component';
import { routing } from './app.routes';
// Components.
import { HomeComponent } from './home.component';
import { I18nComponent } from './i18n.component';
import { ValidationComponent } from './validation.component';
// Feature modules.
import { SharedModule } from './shared/shared.module';
import { MaterialModule } from './shared/material.module';
// Angular 2 Localization.
import { LocaleModule, LocalizationModule } from 'angular2localization/angular2localization';
// Loader for webpack.
import { NgModuleFactoryLoader } from '@angular/core';
import { AsyncNgModuleLoader } from './utils/async-ng-module-loader';

@NgModule({
    imports: [
        BrowserModule,
        routing,
        SharedModule,
        MaterialModule,
        LocaleModule.forRoot(), // New instance of LocaleService.
        LocalizationModule.forRoot() // New instance of LocalizationService.
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        I18nComponent,
        ValidationComponent
    ],
    providers: [{ provide: NgModuleFactoryLoader, useClass: AsyncNgModuleLoader }, Title],
    bootstrap: [AppComponent]
})

export class AppModule { }
