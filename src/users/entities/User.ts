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

  // @JoinColumn()
  // favorites: favorites;
}
