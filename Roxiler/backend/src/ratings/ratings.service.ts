import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Rating } from './rating.entity';

@Injectable()
export class RatingsService {
  constructor(
    @InjectRepository(Rating)
    private ratingRepository: Repository<Rating>,
  ) {}

  async createOrUpdateRating(userId: number, storeId: number, score: number) {
    let rating = await this.ratingRepository.findOne({
      where: { user: { id: userId }, store: { id: storeId } },
      relations: ['user', 'store'],
    });
    if (rating) {
      rating.score = score;
    } else {
      rating = this.ratingRepository.create({
        user: { id: userId } as any,
        store: { id: storeId } as any,
        score,
      });
    }
    return this.ratingRepository.save(rating);
  }

  async getRatingsForStore(storeId: number) {
    return this.ratingRepository.find({
      where: { store: { id: storeId } },
      relations: ['user'],
    });
  }

  async getAverageRating(storeId: number) {
    const { avg } = await this.ratingRepository
      .createQueryBuilder('rating')
      .select('AVG(rating.score)', 'avg')
      .where('rating.storeId = :storeId', { storeId })
      .getRawOne();
    return Number(avg) || 0;
  }
}
