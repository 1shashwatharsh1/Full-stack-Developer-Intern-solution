import { Repository } from 'typeorm';
import { Rating } from './ratings.entity';
export declare class RatingsService {
    private ratingRepository;
    constructor(ratingRepository: Repository<Rating>);
    createOrUpdateRating(userId: number, storeId: number, score: number): Promise<any>;
    getRatingsForStore(storeId: number): Promise<Rating[]>;
    getAverageRating(storeId: number): Promise<number>;
}
