import { NgModule }      from '@angular/core';

import { ListComponent } from './list.component';
import { routing }       from './list.routes';
// Feature modules.
import { SharedModule } from './shared/shared.module';
import { MaterialModule } from './shared/material.module';
// Angular 2 Localization.
import { LocaleModule, LocalizationModule } from 'angular2localization/angular2localization';

@NgModule({
    imports: [
        routing,
        SharedModule,
        MaterialModule,
        LocaleModule, // LocaleService is singleton.
        LocalizationModule.forRoot() // New instance of LocalizationService.
    ],
    declarations: [ListComponent]
})

export default class ListModule { }
