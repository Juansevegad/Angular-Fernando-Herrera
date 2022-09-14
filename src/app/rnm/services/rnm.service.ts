import { Injectable } from "@angular/core";
import { Character } from "../interfaces/rnm.interface";



//services instances are created only once THE FIRST TIME it is needed anywhere
// you want to add as much as the data manipulation and logic as possible here
@Injectable()
export class RnmService {

    // you want your data to only be accesible inside this service.
    private _characters: Character[] = [
        { name: 'Space Beth', power: 1200 },
        { name: 'Prime Jerry', power: 300 },
        { name: 'Morty', power: 100 },
        { name: 'Jerry', power: 50 },
    ];

    private _newCharacter: Character = {
        name: 'Rick',
        power: 8231
    };

    //Javascrip objects are called by reference, this practice breaks the refference and creates a new instane of the object
    get characters() {
        return [...this._characters]
    };

    get newCharacter() {
        return this._newCharacter
    };

    constructor() {
    }

    addCharacter(character: Character) {
        this._characters.push(character);
    }
}