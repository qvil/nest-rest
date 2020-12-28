import { InjectModel } from '@nestjs/mongoose';
import { Injectable, NotFoundException } from '@nestjs/common';
import { Model } from 'mongoose';

import { Cat } from 'src/cats/schemas/cat.schema';
import { CreateOwnerDto } from './dto/create-owner.dto';
import { Owner, OwnerDocument } from './schemas/owner.schema';
import { UpdateOwnerDto } from './dto/update-owner.dto';

@Injectable()
export class OwnersService {
  constructor(
    @InjectModel(Owner.name) private readonly ownerModel: Model<OwnerDocument>,
  ) {}

  async create(createOwnerDto: CreateOwnerDto) {
    const createdOwner = new this.ownerModel(createOwnerDto);
    return createdOwner.save();
  }

  async findAll(): Promise<Owner[]> {
    return this.ownerModel
      .find()
      .populate({ path: 'cats', model: Cat.name })
      .exec();
  }

  async findOne(_id: string): Promise<Owner> {
    const owner = await this.ownerModel.findById(_id);

    if (!owner) throw new NotFoundException();

    return owner;
  }

  async update(_id: string, updateOwnerDto: UpdateOwnerDto): Promise<Owner> {
    const updatedOwner = await this.ownerModel
      .findOneAndUpdate({ _id }, updateOwnerDto, {
        new: true,
      })
      .populate('Cat');

    return updatedOwner;
  }

  async remove(_id: string) {
    const removedOwner = this.ownerModel.findOneAndRemove({ _id });

    return removedOwner;
  }
}
