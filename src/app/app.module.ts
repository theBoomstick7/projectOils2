import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModuleModule } from './core/core-module.module';
import { ProductsComponent } from './products/allProducts/products.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ShopsComponent } from './shops/shops.component';
import { AuthModule } from './auth/auth.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CreateProductComponent } from './products/create-product/create-product.component'
import { AppInterceptor,AppInterceptorProvider } from './app.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ContactUsComponent,
    ShopsComponent,
    CreateProductComponent,
  ],
  imports: [
    BrowserModule,
    CoreModuleModule,
    AppRoutingModule,
    AuthModule,
    ReactiveFormsModule,
    HttpClientModule
    
  ],
  providers: [AppInterceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
