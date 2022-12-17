import { Component } from '@angular/core';
import {FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { errorHandler } from 'src/app/shared/errors';
import { passwordValidator } from 'src/app/shared/validator';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  
  errors: any;
  
 
  constructor(private fb: FormBuilder, private userService: AuthService, private router: Router) {}
  
  registerForm = this.fb.group({
    email: [``,[Validators.required, Validators.email]],
    username: [``, [Validators.required, Validators.minLength(4), Validators.maxLength(10)]],
    password: [``, [Validators.required, Validators.minLength(6)]],
    rePass: [``, [Validators.required,passwordValidator]]
  })


  register(): void{
    this.userService.register(this.registerForm.value).subscribe
      ({

        next: () => this.router.navigate([`/`]),
        error:(err)=>   {
          this.errors = errorHandler(err.error?.error) 
        }

      })
  
    this.registerForm.reset()
    
  }    
}
