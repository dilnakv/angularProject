import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface ProductOb {
  id: number;
  name: string;
  price: number;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
   private products: ProductOb[] = [
    { id: 1, name: 'Laptop', price: 1000 },
    { id: 2, name: 'Phone', price: 500 },
    { id: 3, name: 'Tablet', price: 300 }
  ];

  getProducts(): Observable<ProductOb[]> {
    return new Observable<ProductOb[]>(observer => {
      // emit initial product list
      observer.next(this.products);

      setInterval(() => {
        // update each product price randomly
        this.products = this.products.map(p => ({
          ...p,
          price: Math.max(0, p.price + Math.floor(Math.random() * 11) - 5) 
        }));
        observer.next([...this.products]); 
      }, 2000);
    });
  }
}
