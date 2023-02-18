import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Photo } from './enitites/photo.entity';
import { Role } from './enitites/role.entity';
import { Profile } from './enitites/student.entity';
import { User } from './enitites/user.entity';
import { TestingTypeormController } from './testing-typeorm.controller';

@Module({
  imports: [
    // TypeOrmModule.forRoot({
    //   type: 'postgres',
    //   host: 'localhost',
    //   port: 5432,
    //   username: 'root',
    //   password: '12345678',
    //   database: 'paragon',
    //   entities: ['dist/**/*entity.js'],
    //   synchronize: true
    // }),
    // TypeOrmModule.forFeature([Profile, User, Role, Photo])
  ],
  controllers: [TestingTypeormController]
})
export class TestingTypeormModule {}
