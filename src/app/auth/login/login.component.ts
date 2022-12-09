
import { Component } from '@angular/core';
import {FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  constructor(private fb: FormBuilder) {}

  loginForm = this.fb.group ({
    email: [``, [Validators.required, Validators.email]],
    password: [``, [Validators.required]]
  })

  onSubmit() {
    console.log(this.loginForm.value)
    this.loginForm.reset()
    
  }
}
