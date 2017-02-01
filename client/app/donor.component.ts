declare function showModal():void;
declare function showToast(message:string, delay:number):void;
declare function initDonorMap(): void;

import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { DonorService } from './donor.service';
import { Donor } from './donor';
import { RecordDetail } from './record-detail';
import 'app/modals.js'
import 'app/arcgisUtils.js';

@Component({
  moduleId: module.id,
  selector: 'donor',
  templateUrl: 'donor.component.html',
  //styleUrls: ['main-grid.component.css']
})

export class DonorComponent{
  
  constructor(private donorService: DonorService){}
  records: Donor[];
  recordDetail: RecordDetail;
  ngOnInit(): void{
	initDonorMap();
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