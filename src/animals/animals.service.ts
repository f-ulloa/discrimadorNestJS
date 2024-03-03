import { Injectable } from '@nestjs/common';
import { CreateAnimalDto } from './dto/create-animal.dto';
import { UpdateAnimalDto } from './dto/update-animal.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Animal, AnimalDocument } from './schemas/animal.schema';
import { Model } from 'mongoose';

@Injectable()
export class AnimalsService {
  constructor(
    @InjectModel(Animal.name) private animalModel: Model<AnimalDocument>,
  ) {}

  create(createAnimalDto: CreateAnimalDto): Promise<Animal> {
    const createdAnimal = new this.animalModel(createAnimalDto);
    return createdAnimal.save();
  }

  findAll() {
    return this.animalModel.find();
  }

  findOne(id: number) {
    return this.animalModel.find({ _id: id });
  }

  update(id: number, updateAnimalDto: UpdateAnimalDto) {
    return `This action updates a #${id} animal`;
  }

  remove(id: number) {
    return this.animalModel.deleteOne({ _id: id });
  }
}
