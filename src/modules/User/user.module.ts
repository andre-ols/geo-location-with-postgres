import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CreateUserController } from './controller/create-user.controller';
import { FindAllProxiesUserController } from './controller/find-all-proxies-user.controoler';
import { FindAllUserByLocationController } from './controller/find-all-user-by-location.controoler';
import { User } from './entity/user.entity';
import { CreateUserService } from './service/create-user.service';
import { FindAllProxiesUserService } from './service/find-all-proxies-user.service';
import { FindAllUserByLocationService } from './service/find-all-user-by-location.service';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [
    CreateUserController,
    FindAllProxiesUserController,
    FindAllUserByLocationController,
  ],
  providers: [FindAllUserByLocationService, CreateUserService, FindAllProxiesUserService],
})
export class UserModule {}
