import { User } from 'src/users/entities/User';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'favorites' })
export class favorites {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @ManyToOne(() => User, (user) => user.Favorites)
  user: User;

  @Column()
  coffeId: string;
}
