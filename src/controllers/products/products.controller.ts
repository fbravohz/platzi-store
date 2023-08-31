import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  // Query,
  HttpStatus,
  HttpCode,
  Res,
  // ParseIntPipe,
} from '@nestjs/common';
import { Response } from 'express';
import { ProductsService } from 'src/services/products/products.service';
import { ParseIntPipe } from 'src/common/parse-int/parse-int.pipe';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}
  // @Get('products/:id')
  // getProduct(@Param() params: any) {
  //   return `product ${params.id}`;
  // }

  @Get()
  getMany() {
    // @Query('brand') brand: string, // @Query('offset') offset: number, // @Query('limit') limit = 100,
    // return `product limit: ${limit} offset: ${offset} brand: ${brand}`;
    return {
      success: this.productsService.findAll(),
    };
  }

  //RUTAS NO DINAMICAS VAN PRIMERO QUE LAS DINAMICAS
  @Get('filter')
  getProductFilter() {
    return `yo soy filter`;
  }

  @Get(':productId')
  @HttpCode(HttpStatus.ACCEPTED)
  getUnique(
    @Res() response: Response,
    @Param('productId', ParseIntPipe) productId: number,
  ) {
    const one = this.productsService.findOne(+productId);
    response.status(200).send({
      success: one,
    });
  }

  @Post()
  create(@Body() payload: any) {
    const res = this.productsService.create(payload);
    return {
      res,
    };
  }

  @Post('nigga')
  createNigga(@Body('nigga') nigga: string) {
    return {
      message: 'accion de crear',
      nigga,
    };
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() payload: any) {
    const resp = this.productsService.update(+id, payload);
    return {
      resp,
    };
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.productsService.delete(+id);
  }
}
