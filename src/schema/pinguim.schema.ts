
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type PinguimDocument = HydratedDocument<Pinguim>;

@Schema({collection: "Database Pinguims JOI"})
export class Pinguim {
  @Prop()
  name: string;

  @Prop()
  age: number;
}

export const PinguimSchema = SchemaFactory.createForClass(Pinguim);