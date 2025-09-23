import { Component, Input, OnInit } from '@angular/core';
import { Products } from '../../models/Products';
import { ProductList } from '../product-list/product-list';

@Component({
  selector: 'app-product-details',
  standalone: false,
  templateUrl: './product-details.html',
  styleUrl: './product-details.css',
})
export class ProductDetails implements OnInit {
  @Input() productListComp: ProductList;
  product: Products;

  ngOnInit(): void {
    this.product = this.productListComp.selectedProduct
  }
}
