import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ContactUsService } from './contact-us.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {
  errors: any;
  constructor(private fb: FormBuilder,private emailService: ContactUsService, private router: Router ){}

  contactUs = this.fb.group({
    name: [``,[Validators.required, Validators.minLength(5)]],
    subject: [``, [Validators.required, Validators.maxLength(20)]],
    email: [``,[Validators.email, Validators.required]],
    query: [``, [Validators.required, Validators.minLength(15)]]
  })  

  sendEmail(){
  let user = {
    name : this.contactUs.get(`name`)?.value,
    email : this.contactUs.get(`email`)?.value,
    subject : this.contactUs.get(`subject`)?.value,
    query:  this.contactUs.get(`query`)?.value,
  } 
  this.emailService.sendEmail(user).subscribe({
    

      next: () => this.router.navigate([`/`]),
      error:(err)=>   {
        this.errors = err.error?.error
      }

    })
  
    this.contactUs.reset()
  
  }
}
