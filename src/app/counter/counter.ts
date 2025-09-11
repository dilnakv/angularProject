import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: false,
  templateUrl: './counter.html',
  styleUrl: './counter.css',
})
export class Counter {
  count: number = 0;
  message = 'Click here to increase count'
  incrementFromParent() {
    this.count++;
  }
  increment(input: HTMLInputElement) {
    // read directly from the DOM input
    this.count = Number(input.value) + 1;

    // update the DOM input value manually
    input.value = this.count.toString();
  }
}
