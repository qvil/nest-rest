import * as mongoose from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';

export class CreateOwnerDto {
  @ApiProperty({ example: '집사', description: '집사 이름' })
  name: string;

  @ApiProperty({ type: Number, example: 20, description: '집사 나이' })
  age: number;

  @ApiProperty()
  cats: mongoose.Schema.Types.ObjectId[];
}
