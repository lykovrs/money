import { BaseAbstractEntity } from '../../BaseAbstractEntity';
import { User } from '../../users/entities/user.entity';
import { Column, Entity, ManyToOne } from 'typeorm';
import { IsOptional, IsUrl, Length } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

// Схема для подарков
@Entity()
export class Achievement extends BaseAbstractEntity {
  @ApiProperty({
    description: 'имя пользователя',
    example: 'Пробежал 100 километров',
    minimum: 250,
    maximum: 1,
  })
  @Column({
    type: 'varchar',
    length: 250,
  })
  @Length(1, 250)
  name: string; // название достижения

  @ApiProperty({
    description: 'ссылка на изображение достижения',
    example: 'https://example.com/achievement.png',
    minimum: 1,
    maximum: 1024,
    required: false,
    default: '',
  })
  @Column()
  @IsUrl()
  @IsOptional()
  image?: string; // ссылка на изображение достижения

  @ApiProperty({
    description: 'ссылка автора достижения',
    type: () => User,
  })
  @ManyToOne(() => User, (user) => user.achievement)
  owner: User;

  @ApiProperty({
    description: 'описание достижения',
    example: 'Продвинулся на 100 километров за последний месяц',
    minimum: 1,
    maximum: 1024,
    required: false,
    default: '',
  })
  @Column({
    type: 'varchar',
    length: 1024,
  })
  @Length(1, 1024)
  @IsOptional()
  description?: string; // строка с описанием достижения
}
