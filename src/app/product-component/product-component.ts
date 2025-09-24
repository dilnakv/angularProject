import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductObs } from '../models/ProductObs';
import { ProductService } from '../services/product-service';

@Component({
  selector: 'app-product-component',
  standalone: false,
  templateUrl: './product-component.html',
  styleUrl: './product-component.css'
})
export class ProductComponent implements OnInit{
  // products: string[] = ['Laptop', 'Mobile', 'Headphones', 'Camera', 'Smartwatch'];

    products!: Observable<ProductObs[]>;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }
}
