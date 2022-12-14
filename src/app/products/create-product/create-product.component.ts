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

  errors: string | undefined = undefined;
  constructor(private fb : FormBuilder, private productService: ProductsService, private router : Router){}

  createProductForm = this.fb.group({
    title : [``, [Validators.required, Validators.maxLength(12)]],
    imageUrl: [``, [ Validators.required]],
    description: [``, [Validators.required, Validators.minLength(10)]]
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

