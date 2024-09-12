import { Product } from './Product';
import { ProductId } from './ProductId';

export interface ProductRepository {
  getAll(): Promise<Product[]>;
  getOneById(id: ProductId): Promise<Product | null>;
}
