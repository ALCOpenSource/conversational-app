import { Module } from '@nestjs/common';
import { BackendAuthService } from './backend-auth.service';

@Module({
  imports: [],
  controllers: [],
  providers: [BackendAuthService],
  exports: [],
})
export class BackendAuthModule {}
