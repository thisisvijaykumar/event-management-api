import {
    BaseEntity,
    Column,
    Entity,
    Index,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
  } from "typeorm";
  @Entity()
  class Booking extends BaseEntity {
    @PrimaryGeneratedColumn("uuid")
    id: string;
  
    @Column()
    user_id: string;
  
    @Column()
    listing_id: string;
  
    @Column()
    booked_seats: number;
  
    @Column("simple-array",{ nullable: true })
    attendees: string[];
  
    @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
    created_on: string;
  
    @UpdateDateColumn()
    updated_on;
  }
  
  export default Booking;
  