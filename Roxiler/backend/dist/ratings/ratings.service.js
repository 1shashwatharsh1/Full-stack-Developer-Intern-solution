"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RatingsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const ratings_entity_1 = require("./ratings.entity");
let RatingsService = class RatingsService {
    constructor(ratingRepository) {
        this.ratingRepository = ratingRepository;
    }
    async createOrUpdateRating(userId, storeId, score) {
        let rating = await this.ratingRepository.findOne({
            where: { user: { id: userId }, store: { id: storeId } },
            relations: ['user', 'store'],
        });
        if (rating) {
            rating.score = score;
        }
        else {
            rating = this.ratingRepository.create({
                user: { id: userId },
                store: { id: storeId },
                score,
            });
        }
        return this.ratingRepository.save(rating);
    }
    async getRatingsForStore(storeId) {
        return this.ratingRepository.find({
            where: { store: { id: storeId } },
            relations: ['user'],
        });
    }
    async getAverageRating(storeId) {
        const { avg } = await this.ratingRepository
            .createQueryBuilder('rating')
            .select('AVG(rating.score)', 'avg')
            .where('rating.storeId = :storeId', { storeId })
            .getRawOne();
        return Number(avg) || 0;
    }
};
exports.RatingsService = RatingsService;
exports.RatingsService = RatingsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(ratings_entity_1.Rating)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], RatingsService);
//# sourceMappingURL=ratings.service.js.map