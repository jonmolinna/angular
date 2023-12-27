import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgIfComponent } from './ng-if/ng-if.component';
import { NgForComponent } from './ng-for/ng-for.component';
import { NgAtributoComponent } from './ng-atributo/ng-atributo.component';

@NgModule({
  declarations: [AppComponent, NgIfComponent, NgForComponent, NgAtributoComponent],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
