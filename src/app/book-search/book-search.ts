import { Component } from '@angular/core';
import { BookSearchService } from '../services/book-search-service';

@Component({
  selector: 'app-book-search',
  standalone: false,
  templateUrl: './book-search.html',
  styleUrl: './book-search.css'
})
export class BookSearch {
  query: string = '';
  results: string[] = [];

  constructor(private bookSearchService: BookSearchService) {}

  onSearch(): void {
    if (this.query.trim()) {
      this.results = this.bookSearchService.searchBooks(this.query);
    } else {
      this.results = [];
    }
  }
}
