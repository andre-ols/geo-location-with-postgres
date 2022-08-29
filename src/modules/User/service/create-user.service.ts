import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserDto } from '../dto/user.dto';
import { User } from '../entity/user.entity';

@Injectable()
export class CreateUserService {
  constructor(@InjectRepository(User) private repo: Repository<User>) {}

  async handle(dto: UserDto) {
    this.repo.query(
      `
        INSERT INTO "user" (name, location)
        VALUES ($1, ST_SetSRID(ST_MakePoint($2, $3), 4326))
        `,
      [dto.name, dto.longitude, dto.latitude],
    );
    return {
      message: 'User created successfully',
    };
  }
}
