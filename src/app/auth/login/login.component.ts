
import { Component } from '@angular/core';
import {FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { errorHandler } from 'src/app/shared/errors';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  errors : any
  

  constructor(private fb : FormBuilder, private userService : AuthService, private router : Router) {}

  loginForm = this.fb.group ({
    email: [``, [Validators.required, Validators.email]],
    password: [``, [Validators.required]]
  })

  login(): void {
   this.userService.login(this.loginForm.value).subscribe({
    next: () => this.router.navigate([`/`]),
    error:(err) => {
      this.errors = errorHandler(err.error?.error) 
    }
  })

    this.loginForm.reset()
    
  }
}
