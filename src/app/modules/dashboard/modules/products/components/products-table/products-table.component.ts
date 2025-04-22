import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../models';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-products-table',
  standalone: false,
  templateUrl: './products-table.component.html',
  styles: ``,
})
export class ProductsTableComponent {
  // Contienen un listado de ids para cada columna
  displayedColumns: string[] = ['id', 'name', 'price', 'actions'];

  // Datos de la tabla
  @Input()
  dataSource: Product[] = [];

  @Output()
  deleteProduct = new EventEmitter<number>();

  @Output()
  editProduct = new EventEmitter<Product>();
}
