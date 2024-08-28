import { Injectable } from '@nestjs/common';
import { CreateAchievementDto } from './dto/create-achievement.dto';
import { UpdateAchievementDto } from './dto/update-achievement.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { Achievement } from './entities/achievement.entity';
import { User } from '../users/entities/user.entity';
import { ServerException } from '../exceptions/server.exception';
import { ErrorCode } from '../exceptions/error-codes';

@Injectable()
export class AchievementsService {
  constructor(
    @InjectRepository(Achievement)
    private achievementsRepository: Repository<Achievement>,
    private dataSource: DataSource,
  ) {}

  async create(owner: User, createAchievementDto: CreateAchievementDto) {
    const achievement = this.achievementsRepository.create({
      owner: User.removePassword(owner),
      ...createAchievementDto,
    });

    return this.achievementsRepository.save(achievement);
  }

  findLast() {
    return this.achievementsRepository.find({
      skip: 0,
      take: 40,
      order: {
        createdAt: 'DESC',
      },
    });
  }

  async findOne(id: number) {
    const achievement = await this.achievementsRepository.findOne({
      where: {
        id: id,
      },
      relations: {
        owner: true,
      },
    });

    if (!achievement) {
      throw new ServerException(ErrorCode.AchievementNotFound);
    }

    if (achievement) delete achievement.owner.password;

    return { ...achievement };
  }

  updateRaise(id: number, raise: number) {
    return this.achievementsRepository.save({ id, raised: raise });
  }

  async update(
    id: number,
    updateAchievementDto: UpdateAchievementDto,
    editorId: number,
  ) {
    const achievement = await this.findOne(id);

    if (achievement.owner.id !== editorId) {
      throw new ServerException(ErrorCode.AchievementCanEditOwn);
    }

    await this.achievementsRepository.save({ id, ...updateAchievementDto });

    return { ...achievement, ...updateAchievementDto };
  }

  async remove(id: number, editorId: number) {
    const achievement = await this.findOne(id);

    if (!achievement) {
      throw new ServerException(ErrorCode.AchievementNotFound);
    }

    if (achievement.owner.id !== editorId) {
      throw new ServerException(ErrorCode.AchievementCanNotDelete);
    }
    await this.achievementsRepository.delete({
      id,
    });

    return achievement;
  }

  async copy(id: number, owner: User) {
    const originalAchievement = await this.findOne(id);

    let myAchievement: Achievement | null = null;
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
      const { name, image, description } = originalAchievement;

      myAchievement = await this.create(owner, {
        name,
        image,
        description,
      });
      await queryRunner.commitTransaction();
    } catch (err) {
      await queryRunner.rollbackTransaction();
    } finally {
      await queryRunner.release();
    }

    return myAchievement;
  }
}
