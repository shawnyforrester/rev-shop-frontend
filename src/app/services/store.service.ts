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
  let headers: HttpHeaders = new HttpHeaders();
  headers = headers.append('accept', 'application/json');
  headers = headers.append('Access-Control-Allow-Origin', 'http://localhost:4200');
  return this.httpClient.get<Array<Product>>(
    `http://localhost:9000/inventory${
      category ? '/category/' + category : ''
    }?sort=${sort}&limit=${limit}`, { headers: headers, withCredentials: true }
  );
}



  getAllCategories(): Observable<Array<string>> {
    let headers : HttpHeaders = new HttpHeaders();
    headers = headers.append("accept", "application/json");
    headers = headers.append("Access-Control-Allow-Origin", 'http://localhost:4200');
    return this.httpClient.get<Array<string>>(
      `http://localhost:9000/inventory/categories`, {headers: headers, withCredentials: true}
    );
  }

  addProduct(product: Product): Observable<Product> {
  let headers: HttpHeaders = new HttpHeaders();
  headers = headers.append('Content-Type', 'application/json');
  headers = headers.append('Accept', 'application/json');
  headers = headers.append('Access-Control-Allow-Origin', 'http://localhost:4200');
  return this.httpClient.post<Product>('http://localhost:9000/inventory', product, { headers: headers });
}

    deleteProductByTitle(title: string): Observable<any> {
  const headers = new HttpHeaders({
    'Accept': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
  });
 const encodedTitle = encodeURIComponent(title);
 return this.httpClient.delete<Product>(`http://localhost:9000/inventory/${encodedTitle}`, { headers: headers, withCredentials: true });
}


}