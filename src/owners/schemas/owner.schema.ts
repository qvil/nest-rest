import * as mongoose from 'mongoose';
import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import { Cat } from 'src/cats/schemas/cat.schema';

export type OwnerDocument = Owner & Document;

@Schema({ strict: false })
export class Owner {
  @Prop({ required: true })
  name: string;

  @Prop()
  age: number;

  @Prop([{ type: mongoose.Schema.Types.ObjectId, ref: 'Cat' }])
  cats: Cat[] | mongoose.Schema.Types.ObjectId[];
}

export const OwnerSchema = SchemaFactory.createForClass(Owner);
