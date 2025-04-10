import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { HttpHeaders } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { LoginResponse } from '../Models/LoginResponse';
import { Employed } from '../Models/Employed';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authEndpoint = 'api/auth/login';
  private tokenKey = 'jwt_token';

  constructor(private apiService:ApiService) { }

  login(correo: string, password: string): Observable<any> {
    return this.apiService.auth<LoginResponse>(this.authEndpoint, correo, password).pipe(
      tap(response => {
        if (response.token) {
          localStorage.setItem(this.tokenKey, response.token);
          localStorage.setItem('user', JSON.stringify(response.user));
        }
      })
    );
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  getUser(): Employed | null {
    const userJson = localStorage.getItem('user');
    return userJson ? JSON.parse(userJson) : null;
  }

  logout(): void {
    localStorage.removeItem(this.tokenKey);
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }
  
}
