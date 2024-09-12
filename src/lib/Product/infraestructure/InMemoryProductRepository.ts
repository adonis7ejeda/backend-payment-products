import { Product } from '../domain/Product';
import { ProductId } from '../domain/ProductId';
import { ProductRepository } from '../domain/ProductRepository';

export class InMemoryProductRepository implements ProductRepository {
  private product: Product[] = [];

  async getAll(): Promise<Product[]> {
    return this.product;
  }

  async getOneById(id: ProductId): Promise<Product | null> {
    return (
      this.product.find((product) => (product.id.value = id.value)) || null
    );
  }
}
