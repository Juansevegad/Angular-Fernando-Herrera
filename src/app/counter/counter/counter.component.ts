import { Component } from "@angular/core";

@Component({
    selector: 'app-counter',
    template: `

    <h1>{{title}}</h1>
    <h3>The base is: <strong>{{base}}</strong></h3>

    <button (click)="acumulate(base * 100)"> + {{base * 100}}</button>
    <button (click)="acumulate(base * 10)"> + {{base * 10}}</button>
    <button (click)="acumulate(base * 1)"> + {{base}}</button>

    <span>{{number}}</span>

    <button (click)="acumulate(base * -1)"> - {{base * 1}}</button>
    <button (click)="acumulate(base * -10)"> - {{base * 10}}</button>
    <button (click)="acumulate(base * -100)"> - {{base * 100}}</button>
    
    
    `
})
export class CounterComponent {
    title: string = 'Counter App';
    number: number = 10;

    base: number = 5;

    acumulate(value: number) {
        this.number += value;
    }

}