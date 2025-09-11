import { Component } from '@angular/core';
import { Book } from '../app';

@Component({
  selector: 'app-book-data',
  standalone: false,
  templateUrl: './book-data.html',
  styleUrl: './book-data.css'
})
export class BookData {
  selectedBook: any = null;

  // Method triggered when child emits book
  onBookReceived(book: Book) {
    this.selectedBook = book;
  }
}
