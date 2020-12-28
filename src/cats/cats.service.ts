import { InjectModel } from '@nestjs/mongoose';
import { Injectable, NotFoundException } from '@nestjs/common';
import { Model } from 'mongoose';

import { Cat, CatDocument } from './schemas/cat.schema';
import { CreateCatDto } from './dto/create-cat.dto';
import { Owner } from 'src/owners/schemas/owner.schema';
import { UpdateCatDto } from './dto/update-cat.dto';

@Injectable()
export class CatsService {
  constructor(@InjectModel(Cat.name) private catModel: Model<CatDocument>) {}

  async create(createCatDto: CreateCatDto): Promise<Cat> {
    const createdCat = new this.catModel(createCatDto);
    return createdCat.save();
  }

  async findAll(): Promise<Cat[]> {
    return this.catModel.find().populate({ path: 'owners', model: Owner.name });
  }

  async findOne(_id: string) {
    const cat = await this.catModel.findById(_id);

    if (!cat) throw new NotFoundException();

    return cat;
  }

  async update(_id: string, updateCatDto: UpdateCatDto) {
    const updatedCat = await this.catModel
      .findOneAndUpdate({ _id }, updateCatDto, {
        new: true,
      })
      .populate('Cat');

    return updatedCat;
  }

  async remove(_id: string) {
    const removedCat = this.catModel.findOneAndRemove({ _id });

    return removedCat;
  }
}
