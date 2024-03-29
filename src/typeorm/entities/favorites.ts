import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'favorites' })
export class favorites {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column()
  coffeId: string;
}
