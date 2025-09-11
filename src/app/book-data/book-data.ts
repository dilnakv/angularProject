import { Component } from '@angular/core';

@Component({
  selector: 'app-book-data',
  standalone: false,
  templateUrl: './book-data.html',
  styleUrl: './book-data.css'
})
export class BookData {
  selectedBook: any = null;

  // Method triggered when child emits book
  onBookReceived(book: any) {
    this.selectedBook = book;
  }
}
