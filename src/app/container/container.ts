import { Component, ViewChild, viewChild } from '@angular/core';
import { ProductList } from './product-list/product-list';

@Component({
  selector: 'app-container',
  standalone: false,
  templateUrl: './container.html',
  styleUrl: './container.css'
})
export class Container {
  listOfString: string[] = ['Mark', 'Steve', 'Merry', 'John', 'Sarah'];
  name = 'John Doe';
  addToCart: number = 0;

  searchText : string ='';

  @ViewChild(ProductList) productList: ProductList;

  setSearchText(value: string){
    this.searchText = value;
  }

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
