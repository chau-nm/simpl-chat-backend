import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column()
  fname: string;

  @Column()
  age: number;

  @Column()
  email: string;

  @Column()
  address: string;

  @Column()
  phone: string;
}
