import { Component } from '@angular/core';
import { map } from 'rxjs';

// Services
import { WikipediaResponse, WikipediaService } from './wikipedia.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
})
export class AppComponent {
	pages: WikipediaResponse['query']['search'] = [];
	constructor(private wikipediaService: WikipediaService) {}

	onSearch(term: string) {
		this.wikipediaService
			.search(term)
			.pipe(map((response) => response?.query?.search))
			.subscribe((value) => (this.pages = value));
	}
}
