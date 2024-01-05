import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-bulmosa-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bulmosa-component.component.html',
  styleUrl: './bulmosa-component.component.css'
})
export class BulmosaComponentComponent {

  public name = 'Bulmosa';
  public age = 27;

  constructor(){}

  getBulmosaDescription():string {
    return `${this.name} - ${this.age}`;
  }

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  changeName() {
    this.name = 'Bulmosooooo';
  }

  changeAge() {
    this.age = 14124;
  }

  resetData() {
    this.name = 'Bulmosa';
    this.age = 27;
  }

}
