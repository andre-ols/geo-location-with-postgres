import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsLatitude, IsLongitude, IsNumber } from 'class-validator';

export class FindAllUserByLocationDto {
  @ApiProperty({
    description: 'User latitude',
    example: '-33.865',
  })
  @IsLatitude()
  @Type(() => Number)
  latitude: number;

  @ApiProperty({
    description: 'User longitude',
    example: '151.2093',
  })
  @IsLongitude()
  @Type(() => Number)
  longitude: number;

  @ApiProperty({
    description: 'Radius in meters',
    example: '1000',
  })
  @IsNumber()
  @Type(() => Number)
  radius: number;
}
