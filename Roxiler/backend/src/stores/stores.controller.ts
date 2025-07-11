import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { StoresService } from './stores.service';

@Controller('stores')
export class StoresController {
  constructor(private storesService: StoresService) {}

  @Post()
  async create(@Body() body) {
    return this.storesService.create(body);
  }

  @Get()
  async findAll() {
    return this.storesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return this.storesService.findOne(+id);
  }
}
