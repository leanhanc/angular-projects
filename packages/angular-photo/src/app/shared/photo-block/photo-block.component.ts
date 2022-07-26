import { Component } from '@angular/core';
import { map } from 'rxjs';
import {
	PhotoService,
	UnspashApiResponse,
} from 'src/app/services/photo.service';

@Component({
	selector: 'app-photo-block',
	templateUrl: './photo-block.component.html',
	styleUrls: ['./photo-block.component.css'],
})
export class PhotoBlockComponent {
	constructor(private photoService: PhotoService) {}

	photo: UnspashApiResponse['urls']['regular'] = '';

	ngOnInit(): void {
		this.fetchRandomPhoto();
	}

	fetchRandomPhoto() {
		this.photoService
			.getRandomPhoto()
			.pipe(map((response) => response?.urls?.regular))
			.subscribe((val) => (this.photo = val));
	}

	refetch() {
		this.fetchRandomPhoto();
	}
}
