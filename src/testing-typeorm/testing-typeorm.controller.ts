import { Controller, Get } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Photo } from './enitites/photo.entity';
import { Role } from './enitites/role.entity';
import { Profile } from './enitites/student.entity';
import { User } from './enitites/user.entity';

@Controller('testing-typeorm')
export class TestingTypeormController {
  constructor(
    // @InjectRepository(User)
    // private readonly user: Repository<User>,
    // @InjectRepository(Profile)
    // private readonly profile: Repository<Profile>,
    // @InjectRepository(Role)
    // private readonly role: Repository<Role>,
    // @InjectRepository(Photo)
    // private readonly photo: Repository<Photo>
  ) {}


  @Get()
  async relationOneToOne() {

    /** One to one relation */
    // const user = new User()
    // user.name = "Joe Smith"
    
    // const profile = new Profile()
    // profile.gender = "male"
    // profile.photo = "me.jpg"
    // profile.user = user
    // await this.profile.save(profile)


    /** one to many relation */
    const photo1 = new Photo()
    photo1.url = "me.jpg"
    // await this.photo.save(photo1)

    const photo2 = new Photo()
    photo2.url = "me-and-bears.jpg"
    // await this.photo.save(photo2)

    const user = new User()
    user.name = "John"
    user.photos = [photo1, photo2]
    // await this.user.save(user)
    return 'test'
  } 
}
