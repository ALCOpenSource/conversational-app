import { BackendAuthModule } from '@elewa/backend/auth';
import { BackendEntitiesModule } from '@elewa/backend/entities';
import { BackendTypeormModule } from '@elewa/backend/typeorm';
import { Module } from '@nestjs/common';

@Module({
  imports: [BackendEntitiesModule, BackendTypeormModule, BackendAuthModule],
  controllers: [],
  providers: [],
  exports: [],
})
export class BackendCoreModule {}
