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
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('achievement')
@ApiBearerAuth()
@Controller('achievement')
export class AchievementsController {
  constructor(private readonly achievementsService: AchievementsService) {}

  @UseGuards(JwtGuard)
  @Post()
  create(@Req() req, @Body() createWishDto: CreateAchievementDto) {
    return this.achievementsService.create(req.user, createWishDto);
  }

  @Get('/last')
  findLast() {
    return this.achievementsService.findLast();
  }

  @UseGuards(JwtGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.achievementsService.findOne(+id);
  }

  @UseGuards(JwtGuard)
  @Patch(':id')
  update(
    @Req() req,
    @Param('id') id: string,
    @Body() updateWishDto: UpdateAchievementDto,
  ) {
    return this.achievementsService.update(+id, updateWishDto, req.user.id);
  }

  @UseGuards(JwtGuard)
  @Delete(':id')
  remove(@Req() req, @Param('id') id: string) {
    return this.achievementsService.remove(+id, req.user.id);
  }

  @UseGuards(JwtGuard)
  @Post(':id/copy')
  copy(@Req() req, @Param('id') id: string) {
    return this.achievementsService.copy(+id, req.user);
  }
}
