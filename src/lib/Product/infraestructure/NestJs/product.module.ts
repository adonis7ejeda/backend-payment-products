import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { ProductGetAll } from '../../application/ProductGetAll/ProductGetAll';
import { TypeOrmProductRepository } from '../TypeOrm/TypeOrmProductRepository';
import { ProductGetOneById } from '../../application/ProductGetOneById/ProductGetOneById';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmProductEntity } from '../TypeOrm/TypeOrmProductEntity';

@Module({
  imports: [TypeOrmModule.forFeature([TypeOrmProductEntity])],
  controllers: [ProductController],
  providers: [
    {
      provide: 'ProductRepository',
      useClass: TypeOrmProductRepository,
    },
    {
      provide: 'ProductGetAll',
      useFactory: (repository: TypeOrmProductRepository) =>
        new ProductGetAll(repository),
      inject: ['ProductRepository'],
    },
    {
      provide: 'ProductGetOneById',
      useFactory: (repository: TypeOrmProductRepository) =>
        new ProductGetOneById(repository),
      inject: ['ProductRepository'],
    },
  ],
})
export class ProductModule {}
