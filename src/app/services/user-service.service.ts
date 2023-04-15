import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';



const API_URL = 'http://localhost:9000/api/test/';//this url will need to be adjusted

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http: HttpClient) { }

  getPublicContent(): Observable<any> {
    let header : HttpHeaders = new HttpHeaders();
    header.append("accept", "text/json");
    header.append("Access-Control-Allow-Origin", "*");
    return this.http.get(API_URL + 'all', { responseType: 'text', headers:header });
  }

  getUserBoard(): Observable<any> {
    let header : HttpHeaders = new HttpHeaders();
    header.append("accept", "text/json");
    header.append("Access-Control-Allow-Origin", "*");

    return this.http.get(API_URL + 'user', { responseType: 'text', headers:header });
  }
  
  getRetailerBoard(): Observable<any> {
    let header : HttpHeaders = new HttpHeaders();
    header.append("accept", "text/json");
    header.append("Access-Control-Allow-Origin", "*");
    return this.http.get(API_URL + 'mod', { responseType: 'text', headers:header });
  }

  getAdminBoard(): Observable<any> {
    let header : HttpHeaders = new HttpHeaders();
    header.append("accept", "text/json");
    header.append("Access-Control-Allow-Origin", "*");
    return this.http.get(API_URL + 'admin', {responseType: 'text', headers:header });
  }


}
