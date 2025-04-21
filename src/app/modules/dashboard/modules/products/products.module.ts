import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { ProductsTableComponent } from './components/products-table/products-table.component';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [ProductsComponent, ProductsTableComponent],
  imports: [CommonModule, ProductsRoutingModule, MatTableModule],
  exports: [ProductsComponent],
})
export class ProductsModule {}
