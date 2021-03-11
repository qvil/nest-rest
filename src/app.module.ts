import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { IpController } from './ip/ip.controller';
import { RedirectController } from './redirect/redirect.controller';
import { CatsModule } from './cats/cats.module';
import { OwnersModule } from './owners/owners.module';
// import { PhotosModule } from './photos/photos.module';
// import { UsersModule } from './users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.DB_URL),
    CatsModule,
    OwnersModule,
    TypeOrmModule.forRoot(),
    // PhotosModule,
    // UsersModule,
  ],
  controllers: [AppController, IpController, RedirectController],
  providers: [AppService],
})
export class AppModule {}
