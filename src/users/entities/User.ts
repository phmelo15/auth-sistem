import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Profile } from './Profile';
import { favorites } from 'src/typeorm/entities/favorites';
import { cart } from 'src/typeorm/entities/cart';

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column({ default: false })
  profileCreated: boolean;

  @Column()
  createdAt: Date;

  @OneToOne(() => Profile)
  @JoinColumn()
  profile: Profile;

  @OneToMany(() => favorites, (Favorites) => Favorites.user)
  Favorites: favorites;

  @OneToMany(() => cart, (cart) => cart.User)
  Cart: cart;
}
