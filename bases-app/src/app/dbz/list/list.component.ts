import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Character {
  id?: string;
  name: string;
  power: number;
}

@Component({
  selector: 'app-dbz-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();

  @Input() characterList: Character[] = [];

  onDeleteCharacter(id?: string) {
    if(!id) return
    this.onDelete.emit(id);
  }


}
