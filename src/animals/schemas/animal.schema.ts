import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';

export type AnimalDocument = Animal & mongoose.Document;

@Schema({ discriminatorKey: 'kind' })
export class Animal extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  kind: string;
}

export const AnimalSchema = SchemaFactory.createForClass(Animal);

@Schema()
export class Cat {
  @Prop()
  livesLeft: number;
}

export const CatSchema = SchemaFactory.createForClass(Cat);

@Schema()
export class Dog {
  @Prop()
  breed: string;
}

export const DogSchema = SchemaFactory.createForClass(Dog);
