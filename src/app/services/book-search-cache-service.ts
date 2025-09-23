import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookSearchCacheService {
  private cache = new Map<string, string[]>();

  get(query: string): string[] | undefined {
    return this.cache.get(query.toLowerCase());
  }

  set(query: string, result: string[]): void {
    this.cache.set(query.toLowerCase(), result);
  }
}
