import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactUsComponent } from './loggedIn/contact-us/contact-us.component';
import { HomeComponent } from './core/home/home.component';
import { ProductsComponent } from './products/allProducts/products.component';
import { CreateProductComponent } from './products/create-product/create-product.component';
import { ProfileComponent } from './loggedIn/profile/profile.component';

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
    path: `contact-us`,
    component: ContactUsComponent
  },
  {
    path: `create`,
    component:CreateProductComponent
  },
  {
    path: `profile`,
    component:ProfileComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
