import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from "typeorm"
import { User } from "./user.entity"

@Entity()
export class Role {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    url: string

    // @OneToMany(() => User, (user) => user.role)
    // user: User
}