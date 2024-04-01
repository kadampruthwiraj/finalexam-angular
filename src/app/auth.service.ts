import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { SignUpRequestBean } from './register/register.component';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public static userId: string = '';
  private baseUrl = 'http://localhost:8999';

  constructor(private http: HttpClient) {}

  login(credentials: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, credentials);
  }

  register(user: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/signup`, user);
  }


  getUserDetails(user:any): Observable<SignUpRequestBean> {
    return this.http.get<SignUpRequestBean>(this.baseUrl+"/getUserDetails?email="+user);
  }
}
