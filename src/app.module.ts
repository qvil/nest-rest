import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { IpController } from './ip/ip.controller';
import { RedirectController } from './redirect/redirect.controller';
import { TypeOrmModule } from './typeorm.module';

@Module({
  imports: [UsersModule, TypeOrmModule],
  controllers: [AppController, IpController, RedirectController],
  providers: [AppService],
})
export class AppModule {}
