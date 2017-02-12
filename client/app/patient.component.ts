declare function showModal():void;
declare function showToast(message:string, delay:number):void;
declare function initPatientMap(): void;
declare function setDonors(donors: Donor[]): void;
declare function getMap(): any;

import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { DonorService } from './donor.service';
import { Donor } from './donor';
import { RecordDetail } from './record-detail';
import 'app/modals.js';
import 'app/arcgisUtils.js';

@Component({
  moduleId: module.id,
  selector: 'patient',
  templateUrl: 'patient.component.html',
  //styleUrls: ['main-grid.component.css']
})

export class PatientComponent{
  
  constructor(private donorService: DonorService){}
  records: Donor[];
  recordDetail: RecordDetail;
  ngOnInit(): void{
	initPatientMap({});
	//getMap().on('layers-add-result', function(){
	//	alert('added!!');
	//});
	/*this.donorService.getComments()
		   .subscribe(
			donors => {
				setDonors(donors);
			}, //Bind to view
			err => {
				// Log errors if any
				console.log(err);
			});*/
  };
  
  getDonors(): void {
	
  }
  
  openModal(id:string): void{
	let st='#'+id;
	document.getElementById("modalPopup").innerHTML = document.getElementById(id).innerHTML;
	showModal();
  }
  
  getDonorDetail(record: Donor): void{	
  };
  
}