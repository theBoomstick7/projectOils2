import { Component, OnInit } from '@angular/core';
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
  constructor(private profileService: ProfileService){}

  ngOnInit(): void {
    this.user = undefined
    this.products = undefined
    this.profileService.getUserDetails().subscribe({
      next: (user) => {
        this.user = user
        this.products = user.products
        console.log(this.products)
        if(this.products.length == 0){
          this.isEmpty = true
        }
      }
    })
  }
}
