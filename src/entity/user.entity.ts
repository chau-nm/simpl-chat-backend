import {
  Column,
  Entity,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Message } from './message.entity';
import { Room } from './room.entity';

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

  @ManyToMany(() => Room, (room) => room.users)
  rooms: Room[];

  @OneToMany(() => Message, (message) => message.sender)
  sendMessages: Message[];

  @Column()
  createAt: number;

  @Column()
  updateAt: number;
}
