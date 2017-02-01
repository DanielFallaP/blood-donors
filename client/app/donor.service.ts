import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { Donor } from './donor';
import { RecordDetail } from './record-detail';
import { Headers, Http } from '@angular/http';

@Injectable()
export class DonorService{
	constructor(private http:Http){}
	private recordsUrl='api/records';
	
	
	getDonors(): Promise<Donor[]>{
		return this.http.get(this.recordsUrl)
			.toPromise()
			.then(response=>response.json().data as Donor[])
			.catch(this.handleError);
	}
	
	getDonorDetail(id: string): Promise<RecordDetail>{
		return null;
	}
	
	private handleError(error: any): Promise<any>{
		return Promise.reject(error.message || error);
	}
	
}
