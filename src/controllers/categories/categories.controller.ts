import { Controller, Get, Param } from '@nestjs/common';

@Controller('categories')
export class CategoriesController {
  @Get(':categoryId/products/:productId')
  getCategory(
    @Param('categoryId') categoryId: number | string,
    @Param('productId') productId: number | string,
  ) {
    return `category: ${categoryId} product: ${productId}`;
  }
}
