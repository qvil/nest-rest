import * as mongoose from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';

export class CreateCatDto {
  @ApiProperty({ example: '쨀리', description: '고영희 이름' })
  name: string;

  @ApiProperty({ example: 1, description: '고영희 나이' })
  age: number;

  @ApiProperty({ default: false })
  neutralization: boolean;

  @ApiProperty()
  owners?: mongoose.Schema.Types.ObjectId[];
}
