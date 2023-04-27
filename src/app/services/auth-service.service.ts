import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../Models/user';
import { StorageServiceService } from 'src/app/services/storage-service.service';


const AUTH_API = 'http://ec2-35-84-46-133.us-west-2.compute.amazonaws.com:9000/';


@Injectable({
  providedIn: 'root',
})
export class AuthServiceService {

  constructor(private http: HttpClient,private storageService: StorageServiceService) { }

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
    return this.http.post(AUTH_API + 'registration',user, {responseType:'text'});
  }

  /**Handles the logout() POST request */
  logout(): Observable<any> {
    let header : HttpHeaders = new HttpHeaders();
    header.append("accept", "text/json");
    header.append("Access-Control-Allow-Origin", "*");
    return this.http.post(AUTH_API + 'logout', {}, {headers: header});
  }

  changePassword(id : number, user:User): Observable<any>{
     let header : HttpHeaders = new HttpHeaders();
     header.append("accept", "text/json");
     header.append("Access-Control-Allow-Origin", "*");
     return this.http.patch(`${AUTH_API}login/${id}`, user,{headers: header});
     }
}
