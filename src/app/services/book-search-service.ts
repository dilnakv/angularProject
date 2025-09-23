import { Injectable } from '@angular/core';
import { BookSearchApiService } from './book-search-api-service';
import { BookSearchCacheService } from './book-search-cache-service';

@Injectable({
  providedIn: 'root'
})
export class BookSearchService {
  constructor(
    private apiService: BookSearchApiService,
    private cacheService: BookSearchCacheService
  ) {}

  searchBooks(query: string): string[] {
    const cached = this.cacheService.get(query);
    if (cached) {
      console.log('⚡ Returning cached result for:', query);
      return cached;
    }
    
    const result = this.apiService.search(query);
    this.cacheService.set(query, result);
    return result;
  }
}
