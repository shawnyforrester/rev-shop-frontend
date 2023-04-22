import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../Models/user';


const AUTH_API = 'http://localhost:9000/';


@Injectable({
  providedIn: 'root',
})
export class AuthServiceService {

 
  constructor(private http: HttpClient) { }
  /**Handles the login() POST request */
  login(user: User): Observable<any> {
    let header : HttpHeaders = new HttpHeaders();
    header.append("accept", "text/json");
    header.append("Access-Control-Allow-Origin", "*");
    return this.http.post(AUTH_API + 'login', user, {headers: header}
    );
  }
  /**Handles the register() POST request */
  register(user: User): Observable<any> {
    let header : HttpHeaders = new HttpHeaders();
    header.append("accept", "text/json");
    header.append("Access-Control-Allow-Origin", "*");
    return this.http.post(
      AUTH_API + 'registration',
      user, {headers: header}     
    );
  }
  /**Handles the logout() POST request */
  logout(): Observable<any> {
    let header : HttpHeaders = new HttpHeaders();
    header.append("accept", "text/json");
    header.append("Access-Control-Allow-Origin", "*");    
    return this.http.post(AUTH_API + 'logout', {}, {headers: header});
  }
}