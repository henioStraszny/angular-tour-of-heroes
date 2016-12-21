import { Component } from '@angular/core';

import { HeroNew } from './heroNew';

@Component({
    moduleId: module.id,
    selector: 'hero-form',
    templateUrl: 'hero-form.component.html',
    styleUrls: ['hero-form.component.css']
})
export class HeroFormComponent {
    powers = ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer'];
    model = new HeroNew(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');
    submitted = false;
    onSubmit() { this.submitted = true; }

    get diagnostic() { return JSON.stringify(this.model); }

    newHero() {
        this.model = new HeroNew(42, '', '');
    }
}