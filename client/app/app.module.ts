import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { AppComponent }  from './app.component';
import { DonorService } from './donor.service';
import { PatientComponent } from './patient.component';
import { DonorComponent } from './donor.component';
import { RouterModule } from '@angular/router';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
import { DetailsService }  from './details.service';
import { AppRoutingModule } from './app-routing.module';
import {MaterializeDirective} from 'angular2-materialize';


@NgModule({
  imports:      [
    BrowserModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
	AppRoutingModule
  ],
  declarations: [
    AppComponent,
    PatientComponent,
	DonorComponent,
    MaterializeDirective
  ],
  providers: [
    DonorService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
