import { Module } from '@nestjs/common';
import { AnimalsService } from './animals.service';
import { AnimalsController } from './animals.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {
  Animal,
  AnimalSchema,
  CatSchema,
  DogSchema,
} from './schemas/animal.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Animal.name,
        schema: AnimalSchema,
        discriminators: [
          { name: 'Gato', schema: CatSchema },
          { name: 'Perro', schema: DogSchema },
        ],
      },
    ]),
  ],
  controllers: [AnimalsController],
  providers: [AnimalsService],
})
export class AnimalsModule {}
