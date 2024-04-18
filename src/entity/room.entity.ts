import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Message } from './message.entity';
import { User } from './user.entity';

@Entity()
export class Room {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToMany(() => User, (user) => user.rooms, {
    cascade: true,
  })
  @JoinTable()
  users: User[];

  @OneToMany(() => Message, (message) => message.id)
  messages: Message[];

  @Column()
  createAt: number;

  @Column()
  updateAt: number;
}
