import { Component } from '@angular/core';
import {FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
 
  constructor(private fb: FormBuilder) {}
  
  registerForm = this.fb.group({
    email: [``,[Validators.required, Validators.email]],
    username: [``, [Validators.required, Validators.minLength(6)]],
    password: [``, [Validators.required, Validators.minLength(6)]],
    rePass: [``, [Validators.required,]]
  })


  onSubmit(){
    console.log(this.registerForm.value)
    this.registerForm.reset()
  }
}
