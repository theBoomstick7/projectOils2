import { Component } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { IUser } from './interfaces/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projectOils';
   data:any
  constructor(private userService: AuthService){
      if(localStorage.getItem('accessToken')) {
        this.userService.getUserData().subscribe() 
       }
    }

    

  }
