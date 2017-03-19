import { Component, OnDestroy } from '@angular/core';
import { SearchService } from '../../services/search.service';

// search payload
export class searchPayload {
	public query: string;
	public prefix: string;
	public length: string;

	constructor () {
        this.query = '',
		this.prefix = '',
		this.length = ''
    }
}

@Component({
	selector: 'app-search',
	templateUrl: './search.component.html',
	styleUrls: ['./search.component.scss'],
	providers: [SearchService]
})

export class SearchComponent {

	// initiate payload model
	private searchPayload: searchPayload = new searchPayload();

	// model to keep track of search results
	private searchResults = [];

	// construct with the searchService
	constructor(private searchService: SearchService) { }

	// method to call the search service with the payload
	private performSearch() {
		const context = this;

		context.searchService.searchQuery(context.searchPayload)
			.subscribe(function(results) {
				// once the search results are returned,
				// replace the search results on the page
				context.setResults(results);
			});
	}

	// method to replace the search results
	private setResults(results) {
		this.searchResults = results;
	}
}
