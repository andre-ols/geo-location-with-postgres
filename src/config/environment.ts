import { ConfigModule } from '@nestjs/config';

export const setupEnvironment = () => {
  return ConfigModule.forRoot({
    isGlobal: true,
    envFilePath: '.env.development',
  });
};
