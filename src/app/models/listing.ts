import {
  BaseEntity,
  Column,
  Entity,
  Index,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
@Entity()
class Listing extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  event_name: string;

  @Column()
  event_date: string;

  @Column()
  total_seats: number;

  @Column()
  available_seats: number;

  @Column({ nullable: true })
  event_photo: string;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  created_on: string;

  @UpdateDateColumn()
  updated_on;
}

export default Listing;
