import { Component, Input } from '@angular/core';
import { Products } from '../../../models/Products';

@Component({
  selector: 'app-product',
  standalone: false,
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class Product {
  @Input()
  product : Products = undefined;
}
