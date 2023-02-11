// import {
//   Entity,
//   PrimaryGeneratedColumn,
//   Column,
//   OneToOne,
//   JoinColumn,
//   OneToMany,
//   ManyToOne,
// } from "typeorm"
// import { Role } from "./role.entity"

// @Entity()
// export class User {
//   @PrimaryGeneratedColumn()
//   id: number

//   @Column()
//   name: string

//   @ManyToOne(() => Role, (role) => role.user, {
//     cascade: true
//   })
//   role: Role[]
// }

import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"
import { Photo } from "./photo.entity"

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @OneToMany(() => Photo, (photo) => photo.user, {
      cascade: true
    })
    photos: Photo[]
}