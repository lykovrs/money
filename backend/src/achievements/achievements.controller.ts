import { Achievement } from 'src/achievements/entities/achievement.entity';
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Req,
} from '@nestjs/common';
import { AchievementsService } from './achievements.service';
import { CreateAchievementDto } from './dto/create-achievement.dto';
import { UpdateAchievementDto } from './dto/update-achievement.dto';
import { JwtGuard } from '../guards/auth.guard';
import { ApiBearerAuth, ApiOkResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('achievement')
@ApiBearerAuth()
@Controller('achievement')
export class AchievementsController {
  constructor(private readonly achievementsService: AchievementsService) {}

  @ApiOkResponse({
    description: 'Создание достижения',
    type: Achievement,
  })
  @UseGuards(JwtGuard)
  @Post()
  create(@Req() req, @Body() createWishDto: CreateAchievementDto) {
    return this.achievementsService.create(req.user, createWishDto);
  }

  @ApiOkResponse({
    description: 'Последние достижения',
    type: Achievement,
    isArray: true,
  })
  @Get('/last')
  findLast() {
    return this.achievementsService.findLast();
  }
  @ApiOkResponse({
    description: 'Получение достижения',
    type: Achievement,
  })
  @UseGuards(JwtGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.achievementsService.findOne(+id);
  }

  @ApiOkResponse({
    description: 'Обновление достижения',
    type: Achievement,
  })
  @UseGuards(JwtGuard)
  @Patch(':id')
  update(
    @Req() req,
    @Param('id') id: string,
    @Body() updateWishDto: UpdateAchievementDto,
  ) {
    return this.achievementsService.update(+id, updateWishDto, req.user.id);
  }

  @ApiOkResponse({
    description: 'Удаление достижения',
    type: Achievement,
  })
  @UseGuards(JwtGuard)
  @Delete(':id')
  remove(@Req() req, @Param('id') id: string) {
    return this.achievementsService.remove(+id, req.user.id);
  }

  @ApiOkResponse({
    description: 'Копирование достижения',
    type: Achievement,
  })
  @UseGuards(JwtGuard)
  @Post(':id/copy')
  copy(@Req() req, @Param('id') id: string) {
    return this.achievementsService.copy(+id, req.user);
  }
}
