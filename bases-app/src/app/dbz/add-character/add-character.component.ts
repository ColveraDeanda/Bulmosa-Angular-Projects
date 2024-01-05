import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Character {
  id?: string;
  name: string;
  power: number;
}

@Component({
  selector: 'app-add-character',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css'
})
export class AddCharacterComponent {

  @Output()
  public onNewCharacter = new EventEmitter();

  public character: Character = {
    name: 'Ingrese un nombre',
    power: 0
  }

  emitCharacter() {
    if (this.character.name.length === 0) { return; }
    this.onNewCharacter.emit(this.character);
    this.character = {name: '', power: 0}

  }

}
