import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainGridComponent }   from './main-grid.component';

const routes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: 'main',  component: MainGridComponent },
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
