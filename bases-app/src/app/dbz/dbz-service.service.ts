import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';

interface Character {
  id?: string;
  name: string;
  power: number;
}

@Injectable({
  providedIn: 'root'
})
export class DbzServiceService {

  constructor() { }

  public characters: Character[] = [
    { id: uuid(), name: 'Krillin', power: 1000 },
    { id: uuid(), name: 'Goku', power: 9500 },
    { id: uuid(), name: 'Vegeta', power: 7500},
  ];

  addCharacter(character: Character) {
    const newCharacter: Character = {id: uuid(), ...character};
    this.characters.push(newCharacter);
  }

  deleteCharacterById(id: string) {
    this.characters = this.characters.filter(character => character.id !== id);
  }

}
