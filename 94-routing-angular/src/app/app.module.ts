import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ContactComponent } from './contact/contact.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CicleLifeComponent } from './cicle-life/cicle-life.component';
import { DniComponent } from './cicle-life/dni/dni.component';
import { ProductsApiComponent } from './products-api/products-api.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductsApiDetailComponent } from './products-api-detail/products-api-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    ContactComponent,
    ProductDetailComponent,
    CicleLifeComponent,
    DniComponent,
    ProductsApiComponent,
    ProductsApiDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
