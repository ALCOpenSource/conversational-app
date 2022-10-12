import { Controller } from '@nestjs/common';
import { BackendAuthService } from './backend-auth.service';

@Controller('auth')
export class BackendAuthController {
  constructor(private readonly authService: BackendAuthService) {}
}
