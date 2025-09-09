import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: false,
  templateUrl: './counter.html',
  styleUrl: './counter.css',
})
export class Counter {
  count = 0;
  message = 'Click here to increase count'
  increment() {
    this.count++;
  }
}
