import { User as UserType, UserToken } from './types';
import { JwtHelperService } from '@auth0/angular-jwt';

const JwtService = new JwtHelperService();

export interface User extends UserType {}

export class User implements UserType {

  constructor(token: string) {}

  static decodeToken(token: string): UserToken | null {
    return JwtService.decodeToken<UserToken>(token);
  }

  get id(): string {
    return this.id;
  }

  get email(): string {
    return this.email;
  }

  get username(): string {
    return this.username;
  }
}