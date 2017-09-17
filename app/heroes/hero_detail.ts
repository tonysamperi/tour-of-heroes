import { Component, Input, OnInit } from "@angular/core";
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { Hero } from "./hero_class";
import { HeroService } from './heroes_service';

const TPL = `
    <div *ngIf="hero">
      <h2>{{hero.name}} details!</h2>
      <div><label>id: </label>{{hero.id}}</div>
      <div>
        <label>name: </label>
        <input [(ngModel)]="hero.name" placeholder="name"/>
      </div>
    </div>
  `;

@Component({
	selector: "hero-detail",
	templateUrl: "./templates/heroes_detail.html",
	styleUrls: ["./css/heroes_detail.css"]
	//template: TPL
})

export class HeroDetailComponent implements OnInit {
	@Input() hero: Hero;
	
	constructor(
		private heroService: HeroService,
		private route: ActivatedRoute,
		private location: Location
	) {}
	
	ngOnInit(): void {
		this.route.paramMap
			.switchMap((params: ParamMap) => this.heroService.getHero(+params.get('id')))
			.subscribe(hero => this.hero = hero);
	}
	
	goBack(): void {
		this.location.back();
	}
	
	save(): void {
		this.heroService.update(this.hero).then(() => this.goBack());
	}
}