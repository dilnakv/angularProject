import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-observable',
  standalone: false,
  templateUrl: './product-observable.html',
  styleUrl: './product-observable.css'
})
export class ProductObservable implements OnInit{
   price!: Observable<number>; 

  ngOnInit(): void {
    this.price = new Observable<number>(observer => {
      let currentPrice = 100; // starting price
      observer.next(currentPrice);
      setInterval(() => {
        const change = Math.floor(Math.random() * 11) - 5; // -5 to +5
        currentPrice = Math.max(0, currentPrice + change);
        observer.next(currentPrice);
      }, 2000);
    });
  }
}
