import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { IProduct} from '../interfaces/products'


const API_URL = `http://localhost:3000`
@Injectable({
  providedIn: 'root'
})


export class ProductsService {

 
  constructor(private http : HttpClient, private router : Router) { }

  createProduct(data : {}){
    return this.http.post(`${API_URL}/create`, data)
  }
  getAllProducts(){
    return this.http.get<IProduct[]>(`${API_URL}/products`)
  }
}
