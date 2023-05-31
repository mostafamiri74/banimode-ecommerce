import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  public setUser() {
    localStorage.setItem('token_type', 'Bearer');
    localStorage.setItem('expries_in', '16537295');
    localStorage.setItem('access_token', 'NJhsHG6TFC5kdTEM34cMzAxFtfs34x');
    localStorage.setItem('refresh_token', 'eNUSyyhn3kmIJ64jnUH56DMsfNUhN4');
  }

  public get token(): string | null {
    return localStorage.getItem('access_token');
  }
}
