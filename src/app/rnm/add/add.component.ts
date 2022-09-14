import { Component } from '@angular/core';
import { Character } from '../interfaces/rnm.interface';
import { RnmService } from '../services/rnm.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {

  // @Input() newCharacter: Character = { name: '', power: 0 };

  // @Output() onNewCharacter: EventEmitter<Character> = new EventEmitter<Character>();

  newCharacter: Character = this.RnmService.newCharacter


  constructor(private RnmService: RnmService) { }

  add() {

    // return in case the character imput is empty
    if (this.newCharacter.name.trim().length === 0) {
      return
    }
    //emit the new character
    // this.onNewCharacter.emit(this.newCharacter)

    this.RnmService.addCharacter(this.newCharacter)

    //clear the character input
    this.newCharacter = {
      name: '',
      power: 0
    }
  }
}
