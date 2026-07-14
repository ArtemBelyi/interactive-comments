import { User } from '../models/user';

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
}

export interface AuthData {
  username: string;
  password: string;
}