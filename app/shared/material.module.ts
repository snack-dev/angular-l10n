import { NgModule } from '@angular/core';
// Angular 2 Material.
import { RtlModule } from '@angular2-material/core/rtl/dir';
import { MdSidenavModule } from '@angular2-material/sidenav';
import { MdListModule } from '@angular2-material/list';
import { MdToolbarModule } from '@angular2-material/toolbar';
import { MdCardModule } from '@angular2-material/card';
import { MdRadioModule } from '@angular2-material/radio/radio';
import { MdInputModule } from '@angular2-material/input';
import { MdButtonModule } from '@angular2-material/button';
import { MdIconModule } from '@angular2-material/icon';

const MATERIAL_MODULES: any[] = [
    RtlModule,
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
    imports: MATERIAL_MODULES,
    exports: MATERIAL_MODULES
})

export class MaterialModule { }
