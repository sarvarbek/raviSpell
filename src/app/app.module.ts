import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutes } from './app.routes';
import { SearchComponent } from './components/search/search.component';

@NgModule({
	declarations: [
		AppComponent,
		SearchComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		HttpModule,
		RouterModule.forRoot(AppRoutes)
	],
	providers: [],
	bootstrap: [AppComponent]
})

export class AppModule { }
