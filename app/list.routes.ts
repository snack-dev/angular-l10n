import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule }  from '@angular/router';
// Components.
import { ListComponent } from './list.component';

const routes: Routes = [
  { path: '', component: ListComponent }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
