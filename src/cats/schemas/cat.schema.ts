import * as mongoose from 'mongoose';
import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import { Owner } from 'src/owners/schemas/owner.schema';

export type CatDocument = Cat & Document;

@Schema()
export class Cat {
  @Prop({ required: true })
  name: string;

  @Prop()
  age: number;

  @Prop({ default: false })
  neutralization: boolean;

  @Prop([{ type: mongoose.Schema.Types.ObjectId, ref: 'Owner' }])
  owners: Owner[] | mongoose.Schema.Types.ObjectId[];
}

export const CatSchema = SchemaFactory.createForClass(Cat);
