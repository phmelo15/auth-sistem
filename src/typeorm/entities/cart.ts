import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'cart' })
export class cart {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column()
  coffeId: string;
}
