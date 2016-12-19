import { Component } from '@angular/core';
import { Hero } from './hero';


@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css']
})
export class AppComponent {
    title = 'Tour of Heroes';

    heroes = [
        new Hero(1, 'Windstorm'),
        new Hero(1, 'Bombasto'),
        new Hero(1, 'Magneta'),
        new Hero(1, 'Tornado')];

    myHero = this.heroes[0];
}