import { Body, Controller, Post } from '@nestjs/common';
import { UserDto } from '../dto/user.dto';
import { CreateUserService } from '../service/create-user.service';

@Controller('user')
export class CreateUserController {
  constructor(private readonly createUserService: CreateUserService) {}

  @Post()
  async handle(@Body() dto: UserDto) {
    return await this.createUserService.handle(dto);
  }
}
