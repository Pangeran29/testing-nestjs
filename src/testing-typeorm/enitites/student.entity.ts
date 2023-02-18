import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from "typeorm"
import { User } from "./user.entity"

@Entity()
export class Profile {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    gender: string

    @Column()
    photo: string

    @OneToOne(() => User, { cascade: true })
    @JoinColumn()
    user: User
}