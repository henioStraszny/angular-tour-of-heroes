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
    clickMessage = '';
    values = '';
    enterValues = '';

    heroes = [
        new Hero(1, 'Windstorm'),
        new Hero(1, 'Bombasto'),
        new Hero(1, 'Magneta'),
        new Hero(1, 'Tornado')];

    myHero = this.heroes[0];

    onClickMe() {
        this.clickMessage = 'You are my hero';
    }

    onKey(event: KeyboardEvent) {

        this.values += (<HTMLInputElement>event.target).value + ' | ';
    }

    onKey2(plecy: string) {
        this.values += plecy + ' | ';
    }

    onEnter(tekst: string) {
        this.enterValues += tekst;
    }
}