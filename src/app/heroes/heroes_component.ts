import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { Hero } from "./hero_class";
import { HeroService } from "./heroes_service";

@Component({
	selector: "heroes-list",
	templateUrl: "./templates/heroes_list.html",
	styleUrls: ["./css/heroes_list.css"]
})


export class HeroesComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;

  constructor(
    private router: Router,
    private heroService: HeroService) { }
	
	//this.heroes = this.heroService.getHeroes(); //COULD BE LIKE THIS
	//WITHOUT PROMISE
	//getHeroes(): void {
		//this.heroes = this.heroService.getHeroes();
	//}
  //WITH PROMISE => ASSIGN ON SUCCESS
	getHeroes(): void {
		//this.heroService.getHeroes().then(heroes => this.heroes = heroes);
		var self = this;
		this.heroService.getHeroes().then(function(heroes){
			console.info("GOT HEROES", heroes);
			self.heroes = heroes
		});
	}

	ngOnInit(): void {
		this.getHeroes();
	}

	viewHero(hero: Hero): void {
		this.selectedHero = hero;
	}

	gotoDetail(): void {
		this.router.navigate(["/detail", this.selectedHero.id]);
	}
  
	add(name: string, alias: string): void {
		name = name.trim();
		alias = alias.trim();
		if (!name) { return; }
		this.heroService.create(name, alias).then(hero => {
			this.heroes.push(hero);
			this.selectedHero = null;
		});
	}
	
	delete(hero: Hero): void {
	  this.heroService
		  .delete(hero.id)
		  .then(() => {
			this.heroes = this.heroes.filter(h => h !== hero);
			if (this.selectedHero === hero) { this.selectedHero = null; }
		  });
	}
}


