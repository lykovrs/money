import { IsOptional, IsUrl, Length } from 'class-validator';

export class CreateAchievementDto {
  @Length(1, 250)
  name: string; // название подарка

  @IsUrl()
  @IsOptional()
  image?: string; // ссылка на изображение подарка

  @Length(1, 1024)
  @IsOptional()
  description?: string; // строка с описанием подарка
}
