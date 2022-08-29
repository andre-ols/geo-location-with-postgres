import { Controller, Get, Query } from '@nestjs/common';
import { FindUsersByRadiusDto } from '../dto/find-users-by-radius.dto';
import { FindAllUserByLocationService } from '../service/find-users-by-location.service';

@Controller('user-by-radius')
export class FindAllUserByRadiusController {
  constructor(private readonly findAllUserByLocationService: FindAllUserByLocationService) {}

  @Get()
  async handle(@Query() dto: FindUsersByRadiusDto) {
    return await this.findAllUserByLocationService.handle(dto);
  }
}
