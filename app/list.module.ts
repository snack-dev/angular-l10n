import { NgModule }      from '@angular/core';

import { ListComponent } from './list.component';
import { routing }       from './list.routes';
// Feature modules.
import { SharedModule } from './shared/shared.module';
// Angular 2 Material.
import { MaterialModule } from '@angular/material';
// Angular 2 Localization.
import { LocaleModule, LocalizationModule } from 'angular2localization';

@NgModule({
    imports: [
        routing,
        SharedModule,
        MaterialModule,
        LocaleModule, // LocaleService is singleton.
        LocalizationModule.forChild() // New instance of LocalizationService.
    ],
    declarations: [ListComponent]
})

export class ListModule { }
