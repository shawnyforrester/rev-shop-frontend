import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API = 'http://localhost:8080/api/auth/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root',
})
export class AuthServiceService {
  constructor(private http: HttpClient) {}
  /**Handles the login() POST request */
  login(username: string, password: string): Observable<any> {
    return this.http.post(
      AUTH_API + 'signin',
      {
        username,
        password,
      },
      httpOptions
    );
  }
  /**Handles the register() POST request */
  register(name: string, username: string, email: string, 
    password: string, number: string, address: string, role: string): Observable<any> {
    return this.http.post(
      AUTH_API + 'signup',
      {
        name,
        username,
        email,
        password,
        number,
        address,
        role

      },
      httpOptions
    );
  }
  /**Handles the logout() POST request */
  logout(): Observable<any> {
    return this.http.post(AUTH_API + 'signout', { }, httpOptions);
  }
}