import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface UnspashApiResponse {
	id: string;
	urls: {
		regular: string;
	};
}

@Injectable({
	providedIn: 'root',
})
export class PhotoService {
	constructor(private http: HttpClient) {}

	getRandomPhoto() {
		return this.http.get<UnspashApiResponse>(
			'https://api.unsplash.com/photos/random',
			{
				headers: {
					Authorization:
						'Client-ID cShU40i2t1byT1H5YbL-n7-Lnbs886eXEN3XdXPfHp0',
				},
			}
		);
	}
}
