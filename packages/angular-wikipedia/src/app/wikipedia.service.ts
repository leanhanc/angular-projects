import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface WikipediaResponse {
	query: {
		search: {
			title: string;
			snippet: string;
			pageid: number;
		}[];
	};
}

@Injectable({
	providedIn: 'root',
})
export class WikipediaService {
	constructor(private httpClient: HttpClient) {}

	search(term: string) {
		return this.httpClient.get<WikipediaResponse>(
			'https://en.wikipedia.org/w/api.php',
			{
				params: {
					action: 'query',
					format: 'json',
					list: 'search',
					origin: '*',
					srsearch: term,
					utf: '1',
				},
			}
		);
	}
}
