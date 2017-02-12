import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { Donor } from './donor';
import { Headers, Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class DonorService{
	constructor(private http:Http){}
	
	getDonors(): Promise<Donor[]>{
		return this.http.get('http://localhost:8080/api/donors')
			.toPromise()
			.then(response=>response.json().data as Donor[])
			.catch(this.handleError);
	}
	
	getComments() : Observable<Donor[]> {

         // ...using get request
         return this.http.get('http://localhost:8080/api/donors')
                        // ...and calling .json() on the response to return data
                         .map((res:Response) => res.json())
                         //...errors if any
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

     }
	
	getDonorDetail(id: string): Promise<Donor>{
		return this.http.get('http://localhost:8080/api/donors/' + id)
			.toPromise()
			.then(response=>response.json().data as Donor)
			.catch(this.handleError);
	}
	
	private handleError(error: any): Promise<any>{
		return Promise.reject(error.message || error);
	}
	
}
