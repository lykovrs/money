import { BaseAbstractEntity } from '../../BaseAbstractEntity';
import { User } from '../../users/entities/user.entity';
import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { IsArray, IsOptional, IsUrl, Length } from 'class-validator';
import { Offer } from '../../offers/entities/offer.entity';
import { Achievement } from 'src/achievements/entities/achievement.entity';
import { ApiProperty } from '@nestjs/swagger';

// Схема мечты
@Entity()
export class Wish extends BaseAbstractEntity {
  @ApiProperty({
    description: 'Заголовок мечты',
    example: 'Построить дом',
    minimum: 250,
    maximum: 1,
  })
  @Column({
    type: 'varchar',
    length: 250,
  })
  @Length(1, 250)
  name: string;

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
  @Column({ array: true })
  @IsUrl()
  @IsOptional()
  images?: string; // ссылка на изображения

  @ApiProperty({
    description: 'ссылка на мечту',
    example: 'https://example.com/achievement',
    minimum: 1,
    maximum: 1024,
    required: false,
    default: '',
  })
  @Column()
  @IsUrl()
  link: string; // ссылка на интернет-магазин, в котором можно приобрести подарок

  @ApiProperty({
    description: 'Стоимость мечты',
    example: 100,
    required: false,
    default: '',
  })
  @Column('decimal', { precision: 16, scale: 2 })
  price: number; // стоимость желания

  @ApiProperty({
    description:
      'Cумма предварительного сбора или сумма, которую пользователи сейчас готовы скинуть на мечту',
    example: 100,
    required: false,
    default: '',
  })
  @Column('decimal', { precision: 16, scale: 2 })
  raised: number;

  @ApiProperty({
    description: 'ссылка автора мечты',
    type: () => User,
  })
  @ManyToOne(() => User, (user) => user.wishes)
  owner: User;

  @ApiProperty({
    description: 'Достижения, которые относятся к мечте',
    items: {
      type: 'Achievement',
    },
  })
  @ManyToMany(() => Achievement)
  @JoinTable()
  steps: Achievement[];

  @ApiProperty({
    description: 'Описание подарка',
    example: 'Лучший в мире супер-пупер',
    minimum: 1024,
    maximum: 1,
  })
  @Column({
    type: 'varchar',
    length: 1024,
  })
  @Length(1, 1024)
  @IsOptional()
  description?: string; // строка с

  @ApiProperty({
    description: 'Массив ссылок на заявки скинуться от других пользователей',
    items: {
      type: 'Offer',
    },
  })
  @OneToMany(() => Offer, (offer) => offer.item)
  @JoinColumn()
  offers: Offer[]; //

  @ApiProperty({
    description: 'Счётчик тех, кто скопировал мечту себе',
    example: 100,
    default: '',
  })
  @Column({
    type: 'numeric',
    precision: 1,
  })
  copied: number; // счётчик тех, кто скопировал мечту себе
}
