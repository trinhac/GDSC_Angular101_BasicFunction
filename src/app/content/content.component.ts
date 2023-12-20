import { Component, Input, Output } from '@angular/core';
import { EventEmitter } from 'stream';
import { ProductService } from '../services/product.service';
@Component({
  selector: 'app-content',
  standalone: true,
  imports: [],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss'
})
export class ContentComponent {
  @Input({
    transform: (value: any) => {
      return {
        ...value,
        total: value.price * value.quantity,
      }
    },
    // alias: 
  }) product: any
  constructor(private productService: ProductService) { }

  products: any;

  ngOnInit() {
    this.products = this.productService.getProducts();
  }

  removeProduct(id: number) {
    this.productService.removeProduct(id);
    this.products = this.productService.getProducts();
  }
  // @Output() onAddOnce = new EventEmitter();
  // @Output() onAddAll = new EventEmitter();

}
