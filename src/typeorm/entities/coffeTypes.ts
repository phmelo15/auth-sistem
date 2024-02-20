import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'coffeTypes' })
export class coffeTypes {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

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

  @Column()
  image: string;

  @Column()
  type: string;

  @Column({ default: false })
  isFavorite: boolean;

  @Column({ default: false })
  available: boolean;
}
