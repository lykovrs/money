import { BaseAbstractEntity } from '../../BaseAbstractEntity';
import { User } from '../../users/entities/user.entity';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { IsOptional, IsUrl, Length } from 'class-validator';

// Схема для подарков
@Entity()
export class Achievement extends BaseAbstractEntity {
  @Column({
    type: 'varchar',
    length: 250,
  })
  @Length(1, 250)
  name: string; // название достижения

  @Column()
  @IsUrl()
  @IsOptional()
  image?: string; // ссылка на изображение достижения

  @ManyToOne(() => User, (user) => user.achievement)
  owner: User;

  @Column({
    type: 'varchar',
    length: 1024,
  })
  @Length(1, 1024)
  @IsOptional()
  description?: string; // строка с описанием достижения
}
