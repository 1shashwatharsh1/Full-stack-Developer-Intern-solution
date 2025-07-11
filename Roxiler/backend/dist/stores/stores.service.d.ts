import { Repository } from 'typeorm';
import { Store } from './stores.entity';
export declare class StoresService {
    private storeRepository;
    constructor(storeRepository: Repository<Store>);
    create(data: Partial<Store>): Promise<Store>;
    findAll(): Promise<Store[]>;
    findOne(id: number): Promise<Store>;
}
