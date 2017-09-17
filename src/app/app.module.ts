import { NgModule }      from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule }   from "@angular/forms"; // <-- NgModel lives here
import { HttpModule }    from '@angular/http';

import { AppRoutingModule }     from './routing.module';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './services/data.service';

import { AppComponent } 		from "./app.component";
import { DashboardComponent } 	from "./dashboard.component";
import { HeroDetailComponent }	from "./heroes/hero_detail";
import { HeroesComponent } 		from "./heroes/heroes_component";
import { Hero } 				from "./heroes/hero_class";
import { HeroService }      	from "./heroes/heroes_service";
import { HeroSearchComponent }  from "./search.component";


@NgModule({
	imports:      [ 
		BrowserModule,
		FormsModule, // <-- import the FormsModule before binding with [(ngModel)]
		HttpModule,
		InMemoryWebApiModule.forRoot(InMemoryDataService),
		AppRoutingModule,
	],
	declarations: [
		DashboardComponent,
		AppComponent,
		HeroesComponent,
		HeroDetailComponent,
		HeroSearchComponent
	],
	providers: [HeroService],
	bootstrap: [ AppComponent ],
})
export class AppModule { }
