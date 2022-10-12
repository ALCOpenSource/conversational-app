export class VerifyEmailCommand {
  constructor(public readonly email: string, public readonly token: string) {}
}
