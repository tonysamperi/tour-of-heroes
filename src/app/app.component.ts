import { Component } from '@angular/core';

@Component ({
	selector: "heroes-app",
	templateUrl: "./templates/heroes_app.html",
	stylesUrls: ["./css/heroes_app.css"]
})

export class AppComponent {
	title = "Tour of Heroes";
}