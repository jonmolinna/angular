import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VariablesComponent } from './variables/variables.component';
import { AhoraRoutingModule } from './ahora-routing.module';

@NgModule({
  declarations: [VariablesComponent],
  imports: [CommonModule, AhoraRoutingModule],
})
export class AhoraModule {}
