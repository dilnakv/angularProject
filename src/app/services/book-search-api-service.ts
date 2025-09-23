import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookSearchApiService {
  private books: string[] = [
    'Angular for Beginners',
    'Learning TypeScript',
    'Mastering JavaScript',
    'Python Cookbook',
    'Deep Dive into Node.js',
    'Angular Advanced Patterns'
  ];

  search(query: string): string[] {
    console.log('🔍 API search executed for:', query);
    const q = query.toLowerCase();
    return this.books.filter(b => b.toLowerCase().includes(q));
  }
}
