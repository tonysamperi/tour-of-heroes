"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var heroes_service_1 = require("./heroes_service");
var HeroesComponent = (function () {
    function HeroesComponent(router, heroService) {
        this.router = router;
        this.heroService = heroService;
    }
    //this.heroes = this.heroService.getHeroes(); //COULD BE LIKE THIS
    //WITHOUT PROMISE
    //getHeroes(): void {
    //this.heroes = this.heroService.getHeroes();
    //}
    //WITH PROMISE => ASSIGN ON SUCCESS
    HeroesComponent.prototype.getHeroes = function () {
        //this.heroService.getHeroes().then(heroes => this.heroes = heroes);
        var self = this;
        this.heroService.getHeroes().then(function (heroes) {
            console.info("GOT HEROES", heroes);
            self.heroes = heroes;
        });
    };
    HeroesComponent.prototype.ngOnInit = function () {
        this.getHeroes();
    };
    HeroesComponent.prototype.viewHero = function (hero) {
        this.selectedHero = hero;
    };
    HeroesComponent.prototype.gotoDetail = function () {
        this.router.navigate(["/detail", this.selectedHero.id]);
    };
    HeroesComponent.prototype.add = function (name, alias) {
        var _this = this;
        name = name.trim();
        alias = alias.trim();
        if (!name) {
            return;
        }
        this.heroService.create(name, alias).then(function (hero) {
            _this.heroes.push(hero);
            _this.selectedHero = null;
        });
    };
    HeroesComponent.prototype.delete = function (hero) {
        var _this = this;
        this.heroService
            .delete(hero.id)
            .then(function () {
            _this.heroes = _this.heroes.filter(function (h) { return h !== hero; });
            if (_this.selectedHero === hero) {
                _this.selectedHero = null;
            }
        });
    };
    return HeroesComponent;
}());
HeroesComponent = __decorate([
    core_1.Component({
        selector: "heroes-list",
        templateUrl: "./templates/heroes_list.html",
        styleUrls: ["./css/heroes_list.css"]
    }),
    __metadata("design:paramtypes", [router_1.Router,
        heroes_service_1.HeroService])
], HeroesComponent);
exports.HeroesComponent = HeroesComponent;
//# sourceMappingURL=heroes_component.js.map