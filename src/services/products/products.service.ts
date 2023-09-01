import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from 'src/dtos/products.dto';
import { Product } from 'src/entities/product.entity';

@Injectable()
export class ProductsService {
  private products: Product[] = [
    {
      id: 1,
      name: 'Product 1',
      description: 'bla bla',
      price: 122,
      image: '',
      stock: 12,
    },
  ];

  private counter = 1;

  findAll() {
    return this.products;
  }

  findOne(id: number) {
    const product = this.products.find((product) => product.id === id);
    if (!product) {
      throw new NotFoundException(`Product #${id} not found`);
    }
    return product;
  }

  create(payload: CreateProductDto) {
    this.counter = this.counter + 1;
    const newProduct: Product = {
      id: this.counter,
      ...payload,
    };
    this.products.push(newProduct);
    return newProduct;
  }

  update(id: number, payload: any) {
    const product = this.products.find((product) => product.id == id);
    console.log(product);
    if (product) {
      const index = this.products.findIndex((item) => item.id === id);
      this.products[index] = {
        ...product,
        ...payload,
      };
      return this.products[index];
    }
    return null;
  }

  delete(id: number) {
    const productFinded = this.findOne(id);
    if (productFinded) {
      this.products = this.products.filter((p: Product) => p.id !== id);
    }
    return { success: productFinded };
  }
}

/*
Como buena practica, los errores se pueden lanzar desde los proveedores o servicios, pero se deben atrapar en los controllers.
Con try catch
*/

/*
Query parameters & path parameters siempre se envian como STRING, en el body si se respeta el tipo de dato
*/
