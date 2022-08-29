import { ApiProperty } from '@nestjs/swagger';
import { IsLatitude, IsLongitude, IsString } from 'class-validator';
export class UserDto {
  @ApiProperty({
    description: 'User name',
    example: 'John Doe',
  })
  @IsString()
  name: string;

  @ApiProperty({
    description: 'User latitude',
    example: '-33.865',
  })
  @IsLatitude()
  latitude: string;

  @ApiProperty({
    description: 'User longitude',
    example: '151.2093',
  })
  @IsLongitude()
  longitude: string;
}
