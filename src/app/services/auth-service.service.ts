import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Buyer } from '../Models/Buyer';


const AUTH_API = 'http://localhost:9000/';


@Injectable({
  providedIn: 'root',
})
export class AuthServiceService {

 
  constructor(private http: HttpClient) { }
  /**Handles the login() POST request */
  login(buyer: Buyer): Observable<any> {
    let header : HttpHeaders = new HttpHeaders();
    header.append("accept", "text/json");
    header.append("Access-Control-Allow-Origin", "*");
    return this.http.post(AUTH_API + 'login', buyer, {headers: header}
    );
  }
  /**Handles the register() POST request */
  register(buyer: Buyer): Observable<any> {
    let header : HttpHeaders = new HttpHeaders();
    header.append("accept", "text/json");
    header.append("Access-Control-Allow-Origin", "*");
    return this.http.post(
      AUTH_API + 'registration',
      buyer, {headers: header}     
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