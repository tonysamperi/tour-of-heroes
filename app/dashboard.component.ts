import { Component } from "@angular/core";

import { Component, OnInit } from '@angular/core';

import { Hero } from './heroes/hero';
import { HeroService } from './heroes/heroes_service';

@Component({
  selector: "heroes-dashboard",
  templateUrl: "./templates/heroes_dashboard.html",
  styleUrls: ["./css/heroes_dashboard.css"]
})
export class DashboardComponent implements OnInit {

	heroes: Hero[] = [];

	constructor(private heroService: HeroService) { }

	ngOnInit(): void {
		this.heroService.getHeroes().then(heroes => this.heroes = heroes.slice(1, 5));
	}
}