import { Component } from '@angular/core';
import { Hero } from './hero';

@Component({
    moduleId: module.id,
    selector: 'hero-list',
    templateUrl: 'hero-list.component.html'
})
export class HeroListComponent {
    heroes = [
        new Hero(1, 'Jacek'),
        new Hero(2, 'Gosia'),
        new Hero(3, 'Bartek'),
        new Hero(4, 'Łukasz'),
        new Hero(5, 'Ewa')
    ];

    public addHero(heroName: string) {
        if(heroName)
        this.heroes.push(new Hero(this.heroes.length, heroName));
    }
}