import { Injectable } from '@angular/core';
import { Product, ProductForm } from './models';
import { concatMap, delay, filter, map, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

const MY_FAKE_DB: Product[] = [
  { id: 1, name: 'Product A', price: 10.99, category: 'Category 1' },
  { id: 2, name: 'Product B', price: 20.49, category: 'Category 2' },
  { id: 3, name: 'Product C', price: 15.75, category: 'Category 3' },
  { id: 4, name: 'Product D', price: 8.99, category: 'Category 1' },
  { id: 5, name: 'Product E', price: 12.49, category: 'Category 2' },
  { id: 6, name: 'Product F', price: 25.0, category: 'Category 3' },
  { id: 7, name: 'Product G', price: 30.99, category: 'Category 1' },
  { id: 8, name: 'Product H', price: 5.49, category: 'Category 2' },
  { id: 9, name: 'Product I', price: 18.75, category: 'Category 3' },
  { id: 10, name: 'Product J', price: 22.99, category: 'Category 1' },
];

@Injectable({ providedIn: 'root' })
export class ProductsService {
  constructor(private http: HttpClient) {}

  createProduct(product: ProductForm): Observable<Product> {
    return this.http.post<Product>(`http://localhost:3000/products`, product);
  }

  getProductById(id: number): Observable<Product | null> {
    return of([...MY_FAKE_DB]).pipe(
      map((products) => products.find((product) => product.id == id) || null)
    );
  }

  // Actividad practica
  getProductsCheaperThan(price: number): Observable<string> {
    return of(...MY_FAKE_DB).pipe(
      // Primero filtramos los productos por precio
      filter((product) => product.price < price),
      // Luego mapeamos el resultado para obtener solo el nombre del producto
      map((product) => product.name)
    );
  }

  getProducts(): Promise<Product[]> {
    console.log('Fetching products...');
    /**
     * Asincronia
     * Promesas (Promise)
     */
    const productsPromise = new Promise<Product[]>((resolve, reject) => {
      setTimeout(() => {
        reject('Error fetching products'); // Simulate an error
        // resolve(MY_FAKE_DB);
      }, 2000); // Simulate a 2-second delay
    });
    return productsPromise;
  }

  getProducts$(): Observable<Product[]> {
    return this.http.get<Product[]>(`http://localhost:3000/products`);
  }

  deleteProduct(id: string): Observable<Product[]> {
    return this.http
      .delete<Product[]>(`http://localhost:3000/products/${id}`)
      .pipe(concatMap(() => this.getProducts$()));
  }
}
