import { User } from 'src/users/entities/User';
import {
  Column,
  Entity,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'favorites' })
export class favorites {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column()
  coffeId: string;
}
