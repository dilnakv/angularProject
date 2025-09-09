import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  standalone: false,
  templateUrl: './product-list.html',
  styleUrl: './product-list.css'
})
export class ProductList {
  name = 'John Doe';
  addToCart: number = 0;

  product = {
    name: 'iPhone 13',
    price:  789,
    color: 'Red',
    discount: 8.5,
    inStock: 5,
    image: '/assets/image/leaf.jpeg'
  }

  getDiscountedPrice(){
    return this.product.price - (this.product.price * this.product.discount /100)
  }

  onNameChanged(event: any){
    // this.name = event.target.value;
    
  }

  decrementCart(){
    if(this.addToCart > 0) {
      this.addToCart--;
    }
  }

  incrementCart(){
    if(this.addToCart < this.product.inStock){
      this.addToCart++;
    }
  }
}
