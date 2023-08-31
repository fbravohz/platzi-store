import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  HttpStatus,
  HttpCode,
  Res,
} from '@nestjs/common';

import { Response } from 'express'

@Controller('products')
export class ProductsController {
  // @Get('products/:id')
  // getProduct(@Param() params: any) {
  //   return `product ${params.id}`;
  // }

  @Get()
  getMany(
    @Query('limit') limit = 100,
    @Query('offset') offset: number,
    @Query('brand') brand: string,
  ) {
    return `product limit: ${limit} offset: ${offset} brand: ${brand}`;
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
    @Param('productId') productId: number | string,
  ) {
    response.status(200).send({
      productId,
    });
  }

  @Post()
  create(@Body() payload: any) {
    console.log(payload);
    return {
      message: 'accion de crear',
      payload: payload,
    };
  }

  @Post('nigga')
  createNigga(@Body('nigga') nigga: string) {
    console.log(nigga);
    return {
      message: 'accion de crear',
      nigga,
    };
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() payload: any) {
    return {
      id: id,
      body: payload,
    };
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return {
      id: id,
    };
  }
}
