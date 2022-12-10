import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class RestApiService {
  apiUrl = 'http://localhost:3000/api'
  constructor(private http: HttpClient) { }


  httpOptions = {
    headers: new HttpHeaders({
    'Content-Type': `application/json`
    })
  }

  getProducts(){}
}
