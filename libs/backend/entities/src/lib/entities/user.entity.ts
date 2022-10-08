import { Column, Entity } from 'typeorm';
import { BaseModel } from './base.entity';

@Entity()
export class User extends BaseModel {
  @Column({
    name: 'first_name',
    nullable: true,
  })
  firstName: string;

  @Column({
    name: 'last_name',
    nullable: true,
  })
  lastName: string;

  @Column({
    name: 'email',
    nullable: true,
  })
  email: string;

  @Column({
    name: 'password',
  })
  password: string;

  @Column({
    name: 'email_verification_token',
  })
  emailVerificationToken: string;

  @Column({
    name: 'email_verified_at',
  })
  emailVerifiedAt: Date;
}
