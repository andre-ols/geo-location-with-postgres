import { Module, ValidationPipe } from '@nestjs/common';
import { APP_PIPE } from '@nestjs/core';
import { setupDatabase } from './config/database';
import { setupEnvironment } from './config/environment';
import { UserModule } from './modules/User/user.module';

@Module({
  imports: [setupDatabase(), setupEnvironment(), UserModule],
  providers: [
    {
      provide: APP_PIPE,
      useValue: new ValidationPipe({ whitelist: true, stopAtFirstError: true }),
    },
  ],
})
export class AppModule {}
