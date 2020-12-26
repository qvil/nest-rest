import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import { Photo } from 'src/photos/entities/photo.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @ApiProperty({ example: 'qvil', description: 'name' })
  name: string;

  @Column()
  @ApiProperty({ example: 20, description: 'age' })
  age: number;

  @OneToMany(() => Photo, (photo) => photo.user)
  photos: Photo[];
}
