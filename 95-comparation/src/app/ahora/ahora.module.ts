import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VariablesComponent } from './variables/variables.component';
import { AhoraRoutingModule } from './ahora-routing.module';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { TagsComponent } from './tags/tags.component';
import { HijoComponent } from './tags/hijo/hijo.component';
import { InputsComponent } from './inputs/inputs.component';
import { ChildComponent } from './inputs/child/child.component';
import { CondicionalComponent } from './inputs/condicional/condicional.component';
import { RequiredComponent } from './inputs/required/required.component';
import { TransformComponent } from './inputs/transform/transform.component';
import { ExampleComponent } from './inputs/example/example.component';
import { ProductsComponent } from './inputs/example/products/products.component';
import { CartComponent } from './inputs/example/cart/cart.component';
import { CartListComponent } from './inputs/example/cart-list/cart-list.component';
import { DependenciasComponent } from './dependencias/dependencias.component';
import { ExamplesComponent } from './dependencias/examples/examples.component';
import { ProductsListComponent } from './dependencias/examples/products-list/products-list.component';
import { ShoppingComponent } from './dependencias/examples/shopping/shopping.component';
import { ShoppingListsComponent } from './dependencias/examples/shopping-lists/shopping-lists.component';

@NgModule({
  declarations: [
    VariablesComponent,
    HomeComponent,
    TagsComponent,
    HijoComponent,
    InputsComponent,
    ChildComponent,
    CondicionalComponent,
    RequiredComponent,
    TransformComponent,
    ExampleComponent,
    ProductsComponent,
    CartComponent,
    CartListComponent,
    DependenciasComponent,
    ExamplesComponent,
    ProductsListComponent,
    ShoppingComponent,
    ShoppingListsComponent,
  ],
  imports: [CommonModule, AhoraRoutingModule, FormsModule],
})
export class AhoraModule {}
