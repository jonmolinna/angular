import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VariablesComponent } from './variables/variables.component';
import { AntesRoutingModule } from './antes-routing.module';

@NgModule({
  declarations: [VariablesComponent],
  imports: [CommonModule, AntesRoutingModule],
})
export class AntesModule {}
