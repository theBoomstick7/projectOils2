import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './core/home/home.component';
import { ProductsComponent } from './products/allProducts/products.component';
import { CreateProductComponent } from './products/create-product/create-product.component';
import { ShopsComponent } from './shops/shops.component';

const routes: Routes = [
  {
    path:``,
    pathMatch: 'full',
    component: HomeComponent
  },
  {
    path: `products`,
    component: ProductsComponent
  },
  {
    path: `shops`,
    component: ShopsComponent
  },
  {
    path: `contact-us`,
    component: ContactUsComponent
  },
  {
    path: `create`,
    component:CreateProductComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
