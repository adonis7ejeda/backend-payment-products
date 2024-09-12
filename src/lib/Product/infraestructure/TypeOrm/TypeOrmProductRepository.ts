import { Repository } from 'typeorm';
import { ProductRepository } from '../../domain/ProductRepository';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from '../../domain/Product';
import { ProductId } from '../../domain/ProductId';
import { TypeOrmProductEntity } from './TypeOrmProductEntity';
import { ProductName } from '../../domain/ProductName';
import { ProductDescription } from '../../domain/ProductDescription';
import { ProductPrice } from '../../domain/ProductPrice';
import { ProductCreatedAt } from '../../domain/ProductCreatedAt';

export class TypeOrmProductRepository implements ProductRepository {
  constructor(
    @InjectRepository(TypeOrmProductEntity)
    private readonly repository: Repository<TypeOrmProductEntity>,
  ) {}

  private mapToDomain(p: TypeOrmProductEntity) {
    return new Product(
      new ProductId(p.id),
      new ProductName(p.name),
      new ProductDescription(p.description),
      new ProductPrice(p.price),
      new ProductCreatedAt(p.createdAt),
    );
  }

  async getAll(): Promise<Product[]> {
    const products = await this.repository.find();

    return products.map((p) => this.mapToDomain(p));
  }

  async getOneById(id: ProductId): Promise<Product | null> {
    const product = await this.repository.findOne({
      where: {
        id: id.value,
      },
    });

    if (!product) return null;

    return this.mapToDomain(product);
  }
}
