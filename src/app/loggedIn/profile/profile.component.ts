import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IProduct } from 'src/app/interfaces/products';
import { IUser } from 'src/app/interfaces/user';
import { ProfileService } from './profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: IUser|undefined
  products: IProduct[] | any
  isEmpty : boolean = false
  errors: any;

  constructor(private profileService: ProfileService, private router: Router){
  }

  ngOnInit(): void {
    this.user = undefined
    this.products = undefined
    this.profileService.getUserDetails().subscribe({
      next: (user) => {
        this.user = user

        this.products = user.products

        if(this.products.length == 0){
          this.isEmpty = true
        }
        
      }
    })
  }
  deleteProduct(_id: any){
   
    this.profileService.deleteProduct(_id).subscribe({
      next: () => 
        this.router.navigate([`/products`]),
      error: (error) => {
        this.errors = error.error?.error
      }

    })
  }
  
}
