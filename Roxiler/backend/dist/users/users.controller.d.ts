import { UsersService } from './users.service';
export declare class UsersController {
    private usersService;
    constructor(usersService: UsersService);
    getAllUsers(): Promise<import("./users.entity").User[]>;
    getUser(id: number): Promise<import("./users.entity").User>;
}
