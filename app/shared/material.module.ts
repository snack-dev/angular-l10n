import { NgModule } from '@angular/core';
// Angular 2 Material.
import { MdCoreModule } from '@angular2-material/core';
import { MdSidenavModule } from '@angular2-material/sidenav';
import { MdListModule } from '@angular2-material/list';
import { MdToolbarModule } from '@angular2-material/toolbar';
import { MdCardModule } from '@angular2-material/card';
import { MdRadioModule } from '@angular2-material/radio';
import { MdInputModule } from '@angular2-material/input';
import { MdButtonModule } from '@angular2-material/button';
import { MdIconModule } from '@angular2-material/icon';

const MATERIAL_MODULES: any[] = [
    MdCoreModule,
    MdSidenavModule,
    MdListModule,
    MdToolbarModule,
    MdCardModule,
    MdRadioModule,
    MdInputModule,
    MdButtonModule,
    MdIconModule
];

@NgModule({
    imports: [
        MdCoreModule.forRoot(),
        MdSidenavModule.forRoot(),
        MdListModule.forRoot(),
        MdToolbarModule.forRoot(),
        MdCardModule.forRoot(),
        MdRadioModule.forRoot(),
        MdInputModule.forRoot(),
        MdButtonModule.forRoot(),
        MdIconModule.forRoot()
    ],
    exports: MATERIAL_MODULES
})

export class MaterialModule { }
