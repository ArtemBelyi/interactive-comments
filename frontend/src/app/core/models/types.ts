export interface UserToken {
  sub: string;
  email: string;
  name: string;
  iat?: number;
  exp?: number;
}

export interface User {
  id: string;
  username: string;
  email: string;
}