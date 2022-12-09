import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {

  constructor(private fb: FormBuilder){}

  contactUs = this.fb.group({
    name: [``,[Validators.required, Validators.minLength(5)]],
    email: [``,[Validators.email, Validators.required]],
    query: [``, [Validators.required, Validators.minLength(15)]]
  })  

  onSubmit(){
    console.log(this.contactUs.value)
    this.contactUs.reset()
  
  }
}
