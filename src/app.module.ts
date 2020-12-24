import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { IpController } from './ip/ip.controller';
import { RedirectController } from './redirect/redirect.controller';
import { ProductsModule } from './products/products.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [UsersModule, ProductsModule],
  controllers: [AppController, IpController, RedirectController],
  providers: [AppService],
})
export class AppModule {}
