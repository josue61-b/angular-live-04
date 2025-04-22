import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models';

@Pipe({
  name: 'productNameCategory',
  standalone: false,
})
export class ProductNameCategoryPipe implements PipeTransform {
  transform(value: Product, ...args: unknown[]): unknown {
    return value.name + ' - ' + value.category;
  }
}
