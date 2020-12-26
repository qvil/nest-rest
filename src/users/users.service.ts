import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    return this.usersRepository.save(createUserDto);
  }

  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  findOne(id: number): Promise<User> {
    return this.usersRepository.findOne(id);
  }

  update(id: number, updateUserDto: UpdateUserDto) {}

  // async update(id: number, updateUserDto: UpdateUserDto): Promise<User> {
  //   // let userToUpdate = await this.usersRepository.findOne
  //   let userToUpdate = this.findOne(id);
  //   userToUpdate = {
  //     ...updateUserDto,
  //   };

  //   return await this.usersRepository.save(userToUpdate);
  //   // return await this.usersRepository.update(id, updateUserDto);
  // }

  async remove(id: number): Promise<void> {
    await this.usersRepository.delete(id);
  }
}
