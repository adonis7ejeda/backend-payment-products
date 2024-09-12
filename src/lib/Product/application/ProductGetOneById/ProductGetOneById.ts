import { Product } from '../../domain/Product';
import { ProductId } from '../../domain/ProductId';
import { ProductNotFoundError } from '../../domain/ProductNotFoundError';
import { ProductRepository } from '../../domain/ProductRepository';

export class ProductGetOneById {
  constructor(private repository: ProductRepository) {}

  async run(id: string): Promise<Product> {
    const product = await this.repository.getOneById(new ProductId(id));

    if (!product) throw new ProductNotFoundError('Product not found');

    return product;
  }
}
