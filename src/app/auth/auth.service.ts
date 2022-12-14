import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { tap } from 'rxjs';
import { IUser } from '../interfaces/user';


const AUTH_API_URL = 'http://localhost:3000' // Change this to environment directory later


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: null | IUser | undefined
  constructor(private http: HttpClient, private router: Router) { }

  get isLogged(): boolean {
    if(this.user){
      return true
    }else 
    {
      return false
    }
  }   

  register(data: {}){
    return this.http.post<IUser>(`${AUTH_API_URL}/register`,data).pipe(
      tap((user) => {
        this.user = user
        localStorage.setItem(`accessToken`, this.user.accessToken)
      })
    )
  }
  login(data: {}){
    return this.http.post<IUser>(`${AUTH_API_URL}/login`, data). pipe(
      tap((user) => {
        this.user = user
        localStorage.setItem(`accessToken`, this.user.accessToken)
      })
    )
  }
  logout(){
    this.user = null
    return localStorage.removeItem(`accessToken`)
  }

}
