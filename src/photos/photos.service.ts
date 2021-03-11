import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Photo } from './entities/photo.entity';
import { CreatePhotoDto } from './dto/create-photo.dto';
import { UpdatePhotoDto } from './dto/update-photo.dto';

@Injectable()
export class PhotosService {
  constructor(
    @InjectRepository(Photo)
    private photosRepository: Repository<Photo>,
  ) {}

  findAll(): Promise<Photo[]> {
    return this.photosRepository.find();
  }

  findOne(id: number): Promise<Photo> {
    return this.photosRepository.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.photosRepository.delete(id);
  }

  create(createPhotoDto: CreatePhotoDto): Promise<Photo> {
    const photo = new Photo();
    photo.title = createPhotoDto.title;
    photo.description = createPhotoDto.description;

    return this.photosRepository.save(photo);
  }

  update(id: number, updatePhotoDto: UpdatePhotoDto) {
    return `This action updates a #${id} photo`;
  }
}
