import { RegisterUserInput } from '../dtos/register.dto';

export class RegisterUserCommand {
  constructor(public readonly input: RegisterUserInput) {}
}
