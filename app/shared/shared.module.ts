import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const SHARED_MODULES: any[] = [
    HttpModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
];

@NgModule({
    imports: SHARED_MODULES,
    exports: SHARED_MODULES
})

export class SharedModule { }
