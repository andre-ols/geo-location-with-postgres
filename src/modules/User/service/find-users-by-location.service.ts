import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FindUsersByRadiusDto } from '../dto/find-users-by-radius.dto';
import { User } from '../entity/user.entity';

@Injectable()
export class FindAllUserByLocationService {
  constructor(@InjectRepository(User) private repo: Repository<User>) {}

  async handle(dto: FindUsersByRadiusDto) {
    const users = await this.repo.query(
      `
        SELECT name, ST_Distance(location, ST_SetSRID(ST_MakePoint($1, $2), 4326)) AS distance
        FROM "user"
        WHERE ST_DWithin(location, ST_SetSRID(ST_MakePoint($1, $2), 4326), $3)
        ORDER BY distance
      `,
      [dto.longitude, dto.latitude, dto.radius],
    );
    return users;
  }
}
