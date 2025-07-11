import { Store } from '../stores/stores.entity';
import { User } from '../users/users.entity';
export declare class Rating {
    id: number;
    score: number;
    store: Store;
    user: User;
}
