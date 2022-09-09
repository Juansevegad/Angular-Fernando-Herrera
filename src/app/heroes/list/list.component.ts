import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
})
export class ListComponent {

  heroes: string[] = ['Spiderman', 'Goku', 'Hulk', 'Meliodas', 'Ironman']
  count: number = this.heroes.length + 1;
  deletedHeroes: string[] = []

  ereseHero() {

    const deletedHero = this.heroes.shift();
    if (this.count) {
      this.count--;
    }
    if (this.count) {
      this.deletedHeroes.push(deletedHero ? deletedHero : '');
    }
  }
}
