import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'favorites' })
export class favorites {
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

  @Column()
  image: string;

  @Column()
  type: string;

  @Column({ default: false })
  available: boolean;
}
