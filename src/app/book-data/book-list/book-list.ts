import { Component, EventEmitter, Output } from '@angular/core';
import { Book } from '../../app';

@Component({
  selector: 'app-book-list',
  standalone: false,
  templateUrl: './book-list.html',
  styleUrl: './book-list.css',
})
export class BookList {
  books: Book[] = [
    { id: '1', title: 'Angular Basics', author: 'John Doe' },
    { id: '2', title: 'TypeScript in Depth', author: 'Jane Smith' },
    { id: '3', title: 'RxJS Essentials', author: 'Mark Taylor' },
  ];

  // Event emitter to send selected book to parent
  @Output() bookSelected = new EventEmitter<Book>();

  onBookSelect(event: Event) {
    const bookId = (event.target as HTMLSelectElement).value;
    const selectedBook = this.books.find((b) => b.id === bookId);
    if (selectedBook) {
      this.bookSelected.emit(selectedBook); // send book to parent
    }
  }
}
