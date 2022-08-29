import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsNumber } from 'class-validator';

export class FindAllProxiesUserDto {
  @ApiProperty({
    description: 'User id',
    example: '1',
  })
  @IsNumber()
  @Type(() => Number)
  id: number;

  @ApiProperty({
    description: 'Radius in meters',
    example: '1000',
  })
  @IsNumber()
  @Type(() => Number)
  radius: number;
}
