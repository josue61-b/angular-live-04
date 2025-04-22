import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Product } from './models';

@Component({
  selector: 'app-products',
  standalone: false,
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent {
  isEditingId: number | null = null;
  productForm: FormGroup;
  products: Product[] = [
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

  constructor(private fb: FormBuilder) {
    this.productForm = this.fb.group({
      name: [''],
      price: [''],
      category: [''], // Add category to the form group
    });
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
      newProduct.id = this.products.length + 1; // Assign a new ID based on the current length of the products array
      this.products = [...this.products, newProduct];
      console.log(this.products);
    }

    this.productForm.reset(); // Reset the form after submission
    this.isEditingId = null;
  }

  onDeleteProduct(id: number) {
    console.log('SE VA A ELIMINAR EL PRODUCTO CON ID: ', id);
    if (confirm('¿Está seguro de que desea eliminar este producto?')) {
      this.products = this.products.filter((product) => product.id !== id);
    }
  }

  onEditProduct(product: Product) {
    this.isEditingId = product.id;
    console.log('SE VA A EDITAR EL PRODUCTO: ', product);
    this.productForm.patchValue(product);
  }
}
