import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable()

export class SearchService {
	// rest api endpoint
	private endpoint: string = 'http://demo4457148.mockable.io/spell';

	constructor(private http: Http) {}

	public searchQuery (payload) {
		let params = new URLSearchParams();
  		params.set('query', payload.query);
  		params.set('prefix', payload.prefix);
  		params.set('length', payload.length);

		return this.http
			.get(this.endpoint, { search: params })
			.map(this.extractData)
            .catch(this.handleError);
	}

	// extracts the data from api call
	private extractData(res: Response) {
		let body = res.json();
		return body || { };
	}

	// error handler
	private handleError (error: Response | any) {
		// In a real world app, we might use a remote logging infrastructure
		let errMsg: string;

		if (error instanceof Response) {
			const body = error.json() || '';
			const err = body.error || JSON.stringify(body);
			errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
		} else {
			errMsg = error.message ? error.message : error.toString();
		}

		console.error(errMsg);

		return Observable.throw(errMsg);
	}
}
