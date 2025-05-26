import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Product } from './models';
import { ProductsService } from './products.service';
import {
  concatMap,
  first,
  map,
  Observable,
  of,
  Subscription,
  take,
} from 'rxjs';
import { AuthService } from '../../../../core/services/auth.service';
import { User } from '../../../../core/models';

@Component({
  selector: 'app-products',
  standalone: false,
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent implements OnDestroy {
  isEditingId: number | null = null;
  productForm: FormGroup;
  products: Product[] = [];
  isLoading = false;

  productName: string = ''; // Variable to store the product name

  productName$: Observable<string>;

  productsSubscription: Subscription | null = null; // Subscription to manage the observable

  authUser$: Observable<User | null>;

  constructor(
    private fb: FormBuilder,
    private productsService: ProductsService,
    private authService: AuthService
  ) {
    this.authUser$ = this.authService.authUser$;
    this.productName$ = this.productsService.getProductsCheaperThan(8); // Initialize the observable

    this.productsService.getProductsCheaperThan(15).subscribe({
      next: (productName) => {
        this.productName = productName; // Store the product name in the variable
        console.log('Producto más barato que 15: ', productName);
      },
    });

    // this.loadProducts();
    this.loadProductsObservable(); // Call the observable method to fetch products
    this.productForm = this.fb.group({
      name: [''],
      price: [''],
      category: [''], // Add category to the form group
    });
    this.loadAsync();
  }

  loadAsync(): void {
    of('543')
      .pipe(
        concatMap((id) => this.getAlgoById(id)), // Use,
        concatMap(() => of(23))
      )
      .subscribe({
        next: (algo) => console.log('Algo obtenido: ', algo),
      });
  }

  getAlgoById(id: string): Observable<any> {
    return of(id).pipe(map(() => ({ id, name: 'Producto ' + id })));
  }

  ngOnDestroy(): void {
    console.log('Destruyendo el componente...');
    this.productsSubscription?.unsubscribe();
  }

  loadProductsObservable() {
    this.isLoading = true;
    this.productsSubscription = this.productsService
      .getProducts$()
      .pipe(take(1), first())
      .subscribe({
        next: (datos) => {
          this.products = datos; // Assign the fetched products to the component's products property
        },
        error: (error) => console.error(error),
        complete: () => {
          this.isLoading = false; // Set loading state to false when the observable completes
        },
      });
  }

  loadProducts() {
    this.isLoading = true; // Set loading state to true
    this.productsService
      .getProducts()
      // Cuando la promesa se resuelve, se ejecuta el siguiente bloque
      .then((datos) => console.log(datos))
      .catch((error) => console.error(error)) // Manejo de errores
      // Al finalizar la promesa
      .finally(() => (this.isLoading = false)); // Call the service to fetch products
  }

  onSubmit() {
    if (this.isEditingId) {
      // Si está editando, actualiza el producto existente
      this.products = this.products.map((product) =>
        product.id === this.isEditingId
          ? { ...product, ...this.productForm.value }
          : product
      );
    } else {
      const newProduct = this.productForm.value;
      // newProduct.id = this.products.length + 1; // Assign a new ID based on the current length of the products array

      console.log(this.products);

      this.productsService.createProduct(newProduct).subscribe({
        next: (response) => {
          console.log('Producto creado: ', response);
          this.products = [...this.products, response];
          // this.products.push(response); // Add the new product to the products array
        },
        error: (error) => console.error(error),
        complete: () => {
          console.log('Producto creado exitosamente');
        },
      });
    }

    this.productForm.reset(); // Reset the form after submission
    this.isEditingId = null;
  }

  onDeleteProduct(id: number | string) {
    console.log('SE VA A ELIMINAR EL PRODUCTO CON ID: ', id);
    if (confirm('¿Está seguro de que desea eliminar este producto?')) {
      this.productsService.deleteProduct(id.toLocaleString()).subscribe({
        next: (response) => {
          this.products = response;
        },
      });
    }
  }

  onEditProduct(product: Product) {
    this.isEditingId = product.id;
    console.log('SE VA A EDITAR EL PRODUCTO: ', product);
    this.productForm.patchValue(product);
  }
}
