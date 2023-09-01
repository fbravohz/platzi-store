import {
  IsNumber,
  IsString,
  IsUrl,
  // IsDate,
  // IsEmail,
  IsNotEmpty,
  IsPositive,
  // IsStrongPassword,
} from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateProductDto {
  @IsString({ message: 'el nombre del producto debe ser un string' })
  @IsNotEmpty()
  readonly name: string;

  @IsString()
  @IsNotEmpty()
  readonly description: string;

  @IsNumber()
  @IsNotEmpty()
  @IsPositive()
  readonly price: number;

  @IsNumber()
  @IsNotEmpty()
  readonly stock: number;

  @IsUrl()
  @IsNotEmpty()
  readonly image: string;

  // @IsStrongPassword()
  // @IsString()
  // readonly password: string;
}

export class UpdateProductDto extends PartialType(CreateProductDto) {}
