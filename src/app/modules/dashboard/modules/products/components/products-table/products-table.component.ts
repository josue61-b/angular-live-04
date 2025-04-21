import { Component } from '@angular/core';
import { Product } from '../../models';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: Product[] = [
  { id: 1, name: 'Product A', price: 10.99 },
  { id: 2, name: 'Product B', price: 20.49 },
  { id: 3, name: 'Product C', price: 15.75 },
  { id: 4, name: 'Product D', price: 8.99 },
  { id: 5, name: 'Product E', price: 12.49 },
  { id: 6, name: 'Product F', price: 25.0 },
  { id: 7, name: 'Product G', price: 30.99 },
  { id: 8, name: 'Product H', price: 5.49 },
  { id: 9, name: 'Product I', price: 18.75 },
  { id: 10, name: 'Product J', price: 22.99 },
];

@Component({
  selector: 'app-products-table',
  standalone: false,
  templateUrl: './products-table.component.html',
  styles: ``,
})
export class ProductsTableComponent {
  // Contienen un listado de ids para cada columna
  displayedColumns: string[] = ['id', 'name', 'price'];

  // Datos de la tabla
  dataSource = ELEMENT_DATA;
}
