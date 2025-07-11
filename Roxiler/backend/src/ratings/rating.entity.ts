import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Store } from '../stores/store.entity';
import { User } from '../users/users.entity';

@Entity()
export class Rating {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  score: number;

  @ManyToOne(() => Store, (store) => store.ratings, { onDelete: 'CASCADE' })
  store: Store;

  @ManyToOne(() => User, (user) => user.ratings, { onDelete: 'CASCADE' })
  user: User;
}
