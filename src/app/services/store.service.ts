import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../Models/product.model';
import { Injectable } from '@angular/core';


const STORE_BASE_URL = 'https://localhost:9000';


@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor(private httpClient: HttpClient) { }

  getAllProducts(
    limit = '36',
    sort = 'desc',
    category?: string
  ): Observable<Array<Product>> {
    let headers : HttpHeaders = new HttpHeaders();
    headers = headers.append("accept", "text/json");
    headers = headers.append("Access-Control-Allow-Origin", "http://localhost:4200");
    return this.httpClient.get<Array<Product>>(
      `api/products${
        category ? '/category/' + category : ''
      }?sort=${sort}&limit=${limit}`, {headers: headers, withCredentials: true}
    );
  }

  getAllCategories(): Observable<Array<string>> {
    let headers : HttpHeaders = new HttpHeaders();
    headers = headers.append("accept", "text/json");
    headers = headers.append("Access-Control-Allow-Origin", "http://localhost:4200");
    return this.httpClient.get<Array<string>>(
      `api/products/categories`, {headers: headers, withCredentials: true}
    );
  }

//   getAllProducts(
//   limit = '12',
//   sort = 'desc',
//   category?: string
// ): Observable<Array<Product>> {
//   return this.httpClient.get<Array<Product>>(
//     `/api/products${category ? '/category/' + category : ''}?sort=${sort}&limit=${limit}`
//   );
// }

// getAllCategories(): Observable<Array<string>> {
//   return this.httpClient.get<Array<string>>(
//     `/api/products/categories`
//   );
// }
}