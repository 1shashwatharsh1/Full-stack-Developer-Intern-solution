import { Rating } from '../ratings/ratings.entity';
export declare enum UserRole {
    ADMIN = "admin",
    NORMAL_USER = "normal_user",
    STORE_OWNER = "store_owner"
}
export declare class User {
    id: number;
    name: string;
    email: string;
    address: string;
    passwordHash: string;
    role: UserRole;
    ratings: Rating[];
}
