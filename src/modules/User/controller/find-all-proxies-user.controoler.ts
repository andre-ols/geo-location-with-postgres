import { Controller, Get, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { FindAllProxiesUserDto } from '../dto/find-all-proxies-user.dto';
import { FindAllProxiesUserService } from '../service/find-all-proxies-user.service';

@ApiTags('user')
@Controller('distances')
export class FindAllProxiesUserController {
  constructor(private readonly findAllProxiesUserService: FindAllProxiesUserService) {}

  @Get()
  async handle(@Query() dto: FindAllProxiesUserDto) {
    return await this.findAllProxiesUserService.handle(dto);
  }
}
