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
import { WishesService } from './wishes.service';
import { CreateWishDto } from './dto/create-wish.dto';
import { UpdateWishDto } from './dto/update-wish.dto';
import { JwtGuard } from '../guards/auth.guard';
import { ApiBearerAuth, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { Wish } from './entities/wish.entity';

@ApiTags('wishes')
@ApiBearerAuth()
@Controller('wishes')
export class WishesController {
  constructor(private readonly wishesService: WishesService) {}

  @ApiOkResponse({
    description: 'Мечта',
    type: Wish,
  })
  @UseGuards(JwtGuard)
  @Post()
  create(@Req() req, @Body() createWishDto: CreateWishDto) {
    return this.wishesService.create(req.user, createWishDto);
  }

  @ApiOkResponse({
    description: 'Последние мечты',
    type: Wish,
    isArray: true,
  })
  @Get('/last')
  findLast() {
    return this.wishesService.findLast();
  }

  @ApiOkResponse({
    description: 'Популярные мечты',
    type: Wish,
    isArray: true,
  })
  @Get('/top')
  findTop() {
    return this.wishesService.findTop();
  }

  @ApiOkResponse({
    description: 'Мечта по идентификатору',
    type: Wish,
  })
  @UseGuards(JwtGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.wishesService.findOne(+id);
  }

  @ApiOkResponse({
    description: 'Редактирование мечты',
    type: Wish,
  })
  @UseGuards(JwtGuard)
  @Patch(':id')
  update(
    @Req() req,
    @Param('id') id: string,
    @Body() updateWishDto: UpdateWishDto,
  ) {
    return this.wishesService.update(+id, updateWishDto, req.user.id);
  }

  @ApiOkResponse({
    description: 'Удаление мечты',
    type: Wish,
  })
  @UseGuards(JwtGuard)
  @Delete(':id')
  remove(@Req() req, @Param('id') id: string) {
    return this.wishesService.remove(+id, req.user.id);
  }

  @ApiOkResponse({
    description: 'Скопировать мечту',
    type: Wish,
  })
  @UseGuards(JwtGuard)
  @Post(':id/copy')
  copy(@Req() req, @Param('id') id: string) {
    return this.wishesService.copy(+id, req.user);
  }
}
