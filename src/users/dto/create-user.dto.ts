import { IsInt, IsString } from 'class-validator';

import { User } from '../entities/user.entity';

export class CreateUserDto extends User {
  @IsString()
  readonly name: string;

  @IsInt()
  age: number;
}
