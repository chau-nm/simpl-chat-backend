import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Room } from './room.entity';
import { User } from './user.entity';

@Entity()
export class Message {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Room, (room) => room.id)
  room: Room;

  @Column()
  content: string;

  @ManyToOne(() => User, (user) => user.sendMessages)
  sender: User;

  @Column()
  createAt: number;

  @Column()
  updateAt: number;
}
