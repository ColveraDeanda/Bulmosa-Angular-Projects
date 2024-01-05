import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {

  public counter = 0;

  constructor() {}

  decreaseBy(value: number) {
    this.counter -= value
  }

  increaseBy(value: number) {
    this.counter += value;
  }

  reset() {
    this.counter = 0;
  }




}
