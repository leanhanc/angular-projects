import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PhotoBlockComponent } from './shared/photo-block/photo-block.component';

@NgModule({
	declarations: [AppComponent, PhotoBlockComponent],
	imports: [BrowserModule, HttpClientModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
