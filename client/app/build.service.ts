import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { Record } from './record';
import { RecordDetail } from './record-detail';
import { Headers, Http } from '@angular/http';

const recordDetails: RecordDetail[] = [
  {id: 'Tenrox-R1_1234', type: 'build', state: 'Complete', testScore: 73, timeEnded: 1469145043000,
	testScoreChange: 1, maintainabilityScore: 67, maintainabilityScoreChange:1, securityScore:43, securityScoreChange:0, workmanshipScore: 87, workmanshipScoreChange:53,
	debugBuild:true, releaseBuild:true, unitTestCoverage: 67, unitTestSuccessful: 34, unitTestFailing: 20, funcTestCoverage:10, funcTestSuccessful:56, funcTestFailing:67 
  },
  {id: 'Tenrox-R1_1235', type: 'build', state: 'Complete', testScore: 73, timeEnded: 1469145043000,
	testScoreChange: 1, maintainabilityScore: 67, maintainabilityScoreChange:1, securityScore:54, securityScoreChange:1, workmanshipScore: 87, workmanshipScoreChange:53,
	debugBuild:true, releaseBuild:true, unitTestCoverage: 54, unitTestSuccessful: 34, unitTestFailing: 10, funcTestCoverage:34, funcTestSuccessful:80, funcTestFailing:67 

  },
  {id: '4566', type: 'firewall', state: 'Accepted', testScore: 73, timeEnded: 1469145043000,
	testScoreChange: 1, maintainabilityScore: 67, maintainabilityScoreChange:1, securityScore:54, securityScoreChange:1, workmanshipScore: 87, workmanshipScoreChange:53,
	debugBuild:true, releaseBuild:true, unitTestCoverage: 54, unitTestSuccessful: 34, unitTestFailing: 10, funcTestCoverage:34, funcTestSuccessful:80, funcTestFailing:67 

  },
  {id: '4568', type: 'firewall', state: 'Rejected', testScore: 73, timeEnded: 1469145043000,
	testScoreChange: 1, maintainabilityScore: 67, maintainabilityScoreChange:-1, securityScore:43, securityScoreChange:-1, workmanshipScore: 87, workmanshipScoreChange:53,
	debugBuild:true, releaseBuild:true, unitTestCoverage: 67, unitTestSuccessful: 34, unitTestFailing: 20, funcTestCoverage:10, funcTestSuccessful:56, funcTestFailing:67 
  },
  {id: '4571', type: 'firewall', state: 'Running', testScore: 73, 
	testScoreChange: 1, maintainabilityScore: 67, maintainabilityScoreChange:1, securityScore:43, securityScoreChange:0, workmanshipScore: 87, workmanshipScoreChange:53,
	debugBuild:true, releaseBuild:true, unitTestCoverage: 67, unitTestSuccessful: 34, unitTestFailing: 20, funcTestCoverage:10, funcTestSuccessful:56, funcTestFailing:67 
  }
];

@Injectable()
export class BuildService{
	constructor(private http:Http){}
	private recordsUrl='api/records';
	
	
	getRecords(): Promise<Record[]>{
		return this.http.get(this.recordsUrl)
			.toPromise()
			.then(response=>response.json().data as Record[])
			.catch(this.handleError);
	}
	
	getRecordDetail(id: string): Promise<RecordDetail>{
		let list=recordDetails.filter(function(el){return el.id===id});
		return Promise.resolve(list.length>0?list[0]:null);
	}
	
	private handleError(error: any): Promise<any>{
		return Promise.reject(error.message || error);
	}
	
}
