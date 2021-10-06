import {
  BaseEntity,
  Column,
  Entity,
  Index,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
@Entity()
class User extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column()
  mobile_number: string;

  @Column()
  email_id: string;

  @Column({unique:true})
  username: string;

  @Column({ select: false })
  password: string;

  @Column({
    enum: ["user", "event_manager"],
    default: "user",
  })
  role: string;

  @Column({ nullable: true })
  profile_photo: string;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  created_on: string;

  @UpdateDateColumn()
  updated_on;
}

export default User;
