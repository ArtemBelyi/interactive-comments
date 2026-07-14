import { Injectable, signal, inject } from '@angular/core';
import { User } from '../models/user';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthState, AuthData } from './auth-types';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private jwtHelper = inject(JwtHelperService);
  private http = inject(HttpClient);

  private user = signal<User | null>(null);

  constructor() {
    this.initializeUser();
  }

  private initializeUser(): void {
    const token = localStorage.getItem('token');
    if (token && !this.jwtHelper.isTokenExpired(token)) {
      const decoded = User.decodeToken(token);
      console.log(decoded);
    }
  }

  public login(data: AuthData): Observable<AuthState> {
    const headers = new HttpHeaders({ "Content-type": "application/json" });
    const options = { headers: headers };

    return this.http.post<AuthState>(`${environment.baseUrl}/login`, data, options);
  }
}
