import { Component } from '@angular/core';
import { IProduct } from 'src/app/interfaces/products';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products: IProduct[] | undefined;

  constructor(private productService: ProductsService){
    this.getAllProducts()
  }

  getAllProducts(){
    this.productService.getAllProducts().subscribe({
      next: (products) =>{
        this.products = products
        
      }
    })
  }



}
