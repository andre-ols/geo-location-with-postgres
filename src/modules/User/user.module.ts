import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CreateUserController } from './controller/create-user.controller';
import { FindAllUserByRadiusController } from './controller/find-all-user-by-radius.controoler';
import { User } from './entity/user.entity';
import { CreateUserService } from './service/create-user.service';
import { FindAllUserByLocationService } from './service/find-users-by-location.service';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [CreateUserController, FindAllUserByRadiusController],
  providers: [FindAllUserByLocationService, CreateUserService],
})
export class UserModule {}
