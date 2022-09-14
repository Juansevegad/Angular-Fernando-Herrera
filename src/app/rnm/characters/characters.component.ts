import { Component } from '@angular/core';
import { RnmService } from '../services/rnm.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent {

  constructor(private RnmService: RnmService) { }

  get characters() {
    return this.RnmService.characters
  }

}
