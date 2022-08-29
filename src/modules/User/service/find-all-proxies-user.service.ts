import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FindAllProxiesUserDto } from '../dto/find-all-proxies-user.dto';
import { User } from '../entity/user.entity';

@Injectable()
export class FindAllProxiesUserService {
  constructor(@InjectRepository(User) private repo: Repository<User>) {}

  async handle(dto: FindAllProxiesUserDto) {
    const user = await this.repo.findOne({
      where: {
        id: dto.id,
      },
    });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    const users = await this.repo.query(
      `
        SELECT name, ST_Distance(location, ST_SetSRID(ST_MakePoint($1, $2), 4326)) AS distance
        FROM "user"
        WHERE ST_DWithin(location, ST_SetSRID(ST_MakePoint($1, $2), 4326), $3)
        AND id != $4
        ORDER BY distance
      `,
      [user.location.coordinates[0], user.location.coordinates[1], dto.radius, dto.id],
    );
    return users;
  }
}
