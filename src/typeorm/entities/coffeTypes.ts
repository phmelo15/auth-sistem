import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'coffeTypes' })
export class coffeTypes {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  price: string;

  @Column()
  ingredients: string;

  @Column()
  preparationTime: number;

  @Column({ default: false })
  available: boolean;
}
