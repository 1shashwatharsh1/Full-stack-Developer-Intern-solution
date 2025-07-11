import { StoresService } from './stores.service';
export declare class StoresController {
    private storesService;
    constructor(storesService: StoresService);
    create(body: any): Promise<Store>;
    findAll(): Promise<Store[]>;
    findOne(id: number): Promise<Store>;
}
