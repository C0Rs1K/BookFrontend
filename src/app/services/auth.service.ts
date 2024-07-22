import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private apiUrl = 'https://localhost:7130/api/identity';

  constructor(private http: HttpClient) {}

  register(user: User): Observable<string> {
    return this.http.post<string>(`${this.apiUrl}/register`, user);
  }

  login(user: User): Observable<string> {
    return this.http.post<string>(`${this.apiUrl}/login?useSessionCookies=true`, user);
  }
}
