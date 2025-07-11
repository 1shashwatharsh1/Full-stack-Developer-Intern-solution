import { Repository } from 'typeorm';
import { User } from './users.entity';
export declare class UsersService {
    private userRepository;
    constructor(userRepository: Repository<User>);
    create(data: Partial<User>): Promise<User>;
    findAll(): Promise<User[]>;
    findByEmail(email: string): Promise<User | undefined>;
    findOne(id: number): Promise<User | undefined>;
}
