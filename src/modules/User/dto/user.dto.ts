import { IsLatitude, IsLongitude, IsString } from 'class-validator';
export class UserDto {
  @IsString()
  name: string;

  @IsLatitude()
  latitude: string;

  @IsLongitude()
  longitude: string;
}
