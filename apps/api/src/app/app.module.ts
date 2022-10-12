import { BackendCoreModule } from '@elewa/backend/core';
import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [BackendCoreModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
