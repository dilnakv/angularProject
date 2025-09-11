import { Component, signal } from '@angular/core';

export interface Book {
  id: string;
  title: string;
  author: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-ecart');
}
