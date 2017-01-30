declare function showModal():void;
declare function showToast(message:string,delay:number):void;
declare function getColorFunc(value:number): string;
declare function getDetailColorFunc(value:number): string;
declare function getIconFunc(state:string): string
declare function buildUnitChart(id:string, passed:number, failed:number): void

import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { BuildService } from './build.service';
import { Record } from './record';
import { RecordDetail } from './record-detail';
import 'app/modals.js'

@Component({
  moduleId: module.id,
  selector: 'main-grid',
  templateUrl: 'main-grid.component.html',
  styleUrls: ['main-grid.component.css']
})

export class MainGridComponent{
  
  constructor(private buildService: BuildService){}
  records: Record[];
  recordDetail: RecordDetail;
  ngOnInit(): void{
	this.getRecords();

  };
  getRecords(): void {
	this.buildService.getRecords().then(
		(records)=> {
			this.records=records;
			for (var i in this.records){
				if (this.records[i].timeStarted)
					this.records[i].timeStartedDate=new Date(this.records[i].timeStarted);
			}
		}
	);
  }
  
  openModal(id:string): void{
	let st='#'+id;
	document.getElementById("modalPopup").innerHTML = document.getElementById(id).innerHTML;
	showModal();
  }
  
  getRecordDetail(record: Record): void{
	if (record.state!=='Running' && record.state!=='Pending'){
		if (!record.open){
			document.getElementById(record.id).setAttribute("style", "border-bottom: #ddd 0px solid");
			record.open=true;
			for (var i in this.records){
				if (this.records[i].id!=record.id){
					document.getElementById(this.records[i].id).setAttribute("style", "border-bottom: #ddd 1px solid");
					this.records[i].open=false;
				}
			}
		}
		else{
			record.open=false;
			document.getElementById(record.id).setAttribute("style", "border-bottom: #ddd 1px solid");
		}
	}
	else{
		for (var i in this.records){
			document.getElementById(this.records[i].id).setAttribute("style", "border-bottom: #ddd 1px solid");
			this.records[i].open=false;
		}
		showToast('No details available', 2000);
	}
	
	this.buildService.getRecordDetail(record.id).then(
		(recordDetail)=> {
			this.recordDetail=recordDetail;
			if (this.recordDetail){
				if (this.recordDetail.timeEnded)
					this.recordDetail.timeEndedDate=new Date(this.recordDetail.timeEnded);
				this.recordDetail.unitTestSuccess=(this.recordDetail.unitTestSuccessful/(this.recordDetail.unitTestSuccessful+this.recordDetail.unitTestFailing))*100;
				this.recordDetail.funcTestSuccess=(this.recordDetail.funcTestSuccessful/(this.recordDetail.funcTestSuccessful+this.recordDetail.funcTestFailing))*100;
				this.setRecordArrow(this.recordDetail, this.recordDetail.testScoreChange, 'testArrow', 'testColor');
				this.setRecordArrow(this.recordDetail, this.recordDetail.maintainabilityScoreChange, 'maintainabilityArrow', 'maintainabilityColor');
				this.setRecordArrow(this.recordDetail, this.recordDetail.securityScoreChange, 'securityArrow', 'securityColor');
				this.setRecordArrow(this.recordDetail, this.recordDetail.workmanshipScoreChange, 'workmanshipArrow', 'workmanshipColor');
				
				buildUnitChart(this.recordDetail.id, this.recordDetail.unitTestSuccessful, this.recordDetail.unitTestFailing);
				buildUnitChart(this.recordDetail.id, this.recordDetail.unitTestSuccessful, this.recordDetail.unitTestFailing);
			}
		}
	);
	
	
  };
  
  getTestColor(): string{
	return this.recordDetail.testColor;
  }
  
  getMaintainabilityColor(): string{
	return this.recordDetail.maintainabilityColor;
  }
  
  getSecurityColor(): string{
	return this.recordDetail.securityColor;
  }
  
  getWorkmanshipColor(): string{
	return this.recordDetail.workmanshipColor;
  }
  
  getColor(value:number): string{
	return getColorFunc(value);
  }
  
  getDetailColor(value:number): string{
	return getDetailColorFunc(value);
  }
  
  getIcon(state:string): string{
	return getIconFunc(state);
  }
  
  private setRecordArrow(record:RecordDetail, scoreChange:number, arrowProp:string, colorProp:string): void{
		if (scoreChange==0){
			record[arrowProp]='arrow_forward';
			record[colorProp]='yellow';
		}
		else if (scoreChange>0){
			record[arrowProp]='arrow_upward';
			record[colorProp]='green';
		}
		else{
			record[arrowProp]='arrow_downward';
			record[colorProp]='red';
		}
  }
}
