import { Controller, Post, Body, UseGuards, Request, Get, Param } from '@nestjs/common';
import { RatingsService } from './ratings.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('ratings')
@UseGuards(JwtAuthGuard)
export class RatingsController {
  constructor(private ratingsService: RatingsService) {}

  @Post()
  async rate(@Request() req, @Body() body: { storeId: number; score: number }) {
    return this.ratingsService.createOrUpdateRating(req.user.sub, body.storeId, body.score);
  }

  @Get('/store/:id')
  async getStoreRatings(@Param('id') id: number) {
    return this.ratingsService.getRatingsForStore(id);
  }

  @Get('/store/:id/average')
  async getAverage(@Param('id') id: number) {
    return { average: await this.ratingsService.getAverageRating(id) };
  }
}
