import { ProductCreatedAt } from './ProductCreatedAt';
import { ProductDescription } from './ProductDescription';
import { ProductId } from './ProductId';
import { ProductName } from './ProductName';
import { ProductPrice } from './ProductPrice';

export class Product {
  id: ProductId;
  name: ProductName;
  description: ProductDescription;
  price: ProductPrice;
  createdAt: ProductCreatedAt;

  constructor(
    id: ProductId,
    name: ProductName,
    description: ProductDescription,
    price: ProductPrice,
    createdAt: ProductCreatedAt,
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.price = price;
    this.createdAt = createdAt;
  }

  public toPlainObject() {
    return {
      id: this.id.value,
      name: this.name.value,
      description: this.description.value,
      price: this.price.value,
      createdAt: this.createdAt.value,
    };
  }
}
