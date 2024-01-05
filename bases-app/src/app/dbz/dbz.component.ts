import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ListComponent } from './list/list.component';
import { AddCharacterComponent } from './add-character/add-character.component';
import { DbzServiceService } from './dbz-service.service';

interface Character {
  id?: string;
  name: string;
  power: number;
}

@Component({
  selector: 'app-dbz',
  standalone: true,
  imports: [CommonModule, FormsModule, ListComponent, AddCharacterComponent],
  templateUrl: './dbz.component.html',
  styleUrl: './dbz.component.css'
})
export class DbzComponent {

  constructor(private dbzService: DbzServiceService){

  }

  get characters(): Character[] {
    return [...this.dbzService.characters];
  }

  onNewCharacter(character: Character) {
    console.log({character});
    this.dbzService.addCharacter(character);
  }

  onDeleteCharacter(id: string) {
    this.dbzService.deleteCharacterById(id);
  }

}
