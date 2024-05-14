import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VariablesComponent } from './variables/variables.component';
import { AhoraRoutingModule } from './ahora-routing.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [VariablesComponent, HomeComponent],
  imports: [CommonModule, AhoraRoutingModule],
})
export class AhoraModule {}
