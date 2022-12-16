import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { IProduct } from 'src/app/interfaces/products';
import { IUser } from 'src/app/interfaces/user';

const API_URL = `http://localhost:3000`

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient, private router: Router) { }

getUserDetails(){
  return this.http.get<IUser>(`${API_URL}/profile`)
}

}
