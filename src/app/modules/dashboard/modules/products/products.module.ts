import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { ProductsTableComponent } from './components/products-table/products-table.component';
import { MatTableModule } from '@angular/material/table';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { ProductNameCategoryPipe } from './pipes/product-name-category.pipe';
import { HighlightDirective } from './directives/highlight.directive';
import { ProductsService } from './products.service';

@NgModule({
  declarations: [
    ProductsComponent,
    ProductsTableComponent,
    ProductNameCategoryPipe,
    HighlightDirective,
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatIconModule,
  ],
  exports: [ProductsComponent],
})
export class ProductsModule {}
