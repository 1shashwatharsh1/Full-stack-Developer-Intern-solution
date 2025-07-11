import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Store } from './store.entity';

@Injectable()
export class StoresService {
  constructor(
    @InjectRepository(Store)
    private storeRepository: Repository<Store>,
  ) {}

  async create(data: Partial<Store>): Promise<Store> {
    const store = this.storeRepository.create(data);
    return this.storeRepository.save(store);
  }

  async findAll(): Promise<Store[]> {
    return this.storeRepository.find({ relations: ['ratings'] });
  }

  async findOne(id: number): Promise<Store> {
    return this.storeRepository.findOne({ where: { id }, relations: ['ratings'] });
  }
}
