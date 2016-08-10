import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { routing } from './app.routes';
// Angular 2 Material.
import { RtlModule }  from '@angular2-material/core/rtl/dir';
import { MdSidenavModule }  from '@angular2-material/sidenav';
import { MdListModule }  from '@angular2-material/list';
import { MdToolbarModule }  from '@angular2-material/toolbar';
import { MdCardModule }  from '@angular2-material/card';
import { MdRadioModule }  from '@angular2-material/radio/radio';
import { MdInputModule }  from '@angular2-material/input';
import { MdButtonModule }  from '@angular2-material/button';
// Components.
import { HomeComponent } from './home.component';
import { I18nComponent } from './i18n.component';
import { ListComponent } from './list.component';
import { ValidationComponent } from './validation.component';
// Services.
import { LocaleService, LocalizationService } from 'angular2localization/angular2localization';
// Pipes.
import { TranslatePipe } from 'angular2localization/angular2localization';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        routing,
        HttpModule,
        RtlModule,
        MdSidenavModule,
        MdListModule,
        MdToolbarModule,
        MdCardModule,
        MdRadioModule,
        MdInputModule,
        MdButtonModule
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        I18nComponent,
        ListComponent,
        ValidationComponent,
        TranslatePipe
    ],
    providers: [
        LocaleService,
        LocalizationService
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }
