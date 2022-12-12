import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { IQuery } from '../interfaces/query';

const API_CONTACT_US_EMAIL = `http://localhost:3000/contact-us`

@Injectable({
  providedIn: 'root'
})
export class ContactUsService {

  query : null | IQuery | undefined
  constructor(private http: HttpClient, private router: Router) { }

  sendEmail(data: {}){
    return this.http.post<IQuery>(`${API_CONTACT_US_EMAIL}`, data)
  }
}
