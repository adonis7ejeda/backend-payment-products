import { Module } from '@nestjs/common';
import { ProductModule } from './lib/Product/infraestructure/NestJs/product.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmProductEntity } from './lib/Product/infraestructure/TypeOrm/TypeOrmProductEntity';

@Module({
  imports: [
    ProductModule,
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DATABASE_URL,
      entities: [TypeOrmProductEntity],
    }),
  ],
})
export class AppModule {}
