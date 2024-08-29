import { ApiProperty } from '@nestjs/swagger';
import {
  IsArray,
  IsNumber,
  IsOptional,
  IsPositive,
  IsUrl,
  Length,
} from 'class-validator';

export class CreateWishDto {
  @Length(1, 250)
  name: string; // название подарка

  @IsUrl()
  link: string; // ссылка на интернет-магазин, в котором можно приобрести подарок

  @ApiProperty({
    description: 'Изображение мечты',
    example: [
      'https://example.com/achievement.png',
      'https://example.com/achievement.png',
      'https://example.com/achievement.png',
    ],
    items: {
      type: 'string',
    },
  })
  @IsArray()
  @IsUrl()
  @IsOptional()
  images?: string;

  @ApiProperty({
    description: 'Стоимость мечты',
    example: 100,
    required: false,
    default: '',
  })
  @IsNumber()
  @IsPositive()
  price: number;

  @ApiProperty({
    description: 'описание мечты',
    example: 'Сбросить 10 кило',
    minimum: 1,
    maximum: 1024,
    required: false,
    default: '',
  })
  @Length(1, 1024)
  @IsOptional()
  description?: string;
}
