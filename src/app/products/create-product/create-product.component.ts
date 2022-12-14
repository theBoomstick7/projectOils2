import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { ProductsService } from '../products.service'
@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent {

  urlPattern = /(https:\/\/)([[:alnum:]]).+/ig
  errors: string | undefined = undefined;
  constructor(private fb : FormBuilder, private productService: ProductsService, private router : Router){}

  createProductForm = this.fb.group({
    title : [``, [Validators.required, Validators.maxLength(24)]],
    imageUrl: [``, [ Validators.required, Validators.pattern(/^https:\/\/[a-zA-Z\d]\S+$/ig)]],
    description: [``, [Validators.required, Validators.minLength(10)]],
    price : [``, [Validators.required, Validators.min(0.1)]]
  })

  createProduct(){
    this.productService.createProduct(this.createProductForm.value).subscribe({
      next: () => this.router.navigate([`/products`]),
      error: (err) => {
        this.errors = err.error?.error
      }
    })
   
    
    
    this.createProductForm.reset()
  }
}

