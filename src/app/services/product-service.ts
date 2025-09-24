import { Injectable } from '@angular/core';
import { interval, map, Observable, startWith } from 'rxjs';
import { ProductObs } from '../models/ProductObs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
   private products: ProductObs[] = [
    { id: 1, name: 'Laptop', price: 1000 },
    { id: 2, name: 'Phone', price: 500 },
    { id: 3, name: 'Tablet', price: 300 },
    { id: 4, name: 'Monitor', price: 600 },
    { id: 5, name: 'Keyboard', price: 150 },
    { id: 6, name: 'Mouse', price: 80 },
    { id: 7, name: 'Printer', price: 700 }
  ];

  getProducts(): Observable<ProductObs[]> {
    return interval(2000).pipe(
      startWith(0), // emit immediately
      map(() => {
        // random price fluctuation
        this.products = this.products.map(p => ({
          ...p,
          price: Math.max(0, p.price + Math.floor(Math.random() * 11) - 5)
        }));

        // apply 10% discount for price > 500
        return this.products.map(p => ({
          ...p,
          price: p.price > 500 ? +(p.price * 0.9).toFixed(2) : p.price
        }));
      })
    );
  }
}