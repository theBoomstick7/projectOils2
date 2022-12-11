import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  
  constructor(private userService: AuthService, private router: Router) {}
  
  get isLogged(): boolean{
    if(this.userService.user){
      return true
    }else {
      return false
    }
  }

}
