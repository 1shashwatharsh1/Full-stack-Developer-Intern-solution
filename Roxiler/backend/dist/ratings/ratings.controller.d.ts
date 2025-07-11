import { RatingsService } from './ratings.service';
export declare class RatingsController {
    private ratingsService;
    constructor(ratingsService: RatingsService);
    rate(req: any, body: {
        storeId: number;
        score: number;
    }): Promise<any>;
    getStoreRatings(id: number): Promise<Rating[]>;
    getAverage(id: number): Promise<{
        average: number;
    }>;
}
