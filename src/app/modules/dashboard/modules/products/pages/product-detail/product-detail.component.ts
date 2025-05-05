import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../products.service';
import { Observable } from 'rxjs';
import { Product } from '../../models';

@Component({
  selector: 'app-product-detail',
  standalone: false,
  templateUrl: './product-detail.component.html',
  styles: ``,
})
export class ProductDetailComponent {
  product$: Observable<Product | null>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductsService
  ) {
    const productId = this.activatedRoute.snapshot.params['id'];

    this.product$ = this.productService.getProductById(productId);

    console.log('Product ID:', productId);
    console.log('Query Params:', this.activatedRoute.snapshot.queryParams);
  }
}
