import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ContactComponent } from './contact/contact.component';
import { CicleLifeComponent } from './cicle-life/cicle-life.component';
import { ProductsApiComponent } from './products-api/products-api.component';
import { ProductsApiDetailComponent } from './products-api-detail/products-api-detail.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'products/:productId', component: ProductDetailComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'cicle', component: CicleLifeComponent },
  { path: 'api', component: ProductsApiComponent },
  { path: 'api/:productId', component: ProductsApiDetailComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
