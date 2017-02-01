import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientComponent }   from './patient.component';
import { DonorComponent }   from './donor.component';

const routes: Routes = [
  //{ path: '', redirectTo: '/patient', pathMatch: 'full' },
  { path: 'patient',  component: PatientComponent },
  { path: 'donor',  component: DonorComponent },
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
