import {
  Controller,
  Get,
  Inject,
  NotFoundException,
  Param,
} from '@nestjs/common';
import { ProductGetAll } from '../../application/ProductGetAll/ProductGetAll';
import { ProductGetOneById } from '../../application/ProductGetOneById/ProductGetOneById';
import { FindOneParams } from './Validations';
import { ProductNotFoundError } from '../../domain/ProductNotFoundError';

@Controller('product')
export class ProductController {
  constructor(
    @Inject('ProductGetAll') private readonly productGetAll: ProductGetAll,
    @Inject('ProductGetOneById')
    private readonly productGetOneById: ProductGetOneById,
  ) {}

  @Get()
  async getAll() {
    return (await this.productGetAll.run()).map((p) => p.toPlainObject());
  }

  @Get(':id')
  async getOneById(@Param() params: FindOneParams) {
    try {
      return (await this.productGetOneById.run(params.id)).toPlainObject();
    } catch (error) {
      if (error instanceof ProductNotFoundError) {
        throw new NotFoundException();
      }

      throw error;
    }
  }
}
