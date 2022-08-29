import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  // column location type geography point
  @Column({ type: 'geography', spatialFeatureType: 'POINT' })
  location: string;
}
