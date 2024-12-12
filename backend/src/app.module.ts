import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserService } from './user/user.service';
import { UserController } from './user/user.controller';

@Module({
  imports: [],
  controllers: [UserController, AppController],
  providers: [UserService, AppService],
})
export class AppModule {}
