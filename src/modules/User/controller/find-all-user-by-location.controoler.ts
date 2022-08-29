import { Controller, Get, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { FindAllUserByLocationDto } from '../dto/find-all-user-by-location.dto';
import { FindAllUserByLocationService } from '../service/find-all-user-by-location.service';

@ApiTags('user')
@Controller('user-by-location')
export class FindAllUserByLocationController {
  constructor(private readonly findAllUserByLocationService: FindAllUserByLocationService) {}

  @Get()
  async handle(@Query() dto: FindAllUserByLocationDto) {
    return await this.findAllUserByLocationService.handle(dto);
  }
}
