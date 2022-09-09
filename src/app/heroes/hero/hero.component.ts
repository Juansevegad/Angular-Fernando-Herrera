import { Component } from '@angular/core';


@Component({
    selector: 'app-hero',
    templateUrl: './hero.component.html'
})
export class HeroComponent {
    name: string = 'Ironman';
    age: number = 45;

    get capitalizedName(): string {
        return this.name.toUpperCase();
    }

    getName(): string {
        return `${this.name} - ${this.age}`;
    }

    changeName(): void {
        this.name = 'Spiderman';
    }

    changeAge(): void {
        this.age = 21;
    }
    // One Way data binding: always change from the TS to the HTML, try not to do it otherwise (two way data binding)

}