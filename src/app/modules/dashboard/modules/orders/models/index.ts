import { User } from '../../../../../core/models';
import { Product } from '../../products/models';

export interface Order {
  id: string;
  userId: string;
  productId: string;
  quantity: number;
  user?: User;
  product?: Product;
}
